/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Coins, UserMinus, ShieldAlert, TimerOff, MessageCircleOff, Unplug } from 'lucide-react';

export default function PainPoints() {
  const pains = [
    {
      icon: <Coins className="w-8 h-8 text-rose-500" />,
      title: 'Data quá đắt đỏ',
      desc: 'Chi phí quảng cáo (Facebook/Google Ads) ngày càng đắt đỏ, chất lượng lead ảo nhiều, tỉ lệ chốt cực thấp.'
    },
    {
      icon: <UserMinus className="w-8 h-8 text-rose-500" />,
      title: 'Khách hàng "bay màu"',
      desc: 'Khách hỏi giá xong thì im lặng. Nếu không bám đuổi, chăm sóc định kỳ qua Zalo/Facebook sẽ lập tức mất dấu.'
    },
    {
      icon: <TimerOff className="w-8 h-8 text-rose-500" />,
      title: 'Không có thời gian',
      desc: 'Cả ngày phải túc trực showroom, đi bàn giao xe, hỗ trợ đăng kiểm... không còn thời gian đăng bài hay nhắn tin dò khách.'
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-rose-500" />,
      title: 'Thiếu thương hiệu cá nhân',
      desc: 'Profile cá nhân sơ sài, không có bài chia sẻ hữu ích nên khách lo ngại, không dám giao dịch tài sản tiền tỷ.'
    },
    {
      icon: <MessageCircleOff className="w-8 h-8 text-rose-500" />,
      title: 'Kênh khai thác lẻ tẻ',
      desc: 'Chỉ đăng bài trang cá nhân, không thể phủ sóng được các hội nhóm xe hơi lớn hoặc group cư dân tiềm năng xung quanh.'
    },
    {
      icon: <Unplug className="w-8 h-8 text-rose-500" />,
      title: 'Phụ thuộc hoàn toàn vào Ads',
      desc: 'Tắt quảng cáo là lập tức cạn nguồn khách. Không có kênh kéo traffic tự nhiên bền vững lâu dài.'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 uppercase tracking-tight mb-4">
            SALE Ô TÔ ĐANG MẤT KHÁCH VÌ ĐIỀU NÀY
          </h2>
          <div className="w-24 h-1.5 bg-[#ff6b00] mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Kinh doanh ô tô ngày càng khốc liệt. Nếu bạn vẫn đang tìm khách theo cách thủ công truyền thống, đối thủ đã dùng công cụ tự động chốt đơn từ lâu.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pains.map((pain, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100/80 hover:bg-rose-50/20 hover:border-rose-200/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 bg-white w-fit rounded-xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                {pain.title}
              </h3>
              <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
