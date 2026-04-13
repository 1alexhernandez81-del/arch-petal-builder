import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import { blogPosts } from "@/data/blog-posts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useSEO({
    title: post ? `${post.title} | Arch & Petal Co.` : "Blog | Arch & Petal Co.",
    description: post?.excerpt || "",
  });

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-40 pb-20 text-center px-6">
          <h1 className="font-heading text-3xl text-brand-onyx mb-4">Post Not Found</h1>
          <Link to="/blog" className="font-body text-sm text-brand-champagne hover:text-brand-onyx transition-colors">← Back to Journal</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-brand-warm-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <Link to="/blog" className="font-body text-[11px] uppercase tracking-[2px] text-brand-champagne hover:text-brand-onyx transition-colors mb-8 inline-block">← Back to Journal</Link>
            <p className="font-body text-[10px] uppercase tracking-[3px] text-brand-champagne mb-4">{post.category}</p>
            <h1 className="font-heading text-3xl md:text-4xl text-brand-onyx tracking-[2px] mb-4">{post.title}</h1>
            <p className="font-body font-light text-[11px] uppercase tracking-[3px] text-muted-foreground">{post.date}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <article
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          <div className="bg-brand-ivory p-10 text-center mt-16">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-onyx tracking-[2px] mb-4">Ready to Start Planning?</h2>
            <p className="font-body font-light text-sm text-muted-foreground mb-8">Let us help you create something unforgettable.</p>
            <Link to="/contact">
              <Button size="lg">Get a Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
