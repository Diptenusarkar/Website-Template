import React from 'react'
import Slider from "react-slick";
// import "./styles.css"
import styled from 'styled-components';
import {
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive,

} from "../../assets/index";

const Banner = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,

    };

    return (
        <div>
            <Carousel {...settings}>
                <Wrap >
                    <img className='ban' src={bannerImgOne} alt="banner" />
                </Wrap>
                <Wrap>
                    <img src={bannerImgTwo} alt="banner" />
                </Wrap>
                <Wrap>
                    <img src={bannerImgThree} alt="banner" />
                </Wrap>
                <Wrap>
                    <img src={bannerImgFour} alt="banner" />
                </Wrap>
                <Wrap>
                    <img src={bannerImgFive} alt="banner" />
                </Wrap>
            </Carousel>

        </div>
    )
}

export default Banner

const Carousel = styled(Slider)`

/* complete div of slider  */

    /* margin-top: 20px; */
    
    /* slider Next Button at the bottom*/
    ul li button {
        &:before {
            font-size:10px;
            color: white;
            /* color: rgb(150, 158,171); */
        }
    }
    body {
        z-index:-1;
    }
    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: hidden;
    }
    .slick-prev {
        left:50px;
        transform:scale(1.8);
    }
    .slick-next {
        right: 50px;
        transform:scale(1.8)
    }

    button {
        z-index: 1;
    }
    
`
const Wrap = styled.div`

/* img inside the slider */
    cursor: pointer;


`