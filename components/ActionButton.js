function ActionButton({ entry }) {
  return (
    <a
      href={entry.url}
      className='bg-white px-5 pt-4 pb-3 border border-green rounded text-lg leading-5 flex flex-col justify-between mb-6 min-h-box'
    >
      {entry.titleString}
      <span className='text-sm text-maingreen font-bold flex items-center justify-end'>
        {entry.actionString}
        <img
          className='ml-2'
          src='assets/img/icons8-open_document.svg'
          alt='open-icon'
        />
      </span>
    </a>
  )
}

export default ActionButton
