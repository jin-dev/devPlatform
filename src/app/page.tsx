
"use client";
import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from 'components/header/Navbar';
import { VideoBackground } from 'components/VideoBackground';
import "./globals.css";

export default function Home() {

  const StyledSection = styled.section`
  padding: 10px;
  width: 100%;
  height: 118vh;
  display: flex;
  background-color: black;
  flex-direction: row;
  justify-content: space-evenly;

  position: relative;
  overflow: hidden; /* Hide any content that may overflow from the iframe */
   /* Customize the video overlay */
   &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* You can adjust the opacity as needed */
  }

`

const StyledSection2 = styled.section`
  padding: 10px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid red;
`
  
  
  return (
    
    <Fragment>
      
      <StyledSection>
      <Navbar/>
      <iframe
          title="YouTube Video"
          src="https://www.youtube.com/embed/dlMCikRF1s8?playlist=dlMCikRF1s8&autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
      ></iframe>
      </StyledSection>
      <StyledSection2>

        <div>section 2 </div>
 
      </StyledSection2>
    </Fragment>
  )  
}




