import getAttrNameFromSelector from '@/utils/getAttrNameFromSelector'
import Swiper from 'swiper'
import { EffectCoverflow } from 'swiper/modules'



const rootSelector = '[data-js-slider]'

class Slider {
  constructor(rootElement) {
    this.rootElement = rootElement
    this.config = JSON.parse(this.rootElement.getAttribute(getAttrNameFromSelector(rootSelector)))
    this.init()
  }

  init() {
    new Swiper(this.rootElement, {
      modules: [EffectCoverflow],
      ...this.config,
    })
  }
}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection