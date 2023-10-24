import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SideNavSlider = ({ title, one, two, three }) => {


    return (
        <div className='pb-2 border-b-[1px] border-b-gray-300'>
            <h3 className='font-semibold font-titleFont text-lg  px-8 pt-4 pb-1 tracking-wide'>{title}</h3>
            <ul className='text-sm'>
                <li className='group flex justify-between pb-2 pt-2 px-8 hover:bg-zinc-200 cursor-pointer' > {one} <span className='text-[#798687] group-hover:text-black' > <KeyboardArrowRightIcon /> </span></li>
                <li className='group flex justify-between pb-2 pt-2 px-8 hover:bg-zinc-200 cursor-pointer' > {two} <span className='text-[#798687] group-hover:text-black' > <KeyboardArrowRightIcon /> </span></li>
                <li className='group flex justify-between pb-2 pt-2 px-8 hover:bg-zinc-200 cursor-pointer' > {three} <span className='text-[#798687] group-hover:text-black'> <KeyboardArrowRightIcon /> </span></li>
            </ul>
            {/* <hr className='mt-3 mb-3' /> */}
        </div>

    )
}

export default SideNavSlider