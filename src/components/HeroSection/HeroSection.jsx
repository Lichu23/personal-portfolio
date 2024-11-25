import React from 'react';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import HeroBgAnimation from '../HeroBgAnimation/HeroBgAnimation';
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, ResumeButton, Span, SubTitle, TextLoop, Title } from './HeroStyle';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>

                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

               
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection