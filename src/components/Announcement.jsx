import styled from "styled-components";
import React from 'react'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: light;
`

// Thông báo
export const Announcement = () => {
  return (
    <div>
        <Container>
            Super Deal! Free Shipping on Order Over $50
        </Container>
    </div>
  )
}
