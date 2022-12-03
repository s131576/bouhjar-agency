import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
const moviesPage = ({data:{allWpMovie:{edges}}}) => {
  return (
    <Layout pageTitle='Movies Dwayne Johnson'>
    <main>
      <p>A list of the best movies in mine opinion from the actor: Dwayne Johnson (THE ROCK) </p>
      {edges.map((item)=>{
        const movies=item.node.moviesFields;
        const slug=item.node.slug;
        return <Link to={`/Movie/${slug}`}><p key={item.node.id}>{movies.title}</p>
        </Link>
      })}

    </main>
    </Layout>
  )
}
export const query=graphql`
query {
  allWpMovie {
    edges {
      node {
        moviesFields {
          title
          rating
        }
        id
        slug
      }
    }
  }
}
`

export default moviesPage;