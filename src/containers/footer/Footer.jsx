import './footer.css'
import logo from '../../asset/logo.svg'

const Footer = () => {
  return (
    <section className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step into he future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <section className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="Logo" />
          <p>30 Wodi new layput, ph. NG. All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>30 Wodi new layput, ph</p>
          <p>+234-1231234</p>
          <p>admin@outlook.info</p>
        
        </div>
      </section>

      <div className="gpt3__footer-copyright">
        <p>2022 GPT-3. All right reserved</p>
      </div>
    </section>
  )
}

export default Footer
