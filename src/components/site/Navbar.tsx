import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE_PHONE } from "@/lib/site";

const links = [
  { to: "/", hash: "#home", label: "الرئيسية" },
  { to: "/", hash: "#services", label: "خدماتنا" },
  { to: "/", hash: "#why", label: "لماذا نحن" },
  { to: "/", hash: "#gallery", label: "أعمالنا" },
  { to: "/", hash: "#testimonials", label: "آراء العملاء" },
  { to: "/", hash: "#faq", label: "الأسئلة" },
  { to: "/blog", label: "المدونة" },
  { to: "/", hash: "#contact", label: "تواصل معنا" },
];

function NavLink({
  to,
  hash,
  label,
  onClick,
}: {
  to: string;
  hash?: string;
  label: string;
  onClick?: () => void;
}) {
  const location = useLocation();
  const href = hash ? `${to}${hash}` : to;
  const isBlog = to === "/blog" && !hash;

  if (isBlog) {
    return (
      <Link
        to="/blog"
        onClick={onClick}
        className={`px-4 py-2 text-sm transition-colors relative group ${
          location.pathname.startsWith("/blog")
            ? "text-gold"
            : "text-foreground/80 hover:text-gold"
        }`}
      >
        {label}
        <span className="absolute bottom-0 right-1/2 translate-x-1/2 h-px w-1/2 bg-gold opacity-100" />
      </Link>
    );
  }

  return (
    <Link
      to={href}
      onClick={onClick}
      className="px-4 py-2 text-sm text-foreground/80 hover:text-gold transition-colors relative group"
    >
      {label}
      <span className="absolute bottom-0 right-1/2 translate-x-1/2 h-px w-0 bg-gold transition-all duration-300 group-hover:w-1/2" />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="الدرع كلين - الرئيسية">
          <img src={logo} alt="شعار الدرع كلين" className="h-14 w-14 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="font-extrabold text-lg text-gradient-gold">الدرع كلين</div>
            <div className="text-[11px] text-muted-foreground tracking-widest">DERA3 CLEAN</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="التنقل الرئيسي">
          {links.map((l) => (
            <NavLink key={l.label} to={l.to} hash={l.hash} label={l.label} />
          ))}
        </nav>

        <a
          href={`tel:${SITE_PHONE}`}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-accent-foreground font-bold text-sm shadow-gold hover:scale-105 transition-transform"
        >
          <Phone className="h-4 w-4" aria-hidden />
          اتصل الآن
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-white/5"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                hash={l.hash}
                label={l.label}
                onClick={() => setOpen(false)}
              />
            ))}
            <a
              href={`tel:${SITE_PHONE}`}
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold text-accent-foreground font-bold"
            >
              <Phone className="h-4 w-4" aria-hidden />
              اتصل الآن
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
