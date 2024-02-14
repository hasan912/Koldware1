'use client'
import  Link  from 'next/link';
import React from 'react';
import { NavigationMenuDemo } from './NavigationMenu';


const Nav = ({containerStyles,listStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <ul className={`${listStyles}`}>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href='/About'>About</Link></li>
             <li> <NavigationMenuDemo/></li>
            {/* <li><Link href={'/FeedBack'}>FeedBack</Link></li> */}
            <li><Link href={'/Contact'}>Contact Us</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;
