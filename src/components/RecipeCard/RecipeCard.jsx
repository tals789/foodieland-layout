import './RecipeCard.scss'
import { Image } from 'minista'
import Tags from '@/components/Tags'
import clsx from 'clsx'
import Icon from '../Icon'

export default ({ title, titleExtraClassName = 'h4', imgSrc, tags, isLiked, mode = '', className }) => {
  const likedButtonTitle = isLiked ? 'Dislike' : 'Like'


  return (
    <article className='recipe-card'>
      <a className={clsx('recipe-card__link', mode && `recipe-card__link--${mode}`, className)} href="/">
        <Image src={imgSrc} className={clsx('recipe-card__image')}/>

        <h3 className={clsx('recipe-card__title', titleExtraClassName)}>{title}</h3>

        <Tags className='recipe-card__tags' items={tags} />
      </a>
      <button className={clsx('recipe-card__button', isLiked && 'is-liked', `recipe-card__button--${mode}`)} type='button' aria-label={likedButtonTitle} title={likedButtonTitle}>
        <Icon name='heart' hasFill/>
      </button>
    </article>
  )
}