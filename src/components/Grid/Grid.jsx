import clsx from 'clsx'
import './Grid.scss'

export default ({ children, columns = 1, className }) => {
  return (
    <ul className={clsx(`grid grid--${columns}`, className)}>
      {children.map((child, index) => (
        <li key={index} className='grid__item'>
          {child}
        </li>
      ))}
    </ul>
  )
}