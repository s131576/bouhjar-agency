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
  return (
    <Layout pageTitle="movie templates">
      <div>
        <section className={styles.indexmovie}>
        <article>
        <h1>{movie.title}</h1>
        <div className={styles.genres}>
          {genre.map((role, i) => (
            <span key={i}>
              {role.name} {i + 1 < genre.length && "/"}
            </span>
          ))}
        </div>
        </article>

        <article>
        <div className={styles.picturemovie}>
        <GatsbyImage image={image} alt={movie.picture.altText} />
        </div>
        </article>
        </section>

        <section>
        <article>
        <p><span>Rating:</span>{movie.rating}/10</p>
        <div dangerouslySetInnerHTML={{ __html: movie.description }} />
        <p><span>Director:</span>{movie.director}</p>
        <p><span>Producer:</span>{movie.producer}</p>
        <p><span>Cost:</span>{movie.cost}</p>
        <p><span>Revenue:</span>{movie.revenue}</p>
        <div dangerouslySetInnerHTML={{ __html: movie.cast }} />
        </article>
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
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
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