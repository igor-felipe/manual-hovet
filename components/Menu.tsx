"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INDICATOR_COLOR = "#FFFFFF";

export const menuItems = {
  home: { title: "SIG-HOVET", url: "/" },
  manual: { title: "Manual", url: "/manual" },
  timeline: { title: "Cronograma", url: "/timeline" },
  releases: { title: "Atualizações", url: "/releases" },
  // questions: { title: "Suporte", url: "/support" },
  team: { title: "Equipe", url: "/team" },
};

export const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector(
      `a[href="${pathname}"]`
    ) as HTMLAnchorElement;

    if (!activeLink) return;

    const container = navRef.current;
    const containerRect = container.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    const left = linkRect.left - containerRect.left;
    const width = linkRect.width;

    setIndicatorStyle({ left, width });
  }, [pathname]);

  return (
    <div data-top-menu="true" className="sticky top-0 z-50 bg-emerald-900/90 text-white backdrop-blur-sm">

      {/* MOBILE */}
      <div className="relative sm:hidden">
        <Select value={pathname} onValueChange={(value) => router.push(value)}>
          <SelectTrigger className="h-12! w-full [&_svg]:text-white! [&_svg]:opacity-100! justify-center border-none bg-emerald-900 text-lg text-white shadow-none focus-visible:border-none focus-visible:ring-0">
            <SelectValue
              placeholder="Navegação"
              className="text-center"
            />
          </SelectTrigger>

          <SelectContent
            position="popper"
            collisionPadding={0}
          >
            {Object.entries(menuItems).map(([key, item]) => (
              <SelectItem key={key} value={item.url}>
                {item.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:flex items-start justify-center px-4 py-2">
        <NavigationMenu>
          <div ref={navRef} className="relative">
            <NavigationMenuList className="gap-6">
              {Object.keys(menuItems).map((e) => {
                const key = e as keyof typeof menuItems;
                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuLink
                      href={menuItems[key].url}
                      className={`relative whitespace-nowrap px-1 text-lg font-medium transition-colors rounded-sm
                         focus:bg-emerald-900 focus:text-white hover:text-emerald-900 hover:border-white/70`}

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
                backgroundColor: INDICATOR_COLOR,
              }}
            />
          </div>
        </NavigationMenu>
      </div>
    </div>
  );
};
