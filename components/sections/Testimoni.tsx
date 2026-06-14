"use client";

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimoni() {
  const testimonials = [
    {
      text: "Alhamdulillah, pelayanan PT. Altur sangat memuaskan. Hotel dekat Masjidil Haram, ustadz pembimbing sangat sabar. Terima kasih!",
      name: "Hj. Fatimah",
      location: "Gorontalo (Umroh Februari 2024)",
      rating: 5,
    },
    {
      text: "Ini umroh kedua saya bersama Altur. Prosesnya mudah, dari dokumen sampai keberangkatan semua dibantu. Sangat recommended!",
      name: "H. Ibrahim Daud",
      location: "Limboto (Umroh Oktober 2024)",
      rating: 5,
    },
    {
      text: "Saya awalnya ragu karena pertama kali umroh. Tapi tim Altur sangat sabar membimbing. InsyaAllah tahun depan berangkat lagi.",
      name: "Nurhaliza Mohamad",
      location: "Tilamuta (Umroh Maret 2025)",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimoni" className="py-24 px-4 bg-[#FDF8F0] overflow-hidden">
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#064E3B] mb-4">
            Testimoni Jemaah
          </h2>
          <p className="font-sans text-[#1A1A2E]/70">
            Kesan dan pesan dari jemaah yang telah mempercayakan perjalanannya kepada kami.
          </p>
        </div>

        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#D4A843]/20 text-center">
          <Quote size={48} className="text-[#064E3B]/10 absolute top-8 left-8" />
          
          <div className="min-h-[200px] flex flex-col justify-center items-center">
            <div className="flex gap-1 text-[#D4A843] mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            
            <p className="font-display text-xl md:text-2xl italic text-gray-700 mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div>
              <div className="w-12 h-12 bg-[#064E3B] rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <h4 className="font-bold text-[#1A1A2E]">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-[#D4A843] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#064E3B] hover:bg-[#FDF8F0] hover:text-[#D4A843] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#064E3B] hover:bg-[#FDF8F0] hover:text-[#D4A843] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
