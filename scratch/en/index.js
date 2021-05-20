import Head from 'next/head'
import Img from 'next/image'

import { groq } from 'next-sanity'
import { getClient, PortableText } from '../../lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'

import Cta from '../../components/Cta'

export default function Home({ home, footer, settings }) {
  const footerData = footer[0]
  const settingsData = settings[0]
  return (
    <div>
      <Head>
        <title>Bolliger Treuhand AG | Home</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>Navbar</nav>
      <main>
        {/* Home Hero */}
        <section>
          <PortableText blocks={home?.lead?.inhalt} />
          <PortableText blocks={home?.byline?.inhalt} />
          <Cta text={home?.heroCta.text} link={home?.heroCta} />
          {/* TODO: Mux mux */}
          <p>Video!</p>
        </section>
        {/* Services */}
        <section>
          <h2>{home.servicesTitle}</h2>
          {home.services && (
            <ul>
              {home.services.map((service) => {
                return <li key={service._key}>{service.text}</li>
              })}
            </ul>
          )}
          <Cta text={home.servicesCta.text} />
        </section>
        {/* TODO: REFACTOR footer section to app.js */}
        {/* News */}
        <section>
          <h2>News und Ankündigungen</h2>
          {footerData.news && (
            <ul>
              {footerData.news.map((entry) => {
                return <li key={entry._key}>{entry.actionString}</li>
              })}
            </ul>
          )}
        </section>
        {/* Useful Links */}
        <section>
          <h2>Nützliche Links</h2>
          {footerData.links && (
            <ul>
              {footerData.links.map((entry) => {
                return (
                  <li key={entry._key}>
                    <PortableText blocks={entry.desc.inhalt} />
                  </li>
                )
              })}
            </ul>
          )}
        </section>
        {/* footer */}
        <footer>
          <h2>
            <PortableText blocks={footerData.contactHeader.inhalt} />
          </h2>
          <PortableText blocks={footerData.contactByline.inhalt} />
          <div>Tel: {settingsData.showTel}</div>
          <div>Mail: {settingsData.showEmail}</div>
        </footer>
      </main>
    </div>
  )
}

const homeQuery = groq`*[_id == "homeEn"]`
const footerQuery = groq`*[_id == "footerEn"]`

const settingsQuery = groq`*[_id == "settings"]`

export async function getStaticProps() {
  let home = await getClient().fetch(homeQuery)
  let footer = await getClient().fetch(footerQuery)
  let settings = await getClient().fetch(settingsQuery)

  return {
    props: {
      home: home[0] || null,
      footer: footer || null,
      settings: settings || null,
    },
    revalidate: 5,
  }
}
