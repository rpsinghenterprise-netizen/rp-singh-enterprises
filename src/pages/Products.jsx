import { motion } from "framer-motion";
import products from "../data/product";
import { Sparkles } from "lucide-react";
import ProductCard from "../components/sections/ProductsSection";

const Products = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-16 sm:py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-pink-500 mb-4 flex-wrap justify-center"
          >
            <Sparkles size={20} />
            <span className="text-xs font-black uppercase tracking-[0.4em]">Professional Catalog</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 font-serif tracking-tighter leading-tight">
            Quality Printing Solutions
          </h2>
          
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Discover our range of high-quality printing products tailored to meet your business needs.
          </p>
        </div>

        {/* Horizontal Scrolling / Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
