// Taken from react activity
import React from "react";
import "./style.css";

const Header = props => (
  <div className="header">
    <div className="scores">
      Score: {props.score}  |  Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;