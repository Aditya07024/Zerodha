import React from "react";

const Stats = () => {
  return (
    <div className="container">
      <div className="row px-5">
        <div className="col-6 p-5">
          <h1 className="mb-5">Trust with confidence</h1>
          <h2 className="fs-3">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with 23.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-3">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-3">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-3">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 px-5 pt-4">
          <img src="media/images/ecosystem.png" alt="statimage" style={{width:'100%'}}/>
          <div className="text-center mt-2">
            <a href='' style={{textDecoration:'none'}}><b>Explore our products-&gt;</b></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
