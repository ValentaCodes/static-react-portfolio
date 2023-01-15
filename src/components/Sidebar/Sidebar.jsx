import React from "react";
import "./Sidebar.css";
import { BsMedium, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className='sidebar__controls'>
      <div className='sidebar__buttons'>
        <a href='https://medium.com/@valentacodes'>
          <BsMedium className='icons' />
        </a>
        <a href='https://www.linkedin.com/in/cornelius-davis-701b00251/'>
          <BsLinkedin className='icons' />
        </a>
        <a href='https://www.github.com/valentacodes'>
          <BsGithub className='icons' />
        </a>
      </div>
    </div>
  );
}
