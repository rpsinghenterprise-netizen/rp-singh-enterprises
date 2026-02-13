// console.log("FOOTER RENDERED");
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";


const socialLinks = [
  { icon: <Facebook />, href: "#" },
  { icon: <Twitter />, href: "#" },
  { icon: <Instagram />, href: "https://www.instagram.com/rpsinghprintingservices?utm_source=qr&igsh=MW9waXhjYm42cDhjdA%3D%3D" },
  { icon: <Linkedin />, href: "#" },
];
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];
const services = [
  "Offset Printing",
  "Digital Printing",
  "ID Card Printing",
  "Flex & Banner",
  "Custom Branding",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterNavigate = (path) => (e) => {
    e.preventDefault();
    if (location.pathname !== path) {
      navigate(path);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#111111] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14"
        >

          {/* BRAND */}
          <motion.div variants={columnVariants}>
            <Link to="/" onClick={handleFooterNavigate("/")} className="flex items-center gap-4 mb-8">
              <motion.div 
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-black font-serif font-bold text-xl">RP</span>
              </motion.div>
              <span className="text-white font-serif text-xl font-semibold">
                R.P. Singh Enterprises
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
              Your trusted partner for all printing needs. Quality, reliability,
              and excellence in every print.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={columnVariants}>
            <h4 className="text-white font-serif text-lg mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <motion.li key={i} variants={linkVariants}>
                  <Link
                    to={link.href}
                    onClick={handleFooterNavigate(link.href)}
                    className="group text-gray-400 hover:text-pink-500 transition flex items-center gap-2"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition"
                      whileHover={{ scale: 1.2 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={columnVariants}>
            <h4 className="text-white font-serif text-lg mb-8">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, i) => (
                <motion.li key={i} variants={linkVariants}>
                  <Link
                    to="/services"
                    onClick={handleFooterNavigate("/services")}
                    className="text-gray-400 hover:text-pink-500 transition"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={columnVariants}>
            <h4 className="text-white font-serif text-lg mb-8">
              Contact Us
            </h4>
            <ul className="space-y-5 text-gray-400">
              <motion.li variants={linkVariants}>
               Block Gate Taxi Stand Sangrampur city-Munger <br />813212
              </motion.li>
              <motion.li variants={linkVariants}>
                <a href="tel:+919304259943" className="hover:text-pink-500 transition">
                  +91  93042 59943
                </a>
              </motion.li>
              <motion.li variants={linkVariants}>
                <a
                  href="mailto:rajsunny223@gmail.com"
                  className="hover:text-pink-500 transition"
                >
                rajsunny223@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} R.P. Singh Printing Services. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
};

export default Footer;
