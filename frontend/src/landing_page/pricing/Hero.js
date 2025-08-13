import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5 p-5" style={{width: "85%", textAlign: 'center'}}>
      <div className="row text-center p-5">
        <h1>Charges</h1>
        <p className="fs-4 text-muted">List of all charges and taxes</p>
      </div>
      <div className="row"></div>
      <div className="row">
        <div className="col">
          <img src="media/images/pricing0.svg" alt="" className=""></img>
          <h2 className="mb-4">Free equity delivery</h2>
          <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col">
          <img src="media/images/other-trades.svg" alt="" className=""></img>
          <h2 className="mb-4">Intraday and F&O trades</h2>
          <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col">
          <img src="media/images/pricing0.svg" alt="" className=""></img>
          <h2 className="mb-4">Free direct MF</h2>
          <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
