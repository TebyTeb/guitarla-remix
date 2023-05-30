import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return [
    { title: 'GuitarLA - Sobre nosotros' },
    { description: 'Venta de guitarras, blog de música y más' }
  ]
}

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'preload', href: imagen, as: 'image' }
  ]
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>nosotros</h2>

      <div className='contenido'>
        <img src={imagen} alt='Imagen sobre nosotros' />
        <div>
          <p>
            Phasellus dictum lacus a ex viverra tempus. Curabitur sed nunc
            laoreet, pretium diam eu, gravida orci. Sed efficitur turpis non
            accumsan faucibus. Cras quis hendrerit metus. Quisque dapibus
            ultricies molestie. Maecenas feugiat condimentum mi, vitae ultrices
            augue aliquet non. Interdum et malesuada fames ac ante ipsum primis
            in faucibus.
          </p>
          <p>
            Suspendisse ante magna, varius non vehicula a, pellentesque sed
            mauris. Quisque in molestie urna. Aliquam sed mauris ornare, blandit
            nulla eget, mollis tellus. Sed arcu lacus, dictum et interdum quis,
            viverra ac felis. Donec sodales quam eget risus euismod mattis.
            Morbi eu tempus nisl. Suspendisse quis nunc laoreet arcu accumsan
            venenatis sed laoreet justo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
    </main>
  )
}
export default Nosotros
