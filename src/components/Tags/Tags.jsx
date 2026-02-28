import clsx from 'clsx'
import './Tags.scss'
import Icon from '../Icon'

export default ({ items, className, type = '' }) => {
  return (
  <div className={clsx('tags', className, type === 'rounded' && 'tags--rounded')}>
    <ul className="tags__list">
      {items.map(({ iconName, label }, index) => (
        <li className='tags__item' key={index}>
          <Icon name={iconName} hasFill />
          <span className='tags__label'>{label}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}