import React from 'react'
import { footerBottomItem } from '../../constants'

const FooterBottom = () => {
  const d = new Date();
  const date = d.getFullYear();
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='w-full grid grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-2 px-5 xl:px-0 place-content-center  text-gray-400'>
          {
            footerBottomItem.map((item) => (
              <div key={item._id} className='group cursor-pointer'>
                  <h3 className='text-[#ddd] text-xs font-bold group-hover:underline leading-3'>{item.title}</h3>
                  <p className='text-xs group-hover:underline tracking-wide'>{item.des}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <div className=' text-[#ddd] cursor-pointer text-[12px] flex gap-4 justify-center items-center mt-4'>
          <p className='hover:underline'>Conditions of Use</p>
          <p className='hover:underline'>Privacy Notice</p>
          <p className='hover:underline'>Your Ads Privacy Choices</p>
        </div>
        <div className=' text-[#ddd] text-[12px] flex justify-center items-center '>
          <p>© 1996-{date}, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom