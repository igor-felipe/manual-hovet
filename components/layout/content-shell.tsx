import { cn } from "@/lib/utils";

type ContentShellProps = {
  children: React.ReactNode;
  className?: string;
  prose?: boolean;
  fullWidth?: boolean;
};

export function ContentShell({
  children,
  className,
  prose = false,
  fullWidth = false,
}: ContentShellProps) {
  return (
    <div
      className={cn(
        "mx-4 max-w-5xl rounded-md border border-gray-200 bg-gray-50 px-12 py-12 shadow-lg",
        prose && "prose prose-sm",
        fullWidth && "w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
