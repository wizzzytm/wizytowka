import { motion, type Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function BentoCard({ children, className }: BentoCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className={cn("h-full", className)}
    >
      <Card className="h-full border bg-card p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        {children}
      </Card>
    </motion.div>
  );
}
