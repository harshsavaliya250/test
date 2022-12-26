import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Topicbar = () => {
  return (
    <>
      <div className="mt-4" id="Topicbar">
        <div className="container">
          <div className="row g-2 gy-3">
            <div className="col">
              <div className="button">480p</div>
            </div>
            <div className="col">
              <div className="button">720p</div>
            </div>
            <div className="col">
              <div className="button">1080p</div>
            </div>
            <div className="col">
              <div className="button">2160p 4K</div>
            </div>
            <div className="col">
              <div className="button">Netflix</div>
            </div>
            <div className="col">
              <div className="button">Amazon Prime</div>
            </div>
            <div className="col">
              <div className="button">ALTBalaji</div>
            </div>
            <div className="col">
              <div className="button">MXPlayer</div>
            </div>
            <div className="col">
              <div className="button">Disney + Hotstar</div>
            </div>
            <div className="col">
              <div className="button">SoneyLiv</div>
            </div>
            <div className="col">
              <div className="button">Zee5</div>
            </div>
            <div className="col">
              <div className="button">Apple Tv+</div>
            </div>
            <div className="col">
              <div className="button">Hoichoi</div>
            </div>
            <div className="col">
              <div className="button">K-Drama Series</div>
            </div>
            <div className="col">
              <div className="button">English</div>
            </div>
            <div className="col">
              <div className="button">Voot</div>
            </div>

            <div className="col-6 link-btn btn-telegram">
              <div className="button"><FaTelegramPlane className="fs-4"/> Join Telegram</div>
            </div>
            <div className="col-6 link-btn btn-download">
              <div className="button">How To Download?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topicbar;
