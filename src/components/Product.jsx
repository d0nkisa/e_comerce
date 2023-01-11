import React from 'react';
import styled from 'styled-components';
import {ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined} from "@material-ui/icons";


const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
`
const Image = styled.div`
    height: 75%;
    z-index: 2;
`
const IconButtons = styled.div``
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    }
`
const ItemName = styled.div``
const Price = styled.div``

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <IconButtons>
            <ItemName>Black Oversized Tee</ItemName>
            <Price>50$</Price>
            <Icon><ShoppingCartOutlined /></Icon>
            <Icon><SearchOutlined /></Icon>
            <Icon><FavoriteBorderOutlined /></Icon>
        </IconButtons>
    </Container>
  )
}

export default Product;