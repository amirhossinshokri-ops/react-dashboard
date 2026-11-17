import React from 'react'

function Settings() {
  return (
<div className="p-5 lg:p-8">
  <div className="mb-7">
    <h1 className="text-2xl font-extrabold">تنظیمات</h1>
    <p className="text-sm text-slate-500 mt-2">
      مدیریت اطلاعات فروشگاه و تنظیمات پنل
    </p>
  </div>
  <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
    <aside className="bg-white rounded-2xl p-3 border border-slate-100 soft-shadow h-fit">
      <a className="block rounded-xl bg-indigo-50 text-indigo-700 p-3 text-sm font-semibold">
        اطلاعات فروشگاه
      </a>
      <a className="block rounded-xl hover:bg-slate-50 p-3 text-sm">
        حساب کاربری
      </a>
      <a className="block rounded-xl hover:bg-slate-50 p-3 text-sm">اعلان‌ها</a>
      <a className="block rounded-xl hover:bg-slate-50 p-3 text-sm">
        امنیت و رمز عبور
      </a>
      <a className="block rounded-xl hover:bg-slate-50 p-3 text-sm">
        روش‌های پرداخت
      </a>
    </aside>
    <section className="xl:col-span-3 bg-white rounded-2xl p-6 border border-slate-100 soft-shadow">
      <div className="border-b border-slate-100 pb-4 mb-6">
        <b>اطلاعات فروشگاه</b>
        <p className="text-xs text-slate-400 mt-2">
          اطلاعات عمومی فروشگاه را ویرایش کن.
        </p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="text-sm">
          نام فروشگاه
          <input
            defaultValue="NOVA Store"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-400"
          />
        </label>
        <label className="text-sm">
          ایمیل پشتیبانی
          <input
            defaultValue="support@novastore.example"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-400"
          />
        </label>
        <label className="text-sm">
          شماره تماس
          <input
            defaultValue="۰۲۱-۱۲۳۴۵۶۷۸"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-400"
          />
        </label>
        <label className="text-sm">
          واحد پول
          <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3">
            <option>تومان</option>
            <option>ریال</option>
          </select>
        </label>
        <label className="text-sm md:col-span-2">
          آدرس فروشگاه
          <textarea
            rows={3}
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
            defaultValue={"تهران، ایران"}
          />
        </label>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="button"
            className="rounded-xl bg-indigo-600 text-white px-6 py-3 text-sm font-semibold"
          >
            ذخیره تغییرات
          </button>
        </div>
      </form>
    </section>
  </div>
</div>
  )
}

export default Settings