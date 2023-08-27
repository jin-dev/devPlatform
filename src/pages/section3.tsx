import React, { useRef} from 'react'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { styled } from 'styled-components';

const Section3 = () => {

    const containerRef = useRef(null);

    const { scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const bottomShadowValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"]
    );

    const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

    const topShadowValue = useTransform(
        scrollYProgress, 
        [0, 1],
        ["-25%", "100%"]
    );
    
    const StyledSection = styled.section`
         min-height: 100vh;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 100px auto;
    /* This is needed to prevent the image from "jittering" partway through the transition */
    overflow: hidden;
    background-color: black;
    `

    const TextCopy = styled.div`
          display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    font-size: 24px;
    margin-left: 5%;
    text-align: left;
    color:white;
    `

    const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    position: relative;  
    ` 

    const ImageInner = styled(motion.div)`
        
    `
    const BottomShadow = styled(motion.div)`
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%);
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    `

    const TopShadow = styled(motion.div)`
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 25%);
    height: 100%;
    width: 140%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    `

    


  return (
        <StyledSection ref={containerRef}>
            <TextCopy>
                <h2>Hello there It is my test case</h2>
            </TextCopy>
            <ImageContainer className='img-container'>
                <ImageInner style={{ translateX : imageValue}}>
                    <BottomShadow style={{ translateX : bottomShadowValue}}/>
                    <Image src='https://www.nespresso.com/ecom/medias/sys_master/public/27848432615454/0629-b2b-cardbanner-1120x630.png' alt=' a test case' width='500' height='500' />
                    <TopShadow style={{ translateX: topShadowValue}} />

                </ImageInner>
            </ImageContainer>
        </StyledSection>
  )
}

export default Section3;