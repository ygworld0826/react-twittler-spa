import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faQuestionCircle, faUser } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <i className="far fa-comment-dots">
              <FontAwesomeIcon icon={faCommentDots} />
            </i> Tweets
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="far fa-question-circle">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </i> About
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <i className="far fa-user">
              <FontAwesomeIcon icon={faUser} />
            </i> MyPage
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
