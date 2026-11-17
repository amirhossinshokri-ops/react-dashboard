import React from 'react'

function Reports() {
  return (
<div className="p-5 lg:p-8">
  <div className="mb-7">
    <h1 className="text-2xl font-extrabold">گزارش‌ها</h1>
    <p className="text-sm text-slate-500 mt-2">
      تحلیل عملکرد فروشگاه و شاخص‌های کلیدی
    </p>
  </div>
  <div className="flex flex-wrap gap-2 mb-6">
    <button className="bg-indigo-600 text-white rounded-xl px-4 py-2 text-sm">
      ۷ روز اخیر
    </button>
    <button className="bg-white border rounded-xl px-4 py-2 text-sm">
      ۳۰ روز اخیر
    </button>
    <button className="bg-white border rounded-xl px-4 py-2 text-sm">
      ۳ ماه اخیر
    </button>
    <button className="bg-white border rounded-xl px-4 py-2 text-sm">
      انتخاب بازه
    </button>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
    <div className="bg-white rounded-2xl p-5 border border-slate-100 soft-shadow">
      <p className="text-xs text-slate-500">فروش کل</p>
      <div className="text-2xl font-extrabold mt-2">۸۴۵,۶۰۰,۰۰۰</div>
      <p className="text-xs text-emerald-600 mt-2">↑ ۱۸.۲٪</p>
    </div>
    <div className="bg-white rounded-2xl p-5 border border-slate-100 soft-shadow">
      <p className="text-xs text-slate-500">تعداد سفارش</p>
      <div className="text-2xl font-extrabold mt-2">۱,۲۸۴</div>
      <p className="text-xs text-emerald-600 mt-2">↑ ۹.۶٪</p>
    </div>
    <div className="bg-white rounded-2xl p-5 border border-slate-100 soft-shadow">
      <p className="text-xs text-slate-500">میانگین ارزش سفارش</p>
      <div className="text-2xl font-extrabold mt-2">۶۵۸,۰۰۰</div>
      <p className="text-xs text-rose-600 mt-2">↓ ۲.۱٪</p>
    </div>
    <div className="bg-white rounded-2xl p-5 border border-slate-100 soft-shadow">
      <p className="text-xs text-slate-500">نرخ تبدیل</p>
      <div className="text-2xl font-extrabold mt-2">۳.۸٪</div>
      <p className="text-xs text-emerald-600 mt-2">↑ ۰.۴٪</p>
    </div>
  </div>
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
    <section className="xl:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 soft-shadow">
      <div className="flex justify-between mb-6">
        <b>روند فروش</b>
        <span className="text-xs text-slate-400">مبلغ به تومان</span>
      </div>
      <div className="h-64 flex items-end gap-4 border-b border-r border-slate-100 px-4 pb-2">
        <div className="bg-indigo-100 rounded-t-lg flex-1 h-[35%]" />
        <div className="bg-indigo-200 rounded-t-lg flex-1 h-[52%]" />
        <div className="bg-indigo-300 rounded-t-lg flex-1 h-[43%]" />
        <div className="bg-indigo-400 rounded-t-lg flex-1 h-[70%]" />
        <div className="bg-indigo-500 rounded-t-lg flex-1 h-[58%]" />
        <div className="bg-indigo-600 rounded-t-lg flex-1 h-[88%]" />
        <div className="bg-indigo-500 rounded-t-lg flex-1 h-[76%]" />
      </div>
      <div className="flex justify-around text-xs text-slate-400 mt-3">
        <span>شنبه</span>
        <span>یکشنبه</span>
        <span>دوشنبه</span>
        <span>سه‌شنبه</span>
        <span>چهارشنبه</span>
        <span>پنجشنبه</span>
        <span>جمعه</span>
      </div>
    </section>
    <section className="bg-white rounded-2xl p-6 border border-slate-100 soft-shadow">
      <b>فروش بر اساس دسته‌بندی</b>
      <div
        className="w-44 h-44 rounded-full mx-auto my-8"
        style={{
          background:
            "conic-gradient(#4f46e5 0 42%,#818cf8 42% 68%,#c7d2fe 68% 86%,#e2e8f0 86% 100%)"
        }}
      />
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>دیجیتال</span>
          <b>۴۲٪</b>
        </div>
        <div className="flex justify-between">
          <span>پوشاک</span>
          <b>۲۶٪</b>
        </div>
        <div className="flex justify-between">
          <span>اکسسوری</span>
          <b>۱۸٪</b>
        </div>
        <div className="flex justify-between">
          <span>سایر</span>
          <b>۱۴٪</b>
        </div>
      </div>
    </section>
  </div>
</div>
  )
}

export default Reports