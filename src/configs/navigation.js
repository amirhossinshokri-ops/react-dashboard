
export const menuGroups = [
  {
    id: "main",
    title: "منوی اصلی",
    items: [
      {
        title: "داشبورد",
        path: "/",
        icon: "layout-dashboard",
        end: true,
      },
      {
        title: "محصولات",
        path: "/products",
        icon: "package",
        badge: {
          text: "۱۲۸",
          variant: "default",
        },
      },
      {
        title: "سفارش‌ها",
        path: "/orders",
        icon: "shopping-bag",
        badge: {
          text: "۸ جدید",
          variant: "warning",
        },
      },
      {
        title: "کاربران",
        path: "/users",
        icon: "users",
      },
    ],
  },

  
  {
    id: "management",
    title: "مدیریت",
    items: [
      {
        title: "گزارش‌ها و آمار",
        path: "/reports",
        icon: "chart-no-axes-combined",
      },
      {
        title: "تنظیمات",
        path: "/settings",
        icon: "settings",
      },
    ],
  },
];
