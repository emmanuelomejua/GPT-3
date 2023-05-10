import FeatureA from "../../components/featureA/FeatureA"
import './features.css'

const featutres = [
  {
    id: 0,
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit, porro ipsa velit consequuntur quas qui repellendus maxime voluptates similique molestias necessitatibus magnam dignissimos quod officia ad laboriosam natus voluptatibus.'
  },
  {
    id: 1,
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit, porro ipsa velit consequuntur quas qui repellendus maxime voluptates similique molestias necessitatibus magnam dignissimos quod officia ad laboriosam natus voluptatibus.'
  },
  {
    id: 2,
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit, porro ipsa velit consequuntur quas qui repellendus maxime voluptates similique molestias necessitatibus magnam dignissimos quod officia ad laboriosam natus voluptatibus.'
  },
  {
    id: 3,
    title: 'Realityboy law county',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit, porro ipsa velit consequuntur quas qui repellendus maxime voluptates similique molestias necessitatibus magnam dignissimos quod officia ad laboriosam natus voluptatibus.'
  },
]

const Features = () => {
  return (
    <section className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>The Future is now and you need to realize it. Step into future today & make it happen</h1>
        <p className="">Request early access to get started</p>
      </div>

      <div className="gpt3__features-cont">
        {featutres.map((feature)=> (
          <FeatureA title={feature.title} text={feature.text} key={feature.id}/>
        ))}
      </div>
    </section>
  )
}

export default Features


// section__padding