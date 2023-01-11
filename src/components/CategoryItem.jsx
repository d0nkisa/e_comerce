import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 6px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit:  cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(5px);
`;
const Title = styled.h2`
  color: white;
  margin: 10px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  color: gray;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
    TEST
        <Image src={item.img}/>
        <Info className="categories-info">
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem;