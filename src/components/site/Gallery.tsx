import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { img: g1, title: "تنظيف فلل فاخرة", tag: "تنظيف عميق" },
  { img: g2, title: "تعقيم خزانات المياه", tag: "تعقيم شامل" },
  { img: g3, title: "عزل أسطح فلل", tag: "عزل مائي وحراري" },
  { img: g4, title: "مكافحة احترافية", tag: "حماية مضمونة" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold text-xs font-bold mb-6">
            معرض أعمالنا
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            نتائج <span className="text-gradient-gold">حقيقية</span> ترى الفرق
          </h2>
          <p className="text-lg text-muted-foreground">
            أكثر من 3000 مشروع منجز بأعلى معايير الجودة — هذه عينة من أعمالنا الأخيرة
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer shadow-card"
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs text-gold font-bold mb-2">{it.tag}</div>
                <h3 className="text-xl font-bold text-foreground">{it.title}</h3>
              </div>
              <div className="absolute top-4 left-4 h-10 w-10 rounded-full glass-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gold">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
