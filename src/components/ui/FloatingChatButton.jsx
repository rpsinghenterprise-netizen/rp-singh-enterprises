import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingChatButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg text-white"
    >
      <MessageCircle size={26} />
    </motion.button>
  );
};

export default FloatingChatButton;
