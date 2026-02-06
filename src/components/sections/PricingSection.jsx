/**
 * Pricing Section
 * Display pricing packages with bulk discount tiers
 */
import { motion } from "framer-motion";
import { Check, Zap, Crown, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    id: 1,
    name: "Starter",
    icon: <Zap className="w-6 h-6" />,
    description: "Perfect for small businesses and personal projects",
    basePrice: "₹5",
    unit: "per piece",
    features: [
      "Digital printing",
      "Standard paper quality",
      "3-5 day turnaround",
      "Email support",
      "Basic design templates",
    ],
    bulkDiscounts: [
      { quantity: "100-500", discount: "5% off" },
      { quantity: "501-1000", discount: "10% off" },
      { quantity: "1000+", discount: "15% off" },
    ],
  },
  {
    id: 2,
    name: "Professional",
    icon: <Crown className="w-6 h-6" />,
    description: "Ideal for growing businesses with regular printing needs",
    basePrice: "₹8",
    unit: "per piece",
    popular: true,
    features: [
      "Offset & digital printing",
      "Premium paper options",
      "2-3 day turnaround",
      "Priority support",
      "Custom design assistance",
      "Color matching guarantee",
    ],
    bulkDiscounts: [
      { quantity: "100-500", discount: "8% off" },
      { quantity: "501-1000", discount: "15% off" },
      { quantity: "1000+", discount: "22% off" },
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    icon: <Building2 className="w-6 h-6" />,
    description: "Complete solution for large-scale corporate requirements",
    basePrice: "Custom",
    unit: "quote",
    features: [
      "All printing methods",
      "Ultra-premium materials",
      "Express 24hr available",
      "Dedicated account manager",
      "Full design service",
      "Brand consistency package",
      "Monthly billing options",
    ],
    bulkDiscounts: [
      { quantity: "500-2000", discount: "20% off" },
      { quantity: "2001-5000", discount: "28% off" },
      { quantity: "5000+", discount: "35% off" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 section-light">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Transparent Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient">Package</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible pricing options with bulk discounts. The more you order, the more you save.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border ${
                tier.popular
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border"
              }`}
            >
              {/* Popular */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-gold text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Top */}
              <div className="text-center mb-8">
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    tier.popular
                      ? "gradient-gold text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {tier.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-card-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <span className="font-display text-4xl font-bold">
                  {tier.basePrice}
                </span>
                <span className="text-muted-foreground text-sm">
                  /{tier.unit}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Discounts */}
              <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                <h4 className="text-xs uppercase text-muted-foreground mb-3">
                  Bulk Discounts
                </h4>
                {tier.bulkDiscounts.map((d, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span>{d.quantity}</span>
                    <span className="font-semibold text-primary">
                      {d.discount}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link
                to="/contact"
                className={`block text-center py-4 rounded-xl font-semibold transition ${
                  tier.popular
                    ? "gradient-gold text-primary-foreground"
                    : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {tier.basePrice === "Custom" ? "Get Quote" : "Get Started"}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          All prices are indicative.{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Contact us
          </Link>{" "}
          for a detailed quote.
        </p>

      </div>
    </section>
  );
};

export default PricingSection;
