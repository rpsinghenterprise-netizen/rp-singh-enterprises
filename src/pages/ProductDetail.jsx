import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Tag, Layers } from "lucide-react";
import products from "../data/product";

const categoryLabels = {
  "id-card": "ID Card",
  "visiting-card": "Visiting Card",
  marketing: "Marketing Material",
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <section className="min-h-screen bg-[#fafafa] px-6 py-24 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white border border-slate-200 rounded-3xl p-10 text-center">
          <h1 className="text-3xl font-black text-slate-900 mb-3">Product Not Found</h1>
          <p className="text-slate-600 mb-8">
            The product you are trying to view does not exist.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-pink-700 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#fafafa] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
          >
            <img
              src={product.image}
              alt={product.title}
              className={`w-full h-[360px] md:h-[520px] object-cover ${
                product.isComingSoon ? "blur-[1px] grayscale-[0.35]" : ""
              }`}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm"
          >
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              {product.title}
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              {product.desc}
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-slate-700">
                <Tag size={18} />
                <span className="font-medium">Product ID: #{product.id}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Layers size={18} />
                <span className="font-medium">
                  Category: {categoryLabels[product.category] || product.category}
                </span>
              </div>
            </div>

            {product.isComingSoon ? (
              <button
                disabled
                className="w-full py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] bg-slate-100 text-slate-400 cursor-not-allowed"
              >
                Coming Soon
              </button>
            ) : (
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] bg-pink-600 text-white hover:bg-pink-700 active:scale-[0.99] transition-all"
              >
                Enquire Now
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
