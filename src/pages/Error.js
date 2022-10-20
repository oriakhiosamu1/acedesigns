import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <div>
            <Link to='/'>Back Home</Link>
        </div>
        <h2>404</h2>
      <h2>Page Not Found</h2>
    </div>
  )
}

export default Error
