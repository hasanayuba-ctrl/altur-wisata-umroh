"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { Users, Building2, FileCheck, Star } from 'lucide-react';

export function TrustBadges() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const badges = [
    { icon: <Users size={28} />, value: 500, suffix: '+', label: 'Jemaah Berangkat' },
    { icon: <Building2 size={28} />, value: 5, suffix: '', label: 'Hotel Bintang' },
    { icon: <FileCheck size={28} />, value: 100, suffix: '%', label: 'Izin Resmi Kemenag' },
    { icon: <Star size={28} />, value: 4.9, suffix: '/5', label: 'Rating Kepuasan' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      const counters = gsap.utils.toArray<HTMLElement>('.counter-value');
      
      counters.forEach((counter) => {
        const targetValue = parseFloat(counter.getAttribute('data-value') || '0');
        
        gsap.fromTo(counter, 
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: targetValue % 1 !== 0 ? 0.1 : 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
            },
            onUpdate: function() {
              const val = Number(this.targets()[0].innerText);
              this.targets()[0].innerText = targetValue % 1 !== 0 ? val.toFixed(1) : Math.round(val);
            }
          }
        );
      });

      // Stagger reveal for badges
      gsap.from('.trust-badge', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-r from-[#064E3B] to-[#1A1A2E] py-12 px-4 relative z-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {badges.map((badge, index) => (
            <div key={index} className="trust-badge flex flex-col items-center text-center text-[#FDF8F0]">
              <div className="text-[#D4A843] mb-3 p-3 rounded-full bg-white/5 border border-white/10">
                {badge.icon}
              </div>
              <div className="font-display font-bold text-3xl md:text-4xl mb-1 flex items-center">
                <span className="counter-value" data-value={badge.value}>0</span>
                <span>{badge.suffix}</span>
              </div>
              <p className="font-sans text-sm md:text-base opacity-80">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
