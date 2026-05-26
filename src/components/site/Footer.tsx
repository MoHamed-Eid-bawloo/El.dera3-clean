import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";
import { services } from "@/data/services";
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-emerald-deep border-t border-white/5 pt-20 pb-8" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="شعار الدرع كلين" className="h-20 w-20" />
              <div>
                <div className="font-extrabold text-xl text-gradient-gold">الدرع كلين</div>
                <div className="text-xs text-muted-foreground tracking-widest">DERA3 CLEAN</div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              الدرع كلين — شركتك الموثوقة في مكافحة الحشرات، تنظيف وتعقيم الخزانات، عزل
              الأسطح، والنظافة العامة. نخدم المملكة العربية السعودية بفريق محترف معتمد
              ومبيدات آمنة بضمان يصل إلى 12 شهراً.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-gold hover:border-gold/40 transition-colors"
                  aria-label={i === 0 ? "إنستغرام" : "تويتر"}
                >
                  <I className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="روابط الخدمات">
            <h4 className="font-bold mb-5 text-foreground">خدماتنا</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-gold">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="font-bold mb-5 text-foreground">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/blog" className="hover:text-gold font-medium text-foreground/90">
                  المدونة والمقالات
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" aria-hidden />
                <a href={`tel:${SITE_PHONE}`} dir="ltr">
                  +966 {SITE_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" aria-hidden />
                <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold mt-0.5" aria-hidden />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} الدرع كلين | Dera3 Clean. جميع الحقوق محفوظة.</div>
          <div className="flex items-center gap-3">
            <span>صُنع بعناية في المملكة العربية السعودية 🇸🇦</span>
            <span className="hidden md:inline h-3 w-px bg-white/15" aria-hidden />
            <span>
              Website Developed by{" "}
              <a
                href="https://oppyans.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-semibold hover:text-gold-soft transition-colors duration-300"
              >
                Oppyans
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
