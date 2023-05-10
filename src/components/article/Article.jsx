import './article.css'


const Article = ({img, title, date}) => {
  return (
    <article className='gpt3__blog-cont_article'>
      <div className="gpt3__blog-cont_article-img">
        <img src={img} alt="Blog Images" height={100}/>
      </div>

      <div className="gpt3__blog-cont_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>

        <p>Read full article</p>
      </div>
    </article>
  )
}

export default Article
