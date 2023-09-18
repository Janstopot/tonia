import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import Navbar from "@/components/Navbar/Navbar"
import Footer from '@/components/Footer/Footer';
import '../styles/Home.module.css'
import { LanguageProvider } from '../hooks/LanguageContext';


import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LanguageProvider>
        <Navbar />
        <div className="content">
          <Component {...pageProps} />
        </div>
      </LanguageProvider>
      <Footer />
    </div>
  );
}
