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
            <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()} >
             <span className="font-['IBM_Plex_Mono'] "> INSIGINIA </span>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
               <span className="font-['IBM_Plex_Mono'] "> MULTICARE </span>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#catalog" className={navigationMenuTriggerStyle()}>
             <span className="font-['IBM_Plex_Mono'] "> CATALOG </span>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
              <span className="font-['IBM_Plex_Mono'] "> CONTACT </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button>
         <span className="font-['IBM_Plex_Mono'] ">  View Range </span>
       
        </Button>
    </div>
    
    </header>
  )
}