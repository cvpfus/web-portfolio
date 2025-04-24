import { FloatingDock, FloatingDockItem } from "@/components/ui/floating-dock";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";

const items: FloatingDockItem[] = [
  {
    title: "GitHub",
    icon: <SiGithub />,
    href: "https://github.com/cvpfus",
  },
  {
    title: "LinkedIn",
    icon: <SiLinkedin />,
    href: "https://linkedin.com/in/yusuf-praditya-rahman",
  },
];

export default function ExternalLinks() {
  return (
    <div className="mb-4">
      <FloatingDock items={items} />
    </div>
  );
}
