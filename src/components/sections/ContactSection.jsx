import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Globe
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Reset status after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactDetails = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 98765 43210",
      description: "Mon-Sat, 9am - 7pm",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "info@rpsinghprinting.com",
      description: "Online support 24/7",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Office",
      value: "123 Print Street, City - 110001",
      description: "Business District, Main Wing",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="relative h-[450px] sm:h-[500px] flex items-center justify-center overflow-hidden" />
         {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/70 to-slate-950/90" />
        </div>
          
          {/* Left Column: Info & Branding */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's Build Your <span className="italic text-pink-600 underline decoration-pink-100 underline-offset-8">Brand Identity</span> Together.
              </h2>
              <p className="text-slate-500 text-lg mb-12 leading-relaxed max-w-md">
                Aapke vision ko reality mein badalne ke liye hum taiyaar hain. Niche diye gaye form ko bharein aur humari team 24 hours ke andar aapse contact karegi.
              </p>

              <div className="space-y-8 mb-12">
                {contactDetails.map((detail, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm ${detail.color}`}>
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">{detail.label}</p>
                      <p className="text-xl font-bold text-slate-800">{detail.value}</p>
                      <p className="text-sm text-slate-400 font-medium">{detail.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Working Hours Mini-Card */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Current Local Time</p>
                  <p className="text-xs text-slate-500 font-medium tracking-tight">Open Now • Closes at 7:00 PM</p>
                </div>
                <div className="ml-auto">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Form Backdrop Card */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
                
                {/* Success Overlay */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6"
                      >
                        <CheckCircle2 size={40} />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                      <p className="text-slate-500 max-w-xs mx-auto">Thank you for reaching out. Humari team jald hi aapse raabta karegi.</p>
                      <button 
                        onClick={() => setStatus("idle")}
                        className="mt-8 text-pink-600 font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
                      >
                        Send Another <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Input */}
                    <div className="group">
                      <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-pink-600 transition-colors">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-300 font-medium"
                      />
                    </div>
                    {/* Email Input */}
                    <div className="group">
                      <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-pink-600 transition-colors">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="name@company.com"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-300 font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="group">
                    <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-pink-600 transition-colors">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-300 font-medium"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="group">
                    <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-pink-600 transition-colors">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us about your printing requirements..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-300 font-medium resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-pink-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-70 group"
                  >
                    {status === "sending" ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        Request Free Quote
                      </>
                    )}
                  </motion.button>

                  <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                    No hidden costs • Professional consultation
                  </p>
                </form>
              </div>

              {/* Decorative Accent under form */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-[2rem] -z-10 rotate-12" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;