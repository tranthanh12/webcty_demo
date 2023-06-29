import React from 'react'
import Banner from './Banner'
import companyContent from './Contentcompany'

const index = () => {
  return (
    <div className='body'>
        <main>
            <Banner></Banner>
            <companyContent></companyContent>
        </main>
    </div>
  )
}

export default index