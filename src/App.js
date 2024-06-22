import React from 'react';
import './index.css';
import './App.css';
import HeroContent from './components/About.js';
import Header from './components/Header.js';
import Project from './components/Project.js';
import insight from './images/Insight.jpg';
import unilife from './images/Unilife.jpg';
import bookStore from './images/bookstore.jpg';
import stickHero from './images/stickHero.jpg';


const projects = [
  {
    heading: 'SelfMaster',
    description: 'A bookstore application leveraging SQL and DBMS for efficient inventory management, user transactions, and seamless database interactions. Ideal for streamlined book cataloging and sales tracking.',
    techStack: ['Flask', 'Python', 'SQL'],
    imageUrl: bookStore
  },
  {
    heading: 'INSight Diabetes',
    description: 'Developed a web application using HTML, CSS, and Flask that identifies critical SNPs in the INS gene associated with diabetes. The tool integrates genetic data with user-reported symptoms to provide a comprehensive risk assessment for diabetes.',
    techStack: ['HTML', 'CSS', 'Flask','Computational Biology'],
    imageUrl: insight
  },
  {
    heading: 'Stick Hero Game Implementation (Java OOPs)',
    description: 'Made a working replica of the Stick hero game using the concepts of OOPs, SceneBuilder and JavaFX. Also added some extra features such as Save game, which enhance the user experience.',
    techStack: ['Java', 'OOPS', 'JavaFx','Scene Builder'],
    imageUrl: stickHero
  },
  {
    heading: 'Unilife: Campus Management app',
    description: 'Leveraged Figma to design a comprehensive Campus Management App, creating prototypes and incorporating intuitive user interfaces for streamlined campus administration.',
    techStack: ['Figma','User Interface Design'],
    imageUrl: unilife
  },
  // Add more projects as needed
];

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <HeroContent />
      {projects.map((project, index) => (
        <Project
          key={index}
          heading={project.heading}
          description={project.description}
          techStack={project.techStack}
        />
      ))}
    </div>
  );
}

export default App;
