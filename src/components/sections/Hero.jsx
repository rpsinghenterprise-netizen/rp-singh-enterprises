import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import leftImg from "../../assets/products/abstract-colorful.jpg";


const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={leftImg}
          alt="Abstract Colorful Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur mb-8"
        >
          <span className="text-gray-300 text-xs font-semibold tracking-widest uppercase">
            Premium Printing Services Since 2009
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-white block">We Help To Focus On</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-rose-400 to-yellow-400 italic">
            Your Identity
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Providing the best printing solutions for your business with premium
          quality materials and exceptional service.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <button className="px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full flex items-center gap-2 hover:scale-105 transition">
            Our Products <ArrowRight size={20} />
          </button>

         <Link to ="/contact" >
          <button className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:border-pink-600 hover:text-pink-600 transition hover:scale-105">
            Get a Quote
          </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
