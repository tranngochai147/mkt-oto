/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Search, Send, Play, Pause, RefreshCw, Layers, Layout, MessageSquare, Download, Users, Plus, Star, CheckCircle2, AlertCircle, FileText, Smartphone } from 'lucide-react';

interface LeadMock {
  id: string;
  name: string;
  phone: string;
  source: string;
  details: string;
  status: 'new' | 'contacted' | 'interested' | 'not-interested';
  carBrand: string;
}

export default function DemoSandbox() {
  const [activeTab, setActiveTab] = useState<'scan' | 'zalo' | 'facebook' | 'inbox'>('scan');

  // Scanning State
  const [scanSource, setScanSource] = useState('Group Facebook');
  const [scanKeyword, setScanKeyword] = useState('https://facebook.com/groups/toyota-cross-vietnam');
  const [isScanning, setIsScanning] = useState(false);
  const [scannedLeads, setScannedLeads] = useState<LeadMock[]>([]);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [scanProgress, setScanProgress] = useState(0);

  // Zalo Messaging State
  const [zaloTemplate, setZaloTemplate] = useState('Chào {Ten}, bên em đang ưu đãi giảm giá 80 triệu khi đặt cọc {Xe} trong hôm nay, tặng kèm 1 năm bảo hiểm thân vỏ. Anh có muốn đăng ký lái thử xe tận nơi không ạ?');
  const [zaloDelay, setZaloDelay] = useState(3);
  const [isSendingZalo, setIsSendingZalo] = useState(false);
  const [sendingLogs, setSendingLogs] = useState<string[]>([]);
  const [sentCount, setSentCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);

  // Facebook Poster State
  const [postContent, setPostContent] = useState('🔥 SIÊU ƯU ĐÃI THÁNG NÀY 🔥\nĐặt cọc hôm nay nhận ngay quà tặng vàng 9999 + Trọn bộ phụ kiện chính hãng trị giá 20 triệu.\n✓ Hỗ trợ trả góp lên đến 85%, thủ tục 5 phút.\n✓ Giao xe tận nhà, đủ màu, đủ phiên bản.\n👉 Inbox em ngay để nhận báo giá lăn bánh tốt nhất khu vực!');
  const [selectedGroups, setSelectedGroups] = useState<string[]>([
    'Hội Subaru Forester Viêt Nam',
    'Chợ Ô Tô Cũ Hà Nội',
    'Cộng Đồng Cư Dân Vinhomes Ocean Park'
  ]);
  const [isPosting, setIsPosting] = useState(false);
  const [postingStatus, setPostingStatus] = useState<{[key: string]: 'idle' | 'posting' | 'success'}>({});
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Unified Inbox State
  const [selectedInboxId, setSelectedInboxId] = useState('1');
  const [inboxes, setInboxes] = useState([
    {
      id: '1',
      senderName: 'Trần Minh Quang',
      senderPhone: '0912***456',
      page: 'Fanpage Toyota Mỹ Đình - Vệ Tinh 1',
      lastMsg: 'Em ơi, bản Cross V màu đỏ có sẵn xe giao ngay tuần này không?',
      time: '12:45',
      history: [
        { sender: 'client', text: 'Chào shop, mình quan tâm xe Toyota Cross' },
        { sender: 'bot', text: 'Dạ chào anh, Auto Bot MKT xin phép gửi quy trình hỗ trợ ạ. Anh đang quan tâm bản G, V hay HV?' },
        { sender: 'client', text: 'Em ơi, bản Cross V màu đỏ có sẵn xe giao ngay tuần này không?' }
      ],
      isReplied: false,
      car: 'Toyota Cross'
    },
    {
      id: '2',
      senderName: 'Nguyễn Thị Hương',
      senderPhone: '0983***912',
      page: 'Fanpage VinFast Miền Bắc',
      lastMsg: 'Đặt cọc VF8 thì bao lâu có xe hả bạn?',
      time: '12:30',
      history: [
        { sender: 'client', text: 'Đặt cọc VF8 thì bao lâu có xe hả bạn?' }
      ],
      isReplied: false,
      car: 'VinFast VF8'
    },
    {
      id: '3',
      senderName: 'Phạm Thành Long',
      senderPhone: '0901***888',
      page: 'Google Maps SEO - Mazda Hà Đông',
      lastMsg: 'Cho mình xin lịch hẹn đăng ký lái thử Mazda CX-5 chiều mai nhé.',
      time: '11:15',
      history: [
        { sender: 'client', text: 'Xe Mazda CX5 bản Luxury giá lăn bánh bao nhiêu?' },
        { sender: 'bot', text: 'DHA báo giá tự động đã gửi thông tin vào hộp thư Zalo. Anh có rảnh lái thử không?' },
        { sender: 'client', text: 'Cho mình xin lịch hẹn đăng ký lái thử Mazda CX-5 chiều mai nhé.' }
      ],
      isReplied: true,
      car: 'Mazda CX-5'
    }
  ]);
  const [replyText, setReplyText] = useState('');

  // Auto Scroll Log Windows
  const scanLogRef = useRef<HTMLDivElement>(null);
  const sendLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scanLogRef.current) {
      scanLogRef.current.scrollTop = scanLogRef.current.scrollHeight;
    }
  }, [scanLogs]);

  useEffect(() => {
    if (sendLogRef.current) {
      sendLogRef.current.scrollTop = sendLogRef.current.scrollHeight;
    }
  }, [sendingLogs]);

  // Pre-filled leads database for simulator
  const sourceNames = ['Nguyễn Quốc Anh', 'Lê Thanh Thảo', 'Hoàng Minh Đức', 'Phan Thị Diễm', 'Vũ Nam Khánh', 'Đỗ Hải Phong', 'Trần Kim Chi', 'Bùi Xuân Trường', 'Hồ Bảo Ngọc', 'Nguyễn Mạnh Hùng'];
  const phonePrefixes = ['0912', '0983', '0904', '0977', '0966', '0901', '0934', '0888'];
  const subCars = ['VinFast VF8', 'Toyota Corolla Cross', 'Subaru Forester', 'Hyundai SantaFe', 'Mazda CX-5', 'Ford Everest', 'Honda CR-V', 'KIA Seltos'];

  // Start Scraper Simulation
  const handleStartScan = () => {
    if (isScanning) {
      setIsScanning(false);
      return;
    }
    setIsScanning(true);
    setScanProgress(0);
    setScanLogs(['[HỆ THỐNG] Khởi tạo luồng quét data từ nguồn: ' + scanSource, '[HỆ THỐNG] Đang kết nối API bóc tách dữ liệu...']);
    
    let currentIdx = 0;
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = prev + 10;
        if (next >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanLogs(prevLogs => [...prevLogs, '[HỆ THỐNG] Quét hoàn tất! Tổng cộng phát hiện 8 khách hàng mục tiêu chất lượng cao.']);
          return 100;
        }
        return next;
      });

      // Add a simulated log
      const logTemplates = [
        `[KHAI THÁC] Truy cập luồng dữ liệu URL: ${scanKeyword}`,
        '[PHÂN TÍCH] Đang rà soát tệp bình luận & bài viết có từ khóa liên quan tới nhu cầu "mua xe", "lăn bánh"',
        '[PHÂN TÍCH] Đang lọc trùng, loại trừ nick rác, ảo không hoạt động',
        '[BÓC TÁCH CODES] Đang giải mã số điện thoại liên kết công khai qua bài chia sẻ...'
      ];
      
      const randomLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
      setScanLogs(prev => [...prev, randomLog]);

      // Add actual Lead
      const randName = sourceNames[currentIdx % sourceNames.length];
      const randPhone = phonePrefixes[Math.floor(Math.random() * phonePrefixes.length)] + '***' + Math.floor(100 + Math.random() * 900);
      const randCar = subCars[Math.floor(Math.random() * subCars.length)];
      
      const newLead: LeadMock = {
        id: String(Date.now() + currentIdx),
        name: randName,
        phone: randPhone,
        source: scanSource,
        details: `Quan tâm hỏi báo giá lốp & giá khuyến mãi ${randCar}`,
        status: 'new',
        carBrand: randCar
      };

      setScannedLeads(prev => [newLead, ...prev]);
      currentIdx++;

    }, 1200);
  };

  // Export Leads to CSV mock
  const handleDownloadCSV = () => {
    if (scannedLeads.length === 0) {
      alert('Chưa có nguồn danh sách khách hàng để xuất!');
      return;
    }
    const headers = 'Họ Tên,Số Điện Thoại,Nguồn Khai Thác,Yêu Cầu Chi Tiết,Dòng Xe\n';
    const rows = scannedLeads.map(l => `"${l.name}","${l.phone}","${l.source}","${l.details}","${l.carBrand}"`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'MKT_Scraped_Leads.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Start Zalo Auto messenger
  const handleZaloSend = () => {
    if (isSendingZalo) {
      setIsSendingZalo(false);
      return;
    }
    if (scannedLeads.length === 0) {
      // populate with mock defaults first
      const defaults: LeadMock[] = [
        { id: '1', name: 'Nguyễn Văn Hải', phone: '0912***456', source: 'Google Maps', details: 'Hỏi lái thử Subaru Forester', status: 'new', carBrand: 'Subaru Forester' },
        { id: '2', name: 'Trần Thị Thu Trang', phone: '0983***771', source: 'Group Facebook', details: 'Hỏi giá xe VinFast VF8', status: 'new', carBrand: 'VinFast VF8' },
        { id: '3', name: 'Hoàng Anh Dũng', phone: '0904***112', source: 'Fanpage Đối Thủ', details: 'Bình luận hỏi bản G lốp sơ cua', status: 'new', carBrand: 'Toyota Corolla Cross' },
        { id: '4', name: 'Phùng Minh Vương', phone: '0977***654', source: 'Group Facebook', details: 'Quan tâm giá Hyundai Creta', status: 'new', carBrand: 'Hyundai Creta' }
      ];
      setScannedLeads(defaults);
      setSendingLogs(['[HỆ THỐNG] Đã nhập danh sách 4 khách nòng cốt làm mẫu thử nghiệm.']);
    }

    setIsSendingZalo(true);
    setSentCount(0);
    setFailedCount(0);
    setSendingLogs(prev => [...prev, '[ZALO-API] Khởi chạy luồng gửi tin hàng loạt...']);

    let targetList = scannedLeads.length > 0 ? scannedLeads : [
      { id: '1', name: 'Nguyễn Văn Hải', phone: '0912***456', source: 'Google Maps', details: 'Hỏi lái thử Subaru Forester', status: 'new', carBrand: 'Subaru Forester' },
      { id: '2', name: 'Trần Thị Thu Trang', phone: '0983***771', source: 'Group Facebook', details: 'Hỏi giá xe VinFast VF8', status: 'new', carBrand: 'VinFast VF8' }
    ];
    
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx >= targetList.length) {
        clearInterval(interval);
        setIsSendingZalo(false);
        setSendingLogs(prev => [...prev, '[HỆ THỐNG] Chiến dịch hoàn thành! Gửi tin bám đuổi an toàn hoàn tất 100%.']);
        return;
      }

      const currentLead = targetList[currentIdx];
      
      // Personalize message copy
      const finalMsg = zaloTemplate
        .replace('{Ten}', currentLead.name)
        .replace('{Xe}', currentLead.carBrand);

      setSendingLogs(prev => [
        ...prev, 
        `[ZALO-OUTBOX] Gửi tới ${currentLead.name} (${currentLead.phone})`,
        `👉 Nội dung: "${finalMsg.substring(0, 45)}..."`,
        `[ZALO-STATUS] Trả kết quả: THÀNH CÔNG (Giao tận máy người dùng sau ${zaloDelay} Giây)`
      ]);

      setSentCount(prev => prev + 1);
      
      // Update status list
      setScannedLeads(prevLeads => 
        prevLeads.map(l => l.id === currentLead.id ? { ...l, status: 'interested' } : l)
      );

      currentIdx++;
    }, zaloDelay * 800);
  };

  // Start Facebook poster simulation
  const handleFacebookPost = () => {
    if (isPosting) return;
    setIsPosting(true);
    
    // Clear previous posting statuses
    const initialStatus: {[key: string]: 'idle' | 'posting' | 'success'} = {};
    selectedGroups.forEach(g => {
      initialStatus[g] = 'posting';
    });
    setPostingStatus(initialStatus);

    let progressGroup = [...selectedGroups];
    const postNext = () => {
      if (progressGroup.length === 0) {
        setIsPosting(false);
        return;
      }
      const activeGroup = progressGroup.shift()!;
      
      setTimeout(() => {
        setPostingStatus(prev => ({
          ...prev,
          [activeGroup]: 'success'
        }));
        postNext();
      }, 1500);
    };

    postNext();
  };

  const handleGroupToggle = (groupName: string) => {
    if (selectedGroups.includes(groupName)) {
      setSelectedGroups(selectedGroups.filter(g => g !== groupName));
    } else {
      setSelectedGroups([...selectedGroups, groupName]);
    }
  };

  // Inbox reply simulator
  const handleSendInboxReply = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!replyText.trim()) return;

    setInboxes(prev => 
      prev.map(item => {
        if (item.id === selectedInboxId) {
          return {
            ...item,
            history: [
              ...item.history,
              { sender: 'bot', text: replyText }
            ],
            isReplied: true,
            lastMsg: replyText
          };
        }
        return item;
      })
    );

    setReplyText('');

    // Simulate potential customer reply after 2 seconds
    const currentActive = inboxes.find(i => i.id === selectedInboxId);
    if (currentActive) {
      setTimeout(() => {
        setInboxes(prev => 
          prev.map(item => {
            if (item.id === selectedInboxId) {
              return {
                ...item,
                history: [
                  ...item.history,
                  { sender: 'client', text: 'Cảm ơn em đã tư vấn nha, lưu lại số điện thoại anh để có gì mai anh gọi nhé.' }
                ],
                lastMsg: 'Cảm ơn em đã tư vấn nha...'
              };
            }
            return item;
          })
        );
      }, 2000);
    }
  };

  const activeInbox = inboxes.find(i => i.id === selectedInboxId);

  return (
    <section className="py-20 lg:py-24 bg-slate-50 text-slate-800 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="bg-[#ff6b00]/10 text-[#ff6b00] py-1.5 px-3 rounded-full text-xs font-bold uppercase tracking-widest border border-[#ff6b00]/20">
            Hệ Thống Dành Riêng Cho Quý Khách Trải Nghiệm
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4.5xl text-slate-900 tracking-tight mt-4 uppercase">
            TRỰC TIẾP TRẢI NGHIỆM "CỖ MÁY" AUTOMATION MKT
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xs sm:text-sm mt-3.5">
            Hãy thoải mái tương tác với bảng điều khiển bên dưới để hiểu cách quy trình tìm và nhắn tin bám đổi khách hoạt động cực mượt mà.
          </p>
        </div>

        {/* Dashboard Frame grid */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid lg:grid-cols-12 min-h-[580px]">
          
          {/* Side Drawer menu of Sandbox */}
          <div className="lg:col-span-3 border-r border-slate-200 bg-slate-50 p-5 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Trình Mô Phỏng Ổn Định</span>
              </div>

              {/* Action tabs list */}
              <div className="space-y-2">
                
                <button
                  onClick={() => setActiveTab('scan')}
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left font-bold text-sm transition-all cursor-pointer ${
                    activeTab === 'scan'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Search className="w-5 h-5" />
                  <span>1. Quét Data Đa Kênh</span>
                </button>

                <button
                  onClick={() => setActiveTab('zalo')}
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left font-bold text-sm transition-all cursor-pointer ${
                    activeTab === 'zalo'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  <span>2. Gửi Tin Nhắn Zalo</span>
                </button>

                <button
                  onClick={() => setActiveTab('facebook')}
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left font-bold text-sm transition-all cursor-pointer ${
                    activeTab === 'facebook'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Layout className="w-5 h-5" />
                  <span>3. Đăng Bài Group FB</span>
                </button>

                <button
                  onClick={() => setActiveTab('inbox')}
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left font-bold text-sm transition-all cursor-pointer ${
                    activeTab === 'inbox'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>4. Quản Lý Inbox Vệ Tinh</span>
                </button>

              </div>
            </div>

            {/* Simulated server status */}
            <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-500 font-medium">
              <div className="flex justify-between">
                <span>Trạng thái server Zalo:</span>
                <span className="text-green-600 font-bold">HOẠT ĐỘNG</span>
              </div>
              <div className="flex justify-between">
                <span>Giả lập Threads Zalo:</span>
                <span className="text-slate-700 font-bold">128 Threads</span>
              </div>
            </div>

          </div>

          {/* Core sandbox viewport */}
          <div className="lg:col-span-9 p-8 bg-white flex flex-col justify-between">
            
            {/* TAB 1: DATA SCRAPE SIMULATOR */}
            {activeTab === 'scan' && (
              <div className="space-y-6 animate-fade-in">
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <Search className="w-5 h-5 text-blue-500" />
                      QUÉT DATA SỐ ĐIỆN THOẠI KHÁCH HÀNG MỤC TIÊU
                    </h3>
                    <p className="text-xs text-slate-500">Tự động bóc tách số điện thoại từ link Group, Page đối thủ hoặc Google Maps Địa Điểm.</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleDownloadCSV}
                      disabled={scannedLeads.length === 0}
                      className="px-3.5 py-2.5 rounded-xl border border-slate-250 hover:border-slate-400 hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Download className="w-4 h-4" /> Xuất File CSV
                    </button>
                    
                    {scannedLeads.length > 0 && (
                      <button
                        onClick={() => {
                          setScannedLeads([]);
                          setScanLogs([]);
                        }}
                        className="p-2.5 rounded-xl border border-slate-250 text-slate-500 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 cursor-pointer"
                        title="Xóa danh sách"
                      >
                        Xóa
                      </button>
                    )}
                  </div>
                </div>

                {/* Scraper controls */}
                <div className="grid sm:grid-cols-12 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  
                  <div className="sm:col-span-3">
                    <label className="block text-slate-500 font-bold text-[10px] sm:text-xs mb-1 uppercase tracking-wider">Chọn Nguồn Quét</label>
                    <select
                      value={scanSource}
                      onChange={(e) => setScanSource(e.target.value)}
                      className="w-full bg-white border border-slate-250 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="Group Facebook">Group Facebook</option>
                      <option value="Fanpage Đối Thủ">Fanpage Đối Thủ</option>
                      <option value="Google Maps">Google Maps (Địa Điểm)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-6">
                    <label className="block text-slate-500 font-bold text-[10px] sm:text-xs mb-1 uppercase tracking-wider">Đường Dẫn URL / Tên Địa Điểm Trọng Điểm</label>
                    <input
                      type="text"
                      value={scanKeyword}
                      onChange={(e) => setScanKeyword(e.target.value)}
                      placeholder="Ví dụ: Hội yêu thích dòng xe Ford Territory..."
                      className="w-full bg-white border border-slate-250 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-3 flex items-end">
                    <button
                      onClick={handleStartScan}
                      className={`w-full py-2.5 font-sans rounded-xl text-xs font-black tracking-wide flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        isScanning 
                          ? 'bg-rose-600 text-white hover:bg-rose-700 shadow-md' 
                          : 'bg-[#ff6b00] text-white hover:bg-orange-600 shadow-lg shadow-orange-700/20'
                      }`}
                    >
                      {isScanning ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          DỪNG QUÉT (PAUSE)
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-white" />
                          QUÉT NGAY (START)
                        </>
                      )}
                    </button>
                  </div>

                </div>

                {/* Log display and lead tables in split grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Console logs */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                        <Smartphone className="w-4 h-4 text-orange-400" /> Console Logs Hoạt Động
                      </span>
                      {isScanning && (
                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">
                          Đang phân tích {scanProgress}%
                        </span>
                      )}
                    </div>

                    <div 
                      ref={scanLogRef}
                      className="bg-slate-955 rounded-2xl p-4 h-[250px] overflow-y-auto font-mono text-[11px] text-amber-500 space-y-1.5 border border-slate-900 shadow-inner bg-slate-950"
                    >
                      {scanLogs.length === 0 ? (
                        <p className="text-slate-500 italic">Nhấn nút "QUÉT NGAY" để chứng kiến quy trình phân tích và bóc tách dữ liệu số điện thoại...</p>
                      ) : (
                        scanLogs.map((log, lIdx) => (
                          <div key={lIdx} className="leading-relaxed">
                            <span className="text-blue-400">&gt;</span> {log}
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Scraped Leads Table results */}
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Users className="w-4.5 h-4.5 text-blue-400" /> 
                      Khách Hàng Quét Được ({scannedLeads.length})
                    </span>

                    <div className="bg-slate-50 rounded-2xl h-[250px] overflow-y-auto border border-slate-200 scrollbar-thin shadow-inner">
                      {scannedLeads.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center p-6 text-slate-500 text-center space-y-1">
                          <AlertCircle className="w-8 h-8 opacity-40 text-[#ff6b00]" />
                          <p className="text-xs font-semibold">Chưa có dữ liệu khách hàng.</p>
                          <p className="text-[10px] text-slate-600">Khi phần mềm chạy quét, thông tin nòng cốt của Sale sẽ hiển thị thời gian thực.</p>
                        </div>
                      ) : (
                        <div className="divide-y divide-slate-200">
                          {scannedLeads.map((lead) => (
                            <div key={lead.id} className="p-3 hover:bg-slate-100/80 flex justify-between items-center text-xs animate-fade-in">
                              <div>
                                <p className="font-extrabold text-slate-800">{lead.name}</p>
                                <p className="text-[10px] text-slate-500 mt-0.5">{lead.phone} • {lead.carBrand}</p>
                              </div>
                              <span className="px-2 py-0.5 rounded-md bg-green-50 text-green-700 font-bold text-[9px] uppercase tracking-wide border border-green-200">
                                {lead.source}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* TAB 2: ZALO BATCH CAMPAIGNS */}
            {activeTab === 'zalo' && (
              <div className="space-y-6 animate-fade-in">
                
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Send className="w-5 h-5 text-blue-500" />
                    ZALO AUTO MESSENGER — CHĂM SÓC KHÁCH HÀNG BÁM ĐUỔI HÀNG LOẠT
                  </h3>
                  <p className="text-xs text-slate-500">Tự động hóa nhắn kịch bản đến hàng ngàn khách hàng đã quét theo thời gian giãn cách dãn an toàn.</p>
                </div>

                {/* Zalo parameters */}
                <div className="grid md:grid-cols-12 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  
                  {/* Template text */}
                  <div className="md:col-span-8 flex flex-col">
                    <label className="block text-slate-600 font-bold text-xs mb-1.5 uppercase tracking-wider">Kịch bản nhắn tin bám đuổi (Hỗ trợ biến số {`{Ten}`} và {`{Xe}`})</label>
                    <textarea
                      value={zaloTemplate}
                      onChange={(e) => setZaloTemplate(e.target.value)}
                      rows={4}
                      className="w-full bg-white border border-slate-250 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 leading-relaxed font-sans shadow-xs"
                    />
                  </div>

                  {/* Delay controls & status visual */}
                  <div className="md:col-span-4 flex flex-col justify-between space-y-4">
                    
                    <div>
                      <div className="flex justify-between text-xs text-slate-600 font-bold mb-1">
                        <span>Thời gian giãn cách:</span>
                        <span className="text-[#ff6b00]">{zaloDelay} Giây / Tin</span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="10"
                        value={zaloDelay}
                        onChange={(e) => setZaloDelay(Number(e.target.value))}
                        className="w-full accent-[#ff6b00]"
                      />
                      <span className="text-[10px] text-slate-500 mt-1 block">Khuyến nghị giãn cách từ 3-5 giây để chống spam hiệu quả.</span>
                    </div>

                    <button
                      onClick={handleZaloSend}
                      className={`w-full py-3 rounded-xl font-sans text-xs font-black tracking-wide flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        isSendingZalo
                          ? 'bg-rose-600 text-white hover:bg-rose-700'
                          : 'bg-[#ff6b00] text-white hover:bg-orange-600 shadow-lg shadow-orange-700/20'
                      }`}
                    >
                      {isSendingZalo ? (
                        <>
                          <Pause className="w-4 h-4 fill-white animate-pulse" /> DỪNG CHIẾN DỊCH
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-white" /> BẮT ĐẦU GỬI ZALO (AUTORUN)
                        </>
                      )}
                    </button>

                  </div>

                </div>

                {/* Send progress status & Log */}
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Zalo campaign stats */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4 block">Trạng thái chiến dịch Zalo</span>
                    
                    <div className="grid grid-cols-2 gap-4 text-center my-3">
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <p className="text-2xl font-black text-green-600">{sentCount}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Gửi Thành Công</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <p className="text-2xl font-black text-rose-600">{failedCount}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Lượt Lỗi</p>
                      </div>
                    </div>

                    <div className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">
                      <p>• <strong>Đối tượng áp dụng:</strong> Khách hàng tìm từ luồng Quét Data ở Bước 1.</p>
                      <p className="text-slate-500 text-[10px] mt-1">Hệ thống bám sát cơ chế gửi tin không công khai (Direct Inbox) để chống lộ danh tính nick đại lý.</p>
                    </div>
                  </div>

                  {/* Zalo Campaign Real-time Logs */}
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Smartphone className="w-4 h-4 text-orange-400" /> Luồng Nhật Ký Tin Nhắn Zalo
                    </span>
                    <div 
                      ref={sendLogRef}
                      className="bg-slate-950 rounded-2xl p-4 h-[180px] overflow-y-auto font-mono text-[10.5px] text-cyan-400 space-y-1.5 border border-slate-900 shadow-inner"
                    >
                      {sendingLogs.length === 0 ? (
                        <p className="text-slate-500 italic">Nhấp "BẮT ĐẦU GỬI ZALO" để khởi động trình gửi bám đuổi tự động theo kịch bản...</p>
                      ) : (
                        sendingLogs.map((log, sIdx) => (
                          <div key={sIdx} className="leading-relaxed">
                            <span className="text-[#ff6b00]">&gt;</span> {log}
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* TAB 3: FACEBOOK AUTO GROUP PUBLISHER */}
            {activeTab === 'facebook' && (
              <div className="space-y-6 animate-fade-in">
                
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-blue-500" />
                      AUTO GROUP PUBLISHER — ĐĂNG BÀI TOÀN DIỆN LÊN HỘI NHÓM
                    </h3>
                    <p className="text-xs text-slate-500">Tự động đăng bài giới thiệu dòng xe kèm hình giao ô tô, review chuẩn chỉ lên các đầu Group mục tiêu.</p>
                  </div>
                </div>

                {/* Publisher split panel layout */}
                <div className="grid md:grid-cols-12 gap-6">
                  
                  {/* Left Side: Post Compose block */}
                  <div className="md:col-span-7 space-y-4">
                    
                    <div>
                      <label className="block text-slate-600 font-bold text-xs mb-1.5 uppercase tracking-wider">Nội dung bài viết quảng cáo</label>
                      <textarea
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        rows={6}
                        className="w-full bg-white border border-slate-250 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 leading-relaxed font-sans shadow-xs"
                      />
                    </div>

                    {/* Image Attachment mock */}
                    <div>
                      <label className="block text-slate-600 font-bold text-xs mb-1.5 uppercase tracking-wider">Đính kèm ảnh review xe</label>
                      <div className="border-2 border-dashed border-slate-300 hover:border-[#ff6b00] rounded-xl p-4 bg-slate-50 text-center cursor-pointer transition-colors relative">
                        {uploadedImage ? (
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-green-600 font-bold">✓ Đã đính kèm ảnh chốt xe.jpg</span>
                            <button 
                              onClick={() => setUploadedImage(null)}
                              className="text-xs text-rose-500 hover:text-rose-600 font-bold"
                            >
                              Gỡ bỏ
                            </button>
                          </div>
                        ) : (
                          <div onClick={() => setUploadedImage('attached')} className="text-slate-500 text-xs">
                            <p className="font-bold">Nhấp để liên kết ảnh xe từ tủ thư viện mẫu</p>
                            <p className="text-[10px] text-slate-500 mt-1">Đăng kèm ảnh thực tế tăng gấp 4 lần tỉ lệ click bẩm sinh</p>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Right Side: target groups & posting queue */}
                  <div className="md:col-span-5 space-y-4">
                    
                    <div>
                      <span className="block text-slate-600 font-bold text-xs mb-2 uppercase tracking-wider">Danh Sách Nhóm Mục Tiêu</span>
                      <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200 max-h-[180px] overflow-y-auto shadow-inner">
                        {['Hội Subaru Forester Viêt Nam', 'Chợ Ô Tô Cũ Hà Nội', 'Cộng Đồng Cư Dân Vinhomes Ocean Park', 'Hội VF8 & VF9 Club Việt Nam', 'Hội Tài Xế SUBARU Toàn Quốc'].map((gr) => (
                          <label key={gr} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedGroups.includes(gr)}
                              onChange={() => handleGroupToggle(gr)}
                              className="rounded bg-white border-slate-300 text-[#ff6b00] focus:ring-0"
                            />
                            <span>{gr}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleFacebookPost}
                      disabled={selectedGroups.length === 0}
                      className="w-full py-4.5 rounded-2xl bg-[#ff6b00] hover:bg-orange-600 font-sans font-black text-xs text-white tracking-widest uppercase shadow-lg shadow-orange-950/20 active:scale-98 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isPosting ? 'Đang Khai Thác Đăng Tải...' : 'BẮT ĐẦU CHIẾN DỊCH ĐĂNG BÀI'}
                    </button>

                  </div>

                </div>

                {/* Live Output queues of groups publisher */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Trạng Thế Đăng Bài Thực Tế</span>
                  
                  <div className="grid sm:grid-cols-3 gap-4">
                    {selectedGroups.map((grpName) => {
                      const status = postingStatus[grpName] || 'idle';
                      return (
                        <div key={grpName} className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between text-xs font-semibold">
                          <span className="truncate text-slate-700 mr-2">{grpName}</span>
                          
                          {status === 'idle' && <span className="text-slate-500 text-[10px] uppercase">Chờ</span>}
                          {status === 'posting' && <span className="text-blue-500 text-[10px] uppercase animate-pulse">Đăng...</span>}
                          {status === 'success' && (
                            <span className="text-green-600 text-[10px] flex items-center gap-0.5 uppercase">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Thành Công
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 4: UNIFIED PAGE CHAT PORTAL */}
            {activeTab === 'inbox' && (
              <div className="space-y-6 animate-fade-in text-slate-700">
                
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-500" />
                    BẢNG ĐIỀU KHIỂN ĐA FANPAGE VỆ TÌNH TẬP TRUNG
                  </h3>
                  <p className="text-xs text-slate-500">Xem và túc trực inbox của khách hàng đổ về từ 10+ page vệ tinh bán lẻ Subaru, Mazda trên 1 bảng chat duy nhất.</p>
                </div>

                {/* Inbox columns layout split */}
                <div className="grid md:grid-cols-12 gap-5 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-md">
                  
                  {/* Chats list column (Left) */}
                  <div className="md:col-span-4 bg-slate-50 border-r border-slate-200 divide-y divide-slate-100 max-h-[350px] overflow-y-auto">
                    {inboxes.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedInboxId(item.id)}
                        className={`p-4 cursor-pointer text-left transition-all ${
                          selectedInboxId === item.id 
                            ? 'bg-blue-600/10 border-l-4 border-blue-500' 
                            : 'hover:bg-slate-100/50'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-extrabold text-xs text-slate-800 truncate">{item.senderName}</h4>
                          <span className="text-[10px] text-slate-500 font-bold">{item.time}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 truncate leading-relaxed">{item.lastMsg}</p>
                        
                        <div className="flex justify-between items-center mt-2 text-[8px] font-bold tracking-brand">
                          <span className="text-blue-500 truncate max-w-[120px]">{item.page}</span>
                          {!item.isReplied && (
                            <span className="bg-orange-100 text-orange-700 border border-orange-200 px-1 py-0.2 rounded font-black">CHỜ TRẢ LỜI</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Active chat window (Right) */}
                  <div className="md:col-span-8 p-4 flex flex-col justify-between h-[350px] bg-white">
                    
                    {activeInbox ? (
                      <>
                        {/* Chat window Header Info block */}
                        <div className="pb-3 border-b border-slate-200 flex justify-between items-center text-xs">
                          <div>
                            <span className="font-black text-slate-800">{activeInbox.senderName}</span>
                            <span className="text-slate-500 text-[10px] ml-2 font-medium">({activeInbox.senderPhone})</span>
                            <p className="text-[10px] text-slate-500 font-bold mt-0.5">Khách đang hỏi mẫu: {activeInbox.car}</p>
                          </div>
                          <span className="text-[10px] text-blue-500 font-bold uppercase">{activeInbox.page}</span>
                        </div>

                        {/* Conversational content threads */}
                        <div className="flex-grow overflow-y-auto py-4 space-y-3 font-sans text-xs flex flex-col scrollbar-thin">
                          {activeInbox.history.map((chat, cIdx) => (
                            <div 
                              key={cIdx}
                              className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                                chat.sender === 'client'
                                  ? 'bg-slate-100 text-slate-800 border border-slate-200 self-start'
                                  : 'bg-blue-600 text-white self-end'
                              }`}
                            >
                              <p>{chat.text}</p>
                            </div>
                          ))}
                        </div>

                        {/* Composer tools & inputs */}
                        <div className="pt-3 border-t border-slate-200 flex gap-2">
                          <input
                            type="text"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            onKeyDown={(ek) => ek.key === 'Enter' && handleSendInboxReply()}
                            placeholder="Nhập nội dung tin nhắn hoặc chọn Quick Reply..."
                            className="flex-grow bg-slate-50 border border-slate-250 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                          <button
                            onClick={() => handleSendInboxReply()}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-xs text-white font-bold rounded-xl shadow transition-colors cursor-pointer"
                          >
                            Gửi tin
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="h-full flex items-center justify-center p-6 text-slate-500 italic text-xs">
                        Vui lòng chọn một cuộc trò chuyện từ danh mục hội vệ tinh bên trái.
                      </div>
                    )}

                  </div>

                </div>

                {/* Preset Fast Quick Replies templates blocks */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap gap-2 text-xs">
                  <span className="font-bold text-slate-500 py-1 mr-1">Tài liệu chốt Sale nhanh:</span>
                  {[
                    'Gửi thông số kỹ thuật xe',
                    'Báo giá mức thuế trước bạ xe',
                    'Đăng ký xin lái thử xe',
                    'Thủ tục vay trả góp 5 năm'
                  ].map((tpl) => (
                    <button
                      key={tpl}
                      onClick={() => setReplyText(`Dạ ${activeInbox?.senderName || 'anh/chị'}, MKT xin phép gửi file ${tpl} chi tiết nhất cho dòng ${activeInbox?.car || 'Subaru'} dưới đây ạ...`)}
                      className="px-3 py-1 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg text-[11px] text-slate-600 font-semibold cursor-pointer transition-colors shadow-xs"
                    >
                      {tpl}
                    </button>
                  ))}
                </div>

              </div>
            )}

            {/* General Disclaimer note */}
            <div className="mt-8 pt-4 border-t border-slate-200 text-slate-500 text-[10px] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <span>Lưu ý: Đây chính là bảng mô phỏng trực tuyến của phần mềm MKT Software. Bản quyền thuộc về MKT Software. Hãy đăng ký trải nghiệm thực tế trên máy tính của bạn thông qua kỹ thuật viên hướng dẫn!</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
