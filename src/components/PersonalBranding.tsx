/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, Award, UserCheck } from 'lucide-react';
// @ts-ignore
import toyotaVelozImg from '../assets/images/toyota_veloz_2026_1779291230811.png';

export default function PersonalBranding() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f0f7ff]/90 to-[#e6efff]/95 border-b border-sky-150/40">
      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 w-fit">
            <UserCheck className="w-3.5 h-3.5" />
            Độc Quyền Định Vị Cá Nhân
          </div>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-normal leading-tight mb-6">
            KHÁCH HÀNG KHÔNG MUA XE TỪ NGƯỜI LẠ
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Ô tô là tài sản lớn có giá trị từ hàng trăm triệu đến nhiều tỷ đồng, khách hàng chỉ xuống tiền khi họ thực sự tin vào uy tín của người bán. MKT Software giúp bạn phủ sóng hình ảnh chuyên gia ô tô tự động và nhất quán:
          </p>

          <div className="space-y-6">
            
            {/* Elegant Quotation block */}
            <div className="p-5 rounded-2xl bg-white border-l-4 border-blue-600 shadow-sm">
              <p className="font-sans italic text-slate-700 text-sm sm:text-base leading-relaxed">
                "Hệ thống tự động đăng bài review xe chất lượng, cập nhật hình ảnh bàn giao xe hào nhoáng cho khách, và giới thiệu các chương trình ưu đãi hấp dẫn để duy trì hiện diện liên tục trong tâm trí người dùng."
              </p>
            </div>

            {/* Checkmark verification row */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-blue-500/10 text-slate-950 font-sans font-bold text-xs sm:text-sm">
              <Award className="w-5.5 h-5.5 text-blue-600 shrink-0" />
              <span>Khách hàng sẽ luôn chủ động inbox tư vấn khi bạn có định vị chuyên gia.</span>
            </div>

          </div>

        </div>

        {/* Right Side: Visual Feed Mockup */}
        <div className="lg:col-span-6 relative">
          
          {/* Radial amber backdrop glow */}
          <div className="absolute -inset-10 bg-blue-500/15 rounded-full blur-3xl" />

          {/* Container simulating high quality phone/desktop layout */}
          <div className="relative bg-white rounded-3xl shadow-xl border border-sky-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            
            {/* Simulation Header Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-3.5 text-white flex items-center justify-between text-xs font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>MKT Auto-Post Preview Simulator</span>
              </div>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-blue-50">Active Control Panel</span>
            </div>

            <div className="p-6">
              {/* Header info bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" 
                      alt="User avatar avatar"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-sm text-slate-900 leading-tight flex items-center gap-1.5">
                      Trần Quốc Huy (Toyota Center)
                      <span className="text-[9px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded">Pro User</span>
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Đăng bài tự động hàng loạt qua MKT System
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-slate-400">Vừa xong</span>
              </div>

              {/* Realistic Sales Copy instead of skeleton bars */}
              <div className="mb-4">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                  🎉 BÀN GIAO TOYOTA VELOZ CROSS CHO GIA ĐÌNH ANH TOÀN TẠI HÀ NỘI! 🚗✨
                </p>
                <p className="text-xs text-slate-600 mt-1 sm:mt-1.5 leading-relaxed">
                  👉 Ưu đãi giảm ngay 15 TRIỆU đồng tiền mặt và tặng gói phụ kiện chính hãng VIP trong tháng này. Hỗ trợ mua xe trả góp lãi suất cực thấp chỉ từ 4.5 triệu/tháng. Đăng ký lái thử miễn phí tại nhà ngay hôm nay!
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[10px] font-semibold text-blue-600">#ToyotaVeloz</span>
                  <span className="text-[10px] font-semibold text-blue-600">#MKTSoftware</span>
                  <span className="text-[10px] font-semibold text-blue-600">#AutoSales</span>
                </div>
              </div>

              {/* High Quality Car Showroom Image */}
              <div className="aspect-video bg-slate-100 rounded-2xl mb-4 flex items-center justify-center overflow-hidden border border-slate-150 relative group/img">
                <img 
                  src={toyotaVelozImg} 
                  alt="Toyota Veloz Cross 2026 inside a modern showroom"
                  className="w-full h-full object-cover rounded-xl group-hover/img:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating automated stats banner over image */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-white text-[10px] sm:text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                    <span>Đang rải bài tự động: <strong className="text-sky-300">18 Groups Ô Tô</strong></span>
                  </div>
                  <span className="text-amber-400">Lượt tiếp cận: 4.8K+</span>
                </div>
              </div>

              {/* Action and Engagement stats mimicking real FB buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100/85 text-xs text-slate-500 font-semibold">
                <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                  <span>👍</span>
                  <span>142 Likes</span>
                </div>
                <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                  <span>💬</span>
                  <span>56 Comments (Seeding tự động)</span>
                </div>
                <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                  <span>🔄</span>
                  <span>24 Shares</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
