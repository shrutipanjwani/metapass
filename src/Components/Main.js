import React from "react";
import "../Styles/Main.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faQrcode } from "@fortawesome/free-solid-svg-icons";
import token from "../Assets/token.avif";
import live from "../Assets/live.avif";
import ticket from "../Assets/ticket1.png";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  return (
    <main>
      <div className="features-grid">
        <div className="feature-image">
          <img src={token} alt="token" />
        </div>
        <div className="feature-grid-content">
          <h1>Token gate your events</h1>
          <p>NFT Tickets to token gate your event in less than 1 minute</p>
          <a href="/">
            Learn more <FontAwesomeIcon icon={faArrowRight} />{" "}
          </a>
        </div>
        <div className="feature-grid-content">
          <h1>Live on Polygon Network</h1>
          <p>
            We've chosen to go live on Polygon chain as its fast and inexpensive
            to create events
          </p>
          <a href="/">
            Learn more <FontAwesomeIcon icon={faArrowRight} />{" "}
          </a>
        </div>
        <div className="feature-image">
          <img src={live} alt="live" />
        </div>
      </div>
      <div className="features-method">
        <h1>Fast and easy ticket verification</h1>
        <p>Built with security and easy-of-use in mind.</p>
        <div className="methods-flex">
          <div className="method-image">
            <img src={ticket} alt="ticket" />
          </div>
          <div className="method-content">
            <a href="/">
              <div className="method-content-box">
                <FontAwesomeIcon icon={faDiscord} />
                <p>Metapass Discord Bot for one click verification</p>
              </div>
            </a>
            <br />
            <a href="/">
              <div className="method-content-box">
                <FontAwesomeIcon icon={faQrcode} />
                <p>One time QR code for IRL Events</p>
              </div>
            </a>
          </div>
        </div>
        <div className="community">
          <h1>Be a part of our awesome community!</h1>
          <ul className="socials">
            <li>
              <a href="/">
                <Button>Twitter</Button>
              </a>
            </li>
            <li>
              <a href="/">
                <Button>Discord</Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
