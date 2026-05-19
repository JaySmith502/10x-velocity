#!/usr/bin/env node
/**
 * build_recap.cjs — Build a polished meeting-recap .docx from a recap JSON.
 *
 * Usage:
 *   node build_recap.cjs <input.json> <output.docx>
 *
 * Input JSON schema:
 * {
 *   "title": "Acme Facility Management",                // required
 *   "subtitle": "Kickoff Call — Meeting Recap",         // optional
 *   "meta": {
 *     "preparedBy": "Jay Smith, 10x Velocity",          // optional
 *     "date": "April 14, 2026 [to confirm]",            // optional
 *     "attendees": [                                    // optional, array of strings
 *       "Marcus — Director of Operations, Acme",
 *       "Diane — Accounting, Acme [name to confirm]"
 *     ]
 *   },
 *   "actions": [                                        // optional; if present, rendered as a table up top
 *     { "action": "Send capabilities one-pager", "owner": "Jay (10x Velocity)", "due": "EOW — Fri, Apr 17" }
 *   ],
 *   "sections": [                                       // optional; flexible body content
 *     {
 *       "heading": "Context & Discussion",              // H1
 *       "paragraph": "Optional intro paragraph.",       // optional paragraph directly under the H1
 *       "bullets": ["Optional bullets directly under the H1"],
 *       "subsections": [                                // optional H2s
 *         { "heading": "Objective", "paragraph": "..." },
 *         { "heading": "Current State", "bullets": ["...", "..."] }
 *       ]
 *     }
 *   ],
 *   "openQuestions": ["..."],                           // optional, rendered as an H1 with bullets
 *   "itemsToConfirm": ["..."],                          // optional, rendered as an H1 with bullets
 *   "nextSteps": "Paragraph describing next steps."     // optional, rendered as an H1 with a paragraph
 * }
 *
 * Design rules embedded here:
 *   - US Letter (12240 x 15840 DXA), 1" margins
 *   - Arial 11pt body, black headings at #1A1F2C (matches 10x Velocity brand)
 *   - Action table: 3 cols (action / owner / due), dark header row
 *   - Lists use LevelFormat.BULLET (never unicode bullets in text)
 *   - Tables use WidthType.DXA (never PERCENTAGE — breaks in Google Docs)
 *   - Cell shading uses ShadingType.CLEAR (SOLID renders black on some platforms)
 */

const fs = require("fs");
const path = require("path");

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType, ShadingType,
} = require("docx");

// -------- CLI --------
const [, , inputPath, outputPath] = process.argv;
if (!inputPath || !outputPath) {
  console.error("Usage: node build_recap.js <input.json> <output.docx>");
  process.exit(1);
}

const recap = JSON.parse(fs.readFileSync(inputPath, "utf8"));

// -------- Style tokens --------
const BRAND_DARK = "1A1F2C";  // velocity-dark
const BORDER_GRAY = "CCCCCC";
const MUTED_TEXT = "555555";

const border = { style: BorderStyle.SINGLE, size: 4, color: BORDER_GRAY };
const borders = { top: border, bottom: border, left: border, right: border };

// -------- Helpers --------
const emptyLine = () => new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } });

const para = (text, opts = {}) =>
  new Paragraph({
    children: [new TextRun({ text, ...opts })],
    spacing: { after: 120 },
  });

const bullet = (text) =>
  new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    children: [new TextRun(text)],
    spacing: { after: 80 },
  });

const h1 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text })],
  });

const h2 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun({ text })],
  });

// -------- Action items table --------
function buildActionsTable(actions) {
  const colWidths = [5040, 2160, 2160]; // sums to 9360 = content width
  const tableWidth = colWidths.reduce((a, b) => a + b, 0);

  const cell = (text, width, isHeader) =>
    new TableCell({
      borders,
      width: { size: width, type: WidthType.DXA },
      margins: { top: 100, bottom: 100, left: 140, right: 140 },
      shading: isHeader ? { fill: BRAND_DARK, type: ShadingType.CLEAR } : undefined,
      children: [
        new Paragraph({
          children: [
            new TextRun(
              isHeader ? { text, bold: true, color: "FFFFFF" } : { text }
            ),
          ],
        }),
      ],
    });

  const headerRow = new TableRow({
    tableHeader: true,
    children: [
      cell("Action", colWidths[0], true),
      cell("Owner", colWidths[1], true),
      cell("Due", colWidths[2], true),
    ],
  });

  const bodyRows = actions.map(
    (a) =>
      new TableRow({
        children: [
          cell(a.action || "", colWidths[0], false),
          cell(a.owner || "", colWidths[1], false),
          cell(a.due || "", colWidths[2], false),
        ],
      })
  );

  return new Table({
    width: { size: tableWidth, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [headerRow, ...bodyRows],
  });
}

// -------- Body builder --------
function buildChildren(recap) {
  const out = [];

  // Title block
  out.push(
    new Paragraph({
      style: "Title",
      children: [new TextRun({ text: recap.title || "Meeting Recap" })],
    })
  );
  if (recap.subtitle) {
    out.push(
      new Paragraph({
        children: [new TextRun({ text: recap.subtitle, size: 28, color: MUTED_TEXT })],
        spacing: { after: 240 },
      })
    );
  }

  // Meta block
  const meta = recap.meta || {};
  if (meta.preparedBy) out.push(para(`Prepared by: ${meta.preparedBy}`, { bold: true }));
  if (meta.date) out.push(para(`Meeting date: ${meta.date}`));
  if (meta.attendees && meta.attendees.length) {
    out.push(
      new Paragraph({
        children: [new TextRun({ text: "Attendees:", bold: true })],
        spacing: { after: 60 },
      })
    );
    meta.attendees.forEach((a) => out.push(bullet(a)));
    out.push(emptyLine());
  }

  // Actions first
  if (recap.actions && recap.actions.length) {
    out.push(h1("Action Items"));
    out.push(buildActionsTable(recap.actions));
    out.push(emptyLine());
  }

  // Flexible body sections
  if (recap.sections && recap.sections.length) {
    recap.sections.forEach((section) => {
      out.push(h1(section.heading));
      if (section.paragraph) out.push(para(section.paragraph));
      if (section.bullets) section.bullets.forEach((b) => out.push(bullet(b)));
      if (section.subsections) {
        section.subsections.forEach((sub) => {
          out.push(h2(sub.heading));
          if (sub.paragraph) out.push(para(sub.paragraph));
          if (sub.bullets) sub.bullets.forEach((b) => out.push(bullet(b)));
        });
      }
    });
  }

  // Open Questions
  if (recap.openQuestions && recap.openQuestions.length) {
    out.push(h1("Open Questions"));
    recap.openQuestions.forEach((q) => out.push(bullet(q)));
  }

  // Items to Confirm
  if (recap.itemsToConfirm && recap.itemsToConfirm.length) {
    out.push(h1("Items to Confirm"));
    recap.itemsToConfirm.forEach((i) => out.push(bullet(i)));
  }

  // Next Steps
  if (recap.nextSteps) {
    out.push(h1("Next Steps"));
    out.push(para(recap.nextSteps));
  }

  return out;
}

// -------- Document --------
const doc = new Document({
  creator: "10x Velocity",
  title: recap.title || "Meeting Recap",
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } }, // 11pt
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: BRAND_DARK },
        paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: BRAND_DARK },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 },
      },
      {
        id: "Title", name: "Title", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 40, bold: true, font: "Arial", color: BRAND_DARK },
        paragraph: { spacing: { before: 0, after: 80 } },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "\u2022",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 }, // US Letter
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: buildChildren(recap),
    },
  ],
});

// -------- Write --------
Packer.toBuffer(doc)
  .then((buffer) => {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, buffer);
    console.log(`Wrote: ${outputPath}`);
  })
  .catch((err) => {
    console.error("Build failed:", err);
    process.exit(1);
  });
