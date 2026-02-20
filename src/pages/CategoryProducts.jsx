import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import products from "../data/product";

const categoryLabels = {
  "id-card": "ID Cards",
  "visiting-card": "Visiting Cards",
  marketing: "Marketing Materials",
};

export default function CategoryProducts() {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryProducts = products.filter(
    (item) => item.category === category,
  );

  if (!categoryProducts || categoryProducts.length === 0) {
    return (
      <section className="min-h-screen bg-[#fafafa] px-6 pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white border border-slate-100 rounded-[3rem] p-12 text-center shadow-2xl shadow-slate-200/50">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ArrowLeft className="text-slate-300" size={24} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4 font-serif italic">
            Empty Space
          </h1>
          <p className="text-slate-500 mb-10 leading-relaxed font-light">
            We couldn't find any products in the "{category}" category. It might
            have been moved or renamed.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-pink-600 transition-all active:scale-95 shadow-lg"
          >
            Return to Gallery
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#fafafa] text-slate-900 overflow-x-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50/50 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100/50 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-40 pb-24">
        {/* Navigation / Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-pink-600 transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Products
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 relative"
        >
          <div className="flex items-center gap-3 text-pink-500 mb-4">
            <Sparkles size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">
              Curated Collection
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 font-serif tracking-tighter leading-[0.85] italic">
            {categoryLabels[category] || category}
          </h1>
          <div className="flex items-center gap-6">
            <div className="w-24 h-1 bg-pink-600 rounded-full" />
            <span className="text-slate-300 font-light text-sm italic">
              0{categoryProducts.length} Items Available
            </span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categoryProducts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 flex flex-col h-full hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 cursor-pointer"
              onClick={() =>
                !item.isComingSoon && navigate(`/products/${item.id}`)
              }
            >
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden bg-slate-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out
                    ${item.isComingSoon ? "blur-[4px] grayscale" : "group-hover:scale-110"}`}
                />

                {/* Subtle Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {item.isComingSoon && (
                  <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="bg-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-xl">
                      In Production
                    </span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-10 flex flex-col flex-1 relative bg-white">
                <h3 className="text-3xl font-black text-slate-900 mb-4 font-serif tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm mb-12 leading-relaxed flex-1 font-light italic">
                  {item.desc}
                </p>

                <div className="relative pt-6 border-t border-slate-50">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!item.isComingSoon) navigate(`/products/${item.id}`);
                    }}
                    disabled={item.isComingSoon}
                    className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3
                      ${
                        item.isComingSoon
                          ? "bg-slate-50 text-slate-300 cursor-not-allowed"
                          : "bg-slate-900 text-white hover:bg-pink-600 shadow-xl shadow-slate-100 active:scale-95"
                      }`}
                  >
                    {item.isComingSoon ? "Soon" : "View Edition"}
                    {!item.isComingSoon && (
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}