"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { Button } from '../ui/Button';

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background stars slow parallax
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Mid layer Ka'bah silhouette parallax
      gsap.to(midRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content fade out and scale down on scroll
      gsap.to(contentRef.current, {
        yPercent: -20,
        opacity: 0,
        scale: 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1A1A2E]"
    >
      {/* Background Layer: Night Sky / Stars */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#064E3B]/40 via-[#1A1A2E] to-[#1A1A2E]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          backgroundBlendMode: 'screen'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Mid Layer: Ka'bah Silhouette */}
      <div
        ref={midRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform pointer-events-none flex items-end justify-center"
      >
        <div 
          className="w-full h-1/2 bg-contain bg-bottom bg-no-repeat opacity-60"
          style={{
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/e6/Kaaba_Silhouette.png")',
            filter: 'brightness(0) invert(1) opacity(0.3)'
          }}
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#1A1A2E] to-transparent" />
      </div>

      {/* Front Layer: Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 will-change-transform"
      >
        <p className="font-arabic text-[#D4A843] text-2xl md:text-3xl mb-4 opacity-90">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#FDF8F0] mb-6 leading-tight shadow-sm">
          Perjalanan Suci Dimulai <br className="hidden md:block"/> dari Sini
        </h1>
        <p className="font-sans text-lg md:text-xl text-[#FDF8F0]/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Umroh Premium dengan Bimbingan Ustadz Berpengalaman, Hotel Bintang 5 Dekat Masjidil Haram, dan Pelayanan Eksklusif dari Gorontalo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Lihat Paket Umroh
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#D4A843] text-[#D4A843] hover:bg-[#D4A843] hover:text-[#1A1A2E]">
            Konsultasi via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
