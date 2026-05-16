import { motion } from "framer-motion";
import { SkillsCard } from "./components/SkillsCard";
import { DevOpsTerminal } from "./components/DevOpsTerminal";
import { ModeToggle } from "./components/ModeToggle";
import { LanguagesCard } from "./components/LanguagesCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { EducationCard } from "./components/EducationCard";
import { AdditionalInfoCard } from "./components/AdditionalInfo";
import { ContactCard } from "./components/ContactCard";
import { HeroCard } from "./components/HeroCard";

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <>
      <main className="min-h-screen bg-background text-foreground p-4 md:p-10 lg:p-16 flex flex-col items-center justify-center relative">
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50">
          <ModeToggle />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full"
        >
          <HeroCard />
          <DevOpsTerminal />
          <SkillsCard />
          <LanguagesCard />
          <ExperienceCard />
          <EducationCard />
          <AdditionalInfoCard />

          <ContactCard />
        </motion.div>
      </main>
    </>
  );
}

export default App;
