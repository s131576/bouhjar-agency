import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from '../../styles/movie.module.css'

const movieDetail = ({
  data: {
    wpMovie: {
      moviesFields: movie,
      genres: { nodes: genre },
    } } }) => {
  const image = getImage(movie.picture.localFile)
  let tekst=movie.cast.split(',')
  tekst=tekst.join(' - ')
  return (
    <Layout pageTitle="movie templates">
      <div>
        <section>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.genres}>
          {genre.map((role, i) => (
            <span key={i}>
              {role.name} {i + 1 < genre.length && "/"}
            </span>
          ))}
        </div>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: movie.description }} />
        </section>
        <section className={styles.movieContainer}>
        <div className={styles.trailerImage} >
            <GatsbyImage image={image} alt={movie.picture.altText} />
        </div>
        </section>
        <section>
        <div>
        <p><span >Rating: </span>{movie.rating}/10</p>  
        <p><span>Director: </span>{movie.director}</p>
        <p><span>Producer: </span>{movie.producer}</p>
        <p><span>Cost: €</span>{movie.cost} Million </p>
        <p><span>Revenue: €</span>{movie.revenue} Million</p>
        <p><span>Cast:</span> {tekst || movie?.cast}</p>
        </div>
        </section> 
      </div>
    </Layout>
  )
}
export const query = graphql`
query ($slug:String) {
  wpMovie(slug: {eq: $slug}) {
    moviesFields {
      title
      description
      director
      cost
      cast
      producer
      rating
      revenue
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData( width:900 height:503 placeholder: BLURRED  aspectRatio:1)
          }
        }
        altText
      }
      trailer {
        mediaItemUrl
      }
    }
    genres {
      nodes {
        name
      }
    }
  }
}
`
export default movieDetail