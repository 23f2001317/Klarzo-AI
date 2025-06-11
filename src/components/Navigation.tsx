
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, UserRoundPlus } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { text: "Home", path: "/", color: "bg-blue-50" },
    { text: "About", path: "/about", color: "bg-purple-50" },
    { text: "Tips", path: "/tips", color: "bg-green-50" },
    { text: "Journal", path: "/journal", color: "bg-yellow-50" },
    { text: "Mood", path: "/mood", color: "bg-pink-50" },
    { text: "Talk", path: "/talk", color: "bg-orange-50" },
    { text: "Assessment", path: "/assessment", color: "bg-indigo-50" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/e664677a-81db-4481-a49b-b7186cd15088.png" 
            alt="Klarzo Logo" 
            className="klarzo-logo"
          />
          <span className="text-xl font-bold text-klarzo-700">Klarzo</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.text}>
                  <Link to={link.path}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        link.color,
                        isActive(link.path) && "text-klarzo-700 font-medium"
                      )}
                    >
                      {link.text}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Sign Up Button */}
        <Link to="/signup" className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="bg-peach-100 hover:bg-peach-200 text-gray-700 flex items-center gap-2"
          >
            <UserRoundPlus size={18} />
            <span className={isMobile ? "hidden" : "inline"}>Sign Up</span>
          </Button>
        </Link>

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="ml-2">
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col w-full h-screen bg-white pt-16">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-lg rounded-md",
                  link.color,
                  isActive(link.path) && "text-klarzo-700 font-medium"
                )}
                onClick={closeMobileMenu}
              >
                {link.text}
              </Link>
            ))}
            {/* Add Sign Up to mobile menu */}
            <Link
              to="/signup"
              className="px-4 py-2 text-lg rounded-md bg-peach-100 text-gray-700 flex items-center gap-2 mt-4"
              onClick={closeMobileMenu}
            >
              <UserRoundPlus size={18} />
              <span>Sign Up</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
