import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  Leaf,
  ShieldCheck,
  MapPin,
  Microscope,
  ClipboardCheck,
  HardHat,
} from "lucide-react";

const reasons = [
  { icon: BadgeCheck, title: "أسعار تنافسية تبدأ من 150 ريال", desc: "خدمة احترافية بأسعار عادلة وشفافة. لا مفاجآت في الفاتورة. اعرف السعر قبل الزيارة." },
  { icon: Clock, title: "خدمة خلال 24 ساعة", desc: "نصلك في أي مكان خلال يوم واحد من الاتصال. لا انتظار طويل ولا مواعيد مؤجلة." },
  { icon: Leaf, title: "مبيدات آمنة معتمدة", desc: "جميع مبيداتنا معتمدة من وزارة الصحة والبيئة. آمنة للأطفال والحيوانات الأليفة." },
  { icon: ShieldCheck, title: "ضمان مكتوب حتى 12 شهراً", desc: "ضمان موثق بعقد رسمي. عودة الحشرات = رش مجاني فوري دون أي تكلفة." },
  { icon: MapPin, title: "تغطية كاملة للمملكة", desc: "نخدم جميع أحياء الرياض والمنطقة الشرقية والوسطى وجميع المناطق المحيطة." },
  { icon: Microscope, title: "فحص مجاني", desc: "نكشف على منزلك مجاناً ونحدد نوع الإصابة ومصادرها قبل تقديم أي عرض سعر." },
  { icon: ClipboardCheck, title: "تقرير مفصل بعد الخدمة", desc: "نقدم لك تقريراً شاملاً بنوع المشكلة والحل المطبق ونصائح الوقاية المستقبلية." },
  { icon: HardHat, title: "فنيون معتمدون ومدربون", desc: "فريقنا حاصل على شهادات معتمدة في مكافحة الآفات ويخضع لتدريب دوري مستمر." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-32 bg-light-luxe text-emerald-deep overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-deep/10 text-emerald-deep text-xs font-bold mb-6">
            لماذا الدرع كلين؟
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-emerald-deep">
            8 أسباب تجعلنا
            <span className="block mt-2" style={{ background: "var(--gradient-emerald)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              الخيار الأول لعائلتك
            </span>
          </h2>
          <p className="text-lg text-emerald-deep/70 leading-relaxed">
            نحن لا نبيع لك خدمة فقط — بل نمنحك راحة البال وأماناً حقيقياً لمنزلك ومنشأتك في
            كافة أنحاء المملكة.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 border border-emerald-deep/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(0,80,40,0.2)] transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4" style={{ background: "var(--gradient-emerald)", color: "white" }}>
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-emerald-deep">{r.title}</h3>
              <p className="text-sm text-emerald-deep/70 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
