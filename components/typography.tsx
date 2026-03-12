import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

type LinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export const TypographyContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("max-w-none [&_.typography-p+.typography-p]:mt-4", className)}>{children}</div>
);

export const PageTitle = ({ children, className }: HeadingProps) => (
  <h1
    className={cn(
      "typography-h1 mt-8 mb-4 text-center text-lg font-semibold tracking-tight text-slate-900 md:text-xl",
      className
    )}
  >
    {children}
  </h1>
);

export const SectionTitle = ({ children, className }: HeadingProps) => (
  <h2
    className={cn(
      "typography-h2 mt-7 mb-3 text-base font-semibold tracking-tight text-slate-900 md:text-lg",
      className
    )}
  >
    {children}
  </h2>
);

export const SubsectionTitle = ({ children, className }: HeadingProps) => (
  <h3
    className={cn(
      "typography-h3 mt-6 mb-2 text-base font-medium tracking-tight text-emerald-700",
      className
    )}
  >
    {children}
  </h3>
);

export const MinorSectionTitle = ({ children, className }: HeadingProps) => (
  <h4
    className={cn(
      "typography-h4 mt-5 mb-2 text-sm font-medium tracking-tight text-emerald-700 md:text-base",
      className
    )}
  >
    {children}
  </h4>
);

export const SmallSectionTitle = ({ children, className }: HeadingProps) => (
  <h5
    className={cn(
      "typography-h5 mt-4 mb-2 text-sm font-medium tracking-tight text-emerald-700",
      className
    )}
  >
    {children}
  </h5>
);

export const TinySectionTitle = ({ children, className }: HeadingProps) => (
  <h6
    className={cn(
      "typography-h6 mt-4 mb-2 text-sm font-medium tracking-tight text-emerald-700",
      className
    )}
  >
    {children}
  </h6>
);

export const BodyText = ({ children, className }: TextProps) => (
  <p className={cn("typography-p my-0 text-base leading-7 text-justify", className)}>{children}</p>
);

export const Strong = ({ children, className }: TextProps) => (
  <strong className={cn("typography-strong text-[#0A5A4B]", className)}>{children}</strong>
);

export const A = ({ children, className, href, target, rel }: LinkProps) => (
  <a
    className={cn("typography-a text-[#0A5A4B] hover:text-[#084539]", className)}
    href={href}
    target={target}
    rel={rel}
  >
    {children}
  </a>
);

// Backward-compatible aliases
export const H1 = PageTitle;
export const H2 = SectionTitle;
export const H3 = SubsectionTitle;
export const H4 = MinorSectionTitle;
export const H5 = SmallSectionTitle;
export const H6 = TinySectionTitle;
export const P = BodyText;

export const UL = ({ children, className }: TextProps) => (
  <ul className={cn("typography-ul my-6 ml-6 list-disc [&>li]:mt-2", className)}>{children}</ul>
);

export const OL = ({
  children,
  startNumber,
  start,
  className,
}: {
  children: React.ReactNode;
  startNumber?: number;
  start?: number;
  className?: string;
}) => (
  <ol
    className={cn("typography-ol my-6 ml-6 list-decimal [&>li]:mt-2", className)}
     {...((startNumber || start) && { start: startNumber ?? start })}
  >
    {children}
  </ol>
);

export const LI = ({ children, className }: TextProps) => (
  <li className={cn("typography-li", className)}>{children}</li>
);

export const EM = ({ children, className }: TextProps) => (
  <em className={cn("typography-em italic", className)}>{children}</em>
);

export const HR = ({ className }: { className?: string }) => (
  <hr className={cn("my-8 border-slate-200", className)} />
);

export const BR = ({ className }: { className?: string }) => <br className={className} />;

export const IMG = ({
  alt,
  src,
  width,
  height,
  maxWidth,
  className,
}: {
  alt: string;
  src: string;
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  className?: string;
}) => (
  <img
    alt={alt}
    src={src}
    className={cn("my-6 max-w-full rounded", className)}
    style={{
      width,
      height,
      maxWidth,
    }}
  />
);
