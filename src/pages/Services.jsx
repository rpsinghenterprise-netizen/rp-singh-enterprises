/**
 * Services Page
 * Dedicated page showcasing all printing services
 */
import { motion } from "framer-motion";
import { Printer, Monitor, CreditCard, Image, Palette, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PricingSection from "../components/sections/PricingSection";

const services = [
  {
    id: 1,
    icon: <Printer className="w-10 h-10" />,
    title: "Offset Printing",
    description:
      "High-volume printing with exceptional quality and consistency for large orders.",
    features: [
      "Large volume orders",
      "Consistent color quality",
      "Cost-effective for bulk",
      "Premium paper options",
    ],
  },
  {
    id: 2,
    icon: <Monitor className="w-10 h-10" />,
    title: "Digital Printing",
    description:
      "Quick turnaround times with vibrant colors for short-run projects.",
    features: [
      "Fast turnaround",
      "No minimum order",
      "Variable data printing",
      "Photo-quality output",
    ],
  },
  {
    id: 3,
    icon: <CreditCard className="w-10 h-10" />,
    title: "ID Card Printing",
    description:
      "Professional ID cards with custom designs, photos, and security features.",
    features: [
      "PVC & plastic cards",
      "Photo integration",
      "Security features",
      "Bulk ordering",
    ],
  },
  {
    id: 4,
    icon: <Image className="w-10 h-10" />,
    title: "Flex & Banner Printing",
    description:
      "Large format printing for outdoor advertising and event signage.",
    features: [
      "Weather resistant",
      "Large format sizes",
      "Vibrant colors",
      "Quick installation",
    ],
  },
  {
    id: 5,
    icon: <Palette className="w-10 h-10" />,
    title: "Customized Branding",
    description:
      "Complete branding solutions including logos, stationery, and marketing materials.",
    features: [
      "Logo design",
      "Brand identity",
      "Marketing materials",
      "Complete packages",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            We offer comprehensive printing solutions to help your business
            stand out from the competition.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-card rounded-3xl p-10 shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-card-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 md:py-28 section-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-dark-foreground/70 text-lg mb-10">
              Get in touch with us today for a free quote. We're here to help
              bring your vision to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 gradient-gold px-10 py-5 rounded-full text-primary-foreground font-semibold text-lg shadow-elevated hover:shadow-2xl transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
