"use client";

import Profile from "@/app/_components/sidebar/profile";
import SideNav from "@/app/_components/sidebar/side-nav";
import ExternalLinks from "@/app/_components/sidebar/external-links";
import { ScrollArea } from "@/components/ui/scroll-area";
import About from "@/app/_components/main/about";
import Career from "@/app/_components/main/career";
import Achievements from "@/app/_components/main/achievements";
import Projects from "@/app/_components/main/projects";
import { Separator } from "@/components/ui/separator";
import React, { useRef, useState } from "react";
import { sections, SectionsPosY } from "@/lib/definitions";
import Image from "next/image";
import {
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { FloatingDockItem } from "@/components/ui/floating-dock";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { ToggleThemeButton } from "@/components/ui/toggle-theme-button";

const items: Omit<FloatingDockItem, "title">[] = [
  {
    icon: <SiGithub />,
    href: "https://github.com/cvpfus",
  },
  {
    icon: <SiLinkedin />,
    href: "https://linkedin.com/in/yusuf-praditya-rahman",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("About");
  const [isClicked, setIsClicked] = useState(false);

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (isClicked) return;

    const elementsPosY: SectionsPosY = {
      About: -1,
      Career: -1,
      Achievements: -1,
      Projects: -1,
    };

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        elementsPosY[section] = element.getBoundingClientRect().top;
      }
    });

    const sorted = Object.entries(elementsPosY)
      .sort(([, a], [, b]) => b - a)
      .filter(([, val]) => val <= 0);

    if (sorted.length > 0) setActiveSection(sorted[0][0]);
  };

  return (
    <div className="flex h-dvh">
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 shadow-[0_0_10px_rgb(0,0,0,0.2)] dark:shadow-[0_0_10px_rgb(255,255,255,0.2)] rounded-r-2xl hidden lg:flex lg:flex-col lg:gap-2 lg:items-center"
      >
        <Profile />
        <SideNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          setIsClicked={setIsClicked}
          scrollAreaRef={scrollAreaRef}
        />
        <div className="flex-1" />
        <ExternalLinks />
      </motion.div>
      <ScrollArea
        className="w-full mx-4 lg:mx-0"
        onScrollCapture={handleScroll}
        ref={scrollAreaRef}
      >
        <div className="w-full h-full flex justify-center">
          <div className="w-full max-w-[768px] absolute top-0 py-4 flex items-center justify-between gap-2 bg-white dark:bg-black z-[100] lg:hidden">
            <div className="flex items-center gap-2">
              <Image
                alt="Profile Picture"
                src="/img/profile.jpg"
                width={40}
                height={40}
                className="rounded-full size-10 border-2 border-white shadow-[0_0_5px_rgb(0,0,0,0.25)]"
              />
              <div className="text-base lg:text-xl">Yusuf Praditya Rahman</div>
            </div>

            <div className="flex gap-2 justify-self-end items-center">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="hover:text-amber-400"
                >
                  {item.icon}
                </Link>
              ))}
              <ToggleThemeButton className="ml-2" />
            </div>
          </div>
          <div className="w-[768px] flex flex-col gap-8">
            <About className="mt-24" />
            <Separator />
            <Career />
            <Separator />
            <Achievements />
            <Separator />
            <Projects className="mb-24" />
          </div>
        </div>
      </ScrollArea>
      <ToggleThemeButton className="absolute top-4 right-4 invisible lg:visible" />
    </div>
  );
}
