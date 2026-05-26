import { motion } from "framer-motion";
import { ShieldCheck, Phone, MessageCircle, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* glow orbs */}
      <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-glow/30 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative container mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-gold text-gold text-sm font-bold mb-8"
          >
            <Sparkles className="h-4 w-4" />
            الشركة الأولى لخدمات الحماية والنظافة في المملكة
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8">
            <span className="block text-foreground">حماية فاخرة</span>
            <span className="block text-gradient-gold mt-2">لمنزلك ومنشأتك</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            <span className="text-foreground font-bold">الدرع كلين</span> — خدمات متكاملة في
            مكافحة الحشرات، تنظيف وتعقيم خزانات المياه، عزل الأسطح، والنظافة العامة بمعايير
            عالمية وضمان مكتوب يصل حتى <span className="text-gold font-bold">12 شهراً</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/9660500815010"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-accent-foreground font-bold shadow-gold hover:scale-105 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              احجز معاينة مجانية
              <span className="text-xs opacity-70">→</span>
            </a>
            <a
              href="tel:+9660500815010"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass text-foreground font-bold hover:bg-white/10 transition-all"
            >
              <Phone className="h-5 w-5 text-gold" />
              اتصل الآن
            </a>
          </div>

          {/* trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { v: "+3000", l: "عميل سعيد" },
              { v: "+15", l: "سنة خبرة" },
              { v: "12", l: "شهر ضمان" },
              { v: "24/7", l: "خدمة متواصلة" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5"
              >
                <div className="text-3xl font-black text-gradient-gold mb-1">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* curve bottom */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
