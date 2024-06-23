import React from 'react';
import '../index.css';

function Contact() {
    return (
        <div className="w-full mt-36 p-4 bg-white bg-opacity-10 flex items-start">
            <div className="text-white flex-grow">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="mb-4">
                    <strong>Name:</strong> Niket Agarwal
                </p>
                <p className="mb-4">
                    <strong>Email:</strong> niket22320@iiitd.ac.in
                </p>
                <p className="mb-4">
                    <strong>Phone:</strong> 8619631019
                </p>
            </div>
        </div>
    );
}

export default Contact;
