import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SEO } from "@/components/seo/SEO";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

function ArticleBlockRenderer({
  block,
}: {
  block: import("@/data/articles").ArticleBlock;
}) {
  if (block.type === "h2") {
    return <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-gradient-gold">{block.content}</h2>;
  }
  if (block.type === "h3") {
    return <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">{block.content}</h3>;
  }
  if (block.type === "ul") {
    return (
      <ul className="space-y-3 mb-8 pr-2">
        {block.items.map((item) => (
          <li key={item.slice(0, 40)} className="flex items-start gap-3 text-muted-foreground text-lg leading-relaxed">
            <span className="h-2 w-2 rounded-full bg-gold shrink-0 mt-2.5" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "cta") {
    return (
      <div className="my-10 p-6 md:p-8 rounded-2xl glass-gold border border-gold/20 text-center">
        <p className="text-lg font-bold text-gold mb-4">{block.content}</p>
        <a
          href="https://wa.me/9660500815010"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-accent-foreground font-bold shadow-gold hover:scale-105 transition-transform text-sm"
        >
          تواصل معنا الآن
        </a>
      </div>
    );
  }
  if (block.type === "faq") {
    return (
      <div className="mb-6 p-5 rounded-xl glass border border-white/5">
        <p className="font-bold text-foreground mb-2 text-lg">❓ {block.question}</p>
        <p className="text-muted-foreground leading-relaxed">{block.answer}</p>
      </div>
    );
  }
  return <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{block.content}</p>;
}

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const related = slug ? getRelatedArticles(slug) : [];

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <PageLayout>
      <SEO
        title={article.metaTitle}
        description={article.metaDescription}
        canonical={`/blog/${article.slug}`}
        ogType="article"
        keywords={article.keywords}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.publishedAt,
          author: { "@type": "Organization", name: article.author },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
          },
          mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
        }}
      />
      <main>
        <article className="pt-32 pb-16">
          <header className="container mx-auto px-6 max-w-4xl mb-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-gold font-bold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              العودة للمدونة
            </Link>
            <span className="inline-block px-3 py-1 rounded-full glass-gold text-gold text-xs font-bold mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">{article.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">{article.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-white/10 pb-8">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-gold" aria-hidden />
                {article.author}
              </span>
              <time dateTime={article.publishedAt} className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold" aria-hidden />
                {new Date(article.publishedAt).toLocaleDateString("ar-SA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" aria-hidden />
                {article.readTime} قراءة
              </span>
            </div>
          </header>

          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-invert max-w-none"
            >
              {article.blocks.map((block, idx) => (
                <ArticleBlockRenderer key={`${block.type}-${idx}`} block={block} />
              ))}
            </motion.div>
          </div>
        </article>

        {related.length > 0 && (
          <aside className="py-20 border-t border-white/5" aria-labelledby="related-articles-heading">
            <div className="container mx-auto px-6">
              <h2 id="related-articles-heading" className="text-2xl md:text-3xl font-black mb-10 text-center">
                مقالات <span className="text-gradient-gold">ذات صلة</span>
              </h2>
              <ul className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {related.map((r) => (
                  <li key={r.slug}>
                    <article className="bg-card-luxe rounded-2xl p-6 border border-white/5 h-full flex flex-col">
                      <span className="text-xs text-gold font-bold mb-2">{r.category}</span>
                      <h3 className="font-bold mb-3 flex-1">
                        <Link to={`/blog/${r.slug}`} className="hover:text-gold transition-colors">
                          {r.title}
                        </Link>
                      </h3>
                      <Link
                        to={`/blog/${r.slug}`}
                        className="text-sm font-bold text-gold inline-flex items-center gap-1 mt-4"
                      >
                        اقرأ المزيد
                        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </main>
    </PageLayout>
  );
}
