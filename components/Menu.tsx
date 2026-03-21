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
  login: { title: "Entrar", url: "https://app.ipe.ufrpe.br/auth/signin" },
};

const navigationMenuItems = Object.fromEntries(
  Object.entries(menuItems).filter(([key]) => key !== "login"),
);
const loginMenuItem = menuItems.login;

export const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = (value: string) => {
    if (value.startsWith("http")) {
      window.location.assign(value);
      return;
    }

    router.push(value);
  };

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector(
      `a[href="${pathname}"]`,
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
    <div
      data-top-menu="true"
      className="sticky top-0 z-50 bg-emerald-900/90 text-white backdrop-blur-sm"
    >
      {/* MOBILE */}
      <div className="flex items-center gap-2 pr-2 py-2 sm:hidden">
        <div className="relative flex-1">
          <Select value={pathname} onValueChange={navigateTo}>
            <SelectTrigger
              className={`h-12! w-full [&_svg]:text-white! [&_svg]:opacity-100! justify-start ${pathname.includes("manual") ? "pl-10" : ""} border-none text-left text-lg text-white shadow-none focus-visible:border-none focus-visible:ring-0`}
            >
              <SelectValue placeholder="Navegação" className="text-left" />
            </SelectTrigger>
            <SelectContent position="popper" collisionPadding={0}>
              {Object.entries(navigationMenuItems).map(([key, item]) => (
                <SelectItem key={key} value={item.url}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <a
          href={loginMenuItem.url}
          className="inline-flex h-10 items-center rounded-md border border-white/35 bg-white/10 px-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          {loginMenuItem.title}
        </a>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:flex items-center justify-between px-4 py-2 gap-2">
        <div className="w-[108px]" />
        <NavigationMenu>
          <div ref={navRef} className="relative">
            <NavigationMenuList className="gap-6">
              {Object.keys(navigationMenuItems).map((e) => {
                const key = e as keyof typeof navigationMenuItems;
                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuLink
                      href={navigationMenuItems[key].url}
                      className={`relative whitespace-nowrap px-1 text-lg font-medium transition-colors rounded-sm
                         focus:bg-emerald-900 focus:text-white hover:text-emerald-900 hover:border-white/70`}
                    >
                      {navigationMenuItems[key].title}
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
        <a
          href={loginMenuItem.url}
          className="inline-flex h-10 items-center rounded-md border border-white/35 bg-white/10 px-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          {loginMenuItem.title}
        </a>
      </div>
    </div>
  );
};
