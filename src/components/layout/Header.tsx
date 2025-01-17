import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import Image from "next/image"

const Header = () => {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logos/money.svg"
            alt="Grants.fun Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="font-semibold">grants.fun</span>
        </div>
        <Button variant="default" size="sm" className="hidden sm:flex">+ Connect Wallet</Button>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
} 

export default Header;