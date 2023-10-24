import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FooterTop = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate("/signin");
  }
  
  return (
    <div className='w-full bg-white py-6'>
      <div className='w-full border-t-[1px] border-b-[1px] py-8'>
        <div className='flex flex-col items-center justify-center text-[13px] space-y-1'>
          <p className='tracking-wide'>See personalized recommendations</p>
          <button onClick={handleButtonClick} className='bg-[#ffce52] rounded-md px-24 py-2 text-[12px] border border-yellow-600 font-semibold tracking-wide active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200'>Sign in</button>
          <p className='text-[11px] tracking-wide'>
            New Customer?
            <Link to="/registration" className='text-[#0078be] hover:text-yellow-500 cursor-pointer'>Start here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
