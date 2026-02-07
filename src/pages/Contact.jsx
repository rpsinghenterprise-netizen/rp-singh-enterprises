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
    
            <section className="pt-40 pb-20 bg-[#374151] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-4 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-6"
          >
            Get In Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Let’s Build Your <span className="text-pink-500 italic">Vision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Have a project in mind? We’d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* INFO */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
                <MessageSquare />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact Information
              </h2>
            </div>

            <p className="text-gray-600 mb-10">
              Ready to start your next printing project? Reach out to us.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase">
                      {info.label}
                    </p>
                    <p className="text-lg font-medium text-gray-900">
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
              className="bg-gray-50 p-10 rounded-3xl shadow"
            >
              <h3 className="text-2xl font-semibold mb-8">
                Send Us a Message
              </h3>

              <div className="space-y-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-4 rounded-xl border"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-5 py-4 rounded-xl border"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 rounded-xl border"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-5 py-4 rounded-xl border resize-none"
                />

                <button
                  disabled={isSubmitting}
                  className="w-full bg-pink-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-pink-500 transition"
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
