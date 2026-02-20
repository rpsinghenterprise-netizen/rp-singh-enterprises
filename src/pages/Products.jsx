import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import products from "../data/product";

const categoryLabels = {
  "id-card": "ID Cards",
  "visiting-card": "Visiting Cards",
  marketing: "Marketing Materials",
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Products = () => {
  const navigate = useNavigate();
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];

    if (product.category === "id-card") {
      if (acc[product.category].length === 0)
        acc[product.category].push(product);
    } else {
      acc[product.category].push(product);
    }
    return acc;
  }, {});

  const renderFullWidthProduct = (item, index) => (
    <motion.div
      key={item.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="group relative bg-white rounded-[3rem] overflow-hidden border border-slate-100 mb-16 flex flex-col md:flex-row min-h-[500px] hover:shadow-2xl transition-shadow duration-700"
    >
      <div className="w-full md:w-[55%] relative overflow-hidden bg-slate-50 min-h-[400px]">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105
            ${item.isComingSoon ? "blur-[2px] grayscale-[0.5]" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="w-full md:w-[45%] flex flex-col justify-center p-10 md:p-16 lg:p-20">
        <motion.div
          variants={textRevealVariants}
          className="flex items-center gap-2 text-pink-600 mb-6"
        >
          <ShieldCheck size={18} />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">
            Premium Identity
          </span>
        </motion.div>

        <motion.h3
          variants={textRevealVariants}
          className="font-black text-slate-900 mb-6 font-serif text-4xl md:text-6xl leading-[1.1] tracking-tighter"
        >
          {item.title}
        </motion.h3>

        <motion.p
          variants={textRevealVariants}
          className="text-slate-500 mb-10 text-lg md:text-xl leading-relaxed font-light"
        >
          {item.desc}
        </motion.p>

        <motion.div variants={textRevealVariants}>
          <button
            onClick={() =>
              !item.isComingSoon && navigate(`/category/${item.category}`)
            }
            className={`group/btn relative overflow-hidden py-5 px-10 rounded-2xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 w-fit
              ${
                item.isComingSoon
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-slate-900 text-white hover:bg-pink-600 shadow-xl shadow-slate-200"
              }`}
          >
            <span className="relative z-10">
              {item.isComingSoon ? "Coming Soon" : "View Details"}
            </span>
            {!item.isComingSoon && (
              <ArrowRight
                size={18}
                className="relative z-10 group-hover/btn:translate-x-2 transition-transform"
              />
            )}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900">
      <section className="relative h-[75vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop"
            alt="Product Printing Texture"
            className="w-full h-full object-cover scale-110 brightness-75"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1562654501-a0ccc0af3fb1?q=80&w=2000&auto=format&fit=crop";
            }}
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 text-pink-400 mb-8"
          >
            <div className="w-8 h-[1px] bg-pink-500/50" />
            <Sparkles size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.6em]">
              Premium Product Boutique
            </span>
            <div className="w-8 h-[1px] bg-pink-500/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 font-serif tracking-tighter leading-tight"
          >
            Quality Printing{" "}
            <span className="text-pink-500 italic">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-slate-200 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Discover our range of high-quality printing products crafted to meet
            your{" "}
            <span className="text-white font-medium underline decoration-pink-500 underline-offset-8 italic">
              tailored
            </span>{" "}
            business needs.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {Object.entries(groupedProducts).map(
          ([category, categoryProducts], catIndex) => (
            <div key={category} className="mb-40">
              <motion.header
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-slate-200 pb-12"
              >
                <div>
                  <motion.span
                    variants={textRevealVariants}
                    className="text-pink-600 font-black text-[11px] uppercase tracking-[0.6em] mb-4 block"
                  >
                    Collection .0{catIndex + 1}
                  </motion.span>
                  <motion.h2
                    variants={textRevealVariants}
                    className="text-6xl md:text-8xl font-black text-slate-900 font-serif tracking-tighter leading-none"
                  >
                    {categoryLabels[category] || category}
                  </motion.h2>
                </div>
                <motion.p
                  variants={textRevealVariants}
                  className="text-slate-400 font-bold uppercase text-[10px] tracking-widest"
                >
                  {categoryProducts.length} Exclusive Designs
                </motion.p>
              </motion.header>

              <div className="space-y-12">
                {categoryProducts.map((product, index) =>
                  renderFullWidthProduct(product, index),
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Products;