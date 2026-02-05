"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Presentation,
  Handshake,
  Lightbulb,
  Globe,
  Puzzle,
} from "lucide-react";

const whoAttend = [
  { icon: Users, text: "Union, Conference, and Field Officers" },
  { icon: Presentation, text: "Department Directors & Institutional Leaders" },
  { icon: Handshake, text: "Pastors, Elders & Local Church Leaders" },
  { icon: Lightbulb, text: "Communication Directors, Media Teams & Creatives" },
  { icon: Globe, text: "IT, Digital Evangelism & Innovation Teams" },
  { icon: Puzzle, text: "Digital Mission Builders & Content Creators" },
];

const whatExpect = [
  { icon: Presentation, text: "Mission-focused keynotes and real-life stories" },
  { icon: Lightbulb, text: "Hands-on digital evangelism training" },
  { icon: Handshake, text: "Strategic collaboration across departments" },
  { icon: Globe, text: "Global tools and mission innovation exposure" },
  { icon: Puzzle, text: "Clear, practical mission plans you can implement" },
];

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function WhoWhatSection() {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-gray-900 space-y-24">

        {/* WHO SHOULD ATTEND */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-80 lg:h-96">
            <Image
              src="/for.jpg" // replace with your public image
              alt="Who Should Attend"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-10 text-blue-900">Who Should Attend</h3>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.08 }}
              className="grid sm:grid-cols-1 gap-x-8 gap-y-6"
            >
              {whoAttend.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  variants={fade}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0">
                    <Icon className="w-7 h-7 text-blue-900" />
                  </div>
                  <span className="text-lg leading-snug text-gray-900">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* WHAT TO EXPECT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-10 text-blue-900">What to Expect</h3>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.08 }}
              className="grid sm:grid-cols-1 gap-x-8 gap-y-6"
            >
              {whatExpect.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  variants={fade}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0">
                    <Icon className="w-7 h-7 text-blue-900" />
                  </div>
                  <span className="text-lg leading-snug text-gray-900">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 lg:h-96 order-1 lg:order-2">
            <Image
              src="/male.jpg" // replace with your public image
              alt="What to Expect"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
