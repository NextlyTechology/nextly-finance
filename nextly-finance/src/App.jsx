import React, { useState, useEffect } from 'react';
import { Wallet, Shield, Rocket, ArrowRight, LayoutGrid, Loader2, Building2, CheckCircle2, Mail, Lock } from 'lucide-react';
import { supabase } from './lib/supabaseClient';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [step, setStep] = useState('landing'); // landing, setup, success

  // التأكد من حالة المستخدم عند تحميل الصفحة
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        setStep('setup'); // لو مسجل دخول دخله على خطوة الشركة علطول
      }
    });
  }, []);

  // دالة تسجيل الدخول الحقيقية
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("من فضلك أدخل البريد وكلمة المرور");

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert("حدث خطأ: " + error.message);
    } else {
      setUser(data.user);
      setStep('setup'); 
    }
    setLoading(false);
  };

  // دالة إضافة الشركة للجدول
  const handleCreateCompany = async (e) => {
    e.preventDefault();
    if (!companyName) return;
    
    setLoading(true);
    const { error } = await supabase
      .from('companies')
      .insert([
        { 
          name: companyName, 
          owner_id: user.id,
          industry: 'Technology' 
        }
      ]);

    if (error) {
      alert("خطأ في إضافة الشركة: " + error.message);
    } else {
      setStep('success');
    }
    setLoading(false);
  };

  // 1. شاشة إعداد الشركة (بعد التسجيل)
  if (step === 'setup') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6" dir="rtl">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
          <div className="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white">
            <Building2 size={24} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">مرحباً بك في نكستلي</h2>
          <p className="text-slate-500 mb-8 font-medium">لنبدأ بتأسيس كيانك المالي، ما هو اسم شركتك الأولى؟</p>
          
          <form onSubmit={handleCreateCompany}>
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-2 text-right">اسم الشركة</label>
              <input 
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="مثلاً: نكستلي للحلول الذكية"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium text-right"
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : "تأسيس الشركة الآن"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. شاشة النجاح
  if (step === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6" dir="rtl">
        <div className="text-center">
          <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">مبروك يا بطل!</h2>
          <p className="text-slate-600 mb-8 text-lg">شركة <span className="font-bold text-blue-600">{companyName}</span> أصبحت الآن تحت مظلة نكستلي.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all"
          >
            الانتقال للوحة التحكم
          </button>
        </div>
      </div>
    );
  }

  // 3. الصفحة الرئيسية مع فورم التسجيل (Landing Page)
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 pb-20" dir="rtl">
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <LayoutGrid size={22} />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">Nextly</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">الخدمات</a>
            <a href="#" className="hover:text-blue-600 transition-colors">عن نكستلي</a>
          </div>
          <div className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            {user ? user.email : "الشركة الأم"}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-8">
          <Rocket size={14} className="text-blue-600" />
          <span>مستقبل التكنولوجيا المالية يبدأ هنا</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.25]">
          نكستلي: شريكك الذكي <br /> 
          <span className="text-blue-600">لإدارة أعمالك</span>
        </h1>

        <div className="max-w-md mx-auto bg-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 mt-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">إنشاء حساب جديد</h2>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="relative">
              <Mail className="absolute right-4 top-4 text-slate-400" size={20} />
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pr-12 pl-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all text-right"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute right-4 top-4 text-slate-400" size={20} />
              <input 
                type="password" 
                placeholder="كلمة المرور" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-12 pl-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all text-right"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-200"
            >
              {loading ? <Loader2 className="animate-spin" /> : <>ابدأ مشروعك الأول <ArrowRight className="rotate-180" size={20}/></>}
            </button>
          </form>
          <p className="mt-6 text-sm text-slate-500">
            بالتسجيل، أنت توافق على شروط استخدام نكستلي
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;