"use client";

import { motion, useInView } from "framer-motion";
import Map from "@/components/Map";
import Title from "@/components/Title";
import { ImLocation } from "react-icons/im";
import { useRef } from "react";

export default function Location() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const latitude = -2.9834958;
  const longitude = -60.0543518;
  const address = "MediFarma - unidade 1";

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  if (!apiKey) {
    console.error("A chave da API do Google Maps não foi configurada.");
    return null;
  }

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-[1400px] m-auto md:mt-20 relative"
      id="location"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="absolute -top-5 left-4 md:left-8 z-10">
        <Title content="Onde estamos" icon={ImLocation} />
      </div>
      <motion.div
        className="rounded-3xl shadow-lg drop-shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Map
          apiKey={apiKey}
          latitude={latitude}
          longitude={longitude}
          address={address}
        />
      </motion.div>
    </motion.div>
  );
}
