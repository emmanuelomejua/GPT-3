import './blog.css'
import Article from '../../components/article/Article'
import { blog1 } from '../../imports'

const blogs = [
  {
    id: 1,
    date: 'May 3, 2022',
    title: 'GPT-3 and open AI is the future. Let us explore how it is',
    img: require('../../asset/blog02.png')
  },
  {
    id: 2,
    date: 'May 3, 2022',
    title: 'GPT-3 and open AI is the future. Let us explore how it is',
    img: require('../../asset/blog03.png')
  },
  {
    id: 3,
    date: 'May 3, 2022',
    title: 'GPT-3 and open AI is the future. Let us explore how it is',
    img: require('../../asset/blog04.png')
  },
  {
    id: 4,
    date: 'May 3, 2022',
    title: 'GPT-3 and open AI is the future. Let us explore how it is',
    img: require('../../asset/blog05.png')
  }
]

const Blog = () => {
  return (
    <section className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>A lot is happening, and we're already blogging about it!</h1>
      </div>
      <div className="gpt3__blog-cont">
        <div className="gpt3__blog-cont_groupA">
          <Article img={blog1} date='May 3, 2022' title='GPT-3 and open AI is the future. Let us explore how it is'/>
        </div>

    
        <div className="gpt3__blog-cont_groupB">
        { blogs.map((blog)=> (
          <Article img={blog.img} date={blog.date} title={blog.title} key={blog.id}/>
          ))
          }

        </div>
      </div>
    </section>
  )
}

export default Blog


//1 cor 4:9-10, eph 3:20