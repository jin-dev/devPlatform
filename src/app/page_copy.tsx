
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
  background-color: black;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid blue;
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
    <VideoBackground/>
      </StyledSection>
      <StyledSection2>
 
      </StyledSection2>
    </Fragment>
  )  
}




