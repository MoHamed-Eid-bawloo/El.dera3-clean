import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const items = [
  { name: "م. عبدالرحمن", loc: "حي الياسمين، الرياض", text: "أنصح بالدرع كلين لكل من يبحث عن مكافحة حشرات احترافية. وصلوا في الموعد، الفريق منظم، وبعد أسبوع لم أشاهد أي حشرة. ممتاز ومشكورين." },
  { name: "أم سارة", loc: "حي الملقا", text: "كنت أعاني من بق الفراش بشكل شديد. جربت منتجات كثيرة بدون فائدة. اتصلت بالدرع كلين، وفي الجلسة الواحدة حلت المشكلة 100٪. الفنيون محترمون والسعر معقول جداً." },
  { name: "أبو خالد", loc: "حي العقيق", text: "تعاملت مع الدرع كلين لمكافحة النمل الأبيض في منزلي. الفريق محترف جداً، شرحوا لي المشكلة بالتفصيل وقدموا ضماناً مكتوباً. بعد ثلاثة أشهر النتيجة ممتازة والحمد لله." },
  { name: "ناصر الشهري", loc: "حي النرجس", text: "خدمة مكافحة الفئران كانت ممتازة. اكتشفوا لي مدخل لم أكن أعلم عنه أصلاً وسدوه بالطريقة الصحيحة. بعد الخدمة أعطوني نصائح عملية لمنع عودتها. شركة تستحق الثقة." },
  { name: "صاحب مطعم المندي", loc: "وسط الرياض", text: "مطعمنا كان يعاني من مشكلة صراصير متكررة. منذ تعاقدنا مع الدرع كلين على الخدمة الشهرية ما واجهنا أي مشكلة. يعطوننا تقريراً بعد كل زيارة. مفيد جداً للصحة والسلامة." },
  { name: "مقاول فهد العتيبي", loc: "المنطقة الشرقية", text: "رش دفان لمشروع بناء جديد. الفريق وصل في الوقت المحدد وقدم شهادة معتمدة للمقاول. خدمة ممتازة وسعر تنافسي جداً مقارنة بالشركات الأخرى." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 bg-emerald-deep overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-deep to-background" />
      <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-glow/10 blur-[120px]" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold text-xs font-bold mb-6">
            ماذا يقول عملاؤنا
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
            أكثر من 3000 عائلة في المملكة
            <br />
            <span className="text-gradient-gold">وثقوا بنا</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            آراء حقيقية من عملائنا في الرياض والمنطقة الشرقية والمناطق المجاورة
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="relative bg-card-luxe rounded-3xl p-7 border border-white/5 hover:border-gold/30 transition-all shadow-card"
            >
              <Quote className="absolute top-5 left-5 h-8 w-8 text-gold/20" />
              <div className="flex items-center gap-1 mb-4 justify-end">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 text-[15px]">{t.text}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-gold/30 to-emerald-glow/30 border border-gold/40 flex items-center justify-center font-black text-gold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.loc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
