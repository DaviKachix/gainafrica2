"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Globe } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function GAiNExtraSections() {
  return (
    <section className="relative py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-6 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-[#f5f5f5]/40">
          
          {/* Card 1 — Purpose & Event Details */}
          <motion.div
            className="flex-shrink-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] bg-white rounded-3xl p-6 sm:p-8 shadow-xl snap-center max-w-full break-words whitespace-normal transform-gpu hover:scale-105 transition-transform duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[1.5rem] sm:text-[1.875rem] md:text-[2rem] font-extrabold text-blue-950 mb-6">
              Purpose & Event Details
            </h3>

            <p className="text-[#1a1a1a]/85 text-[0.875rem] sm:text-[1rem] md:text-[1.05rem] leading-relaxed mb-6 max-w-full break-words whitespace-normal">
              GAiN Tanzania 2026 equips leaders, communicators, creatives, and digital missionaries 
              to use technology and media in a coordinated way to advance the mission of the 
              <span className="font-semibold text-blue-950"><br />Seventh-day Adventist Church</span>. 
              It is a space for <span className="font-semibold text-blue-950">mission planning</span>, 
              <span className="font-semibold text-blue-950"><br />collaboration</span>, and 
              <span className="font-semibold text-blue-950"><br />practical training</span>.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {/* Dates */}
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-blue-950 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-950 text-sm sm:text-base mb-0.5">Dates</h4>
                  <p className="text-[#1a1a1a] text-xs sm:text-sm max-w-full break-words whitespace-normal">
                    April 1–4, 2026<br />Pre-event: OneVoice27 Marathon — March 31
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-blue-950 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-950 text-sm sm:text-base mb-0.5">Venue</h4>
                  <p className="text-[#1a1a1a] text-xs sm:text-sm max-w-full break-words whitespace-normal">
                    University of Arusha, Tanzania
                  </p>
                </div>
              </div>

              {/* Theme */}
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-blue-950 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-950 text-sm sm:text-base mb-0.5">Theme</h4>
                  <p className="text-[#1a1a1a] text-xs sm:text-sm max-w-full break-words whitespace-normal">
                    Integrated for Mission — aligning departments and teams into a coordinated strategy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Invitation & Registration */}
          <motion.div
            className="flex-shrink-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] bg-white rounded-3xl p-6 sm:p-8 shadow-xl snap-center max-w-full break-words whitespace-normal transform-gpu hover:scale-105 transition-transform duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[1.5rem] sm:text-[1.875rem] md:text-[2rem] font-extrabold text-blue-950 mb-6">
              WE CAN DO IT NOW!
            </h3>

            <p className="text-[#1a1a1a]/85 text-[0.875rem] sm:text-[1rem] md:text-[1.05rem] leading-relaxed mb-6 max-w-full break-words whitespace-normal">
              Bring your team. Come ready to <span className="font-semibold text-blue-950">learn</span>, 
              <span className="font-semibold text-blue-950"><br />collaborate</span>, and 
              <span className="font-semibold text-blue-950"><br />build practical mission plans</span>. 
              Return home prepared to strengthen the church’s mission impact in your territory.
            </p>

            <a
              href="https://www.gain.africa"
              target="_blank"
              className="inline-block px-6 sm:px-8 py-3 bg-blue-950 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-800 transition-all duration-300 text-[0.875rem] sm:text-base"
            >
              Register Now
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
