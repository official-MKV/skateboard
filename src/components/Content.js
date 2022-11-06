import React from 'react'
import Discover from './Discover'
import Videos from './Videos'
import './Styles/content.css'

function PageContent() {
  return (
    <div className='page_content'>
        <Discover/>
        <Videos/>
    </div>
  )
}

export default PageContent
