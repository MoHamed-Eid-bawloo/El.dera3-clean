import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/9660500815010"
        target="_blank"
        rel="noopener"
        aria-label="واتساب"
        className="relative h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="h-6 w-6 relative" />
      </motion.a>
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        href="tel:+9660500815010"
        aria-label="اتصل الآن"
        className="h-14 w-14 rounded-full text-white flex items-center justify-center shadow-2xl"
        style={{ background: "var(--gradient-emerald)" }}
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
