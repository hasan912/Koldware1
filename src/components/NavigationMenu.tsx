"use client"

import * as React from "react"


import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; }[] = [
  {
    title: "Polyurethane Insulated Sandwich Panels",
    href: "/OurProduct/PolyurethaneInsulatedSandwichPanels",
   
  },
  {
    title: "Refrigeration System",
    href: "/OurProduct/RefrigerationSystem",
    
  },
  {
    title: "Chiller & Freezers",
    href: "/OurProduct/Chiller&Freezers",
   
  },
  {
    title: "Hot Water Treatment Plant",
    href: "/OurProduct/HotWaterTreatmentPlant",
   
  },
  {
    title: "Sorting & Grading Machine",
    href: "/OurProduct/Sorting&GradingMachine",
  
  },
  {
    title: "Fruit Ripening Chamber",
    href: "/OurProduct/FruitRipeningChamber",
  },
  {
    title: "Easy Fog (Ultrasonic Industrial Humidifier)",
    href: "/OurProduct/EasyFog(UltrasonicIndustrialHumidifier)",
  },
  {
    title: "Controlled Atmosphere CA Store",
    href: "/OurProduct/ControlledAtmosphereCAStore",
  },
  {
    title: "Blast Chiller & Freezer",
    href: "/OurProduct/BlastChillerandFreezer",
  },
  {
    title: "Refrigerated ContainerTruck & Van",
    href: "/OurProduct/RefrigeratedContainerTruck&Van",
  },
  {
    title: "Solar Tunnel Dryer(Easy DRY)",
    href: "/OurProduct/SolarTunnelDryer(EasyDRY)",
  },
  {
    title: "Safe Ripe™ (Ripening Gas Generator)",
    href: "/OurProduct/SafeRipe(RipeningGasGenerator)",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="bg-none ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="pb-5 -px-3 tsxt-base">Our Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid bg-soft_green-secondary text-grey w-[400px] gap-3 p-4 rounded-xl md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
