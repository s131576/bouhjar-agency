import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/global.css'
import Navbar from './Navbar'
import Footer from './footer'
import { useStaticQuery,graphql } from 'gatsby'

const Layout = ({children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className='layout'>
      <title>{data.site.siteMetadata.title}</title>
      <header><h1 className='gatsbyTitle'>{data.site.siteMetadata.title}</h1></header>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout