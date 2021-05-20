import { useState } from 'react'
import { useMediaQuery } from '../lib/useMediaQuery'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

function Header() {
  const [showNav, setShowNav] = useState(false)
  let isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <header className='p-6'>
      {isDesktop ? (
        <DesktopNav showNav={showNav} setShowNav={setShowNav} />
      ) : (
        <MobileNav showNav={showNav} setShowNav={setShowNav} />
      )}
    </header>
  )
}

export default Header
