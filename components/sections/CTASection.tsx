"use client";

import React from 'react';
import { Button } from '../ui/Button';

export function CTASection() {
  return (
    <section className="relative py-24 bg-[#1A1A2E] flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-[#064E3B]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent opacity-90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Siap Mewujudkan Ibadah Umroh Anda?
        </h2>
        <p className="font-sans text-lg text-white/80 mb-10 max-w-xl mx-auto">
          Hubungi kami sekarang untuk konsultasi gratis dan jadwal keberangkatan terdekat. Mari jadikan perjalanan suci Anda berkesan.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none shadow-lg shadow-[#25D366]/20"
          >
            Hubungi via WhatsApp
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-[#064E3B]"
          >
            Lihat Jadwal Keberangkatan
          </Button>
        </div>
      </div>
    </section>
  );
}
