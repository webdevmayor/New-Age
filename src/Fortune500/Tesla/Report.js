import React from 'react'
import styled from 'styled-components'

const Report = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <Reports>
                Read Tesla's 2021 Impact Report

            </Reports>
        </Wrapper>
    </Container>
      
    </>
  )
}

export default Report

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
   justify-content: center;
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Reports = styled.div`
color: grey;
::after{
    content: " ";
    position: absolute;
    bottom: -5px;
    height: 1px;
    width: 100%;
    background-color: grey;
    transition:  all 450ms;

    :hover{
        ::after{
        background-color: #000;
        height: 2px;
    }
}
`;


