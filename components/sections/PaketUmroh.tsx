"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export function PaketUmroh() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const packages = [
    {
      title: 'Umroh Reguler',
      price: 'Rp 28.500.000',
      duration: '9 Hari',
      hotel: 'Bintang 4 (±500m dari Masjidil Haram)',
      flight: 'Garuda Indonesia / Saudia',
      features: ['Visa Umroh', 'Makan 3x Sehari', 'Muthawwif Berpengalaman', 'Perlengkapan Umroh', 'Air Zamzam 5L'],
      isPopular: false,
    },
    {
      title: 'Umroh VIP',
      price: 'Rp 35.000.000',
      duration: '12 Hari',
      hotel: 'Bintang 5 (±200m dari Masjidil Haram)',
      flight: 'Garuda Indonesia Direct',
      features: ['Semua fasilitas Reguler', 'City Tour Madinah', 'Ziarah Lengkap', 'Lounge VIP Bandara', 'Kereta Cepat Haramain'],
      isPopular: true,
    },
    {
      title: 'Umroh Plus Turki',
      price: 'Rp 45.000.000',
      duration: '15 Hari',
      hotel: 'Bintang 5',
      flight: 'Turkish Airlines via Istanbul',
      features: ['Umroh + Wisata Istanbul 3 Hari', 'Hagia Sophia & Blue Mosque', 'Grand Bazaar', 'Guide Lokal Berbahasa Indonesia', 'Semua fasilitas VIP'],
      isPopular: false,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.paket-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="paket" ref={sectionRef} className="py-24 px-4 bg-[#FDF8F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#064E3B] mb-4">
            Pilihan Paket Umroh
          </h2>
          <p className="font-sans text-[#1A1A2E]/70 max-w-2xl mx-auto">
            Temukan paket perjalanan yang sesuai dengan kebutuhan ibadah Anda. Kami menjamin pelayanan terbaik untuk kenyamanan Anda di Tanah Suci.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, idx) => (
            <Card 
              key={idx} 
              className={`paket-card relative flex flex-col h-full ${
                pkg.isPopular ? 'border-2 border-[#D4A843] md:-translate-y-4 shadow-2xl' : ''
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 rotate-[-3deg] bg-[#D4A843] text-white px-4 py-1 rounded-sm font-bold shadow-md z-10">
                  POPULER
                </div>
              )}
              
              <div className={`p-8 ${pkg.isPopular ? 'bg-[#064E3B] text-white' : 'bg-white'}`}>
                <h3 className="font-display text-2xl font-bold mb-2">{pkg.title}</h3>
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${pkg.isPopular ? 'text-[#D4A843]' : 'text-[#064E3B]'}`}>
                    {pkg.price}
                  </span>
                </div>
                <div className="flex gap-4 text-sm opacity-90 mb-6 font-medium">
                  <span className="flex items-center gap-1">⏱️ {pkg.duration}</span>
                  <span className="flex items-center gap-1">✈️ {pkg.flight.split(' ')[0]}</span>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="text-sm">
                    <span className="font-bold opacity-100 block mb-1">Hotel:</span>
                    <span className="opacity-80">{pkg.hotel}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold opacity-100 block mb-1">Penerbangan:</span>
                    <span className="opacity-80">{pkg.flight}</span>
                  </div>
                  <hr className={pkg.isPopular ? 'border-white/20' : 'border-gray-100'} />
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check size={18} className={`shrink-0 ${pkg.isPopular ? 'text-[#10B981]' : 'text-[#10B981]'}`} />
                        <span className="opacity-90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={`p-8 mt-auto border-t ${pkg.isPopular ? 'border-white/10 bg-[#064E3B]' : 'bg-gray-50'}`}>
                <Button 
                  variant={pkg.isPopular ? 'secondary' : 'outline'} 
                  className="w-full"
                >
                  Lihat Detail
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
