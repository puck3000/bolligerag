export default function Section(props) {
  return (
    <section className='pt-7 pb-12 px-6 lg:grid lg:grid-cols-9 max-w-fhd m-auto'>
      {props.children}
    </section>
  )
}
