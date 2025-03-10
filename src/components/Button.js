import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES =['btn--primary', 'btn--secondary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--navbar'];

export const Button = ({children, type, onClick, buttonStyle,
buttonSize}) => { 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <Link to='/contact-us' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            typpe={type}
            >
                {children}
            </button>
        </Link>
    )
};