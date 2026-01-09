import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  ariaLabel?: string;
};

type ButtonAsButton = ButtonBaseProps & {
  as?: "button";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: never;
};

type ButtonAsLink = ButtonBaseProps & {
  as: "link";
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Reusable Button component with multiple variants
 * Can render as a button element or Next.js Link
 * @param props - Button configuration props
 * @returns Button or Link element based on props
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    children,
    className = "",
    "aria-label": ariaLabelFromProp,
    ariaLabel,
    ...restProps
  } = props;
  
  // Support both "aria-label" and ariaLabel for flexibility
  const ariaLabelValue = ariaLabel || ariaLabelFromProp;

  const baseStyles = "rounded-md px-6 py-3 text-base font-medium transition-colors";
  
  const variantStyles = {
    primary: "bg-accentBlue text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-charcoal hover:bg-gray-300",
    outline: "border-2 border-accentBlue px-6 py-3 text-base font-medium text-accentBlue hover:bg-accentBlue hover:text-white",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (restProps.as === "link" && "href" in restProps) {
    // For external links (PDFs, external URLs), use regular anchor tag
    // For internal links, use Next.js Link
    const isExternal = restProps.href.startsWith("http") || restProps.href.startsWith("/pdfs") || restProps.target === "_blank";
    
    if (isExternal) {
      return (
        <a
          href={restProps.href}
          target={restProps.target}
          rel={restProps.rel || (restProps.target === "_blank" ? "noopener noreferrer" : undefined)}
          className={combinedClassName}
          aria-label={ariaLabelValue}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={restProps.href} className={combinedClassName} aria-label={ariaLabelValue}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      onClick={restProps.onClick}
      type={restProps.type || "button"}
      aria-label={ariaLabelValue}
    >
      {children}
    </button>
  );
}
