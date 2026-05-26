import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  ["ضمان الخدمة", "12 شهراً مكتوباً", "بدون ضمان", "3 أسابيع فقط", "لا يوجد"],
  ["سلامة المبيدات", "معتمدة وزارياً — آمنة", "متفاوتة", "غير موثقة", "خطر على الصحة"],
  ["سرعة الاستجابة", "خلال 24 ساعة", "2-4 أيام", "أسبوع أو أكثر", "فورية لكن غير فعالة"],
  ["فحص مجاني", "مجاني دائماً", "✗", "✗", "✗"],
  ["تقرير بعد الخدمة", "تقرير مفصل", "✗", "مختصر", "✗"],
  ["السعر الابتدائي", "من 150 ريال", "من 300 ريال", "من 250 ريال", "+200 ريال (تراكمي)"],
  ["تغطية المملكة", "كاملة جميع الأحياء", "جزئية", "جزئية", "✓"],
  ["فعالية طويلة الأمد", "حماية مستمرة", "محدودة", "محدودة", "مؤقتة جداً"],
];
const headers = ["المعيار", "الدرع كلين", "شركة عادية أ", "شركة عادية ب", "الرش الذاتي"];

export function Comparison() {
  return (
    <section className="relative py-32 overflow-hidden bg-emerald-deep">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-deep to-background" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold text-xs font-bold mb-6">
            مقارنة الشركات
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            لماذا <span className="text-gradient-gold">الدرع كلين</span> هي الأفضل؟
          </h2>
          <p className="text-lg text-muted-foreground">
            قارن بنفسك ما تقدمه الدرع كلين مقارنةً بالشركات الأخرى في السوق
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-3xl border border-white/10 shadow-elegant"
        >
          <table className="w-full min-w-[700px] text-center">
            <thead>
              <tr className="bg-card-luxe">
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`p-5 font-bold text-sm md:text-base ${
                      i === 1 ? "text-gold bg-emerald-glow/10" : "text-foreground/80"
                    }`}
                  >
                    {i === 1 && (
                      <div className="text-[10px] mb-1 inline-block px-2 py-0.5 rounded-full bg-gold text-accent-foreground">
                        الأفضل
                      </div>
                    )}
                    <div>{h}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02]">
                  {r.map((c, j) => (
                    <td
                      key={j}
                      className={`p-4 text-sm ${
                        j === 0
                          ? "font-bold text-foreground/90"
                          : j === 1
                            ? "text-emerald-300 font-bold bg-emerald-glow/5"
                            : "text-muted-foreground"
                      }`}
                    >
                      {c === "✓" ? (
                        <Check className="h-5 w-5 text-emerald-400 mx-auto" />
                      ) : c === "✗" ? (
                        <X className="h-5 w-5 text-red-400 mx-auto" />
                      ) : j === 1 ? (
                        <span className="inline-flex items-center gap-1.5">
                          <Check className="h-4 w-4" /> {c}
                        </span>
                      ) : (
                        c
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/9660500815010"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-accent-foreground font-bold shadow-gold hover:scale-105 transition-transform"
          >
            تحدث مع المختص الآن
          </a>
        </div>
      </div>
    </section>
  );
}
