import React from "react";
import homepage from "../../images/Illustration 1.svg";
import loc from "../../images/Group 1215.svg";
import user from "../../images/Group 1216.svg";
import server from "../../images/Group 1217.svg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div id="HomePage" className="container">
        <div className="wrapper">
          <div className="homepage1">
            <div className="homepage-info">
              <div className="homepage-text">
                <h1 className="homepage-text-header">
                  Want anything to be easy with <span>INSAID.</span>
                </h1>
                <p className="homepage-text-desc sub-desc">
                  Provide a network for all your needs with ease and fun using
                  <span> INSAID</span> and discover interesting features from
                  us.
                </p>
              </div>
              <div className="homepage-btn-abt">
                <button className="homepage-btn btn-dark">Get Started</button>
              </div>
            </div>
            <div className="homepage-img">
              <img src={homepage} alt="homepage" />
            </div>
          </div>
          <div className="stats">
            <div className="stats-item">
              <div className="stats-img-abt">
                <img src={user} alt="user" />
              </div>
              <div className="stats-text">
                <p className="text-num">90+</p>
                <p className="text-label">Users</p>
              </div>
            </div>
            <div className="stats-item">
              <div className="stats-img-abt">
                <img src={loc} alt="location" />
              </div>
              <div className="stats-text">
                <p className="text-num">30+</p>
                <p className="text-label">Locations</p>
              </div>
            </div>
            <div className="stats-item">
              <div className="stats-img-abt">
                <img src={server} alt="server" />
              </div>
              <div className="stats-text">
                <p className="text-num">50+</p>
                <p className="text-label">Servers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
