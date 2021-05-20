import { urlFor } from '../lib/sanity'

export default function Links({ links }) {
  return (
    <>
      <section className='col-start-2 col-end-9'>
        <h2 className='sectionTitle'>{links.linksTitle}</h2>
        <ul className='grid grid-cols-1 auto-rows-fr md:grid-cols-3 items-end'>
          {links?.links.map((link) => {
            return (
              <li key={link._key} className='mb-6'>
                <a href={link.url}>
                  <figure className='text-center'>
                    <img
                      className='max-h-24 m-auto mb-4'
                      src={urlFor(link.img)}
                      alt={`Logo ${link.desc}`}
                    />
                    <figcaption className='text-xl leading-6 font-semibold'>
                      {link.desc}
                      {/* TODO: request, then insert Arrow */}
                    </figcaption>
                  </figure>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
