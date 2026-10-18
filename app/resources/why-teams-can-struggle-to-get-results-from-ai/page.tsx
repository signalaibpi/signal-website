import type { Metadata } from "next";
import Link from "next/link";
import { ArticleImagePlaceholder } from "@/components/resources/ArticleImagePlaceholder";

export const metadata: Metadata = {
  title: "Why teams can struggle to get results from AI — Signal",
  description:
    "Individual success with AI does not always translate into better business performance.",
};

export default function WhyTeamsStruggleWithAiPage() {
  return (
    <article className="w-full">
      <header className="w-full bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-12 pb-10 sm:pt-16 sm:pb-14">
          <Link
            href="/resources"
            className="mb-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-primary-hover"
          >
            <span aria-hidden="true">←</span> All resources
          </Link>
          <div className="max-w-4xl flex flex-col gap-5">
            <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
              Resources
            </span>
            <h1 className="font-display text-[34px] leading-[42px] sm:text-[52px] sm:leading-[60px] tracking-[-0.03em] text-on-surface font-bold">
              Why teams can struggle to get results from AI
            </h1>
            <p className="font-body text-lg sm:text-xl leading-relaxed text-on-surface-variant">
              Individual success with AI does not always translate into better business performance.
            </p>
          </div>
        </div>
      </header>
      <div className="max-w-[1000px] mx-auto w-full px-5 md:px-10 lg:px-16 py-8 sm:py-12">
        <ArticleImagePlaceholder className="aspect-[16/8] sm:aspect-[16/7]" />
      </div>
      <div className="max-w-[800px] mx-auto w-full px-5 md:px-10 pb-16 sm:pb-24">
        <div className="flex flex-col gap-6 font-body text-base sm:text-lg leading-[1.75] text-on-surface-variant">
          <p>
            Many medium-sized organisations I see take a “let a 1,000 flowers bloom” approach to AI implementation: give everybody a Claude or Copilot subscription and let them figure out what to use AI for because they know best.
          </p>
          <p>
            That approach leads to some impressive individual success stories, but often also runs into issues. Productivity goes up for some people, but team work, trust and quality can suffer. The organisation risks slowly turning into a collection of productive individuals and losing its ability to benefit from scale through team work, process and learning.
          </p>
          <p>
            Managing AI centrally can address some of these problems, but can also slow progress and weaken frontline ownership. AI isn’t a traditional IT system, but it isn’t another team member either. Both approaches have strengths and limitations.
          </p>

          <h2 className="pt-4 font-display text-2xl sm:text-3xl leading-tight font-bold text-on-surface">
            AI as a team member
          </h2>
          <p>
            Employee-led AI use has some similarities to managing a team member: individuals decide what to delegate to AI and assess the results. Every employee can “hire” one or many AI agents to do part of their job and they “manage” their own AI agents.
          </p>
          <p>
            That approach has benefits. Employees are motivated to use AI and results can be visible quickly because individuals can often adapt how they use AI without waiting for a central team. Accountability is clear: if an employee uses AI to resolve a customer complaint, they remain responsible for how the complaint is handled.
          </p>
          <p>AI as a team member also has downsides though:</p>
          <ul className="list-disc pl-6 space-y-3 marker:text-primary">
            <li><strong className="text-on-surface">Data and processes</strong> aren’t adapted to AI because individuals typically can’t change those by themselves.</li>
            <li><strong className="text-on-surface">Institutional learning</strong> is limited because there is little incentive for employees to share their knowledge.</li>
            <li><strong className="text-on-surface">Policies</strong> are hard to enforce because there is no natural place to measure and enforce them.</li>
            <li><strong className="text-on-surface">Token usage</strong> can be high when employees lack the tools, knowledge or incentive to optimise it.</li>
            <li><strong className="text-on-surface">ROI</strong> is hard to measure because there are no defined targets and metrics. Benefits are defined by and accrue to individuals and not necessarily the organisation as a whole.</li>
          </ul>

          <h2 className="pt-4 font-display text-2xl sm:text-3xl leading-tight font-bold text-on-surface">
            AI as IT system
          </h2>
          <p>
            Some companies, often larger companies with sizable teams doing repetitive tasks such as customer service, claims handling or case management, take the opposite approach: they manage AI as an IT system. Implementation goes through the same phases as other IT systems where the organisation approves the business case and budget, product teams define requirements and implement the system and the application then gets rolled out.
          </p>
          <p>
            This approach can address many of the issues that AI as a team member has: the target ROI is defined in the business case, token usage can be managed, policies can be enforced in the software and data can be adjusted to the needs of the AI.
          </p>
          <p>AI as IT system also has downsides though:</p>
          <ul className="list-disc pl-6 space-y-3 marker:text-primary">
            <li><strong className="text-on-surface">Accountability</strong> for AI outputs can be unclear. When something goes wrong, frontline teams may blame the AI system while IT teams blame how it was used. Without clear ownership of the outcome, each can see the failure as the other’s responsibility.</li>
            <li><strong className="text-on-surface">Speed of adaptation</strong> can be lower than for AI as a team member when every change has to go through the traditional roadmap planning and prioritisation process. This is especially problematic in the first few iterations of the AI where the team is still experimenting with what works. When the first few iterations don’t quite work yet, (and they often don’t) and fixes are slow to come through, the project may lose momentum and die.</li>
            <li><strong className="text-on-surface">Employee motivation</strong> can be lower: because employees don’t get to choose what they use AI for, their motivation may suffer. For traditional IT systems users typically also don’t get to choose, but for AI motivation is a bigger problem. AI also requires more from users than traditional IT systems: they are not just users, they also have to document their knowledge, adjust their processes and manage the quality of AI outputs. When they don’t see personal benefits and their job is on the line, it can be harder to secure that effort. Employees need a reason to invest in making the change work.</li>
          </ul>

          <h2 className="pt-4 font-display text-2xl sm:text-3xl leading-tight font-bold text-on-surface">
            How to manage AI
          </h2>
          <p>
            The organisations that get the most value from AI tend to combine employee initiative with central support.
          </p>
          <p>
            To secure employee initiative, these organisations tend to emphasise target setting and accountability.
          </p>
          <p>
            Teams in these high-performing organisations often set their own ambitious and motivating targets for AI. Team level goals could be things like “improving customer response times by 40%” or “closing month-end in 1 day”. These goals can reduce the number of employees needed, but they give teams a business achievement to work towards rather than a headcount reduction target. Closing month-end in one day is something a finance team can take pride in, even if they understand that it may eventually require fewer people. In high-performing organisations, senior leadership often plays an important role in encouraging teams to set ambitious but motivating AI transformation targets.
          </p>
          <p>
            Teams in these high-performing organisations typically take full responsibility for the AI outputs they use, just as they take responsibility for work done by their employees. They work to make sure they understand what the AI is and is not good at, supervise AI outputs accordingly and take responsibility for improving performance. Technical faults may need IT support, but the frontline team still owns the outcome. High-performing organisations tend to use AI policy to define constraints (redlines for the “what”) but they leave it to teams to implement those rules (the “how”).
          </p>
          <p>
            Central support tends to focus on tools, data and process adaptation.
          </p>
          <p>
            Teams need more than a Claude or Copilot licence: they need tools to access reliable information, automate work safely and control costs. High-performing organisations typically also make sure every team can use these tools, either through training or by giving them direct access to trained engineers. Not every team requires every tool, but having a library of tools allows teams to move faster, scale the AI application and keep costs down while giving the organisation insight, security and control.
          </p>
          <p>
            The quality of data is another element that high performing organisations tend to pay close attention to. Without comprehensive, accessible and up-to-date data, AIs cannot perform well. This doesn’t just include operational data like customer records or transaction data, it also includes knowledge about strategy, targets, processes and exceptions. Maintaining high quality data is not just a technical but also an organisational issue. It is time consuming and, in today’s organisations, often has no immediate reward for employees. Sales managers that struggle to get their team to update the CRM system will recognise this problem. Because the benefits of maintaining high-quality data are long-term while the costs are immediate and organizationally painful, data is often a senior management level priority in high performing organisations.
          </p>
          <p>
            Process redesign is the third element that high performing organisations tend to pay close attention to. According to McKinsey’s 2026 survey, nearly three-quarters of AI “high performers” reported fundamentally redesigning their workflows around AI, compared to one quarter of other respondents<sup><a href="#source-1" className="text-primary underline decoration-primary/40 underline-offset-2">[1]</a></sup>. Today’s business processes are designed around people and traditional software. To get the most from AI, it is important for an organisation to review and where necessary redesign processes and tasks to make sure the split of work between AI, humans and traditional software is optimised. For example, if AI drafts a customer response in seconds but it still waits two days for approval, faster drafting will do little to improve response times.
          </p>

          <h2 className="pt-4 font-display text-2xl sm:text-3xl leading-tight font-bold text-on-surface">
            Where to start
          </h2>
          <p>
            You do not need to be world-class in every aspect of AI. What improvement will make the biggest difference for you depends on where your organisation is today and what your objectives are.
          </p>
          <p>
            The best place to start therefore is to define what targets you want to achieve and what problems you want to solve, and to measure where your organisation currently is. That allows you to identify what is holding you back most and what you therefore need to fix first.
          </p>
          <p>
            Signal starts every engagement with a clear definition of targets and problems to solve. It then uses its Business AI Diagnostic methodology to quickly build a comprehensive and evidence based picture of the current situation across the full range of potential root causes. Signal’s AI Team Planning services help your teams agree priorities, ownership, resources and measures of success. Through its AI Team Delivery services, Signal then works closely with your teams to implement priority improvements and track progress with the goal for teams to become self-sufficient in continuous improvement.
          </p>
          <p>
            If your AI adoption has stalled and you want to understand what is holding it back, contact us to discuss how to identify root causes and where to focus next.
          </p>
          <p id="source-1" className="border-t border-outline-variant/50 pt-5 text-sm">
            [1] Source: <a className="text-primary underline decoration-primary/40 underline-offset-2" href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai#/" target="_blank" rel="noreferrer">McKinsey, The state of AI</a>.
          </p>
        </div>
      </div>
    </article>
  );
}
