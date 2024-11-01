"use client";

import { cn } from "@/lib/utils";
import ProjectCard, { ProjectDetail } from "@/components/ui/project-card";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ScrollText } from "lucide-react";

const projects: ProjectDetail[] = [
  {
    title: "CryptoStreamr",
    description:
      "CryptoStreamr is revolutionizing live streaming by enabling creators to receive cryptocurrency tips in real-time.",
    imgSrc: "https://img.cvpfus.xyz/cryptostreamr.png",
    githubUrl: "https://github.com/cvpfus/crypto-streamr",
    liveUrl: "https://cryptostreamr.cvpfus.xyz",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Auth.js",
      "Aptos SDK",
      "Supabase Realtime",
      "shadcn/ui",
      "TailwindCSS",
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
  {
    title: "RoastMeAI NFT",
    description:
      "An NFT project built on Metaplex Core that brings AI-powered roasting to the blockchain.",
    imgSrc: "https://img.cvpfus.xyz/roastmeai.png",
    githubUrl: "https://github.com/cvpfus/dscvr-profile-roast",
    techStack: [
      "React",
      "JavaScript",
      "Metaplex Core SDK",
      "Dfinity SDK",
      "Groq SDK",
      "Puppeteer",
      "Express.js",
      "shadcn/ui",
      "TailwindCSS",
    ],
  },
  {
    title: "UpliftMeAI NFT",
    description:
      "An NFT project built on Metaplex Core that brings AI-powered uplifting to the blockchain.",
    imgSrc: "https://img.cvpfus.xyz/upliftmeai.png",
    githubUrl: "https://github.com/cvpfus/dscvr-profile-uplift",
    techStack: [
      "React",
      "JavaScript",
      "Metaplex Core SDK",
      "Dfinity SDK",
      "Groq SDK",
      "Puppeteer",
      "Express.js",
      "shadcn/ui",
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
    </div>
  );
}
