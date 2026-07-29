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
  
  <span className="font-bold">Frascio</span>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
              Link 1
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
              Link 2
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/services" className={navigationMenuTriggerStyle()}>
              Link 3
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
              Link 4
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button>View Range</Button>
    </div>
    
    </header>
  )
}