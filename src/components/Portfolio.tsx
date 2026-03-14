import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

const Portfolio = () => {
    return (
        <section id="portfolio" className="section-padding">
            <div className="section-container">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                    Portfolio
                </h2>

                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <LayoutGrid size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">My Work</h3>
                    </div>

                    {/* 3x3 Grid Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <Link
                                to={`/portfolio/${project.slug}`}
                                key={project.id}
                                className="group relative bg-card border border-border rounded-xl p-5 flex flex-col gap-3 card-hover cursor-pointer no-underline"
                            >
                                {/* Number badge + Logo */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold text-primary/70 bg-primary/10 rounded-md px-2 py-1">
                                        #{String(project.id).padStart(2, '0')}
                                    </span>
                                    <ArrowRight
                                        size={16}
                                        className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                    />
                                </div>

                                {/* Project logo */}
                                <div className="flex items-center justify-center py-1">
                                    <img
                                        src={project.logo}
                                        alt={`${project.title} logo`}
                                        className="w-10 h-10 object-contain rounded-lg border border-border/50 bg-secondary/30 p-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>

                                {/* Title & subtitle */}
                                <div>
                                    <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                                        {project.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {project.subtitle}
                                    </p>
                                </div>

                                {/* Summary */}
                                <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-3 flex-1">
                                    {project.summary}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-secondary/50 text-muted-foreground">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
