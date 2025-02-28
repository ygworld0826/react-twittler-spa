import React from 'react';
import { dummyTweets } from '../static/dummyData';
import './MyPage.css';
import Footer from '../Footer'; // ✅ Import Footer component

const MyPage = () => {
  // ✅ Filter only tweets by Alice
  const filteredTweets = dummyTweets.filter(tweet => tweet.username === "Alice");

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0]?.picture} alt="Profile" /> {/* ✅ Handle missing data */}
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets[0]?.username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>

      {/* ✅ Dynamically render Alice's tweets */}
      <ul className="tweets__mypage">
        {filteredTweets.map(tweet => (
          <li className="tweet" id={tweet.id} key={tweet.id}>
            <div className="tweet__profile">
              <img src={tweet.picture} alt="User" />
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className="tweet__username">{tweet.username}</span>
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className="tweet__message">{tweet.content}</div>
            </div>
          </li>
        ))}
      </ul>

      <Footer /> {/* ✅ Add Footer component */}
    </section>
  );
};

export default MyPage;
