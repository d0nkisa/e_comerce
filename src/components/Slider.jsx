import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { useState } from "react";

const Container = styled.div`
    width: 96%;
    height: 70vh;
    display: flex;
    position: relative;
    left: 2%;
    top: 35px;
    box-shadow:  0 2px 4px #636363;
`;
const Arrow = styled.div`
    width: 42px;
    height: 42px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "-20px"};
    right: ${(props) => props.direction === "right" && "-20px"};
    filter: drop-shadow(0 0 0.15rem black);
    margin: auto;
    cursor: pointer;
    z-index: 2;
`;
const Wrapper = styled.div`
    width: 60%;
    height: 94%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: auto;
`;
const Card = styled.div`
    width: 40%;
    height: 98%;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: auto;
    padding: 5px 10px;
    box-shadow:  0 2px 4px #636363;
`;
const SectionImage = styled.img`
    width: 96%;
    height: 75%;
    display: flex;
    margin: auto;
`;
const SectionTitle = styled.h2`
    width: 96%;
    display: flex;
`;
const SectionDescription = styled.p`
    font-size: 14px;
    width: 96%;
    margin: auto;
    color: #636363;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
    if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    };

    return (
        <Container className='slider-container'>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Card>
                    <SectionImage/>
                    <SectionTitle>Test Title</SectionTitle>
                    <SectionDescription>Here you can order this that and other stuff to fill the space.</SectionDescription>
                </Card>
                <Card>
                    <SectionImage/>
                    <SectionTitle>Test Title</SectionTitle>
                    <SectionDescription>Here you can order this that and other stuff to fill the space.</SectionDescription>
                </Card>
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider;