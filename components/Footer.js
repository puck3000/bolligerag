import Bottom from './Bottom'
import Links from './Links'
import News from './News'
import Section from './Section'

export default function Footer({ footerData }) {
  const {
    news,
    newsTitle,
    newsButton,
    links,
    linksTitle,
    contactByline,
    contactHeader,
    copyright,
  } = footerData

  return (
    <footer className='flex-1 flex flex-col'>
      <div id='news'>
        <Section>
          <News news={{ newsTitle, news, newsButton }} />
        </Section>
      </div>
      <div>
        <Section>
          <Links links={{ links, linksTitle }} />
        </Section>
      </div>
      <div id='bottom'>
        <Section>
          <Bottom bottom={{ contactByline, contactHeader, copyright }} />
        </Section>
      </div>
      <section className='block w-full py-8 px-6 text-white text-center text-base bg-grey flex-1'>
        <p className='opacity-50'>Copyright 2021 Bolliger Treuhand AG</p>
        <p className='opacity-50'>All rights reserved</p>
      </section>
      <style jsx>
        {`
          #news {
            background: transparent
              linear-gradient(
                252deg,
                rgba(226, 229, 240, 0.5) 0%,
                rgba(223, 234, 233, 0.5) 100%
              )
              0% 0% no-repeat padding-box;
          }
          #bottom {
            background: transparent
              linear-gradient(252deg, #e2e5f0 0%, #dfeae9 100%) 0% 0% no-repeat
              padding-box;
            padding-top: 1.5rem;
          }
        `}
      </style>
    </footer>
  )
}
