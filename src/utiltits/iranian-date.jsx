import React from 'react';

function PersianDateDisplay() {
  const today = new Date();

  // گزینه‌های قالب‌بندی برای نمایش روز هفته و تاریخ کامل شمسی
  const options = { 
      day: 'numeric' ,
      year: 'numeric', 
      month: 'long',   // نام کامل ماه (مثلاً: آبان)
      weekday: 'long', // نام کامل روز هفته (مثلاً: شنبه)
  };

  const persianDate = new Intl.DateTimeFormat('fa-IR-u-ca-persian', options).format(today);

  
  return (
  persianDate
  )
}

export default PersianDateDisplay;