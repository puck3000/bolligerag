import { groq } from 'next-sanity'
import { getClient, PortableText, urlFor } from '../lib/sanity'
import Cta from '../components/Cta'
import Img from '../components/Img'

function Home({ homeData }) {
  return (
    <main>
      {/* Home Hero */}
      <div
        style={{
          background:
            'transparent linear-gradient(206deg, #E2E5F0 0%, #DFEAE9 100%) 0% 0% no-repeat padding-box',
        }}
      >
        <section className='pb-12 lg:px-6 lg:grid lg:grid-cols-9 lg:gap-8 lg:pt-16 lg:pb-20 lg:items-center lg:relative max-w-fhd m-auto'>
          <img
            className='mb-6 lg:col-start-5 lg:col-end-9'
            src={urlFor(homeData?.heroImg).url()}
            alt='mainImage'
          />
          <div className='px-6 z-10 lg:px-0 lg:row-start-1 lg:col-start-2 lg:col-end-5 '>
            <h1 className='mb-5 text-3xl leading-8 '>
              Über <b>40 Jahre</b>
              <br />
              <span className='text-maingreen'>
                <b>Bolliger Treuhand AG</b>
              </span>
            </h1>
            <div className='mb-7 text-2xl leading-7'>
              <PortableText blocks={homeData?.byline?.inhalt} />
            </div>
            {/* <PortableText blocks={homeData?.lead?.inhalt}/> */}
            <div className='text-center lg:text-left'>
              <Cta cta={homeData?.heroCta} />
            </div>
          </div>
          <img
            className='hidden z-0 lg:block absolute top-0 -left-6'
            src='/assets/img/backgroundB.svg'
            alt='decorative background B'
          />
        </section>
      </div>

      {/* Services */}
      <section className='pt-7 pb-12 px-6 lg:grid lg:grid-cols-9 max-w-fhd m-auto '>
        <h2 className='sectionTitle'>{homeData?.servicesTitle}</h2>
        {homeData.services && [
          <ul
            key='ul'
            className='mb-4 lg:col-start-2 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 '
          >
            {homeData.services.map((service) => {
              return (
                <li key={service._key} className='text-center mb-12'>
                  <figure>
                    <img
                      className='m-auto mb-4'
                      src={urlFor(service.icon).url()}
                      alt={service.text}
                    />
                    <figcaption className='text-base leading-6 font-semibold'>
                      {service.text}
                    </figcaption>
                  </figure>
                </li>
              )
            })}
          </ul>,
          <div key='cta' className='text-center lg:col-start-2 lg:col-span-7'>
            <Cta cta={homeData?.servicesCta} />
          </div>,
        ]}
      </section>
    </main>
  )
}

export default Home
