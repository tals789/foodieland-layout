import Section from '@/layouts/Section'
import './RecomendationRecipes.scss'
import Grid from '@/components/Grid'
import recomendations from './data.json'
import RecipeCard from '@/components/RecipeCard'

export default () => {
  return (
    <Section
      title='Try this delicious recipe to make your day'
      titleId='recomendations'
      description='Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim'
      className='recomendation-recipes'
    >
      <Grid columns={4}>
        {recomendations.map((recipe) => <RecipeCard {...recipe} titleExtraClassName='h6' className='recomendation-recipes__recipe-card'></RecipeCard>)}
      </Grid>
    </Section>
  )
}