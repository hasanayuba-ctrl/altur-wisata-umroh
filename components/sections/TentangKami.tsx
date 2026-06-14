"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export function TentangKami() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const keunggulan = [
    'Pembimbing ibadah bersertifikat',
    'Asuransi perjalanan lengkap',
    'Opsi pembayaran fleksibel (Cash & Cicilan)',
    'Pendampingan dokumen dari awal hingga berangkat',
    'Kantor fisik di Limboto untuk konsultasi langsung',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      gsap.from(textRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
      
      gsap.from('.keunggulan-item', {
        x: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 60%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tentang" ref={sectionRef} className="py-24 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div ref={imageRef} className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            {/* Soft decorative background element */}
            <div className="absolute inset-0 bg-[#064E3B] opacity-10 pattern-dots" />
            <Image
              src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=800"
              alt="Tim PT. Altur Wisata Mulia"
              fill
              className="object-cover z-10"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Elegant overlay badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl z-20 shadow-xl border border-white/20">
              <p className="font-display text-xl font-bold text-[#064E3B] mb-1">Berpengalaman</p>
              <p className="text-sm text-gray-600">Melayani jemaah Gorontalo dengan sepenuh hati.</p>
            </div>
          </div>

          {/* Text Column */}
          <div ref={textRef} className="flex flex-col justify-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#064E3B] mb-6 leading-tight">
              Mengapa Memilih <br />
              <span className="text-[#D4A843]">PT. Altur Wisata Mulia?</span>
            </h2>
            
            <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
              Kami adalah biro perjalanan umroh resmi terdaftar di Kementerian Agama RI, berbasis di Limboto, Gorontalo. Sejak berdiri, kami telah memberangkatkan ratusan jemaah dengan pelayanan terbaik yang berlandaskan syariat dan kenyamanan.
            </p>

            <div className="space-y-4">
              {keunggulan.map((item, idx) => (
                <div key={idx} className="keunggulan-item flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-[#D4A843]/30 hover:bg-[#FDF8F0] transition-colors">
                  <div className="bg-[#064E3B]/10 p-2 rounded-full shrink-0">
                    <CheckCircle2 size={24} className="text-[#064E3B]" />
                  </div>
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
