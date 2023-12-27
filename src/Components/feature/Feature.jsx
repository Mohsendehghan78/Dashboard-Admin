import React from "react";
import "./Feature.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function Feature() {
  return (
    <div className="feature col-min-10 ">
       <div className="featureWrapper">
        <div className="featureItem pointer">
          <div className="featureTitle">Revanue</div>
          <span className="featureMoney">$ 2,415</span>
          <span className="featureRate">
            -11.4
            <ArrowDownwardIcon className="featureIcon"></ArrowDownwardIcon>
          </span>
          <div className="featureDicription">Compared to last month </div>
        </div>
        <div className="featureItem pointer">
          <div className="featureTitle">Sales</div>
          <span className="featureMoney">$ 4,415</span>
          <span className="featureRate">
            -1.4
            <ArrowDownwardIcon className="featureIcon"></ArrowDownwardIcon>
          </span>
          <div className="featureDicription">Compared to last month </div>
        </div>
        <div className="featureItem pointer">
          <div className="featureTitle">Revanue</div>
          <span className="featureMoney">$ 2,225</span>
          <span className="featureRate ">
            +1.4
            <ArrowUpwardIcon className="featureIcon positive"></ArrowUpwardIcon>
          </span>
          <div className="featureDicription">Compared to last month </div>
        </div>
      </div>
    </div>
  );
}
