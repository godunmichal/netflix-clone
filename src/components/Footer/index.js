import React from 'react'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
const Footer = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Michał Godun
                        </SocialLogo>
                            <WebsiteRights>Michał Godun © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='https://github.com/godunmichal' target='_blank' aria-label='Github'>
                                    <FaGithub/>
                                </SocialIconLink>

                                <SocialIconLink href='https://www.linkedin.com/in/micha%C5%82-godun-42baba195/' target='_blank' aria-label='LinkedIn'>
                                    <FaLinkedin/>
                                </SocialIconLink>

                            </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
