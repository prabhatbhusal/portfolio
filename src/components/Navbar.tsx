import React from 'react'

const Navbar = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    {name: 'Blog', href: '/blog'},
    {name:'Projects', href: '/projects'},

  ]
  return (
    <div className="px-25 py-12 flex justify-center items-center">
      <nav className="flex fixed  justify-center items-center p-4 border-3 p-1 border-white transition ease-in-out duration 500 rounded-4xl text-white">

        <ul className="flex space-x-4 font-black">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-gray-400 transition ease-in-out duratio-500 ">{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
