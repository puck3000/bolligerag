import Link from 'next/link'
import Aside from './Aside'

function MobileNav({ showNav, setShowNav }) {
  return (
    <>
      <nav>
        <ul className='flex justify-between items-center'>
          <li className='w-1/3'>
            <Link href='/'>
              <a>
                <img className='h-14' src='/assets/img/LogoBtrag.svg' />
              </a>
            </Link>
          </li>
          <li className='mr-6'>
            <button onClick={() => setShowNav(!showNav)}>
              <img className='h-4' src='/assets/img/hamburger.svg'></img>
            </button>
          </li>
        </ul>
      </nav>
      <Aside showNav={showNav} setShowNav={setShowNav} />
    </>
  )
}

export default MobileNav
