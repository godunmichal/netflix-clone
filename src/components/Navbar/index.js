import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MoblieIcon,NavMenu, NavItem,NavLinks} from './NavbarElements';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Michał Godun</NavLogo>
                    <MoblieIcon onClick={toggle}>
                        <FaBars />
                    </MoblieIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks smooth={true} spy={true} exact='true' offset={-80} to='aboutme'>About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} spy={true} exact='true' offset={-80} to='technologies'>Technologies</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} spy={true} exact='true' offset={-80} to='projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks smooth={true} spy={true} exact='true' offset={-80} to='contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
