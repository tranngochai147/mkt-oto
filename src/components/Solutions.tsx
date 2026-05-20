/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, MessageSquareCode, Share2, PanelLeftClose, ArrowRight } from 'lucide-react';

interface SolutionsProps {
  onNavigateToSandbox: () => void;
}

export default function Solutions({ onNavigateToSandbox }: SolutionsProps) {
  const solutions = [
    {
      icon: <Search className="w-6 h-6 text-blue-600" />,
      title: 'Quét Data Đa Kênh',
      desc: 'Tự động lấy số điện thoại, facebook UID, thông tin khách hàng từ Google Maps, Fanpage đối thủ, và các Hội Nhóm ô tô lớn.'
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-blue-600" />,
      title: 'Auto Zalo Connect',
      desc: 'Tự động kết bạn và gửi tin nhắn Zalo kèm kịch bản chào hàng cá nhân hóa cho hàng ngàn số điện thoại mục tiêu.'
    },
    {
      icon: <Share2 className="w-6 h-6 text-blue-600" />,
      title: 'Phủ Sóng Group Facebook',
      desc: 'Lên lịch đăng tải bài đánh giá, chương trình ưu đãi hàng loạt lên hàng trăm hội nhóm mua bán tài xế mà không sợ bị khóa.'
    },
    {
      icon: <PanelLeftClose className="w-6 h-6 text-blue-600" />,
      title: 'Quản Lý Đa Fanpage',
      desc: 'Một màn hình tập trung quản lý hàng chục fanpage vệ tinh hỗ trợ tự động trả lời bình luận, nhắn tin trực tiếp tức thì.'
    }
  ];

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#e7eefe]/50 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4">
            GIẢI PHÁP MARKETING TOÀN DIỆN CHO SALE Ô TÔ
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Sở hữu "cỗ máy" tự động quét khách hàng chất lượng từ mọi ngóc ngách internet và đưa thẳng họ vào phễu bám đuổi chăm sóc tự động.
          </p>
          <div className="w-24 h-1 bg-[#ff6b00] mx-auto rounded-full mt-6" />
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Illustration */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-1.5 opacity-30 bg-gradient-to-r from-blue-400 to-orange-500 rounded-2xl blur-xl" />
            <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-slate-200">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArQ-dmSM_FoYQxoM0v7XxbyHLPMENmv2Ta4qxGZGhFrrztarNiOb_stW9NEjXr2uMN3Nq_lLPGh70zI4n9Uuri18-IAnGWAr8uweJkw0Ifk9IH6VO4US3augO9ywq5v-gXTmB1lDO0aE9B-RriftkFLmTieJg_caF57rMiF5zderIaXaHPxKImacvoJqgl4tMTYqYuT0-htccghDgnmB6bRJnWWZAqFwE3rCivRNC-v4y7VjSxYAmEfU2lqRNPfLYCoaUWM14YT6Y" 
                alt="Sophisticated MKT Software Dashboard Panel screenshot"
                className="rounded-xl w-full object-cover shadow-md aspect-[16/10]"
                referrerPolicy="no-referrer"
              />
              
              {/* Float Widget */}
              <div className="absolute top-8 right-8 bg-[#ff6b00] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md uppercase tracking-wider animate-pulse">
                Hỗ trợ 24/7 online
              </div>
            </div>
          </div>

          {/* Right Text list */}
          <div className="lg:col-span-5 space-y-5">
            {solutions.map((item, idx) => (
              <div 
                key={idx}
                className="flex gap-4 p-5 rounded-2xl bg-white/80 border border-slate-150 shadow-sm hover:shadow-md hover:border-[#ff6b00]/30 hover:bg-white transition-all duration-200 group cursor-pointer"
                onClick={onNavigateToSandbox}
              >
                <div className="flex-shrink-0 p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-[#ff6b00]/10 group-hover:text-[#ff6b00] transition-colors h-fit">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-base sm:text-lg text-slate-900 mb-1.5 group-hover:text-[#ff6b00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="pt-4">
              <button
                onClick={onNavigateToSandbox}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 group shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
              >
                Trải Nghiệm Trực Tiếp Tính Năng
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
