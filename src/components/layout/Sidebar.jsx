
import { NavLink } from "react-router";
import clsx from "clsx";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  ChartNoAxesCombined,
  Settings,
} from "lucide-react";

import { menuGroups } from "../../configs/navigation";

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  package: Package,
  "shopping-bag": ShoppingBag,
  users: Users,
  "chart-no-axes-combined": ChartNoAxesCombined,
  settings: Settings,
};

const badgeVariants = {
  default: "bg-white/10 text-white",
  warning: "bg-amber-400/15 text-amber-300",
};

function Sidebar() {
  const defaultClass =
    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition";

  return (
    <aside className="hidden min-h-screen w-72 shrink-0 flex-col bg-slate-950 text-slate-300 lg:flex">

      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-white/10 px-7">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 text-lg font-extrabold text-white">
          N
        </div>

        <div>
          <p className="text-base font-extrabold tracking-wide text-white">
            NOVA ADMIN
          </p>
          <p className="mt-0.5 text-[11px] text-slate-500">
            پنل مدیریت فروشگاه
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 pt-7">
        {menuGroups.map((group) => (
          <div key={group.id} className="mb-8">

            <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.18em] text-slate-500">
              {group.title}
            </p>

            <nav className="space-y-1">
              {group.items.map((link) => {
                const Icon = iconMap[link.icon];

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.end}
                    className={({ isActive }) =>
                      clsx(
                        defaultClass,
                        isActive
                          ? "bg-brand-500 font-semibold text-white shadow-lg shadow-indigo-950/30"
                          : "hover:bg-white/5 hover:text-white"
                      )
                    }
                  >
                    <Icon className="h-5 w-5" />

                    {link.title}

                    {link.badge && (
                      <span
                        className={clsx(
                          "mr-auto rounded-md px-2 py-0.5 text-[10px]",
                          badgeVariants[link.badge.variant]
                        )}
                      >
                        {link.badge.text}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </nav>

          </div>
        ))}
      </div>

      {/* Support */}
      <div className="mt-auto p-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-sm font-bold text-white">
            نیاز به راهنمایی داری؟
          </p>
          <p className="mt-1 text-xs leading-6 text-slate-400">
            از مرکز پشتیبانی کمک بگیر.
          </p>
          <button className="mt-3 w-full rounded-lg bg-white/10 py-2 text-xs font-semibold text-white transition hover:bg-white/15">
            مرکز پشتیبانی
          </button>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;
