"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Mail, MessageCircleIcon } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import useActiveSection from "@/hooks/useActiveSection";

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "contact",
  ]);

  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "active w-16 bg-foreground h-0.5"
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-foreground"
          : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0">
        {/* Avatar Section */}
        <div className="w-full flex lg:items-center lg:justify-start">
          <Avatar className="w-24 lg:w-36 h-auto border-2 border-primary bg-secondary hover:scale-105 transition-transform duration-300">
            <AvatarImage src="./avatar.png" alt="Amirxon's profile picture" />
            <AvatarFallback className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-1 border-primary text-2xl lg:text-4xl">
              AM
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-2">
          <h1 className="text-[42px] font-bold lg:text-start">
            Hi, I'm Amirxon 👋
          </h1>
          <h2 className="text-xl lg:text-start bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Frontend Developer | Web3 & AI Specialist
          </h2>
          <p className="text-lg lg:text-start text-muted-foreground">
            I create user-friendly, fast, and modern web interfaces with 
            JavaScript/React, Web3 technologies, and AI integrations.
          </p>
        </div>

        <nav className="lg:hidden flex mt-4">
          <ul className="flex flex-row flex-wrap gap-4 w-full">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className={`text-sm font-medium ${
                    activeSection === item.href.substring(1)
                      ? "text-foreground underline"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {navItems.map((item) => {
            const { indicatorClass, textClass } = getNavItemClasses(item.href);
            return (
              <li key={item.name} className="group">
                <a href={item.href} className="py-3 flex items-center">
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="flex flex-row gap-4 mt-6 lg:mt-0">
        <Button variant="outline" size="icon" asChild>
          <a
            href="https://github.com/kidirbayevamirxon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a
            href="https://web.telegram.org/k/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <MessageCircleIcon className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a
            href="https://mail.google.com/mail/u/0/#search/amirxonkidirbayev0%40gmail.com?compose=new"
            aria-label="Email"
          >
            <Mail className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <ModeToggle />
      </ul>
    </header>
  );
}