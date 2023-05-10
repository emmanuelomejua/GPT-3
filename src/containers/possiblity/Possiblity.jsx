import './possiblity.css'
import possiblity from '../../asset/possibility.png'

const Possiblity = () => {
  return (
    <section className='gpt3__possibility section__padding' id='possiblility'>
      <div className="gpt3__possibility-img">
        <img src={possiblity} alt="Possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request really access to get started!</h4>
        <h1 className="gradient__text">The posssiblilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, temporibus repellat nulla, dolorum quas, adipisci aliquam inventore numquam tempora consequuntur quae quaerat minima laudantium at asperiores. Numquam recusandae velit tenetur?</p>
        <h4>Request for early access.</h4>
      </div>
    </section>
  )
}

export default Possiblity
