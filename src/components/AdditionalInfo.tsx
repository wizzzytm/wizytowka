import { motion, type Variants } from "framer-motion";
import { Car, UserCheck, Info } from "lucide-react";
import { BentoCard } from "./BentoCard";

const studentVariants: Variants = {
  initial: { y: 40, x: 10, opacity: 0, rotate: 15 },
  hover: {
    y: -5,
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 150, damping: 12 },
  },
};

const carVariants: Variants = {
  initial: { x: "-20%", opacity: 0 },
  hover: {
    x: ["-20%", "110%"],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 1.8,
      ease: "linear",
    },
  },
};

export function AdditionalInfoCard() {
  return (
    <BentoCard className="md:col-span-1 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Info className="text-primary h-5 w-5" />
          <h2 className="text-xl font-semibold">Dodatkowe info</h2>
        </div>

        <div className="space-y-3.5">
          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative overflow-hidden bg-secondary/30 p-3 rounded-xl border border-border/40 cursor-default group/student"
          >
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <UserCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  Status prawny
                </p>
                <p className="text-sm font-bold">Status ucznia / studenta</p>
              </div>
            </div>
            <motion.span
              variants={studentVariants}
              className="absolute right-3 bottom-0 text-3xl select-none pointer-events-none z-0"
            >
              🧑‍🎓
            </motion.span>
          </motion.div>

          <motion.div
            initial="initial"
            whileHover="hover"
            className="relative overflow-hidden bg-secondary/30 p-3 rounded-xl border border-border/40 cursor-default"
          >
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Car className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  Mobilność
                </p>
                <p className="text-sm font-bold">Prawo jazdy kat. B</p>
              </div>
            </div>

            <motion.span
              variants={carVariants}
              className="absolute bottom-1 left-0 text-3xl select-none pointer-events-none z-0"
            >
              <span className="inline-block scale-x-[-1]">🚗</span>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </BentoCard>
  );
}
