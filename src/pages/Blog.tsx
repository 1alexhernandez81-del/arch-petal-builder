import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useSEO } from "@/hooks/use-seo";
import { blogPosts } from "@/data/blog-posts";

const BlogPage = () => {
  useSEO({
    title: "Blog | Event Styling Tips & Inspiration | Arch & Petal Co.",
    description: "Event styling tips, color palette inspiration, and planning guides for Bay Area and Sacramento celebrations.",
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-brand-warm-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-onyx tracking-[4px] mb-4">Journal</h1>
            <p className="font-body font-light text-sm text-muted-foreground">Tips, inspiration, and behind-the-scenes from our studio</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <ScrollReveal key={post.id}>
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className={`hover:-translate-y-1 transition-transform duration-300 ${post.borderClass || ""}`}>
                    <div className={`aspect-[4/3] ${post.color}`} />
                    <div className="pt-4">
                      <p className="font-body text-[10px] uppercase tracking-[3px] text-brand-champagne mb-2">{post.category}</p>
                      <h2 className="font-heading text-xl tracking-[1px] text-brand-onyx mb-2 group-hover:text-brand-champagne transition-colors">{post.title}</h2>
                      <p className="font-body font-light text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <span className="font-body text-[11px] uppercase tracking-[2px] text-brand-champagne group-hover:text-brand-onyx transition-colors">Read More</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
