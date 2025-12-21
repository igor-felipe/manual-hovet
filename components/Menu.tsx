"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PRIMARY_GREEN = "#0A5A4B";

export const menuItems = {
  home: {
    title: "Home",
    url: "/",
  },
  manual: {
    title: "Manual",
    url: "/manual",
  },
  team: {
    title: "Equipe",
    url: "/team",
  },
  timeline: {
    title: "Cronograma",
    url: "/timeline",
  },
  releases: {
    title: "Atualizações",
    url: "/releases",
  },
  questions: {
    title: "Suporte",
    url: "/support",
  },
};

export const Menu = () => {
  const pathname = usePathname();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector(
      `a[href="${pathname}"]`
    ) as HTMLAnchorElement;

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 flex items-center justify-center gap-8 px-6 py-3 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="relative flex items-center gap-8">
        {Object.keys(menuItems).map((e) => {
          const key = e as keyof typeof menuItems;
          const isActive = pathname === menuItems[key].url;

          return (
            <Link
              key={key}
              href={menuItems[key].url}
              className={`relative px-3 py-2 font-semibold text-lg transition-all duration-300 ${isActive
                ? "text-[#0A5A4B]"
                : "text-gray-700 hover:text-[#0A5A4B] hover:bg-emerald-50/50"
                } rounded-md`}
            >
              {menuItems[key].title}
            </Link>
          );
        })}

        <div
          className="absolute bottom-0 h-[3px] rounded-full transition-all duration-500 ease-out"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            backgroundColor: PRIMARY_GREEN,
          }}
        />
      </div>
    </nav>
  );
};
