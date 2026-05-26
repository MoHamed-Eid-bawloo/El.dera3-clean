import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/seo/SEO";
import { articles, articleCategories, type ArticleCategory } from "@/data/articles";
import { Input } from "@/components/ui/input";

export function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "الكل">("الكل");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCategory = category === "الكل" || a.category === category;
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.keywords.toLowerCase().includes(q) ||
        a.category.includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <PageLayout>
      <SEO
        title="المدونة والمقالات | نصائح التنظيف ومكافحة الحشرات"
        description="مقالات ونصائح من خبراء الدرع كلين حول التنظيف، مكافحة الحشرات، التعقيم، التنظيف العميق، ونظافة المكاتب في السعودية."
        canonical="/blog"
        keywords="مدونة تنظيف، مقالات مكافحة حشرات، نصائح تعقيم، تنظيف منازل"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "مدونة الدرع كلين",
          description: "مقالات ونصائح حول التنظيف ومكافحة الحشرات والتعقيم",
          publisher: { "@type": "Organization", name: "الدرع كلين" },
        }}
      />
      <main>
        <section className="relative pt-32 pb-16 bg-hero overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold text-xs font-bold mb-6">
                المدونة والمقالات
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                نصائح وخبرات <span className="text-gradient-gold">من خبرائنا</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                مقالات طويلة ومفصلة حول التنظيف، مكافحة الحشرات، التعقيم، والنظافة
                المهنية — لمساعدتك على اتخاذ قرارات صحية لمنزلك ومنشأتك.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16" aria-labelledby="blog-filters-heading">
          <div className="container mx-auto px-6">
            <h2 id="blog-filters-heading" className="sr-only">
              البحث والتصفية
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 mb-12">
              <div className="relative flex-1 max-w-xl">
                <Search
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                  aria-hidden
                />
                <Input
                  type="search"
                  placeholder="ابحث في المقالات..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pr-12 py-6 rounded-2xl bg-card-luxe border-white/10"
                  aria-label="بحث في المقالات"
                />
              </div>
              <nav aria-label="تصفية حسب التصنيف" className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setCategory("الكل")}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    category === "الكل"
                      ? "bg-gold text-accent-foreground"
                      : "glass hover:text-gold"
                  }`}
                >
                  الكل
                </button>
                {articleCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                      category === cat
                        ? "bg-gold text-accent-foreground"
                        : "glass hover:text-gold"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>

            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-20 text-lg" role="status">
                لا توجد مقالات تطابق بحثك. جرّب كلمات أخرى أو اختر تصنيفاً مختلفاً.
              </p>
            ) : (
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((article, i) => (
                  <motion.li
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <article className="h-full bg-card-luxe rounded-3xl p-8 border border-white/5 hover:border-gold/30 transition-all flex flex-col">
                      <span className="inline-block px-3 py-1 rounded-full glass-gold text-gold text-xs font-bold mb-4 w-fit">
                        {article.category}
                      </span>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-gold">
                        <Link
                          to={`/blog/${article.slug}`}
                          className="hover:text-gold transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" aria-hidden />
                          <time dateTime={article.publishedAt}>
                            {new Date(article.publishedAt).toLocaleDateString("ar-SA")}
                          </time>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" aria-hidden />
                          {article.readTime}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:gap-3 transition-all"
                      >
                        اقرأ المقال
                        <ArrowLeft className="h-4 w-4" aria-hidden />
                      </Link>
                    </article>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
