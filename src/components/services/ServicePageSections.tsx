import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Service } from "@/data/services";
import { SITE_PHONE, SITE_PHONE_DISPLAY, SITE_WHATSAPP } from "@/lib/site";
import heroBg from "@/assets/hero-bg.jpg";

type ServicePageSectionsProps = {
  service: Service;
};

export function ServiceHero({ service }: ServicePageSectionsProps) {
  const Icon = service.icon;
  return (
    <section
      aria-labelledby="service-hero-title"
      className="relative min-h-[70vh] flex items-center overflow-hidden bg-hero pt-28"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="presentation"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      <div className="absolute -top-40 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-glow/25 blur-[120px]" />

      <div className="relative container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold text-xs font-bold mb-6">
            <Icon className="h-4 w-4" aria-hidden />
            {service.heroBadge}
          </div>
          <h1 id="service-hero-title" className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {service.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            {service.heroSubtitle}
          </p>
          <ul className="flex flex-wrap gap-3 mb-10">
            {service.points.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={SITE_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold text-accent-foreground font-bold shadow-gold hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              احجز معاينة مجانية
            </a>
            <a
              href={`tel:${SITE_PHONE}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-all"
            >
              <Phone className="h-5 w-5 text-gold" aria-hidden />
              {SITE_PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ServiceContent({ service }: ServicePageSectionsProps) {
  return (
    <section className="py-24" aria-labelledby="service-content-heading">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 id="service-content-heading" className="sr-only">
          تفاصيل خدمة {service.title}
        </h2>
        {service.sections.map((section, i) => (
          <motion.article
            key={section.heading}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-gold">
              {section.heading}
            </h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-4 text-lg">
                {p}
              </p>
            ))}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function ServiceBenefits({ service }: ServicePageSectionsProps) {
  return (
    <section className="py-24 bg-light-luxe" aria-labelledby="service-benefits-heading">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="service-benefits-heading" className="text-3xl md:text-4xl font-black text-emerald-deep mb-4">
            لماذا تختار الدرع كلين لـ{service.title}؟
          </h2>
          <p className="text-emerald-deep/70 text-lg">
            مزايا حقيقية تضمن راحتك وجودة النتائج
          </p>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {service.benefits.map((b) => (
            <li
              key={b.title}
              className="bg-white rounded-2xl p-6 border border-emerald-deep/10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)]"
            >
              <CheckCircle2 className="h-8 w-8 text-emerald-glow mb-4" aria-hidden />
              <h3 className="font-bold text-emerald-deep text-lg mb-2">{b.title}</h3>
              <p className="text-emerald-deep/75 text-sm leading-relaxed">{b.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceFAQ({ service }: ServicePageSectionsProps) {
  return (
    <section className="py-24" aria-labelledby="service-faq-heading">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 id="service-faq-heading" className="text-3xl md:text-4xl font-black text-center mb-12">
          الأسئلة الشائعة عن <span className="text-gradient-gold">{service.title}</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {service.faqs.map((f, i) => (
            <AccordionItem
              key={f.question}
              value={`faq-${i}`}
              className="bg-card-luxe rounded-2xl border border-white/10 px-6"
            >
              <AccordionTrigger className="text-right font-bold hover:text-gold text-lg py-5">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function ServiceCTA({ service }: ServicePageSectionsProps) {
  return (
    <section className="relative py-24 overflow-hidden" aria-labelledby="service-cta-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-background to-emerald-deep pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center glass rounded-[2rem] p-10 md:p-16 border border-gold/20">
          <h2 id="service-cta-heading" className="text-3xl md:text-5xl font-black mb-6">
            احجز <span className="text-gradient-gold">{service.title}</span> اليوم
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            معاينة مجانية، عرض سعر شفاف، وضمان مكتوب. فريق الدرع كلين جاهز لخدمتك على مدار
            الساعة.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-accent-foreground font-bold shadow-gold hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              واتساب
            </a>
            <a
              href={`tel:${SITE_PHONE}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass font-bold"
            >
              <Phone className="h-5 w-5 text-gold" aria-hidden />
              اتصل الآن
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            أو تصفح{" "}
            <Link to="/#services" className="text-gold font-bold hover:underline">
              جميع خدماتنا
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}