import React, { memo, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from 'components/header/Navbar'
import WebsiteOverlay from 'components/textOverlay'
import { useSession } from 'next-auth/react'
import useStore from 'components/zustand/dataStore'

interface MemoizedIframeProps {
  src: string
}
const IframeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; // Higher than the iframe to capture clicks
`

const MemoizedIframe = memo(({ src }: MemoizedIframeProps) => (
  <div>
    <iframe
      title="YouTube Video"
      src={src}
      allow="autoplay; encrypted-media; screen-wake-lock"
      allowFullScreen
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0px',
        left: '0px',
      }}
    />
    <IframeOverlay />
  </div>
))

MemoizedIframe.displayName = 'MemoizedVideo'

function Section1() {
  const { data: session } = useSession() || {}
  const currentStore = useStore()

  useEffect(() => {
    currentStore.setSession(session)
  }, [session])

  const StyledSection = styled.section`
    padding: 5px;
    width: 100%;
    height: 100vh;
    background-color: black;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  `
  const IframeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    @media (max-width: 400px) {
      position: static;
    }
  `

  // eslint-disable-next-line react/display-name

  return (
    <StyledSection>
      <Navbar />
      <IframeContainer>
        <MemoizedIframe src="https://www.youtube.com/embed/m2ZbG0xEww0?playlist=m2ZbG0xEww0&autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3" />
        <WebsiteOverlay />
      </IframeContainer>
    </StyledSection>
  )
}
// https://www.youtube.com/embed/dlMCikRF1s8?playlist=dlMCikRF1s8&autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3

export default Section1
