import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();

  return (
    <div>
        <p>There was an error: {error.message}</p>
        <pre>{error.status} - {error.statusText}</pre>
    </div>
  )
}

export default Error