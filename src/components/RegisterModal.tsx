/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Check } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageType?: 'combo' | 'facebook' | 'zalo';
  onNavigateToSandbox?: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in z-10 grid grid-cols-1 md:grid-cols-12">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full hover:bg-slate-100/10 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer bg-white/20 backdrop-blur-xs md:bg-transparent md:hover:bg-slate-100 md:hover:text-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Indigo Blue Marketing Panel */}
        <div className="md:col-span-6 bg-[#0c2373] p-6 sm:p-8 text-white flex flex-col justify-between">
          <div>
            {/* Display Header */}
            <h2 className="text-3xl sm:text-[34px] font-sans font-black italic tracking-wide text-white mb-6 uppercase text-left leading-tight">
              ĐỪNG BỎ LỠ!
            </h2>

            {/* Premium Checked Bullet points */}
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                </div>
                <p className="text-left text-slate-200 leading-relaxed text-xs sm:text-[13px]">
                  Hỗ trợ 24/7, hướng dẫn <span className="text-cyan-300 font-bold">TẬN TÌNH</span> đến khi bạn thành thạo sử dụng công cụ
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                </div>
                <p className="text-left text-slate-200 leading-relaxed text-xs sm:text-[13px]">
                  Huấn luyện <span className="text-cyan-300 font-bold">tư duy chiến lược</span> với đội ngũ chuyên gia &gt;10 năm kinh nghiệm
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-cyan-300 stroke-[3]" />
                </div>
                <p className="text-left text-slate-200 leading-relaxed text-xs sm:text-[13px]">
                  Bảo trì và cập nhật phần mềm trọn đời miễn phí
                </p>
              </div>
            </div>

            {/* Scenic Canal Illustration Area */}
            <div className="my-5 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=600&h=360&q=80" 
                alt="Mazda CX-5 2025" 
                className="w-full h-36 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div>
            {/* Pill Indicator */}
            <div className="w-full bg-[#1b75ff] text-white text-xs sm:text-[13px] font-black py-2.5 px-4 rounded-xl text-center shadow-md mb-4 uppercase tracking-wider">
              +6.000+ Khách hàng đã phục vụ
            </div>

            {/* Lower row of audience badges */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/10 backdrop-blur-xs py-2 px-1 rounded-lg text-[10px] sm:text-xs font-black text-center text-slate-200 tracking-wider">
                TIẾT KIỆM
              </div>
              <div className="bg-[#fee2e2]/10 backdrop-blur-xs py-2 px-1 rounded-lg text-[10px] sm:text-xs font-black text-center text-[#ff8e8e] tracking-wider">
                HIỆU QUẢ
              </div>
              <div className="bg-[#fef3c7]/10 backdrop-blur-xs py-2 px-1 rounded-lg text-[10px] sm:text-xs font-black text-center text-[#ffe17d] tracking-wider">
                TỰ ĐỘNG
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Consultation Direct Contact Buttons */}
        <div className="md:col-span-6 bg-white p-6 sm:p-10 flex flex-col justify-center text-center">
          <div className="space-y-6">
            
            {/* Heading Group */}
            <div>
              <p className="text-[#b4905a] text-xs font-bold tracking-[0.2em] uppercase mb-1.5 leading-none">
                HỖ TRỢ &amp; TƯ VẤN NHANH CHÓNG
              </p>
              <h3 className="font-sans font-black text-slate-950 text-2xl sm:text-3xl tracking-tight leading-none">
                LIÊN HỆ NGAY
              </h3>
            </div>

            {/* Action Buttons Container */}
            <div className="space-y-4">
              
              {/* Telegram Action Button */}
              <a
                href="https://t.me/ngochaimkt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#246bfd] hover:bg-blue-600 text-white p-4 rounded-2xl shadow-lg shadow-blue-500/10 transition-all scale-100 hover:scale-[1.01] active:scale-99 cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-6 h-6 text-[#246bfd]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.36-.49 1-.74 3.9-1.69 6.51-2.8 7.83-3.33 3.73-1.5 4.5 1.76 4.54 1.77z"/>
                  </svg>
                </div>
                <div className="text-left select-none">
                  <p className="text-[10px] text-blue-100 font-extrabold tracking-widest uppercase mb-0.5 leading-none">HỖ TRỢ TELEGRAM</p>
                  <p className="text-base sm:text-lg font-black tracking-wide">@ngochaimkt</p>
                </div>
              </a>

              {/* Zalo Action Button */}
              <a
                href="https://zalo.me/0919262681"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#1e58f0] hover:bg-blue-600 text-white p-4 rounded-2xl shadow-lg shadow-blue-500/10 transition-all scale-100 hover:scale-[1.01] active:scale-99 cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm font-sans font-black text-[#1e58f0] tracking-tighter text-sm flex-col leading-none">
                  <span>Zalo</span>
                </div>
                <div className="text-left select-none">
                  <p className="text-[10px] text-blue-100 font-extrabold tracking-widest uppercase mb-0.5 leading-none">HỖ TRỢ ZALO</p>
                  <p className="text-base sm:text-lg font-black tracking-wide">0919.2626.81</p>
                </div>
              </a>

            </div>

            {/* Quick description info */}
            <p className="text-slate-400 text-xs leading-normal pt-2">
              Kích hoạt nhanh chóng trong vòng 5 phút.<br />
              Đội ngũ kỹ thuật viên cam kết hỗ trợ tối đa quy trình.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
