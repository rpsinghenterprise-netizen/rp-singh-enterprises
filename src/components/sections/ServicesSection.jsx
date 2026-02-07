import React from "react";
import { motion } from "framer-motion";
import { 
  Printer, 
  Monitor, 
  CreditCard, 
  Image as ImageIcon, 
  Palette, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500/30 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 flex flex-col h-full"
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="p-8 flex-grow">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-lg bg-slate-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
            {service.icon}
          </div>
          <span className="text-slate-300 group-hover:text-blue-200 transition-colors">
            0{service.id}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-3">
          {service.points.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
              <span className="text-slate-700 text-sm font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Action Area */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 mt-auto">
        <button className="flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors w-full justify-end">
          Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            World Class Printing
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            We deliver precision-engineered printing solutions tailored to elevate your brand's presence in the market.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          
          {/* Call to Action Card (Optional filler for the grid) */}
          <motion.div 
            variants={cardVariants}
            className="rounded-xl p-8 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 group cursor-pointer h-full min-h-[400px]"
          >
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl text-slate-400 group-hover:text-blue-500 transition-colors">+</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Need something else?</h3>
            <p className="text-slate-500 max-w-xs mx-auto mb-6">
              Contact us for custom quotes on specialized printing projects.
            </p>
            <span className="px-6 py-2 rounded-lg bg-slate-900 text-white font-semibold text-sm shadow-lg shadow-slate-900/20 group-hover:shadow-blue-600/20 group-hover:bg-blue-600 transition-all">
              Contact Support
            </span>
          </motion.div>
        </motion.div>

      </section>
    </div>
  );
};

export default App;