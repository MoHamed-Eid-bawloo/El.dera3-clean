import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "ما هي أفضل شركة مكافحة حشرات في المملكة؟", a: "الدرع كلين تعتبر من الشركات الرائدة في مكافحة الحشرات بالمملكة، نقدم خدمات احترافية بضمان مكتوب يصل إلى 12 شهراً، باستخدام مبيدات معتمدة من وزارة الصحة وفريق حاصل على شهادات اعتماد دولية." },
  { q: "كم تكلفة مكافحة الحشرات؟", a: "تبدأ أسعارنا من 150 ريال فقط للزيارة الواحدة، وتختلف التكلفة حسب نوع الحشرة، حجم المكان، ودرجة الإصابة. نقدم فحصاً مجانياً وعرض سعر شفافاً قبل بدء أي إجراء — دون أي رسوم خفية." },
  { q: "هل مبيدات مكافحة الحشرات آمنة على الأطفال والرضع؟", a: "نعم. جميع المبيدات التي نستخدمها معتمدة من وزارة الصحة والبيئة في المملكة العربية السعودية، وهي مصممة لتكون آمنة تماماً على الأطفال، الرضع، الحوامل، والحيوانات الأليفة، مع فعالية قصوى ضد الحشرات." },
  { q: "كم يستغرق علاج النمل الأبيض في المنزل؟", a: "معالجة النمل الأبيض تستغرق عادةً من 2 إلى 4 ساعات حسب مساحة المنزل ودرجة الإصابة. قد يتطلب الأمر زيارتين في حالات الإصابة الشديدة. نقدم ضماناً كاملاً لمدة شهراً مع متابعة دورية للتأكد من فعالية العلاج." },
  { q: "هل أحتاج لإخلاء المنزل قبل رش المبيدات؟", a: "في معظم الحالات لا حاجة لإخلاء المنزل بالكامل. نوصي فقط بإبعاد الأطفال والحيوانات الأليفة عن المنطقة المعالجة لمدة 2-4 ساعات. فريقنا يقدم تعليمات واضحة قبل وبعد الخدمة." },
  { q: "متى أحتاج لتنظيف خزان المياه؟", a: "يُنصح بتنظيف وتعقيم خزانات المياه كل 6 أشهر على الأقل، وقد يحتاج الأمر إلى وتيرة أعلى في حالات الاستهلاك العالي أو المناطق ذات جودة المياه المتغيرة. نقدم خطط صيانة دورية مرنة." },
  { q: "هل تقدمون خدمات للشركات والمنشآت التجارية؟", a: "نعم. لدينا قسم متخصص للقطاع التجاري يخدم المطاعم، الفنادق، المستشفيات، المدارس، والمكاتب. نقدم عقود سنوية بأسعار مميزة مع تقارير شهرية مفصلة وشهادات اعتماد للجهات الرسمية." },
  { q: "ما الفرق بين العزل المائي والحراري؟", a: "العزل المائي يحمي السطح من تسرب المياه والرطوبة، بينما العزل الحراري يقلل من انتقال الحرارة فيوفر استهلاك التكييف بنسبة تصل إلى 40٪. نوصي بالجمع بينهما للحصول على حماية شاملة وأفضل عائد على الاستثمار." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-32 bg-light-luxe text-emerald-deep">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-deep/10 text-emerald-deep text-xs font-bold mb-6">
            الأسئلة الشائعة
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-emerald-deep">
            كل ما تريد معرفته عن
            <br />
            <span style={{ background: "var(--gradient-emerald)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>خدمات الحماية والنظافة</span>
          </h2>
          <p className="text-lg text-emerald-deep/70">
            إجابات واضحة وشاملة على أكثر الأسئلة التي يطرحها عملاؤنا
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white rounded-2xl border border-emerald-deep/10 px-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)]"
            >
              <AccordionTrigger className="text-right font-bold text-emerald-deep hover:text-emerald-glow text-lg py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-emerald-deep/75 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
