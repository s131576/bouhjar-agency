import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import movieBundle from '../../components/moviesBundle.js'
import MOVIE from '../../components/moviesBundle.js'
import * as styles from '../../styles/movies.module.css'

const moviesPage = ({data:{allWpMovie:{edges},wpPage:{actorFields}}}) => {
  const image=getImage(actorFields.picture.localfile)
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
        {edges.map(({node:movie})=>{
           return <MOVIE key={movie.id} slug={movie.slug} movie={movie} />
        })}
      </div>
      </section>
      </div>
    </Layout>
  )
}
export const query=graphql`
query{
  wpPage(slug: {eq: "movies"}) {
    actorFields {
      title
      description
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH )
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