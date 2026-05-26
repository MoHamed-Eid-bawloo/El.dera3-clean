import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/seo/SEO";

export function NotFoundPage() {
  return (
    <PageLayout>
      <SEO
        title="الصفحة غير موجودة"
        description="الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
        noindex
      />
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-32">
        <div className="max-w-md text-center" role="alert">
          <p className="text-7xl font-bold text-gradient-gold">404</p>
          <h1 className="mt-4 text-2xl font-bold text-foreground">الصفحة غير موجودة</h1>
          <p className="mt-2 text-muted-foreground">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-bold text-accent-foreground shadow-gold transition-transform hover:scale-105"
          >
            العودة للرئيسية
          </Link>
        </div>
      </main>
    </PageLayout>
  );
}
