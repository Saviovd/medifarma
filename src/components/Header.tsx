"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

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

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: -10 },
  };

  return (
    <motion.div
      className="bg-dark-blue backdrop-blur p-4 lg:py-6 lg:px-10 rounded-3xl bg-opacity-65 w-full md:m-auto max-w-[1400px] flex items-center justify-between relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Image
        className="object-contain md:w-[140px] lg:w-[160px]"
        src="/POSITIVO.svg"
        alt="MediFarma logo"
        width={100}
        height={38}
        quality={100}
        priority
      />
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          {list.map(({ to, title }: Route, index) => (
            <li key={index}>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 right-2 bg-dark-blue bg-opacity-90 rounded-lg shadow-lg p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="flex flex-col gap-4">
              {list.map(({ to, title }: Route, index) => (
                <li key={index}>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
