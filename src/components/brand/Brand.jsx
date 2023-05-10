import './brand.css'
import { goggle, slack, shopify, dropbox, atlassian } from './imports'

const Brand = () => {
  return (
    <section className='gpt3__brand section__padding'>
      <div className="">
        <img src={goggle} alt="" className="" height={26}/>
      </div>

      <div className="">
        <img src={slack} alt="" className="" height={26}/>
      </div>

      <div className="">
        <img src={atlassian} alt="" className="" height={26}/>
      </div>

      <div className="">
        <img src={dropbox} alt="" className="" height={26}/>
      </div>

      <div className="">
        <img src={shopify} alt="" className="" height={26}/>
      </div>
    </section>
  )
}

export default Brand
