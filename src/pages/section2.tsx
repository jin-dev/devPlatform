import React from 'react'
import styled from 'styled-components'
// import IdStore from 'components/zustand/idStore'
// import useStore from 'components/zustand/store'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

function Section2() {
  const StyledSection2 = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `
  /*  const { count, increaseCount, decreaseCount, removeAllCount }: any = useStore(
    (state) => state,
  )

  const { id, setId }: any = IdStore((state) => state)
  */
  return (
    <StyledSection2>
      <Carousel>
        <div>
          <img src="https://www.nespresso.com/ecom/medias/sys_master/public/28398747713566/kimgoeun-card-banner-visual-1120x630px.png" />
          <p className="legend">Example 1</p>
        </div>
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
