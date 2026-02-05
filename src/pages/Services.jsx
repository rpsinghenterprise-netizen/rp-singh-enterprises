import { motion } from "framer-motion";
import { Printer, Monitor, CreditCard, Image, Palette } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Printer className="w-8 h-8" />,
    title: "Offset Printing",
    description:
      "High-volume printing with exceptional quality and consistency for large orders.",
  },
  {
    id: 2,
    icon: <Monitor className="w-8 h-8" />,
    title: "Digital Printing",
    description:
      "Quick turnaround times with vibrant colors for short-run projects.",
  },
  {
    id: 3,
    icon: <CreditCard className="w-8 h-8" />,
    title: "ID Card Printing",
    description:
      "Professional ID cards with custom designs, photos, and security features.",
  },
  {
    id: 4,
    icon: <Image className="w-8 h-8" />,
    title: "Flex & Banner Printing",
    description:
      "Large format printing for outdoor advertising and event signage.",
  },
  {
    id: 5,
    icon: <Palette className="w-8 h-8" />,
    title: "Customized Branding",
    description:
      "Complete branding solutions including logos, stationery, and marketing materials.",
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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer complete printing solutions to help your business stand out.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
