import React from 'react'
import { LinkCard, ProjectsCard, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper } from './ProjectsElements'
import Icon1 from '../../images/covid.svg'
import Icon2 from '../../images/airbnb.svg'
import Icon3 from '../../images/weather.svg'
import Icon4 from '../../images/converter.svg'
import Icon5 from '../../images/house.svg'
import Icon6 from '../../images/netflix.svg'

const Projects = () => {
    return (
        <ProjectsContainer id='projects'>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <LinkCard href='https://covid-e4504.web.app' target='_blank' aria-label='Covid-19-Tracker'>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Covid-19 Tracker</ProjectsH2>
                    <ProjectsP>Application that shows how many cases of coronavirus are in the world. Is connected with API.</ProjectsP>
                </ProjectsCard>
                </LinkCard>
                <LinkCard href='https://airbnb-clone-9f042.web.app' target='_blank' aria-label='Airbnb Clone'>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Airbnb clone</ProjectsH2>
                    <ProjectsP>Application looks like Airbnb, made to improve design skills and knowledge about html/css.</ProjectsP>
                </ProjectsCard>
                </LinkCard>
                <LinkCard href='https://currency-converter-18c2e.web.app/' target='_blank' aria-label='Currency converter'>
                <ProjectsCard>
                    <ProjectsIcon src={Icon4}/>
                    <ProjectsH2>Currency converter</ProjectsH2>
                    <ProjectsP>Application where you can convert a given value to another currency. Is connected with API.</ProjectsP>
                </ProjectsCard>
                </LinkCard>
                <LinkCard href='https://weather-app-5fa8b.web.app/' target='_blank' aria-label='Weather App'>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Weather App</ProjectsH2>
                    <ProjectsP>Application that shows the weather in your city. Is connected with API.</ProjectsP>
                </ProjectsCard>
                </LinkCard>
                <LinkCard href='https://construction-sit.web.app/' target='_blank' aria-label='EcoHouse'>
                <ProjectsCard>
                    <ProjectsIcon src={Icon5}/>
                    <ProjectsH2>EcoHouse</ProjectsH2>
                    <ProjectsP>Example of application of building company. Is fully responsive on mobile. </ProjectsP>
                </ProjectsCard>
                </LinkCard>
                <LinkCard href='https://netflix-78a14.web.app/' target='_blank' aria-label='Netflix Clone'>
                <ProjectsCard>
                    <ProjectsIcon src={Icon6}/>
                    <ProjectsH2>Netflix Clone</ProjectsH2>
                    <ProjectsP>Application with user authorisation. Built with Styled Components. </ProjectsP>
                </ProjectsCard>
                </LinkCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
