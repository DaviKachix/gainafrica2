"use client";

import Image from "next/image";

export default function SiteAside() {
  return (
    <aside className="hidden sm:flex fixed top-0 right-0 h-screen w-20 lg:w-24 bg-gradient-to-b from-white to-black z-[50] flex-col items-center py-6 shadow-lg">
      <div className="mt-4 w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
        <Image
          src="/logo.webp"
          alt="SDA Logo"
          width={36}
          height={36}
          className="object-contain"
        />
      </div>
    </aside>
  );
}
