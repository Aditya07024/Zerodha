import React from "react";

function LeftSection({
  imageURL,
  prductName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={`${prductName} image`} />
        </div>
        <div className="col-6 px-5 mt-5">
          <h1 className="mt-5">{prductName}</h1>
          <p>{productDescription}</p>
            <a href={tryDemo} style={{ textDecoration: "none" }} className="me-5">
              Try Demo->
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }} className="ms-4">
              Learn More->
            </a><br></br><br></br>
            <a href={googlePlay} className="me-3">
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img src="media/images/appStoreBadge.svg"></img>
            </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
