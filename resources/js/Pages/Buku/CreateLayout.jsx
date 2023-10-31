import React from 'react'
import Create from './Create'

function IndexLayout({auth}) {
  return (
    <Create user={auth.user}></Create>
  )
}

export default IndexLayout
