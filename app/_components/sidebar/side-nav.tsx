import { Button } from "@/components/ui/button";
import React from "react";
import { sections } from "@/lib/definitions";

interface Props {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  scrollAreaRef?: React.RefObject<HTMLDivElement>;
}

export default function SideNav({
  activeSection,
  setActiveSection,
  setIsClicked,
  scrollAreaRef,
}: Props) {
  const handleClick = (button: string) => {
    if ("onscrollend" in window) setIsClicked(true);

    const element = document.getElementById(button);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setActiveSection(button);

    if (scrollAreaRef?.current) {
      scrollAreaRef.current.onscrollend = () => {
        setIsClicked(false);
      };
    }
  };

  return (
    <div className="mt-12 w-full p-2">
      {sections.map((section) => {
        return (
          <Button
            key={section}
            variant={activeSection === section ? "default" : "secondary"}
            className="w-full mb-2"
            onClick={() => handleClick(section)}
          >
            {section}
          </Button>
        );
      })}
    </div>
  );
}
