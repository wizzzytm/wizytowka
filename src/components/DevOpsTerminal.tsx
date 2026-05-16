import { motion, type Variants } from "framer-motion";
import { Card } from "@/components/ui/card";

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.6 },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function DevOpsTerminal() {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="md:col-span-1 h-full"
    >
      <Card className="h-full border bg-zinc-950 border-zinc-800 text-zinc-100 p-0 shadow-sm flex flex-col justify-between overflow-hidden rounded-xl">
        <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-zinc-500 font-mono ml-2">
            devops_skills.sh
          </span>
        </div>

        <div className="p-5 pt-2 font-mono text-xs sm:text-sm md:text-xs lg:text-sm space-y-3 min-h-65 flex flex-col justify-between bg-zinc-950">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-2.5"
          >
            <motion.p variants={lineVariants} className="text-zinc-400">
              <span className="text-emerald-400">guest@wizytowka:~$</span> curl
              -s ./devops
            </motion.p>

            <motion.p
              variants={lineVariants}
              className="text-blue-400 font-bold"
            >
              [Uczenie się w toku - cel: STAŻ]
            </motion.p>

            <motion.p
              variants={lineVariants}
              className="flex items-center gap-2"
            >
              <span className="text-zinc-500">├──</span> 🐧 Linux{" "}
              <span className="text-zinc-400 text-[11px]">(Podstawy, CLI)</span>
            </motion.p>

            <motion.p
              variants={lineVariants}
              className="flex items-center gap-2"
            >
              <span className="text-zinc-500">├──</span> 🐳 Docker{" "}
              <span className="text-zinc-400 text-[11px]">
                (Konteneryzacja)
              </span>
            </motion.p>

            <motion.p
              variants={lineVariants}
              className="flex items-center gap-2"
            >
              <span className="text-zinc-500">├──</span> 🛠️ Terraform{" "}
              <span className="text-zinc-400 text-[11px]">(Zasady IaC)</span>
            </motion.p>

            <motion.p
              variants={lineVariants}
              className="flex items-center gap-2"
            >
              <span className="text-zinc-500">└──</span> 🔄 CI/CD{" "}
              <span className="text-zinc-400 text-[11px]">
                (Automatyzacja procesów)
              </span>
            </motion.p>
          </motion.div>

          {/* Migający kursor */}
          <div className="flex items-center text-zinc-400 pt-2 border-t border-zinc-900">
            <span className="text-emerald-400 mr-2">guest@wizytowka:~$</span>
            <motion.div
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                times: [0, 0.5, 0.5, 1],
                ease: "linear",
              }}
              className="w-2 h-4 bg-zinc-400"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
