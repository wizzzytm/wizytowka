import { GraduationCap } from "lucide-react";
import { BentoCard } from "./BentoCard";
import { Badge } from "@/components/ui/badge";

export function EducationCard() {
  return (
    <BentoCard className="md:col-span-1 flex flex-col justify-between group">
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-primary h-5 w-5 " />
          <h2 className="text-xl font-semibold">Edukacja</h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm md:text-base">
                Technik Programista
              </h3>
              <Badge
                variant="outline"
                className="text-[10px] uppercase bg-primary/5 text-primary border-primary/20"
              >
                Zawodowe
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Egzaminy państwowe INF.03 oraz INF.04 zdane pomyślnie.
            </p>
          </div>
          <div className="border-t border-border/50 pt-3 space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm md:text-base">
                Wykształcenie Średnie
              </h3>
              <Badge
                variant="outline"
                className="text-[10px] uppercase bg-secondary text-secondary-foreground"
              >
                Pełne
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Ukończone technikum z uzyskanym wykształceniem średnim.
            </p>
          </div>
        </div>
      </div>

      <div className="text-[11px] font-mono text-muted-foreground border-t border-border/50 pt-2 mt-4">
        // Technikum Nr 1 w Starogardzie Gd.
      </div>
    </BentoCard>
  );
}
