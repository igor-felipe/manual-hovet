import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageTitle = ({ children, className }: HeadingProps) => (
  <h1 className={cn("text-xl font-semibold tracking-tight md:text-2xl", className)}>
    {children}
  </h1>
);

export const SectionTitle = ({ children, className }: HeadingProps) => (
  <h2 className={cn("text-lg font-semibold tracking-tight md:text-xl", className)}>
    {children}
  </h2>
);

export const SubsectionTitle = ({ children, className }: HeadingProps) => (
  <h3 className={cn("text-base font-medium tracking-tight md:text-lg", className)}>
    {children}
  </h3>
);

export const BodyText = ({ children, className }: TextProps) => (
  <p className={cn("text-sm leading-6", className)}>{children}</p>
);

// Backward-compatible aliases
export const H1 = PageTitle;
export const H2 = SectionTitle;
export const H3 = SubsectionTitle;
export const P = BodyText;

export const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
);

export const OL = ({
  children,
  startNumber,
}: {
  children: React.ReactNode;
  startNumber?: number;
}) => (
  <ol
    className="my-6 ml-6 list-decimal [&>li]:mt-2"
    {...(startNumber && { start: startNumber })}
  >
    {children}
  </ol>
);

export const LI = ({ children }: { children: React.ReactNode }) => <li>{children}</li>;
