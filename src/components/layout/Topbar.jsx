
import PersianDateDisplay from '../../utiltits/iranian-date'

import { replace, useMatches,useSearchParams } from 'react-router'
import { useState } from 'react'
function Topbar() {
const matches=useMatches()
const [isNotificationOpen, setIsNotificationOpen] = useState(false);
console.log(isNotificationOpen);


const [searchQuery,setsearchQuery]=useSearchParams()
const currentRoute=matches.slice().reverse().find((match)=>match.handle?.title)
const pageTitle = currentRoute?.handle?.title ?? "صفحه";
  
  return (
<header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200/80 bg-white/90 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
  <div className="flex items-center gap-4">
    <button
      className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-600 lg:hidden"
      aria-label="باز کردن منو"
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <div>
      <p className="text-xs text-slate-400"><PersianDateDisplay/></p>
      <h1 className="mt-1 text-lg font-extrabold text-slate-900 sm:text-xl">
        {pageTitle}
      </h1>
    </div>
  </div>
  <div className="flex items-center gap-2 sm:gap-4">
    <label className="hidden h-11 w-64 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 md:flex">
      <svg
        className="h-4 w-4 text-slate-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx={11} cy={11} r={7} />
        <path d="m20 20-4-4" />
      </svg>
      <input value={searchQuery.get("q")??""}
       onChange={(e)=>{
        
        const value=e.target.value;

        if(value.trim()){
           setsearchQuery({"q":value},{ replace: true })}

   else {
    setsearchQuery({}, { replace: true })

  }

        }
        
     

  
        
       
      
      }
        className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400"
        placeholder="جستجو در پنل..."
      />
      <kbd className="rounded border border-slate-200 bg-white px-1.5 py-1 text-[9px] text-slate-400">
        ⌘ K
      </kbd>
    </label>
    <button onClick={()=>{setIsNotificationOpen(perv=>!perv)}}
      className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50"
      aria-label="اعلان‌ها"
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </svg>
      <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500" />
      {isNotificationOpen && (
  <div className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
    <h3 className="mb-3 font-bold">اعلان‌ها</h3>

    <div className="space-y-3 text-sm">
      <p>🛍️ سفارش جدید ثبت شد</p>
      <p>👤 یک کاربر جدید ثبت‌نام کرد</p>
      <p>⚠️ موجودی یک محصول رو به اتمام است</p>
    </div>
  </div>
)}
    </button>
    <div className="hidden h-9 w-px bg-slate-200 sm:block" />
    <button className="flex items-center gap-2.5">
      <div className="hidden text-left sm:block">
        <p className="text-xs font-bold text-slate-800">مدیر فروشگاه</p>
        <p className="mt-1 text-[10px] text-slate-400">مدیر کل</p>
      </div>
      <div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-100 text-sm font-extrabold text-indigo-700">
        م
      </div>
    </button>
  </div>
</header>
  )
}

export default Topbar