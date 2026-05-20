/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Phần mềm MKT Software có chạy ẩn trên máy tính không?',
      a: 'Hoàn toàn có! Phần mềm được tối ưu hóa cực kỳ gọn nhẹ, có thể thu nhỏ xuống khay hệ thống (Tray Icon) để chạy ngầm 24/7 mà không tốn dung lượng RAM hay làm giật vấp màn hình làm việc của bạn.'
    },
    {
      q: 'Mức phí 6 triệu và 9 triệu/năm có phát sinh thêm chi phí ẩn nào không?',
      a: 'Không phát sinh chi phí ẩn! Bảng giá trọn gói đã bao gồm toàn bộ phí duy trì phần mềm, quyền cập nhật nâng cấp tính năng mới và quá trình kỹ thuật viên hỗ trợ chuẩn 1-1 qua Ultraview trọn đời.'
    },
    {
      q: 'Tôi bán nhiều dòng xe khác nhau (ví dụ vừa Toyota, vừa Mazda cũ) có dùng chung được không?',
      a: 'Được chứ! Bạn hoàn toàn có thể phân chia các chiến dịch gửi tin nhắn hay đăng nhóm khác nhau, lọc danh mục tệp khách hàng theo dòng xe tương ứng để truyền tải nội dung chốt sale chuẩn xác nhất.'
    },
    {
      q: 'Sử dụng công cụ này có sợ bị khóa tài khoản Facebook hay Zalo không?',
      a: 'MKT Software tích hợp sẵn thanh trượt tùy chỉnh thời gian giãn cách ngẫu nhiên (Delay) và cơ chế tự động đổi IP/Proxy thông minh, mô phỏng hoàn toàn giống thao tác người dùng thật nên cực kỳ an toàn, chống quét tự động hiệu quả.'
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-24 bg-[#eef5ff]/95 border-b border-sky-100/80">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header FAQs */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <HelpCircle className="w-6.5 h-6.5 text-blue-600" />
            CÂU HỎI THƯỜNG GẶP (FAQ)
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Faq list container */}
        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-sky-100 shadow-sm rounded-2xl p-5 sm:p-6 transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-left font-sans font-extrabold text-sm sm:text-base text-slate-900 focus:outline-none cursor-pointer"
                >
                  <span>{f.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-slate-200/50 text-slate-600 text-xs sm:text-sm leading-relaxed animate-fade-in font-normal">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
