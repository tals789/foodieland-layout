import Logo from '@/components/Logo'
import clsx from 'clsx'
import './Header.scss'
import Socials from '@/components/Socials'
import BurgerButton from '@/components/BurgerButton'

export default ({ url }) => {
  const navigationMenu = [
    { label: 'Home', href: '/' },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Blog', href: '/blog'  },
    { label: 'Contact', href: '/contact' },
    { label: 'About us', href: '/about' },
  ]


  return (
    <header className='header' data-js-mobile-menu=''>
      <div className="header__inner container">
        <Logo className='header__logo'/>

        <nav className="header__menu" data-js-mobile-menu-overlay=''>
          <ul className="header__menu-list">
            {navigationMenu.map(({ label, href }) => (
              <li className='header__menu-item'>
                <a href={href} className={clsx('header__menu-link', href === url && 'is-active')}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        
        <Socials className='header__soc1als'/>

        <BurgerButton
          className="header__burger-button visible-mobile" 
          extraAttrs={{ 'data-js-mobile-menu-burger-button': '' }}
        />
      </div>
    </header>
  )
}
