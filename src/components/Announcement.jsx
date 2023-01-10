import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height:30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background: linear-gradient(90deg, rgba(255,0,128,1) 15%, rgba(0,128,255,1) 50%, rgba(0,255,128,1) 85%);
`;

const Announcement = () => {
  return (
    <Container>
      &#128666; FREE DELIVERY FOR ORDERS OVER 50$! &#128666;
    </Container>
  )
}

export default Announcement;