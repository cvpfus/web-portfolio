import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SiGithub } from "@icons-pack/react-simple-icons";

export interface ProjectDetail {
  title: string;
  description: string;
  imgSrc: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack: string[];
}

interface ProjectProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title">,
    ProjectDetail {}

export default function ProjectCard({
  className,
  title,
  description,
  imgSrc,
  githubUrl,
  liveUrl,
  techStack,
  ...props
}: ProjectProps) {
  return (
    <div
      className={cn(
        "rounded-lg border group hover:shadow-lg dark:bg-zinc-900 dark:border-zinc-700 dark:shadow-zinc-700 hover:border-white dark:hover:border-zinc-900 transition-shadow duration-200 p-4 flex flex-col gap-2",
        className
      )}
      {...props}
    >
      <Image
        src={imgSrc}
        alt={title}
        width={1920}
        height={1080}
        className="mb-4 border rounded-lg shadow-sm"
      />

      <div className="group-hover:translate-x-2 transition-transform duration-200">
        <div className="flex gap-2.5 mb-2">
          {githubUrl && (
            <Link href={githubUrl} target="_blank">
              <SiGithub className="hover:fill-amber-400" />
            </Link>
          )}
          {liveUrl && (
            <Link href={liveUrl} target="_blank">
              <LinkIcon className="hover:text-amber-400" />
            </Link>
          )}
        </div>
        <div className="font-semibold mb-1">{title}</div>
        <div className="text-xs">{description}</div>
        <div className="flex gap-1 flex-wrap mt-2">
          {techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
