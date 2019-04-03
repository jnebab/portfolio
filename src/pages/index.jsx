import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm John Carl James Nebab.
        </BigTitle>
        <Subtitle>I create awesomeness in the web. I am currently working as a Front-end Developer at <a href="https://qarabao.com/">Qarabao</a>.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Budget Meal"
            link="https://github.com/CodingBootcamp-SDSTP/NebabJohnCarlJamesBudgetMeal"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project was made during my DICT Bootcamp Training in Sta. Rosa City last June 2018.
          </ProjectCard>
          <ProjectCard
            title="Stepper"
            link="https://github.com/jnebab/stepper-wizard-assessment"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            This was a sample test for my job interview last January
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Carl James Nebab" />
          <AboutSub>
            My close relatives and friends call me <i>Ivan</i>. It was derived from the Russian form of one of my first names -- John. My mom is probably too selfish, she gave me all the names she wanted for her first-born son. I can't say I disagree though. But I still prefer to be called <i>Ivan</i>. Will you?
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I am a prematurely seven-month born baby and I probably have some under developed physical features here and there. Chill. I am completely a high functioning individual. So, I can just only imagine the possibilities if I was delivered in time. Probably, you're not reading this now and this site might not exist. Yes, I am a great believer of the line - "Everything happens for a reason". And you being here tells me that you're interested to at least know me, no?
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:nebab.johncarl@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/old_twenty">Twitter</a> &{' '}
            <a href="https://www.instagram.com/nh0jjjjj/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
