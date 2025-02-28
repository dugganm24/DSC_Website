import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
    return (
        <div className='about-us-container'>
            <div className='about-us-title'>ABOUT US</div>
            <div className='about-us-content'>
                <div className='section left-text'>
                    <div className='about-us-text'>
                        <h1>Duggan and Sons</h1>
                        <p>We are a full-service construction company that can take your project ideas from design to completion. Whether you are looking to remodel a bathroom or build a custom home or anything in between, we take pride in making sure it is completed on time and on budget.</p>
                    </div>
                    <div className='about-us-image'>
                        <img src='/images/img1.jpeg' alt='Construction Team' />
                    </div>
                </div>
                <div className='section right-text'>
                    <div className='about-us-image'>
                        <img src='/images/img2.jpeg' alt='Construction Team' />
                    </div>
                    <div className='about-us-text'>
                        <h1>Family First</h1>
                        <p>Family is very important to my wife and 2 boys. When we meet a client we want them to feel comfortable with the process and let them know we treat every customer as if they were family.</p>
                    </div>
                </div>
                <div className='section left-text'>
                    <div className='about-us-text'>
                        <h1>The Process</h1>
                        <p>Reach out to us and make an appointment to meet with me not a salesman. From that point, we work with the design, permitting, selections, construction management right down to the little details that make every project special to us.</p>
                    </div>
                    <div className='about-us-image'>
                        <img src='/images/img3.jpeg' alt='Construction Team' />
                    </div>
                </div>
            </div>
        </div>
    );
}
