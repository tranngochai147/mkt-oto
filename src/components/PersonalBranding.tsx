/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, Award, UserCheck } from 'lucide-react';

export default function PersonalBranding() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6 w-fit">
            <UserCheck className="w-3.5 h-3.5" />
            Độc Quyền Định Vị Cá Nhân
          </div>

          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4.5xl text-slate-900 tracking-tight leading-tight mb-6">
            KHÁCH HÀNG KHÔNG MUA XE TỪ NGƯỜI LẠ
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            Ô tô là tài sản lớn có giá trị từ hàng trăm triệu đến nhiều tỷ đồng, khách hàng chỉ xuống tiền khi họ thực sự tin vào uy tín của người bán. MKT Software giúp bạn phủ sóng hình ảnh chuyên gia ô tô tự động và nhất quán:
          </p>

          <div className="space-y-6">
            
            {/* Elegant Quotation block */}
            <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#ff6b00] shadow-sm">
              <p className="font-sans italic text-slate-700 text-sm sm:text-base leading-relaxed">
                "Hệ thống tự động đăng bài review xe chất lượng, cập nhật hình ảnh bàn giao xe hào nhoáng cho khách, và giới thiệu các chương trình ưu đãi hấp dẫn để duy trì hiện diện liên tục trong tâm trí người dùng."
              </p>
            </div>

            {/* Checkmark verification row */}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-orange-500/5 text-slate-950 font-sans font-bold text-xs sm:text-sm">
              <Award className="w-5.5 h-5.5 text-[#ff6b00] shrink-0" />
              <span>Khách hàng sẽ luôn chủ động inbox tư vấn khi bạn có định vị chuyên gia.</span>
            </div>

          </div>

        </div>

        {/* Right Side: Visual Feed Mockup */}
        <div className="lg:col-span-6 relative">
          
          {/* Radial amber backdrop glow */}
          <div className="absolute -inset-10 bg-[#ff6b00]/10 rounded-full blur-3xl" />

          {/* Container simulating high quality phone/desktop layout */}
          <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-slate-150 overflow-hidden">
            
            {/* Header info bar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 bg-[#ff6b00] text-white rounded-full flex items-center justify-center font-black text-lg shadow-sm">
                M
              </div>
              <div>
                <h4 className="font-sans font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                  MKT Software Brand Builder
                </h4>
                <p className="text-xs text-slate-400 font-medium">Auto Publish Content Active</p>
              </div>
            </div>

            {/* Image illustrating post dashboard */}
            <div className="aspect-video bg-slate-100 rounded-2xl mb-5 flex items-center justify-center overflow-hidden border border-slate-150">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM-vM1eeHb8COqPdk0Ou-2CpdiF_7KX5wHXqvJV63oBLg-CBSSNPw7_uGj0yqiRP_S3G1gtl4iHPKd9r2_qO4ZkuzGJ6IknailQcLgSbuZ_oXfT_RAMwDGPOLB0L91f9NpUOJ3w6PVaiyXPKHu15xv6T5A2DVJ6FYIePiC-seBpK-C-rMK91p4hAC6dY80Yrk-ONqrWc6xPFW5wzbMgFHwR4IsdgkihcJ-8idq4Vqqf0eoAkmmI4XRrB7Z4Dm9HexJGbFJc6kCydM" 
                alt="Automotive social media feed layout showing luxury car delivery and reviews"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content lines representing a post */}
            <div className="space-y-2.5">
              <div className="h-4.5 w-1/3 bg-slate-100 rounded-md" />
              <div className="h-4 w-full bg-slate-50 rounded-md" />
              <div className="h-4 w-5/6 bg-slate-50 rounded-md" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
