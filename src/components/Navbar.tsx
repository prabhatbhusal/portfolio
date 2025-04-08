import React from 'react'
import { RiSunLine,RiMoonLine } from '@remixicon/react'
const Navbar = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    {name: 'Blog', href: '/blog'},
    {name:'Projects', href: '/projects'},
    {name:<RiSunLine/>, href: '/sun'},
    {name:<RiMoonLine/>, href: '/moon'},
  ]
  return (
    <div className="">
      <nav className="flex fixed w-full justify-between items-center p-4 border-1 border-gray-800 rounded text-black">
        <div className="text-2xl font-bold ">.Porfolio </div>
        <ul className="flex space-x-4 font-semibold">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-gray-400">{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
