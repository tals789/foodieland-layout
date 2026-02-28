import clsx from 'clsx'
import './CategoryCard.scss'
import { Image } from 'minista'

export default ({ title, imgSrc, color }) => {
  return (
    <article className={clsx('category-card')}>
      <a href="/" className='category-card__body' style={{ '--categoryCardColor': color }}>
        <div className="category-card__image-wrapper" style={{
          '--categoryCardImage': `url("${imgSrc}")`
        }}
        >
          <Image src={imgSrc} className={`category-card__image`}/>
        </div>
        
        <h3 className='category-card__title h6'>{title}</h3>
      </a>
    </article>
  )
}