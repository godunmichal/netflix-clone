import React from 'react'
import {SidebarContainer, Icon, CloseIcon,SidebarMenu,SidebarWrapper, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to='aboutme'>
                        About Me
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='technologies'>
                        Technologies
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='projects'>
                        Projects
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to='contact'>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
