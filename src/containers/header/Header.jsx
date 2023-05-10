import './header.css'
import people from '../../asset/people.png'
import ai from '../../assets/chatgpt.jpg'

const Header = () => {
  return (
    <main className='gpt3__header section__padding' id='home'>
      <section className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's build something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit, porro ipsa velit consequuntur quas qui repellendus maxime voluptates similique molestias necessitatibus magnam dignissimos quod officia ad laboriosam natus voluptatibus.</p>
        <div className="gpt3__header-content__input">
          <input type='email' placeholder='Your email address'/>
          <button>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="" className="" />
          <p>1600 new request access in the last 24 hours</p>
        </div>
        </section>

        <div className='gpt3__header-image'>
          <img src={ai} alt="" className=""/>
        </div>
     
    </main>
  )
}

export default Header
