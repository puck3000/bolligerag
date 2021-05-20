function Cta({ cta }) {
  return (
    <button
      className={`font-bold text-xl leading-8 px-10 py-4 rounded border-2 border-maingreen transition-colors ${
        cta?.inverted
          ? 'text-maingreen hover:text-white hover:bg-maingreen'
          : 'text-white bg-maingreen hover:bg-opacity-0 hover:text-maingreen'
      } `}
    >
      {cta.text}
    </button>
  )
}

export default Cta
