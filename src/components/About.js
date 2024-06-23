import React from 'react';
import resume from '../documents/Resume.pdf'; // Ensure you have the resume PDF in your documents folder
import profilePic from '../images/profile.jpeg';
import '../index.css';

function HeroContent() {
    return (
        <div className="max-w-4xl mx-auto my-36 p-4 bg-white bg-opacity-10 rounded-lg flex items-start">
            <img src={profilePic} alt="ProfilePic" className="h-[400px] w-[400px] mr-4 rounded-lg flex-shrink-0"/>
            <div className="text-white flex-grow">
                <p className="mb-4">
                    As a third-year computer science student, I am passionate about development, particularly in web development and related fields. I have a keen interest in data science and aspire to be a software developer. I am proficient in Python, C++, Java, and other programming languages, which enable me to tackle diverse challenges effectively. My academic journey has equipped me with a solid understanding of both theoretical concepts and practical applications. I also possess strong problem-solving skills, particularly in data structures and algorithms (DSA), which I have honed through various competitive programming and project-based experiences. I am eager to leverage my skills to contribute to innovative projects and further enhance my expertise in software development.
                </p>
                <a 
                    href={resume} 
                    download 
                    className="inline-block mt-4 px-6 py-3 bg-black bg-opacity-30 text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors duration-300">
                    Download Resume
                </a>
            </div>
        </div>
    );
}

export default HeroContent;
