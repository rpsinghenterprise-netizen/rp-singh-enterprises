import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll detection for background transition
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure scroll to top on link clicks
  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkClass = ({ isActive }) =>
    `text-[11px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 transition-all duration-300 ${
      isActive
        ? "text-[#c5a059] border-b border-[#c5a059]"
        : "text-slate-400 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0f1a]/90 backdrop-blur-xl py-4 border-b border-slate-800/50 shadow-2xl"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo - Matching Footer & About branding */}
        <NavLink to="/" onClick={handleNavClick} className="flex items-center gap-4 group">
          <div className="w-12 group-hover:scale-110 rounded-xl">
            <img src={logo} 
            alt="R.P. Singh Enterprises Logo" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white text-sm font-serif tracking-[0.2em] uppercase font-light hidden sm:block">
              R.P. Singh
            </span>
            <span className="text-[#c5a059] text-[8px] font-bold tracking-[0.3em] uppercase hidden sm:block opacity-80 mt-1">
              Enterprises
            </span>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkClass}
              onClick={handleNavClick}
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Subtle CTA Sparkle */}
          <div className="pl-4 border-l border-slate-800 ml-2">
            <Sparkles className="w-4 h-4 text-[#c5a059] opacity-40 animate-pulse" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-[#c5a059] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0a0f1a]/95 backdrop-blur-2xl border-b border-slate-800/50 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={handleNavClick}
                  className={({ isActive }) => 
                    `text-[10px] uppercase tracking-[0.3em] font-bold transition-colors ${
                      isActive ? "text-[#c5a059]" : "text-slate-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;