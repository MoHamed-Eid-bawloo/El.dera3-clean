import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden" aria-labelledby="services-heading">
      <div className="absolute top-1/2 right-0 h-[600px] w-[600px] rounded-full bg-emerald-glow/10 blur-[140px]" aria-hidden />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[120px]" aria-hidden />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold text-xs font-bold mb-6">
            خدماتنا المتكاملة
          </div>
          <h2 id="services-heading" className="text-4xl md:text-6xl font-black mb-6">
            كل ما تحتاجه <span className="text-gradient-gold">تحت سقف واحد</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نقدم حلولاً متكاملة لحماية منزلك ومنشأتك بأعلى معايير الجودة والاحترافية، من
            مكافحة الحشرات إلى العزل والنظافة الشاملة — كل ذلك بفريق معتمد وخبرة تمتد لأكثر
            من 15 عاماً.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none">
          {services.map((s, i) => (
            <motion.li
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card-luxe rounded-3xl p-7 sm:p-8 border border-white/5 hover:border-gold/30 transition-all duration-500 shadow-card overflow-hidden flex flex-col"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-emerald-glow/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />

              <article className="relative flex flex-col flex-1">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 border border-gold/30 text-gold mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <s.icon className="h-7 w-7" aria-hidden />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base flex-1">{s.shortDesc}</p>

                <ul className="space-y-2.5 mb-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:gap-3 transition-all duration-300 mt-auto"
                >
                  اطلب الخدمة الآن
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
