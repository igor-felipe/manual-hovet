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
          fullWidth
            ? "max-w-none"
            : "max-w-[72ch] sm:max-w-[96ch] lg:max-w-[120ch]",
          "px-4 xl:px-10 pb-8",
          "bg-white rounded-none shadow-none border-0 sm:rounded-sm sm:shadow-lg sm:border sm:border-gray-200",
        ].join(" "),
        fullWidth && "w-full",
        className,
      )}
    >
      {<div className="content content-prose">{children}</div>}
    </div>
  );
}
