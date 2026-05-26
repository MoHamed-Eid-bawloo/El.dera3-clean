import { useParams, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/seo/SEO";
import {
  ServiceHero,
  ServiceContent,
  ServiceBenefits,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/services/ServicePageSections";
import { getServiceBySlug } from "@/data/services";
import { SITE_NAME, SITE_PHONE, SITE_URL } from "@/lib/site";

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageLayout>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/services/${service.slug}`}
        keywords={service.keywords}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            provider: {
              "@type": "LocalBusiness",
              name: SITE_NAME,
              telephone: SITE_PHONE,
              url: SITE_URL,
            },
            areaServed: { "@type": "Country", name: "Saudi Arabia" },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          },
        ]}
      />
      <main>
        <ServiceHero service={service} />
        <ServiceContent service={service} />
        <ServiceBenefits service={service} />
        <ServiceFAQ service={service} />
        <ServiceCTA service={service} />
      </main>
    </PageLayout>
  );
}
