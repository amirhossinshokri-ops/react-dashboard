
import React from "react";

const descriptionVariants = {
  success: "text-emerald-600",
  danger: "text-rose-600",
  neutral: "text-slate-400",
};

const sizes = {
  default: {
    card: "p-5",
    icon: "h-11 w-11",
    title: "mt-5",
    value: "text-2xl",
  },
  compact: {
    card: "p-4",
    icon: "h-9 w-9",
    title: "mt-3",
    value: "text-xl",
  },
};

function SummaryCard({
  title,
  value,
  icon: Icon,
  change,
  description,
  descriptionVariant = "neutral",
  size = "default",
}) {
  const variantClass =
    descriptionVariants[descriptionVariant] ??
    descriptionVariants.neutral;

  const currentSize = sizes[size] ?? sizes.default;

  return (
    <article
      className={`rounded-2xl border border-slate-200/80 bg-white ${currentSize.card} shadow-soft`}
    >
      {(Icon || change) && (
        <div className="flex items-start justify-between">
          <div
            className={`grid place-items-center rounded-xl bg-slate-50 ${currentSize.icon} ${variantClass}`}
          >
            {Icon && <Icon className="h-5 w-5" />}
          </div>

          {change && (
            <span
              className={`rounded-lg bg-slate-50 px-2 py-1 text-[10px] font-bold ${variantClass}`}
            >
              {change}
            </span>
          )}
        </div>
      )}

      <p className={`${currentSize.title} text-xs font-medium text-slate-500`}>
        {title}
      </p>

      <h3 className={`mt-1 font-extrabold tracking-tight text-slate-900 ${currentSize.value}`}>
        {value}
      </h3>

      {description && (
        <p className={`mt-2 text-[10px] ${variantClass}`}>
          {description}
        </p>
      )}
    </article>
  );
}

export default SummaryCard;
