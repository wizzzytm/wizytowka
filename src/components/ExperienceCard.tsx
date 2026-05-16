import { Briefcase } from "lucide-react";
import { BentoCard } from "./BentoCard";

const jobs = [
  {
    role: "Praktykant - Programista",
    company: "NEOTERIC",
    desc: "Aplikacje z wykorzystaniem sztucznej inteligencji (AI).",
  },
  {
    role: "Praktykant - Programista",
    company: "AQ Wiring Systems",
    desc: "Tworzenie oprogramowania i praca z dokumentacją techniczną.",
  },
];

export function ExperienceCard() {
  return (
    <BentoCard className="md:col-span-1 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="text-primary h-5 w-5" />
          <h2 className="text-xl font-semibold">Doświadczenie</h2>
        </div>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="border-l-2 border-border pl-3 space-y-0.5 group/item"
            >
              <h3 className="font-bold text-sm group-hover/item:text-primary transition-colors">
                {job.role}
              </h3>
              <p className="text-xs text-primary font-medium">{job.company}</p>
              <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
                {job.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
