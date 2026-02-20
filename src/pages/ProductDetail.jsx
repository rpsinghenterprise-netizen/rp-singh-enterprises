import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Tag, 
  Layers, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Box, 
  Zap 
} from "lucide-react";
import products from "../data/product";

const categoryLabels = {
  "id-card": "ID Card",
  "visiting-card": "Visiting Card",
  marketing: "Marketing Material",
};

const WHATSAPP_NUMBER = "919304259943";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === String(id));

  // 1. Logic Fix: Fetch ONLY images belonging to this specific product ID
  const specificProductImages = useMemo(() => {
    if (!product) return [];
    // If an 'images' array exists, use it. Otherwise, wrap the single 'image' in an array.
    return Array.isArray(product.images) ? product.images : [product.image];
  }, [product]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // 2. Auto-Slide Logic
  useEffect(() => {
    if (specificProductImages.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % specificProductImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [specificProductImages.length, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [id]);

  if (!product) return null;

  const productCategoryLabel = categoryLabels[product.category] || product.category;
  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in the ${product.title} (ID: #${product.id}).\nMaterial: ${product.material || 'Standard'}`
  );
  const whatsappEnquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section className="min-h-screen bg-[#fafafa] text-slate-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 md:pt-32 md:py-24">
        
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 md:mb-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-pink-600 transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Catalog
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* LEFT: SPECIFIC PRODUCT GALLERY */}
          <div className="w-full space-y-4 md:space-y-8">
            <div className="relative aspect-square md:aspect-[4/5] bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-2xl shadow-slate-200/50 group flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={specificProductImages[activeImageIndex]}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  // object-contain ensures the image is NEVER cropped
                  className="w-full h-full object-contain p-4 md:p-8"
                />
              </AnimatePresence>

              {/* Navigation Controls */}
              {specificProductImages.length > 1 && (
                <div className="absolute inset-x-2 md:inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-all hidden md:flex">
                  <button 
                    onClick={() => setActiveImageIndex((prev) => (prev - 1 + specificProductImages.length) % specificProductImages.length)}
                    className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-pink-600 hover:text-white transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setActiveImageIndex((prev) => (prev + 1) % specificProductImages.length)}
                    className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-pink-600 hover:text-white transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}

              <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[9px] md:text-[10px] font-bold px-3 py-1 md:px-5 md:py-2 rounded-full">
                {activeImageIndex + 1} / {specificProductImages.length}
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="flex gap-2 md:gap-3 overflow-x-auto py-2 px-1 no-scrollbar justify-start md:justify-center">
              {specificProductImages.map((img, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ y: -3 }}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden border-2 bg-white transition-all p-1
                    ${activeImageIndex === idx ? "border-pink-600 shadow-lg scale-105" : "border-transparent opacity-60"}`}
                >
                  <img src={img} className="w-full h-full object-contain" alt="thumbnail" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTENT SECTION */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-50 p-6 md:p-14 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <span className="bg-pink-50 text-pink-600 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                  {productCategoryLabel}
                </span>
                {product.isBestSeller && (
                  <div className="flex items-center gap-1 text-amber-500">
                    <Zap size={14} fill="currentColor" />
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Bestseller</span>
                  </div>
                )}
              </div>

              <h1 className="text-3xl md:text-7xl font-black text-slate-900 mb-4 md:mb-6 font-serif italic tracking-tighter leading-[1.1] md:leading-[0.9]">
                {product.title}
              </h1>

              <p className="text-slate-500 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-light border-l-2 border-pink-100 pl-4 md:pl-6 italic">
                {product.fullDesc || product.desc}
              </p>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                {[
                  { icon: Tag, label: "Material", val: product.material || "Premium PVC" },
                  { icon: Box, label: "Minimum Order", val: (product.moq || "100") + " Units" },
                  { icon: Clock, label: "Lead Time", val: product.leadTime || "3-5 Days" },
                  { icon: ShieldCheck, label: "Finish", val: product.finish || "Glossy" }
                ].map((spec, i) => (
                  <div key={i} className="p-3 md:p-5 bg-slate-50 rounded-[1.2rem] md:rounded-[2rem] border border-slate-100">
                    <spec.icon size={16} className="text-pink-600 mb-2 md:mb-3" />
                    <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">{spec.label}</p>
                    <p className="font-bold text-slate-900 text-xs md:text-sm">{spec.val}</p>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="space-y-4">
                <a
                  href={whatsappEnquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group bg-slate-900 text-white py-4 md:py-6 rounded-2xl md:rounded-3xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 md:gap-4 hover:bg-pink-600 transition-all active:scale-95 shadow-2xl"
                >
                  Request Bulk Quote <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            {/* Trust Footer */}
            <div className="grid grid-cols-3 gap-2 md:gap-6 px-4 md:px-10">
              {["Quality (QC Verified)", "Shipping (Pan India)", "Wholesale (Best Rates)"].map((t, i) => {
                const [title, sub] = t.split(" (");
                return (
                  <div key={i} className={`text-center space-y-1 ${i === 1 ? 'border-x border-slate-200' : ''}`}>
                    <p className="text-[8px] md:text-[10px] font-black uppercase text-slate-400">{title}</p>
                    <p className="text-[7px] md:text-[9px] text-slate-400 font-medium">{sub.replace(")", "")}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}