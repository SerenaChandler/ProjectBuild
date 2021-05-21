import React from "react";
// import Card from "../Card"


function CardContainer({children}) {
  return (

    <div className="container-fluid ">

      <h1 className="text-center">Saved Books</h1>
      <div className="container-fluid">
        {children}

      </div>
    </div>
  );
}

export default CardContainer;