import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Principal",
    company: "city central public school",
    rating: 5,
    review:
     "The ID cards were printed with excellent clarity and durability. The lamination quality and finish were truly professional. Highly recommended for bulk school ID card orders.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder",
    company: "TechStart Solutions",
    rating: 5,
    review:
      "Our visiting cards look premium and elegant. The paper quality and print sharpness exceeded expectations. We’ve received great feedback from our clients.",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Event Coordinator",
    company: "Celebration Events",
    rating: 5,
    review:
      "Fast turnaround and excellent customer service. They handled our bulk order of ID cards perfectly.",
  },
  {
    id: 4,
    name: "Sunita Patel",
    role: "Restaurant Owner",
    company: "Spice Garden",
    rating: 4,
    review:
      "Beautiful menu cards and promotional materials. The team understood our brand vision perfectly.",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-400"
        }
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-linear-to-b from-[#393838] via-[#272525] to-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-pink-500 uppercase tracking-[0.3em] text-sm font-semibold block mb-6">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4 sm:mb-6">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Real feedback from businesses who trust us with their printing needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <Quote className="absolute top-8 right-8 text-gray-200 w-8 h-8" />

              <StarRating rating={t.rating} />

              <p className="text-gray-700 italic leading-relaxed mb-8">
                “{t.review}”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center font-bold text-pink-600">
                  {t.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 sm:mt-20 md:mt-24 bg-white rounded-3xl shadow-xl px-6 sm:px-10 py-8 sm:py-10 flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-14 text-center">
          {[
            ["100+", "Happy Clients"],
            ["3+", "Years Experience"],
            ["10K+", "Projects Done"],
            ["4.8★", "Avg Rating"],
          ].map(([value, label], i) => (
            <div key={i}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-1">
                {value}
              </h3>
              <p className="text-sm text-gray-500 tracking-wide">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
