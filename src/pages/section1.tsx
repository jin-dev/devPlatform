import React, { memo, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from 'components/header/Navbar'
import WebsiteOverlay from 'components/textOverlay'
import { useSession } from 'next-auth/react'
import useStore from 'components/zustand/dataStore'

interface MemoizedIframeProps {
  src: string
}

const MemoizedIframe: React.FC<MemoizedIframeProps> = memo(({ src }) => (
  <iframe
    title="YouTube Video"
    src={src}
    allow="autoplay; encrypted-media"
    allowFullScreen
    style={{
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
    }}
  />
))

MemoizedIframe.displayName = 'MemoizedVideo'

function Section1() {
  const { data: session, status } = useSession() || {}
  const setSession = useStore((state) => state.setSession)

  useEffect(() => {}, [session, status, setSession])

  const StyledSection = styled.section`
    padding: 5px;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: black;
    flex-direction: row;
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
      background-color: rgba(
        0,
        0,
        0,
        0.6
      ); /* You can adjust the opacity as needed */
    }
  `

  // eslint-disable-next-line react/display-name

  return (
    <StyledSection>
      <Navbar />
      <MemoizedIframe src="https://www.youtube.com/embed/m2ZbG0xEww0?playlist=m2ZbG0xEww0&autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3" />
      <WebsiteOverlay />
    </StyledSection>
  )
}
// https://www.youtube.com/embed/dlMCikRF1s8?playlist=dlMCikRF1s8&autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3

export default Section1
