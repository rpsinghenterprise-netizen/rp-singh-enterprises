import { motion } from "framer-motion";
import { Award, BadgePercent, Truck, Users } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: <Award className="w-10 h-10" />,
    title: "High Quality Printing",
    description:
      "We use premium materials and advanced technology for the best results.",
  },
  {
    id: 2,
    icon: <BadgePercent className="w-10 h-10" />,
    title: "Affordable Pricing",
    description:
      "Competitive rates without compromising on quality or service.",
  },
  {
    id: 3,
    icon: <Truck className="w-10 h-10" />,
    title: "Fast Delivery",
    description:
      "Quick turnaround times to meet your deadlines, every time.",
  },
  {
    id: 4,
    icon: <Users className="w-10 h-10" />,
    title: "Trusted by Customers",
    description:
      "Hundreds of satisfied clients trust us for their printing needs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="text-pink-500 font-semibold text-sm uppercase tracking-[0.25em] mb-6 block">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-6">
            Trusted Excellence
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We go above and beyond to deliver exceptional value and quality in
            every project we undertake.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-3xl 
                bg-pink-500/10 backdrop-blur 
                flex items-center justify-center 
                text-pink-500 mb-8
                shadow-lg shadow-pink-500/10
                transition-all duration-300
                hover:bg-pink-500/60
                text-white"
              >
                {benefit.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
