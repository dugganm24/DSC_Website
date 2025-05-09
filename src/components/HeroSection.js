import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/hero-background.MOV' autoPlay loop muted />
      <h1>DUGGAN AND SONS CONSTRUCTION</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--secondary' 
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('this button works')}
        >
          WATCH SOMETHING<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;