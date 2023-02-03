import React from 'react';
import './Sidebar.css';
import { BsMedium, BsGithub, BsLinkedin, BsConeStriped } from 'react-icons/bs';
export default function Sidebar() {
  return (
    <div className='sidebar__controls'>
      <div className='sidebar__buttons'>
        <a href='https://medium.com/@valentacodes'>
          <div className='tooltip'>
            <BsMedium className='icons' />
            <span className='tooltip-text'>Medium</span>
          </div>
        </a>
        <a href='https://www.linkedin.com/in/cornelius-davis-701b00251/'>
          <div className='tooltip'>
            <BsLinkedin className='icons' />
            <span className='tooltip-text'>LinkedIn</span>
          </div>
        </a>
        <a href='https://www.github.com/valentacodes'>
          <div className='tooltip'>
            <BsGithub className='icons' />
            <span className='tooltip-text'>GitHub</span>
          </div>
        </a>
        <a href='/'>
          <div className='tooltip'>
            <BsConeStriped className='icons' />
            <span className='tooltip-text'>Under Construction</span>
          </div>
        </a>
      </div>
    </div>
  );
}
