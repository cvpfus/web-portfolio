import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";

interface CareerProps {
  imgSrc?: string;
  title?: string;
  location?: string;
  duration?: string;
  url?: string;
}

export default function CareerButton({
  imgSrc,
  title,
  location,
  duration,
  url,
}: CareerProps) {
  if (!imgSrc || !title || !location || !duration || !url) {
    return (
      <Button
        containerClassName="w-full h-full"
        borderRadius="0.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex justify-start gap-2 p-4"
      >
        <Skeleton className="size-[50px]" />
        <Separator orientation="vertical" />
        <div className="flex flex-col items-start">
          <Skeleton className="w-[150px] h-5 mb-2" />
          <div>[Your Company]</div>
          <div className="flex gap-1">
            <Skeleton className="w-16 h-5" /> <span>- Present</span>
          </div>
        </div>
      </Button>
    );
  }

  return (
    <a href={url} target="_blank">
      <Button
        containerClassName="w-full h-full"
        borderRadius="0.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex justify-start gap-2 p-4"
      >
        <Image alt={location} src={imgSrc} width="50" height="50" />
        <Separator orientation="vertical" />
        <div className="flex flex-col items-start">
          <div className="font-semibold mb-2">{title}</div>
          <div>{location}</div>
          <div>{duration}</div>
        </div>
      </Button>
    </a>
  );
}
