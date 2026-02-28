import { Image } from 'minista'
import './AuthorCard.scss'
import clsx from 'clsx'

export default ({
  className,
  imgSrc,
  name,
  date,

}) => {
  return (
    <div className={clsx('author-card', className)}>
      <Image 
      className='author-card__image'
      src={imgSrc}
      width={50}
      height={50}
      />

      <div className="author-card__body">
        <h3 className='author-card__name'>{name}</h3>
        <time datetime={date.dateTime} className="author-card__date">{date.label}</time>
      </div>
    </div>
  )
}