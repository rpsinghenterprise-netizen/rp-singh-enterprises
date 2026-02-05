import { motion } from "framer-motion";
import school from "../../assets/products/Plastic Id Card Holder.jpg";
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
    desc: "Large format outdoor advertising",
    img: flexBanner,
    badge: "Soon",
  },
  {
    title: "Poster Printing",
    desc: "Vibrant and eye-catching posters",
    img: poster,
    badge: "Soon",
  },
  {
    title: "Brochures",
    desc: "Professional marketing materials",
    img: brochure,
    badge: "Soon",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl border shadow overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                {product.badge && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-serif font-bold">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
