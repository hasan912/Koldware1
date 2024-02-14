import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import logo from '@/../../public/header/KWI logo.png'
const Header = () => {
  return (
    <header className="absolute w-full max-w-auto py-8 xl:py-10" >
    <div className="container mx-auto ">
      {/* logo nav (desktop) btn */}
      <div className="flex items-center justify-between ">
        {/* logo */}
        <Link href='/'>
          <Image
          src={logo}
          width={100}
          height={100}
          alt="KWI"
          className="w-20 h-20"></Image>
        </Link>
        {/* nav btn */}
        <div className="hidden xl:flex">
          <div className="flex items-center gap-x-12">
          <Nav containerStyles='flex items-center justify-between' listStyles='flex gap-x-12 text-white'/>
          <Button variant='outline' className="px-10 h-[58px]">download</Button>
          </div>
        </div>
      </div>
      {/* mobile nav */}
    <div className="xl:hidden absolute right-8 top-8"><MobileNav/></div>
    </div>
    </header>
  );
}

export default Header;
