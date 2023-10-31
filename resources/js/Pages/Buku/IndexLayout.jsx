import React from 'react'
import Index from './Index'

function IndexLayout({auth, buku, banyak_buku}) {
  return (
    <Index user={auth.user} buku={buku}></Index>
  )
}

export default IndexLayout
