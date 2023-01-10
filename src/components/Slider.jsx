import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { sliderItems } from '../data';

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
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    background-color: #${(props) => props.bg};
`;

const Card = styled.div`
    width: 20%;
    height: 90%;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5px 10px;
    box-shadow: 0 2px 4px #636363;
`;

const SectionImage = styled.img`
    width: 96%;
    height: 75%;
    object-fit: contain;
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
    const handleCardClick = (id) => {
        return ;
    };

    return (
        <Container className='slider-container'>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id}>
                        <Card onClick={() => handleCardClick(item[0].id)}>
                            <SectionImage src={item[0].img} />
                            <SectionTitle>{item[0].title}</SectionTitle>
                            <SectionDescription>{item[0].desc}</SectionDescription>
                        </Card>
                        <Card onClick={() => handleCardClick(item[1].id)}>
                            <SectionImage src={item[1].img} />
                            <SectionTitle>{item[1].title}</SectionTitle>
                            <SectionDescription>{item[1].desc}</SectionDescription>
                        </Card>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider;