import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "@/components/Navbar/Navbar"
import Footer from '@/components/Footer/Footer';
import '../styles/Home.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
