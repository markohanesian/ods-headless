'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Initialize theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

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
          <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-300 dark:text-zinc-100 font-bold uppercase leading-none mt-2">
            OHANESIAN DIGITAL SOLUTIONS
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
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors focus:outline-none min-w-[32px] min-h-[32px] flex items-center justify-center"
          >
            {!mounted ? (
              <div className="w-4 h-4" /> // Empty placeholder during hydration
            ) : theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
          
          <Link 
            href="/contact"
            className="hidden sm:block px-5 py-2 text-[10px] font-mono uppercase tracking-widest bg-brand text-zinc-900 hover:bg-zinc-50 hover:text-zinc-900 transition-colors font-bold"
          >
            Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
