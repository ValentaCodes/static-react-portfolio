import React from "react";
import Photo from "../../assets/Photo.JPG";
import "./Profile.css";

// FIXME: Layout isnt fully responsive
export default function Profile() {
  return (
    <div className='container'>
      <div className='about-me'>
        <div>
          {" "}
          Welcome! <br />
          My name is Cornelius, I am a Full-Stack Software Dev in Salt Lake
          City, Utah.
        </div>
      </div>
      <img className='about-me__photo' src={Photo} alt='Cornelius Davis'></img>
    </div>
  );
}
