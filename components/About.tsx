"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          <span className="text-white">
            I transform complex technologies into intuitive interfaces.
          </span>{" "}
          Specializing at the intersection of Web3, and Finance, I build
          accessible frontend solutions that bridge users with cutting-edge
          technologies.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Currently, I'm developing frontend architectures for a stealth AI
          startup revolutionizing financial interactions. As a core contributor
          at{" "}
         
          , I implement Web3 integrations for this decentralized perpetual
          trading platform.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          My work has supported systems processing billions in transaction
          volume. I champion developer experience that feels human—creating
          React/Vue applications that serve as natural extensions of Web3
          capabilities, balancing technical precision with user-friendly
          design principles.
        </p>
      </div>
    </section>
  );
}