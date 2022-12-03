import * as React from 'react';
import {Link} from 'gatsby';

const navBar=()=>{
  return(
       <nav>
        <ul className='linksPosition'>
          <li className='links'><Link to="/">Home</Link></li>
          <li className='links'><Link to="../../Movie">Movies</Link></li>
        </ul>
      </nav>
  )
}
export default navBar