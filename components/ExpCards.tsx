"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Aug 2024 — Present",
    currentPosition: "Frontend Developer & Web3 Integrator",
    place: "Stealth AI Startup",
    previousPositions: [""],
    description:
      "Building responsive interfaces and Web3 integrations for an AI-driven financial platform. Implementing React/TypeScript architecture with Web3.js for seamless blockchain interactions.",
    skills: [
      "React",
      "TypeScript",
      "Web3.js",
      "Ethers.js",
      "Tailwind CSS",
      "Smart Contract Integration",
      "AI APIs",
    ],
  },
  {
    timeline: "Mar 2024 — Present",
    currentPosition: "Frontend Developer",
    place: "Vela Exchange",
    previousPositions: ["Junior Frontend Developer"],
    description:
      "Developing and optimizing the decentralized trading interface using React and Web3 technologies. Implemented real-time price charts and wallet connection flows that improved user retention by 35%.",
    skills: [
      "React",
      "Web3.js",
      "Chart.js",
      "Performance Optimization",
      "WebSockets",
      "DeFi Protocols",
    ],
  },
  {
    timeline: "Feb 2022 — Present",
    currentPosition: "Frontend Lead & Co-founder",
    place: "Swoop Exchange",
    previousPositions: [""],
    description:
      "Architected the frontend for a decentralized exchange aggregator, handling $10M+ volume. Built the meta-aggregation UI with React/TypeScript and integrated 15+ liquidity sources.",
    skills: [
      "TypeScript",
      "React",
      "Redux",
      "Web3.js",
      "DEX APIs",
      "Aggregation Algorithms",
      "Technical Leadership",
    ],
  },
  {
    timeline: "Jan 2020 — Feb 2022",
    currentPosition: "Frontend Developer",
    place: "Freelance",
    previousPositions: ["UI Developer"],
    description:
      "Delivered 20+ client projects including e-commerce platforms and web applications. Specialized in converting designs to responsive, accessible React components.",
    skills: [
      "React",
      "JavaScript",
      "Responsive Design",
      "Accessibility",
      "Client Communication",
      "Project Delivery",
    ],
  },
  {
    timeline: "Sep 2018 - Dec 2019",
    currentPosition: "Web Development Intern",
    place: "Tech Solutions Inc.",
    previousPositions: [""],
    description:
      "Built and maintained company websites and internal tools. Gained foundational experience in modern JavaScript frameworks and version control.",
    skills: [
      "JavaScript",
      "HTML/CSS",
      "Git",
      "Bootstrap",
      "Problem-Solving",
      "Debugging",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs font-mono"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="https://mail.google.com/mail/u/0/#search/amirxonkidirbayev0%40gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Technical Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
