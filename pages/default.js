import Head from 'next/head'

import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity'
import Header from '../components/Header'

export default function Default({ content, footer }) {
  const data = content[0].inhalt
  const footerData = footer[0]
  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Head>
        <title>Bolliger Treuhand AG</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='flex-1 bg-green'>{/* MAIN CONTENT HERE */}</main>
      <Footer footerData={footerData} />
    </div>
  )
}

const contentQuery = groq`*[_id == "home"]`
const footerQuery = groq`*[_id == "footer"]`

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
