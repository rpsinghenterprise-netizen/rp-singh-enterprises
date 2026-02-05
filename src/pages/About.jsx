import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, Heart } from "lucide-react";


const AboutHero = () => (
  <div className="bg-[#3e3e42] pt-40 pb-24 text-center px-6 border-b border-white/5">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <span className="text-pink-500 font-bold text-xs tracking-widest uppercase mb-4 block">
        About Us
      </span>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
        Your Trusted Partner in{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
          Printing Excellence
        </span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        R.P. Singh Printing Services has been delivering exceptional quality and
        service for over 15 years.
      </p>
    </motion.div>
  </div>
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
                src="../assets/products/flex-banner.jpg"
                alt="Printing Press Facility"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-4 sm:left-8 bg-pink-600 text-white px-6 py-4 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold leading-none">15+</h3>
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
              Crafting Quality Prints <br className="hidden sm:block" />
              <span className="text-pink-600">Since 2009</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              R.P. Singh Printing Services is a trusted name in the printing
              industry, delivering premium quality prints using modern machines
              and skilled craftsmanship.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              From business essentials to large-scale branding, we focus on
              precision, consistency, and customer satisfaction in every job.
            </p>

            {/* HIGHLIGHTS */}
            <ul className="space-y-4 max-w-xl mx-auto lg:mx-0">
              {[
                "Premium quality printing with modern equipment",
                "Over 15+ years of industry experience",
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
  <section className="py-24 bg-[#3e3e42]">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">
        Our Core Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Excellence", icon: <Award />, desc: "Quality in every print" },
          { title: "Reliability", icon: <Clock />, desc: "On-time delivery" },
          { title: "Passion", icon: <Heart />, desc: "Love for printing" },
        ].map((v, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-2xl shadow-lg"
          >
            <div className="text-pink-500 mb-4">{v.icon}</div>
            <h3 className="font-bold text-xl mb-2">{v.title}</h3>
            <p className="text-gray-600">{v.desc}</p>
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
