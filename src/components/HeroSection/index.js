import React,{useState} from 'react'
import Image from '../../images/background.jpg'
import {Button} from '../ButtonElements'
import {HeroContainer, HeroBg,ImageBg,HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={Image}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Michał Godun</HeroH1>
                <HeroP>
                    Welcome to my portfolio made with ReactJS.
                </HeroP>
                <HeroBtnWrapper>
                    <Button smooth={true} spy={true} exact='true' offset={-80} to='aboutme' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        View portfolio {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
