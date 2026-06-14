"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { MessageCircle, ListChecks, CreditCard, FileText, PlaneTakeoff } from 'lucide-react';

export function AlurPendaftaran() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: <MessageCircle size={28} />,
      title: 'Konsultasi',
      desc: 'Hubungi kami via WhatsApp atau datang ke kantor',
    },
    {
      icon: <ListChecks size={28} />,
      title: 'Pilih Paket',
      desc: 'Pilih paket sesuai budget dan jadwal Anda',
    },
    {
      icon: <CreditCard size={28} />,
      title: 'Daftar & Bayar',
      desc: 'Isi formulir dan lakukan pembayaran DP',
    },
    {
      icon: <FileText size={28} />,
      title: 'Persiapan Dokumen',
      desc: 'Kami bantu urus paspor, visa, dan vaksin',
    },
    {
      icon: <PlaneTakeoff size={28} />,
      title: 'Berangkat!',
      desc: 'Siap menuju Tanah Suci bersama rombongan',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepElements = gsap.utils.toArray('.timeline-step');
      
      gsap.from(stepElements, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 75%',
        }
      });
      
      // Animate the connecting line
      gsap.fromTo('.timeline-line', 
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-[#1A1A2E] text-white overflow-hidden relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(#D4A843 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FDF8F0] mb-4">
            Alur Pendaftaran Mudah
          </h2>
          <p className="font-sans text-[#FDF8F0]/70 max-w-2xl mx-auto">
            Proses persiapan perjalanan ibadah Anda kami buat senyaman dan semudah mungkin.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-[#FDF8F0]/10 rounded-full">
            <div className="timeline-line h-full bg-[#D4A843] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="timeline-step flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-4">
                {/* Connecting Line (Mobile) */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute left-[31px] top-[60px] bottom-[-40px] w-0.5 bg-gradient-to-b from-[#D4A843] to-[#FDF8F0]/10 -z-10" />
                )}
                
                {/* Icon Circle */}
                <div className="relative shrink-0 w-16 h-16 rounded-full bg-[#064E3B] border-4 border-[#1A1A2E] shadow-[0_0_0_2px_#D4A843] flex items-center justify-center text-[#D4A843] z-10 group transition-transform hover:scale-110">
                  {step.icon}
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full border border-[#D4A843] opacity-0 group-hover:animate-ping" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-xl text-[#D4A843] mb-2">Step {idx + 1}</h3>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed md:max-w-[200px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
