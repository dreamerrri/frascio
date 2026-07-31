import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Header() {
  return (
    <header className="px-6 py-4 sticky top-0 z-10 backdrop-blur-md shadow-md padding-le" style={{backgroundColor:"#f7f5f0", opacity:"0.9"}}> 
    <div className="max-w-[1240px] mx-auto px-6 md:px-12 flex items-center justify-between">
  
  <span className="font-semibold">Frascio</span>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
              INSIGINIA
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
              MULTICARE
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#catalog" className={navigationMenuTriggerStyle()}>
              CATALOG
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
              COMFORT
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button>View Range</Button>
    </div>
    
    </header>
  )
}