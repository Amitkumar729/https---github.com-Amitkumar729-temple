import React from "react";
import "./footer.css";


export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="address">
        <div className="head"> <h4>Rahu Dham-Address</h4> </div>
        <div className="data-content">
          Rahu Dham Temple, Old Age Home, 20 Bed "Maternity hospital Delhi
          Lucknow Expressway Nanau, district Aligarh. Uttar Pradesh-202131
        </div>
      </div>
      <div className="office">
        <div className="head"><h4>Rahu Dham-Registered Office</h4></div>
        <div className="data-content">
          H-755 A2 Palam Extn Sector 7, Dwarka New Delhi-110075
        </div>
      </div>
      <div className="office">
        <div className="head"><h4>Rahu Dham-Uttar Pradesh Office</h4></div>
        <div className="data-content">
          4/274.GF Sector 4, Vaishali Ghaziabad UP
        </div>
      </div>
    </div>
  );
};
