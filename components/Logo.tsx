"use client";

import Image from "next/image";
import clsx from "clsx";
import OriginalLogo from "@/public/logo.svg";

export const Logo = ({ className }: { className?: string }) => (
  <div className={clsx("relative w-full h-auto max-w-[250px]", className)}>
    <Image
      src={OriginalLogo as string}
      alt="Logo"
      priority
      style={{ width: "100%", height: "auto" }}
    />
  </div>
);
