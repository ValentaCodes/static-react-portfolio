import React from "react";
import "./Skills.css";
import { SiMongodb, SiReact, SiNextdotjs, SiMysql } from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoNodejs,
} from "react-icons/io";

export default function Skills() {
  return (
    <div>
      <h2 Style={"font-size: 30px; color: var(--main-color); text-align: center;"}>
        My Skills
        </h2>
      <div className='skills__container'>
        <div className='skills'>
          <image>
            <IoLogoJavascript className='skills__icon' />
            JavaScript
          </image>
          <image>
            <IoLogoCss3 className='skills__icon' />
            CSS
          </image>
          <image>
            <IoLogoHtml5 className='skills__icon' />
            HTML
          </image>
          <image>
            <IoLogoNodejs className="skills__icon" />
            Node
          </image>
          <image>
            <SiMongodb className='skills__icon' />
            MongoDB
          </image>
          <image>
            <SiReact className='skills__icon' />
            React
          </image>
          <image>
            <SiNextdotjs className='skills__icon' />
            Next
          </image>
          <image>
            <SiMysql className='skills__icon' />
          </image>
        </div>
      </div>
    </div>
  );
}
