import { cn } from "@/lib/utils";
import { CircleUserRound } from "lucide-react";

export default function About({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div id="About" className={cn("flex flex-col gap-2", className)} {...props}>
      <h2 className="font-bold flex items-center gap-2">
        <CircleUserRound className="size-5" />
        <span>About</span>
      </h2>
      <span>
        I have a strong interest in software engineering. I am dedicated to
        pushing the boundaries of technology and driving innovation to create
        intelligent solutions. With a deep commitment to continuous learning, I
        am eager to leverage my skills and expertise to contribute to
        groundbreaking projects in the dynamic world of technology.
      </span>
    </div>
  );
}