import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Linkedin,
  FileDown,
  Heart,
} from "lucide-react";

import {
  Butterfly,
  Sunflower,
  Cloud,
  Sparkle,
  Petal,
} from "@/components/eunoia/decorations";

import memSunflowers from "@/assets/narmu.png";
import memDolphin from "@/assets/memory-dolphin.jpg";
import memParis from "@/assets/memory-paris.jpg";
import memCamera from "@/assets/memory-camera.jpg";
import memField from "@/assets/memory-field.jpg";
import sunsetField from "@/assets/sunset-field.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Narmu Eunoia — Beautiful Thinking 🌻" },
      {
        name: "description",
        content:
          "A peaceful sunflower garden of memories, dreams, and beautiful thinking — the personal portfolio of Narmu Eunoia.",
      },
      { property: "og:title", content: "Narmu Eunoia — Beautiful Thinking" },
      {
        property: "og:description",
        content:
          "Step into a sunflower garden of memories, dreams, and beautiful thinking.",
      },
      { property: "og:image", content: sunsetField },
      { name: "twitter:image", content: sunsetField },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

/* ───────────────────────────── HERO ───────────────────────────── */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const flowersY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #e8eef5 0%, #f3e9d8 55%, #fff3d6 100%)",
      }}
    >
      {/* Warm sunlight from corner */}
      <motion.div
        style={{ y: sunY }}
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full"
        aria-hidden
      >
        <div
          className="h-full w-full rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,229,150,0.95) 0%, rgba(246,196,69,0.55) 35%, rgba(246,196,69,0) 70%)",
          }}
        />
      </motion.div>

      {/* Sun rays */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-[600px] w-[600px] opacity-60">
        <div
          className="h-full w-full"
          style={{
            background:
              "conic-gradient(from 200deg at 70% 30%, transparent 0deg, rgba(255,240,180,0.3) 8deg, transparent 16deg, transparent 40deg, rgba(255,240,180,0.25) 48deg, transparent 56deg)",
            maskImage:
              "radial-gradient(circle at 70% 30%, black 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Clouds */}
      <Cloud className="top-[12%]" duration={80} delay={0} scale={1.1} />
      <Cloud
        className="top-[22%]"
        duration={120}
        delay={10}
        scale={0.7}
        opacity={0.7}
      />
      <Cloud
        className="top-[38%]"
        duration={100}
        delay={30}
        scale={1.3}
        opacity={0.65}
      />

      {/* Pollen particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-amber-200"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 90}%`,
              boxShadow: "0 0 8px rgba(255,220,120,0.9)",
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Butterflies */}
      <Butterfly
        className="left-0 top-[20%]"
        size={32}
        duration={22}
        color="#c9a8e8"
      />
      <Butterfly
        className="left-0 top-[50%]"
        size={26}
        duration={28}
        delay={3}
        color="#f6c445"
        path="M0,0 C60,40 140,-20 220,30 C300,80 380,0 460,40"
      />
      <Butterfly
        className="left-0 top-[70%]"
        size={28}
        duration={26}
        delay={6}
        color="#f4a3b8"
        path="M0,0 C80,-50 160,20 240,-30 C320,-80 400,10 480,-20"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-2xl text-sunset md:text-3xl"
        >
          welcome to my little garden
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="font-display mt-3 text-5xl font-medium leading-[1.05] text-foreground md:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient-sun italic">Narmu Eunoia</span>{" "}
          <motion.span
            initial={{ rotate: -20, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            🌻
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg"
        >
          A passionate flower lover who believes in the beauty of good things.{" "}
          <br />
          <span className="font-display italic text-sunset eunoia">
            Eunoia
          </span>{" "}
          means <em>beautiful thinking</em> — and that&apos;s how I choose to
          see the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#about"
            className="glass-warm rounded-full px-7 py-3 text-sm font-medium text-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            walk into the garden →
          </a>
          <a
            href="#contact"
            className="rounded-full border border-foreground/15 bg-white/40 px-7 py-3 text-sm font-medium text-foreground/80 backdrop-blur-sm transition-all hover:bg-white/70"
          >
            say hello
          </a>
        </motion.div>
      </div>

      {/* Sunflowers along the bottom */}
      <motion.div
        style={{ y: flowersY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64"
      >
        <Sunflower className="-bottom-6 left-[2%]" size={110} />
        <Sunflower className="-bottom-10 left-[14%]" size={80} />
        <Sunflower className="-bottom-4 left-[24%]" size={130} />
        <Sunflower className="-bottom-12 left-[38%]" size={70} />
        <Sunflower className="-bottom-8 right-[36%]" size={120} />
        <Sunflower className="-bottom-2 right-[22%]" size={90} />
        <Sunflower className="-bottom-10 right-[10%]" size={140} />
        <Sunflower className="-bottom-6 right-[2%]" size={95} />
        {/* grass gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(180deg, transparent, color-mix(in oklab, var(--sage) 50%, transparent))",
          }}
        />
      </motion.div>
    </section>
  );
}

/* ───────────────────────────── ABOUT ───────────────────────────── */

const memories = [
  { src: memSunflowers, caption: "sunflowers, always", rot: -6 },
  { src: memDolphin, caption: "ocean of dreams", rot: 4 },
  { src: memParis, caption: "paris, one day", rot: -3 },
  { src: memCamera, caption: "captured moments", rot: 6 },
  { src: memField, caption: "golden hour heart", rot: -4 },
];

const aboutLines = [
  { e: "🌻", t: "I love flowers, sunshine, and peaceful little gardens." },
  {
    e: "💭",
    t: "Eunoia means beautiful thinking — I carry that in my heart every day.",
  },
  { e: "🤍", t: "Kindness is the prettiest thing a person can wear." },
  {
    e: "🐬",
    t: "Part of my soul belongs to the ocean, dancing freely like a dolphin.",
  },

  {
    e: "✨",
    t: "Paris lives in my dreams, waiting beneath its glowing lights.",
  },
  {
    e: "📚",
    t: "I love learning new things and collecting achievements along the way.",
  },
  { e: "📸", t: "Photography helps me turn tiny moments into memories." },
  {
    e: "🌸",
    t: "One day, I&apos;ll travel the world with wonder in my eyes and flowers in my hair.",
  },
];

function About() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % memories.length);
  const prev = () => setIdx((i) => (i - 1 + memories.length) % memories.length);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 md:py-36"
      style={{
        background:
          "linear-gradient(180deg, #fff3d6 0%, #fff8ef 30%, #f4fbe9 100%)",
      }}
    >
      {/* falling petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Petal
          key={i}
          left={`${(i * 83) % 100}%`}
          delay={i * 1.4}
          duration={12 + (i % 5)}
          color={i % 3 === 0 ? "#f6c445" : i % 3 === 1 ? "#f4a3b8" : "#c9a8e8"}
        />
      ))}

      {/* decorative butterflies */}
      <Butterfly
        className="left-0 top-[10%]"
        size={30}
        duration={30}
        color="#f6c445"
      />
      <Butterfly
        className="left-0 top-[60%]"
        size={24}
        duration={36}
        delay={5}
        color="#c9a8e8"
        path="M0,0 C100,-40 200,30 300,-20 C400,-60 500,20 600,-10"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Photo stack */}
        <div className="relative mx-auto flex h-[480px] w-full max-w-[420px] items-center justify-center">
          {/* sparkles */}
          <Sparkle className="left-2 top-6" />
          <Sparkle className="right-4 top-12" delay={1} />
          <Sparkle className="left-10 bottom-10" delay={2} />
          <Sunflower className="-left-10 -bottom-4" size={70} />
          <Sunflower className="-right-6 -bottom-8" size={90} />

          <div className="relative h-[420px] w-[320px]">
            <AnimatePresence initial={false}>
              {memories.map((m, i) => {
                const offset = (i - idx + memories.length) % memories.length;
                if (offset > 3) return null;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{
                      opacity: 1,
                      scale: 1 - offset * 0.04,
                      y: offset * 10,
                      x: offset * 6,
                      rotate: offset === 0 ? m.rot : m.rot + offset * 2,
                      zIndex: 10 - offset,
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    className="absolute inset-0"
                    style={{
                      filter: offset > 0 ? `blur(${offset * 0.5}px)` : "none",
                    }}
                  >
                    <div className="glass h-full w-full rounded-2xl p-4 pb-14">
                      <img
                        src={m.src}
                        alt={m.caption}
                        width={768}
                        height={768}
                        loading="lazy"
                        className="h-full w-full rounded-xl object-cover"
                      />
                      <p className="font-script absolute inset-x-0 bottom-3 text-center text-xl text-foreground/70">
                        {m.caption}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* controls */}
          <div className="absolute -bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous memory"
              className="glass grid h-11 w-11 place-items-center rounded-full text-foreground/70 transition hover:scale-110 hover:text-sunset"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {memories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Memory ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-6 bg-sunset" : "w-1.5 bg-foreground/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next memory"
              className="glass grid h-11 w-11 place-items-center rounded-full text-foreground/70 transition hover:scale-110 hover:text-sunset"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Text side */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-script text-2xl text-sunset"
          >
            a little
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display mt-2 text-5xl font-medium md:text-6xl"
          >
            About Me <span>🌸</span>
          </motion.h2>

          <ul className="mt-10 space-y-5">
            {aboutLines.map((l, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="flex items-start gap-3 text-base leading-relaxed text-foreground/80 md:text-lg"
              >
                <span className="text-2xl leading-none" aria-hidden>
                  {l.e}
                </span>
                <span dangerouslySetInnerHTML={{ __html: l.t }} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── SKILLS ───────────────────────────── */

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "MS Word",
  "MS Excel",
  "PowerPoint",
  "GitHub",
  "Asset management",
  "Jira ticketing",
  "Google workspace",
  "Networking basics",
];

function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBack = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      id="skills"
      className="relative overflow-hidden py-28 md:py-36"
      style={{
        background:
          "linear-gradient(180deg, #f4fbe9 0%, #dceeff 35%, #b8dcff 100%)",
      }}
    >
      {/* sun glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background: "radial-gradient(circle, #fff3c4 0%, transparent 70%)",
        }}
      />

      {/* parallax clouds */}
      <motion.div
        style={{ y: yBack }}
        className="pointer-events-none absolute inset-0"
      >
        <Cloud className="top-[8%]" duration={140} scale={0.9} opacity={0.7} />
        <Cloud
          className="top-[34%]"
          duration={160}
          delay={20}
          scale={1.1}
          opacity={0.6}
        />
        <Cloud
          className="top-[60%]"
          duration={180}
          delay={50}
          scale={0.8}
          opacity={0.55}
        />
      </motion.div>
      <motion.div
        style={{ y: yFront }}
        className="pointer-events-none absolute inset-0"
      >
        <Cloud className="top-[20%]" duration={90} scale={1.4} opacity={0.95} />
        <Cloud
          className="top-[48%]"
          duration={110}
          delay={15}
          scale={1.2}
          opacity={0.9}
        />
      </motion.div>

      <Butterfly
        className="left-0 top-[15%]"
        size={28}
        duration={26}
        color="#f6c445"
      />
      <Butterfly
        className="left-0 top-[75%]"
        size={32}
        duration={30}
        delay={4}
        color="#c9a8e8"
        path="M0,0 C100,30 200,-40 300,20 C400,80 500,-30 600,10"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl font-medium md:text-6xl"
        >
          My Skills <span>☁️</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-foreground/70 md:text-lg"
        >
          The tools and skills that help me create, learn, and grow.
        </motion.p>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => (
            <SkillCloud key={skill} label={skill} index={i} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCloud({
  label,
  delay,
  index,
}: {
  label: string;
  delay: number;
  index: number;
}) {
  return (
 <motion.div
  initial={{ opacity: 0, y: 30, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{
    delay,
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{ scale: 1.08, y: -6 }}
  className="group relative animate-float-soft will-change-transform"
  style={{ animationDelay: `${delay}s` }}
>
     <div className="relative">
  {/* cloud shape */}
  <svg
    viewBox="0 0 200 110"
    preserveAspectRatio="xMidYMid meet"
    className="block h-auto w-full drop-shadow-[0_12px_30px_rgba(120,160,210,0.25)]"
  >
    <g
      fill="#ffffff"
      // stroke="#edf5ff"
      // strokeWidth="1.5"
    >
      <ellipse cx="55" cy="75" rx="42" ry="28" />
      <ellipse cx="105" cy="58" rx="50" ry="36" />
      <ellipse cx="155" cy="75" rx="40" ry="26" />
      <ellipse cx="80" cy="48" rx="30" ry="22" />
      <ellipse cx="135" cy="48" rx="28" ry="20" />
    </g>
  </svg>

  <span className="font-display absolute inset-0 grid place-items-center pt-2 text-lg font-medium text-foreground/80 md:text-xl">
    {label}
  </span>

  {/* sparkles on hover */}
  <span
    className="pointer-events-none absolute -top-1 right-6 h-2 w-2 rounded-full bg-yellow-200 opacity-0 transition group-hover:opacity-100 group-hover:animate-sparkle"
    style={{ boxShadow: "0 0 12px gold" }}
  />
  <span
    className="pointer-events-none absolute bottom-3 left-6 h-1.5 w-1.5 rounded-full bg-yellow-100 opacity-0 transition group-hover:opacity-100 group-hover:animate-sparkle"
    style={{
      boxShadow: "0 0 10px gold",
      animationDelay: "0.4s",
    }}
  />
</div>
    </motion.div>
  );
}

/* ───────────────────────────── CONTACT ───────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      {/* sunset field background */}
      <div className="absolute inset-0">
        <img
          src={sunsetField}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,200,120,0.55) 0%, rgba(255,160,90,0.35) 50%, rgba(120,60,40,0.5) 100%)",
          }}
        />
      </div>

      {/* butterflies */}
      <Butterfly
        className="left-0 top-[20%] z-10"
        size={28}
        duration={28}
        color="#fff3c4"
      />
      <Butterfly
        className="left-0 top-[70%] z-10"
        size={24}
        duration={34}
        delay={6}
        color="#f4a3b8"
        path="M0,0 C100,40 200,-30 300,30 C400,80 500,-20 600,20"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl font-medium text-white drop-shadow-lg md:text-6xl"
        >
          Let&apos;s Connect <span>🌻</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-script mt-3 text-2xl text-white/90 drop-shadow"
        >
          I&apos;d love to hear from you.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          <SunflowerCard
            icon={<Mail className="h-6 w-6" />}
            label="Email"
            value="narmusrm@gmail.com"
            href="mailto:narmusrm@gmail.com"
            delay={0}
          />
          <SunflowerCard
            icon={<Linkedin className="h-6 w-6" />}
            label="LinkedIn"
            value="@narmu-eunoia"
            href="https://www.linkedin.com/in/narmu-srm-8044ab375/"
            delay={0.15}
          />
          <SunflowerCard
            icon={<FileDown className="h-6 w-6" />}
            label="Resume"
            value="Download Resume"
            href="src/assets/Narmatha-Resume.pdf"
            delay={0.3}
          />
        </div>

        {/* Contact form */}
        
      </div>
    </section>
  );
}

function FloralInput({
  as = "input",
  ...props
}: {
  as?: "input" | "textarea";
  placeholder?: string;
  type?: string;
}) {
  const cls =
    "w-full rounded-2xl border border-white/40 bg-white/60 px-5 py-3 text-foreground placeholder:text-foreground/40 outline-none backdrop-blur transition focus:border-sunset/60 focus:bg-white/90 focus:shadow-[0_0_0_4px_rgba(246,196,69,0.25)]";
  if (as === "textarea")
    return <textarea rows={5} className={cls} {...props} />;
  return <input className={cls} {...props} />;
}

function SunflowerCard({
  icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
      whileHover="hover"
      className="group relative block"
    >
      <div className="relative mx-auto h-56 w-56">
        {/* petals */}
        <motion.div
          variants={{ hover: { rotate: 25, scale: 1.08 } }}
          transition={{ type: "spring", stiffness: 100 }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-2xl">
            <defs>
              <radialGradient id={`pet-${label}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fde29a" />
                <stop offset="70%" stopColor="#f6c445" />
                <stop offset="100%" stopColor="#d9871a" />
              </radialGradient>
            </defs>
            <g transform="translate(100 100)">
              {Array.from({ length: 18 }).map((_, i) => (
                <ellipse
                  key={i}
                  cx="0"
                  cy="-60"
                  rx="14"
                  ry="42"
                  fill={`url(#pet-${label})`}
                  transform={`rotate(${(i / 18) * 360})`}
                />
              ))}
            </g>
          </svg>
        </motion.div>
        {/* center */}
        <div className="absolute inset-0 grid place-items-center">
          <div
            className="grid h-24 w-24 place-items-center rounded-full text-white shadow-inner"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #6a3f1a, #3a2410)",
            }}
          >
            <motion.div
              variants={{ hover: { scale: 1.15, rotate: -10 } }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {icon}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <p className="font-display text-2xl text-white drop-shadow">{label}</p>
        <p className="font-script text-lg text-white/90 drop-shadow">{value}</p>
      </div>
    </motion.a>
  );
}

/* ───────────────────────────── FOOTER ───────────────────────────── */

function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-12"
      style={{
        background:
          "linear-gradient(180deg, #5a2e1f 0%, #8a3f25 40%, #c97a3a 100%)",
      }}
    >
      <Butterfly
        className="left-0 top-1/2 z-10"
        size={22}
        duration={22}
        color="#ffe6a3"
        path="M0,0 C120,-30 240,20 360,-20 C480,-60 600,10 720,-20"
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
        <div className="relative h-20 w-14">
          <Sunflower className="left-0 top-0" size={56} />
        </div>
        <p className="font-script text-2xl text-amber-50">
          Made with kindness, flowers, and beautiful thinking.
        </p>
        <p className="font-display text-xl text-amber-100">
          Narmu Eunoia <span>🌻</span>
        </p>
        <p className="mt-2 text-xs text-amber-100/70">
          © {new Date().getFullYear()} Eunoia · always choose beautiful thinking
        </p>
      </div>
    </footer>
  );
}
