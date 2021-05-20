import Header from '../components/Header'

export default function Test() {
  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Header />
      <main className='flex-1 bg-green'>main</main>
      <footer className='h-24 bg-lightgreen'>footer</footer>
    </div>
  )
}
