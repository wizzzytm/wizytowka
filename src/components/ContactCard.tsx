import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Mail, Check, Copy, Phone, FileDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ContactCard() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "twoj.email@gmail.com";
  const phone = "+48 123 456 789";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="md:col-span-2 h-full w-full"
    >
      <Card className="h-full border bg-linear-to-r from-card via-card to-primary/5 p-6 shadow-sm overflow-hidden rounded-xl dark:border-zinc-800 flex items-center">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 w-full">
          <div className="space-y-4 w-full lg:w-auto">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">
                Szukasz stażysty DevOps / Dev?
              </h2>
              <p className="text-sm text-muted-foreground">
                Zatrudniając mnie, zyskujesz zmotywowanego technika ze statusem
                ucznia. Porozmawiajmy!
              </p>
            </div>

            {/* Dane kontaktowe */}
            <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
              <div
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors bg-secondary/40 dark:bg-zinc-900/50 px-2.5 py-1.5 rounded-md border border-border/40 select-none"
              >
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span>{email}</span>
                <AnimatePresence mode="wait" initial={false}>
                  {copiedEmail ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.6 }}
                      animate={{ scale: 1 }}
                    >
                      <Check className="h-3 w-3 text-emerald-500 stroke-3" />
                    </motion.div>
                  ) : (
                    <Copy className="h-3 w-3 opacity-50" />
                  )}
                </AnimatePresence>
              </div>

              <div
                onClick={handleCopyPhone}
                className="flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors bg-secondary/40 dark:bg-zinc-900/50 px-2.5 py-1.5 rounded-md border border-border/40 select-none"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span>{phone}</span>
                <AnimatePresence mode="wait" initial={false}>
                  {copiedPhone ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.6 }}
                      animate={{ scale: 1 }}
                    >
                      <Check className="h-3 w-3 text-emerald-500 stroke-3" />
                    </motion.div>
                  ) : (
                    <Copy className="h-3 w-3 opacity-50" />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-end shrink-0">
            <Button
              variant="default"
              asChild
              className="font-semibold gap-2 h-11 px-6 rounded-xl shadow-sm cursor-pointer w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
            >
              <a href="/cv.pdf" download="CV_Twoje_Imie.pdf">
                <FileDown className="h-4 w-4" />
                <span>Pobierz CV (PDF)</span>
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
