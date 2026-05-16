import { motion, type Variants } from "framer-motion";
import { User } from "lucide-react";
import { Card } from "@/components/ui/card";

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroCard() {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="md:col-span-2 h-full"
    >
      <Card className="h-full border bg-linear-to-br from-card to-secondary/20 p-6 flex flex-col justify-between overflow-hidden rounded-xl shadow-sm dark:border-zinc-800">
        <div className="space-y-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
            <User size={24} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Cześć, jestem <span className="text-primary">Adrian</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed mt-2">
            Pracowity i odpowiedzialny absolwent technikum. Dzięki odbytym
            praktykom zawodowym potrafię sprawnie pracować w zespole i rzetelnie
            realizować powierzone zadania pod presją czasu. Cechuje mnie wysoka
            kultura osobista, komunikatywność oraz zmysł techniczny, który
            pozwala mi na szybkie opanowanie obsługi nowych urządzeń i
            programów.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
