import Link from 'next/link'
import React from 'react'

function RoutingPage() {
  return (
    <div>
      
      <h1>Display User when click</h1>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <Link href={'/user/new'}>Click Me!</Link>
    </div>
  )
}

export default RoutingPage
