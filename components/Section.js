export default function Section(props) {
  return (
    <section className='pt-7 pb-12 px-6 lg:grid lg:grid-cols-9 '>
      {props.children}
    </section>
  )
}
