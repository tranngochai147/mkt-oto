/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Database, ShieldAlert, Sparkles, Navigation, CheckSquare, PiggyBank, Timer, Globe } from 'lucide-react';

export default function Benefits() {
  const benefitGrid = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: 'Sở hữu Data riêng',
      desc: 'Tự gầy dựng nguồn danh sách số điện thoại khách hàng tiềm năng, độc quyền không phụ thuộc showroom.'
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-blue-600" />,
      title: 'Xây dựng niềm tin',
      desc: 'Hiện diện liên tục, tạo dựng hình ảnh chuyên gia uy tín, tận tâm, có tâm trong mắt mọi khách hàng.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: 'Nguồn Lead tự nhiên',
      desc: 'Khách hàng chủ động gọi hỏi giá xe, tư vấn ưu đãi mỗi ngày hoàn toàn miễn phí không đồng tốn kém.'
    },
    {
      icon: <Navigation className="w-8 h-8 text-blue-600" />,
      title: 'Tăng Test Drive',
      desc: 'Tự động gửi lời mời lái thử, đặt lịch hẹn lái trước tại nhà khách hàng vô cùng chuyên nghiệp.'
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-blue-600" />,
      title: 'Tỉ lệ chốt vượt bậc',
      desc: 'Hệ thống tự động chăm sóc và đưa ra khuyến mãi đúng thời điểm vàng khi khách mong muốn mua nhất.'
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-blue-600" />,
      title: 'Tiết kiệm chi phí Ads',
      desc: 'Giảm đến 80% ngân sách quảng cáo Facebook hay Google mà vẫn duy trì lượng khách hàng ổn định.'
    },
    {
      icon: <Timer className="w-8 h-8 text-blue-600" />,
      title: 'Tiết kiệm 70% thời gian',
      desc: 'Để phần mềm lo các công việc tay chân lặp lại vô vị để giành thời gian tư vấn đỉnh cao, chốt deal.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Luôn luôn phủ sóng',
      desc: 'Tên tuổi thương hiệu cá nhân của bạn hiện diện rộng rãi trên khắp các cộng đồng ô tô Việt Nam.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Title and line */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight uppercase mb-4">
            TẠI SAO SALE Ô TÔ PHẢI DÙNG?
          </h2>
          <div className="w-24 h-1.5 bg-[#ff6b00] mx-auto rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Hội tụ đầy đủ những tính năng ưu bạt giúp tiết kiệm thời gian, tối ưu hóa lợi nhuận và gia tăng năng lực cạnh tranh cho mọi tư vấn viên.
          </p>
        </div>

        {/* 8 Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitGrid.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-5 bg-blue-50 w-fit p-3 rounded-xl">
                {benefit.icon}
              </div>
              <h3 className="font-sans font-extrabold text-base sm:text-lg text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
