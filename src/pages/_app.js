import '@/styles/globals.css'
import FloatingNavbar from '@/components/floatingNavbar';
import Footer from '@/components/footer';


export default function App({ Component, pageProps }) {
  return (
    <main>
      <FloatingNavbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

