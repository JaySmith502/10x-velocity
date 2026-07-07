# Everyone Got the Chatbot. Nobody Checked Its Work.

*The first post in a series about AI evaluation for organizations that have actual jobs to do.*

---

Somewhere in your organization right now, an AI is answering a question incorrectly with total confidence, and the person reading the answer is nodding along.

I don't know which question. Neither do you. That's the point.

Over the past two years, businesses of every size executed the same playbook: buy the licenses, run the lunch-and-learn, celebrate the adoption metrics. "87% of our team uses AI weekly" went into the board deck.

Someone got promoted. And in all of that motion, almost nobody built the muscle that determines whether any of it works: the ability to look at what the AI actually did and decide, systematically, whether it did it well.

We measured adoption. We never measured performance. Which is a strange choice, because we'd never accept it anywhere else in the business.

## The employee you never review

Here's the thought experiment I keep offering people, and it lands every time because it's not really a thought experiment.

Imagine you hired an employee eighteen months ago. Smart, fast, tireless, works weekends, you wish you had 10 more of them. You've never once reviewed their work. No check-ins, no QA, no sampling their output. You know they're *busy*; their activity logs are spectacular. But you have no idea whether what they produce is right. When someone asks how they're performing, you say, "People seem to like them."

You would never run a business this way. You'd never run a *team* this way. And yet this is precisely the arrangement most organizations have with their AI: unlimited output, zero performance review, and a manager (you) who's decided that vibes are a QA strategy.

Vibes are how you choose a restaurant.

## "It worked in the demo"

Of course it did. Demos always work. That's what demos are *for*.

A demo is a performance staged on friendly terrain: the questions were chosen by someone who knew the answers, the data was clean, and everyone in the room wanted it to succeed. Production is the opposite of that. Production is a customer typing in fragments at 11pm, a PDF scanned sideways in 2013, a question that's technically about your refund policy but is actually about a divorce.

The gap between demo and production is an information gap. In the demo, you knew what right looked like. In production, nobody's checking, so the failure stays private.

Chatbots made this survivable. When a chatbot is wrong, a human is still in the loop to be annoyed, correct it, or stop trusting it. That erosion is its own cost, but a slow one. The blast radius of a bad answer is one bad answer.

That grace period is ending.

## Agents don't get the same forgiveness

The next phase, the one every vendor is currently selling you, is agentic: AI that doesn't just answer but *acts*. It schedules the appointment, updates the record, routes the ticket, sends the email, moves the money adjacent to the thing that moves the money.

A wrong chatbot produces a bad paragraph. A wrong agent produces a bad *event*: one with downstream consequences, an audit trail, and occasionally a lawyer. And agents fail mid-chain: at step six of ten, in a way the final output smooths right over. The demo looks identical to the disaster until you inspect the steps.

Which means the question "is our AI actually good at this?" is about to convert from philosophical to operational. Every organization deploying agents will need an answer. Most are planning to improvise one after the first incident. There's a cheaper sequence.

## The unglamorous discipline with the intimidating name

The discipline is called *evals*, short for evaluations, and the AI industry has done an outstanding job of making it sound like something you need a research team for. Leaderboards, benchmarks, acronyms with percentage signs. Ignore all of it. None of that is about *your* system doing *your* work.

Evals, for a real organization, are four moves. You could explain them to anyone who's ever managed a person, because that's what they are:

**1. Look at what it actually did.** Not the summary. Not the dashboard. The actual record of a real interaction, end to end: every step, every decision, every tool it touched. In the trade this record is called a *trace*, and reading traces is to AI what walking the floor is to operations. Shockingly few people have ever read one for a system they depend on.

**2. Find the patterns in the failures.** Read twenty or thirty traces and take notes like a manager, not a fan. You will find things. Everyone finds things. The failures will cluster: the same misunderstanding, the same missing context, the same step that wobbles. This is called *error analysis*, and it is the single highest-return hour available in AI right now.

**3. Write down what "good" means.** Specific to your business, in plain language, before you automate anything. "Quotes the correct price from the current sheet." "Never promises a timeline sales hasn't approved." If you can't articulate the standard, no tool can enforce it. And neither, for the record, could a human employee.

**4. Check it automatically, then keep checking.** Once you know your failure patterns and your standards, you can build checks that grade new interactions against them. Some are just code; some use another AI as a first-pass reviewer *you've verified agrees with your judgment*. Now everything you change gets tested against reality instead of hope. That loop is the entire flywheel: look, find, define, verify, repeat. It's a performance review process. It just runs continuously.

That's it. That's the discipline. Everything else is tooling and diligence.

## The part the enterprise vendors would rather skip

Here's my heresy, offered at no charge: this capability is not gated behind an ML team, a platform contract, or a consultant with a slide about maturity models.

The instrumentation that records those traces is open source. I use Arize Phoenix, which is free and self-hostable, and there are others. The error analysis is a spreadsheet and a free afternoon. The judgment about what "good" means was never going to come from a vendor anyway, because it lives in your head and your team's. You're the only ones who know what right looks like in your business.

Which produces an uncomfortable and genuinely level playing field: a fifteen-person contractor who reads their traces will run a better AI operation than an enterprise that bought the premium platform and never looks at it. Evaluation is one of the few areas of AI where diligence beats budget outright. The big firms can't sell you that, so they mostly don't mention it.

## Start here, this week

No roadmap, no committee. One assignment:

**Pull ten real interactions from whatever AI system your organization leans on most, and read them end to end.** Not skim. Read, with a notepad. Score each one: would you have accepted this work from a person you manage?

Two things will happen. You'll find at least one thing that makes you wince. Everyone does; wincing is the industry's true onboarding ritual. And you won't be able to un-ask the question this post is about. That's the outcome I'm after.

Because the organizations that win the next phase of AI won't be the ones that adopted first. Adoption was the easy part. Everyone got the chatbot. The winners will be the ones who can look at their systems and *know*, with evidence, on purpose, repeatedly, that the work is good. Then make it better, on purpose, again.

That's the whole game. This series is about how to play it: real failures dissected step by step, tools that don't require a research budget, and what I'm learning as I build evaluation systems for actual businesses. The kind with customers, regulators, and no appetite for surprises.

The AI checked out fine in the demo. Everything does.

---

*Next in the series: what a "trace" actually looks like, and the anatomy of a production failure nobody noticed for three weeks.*
