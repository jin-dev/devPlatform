import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

function Section2() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="flex w-full flex-row justify-center align-center p-20">
      <div
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className="w w-2/4"
      >
        <Carousel autoPlay infiniteLoop useKeyboardArrows showThumbs={false}>
          <div>
            <img src="https://www.nespresso.com/ecom/medias/sys_master/public/28398747713566/kimgoeun-card-banner-visual-1120x630px.png" />
          </div>
          <div>
            <img src="https://www.nespresso.com/ecom/medias/sys_master/public/28377816072222/230727-Home-Main-Banner-1120x630px-1-.png" />
          </div>
          <div>
            <img src="https://www.nespresso.com/ecom/medias/sys_master/public/27949602930718/202307-summer-acc-card-banner-1120x630px.png" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Section2
