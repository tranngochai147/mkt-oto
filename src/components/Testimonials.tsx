/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      content: 'Trước đây mình tốn rất nhiều tiền chạy Ads mà khách toàn rác. Từ khi dùng MKT, mình quét được đúng khách đang có nhu cầu trong các hội nhóm Hyundai, lượng khách Zalo kết nối tăng vọt không ngờ!',
      initials: 'NH',
      name: 'Nguyễn Hoàng',
      role: 'Sale Hyundai - Tăng 300+ khách Zalo/tháng',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      stars: 5,
      content: 'Tính năng tự động đăng bài review vào các hội nhóm ô tô quá đỉnh. Thương hiệu cá nhân của mình tăng đáng kể, khách hàng chủ động nhắn tin hỏi giá liên tục, tháng vừa rồi chốt thêm 4 xe nhờ automation.',
      initials: 'TL',
      name: 'Thùy Linh',
      role: 'Sale Toyota - Chốt thêm 4 xe/tháng',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      stars: 5,
      content: 'Tiết kiệm cực nhiều thời gian nhắn tin bám đuổi khách. Trước đây mình ngồi check từng tin nhắn mỏi cả mắt, giờ hệ thống tự động bám đuổi thông minh, mình chỉ việc lo chốt lịch hẹn lái thử thôi!',
      initials: 'QT',
      name: 'Quốc Tuấn',
      role: 'Sale Mazda - Giảm 70% thời gian nhắn tin',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#eef5ff]/95 border-b border-sky-100/80">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-normal uppercase mb-4 leading-tight">
            SALE Ô TÔ NÓI GÌ VỀ MKT SOFTWARE?
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 mt-5 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Hơn 5.000+ chuyên viên bán hàng hàng đầu từ các hãng xe lớn như Toyota, Hyundai, VinFast, Ford đã sử dụng và bứt phá doanh thu.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Star line */}
              <div className="flex gap-1 mb-5">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Feed content quote */}
              <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                "{rev.content}"
              </p>

              {/* Author line info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-50 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-orange-500/10 text-[#ff6b00] font-sans font-black flex items-center justify-center text-sm border-2 border-slate-100 shadow-sm shrink-0">
                  {rev.avatar ? (
                    <img 
                      src={rev.avatar} 
                      alt={rev.name} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    rev.initials
                  )}
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-slate-900 text-sm sm:text-base">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                    {rev.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
