import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { BentoCard } from "./BentoCard";

// Dane o językach z kodami flag dla flagcdn.com
const languages = [
  { name: "Polski", level: "Ojczysty", score: 5, flagCode: "pl" },
  { name: "Angielski", level: "C1 (Zaawansowany)", score: 4, flagCode: "gb" },
  { name: "Niemiecki", level: "A2 (Podstawy)", score: 2, flagCode: "de" },
];

const greetings = [
  { text: "Cześć!", lang: "Polski", flagCode: "pl" },
  { text: "Hello!", lang: "Angielski", flagCode: "gb" },
  { text: "Hallo!", lang: "Niemiecki", flagCode: "de" },
];

export function LanguagesCard() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BentoCard className="md:col-span-1 flex flex-col justify-between h-full group overflow-hidden">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="text-primary h-5 w-5" />
            <h2 className="text-xl font-semibold">Języki</h2>
          </div>

          <div className="h-7 overflow-hidden flex items-center justify-end w-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={greetingIndex}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-md"
              >
                <img
                  src={`https://flagcdn.com/w40/${greetings[greetingIndex].flagCode}.png`}
                  alt=""
                  className="w-3.5 h-3.5 rounded-full object-cover border border-primary/20"
                />
                <span>{greetings[greetingIndex].text}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-4">
          {languages.map((lang, langIdx) => (
            <div
              key={lang.name}
              className="space-y-1.5 group/row cursor-default"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-5 h-5 rounded-full overflow-hidden border border-border shadow-sm shrink-0"
                  >
                    <img
                      src={`https://flagcdn.com/w40/${lang.flagCode}.png`}
                      alt={`Flaga: ${lang.name}`}
                      className="w-full h-full object-cover scale-110"
                    />
                  </motion.div>
                  <span className="font-medium text-sm group-hover/row:text-primary transition-colors duration-300">
                    {lang.name}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {lang.level}
                </span>
              </div>

              <div className="flex gap-1.5 h-2 w-full">
                {[...Array(5)].map((_, i) => {
                  const isActive = i < lang.score;
                  return (
                    <motion.div
                      key={i}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{
                        delay: langIdx * 0.15 + i * 0.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                      className={`h-full flex-1 rounded-sm origin-left transition-colors duration-500 ${
                        isActive
                          ? "bg-primary"
                          : "bg-muted border border-border/40"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-[11px] font-mono text-muted-foreground border-t border-border/50 pt-3 mt-4">
        // gotowość do pracy w zespole międzynar.
      </div>
    </BentoCard>
  );
}
