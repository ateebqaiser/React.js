import React, { useState } from 'react';
import {dataCategory} from '../Page_data.js';
import "./Page_style.css"

const About = () => {

  const [counter, animalsCounter] = useState(0);

  function previousOption() {
    animalsCounter((counter + 1) % dataCategory.length);
  }

  function nextOption() {
  
    animalsCounter((counter - 1 + dataCategory.length) % dataCategory.length);
  }

  return (
    <>
      <div className='about-data'>
        <img src={dataCategory[counter].categorypic}></img>
        <p>{dataCategory[counter].category}</p>
      </div>
      <div className='about-options'>
        <div className='about-left-option'>
            <button onClick={previousOption}>Previous</button>
        </div>
        <div className='about-right-option'>
          <button onClick={nextOption}>Next</button>
        </div>
      </div>
    </>
  )
}

export default About;
