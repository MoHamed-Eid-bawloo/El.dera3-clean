import { useHashScroll } from "@/hooks/use-hash-scroll";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Comparison } from "@/components/site/Comparison";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { SITE_NAME, SITE_NAME_EN, SITE_PHONE, SITE_URL } from "@/lib/site";

export function HomePage() {
  useHashScroll();

  return (
    <PageLayout>
      <SEO
        title={`${SITE_NAME} | مكافحة حشرات وتنظيف وعزل بضمان 12 شهراً`}
        description="الدرع كلين – شركة متخصصة في مكافحة الحشرات، تنظيف وتعقيم خزانات المياه، عزل الأسطح، والنظافة العامة في المملكة العربية السعودية بضمان مكتوب وأسعار تبدأ من 150 ريال."
        canonical="/"
        keywords="مكافحة حشرات، الدرع كلين، تنظيف خزانات، عزل أسطح، رش مبيدات، مكافحة النمل الأبيض، تنظيف منازل، الرياض، السعودية"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `${SITE_NAME} | ${SITE_NAME_EN}`,
          image: `${SITE_URL}/favicon.png`,
          description:
            "شركة متخصصة في مكافحة الحشرات، تنظيف وتعقيم خزانات المياه، عزل الأسطح، والنظافة العامة في المملكة العربية السعودية.",
          telephone: SITE_PHONE,
          priceRange: "من 150 ريال",
          address: {
            "@type": "PostalAddress",
            addressCountry: "SA",
            addressLocality: "الرياض",
          },
          areaServed: ["الرياض", "المنطقة الشرقية", "المملكة العربية السعودية"],
          openingHours: "Mo-Su 00:00-23:59",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "3000",
          },
        }}
      />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Comparison />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </PageLayout>
  );
}
