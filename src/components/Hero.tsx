/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, Play, Users, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onNavigateToSandbox: () => void;
  onOpenRegister: (pkgType?: 'combo' | 'facebook' | 'zalo') => void;
}

export default function Hero({ onNavigateToSandbox, onOpenRegister }: HeroProps) {
  const benefits = [
    'Tự động tìm khách',
    'Quét data chất lượng',
    'Nhắn tin & CSKH tự động',
    'Đăng bài tự động',
    'Xây thương hiệu cá nhân',
    'Tăng lịch hẹn chốt cọc'
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/50 via-blue-50/50 to-sky-50/40 pt-24 pb-16 lg:pt-36 lg:pb-24 border-b border-sky-100/70">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-[#00c6ff]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 -left-60 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-orange-500/10 text-[#ff6b00] border border-orange-200/40 font-bold text-xs uppercase tracking-wider mb-6 w-fit animate-pulse">
            <Zap className="w-3.5 h-3.5" fill="currentColor" />
            Tự động hóa Sale Ô tô 2026
          </div>

          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-[58px] text-slate-900 leading-[1.3] tracking-normal mb-6">
            KHÔNG CẦN CHẠY ADS QUÁ NHIỀU — 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-[#ff6b00] to-amber-500 mt-2 py-2 px-1 leading-normal overflow-visible">
              VẪN CÓ KHÁCH MỚI MỖI NGÀY
            </span>
          </h1>

          <p className="font-sans font-semibold text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            Nền tảng Quét Khách Hàng, Đăng Bài &amp; Gửi Tin Nhắn Zalo &amp; Facebook Marketing tự động – giải pháp đỉnh cao thiết kế riêng cho <span className="text-[#ff6b00] underline decoration-wavy">SALE Ô TÔ</span> tại Việt Nam.
          </p>

          {/* Checklist in 2 columns */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 bg-white/65 backdrop-blur-sm p-6 rounded-2xl border border-slate-250/30">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-slate-800 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5.5 h-5.5 text-[#ff6b00] fill-orange-50 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button
              onClick={() => onOpenRegister('combo')}
              className="bg-[#ff6b00] text-white hover:bg-orange-600 active:scale-95 transition-all py-4 px-8 rounded-2xl font-black text-base shadow-xl hover:shadow-orange-350 flex items-center justify-center gap-2 cursor-pointer group"
            >
              NHẬN DEMO MIỄN PHÍ 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onNavigateToSandbox}
              className="border-2 border-slate-800 text-slate-800 hover:bg-slate-900 hover:text-white active:scale-95 transition-all py-4 px-8 rounded-2xl font-bold text-base flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Play className="w-4 h-4 text-orange-500 group-hover:text-white" fill="currentColor" />
              ĐĂNG KÝ DÙNG THỬ (FREE)
            </button>
          </div>

          {/* Safe signals */}
          <div className="flex items-center gap-6 mt-8 p-1 text-slate-500 text-xs sm:text-sm font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4.5 h-4.5 text-blue-500" /> Bản quyền chuẩn MKT Software
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4.5 h-4.5 text-orange-500" /> Hơn 5.000+ Sale tin dùng
            </span>
          </div>

        </div>

        {/* Hero Right Image / Car visual */}
        <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
          
          {/* Lighting rings around image */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-400 to-blue-500 opacity-20 blur-xl animate-pulse" />
          
          <div className="relative z-10 w-full max-w-[500px] lg:max-w-none bg-white p-3 rounded-3xl shadow-2xl border border-slate-100">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2HTjHoD-cu20k29Dzq9S6lgr9JmnbFNQM7uaTN_a58ezRIvD2ripgCrJZXiHBf4izlP9OdH-v4rftKsyHJFwXL3zRwI1tmnCeOmpbCBBIubg4ooY72YPZbWACTeEi03zDFlZI3k89soCtA3_zwX1jvzHsYixiIVGNfu4ImUZkbkvPo-trlLDcrpxS2dFPpHNg5bPYKdPeSHlJpgRtpystpAxl8cTfGePac9yM6Bdirw1qAa5PyMG67wEgdsKY9EHaFuI0z8R_1Yc" 
              alt="MKT Software Auto Vietnamese Sales Consultant Showroom"
              className="rounded-2xl w-full object-cover aspect-[4/3] shadow-inner"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay badge element */}
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce duration-[4000ms]">
              <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-lg">
                ✓
              </span>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Tác Vụ Automation</p>
                <p className="text-sm text-slate-800 font-black">Chạy ẩn 24/7 Không Tốn RAM</p>
              </div>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
