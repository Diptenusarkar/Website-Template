import React from 'react'
import FooterBottom from './FooterBottom'
import FooterMiddle from './FooterMiddle'
import FooterTop from './FooterTop'

const Footer = () => {
  return (
    <div className='font-titleFont'>
        <FooterTop/>
        <FooterMiddle/>
        <FooterBottom/>
    </div>
  )
}

export default Footer