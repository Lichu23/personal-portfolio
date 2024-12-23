import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import IndexContact from "./components/Contact/IndexContact";
import IndexEducation from "./components/Education/IndexEducation";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { darkTheme, lightTheme } from './utils/Themes.js';


function App() {
  const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    overflow-x: hidden;
  `;

  const Wrapper = styled.div`
    background: linear-gradient(
        38.73deg,
        rgba(204, 0, 187, 0.15) 0%,
        rgba(201, 32, 184, 0) 50%
      ),
      linear-gradient(
        141.27deg,
        rgba(0, 70, 209, 0) 50%,
        rgba(0, 70, 209, 0.15) 100%
      );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  `;
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <IndexEducation />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
