
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
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid white;
`
  
  
  return (
    
    <Fragment>
      <Navbar/>
      <StyledSection>
        <VideoBackground />
      </StyledSection>
    </Fragment>
  )  
}




