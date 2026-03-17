import { cn } from "@/lib/utils";

type ContentShellProps = {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export function ContentShell({
  children,
  className,
  fullWidth = false,
}: ContentShellProps) {
  return (
    <div
      className={cn(
        [
          "mx-auto w-full",
          fullWidth ? "max-w-none" : "max-w-[72ch] sm:max-w-[96ch] lg:max-w-[120ch]",
          "px-4 xl:px-10 pb-8",
          "rounded-sm border-gray-200 bg-white shadow-lg",
        ].join(" "),
        fullWidth && "w-full",
        className
      )}
    >
      {<div className="content content-prose">{children}</div>}
    </div>
  );
}
