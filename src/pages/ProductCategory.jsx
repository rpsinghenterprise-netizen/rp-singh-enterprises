/**
 * Product Category Page
 * Dynamic page showing products within a specific category
 */
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Package } from "lucide-react";
import { getCategoryBySlug, getProductsByCategory } from "@/data/products";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProductCategory = () => {
  const { category } = useParams();
  const categoryData = getCategoryBySlug(category || "");
  const products = getProductsByCategory(category || "");

  if (!categoryData) {
    return (
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Package className="w-20 h-20 mx-auto text-muted-foreground mb-6" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Category Not Found
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              The product category you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </motion.div>

          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
            >
              Product Category
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
            >
              {categoryData.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            >
              {categoryData.description}
            </motion.p>

            {categoryData.availableSoon && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-6"
              >
                <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide">
                  Coming Soon
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Available Products
            </h2>
            <p className="text-muted-foreground mt-2">
              Explore our range of {categoryData.title.toLowerCase()} options
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-card rounded-3xl shadow-card overflow-hidden border border-border transition-all duration-300 hover:shadow-elevated"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Available Soon Badge */}
                  {product.availableSoon && (
                    <div className="absolute inset-0 bg-dark/70 flex flex-col items-center justify-center backdrop-blur-sm">
                      <span className="text-dark-foreground/80 text-xs uppercase tracking-widest mb-2">
                        Coming
                      </span>
                      <span className="text-dark-foreground font-display text-3xl font-bold">
                        Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 section-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Custom {categoryData.title}?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us for custom designs and bulk orders. We're here to help
              with all your printing needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 gradient-gold px-10 py-5 rounded-full text-primary-foreground font-semibold text-lg shadow-elevated hover:shadow-2xl transition-all duration-300"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
