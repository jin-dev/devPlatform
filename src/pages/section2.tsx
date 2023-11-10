import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i + 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

function Section2() {
  const StyledSection2 = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `
  useEffect(() => {
    // This code will run after the component has rendered
    const temp = document.getElementsByClassName(
      'thumbs animated',
    )[0] as HTMLElement
    temp.style.display = 'flex'
    temp.style.justifyContent = 'center'

    // Clean up the styles when the component unmounts
    return () => {
      temp.style.display = '' // Reset display to its original state
      temp.style.justifyContent = '' // Reset justifyContent to its original state
    }
  }, []) // The empty dependency array means this effect runs only once, similar to componentDidMount

  /*  const { count, increaseCount, decreaseCount, removeAllCount }: any = useStore(
    (state) => state,
  )

  const { id, setId }: any = IdStore((state) => state)
  */
  return (
    <StyledSection2>
      <Carousel>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotateZ: 360 }}>
          <img src="https://www.nespresso.com/ecom/medias/sys_master/public/28398747713566/kimgoeun-card-banner-visual-1120x630px.png" />
          <p className="legend">Example 1</p>
        </motion.div>
        <div>
          <img src="https://www.nespresso.com/ecom/medias/sys_master/public/28377816072222/230727-Home-Main-Banner-1120x630px-1-.png" />
          <p className="legend">Example 2</p>
        </div>
        <div>
          <img src="https://www.nespresso.com/ecom/medias/sys_master/public/27949602930718/202307-summer-acc-card-banner-1120x630px.png" />
          <p className="legend">Example 3</p>
        </div>
      </Carousel>
    </StyledSection2>
  )
}

export default Section2
