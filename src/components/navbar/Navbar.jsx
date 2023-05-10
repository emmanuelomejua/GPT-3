import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../asset/logo.svg'
import { useState } from 'react'

//BEM : block element modifier

const Menu = () => (
    <>
     <p><a href='#home'>Home</a></p>
     <p><a href='#wgpt3'>What is GPT-3?</a></p>
     <p><a href='#possiblility'>Open AI</a></p>
     <p><a href='#features'>Case Studies</a></p>
     <p><a href='#blog'>Library</a></p>
    </>
)
const Navbar = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <main className='gpt3__navbar'>
      <section className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
            <img src={logo} alt='Logo' style={{color: 'white'}}/>
        </div>

        <div className="gpt3__navbar-links_cont">
            <Menu/>
        </div>
      </section>

      <section className='gpt3__navbar-sign'>
            <p>Sign In</p>
            <button type='button'>Sign Up</button>
      </section>

      <section className="gpt3__navbar-menu">
        { toggle ? 
         <RiCloseLine color='#fff' size={27} onClick={()=>setToggle(false)}/> :
         <RiMenu3Line color='#fff' size={27} onClick={()=>setToggle(true)}/>
        }

        { toggle && (
            <div className='gpt3__navbar-menu_cont scale-up-center'>
                <div className="gpt3__navbar-menu_cont-links">
                    <Menu/>
                <section className='gpt3__navbar-menu_cont-links-sign'>
                    <p>Sign In</p>
                    <button type='button'>Sign Up</button>
                </section>
                </div>
            </div>
        )}


      </section>

    </main>
  )
}

export default Navbar

