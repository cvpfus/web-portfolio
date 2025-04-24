"use client";

import { cn } from "@/lib/utils";
import ProjectCard, { ProjectDetail } from "@/components/ui/project-card";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ScrollText } from "lucide-react";
import { motion } from "framer-motion";

const projects: ProjectDetail[] = [
  {
    title: "Personal Website",
    description:
      "A personal website showcasing my career, achievements, projects and skills.",
    imgSrc: "https://img.cvpfus.xyz/portfolio.jpg",
    githubUrl: "https://github.com/cvpfus/web-portfolio",
    techStack: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "TailwindCSS",
      "Aceternity UI",
      "Animata",
    ],
  },
  {
    title: "EduStreamr",
    description:
      "EduStreamr is a decentralized tipping platform for streamers that offers instant payouts and super low fees, all powered by blockchain.",
    imgSrc: "https://img.cvpfus.xyz/edustreamr.jpg",
    githubUrl: "https://github.com/cvpfus/edu-streamr",
    liveUrl: "https://edustreamr.xyz",
    techStack: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "TailwindCSS",
      "Wagmi",
      "Thirdweb",
      "Hardhat",
      "Solidity",
    ],
  },
  {
    title: "Simple Marketplace",
    description:
      "A simple marketplace built with React. It uses the Airtable database for storing Products, Orders, and Users.",
    imgSrc: "https://img.cvpfus.xyz/simple-marketplace.jpg",
    githubUrl: "https://github.com/cvpfus/marketplace",
    liveUrl: "https://marketplace.cvpfus.xyz",
    techStack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Airtable",
      "shadcn/ui",
      "TailwindCSS",
    ],
  },
  {
    title: "Clicker",
    description:
      "A clicker game where players compete by clicking through a smart contract.",
    imgSrc: "https://img.cvpfus.xyz/clicker-1.jpg",
    githubUrl: "https://github.com/cvpfus/clicker",
    liveUrl: "https://clicker.assam.dev",
    techStack: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "TailwindCSS",
      "Wagmi",
      "Reown AppKit",
      "Mergent",
      "Hardhat",
      "Solidity",
    ],
  },
  {
    title: "Quiz Builder",
    description: "A personal project designed for creating and managing quizzes, offering support for two languages: English and Arabic.",
    imgSrc: "https://img.cvpfus.xyz/quiz-builder.jpg",
    githubUrl: "https://github.com/cvpfus/quiz-builder",
    liveUrl: "https://quiz-builder-inky.vercel.app",
    techStack: [
      "Next.js",
      "JavaScript",
      "shadcn/ui",
      "TailwindCSS",
      "Tanstack Query",
      "Supabase",
      "react-i18next",
    ],
  },
  {
    title: "Quiz App",
    description:
      "A quiz app built with React and Typescript. It fetches questions from the Open Trivia Database API.",
    imgSrc: "https://img.cvpfus.xyz/quiz-app.png",
    githubUrl: "https://github.com/cvpfus/quiz-app-v2",
    liveUrl: "https://quiz.cvpfus.xyz",
    techStack: [
      "React",
      "TypeScript",
      "Zustand",
      "React Query",
      "Authkit",
      "TailwindCSS",
    ],
  },
];

export default function Projects({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div id="Projects" className={cn("", className)} {...props}>
      <h2 className="font-bold flex items-center gap-2">
        <ScrollText className="size-5" />
        <span>Projects</span>
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2 }}
          className="mt-4"
        >
          <Masonry gutter="16px">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                techStack={project.techStack}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </motion.div>
    </div>
  );
}
