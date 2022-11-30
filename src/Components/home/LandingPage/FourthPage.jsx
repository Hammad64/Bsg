import React from "react";
import decentralized from "../../../assets/images/pic/Indxin01.png" 
import highReturn from "../../../assets/images/pic/Indxin02.png" 
import matching from "../../../assets/images/pic/Indxin03.png" 

export default function FourthPage() {
  return (
    <div className="Indxin">
      <div className="IndxinT">
        <h3>The most trusted platform.</h3>
        <p>wBSG the platform for financial freedom</p>
      </div>
      <div className="IndxinK Indwark Huans flex fl-bet">
        <a href="#" className="IndxinA">
          <div className="IndxinI">
            <img src={decentralized} />
          </div>
          <h3>Fully Decentralised</h3>
          <p>
            100% Decentralised
            <br />
            Smart contract coding fully verified by WYzthscan.
          </p>
        </a>
        <a href="#" className="IndxinA">
          <div className="IndxinI">
            <img src={highReturn} />
          </div>
          <h3>High return</h3>
          <p>
            45% monthly return
            <br />
            And it's not a high risk platform.
          </p>
        </a>
        <a href="#" className="IndxinA">
          <div className="IndxinI">
            <img src={matching} />
          </div>
          <h3>1-1 matching orders</h3>
          <p>Sustainable formula</p>
        </a>
      </div>
    </div>
  );
}
