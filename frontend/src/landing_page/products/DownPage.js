import React from "react";

function DownPage({image,description}){
  return (
    <div className="container">
      <div className="row">
        <img src={image} alt='' style={{width: "70%"}}/>
        <p className="mt-5 text-muted" style={{fontSize:"80%"}}>{description}</p>
      </div>
    </div>
  );
};

export default DownPage;
