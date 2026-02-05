"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const eventDate = new Date("2026-04-01T00:00:00");
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute inset-0">
        <div
  className="absolute inset-0 bg-[url('/bible-laptop.jpg')] bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 hover:scale-110 filter brightness-75 contrast-125"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-black/50 to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
          className="max-w-3xl space-y-10"
        >
          {/* Badge */}
          <motion.div className="inline-block px-5 py-2 bg-blue-950 text-white font-extrabold text-sm tracking-wider shadow-2xl uppercase drop-shadow-lg">
            Tanzania 2026
          </motion.div>

          {/* Subtitle */}
          <motion.p className="text-sm md:text-base font-bold uppercase tracking-widest text-white/90 drop-shadow-md">
            Annual Conference
          </motion.p>

          {/* Title */}
          <motion.h1 className="mt-3 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-2xl">
            Integrated for Mission
          </motion.h1>

          {/* Theme & Invitation */}
          <motion.p className="mt-4 text-lg sm:text-xl max-w-3xl leading-relaxed text-white/90">
            <span className="font-bold text-yellow-400 drop-shadow-md">Theme:</span>{" "}
            <span className="font-extrabold drop-shadow-lg text-white">
              Bringing departments and teams into one coordinated mission strategy.
            </span>
            <br />
            <span className="font-bold text-blue-950 drop-shadow-lg">
              Bring your team. Come ready to learn, collaborate, and build practical mission plans.
            </span>{" "}
            <span className="font-semibold text-white drop-shadow-md">
              Return home prepared to strengthen the church’s mission impact in your territory.
            </span>
          </motion.p>

          {/* Location & Dates */}
          <motion.div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-950" />
              <span className="text-white font-bold drop-shadow-md">
                University of Arusha, Arusha, Tanzania
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-950" />
              <span className="text-white font-bold drop-shadow-md">
                April 1–4, 2026 (Pre-event: March 31)
              </span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div className="mt-10 flex flex-wrap gap-4 sm:gap-6 text-center">
            {["days", "hours", "minutes", "seconds"].map((unit, i) => (
              <motion.div
                key={unit}
                className="flex-1 sm:flex-none px-6 py-5 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl hover:scale-105 transform transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-950 drop-shadow-lg">
                  {(timeLeft as any)[unit]}
                </span>
                <p className="text-sm uppercase tracking-wide mt-1 text-white drop-shadow-sm">{unit}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              asChild
              className="bg-blue-950 text-white font-extrabold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              <Link href="https://www.gain.africa" target="_blank" className="flex items-center gap-2">
                Register Now <ArrowRight className="h-5 w-5 inline-block" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/50 text-white hover:bg-white/10 bg-transparent font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
            >
              <Link href="/events">View Past Events</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
