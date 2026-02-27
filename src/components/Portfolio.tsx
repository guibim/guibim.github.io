import React from 'react';
import { LayoutGrid } from 'lucide-react';

const Portfolio = () => {
    // Creating an array of 9 empty items for our 3x3 matrix
    const gridItems = Array.from({ length: 9 }, (_, i) => i);

    return (
        <section id="portfolio" className="section-padding">
            <div className="section-container">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
                    Portfolio
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <LayoutGrid size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">My Work</h3>
                    </div>

                    {/* 3x3 Grid Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {gridItems.map((item) => (
                            <div
                                key={item}
                                className="aspect-square bg-secondary/30 border border-border rounded-xl flex items-center justify-center p-4 transition-all duration-300 hover:bg-secondary/50 group"
                            >
                                {/* 
                  This is a placeholder space. 
                  In the future, images and text will be placed here.
                */}
                                <div className="text-muted-foreground/50 flex flex-col items-center gap-2 group-hover:text-primary/50 transition-colors">
                                    <LayoutGrid size={32} className="opacity-50" />
                                    <span className="font-medium text-sm">Project {item + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
