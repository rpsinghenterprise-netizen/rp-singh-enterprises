import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import products from "../data/product";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 overflow-x-hidden">

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
            Discover our range of high-quality printing products crafted to meet your{" "}
            <span className="text-white font-medium underline decoration-pink-500 underline-offset-8 italic">
              tailored
            </span>{" "}
            business needs.
          </motion.p>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-700 
                    ${item.isComingSoon ? "blur-[2px] grayscale-[0.5]" : "group-hover:scale-110"}`}
                />

                {item.isComingSoon && (
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center">
                    <span className="bg-white/90 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-1">
                  {item.desc}
                </p>

                <button
                  onClick={() => !item.isComingSoon && navigate(`/products/${item.id}`)}
                  disabled={item.isComingSoon}
                  className={`w-full py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2
                    ${item.isComingSoon
                      ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                      : "bg-pink-600 text-white hover:bg-pink-700 active:scale-95 shadow-lg shadow-pink-100"}`}
                >
                  {item.isComingSoon ? (
                    "Coming Soon"
                  ) : (
                    <>
                      View Details <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;