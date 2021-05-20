function ContactButton() {
  return (
    <button className='py-2 px-6 border-2 border-maingreen text-maingreen rounded'>
      <span className='flex gap-2 items-center'>
        <img src='/assets/img/icons8-phone.svg' className='h-3' />
        <h3 className='font-bold'>Contact</h3>
      </span>
    </button>
  )
}

export default ContactButton
