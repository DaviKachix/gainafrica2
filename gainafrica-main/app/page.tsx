"use client";

import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
//import { SiteFooter } from "@/components/site-footer";
import SiteAside from "@/components/site-aside";
import WhoWhatSection from "@/components/WhoWhatSection";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, User, Calendar, CheckCircle, Hourglass } from "lucide-react";
import GAinExtraSections from "@/components/GAinExtraSections";

export default function Page() {
  const registrationSteps = [
    { icon: Mail, title: "Enter Email", desc: "Provide your email to receive updates." },
    { icon: User, title: "Your Information", desc: "Fill in your information and details." },
    { icon: CheckCircle, title: "Confirm Details", desc: "Verify your info before registration." },
    { icon: Calendar, title: "Book Your Spot", desc: "Reserve your seat for the event." },
    { icon: Hourglass, title: "Wait for Event", desc: "Rest assuredly and pray for the event." },
  ];

  return (
    <div className="relative min-h-screen bg-white text-black font-sans antialiased overflow-x-hidden">
      <SiteAside />
      <SiteHeader />

      <AnimatePresence mode="wait">
        <motion.main
          key="homepage"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-0"
        >
          
          <HeroSection />

{/* About GAiN */}
<section className="relative py-36 bg-gray-50 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight text-gray-900"
    >
      About <span className="text-blue-900">GAiN Africa</span> <br />
      <span className="text-gray-800 font-semibold">2026 Conference</span>
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-20"
    >
      GAiN Africa brings together <span className="font-semibold text-blue-900">Seventh-Day Adventist media</span> 
      and <span className="font-semibold text-gray-900">communication professionals</span> from across Africa to 
      <span className="font-semibold text-gray-800"> share knowledge</span>, 
      <span className="font-semibold text-blue-900"> build partnerships</span>, and 
      <span className="font-semibold text-gray-900"> advance the mission of the Church</span>. 
      Our annual conference features <span className="font-semibold text-gray-800">keynote presentations</span>, 
      <span className="font-semibold text-blue-900"> hands-on workshops</span>, and 
      <span className="font-semibold text-gray-900"> strategic networking opportunities</span>.
    </motion.p>

    {/* Icons Row */}
    <motion.div
      className="mt-12 flex justify-center items-center gap-12 flex-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {[
        { src: "/icon.jpg", alt: "GAiN Africa" },
        { src: "/OneVoice27.jpeg", alt: "OneVoice27" },
        { src: "/SDA Logo.png", alt: "Seventh-Day Adventist" },
        { src: "/Hope Channel.png", alt: "Hope Channel" },
      ].map((icon, idx) => (
        <a
          key={idx}
          href={icon.src}
          target="_blank"
          className="hover:scale-105 transition-transform duration-300"
        >
          <img src={icon.src} alt={icon.alt} className="h-20 w-20 object-contain opacity-90" />
        </a>
      ))}
    </motion.div>
  </div>

  {/* Background Faint Icons */}
  {[
    "/icon.jpg",
    "/OneVoice27.jpeg",
    "/SDA Logo.png",
    "/Hope Channel.png",
  ].map((src, idx) => (
    <motion.img
      key={idx}
      src={src}
      alt={`bg-icon-${idx}`}
      className={`absolute h-36 w-36 opacity-10 ${
        idx === 0
          ? "top-10 left-10"
          : idx === 1
          ? "top-20 right-10"
          : idx === 2
          ? "bottom-20 left-20"
          : "bottom-10 right-20"
      }`}
      animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1, 1.05] }}
      transition={{ repeat: Infinity, duration: 10 + idx * 2, ease: "easeInOut" }}
    />
  ))}
</section>

          {/* Who to attend & What Section */}
          <WhoWhatSection />

 {/* Registration Process */}
<section className="relative py-32 bg-gray-50 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 leading-tight"
    >
      Registration Process
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className="text-gray-700 mb-16 text-lg sm:text-xl max-w-3xl mx-auto"
    >
      Follow these simple steps to secure your spot at <span className="font-semibold text-gray-900">GAiN Africa 2026</span>.
    </motion.p>

    {/* Horizontal Scrollable Cards */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-x-auto flex gap-6 pb-6 snap-x snap-mandatory"
    >
      {registrationSteps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div
            key={i}
            className="flex-shrink-0 w-64 sm:w-72 md:w-80 snap-start bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            {/* Icon */}
            <div className="bg-gray-100 text-gray-900 p-5 rounded-full mb-4 flex items-center justify-center">
              <Icon className="w-8 h-8" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
          </div>
        );
      })}
    </motion.div>

    {/* CTA Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-16"
    >
      <Button asChild className="inline-flex items-center gap-3 px-12 py-5 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 shadow transition-all duration-300 text-lg">
        <a href="/register">
          Start Registration <ArrowRight className="w-6 h-6" />
        </a>
      </Button>
    </motion.div>
  </div>
</section>

<GAinExtraSections />  {/* Purpose, Event Details, Invitation */}
          {/* Final CTA */}
  <section className="py-28 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Image */}
    <div className="w-full lg:w-1/2">
      <img
        src="/elegant.jpg" // make sure this is in the public folder
        alt="GAiN Tanzania 2026"
        className="w-full h-auto rounded-xl object-cover shadow-lg"
      />
    </div>

    {/* Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
      <h2 className="text-4xl font-extrabold text-blue-900">
        Be Part of the Movement
      </h2>
      <p className="text-lg text-black/70 max-w-lg">
        GAiN Tanzania 2026 is more than a conference — it’s alignment for mission.
      </p>
      <Button
        asChild
        className="px-10 py-5 text-lg font-bold rounded-xl bg-blue-950 text-white hover:scale-105 transition-transform duration-300 shadow-lg"
      >
        <a href="/register">Register Now</a>
      </Button>
    </div>

  </div>
</section>


        </motion.main>
      </AnimatePresence>
    </div>
  );
}
