# Memory — ai_evals_expert

> Generated: 2026-07-07 09:39:18  
> Total memories: **8**  
> Breakdown: fact: 2, preference: 1, context: 1, learning: 2, observation: 1, artifact: 1

---

## Instructions

*Standing rules, constraints, and guidelines to always follow.*

*No memories of this type.*

---

## Facts

*Verified information, project status, and established truths.*

### Legacy LLM benchmarks are saturated (MMLU ~88%+), ...

Legacy LLM benchmarks are saturated (MMLU ~88%+), pushing the field to harder tests (GPQA Diamond, SWE-Bench, LiveCodeBench) and human-preference arenas (LMSYS Chatbot Arena, ~5M votes). A single leaderboard number is decreasingly informative.

*Confidence: 0.9 | Status: active | Created: 2026-07-07T12:00:28 | Tags: `ai-evals`, `benchmarks`, `saturation`, `mmlu`*

### AI eval tooling is consolidating into an 'AI obser...

AI eval tooling is consolidating into an 'AI observability' product category: Braintrust (CI/CD-gated evals), Arize Phoenix (open-source), Promptfoo (red-teaming), Galileo (small-model hallucination detection), pydantic-evals/Logfire, Cosmos. PostHog is wiring LLM-judge evals into its product billing flow.

*Confidence: 0.9 | Status: active | Created: 2026-07-07T12:00:32 | Tags: `ai-evals`, `tooling`, `braintrust`, `observability`*

---

## Decisions

*Architectural choices, approach selections, and their rationale.*

*No memories of this type.*

---

## Goals

*Objectives, targets, and milestones to track progress.*

*No memories of this type.*

---

## Commitments

*Promises, obligations, and TODOs that need follow-through.*

*No memories of this type.*

---

## Preferences

*User and entity preferences for personalization.*

### Jay banned the word 'quietly' in his writing voice...

Jay banned the word 'quietly' in his writing voice - considers it an AI slop marker; added to jay-smith-voice.md banned list

*Confidence: 1 | Status: active | Created: 2026-07-07T12:55:37*

---

## Relationships

*Entity connections, team context, and collaboration patterns.*

*No memories of this type.*

---

## Context

*Session summaries, status updates, and conversation state.*

### Reviewed ai-evals-pillar-post.md against jay-smith...

Reviewed ai-evals-pillar-post.md against jay-smith-voice.md; proposed edits (banned 'not X, it's Y' pivots at demo/production gap + failing-privately + agent-failure lines, softener 'I'd like to suggest', 'it turns out', parenthetical cleanup); edits pending Jay's approval, not yet applied

*Confidence: 0.95 | Status: active | Created: 2026-07-07T12:50:23*

---

## Events

*Important conversations, milestones, and temporal occurrences.*

*No memories of this type.*

---

## Learnings

*Knowledge acquired from experience, corrections, and insights.*

### AI eval measurement humility is the dominant 2026 ...

AI eval measurement humility is the dominant 2026 theme: UK AI Security Institute (AISI) published that fixed-compute-budget evals systematically understate frontier capability because token budgets run out on the longest tasks first. Recommendation: report capability as a curve vs inference-time compute, not a single fixed-budget score.

*Confidence: 0.9 | Status: active | Created: 2026-07-07T12:00:23 | Tags: `ai-evals`, `aisi`, `test-time-compute`, `benchmarks`*

### LLM-as-a-judge is the default eval screening layer...

LLM-as-a-judge is the default eval screening layer (80-90% human agreement at far lower cost) but reliability-fragile: 2026 research (RAND, Adaline) finds frontier judges exceed 50% error on bias benchmarks; consistency breaks on formatting/paraphrasing/verbosity. Mitigations: explicit rubric steps, strict pass/fail mode, cross-check vs human labels.

*Confidence: 0.9 | Status: active | Created: 2026-07-07T12:00:30 | Tags: `ai-evals`, `llm-as-judge`, `reliability`, `bias`*

---

## Observations

*Patterns noticed, behavioral notes, and recurring themes.*

### On the ground, most people's 'eval' is informal se...

On the ground, most people's 'eval' is informal self-critique prompting - e.g. asking a model to 'spin up an independent panel review for an outsider perspective' or to call out uncertainties instead of feigning confidence (r/ClaudeAI, 55/47 upvotes). Wide gap between formal eval research and everyday practice.

*Confidence: 0.8 | Status: active | Created: 2026-07-07T12:00:34 | Tags: `ai-evals`, `practice`, `reddit`, `self-critique`*

---

## Artifacts

*Tool outputs, files, reports, and external references.*

### Source: /last30days AI Evaluations research run 20...

Source: /last30days AI Evaluations research run 2026-07-07, 63 items across Reddit/HN/GitHub/TikTok/Instagram/YouTube (X missing that run; X later enabled via Firefox cookies). Raw file: ~/Documents/Last30Days/ai-evaluations-raw-v3.md

*Confidence: 1 | Status: active | Created: 2026-07-07T12:00:37 | Tags: `ai-evals`, `last30days`, `research-run`, `source-file`*

---

## Errors

*Failure records, bugs, and lessons learned from mistakes.*

*No memories of this type.*

---

*End of memory export.*
