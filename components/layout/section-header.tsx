import { BodyText, PageTitle } from "@/components/typography";
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
      <PageTitle className={titleClassName}>{title}</PageTitle>
      {subtitle ? (
        <BodyText
          className={cn(
            "text-muted-foreground",
            centered && "mx-auto max-w-2xl",
            subtitleClassName
          )}
        >
          {subtitle}
        </BodyText>
      ) : null}
    </header>
  );
}
