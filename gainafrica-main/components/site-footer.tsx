import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white shadow-2xl">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Logo & Description */}
          <div className="md:col-span-2 transform transition-transform hover:-translate-y-1 hover:scale-105 duration-300">
            <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              GAiN Africa
            </Link>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-md leading-relaxed">
              Global Adventist Internet Network — Bringing together Adventist media and communications professionals across Africa to share knowledge, build partnerships, and advance the mission.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-white/70 hover:text-yellow-400 transform hover:scale-110 transition-transform">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-yellow-400 transform hover:scale-110 transition-transform">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-yellow-400 transform hover:scale-110 transition-transform">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-yellow-400 transform hover:scale-110 transition-transform">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="transform transition-transform hover:-translate-y-1 hover:scale-105 duration-300">
            <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/events" className="text-white/70 hover:text-yellow-400 font-semibold">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/presenters" className="text-white/70 hover:text-yellow-400 font-semibold">
                  Presenters
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/70 hover:text-yellow-400 font-semibold">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-white/70 hover:text-yellow-400 font-semibold">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="transform transition-transform hover:-translate-y-1 hover:scale-105 duration-300">
            <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-white/70 font-medium hover:text-yellow-400 cursor-pointer">
                info@gainafrica.org
              </li>
              <li className="text-white/70 font-medium hover:text-yellow-400 cursor-pointer">
                Follow us on social media
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-sm md:text-base text-white/50">
            © {new Date().getFullYear()} GAiN Africa. All rights reserved.
          </p>
        </div>
      </div>

      {/* Mobile Floating CTA / Quick Access */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 md:hidden z-50">
        <Link
          href="/register"
          className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform"
        >
          Register
        </Link>
        <Link
          href="/contact"
          className="bg-black border-2 border-yellow-400 text-yellow-400 font-bold px-5 py-2 rounded-full shadow-lg transform hover:scale-105 hover:bg-yellow-400 hover:text-black transition-all"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
