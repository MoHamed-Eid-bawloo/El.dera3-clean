import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-background to-emerald-deep" />
      <div className="absolute top-0 right-1/3 h-[500px] w-[500px] rounded-full bg-emerald-glow/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass rounded-[2rem] p-10 md:p-16 border border-gold/20 shadow-elegant"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold text-xs font-bold mb-6">
            عرض خاص لفترة محدودة
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            احصل على <span className="text-gradient-gold">فحص مجاني</span>
            <br /> اليوم
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            تواصل مع فريق الدرع كلين الآن واحصل على معاينة مجانية شاملة لمنزلك أو منشأتك،
            مع عرض سعر حصري وضمان مكتوب يصل إلى 12 شهراً.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/9660500815010"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-accent-foreground font-bold shadow-gold hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" />
              تواصل عبر واتساب
            </a>
            <a
              href="tel:+9660500815010"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass text-foreground font-bold hover:bg-white/10 transition-all"
            >
              <Phone className="h-5 w-5 text-gold" />
              0500815010
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-black text-gradient-gold">24/7</div>
              <div className="text-xs text-muted-foreground mt-1">خدمة متواصلة</div>
            </div>
            <div>
              <div className="text-2xl font-black text-gradient-gold">مجاني</div>
              <div className="text-xs text-muted-foreground mt-1">فحص ومعاينة</div>
            </div>
            <div>
              <div className="text-2xl font-black text-gradient-gold">+3000</div>
              <div className="text-xs text-muted-foreground mt-1">عميل راضٍ</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
