export interface Tool {
  name: string;
  category: string;
  blurb: string;
  link: string;
}

export interface Industry {
  name: string;
  icon: string;
  tools: Tool[];
}

export const categories = [
  "Communication",
  "Scheduling",
  "Documents",
  "Automation",
  "AI Assist",
  "CRM"
];

export const industries: Industry[] = [
  {
    name: "Home Services",
    icon: "hammer",
    tools: [
      { name: "ServiceTitan", category: "Scheduling", blurb: "Enterprise-grade dispatch, work orders, estimates, invoicing.", link: "https://www.servicetitan.com" },
      { name: "Housecall Pro", category: "Scheduling", blurb: "All-in-one scheduling, estimates, payments for field teams.", link: "https://www.housecallpro.com" },
      { name: "Jobber", category: "Scheduling", blurb: "Quoting, routing, and job tracking for small field ops.", link: "https://getjobber.com" },
      { name: "Podium", category: "Communication", blurb: "SMS reviews, messaging, and payments with customers.", link: "https://www.podium.com" },
      { name: "NiceJob", category: "Communication", blurb: "Automated review collection and social proof.", link: "https://get.nicejob.com" },
      { name: "CompanyCam", category: "Documents", blurb: "Job photos, annotations, and shareable progress galleries.", link: "https://companycam.com" },
      { name: "QuickBooks Online", category: "Documents", blurb: "Invoices, payments, and basic automation for bookkeeping.", link: "https://quickbooks.intuit.com" },
      { name: "Zapier", category: "Automation", blurb: "Connects estimates, invoices, CRM, and follow-ups.", link: "https://zapier.com" },
      { name: "ChatGPT", category: "AI Assist", blurb: "Draft quotes, scope-of-work, customer emails, FAQs.", link: "https://chat.openai.com" },
      { name: "Perplexity", category: "AI Assist", blurb: "Fast research for materials, codes, and supplier options.", link: "https://www.perplexity.ai" }
    ]
  },
  {
    name: "Legal",
    icon: "scale",
    tools: [
      { name: "CiteSight", category: "AI Assist", blurb: "Validates legal citations to protect case integrity.", link: "https://www.citesight.com" },
      { name: "Clio", category: "Documents", blurb: "Practice management, document automation, billing.", link: "https://www.clio.com" },
      { name: "Lawmatics", category: "CRM", blurb: "Legal-specific CRM and intake automation.", link: "https://www.lawmatics.com" },
      { name: "DocuSign", category: "Documents", blurb: "E-signatures and workflows for retainer agreements.", link: "https://www.docusign.com" },
      { name: "Casetext CoCounsel", category: "AI Assist", blurb: "AI legal assistant for research and drafting.", link: "https://casetext.com/cocounsel" },
      { name: "Smokeball", category: "Documents", blurb: "Document assembly and time tracking for small firms.", link: "https://www.smokeball.com" },
      { name: "Zapier", category: "Automation", blurb: "Intake to matter creation to tasking handoffs.", link: "https://zapier.com" },
      { name: "Calendly", category: "Scheduling", blurb: "Client scheduling with intake routing and buffers.", link: "https://calendly.com" }
    ]
  },
  {
    name: "Insurance",
    icon: "shield",
    tools: [
      { name: "AgencyBloc", category: "CRM", blurb: "Insurance CRM, commissions, and workflow automations.", link: "https://www.agencybloc.com" },
      { name: "Vertafore AMS360", category: "CRM", blurb: "Agency management with policy and accounting.", link: "https://www.vertafore.com/products/ams360" },
      { name: "Hi Marley", category: "Communication", blurb: "SMS-first client communications for insurance teams.", link: "https://www.himarley.com" },
      { name: "DocuSign", category: "Documents", blurb: "E-sign for policy docs and renewals.", link: "https://www.docusign.com" },
      { name: "Microsoft Power Automate", category: "Automation", blurb: "Automate carrier downloads and CRM updates.", link: "https://powerautomate.microsoft.com" },
      { name: "Zapier", category: "Automation", blurb: "Quoting requests to CRM tasks to follow-ups.", link: "https://zapier.com" },
      { name: "ChatGPT", category: "AI Assist", blurb: "Draft cover emails, FAQs, claims status replies.", link: "https://chat.openai.com" },
      { name: "Calendly", category: "Scheduling", blurb: "Prospect and renewal meeting scheduling.", link: "https://calendly.com" }
    ]
  },
  {
    name: "Real Estate",
    icon: "home",
    tools: [
      { name: "kvCORE", category: "CRM", blurb: "All-in-one platform with websites, CRM, and automation.", link: "https://www.insiderealestate.com/kvcore" },
      { name: "Follow Up Boss", category: "CRM", blurb: "Lead routing, pipelines, and automated follow-ups.", link: "https://www.followupboss.com" },
      { name: "Matterport", category: "Documents", blurb: "3D tours for listings and property walkthroughs.", link: "https://matterport.com" },
      { name: "Canva", category: "Documents", blurb: "AI-assisted marketing materials and social graphics.", link: "https://www.canva.com" },
      { name: "Zapier", category: "Automation", blurb: "Lead sources to CRM to text/email sequences.", link: "https://zapier.com" },
      { name: "ChatGPT", category: "AI Assist", blurb: "Property descriptions, open house scripts, ad copy.", link: "https://chat.openai.com" },
      { name: "Calendly", category: "Scheduling", blurb: "Showings and consults with buffer logic.", link: "https://calendly.com" },
      { name: "DocuSign", category: "Documents", blurb: "Offer, counter, and disclosure e-sign flows.", link: "https://www.docusign.com" }
    ]
  },
  {
    name: "Accounting & Finance",
    icon: "calculator",
    tools: [
      { name: "QuickBooks Online", category: "Documents", blurb: "Accounting with rules to automate categorization.", link: "https://quickbooks.intuit.com" },
      { name: "Xero", category: "Documents", blurb: "Cloud accounting with bank feeds and add-ons.", link: "https://www.xero.com" },
      { name: "Dext", category: "Documents", blurb: "Receipt and invoice capture with OCR extraction.", link: "https://dext.com" },
      { name: "Hubdoc", category: "Documents", blurb: "Fetch statements and auto-file supporting docs.", link: "https://www.hubdoc.com" },
      { name: "Rossum", category: "Documents", blurb: "Intelligent Document Processing for AP/AR.", link: "https://rossum.ai" },
      { name: "Make.com", category: "Automation", blurb: "Multi-step workflows across finance stacks.", link: "https://www.make.com" },
      { name: "Perplexity", category: "AI Assist", blurb: "Research changing tax rules and policies fast.", link: "https://www.perplexity.ai" },
      { name: "ChatGPT", category: "AI Assist", blurb: "Summarize P&L narratives and client explanations.", link: "https://chat.openai.com" },
      { name: "Calendly", category: "Scheduling", blurb: "Review calls and onboarding slots with buffers.", link: "https://calendly.com" }
    ]
  },
  {
    name: "Healthcare & Wellness",
    icon: "activity",
    tools: [
      { name: "SimplePractice", category: "Scheduling", blurb: "Scheduling, EHR, and billing for small practices.", link: "https://www.simplepractice.com" },
      { name: "IntakeQ", category: "Documents", blurb: "HIPAA-friendly intake forms and patient packets.", link: "https://www.intakeq.com" },
      { name: "DeepScribe", category: "AI Assist", blurb: "Ambient AI medical scribe for clinical notes.", link: "https://www.deepscribe.ai" },
      { name: "Hathr.ai", category: "AI Assist", blurb: "HIPAA-compliant internal chat and RAG.", link: "https://www.hathr.ai" },
      { name: "DocuSign", category: "Documents", blurb: "Consent forms and administrative e-sign.", link: "https://www.docusign.com" },
      { name: "Zapier", category: "Automation", blurb: "New patient intake to EHR to reminders.", link: "https://zapier.com" },
      { name: "Calendly", category: "Scheduling", blurb: "Appointment scheduling with triage routing.", link: "https://calendly.com" },
      { name: "ChatGPT", category: "AI Assist", blurb: "Non-clinical messaging drafts and policy summaries.", link: "https://chat.openai.com" }
    ]
  }
];
