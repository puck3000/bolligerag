import Link from 'next/link'
import Aside from './Aside'
import ContactButton from './ContactButton'
import LangSwitcher from './LangSwitcher'

function DesktopNav({ showNav, setShowNav }) {
  return (
    <>
      <nav>
        <ul className='md:justify-self-start lg:justify-self-auto grid grid-cols-9 justify-items-center items-center font-semibold'>
          <li>
            <button onClick={() => setShowNav(!showNav)}>
              <img src='/assets/img/hamburger.svg'></img>
            </button>
          </li>
          <li className='hidden lg:block lg:justify-self-start'>
            <Link href='/'>
              <a>
                <h2>Dienstleistungen</h2>
              </a>
            </Link>
          </li>
          <li className='hidden lg:block 2xl:justify-self-start '>
            <Link href='/'>
              <a>
                <h2>Über uns</h2>
              </a>
            </Link>
          </li>
          <li className='col-start-4 col-span-3 lg:col-start-5 lg:col-span-1'>
            <Link href='/'>
              <a>
                <img src='/assets/img/LogoBtrag.svg' />
              </a>
            </Link>
          </li>
          <li className='hidden lg:block lg:col-start-7 justify-self-end'>
            <LangSwitcher />
          </li>
          <li className='col-start-8 col-span-2'>
            <ContactButton />
          </li>
        </ul>
      </nav>
      <Aside showNav={showNav} setShowNav={setShowNav} />
    </>
  )
}

export default DesktopNav
