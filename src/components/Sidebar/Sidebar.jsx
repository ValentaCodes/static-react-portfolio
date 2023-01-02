import React from "react";
import "./Sidebar.css";
import { FaLinkedin, FaGithub, FaHome, FaFolderOpen } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className='sidebar__controls'>
      <div className='sidebar__buttons'>
        <button>
          <FaHome className='icons' />
          Home
        </button>
        <button>
          <FaFolderOpen className='icons' />
          Projects
        </button>
        <button>
          <FaLinkedin className='icons' />
          LinkedIn
        </button>
        <button>
          <FaGithub className='icons' />
          Github
        </button>
      </div>
    </div>
  );
}
