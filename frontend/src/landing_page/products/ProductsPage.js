import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import DownPage from "./DownPage";

const ProductsPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        prductName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        prductName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore
      />
      <LeftSection
        imageURL="media/images/coin.png"
        prductName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/landing.svg"
        prductName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        prductName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <h4 className="m-5 justify-content-center d-flex">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </h4>
      <div className="row text-center mt-5">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="container py-5" style={{ width: "70%" }}>
        <div className="row my-5">
          <div className="col">
            <DownPage
              image="media/images/zerodhaFundhouse.png"
              description="
Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals."
            />
          </div>
          <div className="col">
            <DownPage
              image="media/images/sensibullLogo.svg"
              description="
Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more."
            />
          </div>
          <div className="col">
            <DownPage
              image="media/images/tijori.svg"
              description="
Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more."
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <DownPage
              image="media/images/streakLogo.png"
              description="
Systematic trading platform
that allows you to create and backtest
strategies without coding."
            />
          </div>
          <div className="col">
            <DownPage
              image="media/images/smallcaseLogo.png"
              description="
Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs"
            />
          </div>
          <div className="col">
            <DownPage
              image="media/images/dittoLogo.png"
              description="
Personalized advice on life
and health insurance. No spam
and no mis-selling.
"
            />
          </div>
        </div>
        <div className="row text-center mt-5">
          <button
            className="p-2 btn btn-primary mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default ProductsPage;
