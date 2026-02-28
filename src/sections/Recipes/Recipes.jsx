import Section from '@/layouts/Section'
import './Recipes.scss'
import Grid from '@/components/Grid'
import RecipeCard from '@/components/RecipeCard'
import recipes from './data.json'
import RecipeBanner from '@/components/RecipeBanner'

export default () => {

  return (
    <Section
      title='Simple and tasty recipes'
      titleId='recipes'
      description='Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim'
      isHeaderVertical
    >
      <Grid columns={3}>
        {recipes.map((recipe) => {
          const { type, ...rest } = recipe

          if (type === 'banner') {
            return (
              <RecipeBanner { ...rest } key={recipe.title}/>
            )
          }

          return (
            <RecipeCard { ...rest } key={recipe.title} />
          )
        })}
      </Grid>
    </Section>
  )
}