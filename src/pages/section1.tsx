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
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      border: '1px solid black',
    }}
  />
))

MemoizedIframe.displayName = 'MemoizedVideo'

function Section1() {
  const { data: session, status } = useSession()
  const setSession = useStore((state) => state.setSession)

  useEffect(() => {
    console.log('The status : ', status)
    if (status === 'authenticated') {
      setSession(session)
    }
  }, [session, status, setSession])

  const StyledSection = styled.section`
    padding: 5px;
    width: 100vw;
    height: 100vh;
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
      <MemoizedIframe src="https://www.youtube.com/embed/dlMCikRF1s8?playlist=dlMCikRF1s8&autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3" />
      <WebsiteOverlay />
    </StyledSection>
  )
}

export default Section1
