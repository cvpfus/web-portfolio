import { cn } from "@/lib/utils";
import { CircleUserRound } from "lucide-react";
import * as motion from "framer-motion/client";

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
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        I have a strong interest in software engineering. I love exploring
        technology and finding new ways to solve problems. I am eager to keep
        learning and use my skills to work on innovative projects.
      </motion.span>
    </div>
  );
}
