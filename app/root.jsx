// DEPENDENCIAS
import {
  Meta,
  Link,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse
} from '@remix-run/react'
// ESTILOS
import styles from '~/styles/index.css'
// COMPONENTES
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
  return [
    { charset: 'utf-8' },
    { title: 'GuitarLA - Remix' },
    { viewport: 'width=device-width,initial-scale=1' }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang='es'>
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

/** Manejo de errores */
export function ErrorBoundary() {

  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className='error'>
          Status: {error.status} - {error.statusText}
        </p>
        <Link className='error-enlace' to='/'>Tal vez quieras volver a la página principal</Link>
      </Document>
    )
  }

  return (
    <Document>
      <p className='error'>
        Status: {error.status} - {error.statusText}
      </p>
      <Link className='error-enlace' to='/'>Tal vez quieras volver a la página principal</Link>
    </Document>
  )
}
