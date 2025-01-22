"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

type Route = {
  to: string;
  title: string;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const list: Route[] = [
    {
      to: "#about",
      title: "Quem somos",
    },
    {
      to: "#location",
      title: "Onde estamos",
    },
    {
      to: "#contact",
      title: "Nossas redes",
    },
  ];

  return (
    <div className="bg-dark-blue backdrop-blur p-4 lg:py-6 lg:px-10 rounded-3xl bg-opacity-65 w-full md:m-auto max-w-[1400px] flex items-center justify-between relative z-10">
      <Image
        className="object-contain md:w-[140px] lg:w-[180px]"
        src="/POSITIVO.png"
        alt="MediFarma logo"
        width={100}
        height={38}
        priority
      />
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          {list.map(({ to, title }: Route) => (
            <li key={title}>
              <Link href={to} className="text-white font-normal text-lg">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <IoCloseOutline /> : <IoMenu />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 right-6 bg-dark-blue bg-opacity-90 rounded-lg shadow-lg p-4">
          <ul className="flex flex-col gap-4">
            {list.map(({ to, title }: Route) => (
              <li key={title}>
                <Link
                  href={to}
                  className="text-white font-normal text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
