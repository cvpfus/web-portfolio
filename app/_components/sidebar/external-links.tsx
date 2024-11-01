import { FloatingDock, FloatingDockItem } from "@/components/ui/floating-dock";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";

const items: FloatingDockItem[] = [
  {
    title: "GitHub",
    icon: <SiGithub />,
    href: "https://github.com/cvpfus",
  },
  {
    title: "LinkedIn",
    icon: <SiLinkedin />,
    href: "https://linkedin.com/in/yusuf-pradityarahman-4b2312ab",
  },
  {
    title: "Instagram",
    icon: <SiInstagram />,
    href: "https://instagram.com/yusufpraditya_",
  },
];

export default function ExternalLinks() {
  return (
    <div className="mb-4">
      <FloatingDock items={items} />
    </div>
  );
}
