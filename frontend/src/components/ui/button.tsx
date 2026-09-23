import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium px-4 py-2 text-sm transition-colors focus:outline-none";
  const variants = {
    primary: "bg-rose-500 text-white hover:bg-rose-600",
    secondary: "bg-amber-100 text-amber-900 hover:bg-amber-200",
    outline: "border border-stone-300 text-stone-700 hover:bg-stone-50",
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], className))}
      {...props}
    >
      {children}
    </button>
  );
}
