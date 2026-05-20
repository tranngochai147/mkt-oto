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
      role: 'Sale Hyundai - Tăng 300+ khách Zalo/tháng'
    },
    {
      stars: 5,
      content: 'Tính năng tự động đăng bài review vào các hội nhóm ô tô quá đỉnh. Thương hiệu cá nhân của mình tăng đáng kể, khách hàng chủ động nhắn tin hỏi giá liên tục, tháng vừa rồi chốt thêm 4 xe nhờ automation.',
      initials: 'TL',
      name: 'Thùy Linh',
      role: 'Sale Toyota - Chốt thêm 4 xe/tháng'
    },
    {
      stars: 5,
      content: 'Tiết kiệm cực nhiều thời gian nhắn tin bám đuổi khách. Trước đây mình ngồi check từng tin nhắn mỏi cả mắt, giờ hệ thống tự động bám đuổi thông minh, mình chỉ việc lo chốt lịch hẹn lái thử thôi!',
      initials: 'QT',
      name: 'Quốc Tuấn',
      role: 'Sale Mazda - Giảm 70% thời gian nhắn tin'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f9f9ff] border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight uppercase mb-4">
            SALE Ô TÔ NÓI GÌ VỀ MKT SOFTWARE?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Hơn 5.000+ chuyên viên bán hàng hàng đầu từ các hãng xe lớn như Toyota, Hyundai, VinFast, Ford đã sử dụng và bứt phá doanh thu.
          </p>
          <div className="w-24 h-1.5 bg-[#ff6b00] mx-auto rounded-full mt-6" />
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
                <div className="w-12 h-12 rounded-full bg-orange-500/10 text-[#ff6b00] font-sans font-black flex items-center justify-center text-sm">
                  {rev.initials}
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
