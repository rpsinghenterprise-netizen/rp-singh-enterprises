import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ JSX version (no TS types)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // fake submit
    await new Promise((res) => setTimeout(res, 1000));

    alert("Message Sent! We’ll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Visit Us",
      value: "123 Print Street, Business District, City - 110001",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Call Us",
      value: "+91 98765 43210",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email Us",
      value: "info@rpsinghprinting.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 7:00 PM",
    },
  ];

  return (
    <>
      {/* HEADER */}

        <section className="relative h-[450px] sm:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://plus.unsplash.com/premium_photo-1661301053519-880c720aadcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Contact Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/70 to-slate-950/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-4 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-bold text-xs uppercase tracking-[0.4em] mb-4 sm:mb-6"
          >
            Get In Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-8 tracking-tighter"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Let’s Build Your <span className="text-pink-500 italic">Vision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto font-light leading-relaxed"
          >
            Have a project in mind? We’d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">

          {/* INFO */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                <MessageSquare />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Contact Information
              </h2>
            </div>

            <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
              Ready to start your next printing project? Reach out to us.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 uppercase font-medium">
                      {info.label}
                    </p>
                    <p className="text-base sm:text-lg font-medium text-gray-900 mt-1">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-3xl shadow"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
                Send Us a Message
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border text-sm sm:text-base"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border text-sm sm:text-base"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border text-sm sm:text-base"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border resize-none text-sm sm:text-base"
                />

                <button
                  disabled={isSubmitting}
                  className="w-full bg-pink-600 text-white py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-pink-500 transition text-sm sm:text-base"
                >
                  <Send size={18} />
                  {isSubmitting ? "Sending..." : "Get a Quote"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
