import { motion } from "framer-motion";

const steps = [
  { n: "1", title: "تواصل معنا", desc: "اتصل أو راسلنا على واتساب لتحديد موعدك. فريقنا متاح 24/7 للرد على استفساراتك." },
  { n: "2", title: "فحص مجاني", desc: "يصلك خبيرنا لفحص المنزل وتحديد نوع الإصابة وتقديم عرض سعر شفاف قبل أي إجراء." },
  { n: "3", title: "تطبيق الحل", desc: "ينفذ فريقنا المتخصص الحل المناسب بأحدث الأجهزة وأفضل المبيدات المعتمدة." },
  { n: "4", title: "الضمان والمتابعة", desc: "تحصل على ضمان مكتوب شهراً مع متابعة دورية. راحة بالك مضمونة." },
];

export function Process() {
  return (
    <section className="relative py-32 bg-light-luxe text-emerald-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-deep/10 text-emerald-deep text-xs font-bold mb-6">
            كيف نعمل
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-emerald-deep">
            ٤ خطوات بسيطة <br />
            <span style={{ background: "var(--gradient-emerald)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>للحصول على حماية كاملة</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 right-[12.5%] left-[12.5%] h-px bg-gradient-to-l from-transparent via-emerald-deep/20 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white rounded-3xl p-8 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]"
            >
              <div
                className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl font-black mb-5 shadow-lg"
                style={{ background: "var(--gradient-emerald)" }}
              >
                {s.n}
              </div>
              <h3 className="text-xl font-bold mb-3 text-emerald-deep">{s.title}</h3>
              <p className="text-sm text-emerald-deep/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
