import '@/styles/globals.css'
import FloatingNavbar from '@/components/floatingNavbar';


export default function App({ Component, pageProps }) {
  return (
    <main>
      <FloatingNavbar />
      <Component {...pageProps} />
    </main>
  )
}

