"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-display font-bold text-2xl text-[#FDF8F0]">
                Altur<span className="text-[#D4A843]">Wisata</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Biro perjalanan umroh resmi dan terpercaya. Kami berkomitmen memberikan pelayanan terbaik untuk kelancaran ibadah Anda di Tanah Suci.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A843] hover:text-[#1A1A2E] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A843] hover:text-[#1A1A2E] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A843] hover:text-[#1A1A2E] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#FDF8F0]">Navigasi Cepat</h4>
            <ul className="space-y-3">
              {['Beranda', 'Paket Umroh', 'Tentang Kami', 'Testimoni', 'Kontak'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-[#D4A843] transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]/50" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#FDF8F0]">Informasi Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={20} className="text-[#D4A843] shrink-0" />
                <span>Jl. Jend. Sudirman No. XX, Limboto, Kab. Gorontalo, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={20} className="text-[#D4A843] shrink-0" />
                <span>+62 812-XXXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={20} className="text-[#D4A843] shrink-0" />
                <span>info@alturwisata.com</span>
              </li>
            </ul>
          </div>

          {/* Licensing Badge */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#FDF8F0]">Legalitas</h4>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-4">
              <Award className="text-[#10B981] shrink-0" size={32} />
              <div>
                <p className="font-bold text-sm text-white mb-1">Terdaftar Resmi</p>
                <p className="text-xs text-gray-400">Kementerian Agama Republik Indonesia</p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PT. Altur Wisata Mulia. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
