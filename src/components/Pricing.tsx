/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Stars, Gift } from 'lucide-react';

interface PricingProps {
  onOpenRegister: (pkgType?: 'combo' | 'facebook' | 'zalo') => void;
}

export default function Pricing({ onOpenRegister }: PricingProps) {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gradient-to-b from-[#f0f7ff]/95 to-[#e1efff] border-b border-sky-100/80">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-normal uppercase mb-4 leading-tight">
            BẢNG GIÁ PHẦN MỀM MKT
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 mt-5 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Chọn gói giải pháp tự động hóa phù hợp với lộ trình tăng trưởng doanh thu của bạn.
          </p>
        </div>

        {/* Pricing columns */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Facebook Automation */}
          <div className="p-8 rounded-3xl border border-slate-200/80 hover:border-blue-500/30 hover:shadow-xl transition-all flex flex-col h-full bg-white relative">
            <h4 className="font-sans font-extrabold text-xl text-slate-900 mb-2">Facebook Automation</h4>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">Chuyên Sâu Nick Facebook</p>
            
            <div className="text-slate-900 font-extrabold text-3.5xl sm:text-4.5xl mb-6">
              6.000.000
              <span className="text-slate-400 font-medium text-sm sm:text-base"> VNĐ/năm</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-2.5 text-sm font-medium text-slate-700">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Đăng bài Group tự động hàng loạt</span>
              </li>
              <li className="flex gap-2.5 text-sm font-medium text-slate-700">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Quét thông tin thành viên hội nhóm</span>
              </li>
              <li className="flex gap-2.5 text-sm font-medium text-slate-700">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Quản lý tập trung đa fanpage vệ tinh</span>
              </li>
              <li className="flex gap-2.5 text-sm font-medium text-slate-700">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Tự động kết nối, seeding tương tác</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenRegister('facebook')}
              className="w-full py-3.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold tracking-wide transition-all active:scale-98 cursor-pointer text-center text-sm"
            >
              Đăng Ký Ngay
            </button>
          </div>

          {/* Card 2: COMBO TRỌN BỘ */}
          <div className="p-8 rounded-3xl border-[4px] border-blue-600 bg-blue-500/5 flex flex-col relative md:scale-105 shadow-2xl z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-sans font-black uppercase tracking-widest flex items-center gap-1 shadow-md whitespace-nowrap">
              <Stars className="w-3.5 h-3.5 text-amber-300" fill="currentColor" />
              Lựa Chọn Tối Ưu
            </div>
            
            <h4 className="font-sans font-extrabold text-2xl text-slate-950 mb-2 mt-2">COMBO TRỌN BỘ</h4>
            <p className="text-blue-600 text-xs font-black uppercase tracking-wider mb-6">Trọn Bộ Công Cụ Vượt Trội</p>
            
            <div className="text-blue-600 font-sans font-black text-4xl sm:text-5xl mb-6">
              9.000.000
              <span className="text-slate-500 font-semibold text-sm sm:text-base block sm:inline"> VNĐ/năm</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-2.5 text-sm font-bold text-slate-950">
                <Stars className="w-5 h-5 text-blue-600 fill-blue-100 shrink-0" /> 
                <span>Tất cả tính năng FB &amp; Zalo Marketing</span>
              </li>
              <li className="flex gap-2.5 text-sm font-bold text-slate-950">
                <Stars className="w-5 h-5 text-blue-600 fill-blue-100 shrink-0" /> 
                <span>Tool quét Google Maps tự động cao cấp</span>
              </li>
              <li className="flex gap-2.5 text-sm font-medium text-slate-800">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Kho kịch bản chốt sale sẵn có (bán xe)</span>
              </li>
              <li className="flex gap-2.5 text-sm font-medium text-slate-800">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Hỗ trợ 1-1 tối ưu cài đặt trọn đời</span>
              </li>
              <li className="flex gap-2.5 text-sm font-medium text-slate-800">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Cập nhật tính năng nâng cấp hoàn toàn miễn phí</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenRegister('combo')}
              className="w-full py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg active:scale-98 font-bold text-center tracking-wider text-sm transition-all shadow-md cursor-pointer"
            >
              NHẬN ƯU ĐÃI NGAY
            </button>
          </div>

          {/* Card 3: Zalo Marketing */}
          <div className="p-8 rounded-3xl border border-slate-200/80 hover:border-blue-500/30 hover:shadow-xl transition-all flex flex-col h-full bg-white relative">
            <h4 className="font-sans font-extrabold text-xl text-slate-900 mb-2">Zalo Marketing</h4>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">Chuyên Sâu Bám Đuổi Zalo</p>
            
            <div className="text-slate-900 font-extrabold text-3.5xl sm:text-4.5xl mb-6">
              3.000.000
              <span className="text-slate-400 font-medium text-sm sm:text-base"> VNĐ/năm</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-2.5 text-sm font-medium text-slate-700">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Kết bạn tự động theo danh sách SĐT</span>
              </li>
              <li className="flex gap-2.5 text-sm font-medium text-slate-700">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Gửi tin nhắn Zalo hàng loạt không chặn</span>
              </li>
              <li className="flex gap-2.5 text-sm font-medium text-slate-700">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Tự động mời kéo khách vào nhóm Zalo chăm sóc</span>
              </li>
              <li className="flex gap-2.5 text-sm font-medium text-slate-700">
                <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                <span>Chăm sóc khách hàng cũ, chúc mừng sinh nhật</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenRegister('zalo')}
              className="w-full py-3.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold tracking-wide transition-all active:scale-98 cursor-pointer text-center text-sm"
            >
              Đăng Ký Ngay
            </button>
          </div>

        </div>

        {/* Promotion Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 p-8 rounded-3xl border-2 border-blue-600/20 max-w-5xl mx-auto shadow-sm">
          <h5 className="font-sans font-black text-center text-lg sm:text-xl text-blue-600 mb-6 flex items-center justify-center gap-2">
            <Gift className="w-6 h-6 animate-bounce" fill="currentColor" />
            🎁 ƯU ĐÃI ĐẶC BIỆT KHI ĐĂNG KÝ HÔM NAY
          </h5>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 items-start sm:items-center">
            
            <div className="flex items-center gap-3 font-sans font-bold text-slate-800 text-sm sm:text-base">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-sans font-bold">✓</span>
              Tặng kho kịch bản chốt ô tô đỉnh cao
            </div>

            <div className="flex items-center gap-3 font-sans font-bold text-slate-800 text-sm sm:text-base">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-sans font-bold">✓</span>
              Cài đặt &amp; hướng dẫn tận nơi (Online 1-1)
            </div>

            <div className="flex items-center gap-3 font-sans font-bold text-slate-800 text-sm sm:text-base">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-sans font-bold">✓</span>
              Tặng công cụ nuôi nick phụ 1 tháng
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
