import React from "react";
import en from "../../../assets/images/pic/en.png";
import cn from "../../../assets/images/pic/cn.png";
import logo from "../../../assets/images/icon/logo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header className="header Huans flexC">
        <a href="#" className="hdlogo flexC">
          <img src={logo} />
        </a>
        <div className="hdR flexC">
          <div className="hdREn">
            <a href="#" className="hdREna flexC">
              <p className="langAbbr">EN</p>
              <img className="flagImg" src={en} />
              <i></i>
            </a>
            <div className="hdREnK Huans">
              <a href="#" className="hdREnA flexC en">
                <p>EN</p>
                <img src={en} />
              </a>
              <a href="#" className="hdREnA flexC cn">
                <p>CN</p>
                <img src={cn} />
              </a>
            </div>
          </div>
          <a href="#" className="hdLik linkWallet">
            Connect
          </a>
        </div>
      </header>
    </div>
  );
}
