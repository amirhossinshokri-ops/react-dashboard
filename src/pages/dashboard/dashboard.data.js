
import {
  Wallet,
  ShoppingCart,
  Users,
  ChartNoAxesCombined,
} from "lucide-react";

export const dashboardStats = [
  {
    id: "total-sales",
    title: "کل فروش",
    value: "۱۲۵ میلیون تومان",
    icon: Wallet,
    change: "+۱۲.۵٪",
    description: "نسبت به ماه گذشته",
    descriptionVariant: "success",
  },
  {
    id: "total-orders",
    title: "تعداد سفارش‌ها",
    value: "۱,۴۲۸",
    icon: ShoppingCart,
    change: "+۸.۲٪",
    description: "در مقایسه با ماه قبل",
    descriptionVariant: "success",
  },
  {
    id: "new-users",
    title: "کاربران جدید",
    value: "۸۶",
    icon: Users,
    change: "۲.۱٪ -",
    description: "در ۳۰ روز گذشته",
    descriptionVariant: "danger",
  },
  {
    id: "average-order-value",
    title: "میانگین ارزش سفارش",
    value: "۸۷۵ هزار تومان",
    icon: ChartNoAxesCombined,
    change: "+۵.۱٪",
    description: "میانگین هر سفارش موفق",
    descriptionVariant: "success",
  },
];
