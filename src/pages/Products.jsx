import { motion } from "framer-motion";
import products from "../data/product";

const Products = () => {
  return (
    <section className="pt-40 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <span className="text-pink-600 text-sm font-semibold uppercase tracking-widest">
            Our Products
          </span>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Complete Printing Solutions
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Explore our wide range of professional printing products crafted
            with precision and premium quality.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* IMAGE */}
              <div className="h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-gray-900">
                  {product.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {product.desc}
                </p>

                <button className="mt-6 px-6 py-2 text-sm rounded-full bg-pink-600 text-white hover:bg-pink-700 transition">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
