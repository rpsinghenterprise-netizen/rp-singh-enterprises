import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../../data/product";

function ProductsSection({ product, index }) {
  if (!product) {
    return (
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 items-stretch">
            {products.map((p, i) => (
              <ProductsSection key={p.id} product={p} index={i} />
            ))}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center min-h-[250px]"
            >
              <Link
                to="/products"
                className="group flex flex-col items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center text-white shadow-lg shadow-pink-200 group-hover:bg-pink-700 transition-all"
                >
                  <ChevronRight size={32} strokeWidth={3} />
                </motion.div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-pink-600 transition-colors">
                  View All
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="relative group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 
            ${product.isComingSoon ? "blur-[1px] grayscale-[0.3]" : ""}`}
        />

        {product.isComingSoon && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
            <p className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-1 opacity-80">
              Coming
            </p>
            <h4 className="text-white text-2xl font-bold font-serif tracking-tight">
              Soon
            </h4>
          </div>
        )}
      </div>

      <div className="p-5 text-center flex flex-col items-center justify-center flex-1">
        <h3 className="text-md font-bold text-slate-900 mb-1 font-serif tracking-tight">
          {product.title}
        </h3>
        <p className="text-slate-500 text-xs font-sans leading-relaxed">
          {product.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default ProductsSection;