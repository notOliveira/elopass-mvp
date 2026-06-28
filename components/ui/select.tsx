import { forwardRef, useId, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "./cn";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, label, error, hint, options, placeholder, id, ...props },
    ref,
  ) => {
    const autoId = useId();
    const selectId = id ?? autoId;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full h-11 px-4 pr-10 rounded-md bg-background border text-foreground appearance-none focus:outline-none focus:ring-1 transition-colors cursor-pointer",
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-border focus:border-foreground focus:ring-foreground",
              className,
            )}
            aria-invalid={!!error}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted pointer-events-none"
            aria-hidden="true"
          />
        </div>
        {hint && !error && (
          <p className="mt-1.5 text-xs text-muted">{hint}</p>
        )}
        {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
      </div>
    );
  },
);

Select.displayName = "Select";