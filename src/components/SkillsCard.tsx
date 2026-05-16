import { useRef, useEffect } from "react";
import { Code2 } from "lucide-react";
import { BentoCard } from "./BentoCard";

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiPython,
  SiGit,
  SiGithub,
  SiSharp,
} from "react-icons/si";
import { FaCode, FaDatabase } from "react-icons/fa6";

const skillsData = {
  frontend: [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38BDF8]" },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "dark:text-white text-zinc-900",
    },
    { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
  ],
  languages: [
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "C#", icon: SiSharp, color: "text-[#239120]" },
    { name: "SQL", icon: FaDatabase, color: "text-[#0064a5]" },
  ],
  concepts: [
    { name: "OOP", icon: FaCode, color: "text-primary" },
    { name: "Bazy Relacyjne", icon: FaDatabase, color: "text-primary" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "GitHub", icon: SiGithub, color: "dark:text-white text-zinc-900" },
  ],
};

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface AquariumProps {
  title: string;
  skills: SkillItem[];
}

// Komponent pojedynczego elementu zarządzający własną fizyką (60 FPS)
function FloatingBubble({
  skill,
  containerRef,
}: {
  skill: SkillItem;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const IconComponent = skill.icon;

  // Przechowujemy dane fizyczne w useRef, aby uniknąć re-renderów Reacta przy każdym ruchu
  const physics = useRef({
    x: 0,
    y: 0,
    vx: (Math.random() - 0.5) * 0.2, // Początkowa prędkość X
    vy: (Math.random() - 0.5) * 0.2, // Początkowa prędkość Y
    isDragging: false,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    const item = itemRef.current;
    if (!container || !item) return;

    const cRect = container.getBoundingClientRect();
    const iRect = item.getBoundingClientRect();

    // Losowe rozstawienie początkowe, żeby kafelki nie startowały w jednym punkcie
    physics.current.x = Math.random() * (cRect.width - iRect.width - 20) + 10;
    physics.current.y = Math.random() * (cRect.height - iRect.height - 20) + 10;

    let animationFrameId: number;

    const updatePhysics = () => {
      const p = physics.current;
      if (!container || !item) return;

      if (!p.isDragging) {
        const cRect = container.getBoundingClientRect();
        const iRect = item.getBoundingClientRect();

        // Aktualizacja pozycji o wektor prędkości
        p.x += p.vx;
        p.y += p.vy;

        // Odbicie od lewej/prawej ściany
        if (p.x <= 0) {
          p.x = 0;
          p.vx = Math.abs(p.vx);
        } else if (p.x >= cRect.width - iRect.width) {
          p.x = cRect.width - iRect.width;
          p.vx = -Math.abs(p.vx);
        }

        // Odbicie od sufitu/podłogi
        if (p.y <= 0) {
          p.y = 0;
          p.vy = Math.abs(p.vy);
        } else if (p.y >= cRect.height - iRect.height) {
          p.y = cRect.height - iRect.height;
          p.vy = -Math.abs(p.vy);
        }

        // Opór powietrza (ściąga prędkość po mocnym rzucie z powrotem do spokojnego dryfu)
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxFloatSpeed = 0.8;
        if (speed > maxFloatSpeed) {
          p.vx *= 0.96;
          p.vy *= 0.96;
        }

        // Przesunięcie elementu za pomocą sprzętowo akcelerowanego translate3d
        item.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [containerRef]);

  // Obsługa przeciągania za pomocą PointerEvents (obsługuje myszkę i ekrany dotykowe)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    physics.current.isDragging = true;
    physics.current.lastX = e.clientX;
    physics.current.lastY = e.clientY;
    physics.current.vx = 0;
    physics.current.vy = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!physics.current.isDragging) return;
    const p = physics.current;
    const container = containerRef.current;
    const item = itemRef.current;
    if (!container || !item) return;

    const cRect = container.getBoundingClientRect();
    const iRect = item.getBoundingClientRect();

    const deltaX = e.clientX - p.lastX;
    const deltaY = e.clientY - p.lastY;

    p.x += deltaX;
    p.y += deltaY;

    // Pilnowanie granic podczas przeciągania
    p.x = Math.max(0, Math.min(p.x, cRect.width - iRect.width));
    p.y = Math.max(0, Math.min(p.y, cRect.height - iRect.height));

    // Wyliczanie wektora rzutu (pędu) na podstawie prędkości ruchu myszki
    p.vx = deltaX * 0.4;
    p.vy = deltaY * 0.4;

    p.lastX = e.clientX;
    p.lastY = e.clientY;

    item.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
  };

  const handlePointerUp = () => {
    physics.current.isDragging = false;
  };

  return (
    <div
      ref={itemRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="absolute w-20 h-20 select-none cursor-grab active:cursor-grabbing will-change-transform group/bubble z-10 hover:z-50"
      style={{ touchAction: "none" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl bg-background dark:bg-zinc-950 border border-border dark:border-zinc-800 shadow-md hover:border-primary/40 hover:scale-110 active:scale-105 transition-all duration-200 backdrop-blur-sm">
        <IconComponent
          className={`text-2xl ${skill.color} group-hover/bubble:animate-pulse`}
        />
        <span className="text-[10px] font-semibold tracking-tight text-center leading-tight dark:text-zinc-300 text-zinc-700 pointer-events-none">
          {skill.name}
        </span>
      </div>
    </div>
  );
}

function SkillAquarium({ title, skills }: AquariumProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col h-full space-y-2">
      <span className="text-xs font-mono text-muted-foreground pl-1">
        // {title}
      </span>

      <div
        ref={containerRef}
        className="flex-1 min-h-70 bg-secondary/10 dark:bg-zinc-900/30 border border-dashed border-border/60 rounded-xl overflow-hidden relative"
      >
        {skills.map((skill) => (
          <FloatingBubble
            key={skill.name}
            skill={skill}
            containerRef={containerRef}
          />
        ))}
      </div>
    </div>
  );
}

export function SkillsCard() {
  return (
    <BentoCard className="md:col-span-3 relative group overflow-hidden">
      <div className="relative z-10 flex flex-col h-full w-full">
        <div className="flex items-center gap-2 mb-6">
          <Code2 className="text-primary h-5 w-5" />
          <h2 className="text-xl font-semibold">Arsenał Technologiczny</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <SkillAquarium title="Frontend" skills={skillsData.frontend} />
          <SkillAquarium
            title="Języki programowania"
            skills={skillsData.languages}
          />
          <SkillAquarium
            title="Koncepcje & Narzędzia"
            skills={skillsData.concepts}
          />
        </div>
      </div>
    </BentoCard>
  );
}
