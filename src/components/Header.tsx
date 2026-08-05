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
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-md shadow-md" style={{backgroundColor:"#f7f5f0", opacity:"0.9"}}> 
    <div className="max-w-[1240px] mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">
  
  <span className="font-['Space_Grotesk'] font-bold text-[22px] tracking-tight text-foreground leading-none">Frascio</span>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()} >
             <span className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"> INSIGINIA </span>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className={navigationMenuTriggerStyle()}>
               <span className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"> MULTICARE </span>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#catalog" className={navigationMenuTriggerStyle()}>
             <span className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"> CATALOG </span>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
              <span className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"> COMFORT </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button>
         <span className="font-['IBM_Plex_Mono'] uppercase text-[11px] tracking-[0.08em] px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity cursor-pointer">  View Range </span>
        </Button>
    </div>
    
    </header>
  )
}