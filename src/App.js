import './app.css'
import { Blog, Features, Footer, Possiblity, WhatGPT, Header } from './containers'
import { Cta, Navbar, Brand } from './components'

function App() {
  return (
    <main className='app'>
      <section className='gradient__bg'>
        <Navbar/>
        <Header/>
      </section>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possiblity/>
      <Cta/>
      <Blog/>
      <Footer/>
    </main>
  );
}

export default App;
