import CareerButton from "@/components/ui/career-button";
import { BriefcaseBusiness } from "lucide-react";
import * as motion from "framer-motion/client";

export default function Career() {
  return (
    <div id="Career" className="flex flex-col gap-3">
      <h2 className="font-bold flex items-center gap-2">
        <BriefcaseBusiness className="size-5" />
        <span>Career</span>
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-2"
      >
        <CareerButton />
        <CareerButton
          title="Software Engineer Intern"
          location="Formulatrix Indonesia - Semarang"
          duration="Nov 2023 - Dec 2023"
          imgSrc="/img/formulatrix_logo.jpg"
          url="https://formulatrix.com"
        />
      </motion.div>
    </div>
  );
}
