import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Equipment from '../components/Equipment'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ChatbotComponent from '../components/ChatBot'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Cue-Bar Communications - Turnkey Broadcast Equipment Solutions</title>
        <meta name="description" content="Cue-Bar Communications - Your trusted partner for turnkey broadcast systems and studio equipment in East Africa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Equipment />
        <Contact />
        <ChatbotComponent />
      </main>
      <Footer />
    </div>
  )
}