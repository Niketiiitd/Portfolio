import React from 'react';
import './App.css';
import HeroContent from './components/About.js';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import Project from './components/Project.js';
import SocialLinks from './components/SocialLinks.js';
import insight from './images/Insight.jpg';
import unilife from './images/Unilife.jpg';
import bookStore from './images/bookstore.jpg';
import stickHero from './images/stickHero.jpg';
import './index.css';

const projects = [
  {
    heading: 'SelfMaster',
    description: 'A bookstore application leveraging SQL and DBMS for efficient inventory management, user transactions, and seamless database interactions. Ideal for streamlined book cataloging and sales tracking.To know more check my Github',
    techStack: ['Flask', 'Python', 'SQL'],
    imageUrl: bookStore
  },
  {
    heading: 'INSight Diabetes',
    description: 'Developed a web application using HTML, CSS, and Flask that identifies critical SNPs in the INS gene associated with diabetes. The tool integrates genetic data with user-reported symptoms to provide a comprehensive risk assessment for diabetes.To know more check my Github',
    techStack: ['HTML', 'CSS', 'Flask', 'Comput. Biology'],
    imageUrl: insight
  },
  {
    heading: 'Stick Hero Game Implementation (Java OOPs)',
    description: 'Made a working replica of the Stick hero game using the concepts of OOPs, SceneBuilder and JavaFX. Also added some extra features such as Save game, which enhance the user experience.To know more check my Github',
    techStack: ['Java', 'OOPS', 'JavaFx', 'Scene Builder'],
    imageUrl: stickHero
  },
  {
    heading: 'Unilife: Campus Management app',
    description: 'Leveraged Figma to design a comprehensive Campus Management App, creating prototypes and incorporating intuitive user interfaces for streamlined campus administration.To know more check my Linkedin',
    techStack: ['Figma', 'User Interface Design'],
    imageUrl: unilife
  },
  // Add more projects as needed
];

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <section id="Home" className="flex-grow">
        <HeroContent />
      </section>
      <section id="Projects" className="max-w-6xl mx-auto my-12 p-6 bg-white bg-opacity-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-black bg-opacity-20 rounded-lg">
              <Project
                heading={project.heading}
                description={project.description}
                techStack={project.techStack}
                imageUrl={project.imageUrl} 
              />
            </div>
          ))}
        </div>
      </section>
      <section id="Contact" className="flex-shrink-0">
        <Contact />
      </section>
      <SocialLinks /> 
    </div>
  );
}

export default App;
