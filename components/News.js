import { useState } from 'react'
import ActionButton from './ActionButton'

export default function News({ news }) {
  const [displayedNews, setdisplayedNews] = useState(news.news.slice([0], [3]))

  const moreButton = (
    <button
      onClick={() => setdisplayedNews(news.news)}
      className='font-bold text-xl leading-8 px-10 py-4 rounded border-2 border-maingreen transition-colors text-maingreen hover:text-white hover:bg-maingreen'
    >
      {news.newsButton}
    </button>
  )

  return (
    <>
      <section className='col-start-2 col-end-9'>
        <h2 className='sectionTitle'>{news.newsTitle}</h2>
        <ul className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-14'>
          {displayedNews &&
            displayedNews.map((entry) => {
              return (
                <li key={entry._key}>
                  <ActionButton entry={entry} />
                </li>
              )
            })}
        </ul>
        <div className='text-center '>
          {displayedNews.length > 3 ? '' : moreButton}
        </div>
      </section>
    </>
  )
}
