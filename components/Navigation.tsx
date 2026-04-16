'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800' 
        : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 leading-none">
            ODS
          </span>
          <span className="text-[8px] font-mono tracking-[0.2em] text-zinc-500 uppercase leading-none mt-1">
            OHANESIAN_DIGITAL
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'Services', href: '/services' },
            { name: 'Portfolio', href: '/portfolio' },
            { name: 'About', href: '/about' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button 
            aria-label="Toggle Dark Mode"
            className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            {/* Simple minimalist sun/moon SVG or icon placeholder */}
            <div className="w-4 h-4 rounded-full border-2 border-current flex items-center justify-center overflow-hidden">
                <div className="w-full h-1/2 bg-current self-start"></div>
            </div>
          </button>
          
          <Link 
            href="/contact"
            className="hidden sm:block px-5 py-2 text-[10px] font-mono uppercase tracking-widest bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
