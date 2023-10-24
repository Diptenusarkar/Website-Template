import React from 'react'

const FooterMiddleList = ({ title, listItem }) => {
    return (
        <div className=''>
            <ul className='space-y-2'>
                <li className='footerLink cursor-text hover:no-underline font-bold pb-3 text-white'>{title}</li>
                {
            //  <--- This method not working properly --->
                    // listItem.map((item) => (
                    //     <li key={item._id} className="footerLink flex">{item.listData}</li>
                    // ))

                    listItem.map((item) => item.listData.map((data, index) => (
                        <li key={index} className="footerLink flex text-gray-300">{data}</li>
                        // here index does not represent the key from index.js(001,002,003) instead its default index (0,1,2,3)
                    )))
                }
            </ul>
        </div>
    )
}

export default FooterMiddleList