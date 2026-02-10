import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919304259943"; 

const FloatingChatButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="bg-blue-900/5 text-yellow-600 text-xs px-3 py-1 rounded-md whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </div>
      </div>

      {/* Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20I%20want%20to%20enquire`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(34,197,94,0.7)",
            "0 0 0 15px rgba(34,197,94,0)",
          ],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl"
      >
        <MessageCircle size={26} />
      </motion.a>
    </div>
  );
};

export default FloatingChatButton;
