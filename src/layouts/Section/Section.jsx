import Button from '@/components/Button'
import './Section.scss'
import clsx from 'clsx'

export default (props) => {
  const { 
    className, 
    title, 
    titleId, 
    description, 
    children,
    linkLabel,
    isHeaderVertical,

  } = props

  return (
    <section
      className={clsx('section', className)}
      aria-labelledby={titleId}
    >
      <header className={clsx('section__header', 'container', isHeaderVertical && 'section__header--vertical', )}>
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>

        {description && (
          <div className={clsx('section__description', isHeaderVertical && 'section__description--vertical')}>
            <p>{description}</p>
          </div>
        )}

        {linkLabel && (
          <Button 
          className='section__link' 
          href="/"
          mode='secondary'
          >
            {linkLabel}
          </Button>
        )}

      </header>

      <div className="section__body container">{children}</div>
    </section>
  )
}
