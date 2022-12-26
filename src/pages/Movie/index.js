import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Movie from '../../components/moviesBundle.js'
import * as styles from '../../styles/movies.module.css'

const moviesPage = ({ data: { allWpMovie: { edges }, wpPage: { actorFields } } }) => {

console.log("COPRYRIGHTS IMAGES:Red notice:https://www.allmovie.com/movie/red-notice-v702384 - Faster:https://www.imdb.com/title/tt1433108/mediaviewer/rm2524546560/?ref_=tt_ov_i -Skyscraper:https://www.imdb.com/title/tt5758778/mediaviewer/rm824746497/?ref_=tt_ov_i - Rampage:https://www.imdb.com/title/tt2231461/mediaviewer/rm2728020480/?ref_=tt_ov_i - Fast & Furious Presents: Hobbs & Shaw:https://www.imdb.com/title/tt6806448/mediaviewer/rm1367459073/?ref_=tt_ov_i - Black Adam:https://www.imdb.com/title/tt6443346/mediaviewer/rm2091778049/?ref_=tt_ov_i ");

  const image = getImage(actorFields.picture.localfile)
  return (
    <Layout pageTitle='Movies Dwayne Johnson'>
      <div className={styles.bodyMovies}>
        <GatsbyImage
          image={image}
          alt={actorFields.picture.altText}
        />
        <section className={styles.moviesIndexPage}>
          <h2>{actorFields.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: actorFields.description,
            }}
          />
          <div className={styles.eindelijk}>
            {edges.map(({ node: movie }) => {
              return <Movie key={movie.id} slug={movie.slug} movie={movie} />
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}
export const query = graphql`
query{
  wpPage(slug: {eq: "movies"}) {
    actorFields {
      title
      description
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED )
          }
        }
        altText
      }
    }
  }
  allWpMovie {
    edges {
      node {
        moviesFields {
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            altText
          }
        }
        slug
        id
      }
    }
  }
}
`

export default moviesPage;