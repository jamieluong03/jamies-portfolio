'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, Menu, X } from 'lucide-react';

const navItems: Record<string, { name: string; icon?: React.ReactNode }> = {
  '/': { name: 'home', icon: <Home size={18} /> },
  '/#about': { name: 'about' },
  '/#tech-stack': { name: 'tech stack' },
  '/#work-samples': { name: 'work samples' },
  '/#projects': { name: 'projects' },
  '/#experience': { name: 'experience' }
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');

  useEffect(() => {
    const sectionIds = Object.keys(navItems)
      .filter(path => path.includes('#'))
      .map(path => path.replace('/#', ''));

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // If the section is visible in the middle of the screen
        if (entry.isIntersecting) {
          setActiveSection(`/#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 80) setActiveSection('/');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <aside className="fixed top-0 inset-x-0 z-50 h-auto border-b border-gray-200 bg-white/80">
      <div className="max-w-screen-xl mx-auto px-1">
        <div className="flex items-center justify-between md:justify-around p-4 md:py-3 border-b md:border-0 border-(--gray-200)">
          
          <Link href="/" className="font-bold md:hidden">Jamie's Portfolio</Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`
            ${isOpen ? 'flex' : 'hidden'} 
            md:flex flex-col md:flex-row absolute md:relative 
            top-full left-0 w-full md:w-auto bg-white/90 md:bg-transparent 
            p-4 md:p-0 items-center gap-1 border-b md:border-0 border-(--gray-200)
          `}>
            {Object.entries(navItems).map(([path, { name, icon }]) => {
              const isActive = activeSection === path;

              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    px-4 py-2 rounded-full transition-all duration-300 capitalize flex items-center gap-2
                    ${isActive 
                      ? "bg-pink-100 border border-pink-500 text-pink-700 font-bold" 
                      : "text-gray-600 hover:bg-gray-100 border border-transparent"
                    }
                  `}
                >
                  {icon && <span className={`hidden md:block ${isActive ? "text-pink-600" : "text-gray-500"}`}>{icon}</span>}
                  <span className={`font-bold ${name == "home" ? "block md:hidden lg:hidden" : ""} ${icon ? "md:hidden lg:block" : ""}`}>{name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}