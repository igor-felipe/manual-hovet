import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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

export const Menu = () => (
  <div
    className={`flex items-center gap-4 p-4 border-b bg-white font-medium text-3xl overflow-hidden text-nowrap overflow-x-auto no-scrollbar`}
  >
    <NavigationMenu>
      <NavigationMenuList>
        {Object.keys(menuItems).map((e) => {
          const key = e as keyof typeof menuItems;
          return (
            <NavigationMenuItem key={key}>
              <NavigationMenuLink href={menuItems[key].url}>
                {menuItems[key].title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);
