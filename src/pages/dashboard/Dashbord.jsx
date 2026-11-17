import SectionTitle from "../../components/Ui/SectionTitle"
import { dashboardStats } from "./dashboard.data"
import SummaryCard from "../../components/Ui/SummaryCard"


function Dashbord() {

function handelinsertproduct(){
}


  return (
<div className="mx-auto max-w-[1600px] space-y-7 p-5 sm:p-8 lg:p-10">
  {/* Welcome / Title */}
  <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
    
    <SectionTitle title="        خوش اومدی، مدیر عزیز 👋
" caption="        این خلاصه‌ای از اتفاقات فروشگاه در ۳۰ روز گذشته است.
" 

action={ <div className="flex gap-2">
      <button className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x={3} y={4} width={18} height={17} rx={2} />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        ۳۰ روز گذشته
        <svg
          className="h-3 w-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <button onClick={handelinsertproduct} className="flex h-10 items-center gap-2 rounded-xl bg-brand-600 px-4 text-xs font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-brand-700">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        افزودن محصول
      </button>
    </div>}

/>
    
  </section>
  {/* Summary cards */}
  <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
{dashboardStats.map((item)=><SummaryCard key={item.id} {...item} />)}
 
  </section>


  {/* Chart and side stats */}
  <section className="grid gap-5 xl:grid-cols-3">
    <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft sm:p-6 xl:col-span-2">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-extrabold text-slate-900">Overview فروش</h3>
          <p className="mt-1 text-xs text-slate-400">
            روند درآمد فروشگاه در هفته جاری
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-[11px] font-semibold text-slate-500">
          این هفته
          <svg
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
      <div className="mt-7 flex items-end gap-3">
        <p className="text-2xl font-extrabold text-slate-900">
          ۶۸,۴۲۰,۰۰۰{" "}
          <span className="text-xs font-medium text-slate-400">تومان</span>
        </p>
        <span className="mb-1 text-[10px] font-bold text-emerald-600">
          + ۱۴.۶٪
        </span>
      </div>
      <div className="mt-5 h-64 w-full">
        <svg
          viewBox="0 0 760 245"
          className="h-full w-full overflow-visible"
          preserveAspectRatio="none"
          role="img"
          aria-label="نمودار درآمد هفتگی"
        >
          <defs>
            <linearGradient id="chartFill" x1={0} x2={0} y1={0} y2={1}>
              <stop offset="0%" stopColor="#6366f1" stopOpacity=".20" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <g stroke="#e9edf5" strokeDasharray="4 5">
            <line x1={38} y1={20} x2={748} y2={20} />
            <line x1={38} y1={70} x2={748} y2={70} />
            <line x1={38} y1={120} x2={748} y2={120} />
            <line x1={38} y1={170} x2={748} y2={170} />
            <line x1={38} y1={220} x2={748} y2={220} />
          </g>
          <g fill="#94a3b8" fontSize={10}>
            <text x={28} y={23} textAnchor="end">
              ۸۰م
            </text>
            <text x={28} y={73} textAnchor="end">
              ۶۰م
            </text>
            <text x={28} y={123} textAnchor="end">
              ۴۰م
            </text>
            <text x={28} y={173} textAnchor="end">
              ۲۰م
            </text>
            <text x={28} y={223} textAnchor="end">
              ۰
            </text>
          </g>
          <path
            d="M40 175 C78 160 90 145 140 153 S205 115 240 130 S310 150 340 105 S405 88 440 108 S510 62 540 78 S610 92 640 48 S710 57 745 25 L745 220 L40 220Z"
            fill="url(#chartFill)"
          />
          <path
            d="M40 175 C78 160 90 145 140 153 S205 115 240 130 S310 150 340 105 S405 88 440 108 S510 62 540 78 S610 92 640 48 S710 57 745 25"
            fill="none"
            stroke="#6366f1"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <g fill="#fff" stroke="#6366f1" strokeWidth={3}>
            <circle cx={140} cy={153} r={4} />
            <circle cx={240} cy={130} r={4} />
            <circle cx={340} cy={105} r={4} />
            <circle cx={440} cy={108} r={4} />
            <circle cx={540} cy={78} r={4} />
            <circle cx={640} cy={48} r={4} />
            <circle cx={745} cy={25} r={4} />
          </g>
          <g fill="#94a3b8" fontSize={10} textAnchor="middle">
            <text x={40} y={240}>
              شنبه
            </text>
            <text x={140} y={240}>
              یکشنبه
            </text>
            <text x={240} y={240}>
              دوشنبه
            </text>
            <text x={340} y={240}>
              سه‌شنبه
            </text>
            <text x={440} y={240}>
              چهارشنبه
            </text>
            <text x={540} y={240}>
              پنجشنبه
            </text>
            <text x={680} y={240}>
              جمعه
            </text>
          </g>
        </svg>
      </div>
    </article>
    <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-extrabold text-slate-900">ترکیب سفارش‌ها</h3>
          <p className="mt-1 text-xs text-slate-400">وضعیت سفارش‌های این ماه</p>
        </div>
        <button className="text-xs font-semibold text-brand-600">جزئیات</button>
      </div>
      <div
        className="mx-auto mt-7 grid h-44 w-44 place-items-center rounded-full"
        style={{
          background:
            "conic-gradient(#6366f1 0 58%, #22c55e 58% 82%, #f59e0b 82% 94%, #e2e8f0 94% 100%)"
        }}
      >
        <div className="grid h-32 w-32 place-items-center rounded-full bg-white text-center">
          <div>
            <p className="text-2xl font-extrabold text-slate-900">۱,۴۲۸</p>
            <p className="mt-1 text-[10px] text-slate-400">کل سفارش‌ها</p>
          </div>
        </div>
      </div>
      <div className="mt-7 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-2 text-slate-500">
            <i className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
            تکمیل‌شده
          </span>
          <b className="text-slate-700">۵۸٪</b>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-2 text-slate-500">
            <i className="h-2.5 w-2.5 rounded-full bg-green-500" />
            در حال ارسال
          </span>
          <b className="text-slate-700">۲۴٪</b>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-2 text-slate-500">
            <i className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            در انتظار
          </span>
          <b className="text-slate-700">۱۲٪</b>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-2 text-slate-500">
            <i className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            لغوشده
          </span>
          <b className="text-slate-700">۶٪</b>
        </div>
      </div>
    </article>
  </section>
  {/* Latest products */}
  <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-5 sm:px-6">
      <div>
        <h3 className="font-extrabold text-slate-900">آخرین محصولات</h3>
        <p className="mt-1 text-xs text-slate-400">
          محصولاتی که اخیراً به فروشگاه اضافه شده‌اند
        </p>
      </div>
      <a
        href="#"
        className="text-xs font-bold text-brand-600 transition hover:text-brand-700"
      >
        مشاهده همه محصولات ←
      </a>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[650px] text-right">
        <thead className="bg-slate-50/80 text-[10px] font-bold text-slate-400">
          <tr>
            <th className="px-6 py-4">محصول</th>
            <th className="px-4 py-4">شناسه</th>
            <th className="px-4 py-4">قیمت</th>
            <th className="px-4 py-4">موجودی</th>
            <th className="px-6 py-4">وضعیت</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs">
          <tr className="transition hover:bg-slate-50/70">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-xl">
                  🎧
                </div>
                <div>
                  <p className="font-bold text-slate-800">هدفون بی‌سیم سونی</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    صوتی و تصویری
                  </p>
                </div>
              </div>
            </td>
            <td className="px-4 py-4 text-slate-400">#PR-2048</td>
            <td className="px-4 py-4 font-semibold">۳,۸۵۰,۰۰۰ تومان</td>
            <td className="px-4 py-4">۲۴ عدد</td>
            <td className="px-6 py-4">
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">
                فعال
              </span>
            </td>
          </tr>
          <tr className="transition hover:bg-slate-50/70">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-xl">
                  ⌚
                </div>
                <div>
                  <p className="font-bold text-slate-800">ساعت هوشمند Galaxy</p>
                  <p className="mt-1 text-[10px] text-slate-400">گجت هوشمند</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-4 text-slate-400">#PR-2047</td>
            <td className="px-4 py-4 font-semibold">۶,۲۰۰,۰۰۰ تومان</td>
            <td className="px-4 py-4">۱۲ عدد</td>
            <td className="px-6 py-4">
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">
                فعال
              </span>
            </td>
          </tr>
          <tr className="transition hover:bg-slate-50/70">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-xl">
                  ⌨️
                </div>
                <div>
                  <p className="font-bold text-slate-800">
                    کیبورد مکانیکال RGB
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">لوازم جانبی</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-4 text-slate-400">#PR-2046</td>
            <td className="px-4 py-4 font-semibold">۲,۴۵۰,۰۰۰ تومان</td>
            <td className="px-4 py-4">۰ عدد</td>
            <td className="px-6 py-4">
              <span className="rounded-full bg-rose-50 px-3 py-1.5 text-[10px] font-bold text-rose-600">
                ناموجود
              </span>
            </td>
          </tr>
          <tr className="transition hover:bg-slate-50/70">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-xl">
                  🖱️
                </div>
                <div>
                  <p className="font-bold text-slate-800">
                    ماوس گیمینگ Logitech
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">لوازم جانبی</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-4 text-slate-400">#PR-2045</td>
            <td className="px-4 py-4 font-semibold">۱,۷۹۰,۰۰۰ تومان</td>
            <td className="px-4 py-4">۳۸ عدد</td>
            <td className="px-6 py-4">
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">
                فعال
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 text-[10px] text-slate-400">
      <span>نمایش ۴ محصول از ۱۲۸ محصول</span>
      <div className="flex gap-1">
        <button className="grid h-7 w-7 place-items-center rounded-lg border border-slate-200">
          ۱
        </button>
        <button className="grid h-7 w-7 place-items-center rounded-lg bg-brand-600 text-white">
          ۲
        </button>
        <button className="grid h-7 w-7 place-items-center rounded-lg border border-slate-200">
          ۳
        </button>
      </div>
    </div>
  </section>
  {/* Latest users */}
  <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft sm:p-6">
    <div className="mb-5 flex items-center justify-between">
      <div>
        <h3 className="font-extrabold text-slate-900">آخرین کاربران</h3>
        <p className="mt-1 text-xs text-slate-400">جدیدترین اعضای فروشگاه</p>
      </div>
      <a href="#" className="text-xs font-bold text-brand-600">
        مشاهده همه
      </a>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-rose-100 text-xs font-bold text-rose-700">
          م‌الف
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-slate-800">
            مریم احمدی
          </p>
          <p className="mt-1 truncate text-[10px] text-slate-400">
            maryam@example.com
          </p>
        </div>
        <span className="mr-auto text-[10px] text-slate-400">امروز</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
          ع‌م
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-slate-800">علی محمدی</p>
          <p className="mt-1 truncate text-[10px] text-slate-400">
            ali@example.com
          </p>
        </div>
        <span className="mr-auto text-[10px] text-slate-400">امروز</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
          ن‌ک
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-slate-800">
            نگار کریمی
          </p>
          <p className="mt-1 truncate text-[10px] text-slate-400">
            negar@example.com
          </p>
        </div>
        <span className="mr-auto text-[10px] text-slate-400">دیروز</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">
          ا‌ر
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-slate-800">
            امیر رضایی
          </p>
          <p className="mt-1 truncate text-[10px] text-slate-400">
            amir@example.com
          </p>
        </div>
        <span className="mr-auto text-[10px] text-slate-400">۲ روز پیش</span>
      </div>
    </div>
  </section>
  <footer className="pb-2 text-center text-[10px] text-slate-400">
  </footer>
</div>
  )
}

export default Dashbord