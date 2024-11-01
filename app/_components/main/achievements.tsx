import AnimatedTimeline, {
  TimelineEvent,
} from "@/components/ui/animated-timeline";
import { Trophy } from "lucide-react";

const achievements: TimelineEvent[] = [
  {
    id: "1",
    date: "Jul 1st, 2024",
    title: "🥇 Searchers of Nottingham Season 3 (1st Place)",
    description:
      "Built a smart contract to compete in a MEV-themed multiplayer game on the Ethereum Virtual Machine.",
  },
  {
    id: "2",
    date: "Oct 23rd, 2021",
    title: "🥉 National Unmanned Fast Boat Contest (3rd Place)",
    description:
      "Developed an autonomous system for Autonomous Submarine Surface Vehicle (ASSV) using the YOLO algorithm and a PID controller.",
  },
  {
    id: "3",
    date: "Jul 5th, 2021",
    title: "🥈 National Kibo Robot Programming Challenge (2nd Place)",
    description:
      "Developed a program to operate Astrobee robot and complete the required missions, including extracting QR code information, finding the shortest path, and aiming Astrobee’s laser at the target point.",
  },
];

export default function Achievements() {
  return (
    <div id="Achievements">
      <h2 className="font-bold flex items-center gap-2">
        <Trophy className="size-5" />
        <span>Achievements</span>
      </h2>
      <AnimatedTimeline events={achievements} />
    </div>
  );
}
