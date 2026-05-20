/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import PersonalBranding from './components/PersonalBranding';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import DemoSandbox from './components/DemoSandbox';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import { ArrowRight, MessageSquare, Play } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'sandbox'>('landing');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [initialPkg, setInitialPkg] = useState<'combo' | 'facebook' | 'zalo'>('combo');

  const handleOpenRegister = (pkgType?: 'combo' | 'facebook' | 'zalo') => {
    if (pkgType) {
      setInitialPkg(pkgType);
    }
    setIsRegisterOpen(true);
  };

  const handleGoToSandbox = () => {
    setCurrentView('sandbox');
    // Scroll view smoothly back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToLanding = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] flex flex-col justify-between antialiased selection:bg-orange-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar 
        currentView={currentView}
        onNavigate={(v) => {
          setCurrentView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenRegister={() => handleOpenRegister('combo')}
      />

      {cookiesBarNotification()}

      {/* Main Container */}
      <main className="flex-grow pt-16">
        {currentView === 'landing' ? (
          <div className="animate-fade-in text-slate-900">
            
            {/* 1. Hero banner */}
            <Hero 
              onNavigateToSandbox={handleGoToSandbox} 
              onOpenRegister={handleOpenRegister} 
            />

            {/* 2. Before / Pain points block */}
            <PainPoints />

            {/* 3. Solutions mapping */}
            <Solutions onNavigateToSandbox={handleGoToSandbox} />

            {/* 4. Branding builder trust */}
            <PersonalBranding />

            {/* 5. Benefits check list grid */}
            <Benefits />

            {/* 6. Live Interactive Sandbox embedded right on the landing page! */}
            <div id="demo-interactive-scroll">
              <DemoSandbox />
            </div>

            {/* 7. Client references */}
            <Testimonials />

            {/* 8. Pricing slider packages */}
            <Pricing onOpenRegister={handleOpenRegister} />

            {/* 9. FAQs accordion */}
            <FAQ />

            {/* 10. Action Final CTA */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-[#111827] text-white relative overflow-hidden text-center">
              
              {/* Abs mesh gradient overlays */}
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute -left-20 -top-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

              <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5.5xl mb-6 tracking-tight uppercase leading-[1.125]">
                  ĐỪNG ĐỂ KHÁCH HÀNG RƠI VÀO TAY ĐỐI THỦ
                </h2>
                
                <p className="text-slate-400 font-medium text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Hàng ngàn Sale xe thông minh, nhạy bén đang bứt phá doanh số vượt bậc định kỳ mỗi tháng nhờ automation bằng công cụ MKT. Còn bạn thì sao?
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
                  <button
                    onClick={() => handleOpenRegister('combo')}
                    className="bg-[#ff6b00] hover:bg-orange-600 text-white font-black py-4.5 px-10 rounded-2xl text-base sm:text-lg shadow-xl shadow-orange-950/40 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    DÙNG THỬ MIỄN PHÍ NGAY <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleOpenRegister('combo')}
                    className="bg-white/10 hover:bg-white/25 border border-white/20 text-white font-bold py-4.5 px-10 rounded-2xl text-base sm:text-lg transition-all hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 text-orange-400" /> LIÊN HỆ TƯ VẤN 1:1
                  </button>
                </div>

                <p className="mt-8 text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Hỗ trợ 24/7 • Cam kết hiệu quả • Bảo mật dữ liệu 100%
                </p>
              </div>

            </section>

          </div>
        ) : (
          /* Sandbox mode only */
          <div className="animate-fade-in bg-slate-900 min-h-screen">
            
            {/* Secondary navigation bar to return to home page */}
            <div className="bg-slate-950 border-b border-slate-800 text-white py-4 px-6">
              <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-[#ff6b00] text-xs font-black uppercase px-2 py-0.5 rounded tracking-widest text-[9px]">SOLUTIONS</span>
                  <span className="font-sans font-extrabold text-sm sm:text-base">MKT SOFTWARE ADMIN WORKSPACE</span>
                </div>
                <button
                  onClick={handleGoToLanding}
                  className="bg-slate-800 hover:bg-slate-700 text-xs text-white font-bold px-4 py-2 rounded-xl border border-slate-700 hover:border-slate-500 transition-all cursor-pointer"
                >
                  ← Quay về Trang Chủ Landing Page
                </button>
              </div>
            </div>

            {/* Simulated Desktop Interactive Panel */}
            <DemoSandbox />

          </div>
        )}
      </main>

      {/* Footer copyright and info columns */}
      <Footer />

      {/* Register / Activation Modal */}
      <RegisterModal 
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialPackageType={initialPkg}
        onNavigateToSandbox={handleGoToSandbox}
      />

    </div>
  );
}

// Minimalistic notification bar
function cookiesBarNotification() {
  return (
    <div className="bg-blue-600 text-white text-center py-2 px-4 font-sans font-bold text-xs sm:text-sm tracking-wide z-40 relative flex justify-center items-center gap-1.5 shadow">
      <span>🎉 KHUYẾN MÃI TUẦN NÀY: Giảm ngay 20% khi mua gói 2 năm &amp; 30% cho gói Combo 3 năm! Thay đổi doanh thu Sale xe của bạn hôm nay.</span>
    </div>
  );
}
