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
      <div Style={"font-size: 30px; color: var(--main-color); text-align: center;"}>
        My Skills
        </div>
      <div className='skills__container'>
        <div className='skills'>
          <image>
            <IoLogoJavascript className='skills__icon' />
          </image>
          <image>
            <IoLogoCss3 className='skills__icon' />
          </image>
          <image>
            <IoLogoHtml5 className='skills__icon' />
          </image>
          <image>
            <IoLogoNodejs className="skills__icon" />
          </image>
          <image>
            <SiMongodb className='skills__icon' />
          </image>
          <image>
            <SiReact className='skills__icon' />
          </image>
          <image>
            <SiNextdotjs className='skills__icon' />
          </image>
          <image>
            <SiMysql className='skills__icon' />
          </image>
        </div>
      </div>
    </div>
  );
}
