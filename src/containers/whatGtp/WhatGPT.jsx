import FeatureA from '../../components/featureA/FeatureA'
import Feature from '../../components/feature/Feature'
import './whatgtp.css'

const WhatGPT = () => {

  const feature = [
    {
      id: 0,
      title: 'Chatbots',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit, porro ipsa velit consequuntur quas qui repellendus maxime voluptates similique molestias necessitatibus magnam dignissimos quod officia ad laboriosam natus voluptatibus.'
    },
    {
      id: 1,
      title: 'Knowledgebase',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit, porro ipsa velit consequuntur quas qui repellendus maxime voluptates similique molestias necessitatibus magnam dignissimos quod officia ad laboriosam natus voluptatibus.'
    },
    {
      id: 2,
      title: 'Education',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit, porro ipsa velit consequuntur quas qui repellendus maxime voluptates similique molestias necessitatibus magnam dignissimos quod officia ad laboriosam natus voluptatibus.'
    },
  ]
  return (
    <main className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
          <FeatureA title='What is GPT-3 ?' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit, porro ipsa velit consequuntur quas qui repellendus maxime voluptates similique molestias necessitatibus magnam dignissimos quod officia ad laboriosam natus voluptatibus.'/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The Possibility are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>

      <div className="gpt3__whatgpt3-cont" >
      { feature.map((item)=> (
            <Feature title={item.title} text={item.text} key={item.id} />
        ))
      }
       </div>
    </main>
  )
}

export default WhatGPT




//gradient__text