import Link from 'next/link'
import LangSwitcher from './LangSwitcher'

function Aside({ showNav, setShowNav }) {
  return (
    <aside
      onClick={() => setShowNav(false)}
      className={`fixed z-50 top-0 left-0 bottom-0 w-screen h-screen transition-transform transform ${
        showNav ? '' : '-translate-x-full '
      }`}
    >
      <nav className='bg-maingreen h-full md:w-64 flex flex-col'>
        <div className='pl-12 pt-16 text-white'>
          <button onClick={() => setShowNav(false)}>arrow</button>
        </div>

        <ul className='text-white text-xl pt-24 pl-12 flex-1'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/dienstleistungen'>
              <a>Dienstleistungen</a>
            </Link>
          </li>
          <li>
            <Link href='/ueber-uns'>
              <a>Über uns</a>
            </Link>
          </li>
          <li>
            <Link href='/downloads'>
              <a>Downloads</a>
            </Link>
          </li>
          <li>
            <Link href='/kontakt'>
              <a>Kontakt</a>
            </Link>
          </li>
        </ul>
        <div className='text-white pl-12 pb-8'>
          <LangSwitcher />
        </div>
      </nav>
      <style global jsx>{`
        aside {
          backdrop-filter: blur(3px);
        }
        // body {
        //   ${showNav && `overflow: hidden;`}
        // }
      `}</style>
    </aside>
  )
}

export default Aside
