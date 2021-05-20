export default function Bottom({ bottom }) {
  return (
    <>
      <h3 className='text-2xl  leading-8 font-light mb-5 col-start-2 col-end-5'>
        Do you have questions, requests or suggestions?
      </h3>
      <p className='text-xl leading-6 mb-9 col-start-2 col-end-5'>
        We’re here to <span className='text-maingreen font-bold'>help</span>.
      </p>
      <div className='mb-5 col-start-6 col-end-8 row-start-1'>
        <a href='tel:+4144/446363' className='flex items-center'>
          <img
            src='/assets/img/icons8-phone.svg'
            alt='Phone Icon'
            className='mr-4 h-4 w-4'
          />
          <p className='text-xl leading-6'>044 744 63 63</p>
        </a>
      </div>
      <div className='mb-5 lg:col-start-6 lg:col-end-8 lg:row-start-2 xl:col-start-8 xl:col-end-10 xl:row-start-1'>
        <a href='mailto:info@btrag.ch' className='flex items-center'>
          <img
            src='/assets/img/icons8-important_mail.svg'
            alt='Mail Icon'
            className='mr-4 h-4 w-4'
          />
          <p className='text-xl leading-6'>info@btrag.ch</p>
        </a>
      </div>
      <div className='mb-5 col-start-6 col-end-8'>
        <a
          href='https://goo.gl/maps/5itgRVREqEgvWJor6'
          target='_blank'
          rel='noopener'
          className='flex items-baseline'
        >
          <img
            src='/assets/img/icons8-marker.svg'
            alt='Mail Icon'
            className='mr-4 h-4 w-4'
          />
          <p className='text-xl leading-6'>
            Bahnhofstrasse 8
            <br />
            8953 Dietikon
            <br />
            Switzerland
          </p>
        </a>
      </div>
    </>
  )
}
