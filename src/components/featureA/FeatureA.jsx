import './featureA.css'

const FeatureA = ({title, text}) => {
  return (
    <section className='gpt3__features-cont_featureA'>
     <div className="gpt3__features-cont_feature-title">
       <div/>
        <h2 className="">{title}</h2>
      </div>

      <div className="gpt3__features-cont_feature-text">
        <p>{text}</p>
      </div>
    </section>
  )
}

export default FeatureA
