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
console.log("COPRYRIGHTS IMAGES:Red notice:https://www.allmovie.com/movie/red-notice-v702384 - Faster:https://www.imdb.com/title/tt1433108/mediaviewer/rm2524546560/?ref_=tt_ov_i -Skyscraper:https://www.imdb.com/title/tt5758778/mediaviewer/rm824746497/?ref_=tt_ov_i - Rampage:https://www.imdb.com/title/tt2231461/mediaviewer/rm2728020480/?ref_=tt_ov_i - Fast & Furious Presents: Hobbs & Shaw:https://www.imdb.com/title/tt6806448/mediaviewer/rm1367459073/?ref_=tt_ov_i - Black Adam:https://www.imdb.com/title/tt6443346/mediaviewer/rm2091778049/?ref_=tt_ov_i ");

  const image = getImage(movie.picture.localFile)
  let tekst=movie.cast.split(',')
  tekst=tekst.join(' - ')
  return (
    <Layout pageTitle="movie templates">
      <div>
        <section className={styles.moviePageIndex}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.genres}>
          {genre.map((role, i) => (
            <span key={i}>
              {role.name} {i + 1 < genre.length && "/"}
            </span>
          ))}
        </div>
        </section>
        <section className={styles.movieContainer}>
        <div className={styles.trailerImage} >
            <GatsbyImage image={image} alt={movie.picture.altText} />
            <div>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: movie.description }} />
            </div>
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
            gatsbyImageData( quality: 100, placeholder: BLURRED,height:400 )
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