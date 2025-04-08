import React from 'react';

const Navbar = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <header className="px-6 py-12 flex justify-center items-center">
      <div className="fixed p-1.5 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 rounded-full ">
        <nav className="flex justify-center items-center p-4 bg-black rounded-full text-white transition-all duration-300">
          <ul className="flex space-x-6 font-semibold">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative px-2 py-1 hover:text-indigo-400 transition-all duration-300 ease-in-out inline-block transform hover:scale-110 origin-center"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;