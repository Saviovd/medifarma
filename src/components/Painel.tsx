"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa6";

export default function Painel() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      ref={ref}
      className="w-full md:w-full md:mt-10 md:h-[500px] md:m-auto max-w-[1400px] rounded-3xl shadow-xl flex flex-col md:flex-row justify-between p-4 pt-8 md:px-8 md:py-9 bg-gray-50 h-auto"
    >
      <div className="flex flex-col justify-center gap-4 relative">
        <h2 className="text-lg lg:text-2xl">
          O cuidado que você precisa
          <br />
          <span className="text-xl lg:text-3xl font-medium text-dark-blue">
            com a proximidade que você merece!
          </span>
        </h2>
        <p className="max-w-[540px] text-sm lg:text-base -tracking-tighter">
          Na Medifarma, sua saúde é nossa prioridade,
          <br />e o cuidado começa aqui, na nossa terra, com você.
        </p>
        <div className="md:absolute bottom-0">
          <Button
            content="Entre em contato"
            icon={FaWhatsapp}
            className=""
            href={"https://api.whatsapp.com/send?phone=5592994709604"}
          />
        </div>
      </div>

      <motion.div className="bg-[url('/img/pharmacist-work.jpg')] bg-no-repeat bg-center sm:bg-top bg-cover w-full h-60 md:h-auto md:w-1/2 rounded-3xl mt-5 md:mt-0"></motion.div>
    </motion.div>
  );
}
