import React from 'react'
import SectionTitle from '../../components/Ui/SectionTitle'
import SummaryCard from '../../components/Ui/SummaryCard'
import { ordersStats } from './orders.data'
function Order() {
  return (
<div className="p-5 lg:p-8">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
<SectionTitle title={"سفارش‌ها"}

caption={"پیگیری و مدیریت سفارش‌های ثبت‌شده"}
action={<button class="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm">خروجی گرفتن ↓</button>}


/>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

{ordersStats.map((item)=><SummaryCard key={item.id} {...item} size="compact"/>)}

  </div>
  <section className="bg-white rounded-2xl border border-slate-100 soft-shadow">
    <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between gap-3">
      <b>آخرین سفارش‌ها</b>
      <div className="flex gap-2">
        <input
          placeholder="جستجوی کد سفارش..."
          className="border rounded-xl px-4 py-2 text-sm"
        />
        <select className="border rounded-xl px-3 text-sm">
          <option>همه وضعیت‌ها</option>
          <option>تکمیل‌شده</option>
          <option>در حال ارسال</option>
        </select>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] text-sm text-right">
        <thead className="bg-slate-50 text-xs text-slate-500">
          <tr>
            <th className="p-4">کد سفارش</th>
            <th className="p-4">مشتری</th>
            <th className="p-4">تاریخ</th>
            <th className="p-4">مبلغ</th>
            <th className="p-4">روش پرداخت</th>
            <th className="p-4">وضعیت</th>
            <th className="p-4">جزئیات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="p-4 font-semibold">#ORD-8291</td>
            <td className="p-4">محمد رضایی</td>
            <td className="p-4">۱۴۰۵/۰۸/۲۴</td>
            <td className="p-4 font-semibold">۳,۴۵۰,۰۰۰ تومان</td>
            <td className="p-4">آنلاین</td>
            <td className="p-4">
              <span className="bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 text-xs">
                تکمیل‌شده
              </span>
            </td>
            <td className="p-4 text-indigo-600">مشاهده</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">#ORD-8290</td>
            <td className="p-4">سارا احمدی</td>
            <td className="p-4">۱۴۰۵/۰۸/۲۴</td>
            <td className="p-4 font-semibold">۱,۸۲۰,۰۰۰ تومان</td>
            <td className="p-4">آنلاین</td>
            <td className="p-4">
              <span className="bg-amber-50 text-amber-700 rounded-full px-3 py-1 text-xs">
                در حال ارسال
              </span>
            </td>
            <td className="p-4 text-indigo-600">مشاهده</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">#ORD-8289</td>
            <td className="p-4">رضا محمدی</td>
            <td className="p-4">۱۴۰۵/۰۸/۲۳</td>
            <td className="p-4 font-semibold">۵,۱۲۰,۰۰۰ تومان</td>
            <td className="p-4">درگاه بانکی</td>
            <td className="p-4">
              <span className="bg-rose-50 text-rose-700 rounded-full px-3 py-1 text-xs">
                لغوشده
              </span>
            </td>
            <td className="p-4 text-indigo-600">مشاهده</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</div>
  )
}

export default Order