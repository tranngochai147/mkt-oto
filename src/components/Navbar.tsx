/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ArrowRight, Play, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: 'landing' | 'sandbox';
  onNavigate: (view: 'landing' | 'sandbox') => void;
  onOpenRegister: (pkgType?: 'combo' | 'facebook' | 'zalo') => void;
}

export default function Navbar({ currentView, onNavigate, onOpenRegister }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Tính năng', href: '#features', view: 'landing' as const },
    { name: 'Giải pháp', href: '#solutions', view: 'landing' as const },
    { name: 'Bảng giá', href: '#pricing', view: 'landing' as const },
    { name: 'Khách hàng nói', href: '#testimonials', view: 'landing' as const },
  ];

  const handleLinkClick = (href: string, view: 'landing' | 'sandbox') => {
    onNavigate(view);
    setMobileMenuOpen(false);
    
    // Smooth scroll to element if view remains or changes back
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-150/80 shadow-sm transition-all">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2 cursor-pointer group animate-fade-in"
        >
          <span className="font-sans font-black text-2xl tracking-tight flex items-center gap-1">
            <span className="bg-gradient-to-r from-[#00abec] to-[#0056b3] bg-clip-text text-transparent">MKT</span>
            <span className="text-[#0056b3] font-bold">Software</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href, link.view)}
              className={`text-sm font-medium transition-colors hover:text-[#ff6b00] cursor-pointer ${
                currentView === 'landing' 
                  ? 'text-slate-600' 
                  : 'text-slate-400'
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* Special Toggle for Product Sandbox */}
          <button
            onClick={() => onNavigate(currentView === 'landing' ? 'sandbox' : 'landing')}
            className={`flex items-center gap-1.5 px-3 py-1.2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
              currentView === 'sandbox'
                ? 'bg-blue-50 border-blue-200 text-blue-600'
                : 'bg-orange-50 border-orange-200 text-[#ff6b00] hover:bg-orange-100'
            }`}
          >
            {currentView === 'sandbox' ? (
              <>
                <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                Đang xem: Công Cụ Tự Động
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-[#ff6b00]" fill="currentColor" />
                Chạy thử phần mềm
              </>
            )}
          </button>
        </div>

        {/* Actions Button */}
        <div className="hidden md:flex items-center gap-4">
          {currentView === 'landing' && (
            <button
              onClick={() => onNavigate('sandbox')}
              className="text-slate-700 hover:text-slate-900 font-semibold text-sm transition-colors py-2 px-3"
            >
              Giao Diện Quản Trị
            </button>
          )}
          <button
            onClick={() => onOpenRegister()}
            className="bg-[#ff6b00] text-white hover:bg-orange-600 active:scale-95 transition-all duration-150 px-6 py-2 rounded-full font-bold text-sm tracking-wide shadow-md hover:shadow-orange-250 flex items-center gap-1 cursor-pointer"
          >
            Nhận Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile toggle button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => onNavigate(currentView === 'landing' ? 'sandbox' : 'landing')}
            className="p-1.5 rounded-full border border-orange-200 bg-orange-50 text-[#ff6b00] text-xs font-bold"
          >
            {currentView === 'sandbox' ? 'Về Trang Chủ' : 'Chạy Thử'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md py-4 px-6 space-y-4 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href, link.view)}
                className="text-left py-2 font-medium text-slate-700 hover:text-[#ff6b00] border-b border-slate-50 text-sm"
              >
                {link.name}
              </button>
            ))}
            
            <button
              onClick={() => {
                onNavigate(currentView === 'landing' ? 'sandbox' : 'landing');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between py-2 text-left font-semibold text-sm text-[#ff6b00]"
            >
              <span>{currentView === 'sandbox' ? 'Xem Trang Giới Thiệu' : 'Trực tiếp Trải Nghiệm Phần Mềm'}</span>
              <Play className="w-4 h-4" fill="currentColor" />
            </button>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('sandbox');
                }}
                className="w-full text-center py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm bg-slate-50"
              >
                Giao Diện Quản Trị
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full text-center py-2.5 rounded-xl bg-[#ff6b00] text-white font-bold text-sm shadow-md"
              >
                Nhận Demo Miễn Phí
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
