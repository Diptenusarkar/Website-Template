import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SideNavSlider from './SideNavSlider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion"

const HeaderBottom = () => {
    const ref = useRef(); // using useRef to hide sidenavbar on outside clicks
    const [sidebar, setsidebar] = useState(false);
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setsidebar(false);
            }
        })
    }, [ref, sidebar])

    return (
        <div>
            <div className="main w-full h-[39px] px-2 bg-amazon_light text-white text-sm">
                <ul className='flex items-center'>
                    <li onClick={() => setsidebar(true)} sidebar={sidebar} className='headerHover py-[6px] font-bold gap-1'><MenuIcon /> All</li>
                    <li className='headerHover py-[6px] hidden md:inline-flex'>Today's Deals</li>
                    <li className='headerHover py-[6px] hidden md:inline-flex'>Customer Service</li>
                    <li className='headerHover py-[6px] hidden md:inline-flex'>Gift Cards</li>
                    <li className='headerHover py-[6px] hidden md:inline-flex'>Registry</li>
                    <li className='headerHover py-[6px] hidden md:inline-flex'>Sell</li>
                </ul>

                {
                    sidebar && (

                        <div className='z-50 w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-70'>
                            {/* using framer motion tool for the side navbar transition */}
                            <motion.div ref={ref} initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='w-full h-full relative'>
                                <div className='w-[85%] md:w-[350px] h-full overflow-y-scroll bg-white border border-black'>
                                    <div className='w-full bg-amazon_light text-white py-3 px-6 flex items-center gap-4 font-titleFont font-bold tracking-wide text-lg ' ><AccountCircleIcon />
                                        Hello, Sign In
                                    </div>

                                    <SideNavSlider
                                        title="Trending"
                                        one="Best Sellers"
                                        two="New Releases"
                                        three="Movers and Shakers"
                                    />
                                    <SideNavSlider
                                        title="Digital Content & Devices"
                                        one="Amazon Music"
                                        two="Kindle E-readers & Books"
                                        three="Amazon Appstore"
                                    />
                                    <SideNavSlider
                                        title="Shop By Department"
                                        one="Electronics"
                                        two="Computers"
                                        three="Smart Home"
                                    />
                                    <SideNavSlider
                                        title="Programs & Features"
                                        one="Gift Cards"
                                        two="Amazon live"
                                        three="International Shopping"
                                    />
                                    <SideNavSlider
                                        title="Help & Settings"
                                        one="Your Account"
                                        two="Customer Service"
                                        three="Chat with us"
                                    />

                                </div>
                                <span onClick={() => setsidebar(false)} className='absolute cursor-pointer flex top-0 left-[89%] md:left-[360px] text-white w-10 h-10 scale-150 pt-3'><CloseIcon /></span>

                            </motion.div>
                        </div >
                    )
                }
            </div>
        </div>
    )
}

export default HeaderBottom