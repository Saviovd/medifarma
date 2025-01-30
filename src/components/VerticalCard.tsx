"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IVerticalCardProps {
  img: string;
  title: string;
  index?: number;
}

export default function VerticalCard({
  img,
  title,
  index = 0,
}: IVerticalCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="rounded-3xl shadow-xl drop-shadow-2xl flex-1 min-w-[250px] h-[300px] md:h-[400px] bg-cover bg-center mb-4 relative"
      style={{ backgroundImage: `url(${img})` }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      variants={cardVariants}
    >
      <h3 className="text-base min-w-[170px] lg:text-lg font-semibold text-white lg:p-2 lg:px-6 bg-custom-gradient bg-opacity-50 rounded-3xl absolute h-8 -right-2 lg:-bottom-5 -bottom-3 lg:h-12 flex items-center justify-center lg:min-w-[200px]">
        {title}
      </h3>
    </motion.div>
  );
}
