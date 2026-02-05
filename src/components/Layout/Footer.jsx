// console.log("FOOTER RENDERED");
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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


const Footer = () => {
  return (
    <motion.footer
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="bg-[#111111] border-t border-white/10"
>
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

      {/* BRAND */}
      <div>
        <Link to="/" className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-serif font-bold text-xl">RP</span>
          </div>
          <span className="text-white font-serif text-xl font-semibold">
            R.P. Singh
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
              whileHover={{ y: -4, scale: 1.05 }}
              className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* QUICK LINKS */}
      <div>
        <h4 className="text-white font-serif text-lg mb-8">
          Quick Links
        </h4>
        <ul className="space-y-4">
          {quickLinks.map((link, i) => {
            const isHash = link.href.startsWith("/#");
            return (
              <li key={i}>
                {isHash ? (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="group text-gray-400 hover:text-pink-500 transition flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition" />
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="group text-gray-400 hover:text-pink-500 transition flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition" />
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* SERVICES */}
      <div>
        <h4 className="text-white font-serif text-lg mb-8">
          Our Services
        </h4>
        <ul className="space-y-4">
          {services.map((service, i) => (
            <li key={i}>
              <Link
                to="/services"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                {service}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CONTACT */}
      <div>
        <h4 className="text-white font-serif text-lg mb-8">
          Contact Us
        </h4>
        <ul className="space-y-5 text-gray-400">
          <li>
            123 Print Street, Business District <br />
            City – 110001
          </li>
          <li>
            <a href="tel:+919876543210" className="hover:text-pink-500 transition">
              +91  93042 59943
            </a>
          </li>
          <li>
            <a
              href="mailto:info@rpsinghprinting.com"
              className="hover:text-pink-500 transition"
            >
              info@rpsinghprinting.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* BOTTOM */}
    <div className="mt-16 pt-8 border-t border-white/10 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} R.P. Singh Printing Services. All rights reserved.
      </p>
    </div>
  </div>
</motion.footer>
  )
};

export default Footer;
