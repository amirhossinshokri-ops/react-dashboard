import React from 'react'
import SectionTitle from '../../components/Ui/SectionTitle'
import SummaryCard from '../../components/Ui/SummaryCard'
import { usersStats } from './users.data'
function Users() {
  return (
<div className="p-5 lg:p-8">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
<SectionTitle title={"کاربران"}

caption={"مدیریت حساب‌ها و سطح دسترسی کاربران"}
action={ <button className="rounded-xl bg-indigo-600 text-white px-5 py-3 text-sm font-semibold">
      ＋ افزودن کاربر
    </button>}
/>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
 {usersStats.map((item)=><SummaryCard key={item.id} {...item} size="compact"/>)}

  </div>
  <section className="bg-white rounded-2xl border border-slate-100 soft-shadow">
    <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row gap-3 justify-between">
      <b>فهرست کاربران</b>
      <div className="flex gap-2">
        <input
          placeholder="جستجوی نام یا ایمیل..."
          className="border rounded-xl px-4 py-2 text-sm"
        />
        <select className="border rounded-xl px-3 text-sm">
          <option>همه نقش‌ها</option>
          <option>مدیر</option>
          <option>مشتری</option>
        </select>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-sm text-right">
        <thead className="bg-slate-50 text-slate-500 text-xs">
          <tr>
            <th className="p-4">کاربر</th>
            <th className="p-4">نقش</th>
            <th className="p-4">تاریخ عضویت</th>
            <th className="p-4">تعداد سفارش</th>
            <th className="p-4">وضعیت</th>
            <th className="p-4">عملیات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-bold">
                  م
                </div>
                <div>
                  <b>محمد رضایی</b>
                  <div className="text-xs text-slate-400">
                    m.rezaei@example.com
                  </div>
                </div>
              </div>
            </td>
            <td className="p-4">مشتری</td>
            <td className="p-4">۱۴۰۵/۰۷/۱۲</td>
            <td className="p-4">۱۸</td>
            <td className="p-4">
              <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs">
                فعال
              </span>
            </td>
            <td className="p-4 text-indigo-600">مشاهده جزئیات</td>
          </tr>
          <tr>
            <td className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 grid place-items-center font-bold">
                  س
                </div>
                <div>
                  <b>سارا احمدی</b>
                  <div className="text-xs text-slate-400">
                    s.ahmadi@example.com
                  </div>
                </div>
              </div>
            </td>
            <td className="p-4">مشتری</td>
            <td className="p-4">۱۴۰۵/۰۶/۲۸</td>
            <td className="p-4">۷</td>
            <td className="p-4">
              <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs">
                فعال
              </span>
            </td>
            <td className="p-4 text-indigo-600">مشاهده جزئیات</td>
          </tr>
          <tr>
            <td className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 grid place-items-center font-bold">
                  ع
                </div>
                <div>
                  <b>علی کریمی</b>
                  <div className="text-xs text-slate-400">
                    a.karimi@example.com
                  </div>
                </div>
              </div>
            </td>
            <td className="p-4">مدیر</td>
            <td className="p-4">۱۴۰۵/۰۵/۰۳</td>
            <td className="p-4">—</td>
            <td className="p-4">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs">
                دعوت‌شده
              </span>
            </td>
            <td className="p-4 text-indigo-600">مشاهده جزئیات</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="p-4 text-xs text-slate-400 border-t">
      نمایش ۳ کاربر از ۸,۴۲۵ کاربر
    </div>
  </section>
</div>
  )
}

export default Users