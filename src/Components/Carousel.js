import React from 'react';
import "./Carousel.css";
import { images } from "../Helpers/CarouselData";
import react, { useState } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowFowardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from "@material-ui/core/Button";


function Carousel() {

    const [currImg, setCurrImg] = useState(1)

    return (
        <div  className="carousel">
            <div 
            className="carouselInner" 
            style={{backgroundImage: `url(${images[currImg].img})`}}
            >
              


               <div className="left" onClick={() => {
                  currImg > 0 && setCurrImg(currImg - 1);
               }}
               >
                   <ArrowBackIosIcon style={{ fontSize: 30 }}/>
                   </div> 
               <div className="center"></div> 

               <div className="about">
                  <Button>About</Button>
               </div>

               <div className="contact">
                  <Button>Contact</Button>
               </div>
               
               <div className="right"  onClick={() => {
                 currImg < images.length -1 && setCurrImg(currImg + 1);
               }}
               >
                    
                   <ArrowFowardIosIcon style={{ fontSize: 30 }}/>
                   </div> 
            </div>
        </div>
    )
}

export default Carousel
