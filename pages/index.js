import Head from 'next/head'

import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity'
import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'

export default function Index({ content, footer, settings }) {
  const homeData = content[0].inhalt
  const footerData = footer[0]
  return (
    <div className='min-h-screen flex flex-col'>
      <Head>
        <title>Bolliger Treuhand AG | Home</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Home homeData={homeData} />
      <Footer footerData={footerData} />
    </div>
  )
}

const contentQuery = groq`*[_id == "home"]`
const footerQuery = groq`*[_id == "footer"]{
  ...,
  "news": news[]{
    _key,
    actionString,
    titleString,
    "url": file.asset->url
  }
}`

export async function getStaticProps() {
  let content = await getClient().fetch(contentQuery)
  let footer = await getClient().fetch(footerQuery)

  return {
    props: {
      content: content || null,
      footer: footer || null,
    },
    revalidate: 5,
  }
}
