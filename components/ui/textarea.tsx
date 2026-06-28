import { forwardRef, useId, type TextareaHTMLAttributes } from "react";
import { cn } from "./cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-3 rounded-md bg-background border text-foreground placeholder:text-muted focus:outline-none focus:ring-1 transition-colors resize-vertical min-h-28",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-border focus:border-foreground focus:ring-foreground",
            className,
          )}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          {...props}
        />
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-xs text-muted">
            {hint}
          </p>
        )}
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";