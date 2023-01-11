import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;
const Image = styled.img`
`;
const Info = styled.div`
`;
const Title = styled.h3`
`;
const Button = styled.button`
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem;