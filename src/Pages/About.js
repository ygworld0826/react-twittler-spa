import React from 'react';
import './About.css';
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons"; // ✅ FontAwesome Import

const About = () => {
  return (
    <section className="aboutTwittler">
      <div className="aboutTwittler__container">
        <div className="aboutTwittler__wrapper">
          <div className="aboutTwittler__detail">
            <p className="aboutTwittler__detailName">React Twittler Info</p>
          </div>
        </div>
      </div>

      {/* ✅ Updated FontAwesome icon usage */}
      <div className="aboutTwittler__content">
        <FontAwesomeIcon icon={faUsers} />
        <p>나만의 Twittler 소개페이지를 꾸며보세요.</p>
      </div>

      <Footer /> {/* ✅ Ensured Footer is correctly imported */}
    </section>
  );
};

export default About;
