import './Subscribe.scss'
import Button from '@/components/Button'

export default () => {
  return (
    <section
      className='subscribe container'
    >
      <div className="subscribe__inner">

        <h2 className="subscribe__title">Deliciousness to your inbox</h2>

        <div className="subscribe__description">
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>

        <form className='subscribe__form'>
          <label
          className='visually-hidden'
          htmlFor="email"
          name='email'
          >
            Email
          </label>

          <input className='subscribe__input' type="email" id='email' name='email' placeholder='example@gmail.com'/>

          <Button className='subscribe__button' type='submit'>Subscribe</Button>
        </form>
      </div>
    </section>
  )
}