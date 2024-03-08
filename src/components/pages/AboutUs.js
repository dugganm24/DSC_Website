import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
    return (
        <div className='about-us-container'>
            <h1 className='about-us-title'>ABOUT US</h1>
            <div className='about-us-content'>
                <div className='about-us-text'>
                    <h1> About Duggan and Sons</h1>
                    <p>
                    We are a full service construction company that can take your project ideas from design to completion. Whether you are looking to remodel a bathroom or build a custom home or anything in between we take pride in making sure it is completed on time and on budget.
                    </p>
                    <h2>Family First</h2>
                    <p>
                    Family is very important to my wife and 2 boys.  When we meet a client we want them to feel comfortable with the process and let them know we treat every customer as if they were family.  
                    </p>
                    <h2>
                        The Process
                    </h2>
                    <p> Reach out to us and make an appoint to meet with me not a salesman.  From that point we work with the design, permitting, selections, construction management right down to the little details that make every project special to us.  </p>
                </div>
                <div className='about-us-image'>
                    <img src='/images/img8.jpeg' alt='Construction Team' />
                </div>
            </div>
        </div>
    );
}
