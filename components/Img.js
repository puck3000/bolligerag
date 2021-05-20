import { urlFor } from '../lib/sanity'

function Img({ img }) {
  return <img src={urlFor(img).url()} alt='' />
}

export default Img
