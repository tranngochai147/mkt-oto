/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-sans font-black text-xl tracking-tight flex items-center gap-1">
              <span className="bg-gradient-to-r from-[#00abec] to-[#0172f3] bg-clip-text text-transparent">MKT</span>
              <span className="text-white font-bold">Software</span>
            </span>
          </div>
          <p className="text-sm font-medium text-slate-400 leading-relaxed">
            MKT Software là nền tảng tối ưu hóa kịch bản, tự động bám đuổi và tìm kiếm khách hàng ngành ô tô hàng đầu Việt Nam.
          </p>
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
            © 2026 MKT Software Corp.
          </div>
        </div>

        {/* Column 2: About Us */}
        <div>
          <h4 className="font-sans font-black text-white text-sm uppercase tracking-wider mb-5">
            Về chúng tôi
          </h4>
          <ul className="space-y-3 font-medium text-sm text-slate-400">
            <li>
              <a href="#features" className="hover:text-white transition-colors">Tính năng nổi bật</a>
            </li>
            <li>
              <a href="#solutions" className="hover:text-white transition-colors">Giải pháp Sale Ô tô</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition-colors">Cộng đồng khách hàng</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="font-sans font-black text-white text-sm uppercase tracking-wider mb-5">
            Chính sách pháp lý
          </h4>
          <ul className="space-y-3 font-medium text-sm text-slate-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật thông tin</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Chính sách hoàn tiền</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-sans font-black text-white text-sm uppercase tracking-wider mb-5">
            Thông tin liên hệ
          </h4>
          <ul className="space-y-3 font-medium text-sm text-slate-400">
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#ff6b00]" />
              <span>0919262681</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#ff6b00]" />
              <span>tranngochai147@gmail.com</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-[#ff6b00]" />
              <span id="footer-contact-address">35 Lê Văn Thiêm, Thanh Xuân, Hà Nội</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-[#ff6b00]" />
              <span className="text-slate-400 font-bold">www.mktsoftware.vn</span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
