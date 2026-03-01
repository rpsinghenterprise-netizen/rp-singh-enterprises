import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, Heart } from "lucide-react";
import Aboutimg from "../assets/products/about-img.jpg";


const AboutHero = () => (
  <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-white/5">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop"
        alt="About Us Background"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 text-center relative z-10"
    >
      <span className="text-pink-500 font-bold text-xs tracking-[0.4em] uppercase mb-6 block">
        About us
      </span>
      <h1 className="font-serif text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
        Your Trusted Partner in{" "}
        <span className="text-pink-500 italic">
          Printing Excellence
        </span>
      </h1>
      <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
       R.P. Singh Enterprises has been delivering exceptional quality and service for over  <span className="text-white font-bold">4 years</span>.
      </p>
    </motion.div>
  </section>
);

const AboutContent = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#f4f4f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={Aboutimg}
                alt="Printing Press Facility"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-4 sm:left-8 bg-pink-600 text-white px-6 py-4 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold leading-none">3+</h3>
              <p className="text-xs uppercase tracking-wider mt-1">
                Years Experience
              </p>
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-pink-600 font-semibold text-sm uppercase tracking-widest mb-4">
              Who We Are
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Your Identity, Professionally Crafted <br className="hidden sm:block" />
              <span className="text-pink-600">Premium ID Solutions Since 2022</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              R.P. Singh Enterprises is a trusted name in the I'd Card printing
              industry, delivering premium quality prints using modern thermal and inkjet technology
              and we provide crisp, tamper-resistant cards designed for daily wear.
            </p>

          </*p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              From business essentials to large-scale branding, we focus on
              precision, consistency, and customer satisfaction in every job.
            <*/p>

            {/* HIGHLIGHTS */}
            <ul className="space-y-4 max-w-xl mx-auto lg:mx-0">
              {[
                "Premium quality printing with modern equipment",
                "Over 3+ years of industry experience",
                "Dedicated customer support & satisfaction",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 justify-center lg:justify-start"
                >
                  <CheckCircle
                    size={20}
                    className="text-pink-600 mt-1 shrink-0"
                  />
                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const CoreValues = () => (
  <section className="py-20 md:py-28 bg-[#3e3e42]">
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.4em] block mb-4">
          What Drives Us
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
          Our Core Values
        </h2>
        <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
          The principles that guide our printing excellence and customer commitment.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Excellence", icon: <Award size={28} />, desc: "Quality in every print" },
          { title: "Reliability", icon: <Clock size={28} />, desc: "On-time delivery" },
          { title: "Passion", icon: <Heart size={28} />, desc: "Love for printing" },
        ].map((v, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12 }}
            transition={{ duration: 0.3 }}
            className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-500 group-hover:bg-pink-600 group-hover:text-white transition-all duration-500">
              {v.icon}
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3">
              {v.title}
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);



export default function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <CoreValues />
    </>
  );
}
