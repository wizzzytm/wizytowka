// --- App.tsx ---
import { motion, type Variants } from "framer-motion";
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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        mass: 1,
      },
    },
  };

  return (
    <>
      <main className="min-h-screen text-foreground p-4 md:p-10 lg:p-16 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_100%)]" />

        <div className="fixed top-6 right-6 md:top-8 md:right-8 z-50">
          <ModeToggle />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full z-10"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bento-card-glow rounded-3xl"
          >
            <HeroCard />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card-glow rounded-3xl"
          >
            <DevOpsTerminal />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-3 bento-card-glow rounded-3xl"
          >
            <SkillsCard />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card-glow rounded-3xl"
          >
            <LanguagesCard />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card-glow rounded-3xl"
          >
            <ExperienceCard />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card-glow rounded-3xl"
          >
            <EducationCard />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bento-card-glow rounded-3xl"
          >
            <AdditionalInfoCard />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bento-card-glow rounded-3xl"
          >
            <ContactCard />
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}

export default App;
