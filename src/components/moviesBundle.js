import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from '../styles/movies.module.css'
const Movie = ({ movie, slug }) => {
  const profile = getImage(movie.moviesFields.picture.localFile)
  return (
    <Link to={slug}>
      <div className={styles.moviebundelpage}>
      <div className={styles.tekstmovies}>
        {movie.moviesFields.title && <p>{movie.moviesFields.title}</p>}
      </div>
      <div className={styles.movies}>
      <GatsbyImage class={styles.containermovies} image={profile} alt={movie.moviesFields.picture.altText} />
      </div>
      </div>
    </Link>
  )
}
export default Movie