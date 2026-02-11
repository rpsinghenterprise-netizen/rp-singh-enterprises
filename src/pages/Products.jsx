import { motion } from "framer-motion";
import products from "../data/product";
import { Sparkles } from "lucide-react";
import ProductCard from "../components/sections/ProductsSection";

const Products = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[75vh] md:h-[90vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
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

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
        </div>

        {/* Hero Content */}
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


      {/* PRODUCTS SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-serif mb-4">
            Our Product Range
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From ID cards to premium brochures, we deliver precision and quality in every piece.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

      </div>
    </div >
  );
};

export default Products;
