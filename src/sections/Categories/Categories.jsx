import Section from '@/layouts/Section'
import './Categories.scss'
import Grid from '@/components/Grid'
import CategoryCard from '@/components/CategoryCard'
import categories from './data.json'

export default () => {

  return (
    <Section
      title='Categories'
      titleId='categories'
      linkLabel='View All Categories'
    >
      <Grid columns={6}>
        {categories.map((category, index) => <CategoryCard {...category }  key={index}/>)}
      </Grid>
    </Section>
  )
}