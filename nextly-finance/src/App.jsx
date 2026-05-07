import React from 'react';
import { Wallet, Shield, Rocket, ArrowRight, LayoutGrid } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 pb-20" dir="rtl">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <LayoutGrid size={22} />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">Nextly</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">{"الخدمات"}</a>
            <a href="#" className="hover:text-blue-600 transition-colors">{"عن نكستلي"}</a>
            <a href="#" className="hover:text-blue-600 transition-colors">{"شركاء النجاح"}</a>
          </div>

          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-sm">
            {"ابدأ الآن"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-16 md:pt-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-8">
            <Rocket size={14} className="text-blue-600" />
            <span>{"مستقبل التكنولوجيا المالية يبدأ هنا"}</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.25] tracking-tight">
            {"نكستلي: شريكك الذكي"} <br /> 
            <span className="text-blue-600 relative inline-block mt-2">
              {"لإدارة أعمالك"}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 rounded-full"></span>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            {"نحن لسنا مجرد نظام فواتير، نكستلي هي الشركة الأم التي تمنحك الأدوات المالية والتقنية لنمو أعمالك من الصفر إلى العالمية."}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
              {"ابدأ مشروعك الأول"}
              <ArrowRight className="mr-2 group-hover:-translate-x-1 transition-transform rotate-180" size={18} />
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-base hover:border-slate-300 transition-all flex items-center justify-center">
              {"تواصل مع المستشار المالي"}
            </button>
          </div>
        </div>

        {/* Features Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 md:mt-32">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group duration-300">
            <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Wallet size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{"إدارة التدفق النقدي"}</h3>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              {"تحكم كامل في فواتيرك ومدفوعاتك مع تقارير ذكية مدعومة بالذكاء الاصطناعي."}
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group duration-300">
            <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{"أمان مؤسسي"}</h3>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              {"بيانات شركتك وشركائك في أمان تام مع تشفير متطور وحماية على مدار الساعة."}
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group duration-300">
            <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <LayoutGrid size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{"نظام الشركات الأم"}</h3>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              {"اربط جميع مشاريعك وشركاتك الناشئة تحت مظلة نكستلي الموحدة بسهولة."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;