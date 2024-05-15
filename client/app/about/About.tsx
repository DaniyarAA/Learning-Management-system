import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">E-Learning?</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Welcome to, your go-to platform for online courses designed to help you achieve your learning goals and professional aspirations. We are dedicated to providing high-quality, accessible education to learners around the globe.
          <br />
          <br />
          Our mission is to democratize education by offering a wide range of courses that cater to diverse interests and skill levels. We believe that everyone should have the opportunity to learn, grow, and succeed, regardless of their background or geographical location.
          <br />
          <br />
          
          <br />
          <br />
          
          <br />
          <br />
          
          <br />
          <br />
          
          <br />
          <br />
          
        </p>
        <br />
        <span className="text-[22px]">TeamSeven&apos;s</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of E-learning
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
