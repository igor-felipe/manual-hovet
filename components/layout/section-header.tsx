import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
};

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  centered = true,
}: SectionHeaderProps) {
  return (
    <header className={cn("mb-8 space-y-2", centered && "text-center", className)}>
      <h1 className={cn("h1", titleClassName)}>{title}</h1>
      {subtitle ? (
        <p
          className={cn(
            "p",
            "text-muted-foreground",
            centered && "mx-auto max-w-2xl",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
