import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='gpt3__features-cont_feature'>
      <div className="gpt3__features-cont_feature-title">
       <div/>
        <h1 className="">{title}</h1>
      </div>
      <div className="gpt3__features-cont_feature-text">
        <p>{text}</p>
      </div>
      
    </div>
  )
}

export default Feature
