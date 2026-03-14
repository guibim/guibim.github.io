import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { projects, Project } from '@/data/projects';

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject: Project | undefined = projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject: Project | undefined =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined;

  useEffect(() => {
    if (!project) return;

    setLoading(true);
    setError(false);

    fetch(`/portfolio/${project.slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [project]);

  // Scroll to top when navigating between projects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Portfolio
          </Link>

          <span className="text-sm font-mono text-primary/70">
            #{String(project.id).padStart(2, '0')}
          </span>
        </div>
      </header>

      {/* Project header */}
      <div className="border-b border-border bg-card/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="skill-tag text-xs">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 mb-2">
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-12 h-12 object-contain rounded-xl border border-border/50 bg-secondary/30 p-1.5"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground">{project.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Markdown content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={32} className="animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-2">
              No detailed documentation available yet.
            </p>
            <p className="text-muted-foreground/60 text-sm">
              The README for this project will be added soon.
            </p>
          </div>
        )}

        {!loading && !error && (
          <article className="prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-blockquote:border-primary/50 prose-blockquote:text-muted-foreground prose-hr:border-border prose-li:text-muted-foreground prose-th:text-foreground prose-td:text-muted-foreground max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </article>
        )}
      </main>

      {/* Previous / Next navigation */}
      <nav className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              to={`/portfolio/${prevProject.slug}`}
              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card/40 hover:border-primary/40 transition-all"
            >
              <ChevronLeft
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
              />
              <div className="min-w-0">
                <span className="text-xs text-muted-foreground/60 block">Previous</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate block">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/portfolio/${nextProject.slug}`}
              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card/40 hover:border-primary/40 transition-all justify-end text-right"
            >
              <div className="min-w-0">
                <span className="text-xs text-muted-foreground/60 block">Next</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate block">
                  {nextProject.title}
                </span>
              </div>
              <ChevronRight
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  );
};

export default PortfolioDetail;
