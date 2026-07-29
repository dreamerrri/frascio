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
    <header className="flex items-center justify-between px-6 py-4 sticky top-0 z-10 backdrop-blur-md shadow-md" style={{backgroundColor:"#f7f5f0", opacity:"0.9"}}> 
    
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
    </header>
  )
}