import React from 'react'
import SectionTitle from '../../components/Ui/SectionTitle'
import SummaryCard from '../../components/Ui/SummaryCard'
import { productsStats } from './products.data'
function Products() {
  return (
    <div className="p-5 lg:p-8">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
   <SectionTitle title={"محصولات"}
   caption={"مدیریت، جستجو و ویرایش محصولات فروشگاه"}
   action={  <button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 text-sm font-semibold">
      ＋ افزودن محصول
    </button>}
   />
  </div>







  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

{productsStats.map((item)=><SummaryCard key={item.id} {...item} size="compact"/>)}

  </div>
  <section className="bg-white rounded-2xl border border-slate-100 soft-shadow">
    <div className="p-5 border-b border-slate-100 flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
      <div className="font-bold">
        لیست محصولات{" "}
        <span className="text-xs font-normal text-slate-400 mr-1">
          (۲۴۸ مورد)
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          placeholder="جستجوی نام محصول..."
          className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-400"
        />
        <select className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-600">
          <option>همه دسته‌بندی‌ها</option>
          <option>دیجیتال</option>
          <option>پوشاک</option>
        </select>
        <select className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-600">
          <option>همه وضعیت‌ها</option>
          <option>فعال</option>
          <option>غیرفعال</option>
        </select>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-right min-w-[760px]">
        <thead className="bg-slate-50 text-slate-500 text-xs">
          <tr>
            <th className="p-4 font-medium">محصول</th>
            <th className="p-4 font-medium">شناسه</th>
            <th className="p-4 font-medium">دسته‌بندی</th>
            <th className="p-4 font-medium">قیمت</th>
            <th className="p-4 font-medium">موجودی</th>
            <th className="p-4 font-medium">وضعیت</th>
            <th className="p-4 font-medium">عملیات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 grid place-items-center text-xl">
                  🎧
                </div>
                <div>
                  <div className="font-semibold">هدفون بی‌سیم Pro</div>
                  <div className="text-xs text-slate-400 mt-1">مدل NX-200</div>
                </div>
              </div>
            </td>
            <td className="p-4 text-slate-500">#PR-1024</td>
            <td className="p-4">دیجیتال</td>
            <td className="p-4 font-semibold">۲,۸۵۰,۰۰۰ تومان</td>
            <td className="p-4">۴۲</td>
            <td className="p-4">
              <span className="bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 text-xs">
                فعال
              </span>
            </td>
            <td className="p-4">
              <button className="text-indigo-600">ویرایش</button>
              <button className="text-rose-500 mr-3">حذف</button>
            </td>
          </tr>
          <tr>
            <td className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-50 grid place-items-center text-xl">
                  ⌚
                </div>
                <div>
                  <div className="font-semibold">ساعت هوشمند</div>
                  <div className="text-xs text-slate-400 mt-1">مدل Watch S</div>
                </div>
              </div>
            </td>
            <td className="p-4 text-slate-500">#PR-1025</td>
            <td className="p-4">دیجیتال</td>
            <td className="p-4 font-semibold">۴,۲۰۰,۰۰۰ تومان</td>
            <td className="p-4">۸</td>
            <td className="p-4">
              <span className="bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 text-xs">
                فعال
              </span>
            </td>
            <td className="p-4">
              <button className="text-indigo-600">ویرایش</button>
              <button className="text-rose-500 mr-3">حذف</button>
            </td>
          </tr>
          <tr>
            <td className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-rose-50 grid place-items-center text-xl">
                  🎒
                </div>
                <div>
                  <div className="font-semibold">کوله‌پشتی روزمره</div>
                  <div className="text-xs text-slate-400 mt-1">مدل Urban</div>
                </div>
              </div>
            </td>
            <td className="p-4 text-slate-500">#PR-1026</td>
            <td className="p-4">اکسسوری</td>
            <td className="p-4 font-semibold">۱,۱۵۰,۰۰۰ تومان</td>
            <td className="p-4">۰</td>
            <td className="p-4">
              <span className="bg-rose-50 text-rose-700 rounded-full px-3 py-1 text-xs">
                ناموجود
              </span>
            </td>
            <td className="p-4">
              <button className="text-indigo-600">ویرایش</button>
              <button className="text-rose-500 mr-3">حذف</button>
            </td>
          </tr>
          <tr>
            <td className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-sky-50 grid place-items-center text-xl">
                  👟
                </div>
                <div>
                  <div className="font-semibold">کفش اسپرت</div>
                  <div className="text-xs text-slate-400 mt-1">مدل Runner</div>
                </div>
              </div>
            </td>
            <td className="p-4 text-slate-500">#PR-1027</td>
            <td className="p-4">پوشاک</td>
            <td className="p-4 font-semibold">۲,۱۰۰,۰۰۰ تومان</td>
            <td className="p-4">۲۱</td>
            <td className="p-4">
              <span className="bg-slate-100 text-slate-600 rounded-full px-3 py-1 text-xs">
                غیرفعال
              </span>
            </td>
            <td className="p-4">
              <button className="text-indigo-600">ویرایش</button>
              <button className="text-rose-500 mr-3">حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
      <span>نمایش ۱ تا ۴ از ۲۴۸ محصول</span>
      <div className="flex gap-1">
        <button className="w-8 h-8 rounded-lg border">‹</button>
        <button className="w-8 h-8 rounded-lg bg-indigo-600 text-white">
          ۱
        </button>
        <button className="w-8 h-8 rounded-lg border">۲</button>
        <button className="w-8 h-8 rounded-lg border">۳</button>
        <button className="w-8 h-8 rounded-lg border">›</button>
      </div>
    </div>
  </section>
  <div className="mt-6 text-xs text-slate-400">
    نکته: این صفحه فقط UI است؛ دکمه‌ها و فیلترها هنوز به React متصل نشده‌اند.
  </div>
</div>

  )
}

export default Products