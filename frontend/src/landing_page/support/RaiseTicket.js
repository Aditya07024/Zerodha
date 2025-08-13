import React from "react";

const RaiseTicket = () => {
  return (
    <div className="container my-5 px-5">
      <div className="row mb-5">
        <h1>To create a ticket, select a relevant topic</h1>
      </div>
      <div className="row">
        <div className="col">
          <h3 className="mb-4"><i class="fa-solid fa-circle-plus" style={{width:"10%"}}></i> Account Opening</h3>
            <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
              Online Account Opening
            </a>
            <br></br>
            <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
              Offline Account Opening
            </a>
            <br></br>
            <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
              Company, Partnership and HUF Account
            </a>
            <br></br>
            <a style={{ textDecoration: "none", lineHeight: "2" }} href="">Opening</a>
            <br></br>
            <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
              NRI Account Opening
            </a>
            <br></br>
            <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
              Charges at Zerodha
            </a>
            <b></b>
            <a style={{ textDecoration: "none", lineHeight: "2" }} href="">
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>
        </div>
        <div className="col">
          <h3 className="mb-4"><i class="fa-solid fa-person" style={{width:"10%"}}></i>Your Zerodha Account</h3>
            <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
              Login Credentials
            </a><br></br>
            <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
              Account Modification and Segment Addition
            </a><br></br>
            <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
              DP ID and bank details
            </a><br></br>
            <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
              Your Profile
            </a><br></br>
            <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
              Transfer and conversion of shares
            </a>
        </div>
        <div className="col">
          <h3><i class="fa-solid fa-chart-simple" style={{width:"10%"}}></i>Your Zerodha Account</h3>
          <a href="" style={{textDecoration:"none",lineHeight:"2"}}>Margin/leverage, Product and Ord-</a><br></br>
<a href="" style={{textDecoration:"none",lineHeight:"2"}}>Kite Web and Mobile</a><br></br>
<a href="" style={{textDecoration:"none",lineHeight:"2"}}>Trading FAQs</a><br></br>
<a href="" style={{textDecoration:"none",lineHeight:"2"}}>Corporate Actions</a><br></br>
<a href="" style={{textDecoration:"none",lineHeight:"2"}}>Sentinel</a><br></br>
<a href="" style={{textDecoration:"none",lineHeight:"2"}}>Kite API</a><br></br>
<a href="" style={{textDecoration:"none",lineHeight:"2"}}>Pi and other platforms</a>
        </div>
      </div>
    </div>
  );
};

export default RaiseTicket;
