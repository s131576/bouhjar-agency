import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/global.css'
import Navbar from './Navbar'
import { useStaticQuery,graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
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
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header><h1 className='gatsbyTitle'>{data.site.siteMetadata.title}</h1></header>
      <Navbar />
      <main>
        <h1>{pageTitle}</h1>
        <div>
        {children}
        </div>
      </main>
      <footer>
        <p>Copyright©2022 Bouhjar Rachad</p>
      </footer>
    </div>
  )
}

export default Layout