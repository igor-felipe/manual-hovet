"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector(
      `a[href="${pathname}"]`
    ) as HTMLAnchorElement;

    if (activeLink) {
      const container = navRef.current;
      const containerRect = container.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      const left = linkRect.left - containerRect.left;
      const width = linkRect.width;

      setIndicatorStyle({ left, width });
    }
  }, [pathname]);

  return (
    <div className="sticky top-0 z-50 flex items-start px-4 sm:px-6 sm:justify-center py-3 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm overflow-x-auto no-scrollbar touch-pan-x overscroll-x-contain">
      <NavigationMenu>
        <div ref={navRef} className="relative">
          <NavigationMenuList className="flex-nowrap gap-6">
            {Object.keys(menuItems).map((e) => {
              const key = e as keyof typeof menuItems;
              const isActive = pathname === menuItems[key].url;

              return (
                <NavigationMenuItem key={key} className="flex-shrink-0">
                  <NavigationMenuLink
                    href={menuItems[key].url}
                    className={`font-semibold transition-colors whitespace-nowrap ${isActive
                      ? "text-[#0A5A4B]"
                      : "text-gray-700 hover:text-[#0A5A4B] hover:bg-emerald-50/50 rounded-md"
                      }`}
                    style={{ fontSize: "1.17rem" }}
                  >
                    {menuItems[key].title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>

          <div
            className="absolute bottom-0 h-[3px] rounded-full transition-all duration-500 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              backgroundColor: PRIMARY_GREEN,
            }}
          />
        </div>
      </NavigationMenu>
    </div>
  );
};
