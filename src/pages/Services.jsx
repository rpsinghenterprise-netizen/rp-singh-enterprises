import React from "react";
import { motion } from "framer-motion";
import { 
  Printer, 
  Monitor, 
  CreditCard, 
  Image as ImageIcon, 
  Palette, 
  ArrowRight,
  CheckCircle2,
  Check
} from "lucide-react";

// --- Data Configuration ---
const services = [
  {
    id: 1,
    icon: <Printer className="w-8 h-8" />,
    title: "Offset Printing",
    description: "High-volume printing with exceptional quality and consistency for large orders.",
    features: [
      "Large volume cost efficiency",
      "Consistent color fidelity",
      "Premium paper stocks",
      "Pantone matching available",
    ],
  },
  {
    id: 2,
    icon: <Monitor className="w-8 h-8" />,
    title: "Digital Printing",
    description: "Quick turnaround times with vibrant colors for short-run projects.",
    features: [
      "Same-day turnaround",
      "No minimum order quantity",
      "Variable data printing (VDP)",
      "Photo-quality resolution",
    ],
  },
  {
    id: 3,
    icon: <CreditCard className="w-8 h-8" />,
    title: "ID Card Printing",
    description: "Professional ID cards with custom designs, photos, and security features.",
    features: [
      "Durable PVC & smart cards",
      "Holographic security layers",
      "Employee database sync",
      "Lanyard & holder options",
    ],
  },
  {
    id: 4,
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Flex & Banner Printing",
    description: "Large format printing for outdoor advertising and event signage.",
    features: [
      "UV & Weather resistant",
      "Seamless large formats",
      "High-impact vibrant inks",
      "Installation services",
    ],
  },
  {
    id: 5,
    icon: <Palette className="w-8 h-8" />,
    title: "Customized Branding",
    description: "Complete branding solutions including logos, stationery, and marketing materials.",
    features: [
      "Logo & Identity Design",
      "Corporate Stationery Kits",
      "Marketing Collateral",
      "Brand Guidelines",
    ],
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small one-off projects.",
    features: ["Digital Printing", "Standard Paper Stock", "48h Turnaround", "Email Support"],
    highlight: false
  },
  {
    name: "Business",
    price: "$199",
    description: "Ideal for growing companies.",
    features: ["Offset & Digital", "Premium Paper Options", "24h Turnaround", "Design Assistance", "Free Delivery"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large scale operations.",
    features: ["All Printing Services", "Dedicated Account Mgr", "Priority Production", "Warehousing", "API Integration"],
    highlight: false
  }
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- Components ---

const ServiceCard = ({ service }) => (
  <motion.div
    variants={cardVariants}
    className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-pink-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-900/5 flex flex-col h-full"
  >
    {/* Top Accent Line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

    <div className="p-8 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-inner">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-pink-700 transition-colors">
          {service.title}
        </h3>
      </div>

      <p className="text-slate-600 leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-pink-500 mt-1 shrink-0" />
            <span className="text-sm font-medium text-slate-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

// --- Main Page Component ---
const ServicesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-pink-100 selection:text-pink-900">
      
      {/* Page Header */}
      <section className="pt-40 pb-32 bg-[#374151] relative overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-pink-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[60%] bg-amber-500/10 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-2 px-5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-bold text-xs uppercase tracking-[0.3em] mb-8">
              Premium Printing Solutions
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight font-serif"
          >
            Our <span className="italic text-pink-500">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-sans font-light"
          >
            Merging traditional craftsmanship with cutting-edge technology to deliver 
            precision-engineered print solutions that elevate your brand.
          </motion.p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
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
            
            {/* "More" Card Filler */}
            <motion.div 
              variants={cardVariants}
              className="rounded-2xl p-8 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center hover:border-pink-400 hover:bg-pink-50/30 transition-all duration-300 group cursor-pointer min-h-[300px]"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl text-slate-300 group-hover:text-pink-500 transition-colors">+</span>
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-2">Need a Custom Solution?</h3>
              <p className="text-slate-500 text-sm max-w-[200px]">
                Contact our engineering team for specialized project quotes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-900/20 blur-3xl rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-purple-900/20 blur-3xl rounded-full -translate-x-1/2" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Get in touch with us today for a free quote. We're here to help bring your vision to life with professional quality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-black/50 hover:bg-amber-600 transition-all"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;