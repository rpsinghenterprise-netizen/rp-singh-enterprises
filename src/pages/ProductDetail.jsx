import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Tag, Layers, ArrowRight } from "lucide-react";
import products from "../data/product";

const categoryLabels = {
  "id-card": "ID Card",
  "visiting-card": "Visiting Card",
  marketing: "Marketing Material",
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showAllProducts, setShowAllProducts] = useState(false);
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

  // Get products from same category
  const categoryProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

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

        {categoryProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 pt-16 border-t border-slate-200"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 flex items-center justify-between"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 font-serif">
                  More {categoryLabels[product.category] || product.category} Products
                </h2>
                <div className="w-20 h-1 bg-pink-600 rounded-full" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {(showAllProducts ? categoryProducts : categoryProducts.slice(0, 4)).map((item, index) => (
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

            {categoryProducts.length > 4 && !showAllProducts && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 flex justify-center"
              >
                <button
                  onClick={() => setShowAllProducts(true)}
                  className="px-8 py-4 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition-all hover:scale-105 text-sm md:text-base flex items-center gap-2"
                >
                  View All Products <ArrowRight size={18} />
                </button>
              </motion.div>
            )}

            {showAllProducts && categoryProducts.length > 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-12 flex justify-center"
              >
                <button
                  onClick={() => setShowAllProducts(false)}
                  className="px-8 py-4 bg-slate-200 text-slate-900 font-bold rounded-full hover:bg-slate-300 transition-all hover:scale-105 text-sm md:text-base"
                >
                  Show Less
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
