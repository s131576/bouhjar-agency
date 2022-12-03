import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

const movieDetail=({data:{wpMovie:{moviesFields:movie}}})=>{
  return(
    <Layout pageTitle="movie templates">
     <div>
     <h3>{movie.title}</h3>
     <p>Rating:{movie.rating}/10</p>
     <div dangerouslySetInnerHTML={{__html:movie.description}} />
     <p>Director:{movie.director}</p>
     <p>Producer:{movie.producer}</p>
     <p>Cost:{movie.cost}</p>
     <p>Revenue:{movie.revenue}</p>
     <div dangerouslySetInnerHTML={{__html:movie.cast }} />
     </div>
    </Layout>
  )
}
export const query=graphql`
query ($id: String) {
  wpMovie(id: {eq: $id}) {
    moviesFields {
      title
      rating
      description
      director
      producer
      cost
      revenue
      cast
    }
  }
}
`
export default movieDetail