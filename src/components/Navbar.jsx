import Logo from '../assets/icons/logo.svg?react'
import navigation from '../data/navigation.js'

function Navbar(){
     return (
    <>
      <nav className="w-fit flex items-center order-1 rounded-full bg-surface shadow-none lg:order-2 lg:py-1.25 lg:pl-1.5 lg:pr-7 lg:shadow-box">
        <ul className="flex items-center gap-5">
          <li>
            <a href={navigation[0].href} className="flex items-center p-0.75 rounded-full bg-background">
              <Logo />
            </a>
          </li>
          {navigation.slice(1).map((item) => (
            <li key={item.id} className="hidden lg:flex">
              <a href={item.href} className="flex items-center text-white text-base/6 font-regular">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </>
  )
}

export default Navbar