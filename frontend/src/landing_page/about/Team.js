import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row pb-5" style={{ width: "90%" }}>
        <div className="col">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="media/images/nithinKamath.jpg"
              style={{ width: "50%", borderRadius: "50%" }}
              alt="Nithin Kamath"
            />
          </div>
          <div className="row">
            <h4
              className="pt-4 text-muted"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Nithin Kamath
            </h4>
            <br></br>
            <p
              className="text-muted"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Founder, CEO
            </p>
          </div>
        </div>
        <div className="col-7">
          <h3 className=" pb-4">People</h3>
          <p className="pe-5 text-muted">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br></br>
            <br></br>
            He is a member of the SEBI Secondary Market Advisory Committee4
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br></br>
            <br></br>
            Playing basketball is his zen. Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
