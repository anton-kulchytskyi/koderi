'use client'
import { motion } from 'framer-motion';

const imageVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-gray-100 flex justify-center items-center">
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/koderi/hero.jpg"
          alt="Hero Image"
          className="object-cover w-full h-full"
          initial="initial"
          animate="animate"
          variants={imageVariants}
        />
      </div>
      {/* <div className="absolute text-center text-white z-10">
        <h1 className="text-4xl font-bold mb-4">Ваш Код до Успіху</h1>
        <p className="text-lg">Молода та амбітна вебстудія Koderi</p>

      </div> */}
    </div>
  );
}

export default HeroSection;