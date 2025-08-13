import React from "react";

function LeftSection({
  imageURL,
  prductName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 my-5">
          <h1 className="mt-5">{prductName}</h1>
          <p>{productDescription}</p>
            <a href={learnMore} style={{ textDecoration: "none" }} href=''>
              Learn More->
            </a>
        </div>
        <div className="col-6" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80%" }}>
          <img src={imageURL} alt={`${prductName} image`} style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
