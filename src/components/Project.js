import React from 'react';
import '../index.css';

function Project({ heading, description, techStack, imageUrl }) {
  return (
    <div className="max-w-4xl mx-auto my-16 p-4 bg-white bg-opacity-10 rounded-lg flex items-start">
      <div className="w-1/3 flex justify-center items-center">
        <img src={imageUrl} alt={heading} className="rounded-lg object-cover h-full" />
      </div>
      <div className="w-2/3 pl-6">
        <h2 className="text-2xl font-bold mb-4 text-center">{heading}</h2>
        <p className="mb-4 text-center">{description}</p>
        <hr className="border-t border-white my-4" />
        <div className="grid grid-cols-3 gap-4">
          {techStack.map((tech, index) => (
            <div key={index} className="bg-black bg-opacity-8 p-2 rounded text-center">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
