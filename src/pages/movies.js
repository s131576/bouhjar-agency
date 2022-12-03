import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
const moviesPage = ({data:{allWpMovie:{edges}}}) => {
  return (
    <Layout pageTitle='Movies Dwayne Johnson'>
    <main>
      <p>A list of the best movies in mine opinion from the actor: Dwayne Johnson (THE ROCK) </p>
      {edges.map((item)=>{
        const movies=item.node.moviesFields;
        return <p key={item.node.id}>{movies.title}:{movies.rating}/10</p>
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
        id
        moviesFields {
          title
          rating
        }
      }
    }
  }
}
`

export default moviesPage;