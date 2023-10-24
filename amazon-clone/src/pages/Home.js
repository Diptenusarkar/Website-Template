import React from 'react'
import Banner from '../components/Home/Banner'
import Products from '../components/Home/Product'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='w-full -mt-[24px]  xl:-mt-36'>
        <Products />
      </div>
    </div>
  )
}

export default Home