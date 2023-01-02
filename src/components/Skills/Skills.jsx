import React from "react";
import "./Skills.css";
import {
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiHtml5,
  SiNextdotjs,
} from "react-icons/si";
export default function Skills() {
  return (
    <div>
      My Skills
      <div className='skills__container'>
        <div className='skills'>
          <icon className='skills__icon'>
            Javascript
            <SiJavascript className="icons" />
          </icon>
          <icon className='skills__icon'>
            CSS
            <SiCss3 className="icons"/>
          </icon>
          <icon className='skills__icon'>
            HTML
            <SiHtml5 className="icons"/>
          </icon>
          <icon className='skills__icon'>
            NODE.js
            <SiNodedotjs className="icons"/>
          </icon>
          <icon className='skills__icon'>
            MongoDB
            <SiMongodb className="icons"/>
          </icon>
          <icon className='skills__icon'>
            React.js
            <SiReact className="icons"/>
          </icon>
          <icon className='skills__icon'>
            Next.js
            <SiNextdotjs className="icons"/>
          </icon>
        </div>
      </div>
    </div>
  );
}
