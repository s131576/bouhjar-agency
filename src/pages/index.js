import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import * as styles from '../styles/home.module.css'
import MOVIE from '../components/moviesBundle.js'

const IndexPage = ({
  data: {
    wpPage: { homeFields },
  },
}) => {
  const image = getImage(homeFields.picture.localFile)
  return (
    <Layout>
      <section className={styles.rockhome}>
      <div>
      <h1>{homeFields.title}</h1>
      <div
            dangerouslySetInnerHTML={{
              __html: homeFields.description,
            }}
          />
          <GatsbyImage
            image={image}
            alt={homeFields.picture.altText}
          />
      </div>
      <div className={styles.popcorn}>
        <h1>So... Enjoy and</h1>
        <p>buy some popcorn!!!!!!!!!</p>
       <StaticImage className={styles.popcornImage}
        alt="randomized unsplash image!"
        src="../images/popcorn.jpg"
      />
      </div>
      </section>
      
      <h2 className={styles.recommend}> Recommended Movies</h2>
      <div className={styles.picturemove}>
      <section className={styles.picturemovebody}>
        <div className={styles.card}>
      {homeFields.featuresProducts.map(movie => {
        return <div className={styles.homepicture}> <MOVIE slug={`Movie/${movie.slug}`} key={movie.id} movie={movie} /> </div>
      })}
      </div>
      </section>
      </div>
    </Layout>
  )
}
export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homeFields {
      featuresProducts {
        ... on WpMovie {
          id
          slug
          moviesFields {
            title
            description
            picture {
               altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: false})
                }
              }
            }
          }
        }
      }
      title
      description
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}

`

export default IndexPage