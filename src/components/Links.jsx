import React from 'react'
import { Link } from 'react-router-dom'

function Links({to, children}) {
  return (
    <Link to={to} className='text-white hover:underline no-underline uppercase'>
      <h1>{children}</h1>
    </Link>
  )
}

export default Links
