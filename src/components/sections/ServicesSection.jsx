import { motion } from "framer-motion";
import { Printer, Monitor, CreditCard, Image, Palette } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Printer className="w-6 h-6" />,
    title: "Offset Printing",
    description:
      "High-volume printing with exceptional quality and consistency for large orders.",
  },
  {
    id: 2,
    icon: <Monitor className="w-6 h-6" />,
    title: "Digital Printing",
    description:
      "Quick turnaround times with vibrant colors for short-run projects.",
  },
  {
    id: 3,
    icon: <CreditCard className="w-6 h-6" />,
    title: "ID Card Printing",
    description:
      "Professional ID cards with custom designs, photos, and security features.",
  },
  {
    id: 4,
    icon: <Image className="w-6 h-6" />,
    title: "Flex & Banner Printing",
    description:
      "Large format printing for outdoor advertising and event signage.",
  },
  {
    id: 5,
    icon: <Palette className="w-6 h-6" />,
    title: "Customized Branding",
    description:
      "Complete branding solutions including logos, stationery, and marketing materials.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#f2f2f4] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-pink-600 text-sm font-semibold tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our <span className="text-pink-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We offer comprehensive printing solutions to help your business
            stand out from the competition.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100"
            >
              <div className="flex items-start gap-5">
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
