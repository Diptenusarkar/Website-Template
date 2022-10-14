import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

const eyevariable = {
  visible: {
    x: [-2.3, 2.3],
    transition: {
      yoyo: Infinity,
      duration: 0.7,
      ease: 'easeInOut'
    }
  }
}

const NotFound = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=BioRhyme&family=Cabin+Sketch:wght@700&family=IBM+Plex+Serif:ital@1&family=Monoton&family=Montserrat+Alternates:wght@500&family=Open+Sans:wght@300&family=Share+Tech+Mono&family=Special+Elite&display=swap" rel="stylesheet" />
      </Head>
      <main><div className="wrapper">
        <div className="robot"><svg xmlns="http://www.w3.org/2000/svg" height="300" width="300" viewBox="0 0 50 50">
          <symbol id="New_Symbol_14" viewBox="-6.5 -6.5 13 13">
            <path fill="#ffd4c3" stroke="#504b46" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M0-6c2.2 0 4.1 1.5 4.7 3.5C6.3-2.5 6.4 0 5 0v1c0 2.8-2.2 5-5 5s-5-2.2-5-5V0c-1.4 0-1.3-2.5.2-2.5C-4.1-4.5-2.2-6 0-6z" /><circle cx="-1.6" cy="-.1" r=".1" fill="#ffc258" />
            <path fill="#4f4b45" d="M-1.6.5c-.3 0-.6-.3-.6-.6s.2-.7.6-.7c.3 0 .6.3.6.7s-.3.6-.6.6z" /><circle cx="1.6" cy="-.1" r=".1" fill="#ffc258" />
            <path fill="#4f4b45" d="M1.6.5C1.3.5 1 .2 1-.1s.3-.6.6-.6.6.3.6.6-.2.6-.6.6z" /><circle cx="-3" cy="-1.5" r=".5" fill="#fabfa5" /><circle cx="3" cy="-1.5" r=".5" fill="#fabfa5" />
            <path fill="none" stroke="#504b46" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M-1.2-3c.8-.5 1.7-.5 2.5 0" /></symbol><g id="Icons"><g id="XMLID_725_"><ellipse id="XMLID_1186_" cx="24" cy="45.5" fill="black" opacity=".15" rx="19.5" ry="1.5" />
              <path id="XMLID_1191_" fill="#D1D1D1" d="M42 40.5c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V27c0-9.9 8.1-18 18-18s18 8.1 18 18v13.5z" />
              <path id="XMLID_1190_" fill="#fff" d="M24 9C14.1 9 6 17.1 6 27v5c0-9.9 8.1-18 18-18s18 8.1 18 18v-5c0-9.9-8.1-18-18-18z" />
              <path id="XMLID_1189_" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M42 40.5c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V27c0-9.9 8.1-18 18-18s18 8.1 18 18v13.5z" />
              <path id="XMLID_1188_" fill="#c0dceb" d="M30.5 44c0 1.1-.9 2-2 2h-9c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v8z" />
              <path id="XMLID_1187_" fill="#adc4d9" d="M17.5 38.5h13v2h-13z" />
              <path id="righthand" fill="#6D8299" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M45.5 36.5l-3.5 2V26l3.5 2z" />
              <path id="lefthand" fill="#6D8299" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.5 36.5l3.5 2V26l-3.5 2z" />
              <g><path id="XMLID_1183_" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M24 9c.2-1 2.5-8 10.5-6.7" /><circle id="XMLID_1182_" cx="36" cy="3.5" r="2.5" fill="#ff6242" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" /></g>
              <path id="XMLID_1181_" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M30.5 44c0 1.1-.9 2-2 2h-9c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v8z" />
              <path id="XMLID_1180_" fill="#ff6242" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M30.5 38.5h-13V36c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v2.5z" />
              <path id="XMLID_1179_" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M33.5 11.8C30.7 10.1 27.5 9 24 9s-6.7 1-9.5 2.7V24h19V11.8z" /><circle id="XMLID_1178_" cx="32.5" cy="25" r="5" fill="#00dfeb" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" /><motion.circle id="eyes" variants={eyevariable} animate="visible" cx="32.5" cy="25" r="2" fill="#627b8c" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" /><circle id="XMLID_1176_" cx="15.5" cy="25" r="5" fill="#00dfeb" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" /><motion.circle id="eyes" variants={eyevariable} animate="visible" cx="15.5" cy="25" r="2" fill="#627b8c" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" /></g></g></svg>
        </div>
        <div className="TextHolder">
          <div className="Texts">
            <div className="FourOhFour">404</div>
            <div className="Maybe">Ouch.. Something's Wrong.. Maybe.. We have <span className="prob">SOLUTION HERE</span></div>
            <div className="Bad">My Bad this page couldn't be found.</div>
            <a href="./" className="Return">RETURN HOME</a>
          </div>
        </div>
      </div></main></>

  )
}

export default NotFound
