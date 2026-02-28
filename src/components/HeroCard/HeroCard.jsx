import { Image } from 'minista'
import Icon from '../Icon'
import './HeroCard.scss'
import clsx from 'clsx'
import AuthorCard from '../AuthorCard'
import Button from '../Button'
import Tags from '../Tags'

export default ({ 
  className, 
  title,
  TitleTag = 'h2',
  description, 
  category, 
  tags = [],
  author,
  imgSrc
}) => {
  return (
    <div className={clsx('hero-card', className)}>
      <div className="hero-card__body">
        <header className="hero-card__category">
          <Image src={category.imgSrc} className='hero-card__category-image'/>

          <span>{category.label}</span>
        </header>

        <TitleTag className='hero-card__title'>
          {title}
        </TitleTag>

        <div className="hero-card__description">
          <p>{description}</p>
        </div>

        <Tags className='hero-card__tags' items={tags} type='rounded'/>

        <footer className="hero-card__footer">
          <AuthorCard className='hero-card__author' { ...author }/>
          <Button className='hero-card__button' href='/'>
            <span>View Recipes</span>
            <Icon name='play' hasFill/>
          </Button>
        </footer>

        <img
        className="hero-card__badge"
        src="/images/badge.svg"
        alt="Handpicked recipes"
        width={150}
        height={150}
        loading='lazy'
      />
      </div>

      <Image src={imgSrc} className='hero-card__image'/>
    </div>
  )
}