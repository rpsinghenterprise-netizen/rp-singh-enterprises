import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import school from "../../assets/products/plastic-id-card-holder.jpg";
import visitingCard from "../../assets/products/brochure.jpg";
import flexBanner from "../../assets/products/flex-banner.jpg";
import poster from "../../assets/products/poster-printing.jpg";
import brochure from "../../assets/products/brochure.jpg";


const products = [
  {
    title: "ID Card Holder",
    desc: "Office, School, & Other Products",
    img: school,
  },
  {
    title: "Visiting Cards",
    desc: "Premium quality business cards",
    img: visitingCard,
  },
  {
    title: "Flex Banner",
    desc: "High-quality flex banners",
    img: flexBanner,
  },
  {
    title: "Poster Printing",
    desc: "Professional poster designs",
    img: poster,
    isComingSoon: true,
  },
  {
    title: "Brochure",
    desc: "Creative brochure designs",
    img: brochure,
    isComingSoon: true,
  },
];


function ProductsSection({ product, index }) {
  // If no `product` prop is provided, render the full products grid (used on Home)
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <ProductsSection key={p.title + i} product={p} index={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="relative group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-50">
        {(() => {
          const src = product?.img || product?.image || product?.imgUrl || product?.imageUrl;
          return (
            <img
              src={src}
              alt={product.title}
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${product.isComingSoon ? 'blur-[1px] grayscale-[0.3]' : ''}`}
            />
          );
        })()}

        {/* Coming Soon Overlay */}
        {product.isComingSoon && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-4">
            <p className="text-white text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-80">Coming</p>
            <h4 className="text-white text-3xl font-bold mb-6 font-serif tracking-tight">Soon</h4>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 text-center flex flex-col items-center justify-center flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-serif tracking-tight">
          {product.title}
        </h3>
        <p className="text-slate-500 text-sm font-sans leading-relaxed">
          {product.desc}
        </p>

        {product.isComingSoon ? (
          <motion.a
            href="/products"
            whileTap={{ scale: 0.95 }}
            className="mt-6 text-white bg-pink-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-pink-700 transition-all"
          >
            View All Products
          </motion.a>
        ) : (
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mt-6 text-pink-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
          >
            Enquire Now <Sparkles size={14} />
          </motion.button>
        )}

      </div>
    </motion.div>
  );
}

export default ProductsSection;
