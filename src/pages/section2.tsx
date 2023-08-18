import React from 'react'
import styled from 'styled-components'
import IdStore from 'components/zustand/idStore';
import useStore from 'components/zustand/store';


const Section2 = () => {


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
    
const {count, increaseCount, decreaseCount, removeAllCount}: any = useStore(
    state => state,
  );
  
  
  const {id, setId }: any = IdStore(
    state => state,
  );

  return (
    <StyledSection2>

    <div>{count} </div>
      <button onClick={() => increaseCount()}> Click me</button>
  </StyledSection2>
  )
}

export default Section2;