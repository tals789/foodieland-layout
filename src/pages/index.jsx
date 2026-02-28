import Banner from '@/sections/Banner'
import Categories from '@/sections/Categories'
import Hero from '@/sections/Hero'
import InstagramView from '@/sections/InstagramView'
import Recipes from '@/sections/Recipes'
import RecomendationRecipes from '@/sections/RecomendationRecipes'
import Subcribe from '@/sections/Subcribe'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
      <Banner />
      <InstagramView />
      <RecomendationRecipes />
      <Subcribe />
    </>
  )
}
