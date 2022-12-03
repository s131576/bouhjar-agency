import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
    <main>
      <title>Home Page</title>
      <h1>Welcome to Dwayne Johnson Movies</h1>
      <p>Lorem ipsum</p>
      <StaticImage
      alt="randomized unsplash image!"
      src="../images/example.png"
       />
    </main>
    </Layout>
  )
}

export default IndexPage