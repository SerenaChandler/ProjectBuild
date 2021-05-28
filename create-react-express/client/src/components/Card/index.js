import React, { useState } from "react";
import API from "../../utils/API";

function Card(props) {
  const { link, title, image, author, description, handleSaveBook } = props;

  return (
    <div className="card my-3">
      <div className="d-flex justify-content-end mt-4">
        <a className="text-decoration-none" href={link} target="_blank" rel="noreferrer">
          <button className="btn btn-outline-primary d-inline mx-1">
            View
          </button>{" "}
        </a>
        <button className="btn btn-outline-primary d-inline mx-4" onClick={handleSaveBook} >Save</button>
      </div>
      <h1 className="mx-4">{title}</h1>
      <h2 className="mx-4">{author}</h2>
      <div className="d-flex justify-content-start">
        <img
          src={image}
          alt=""
          width="250"
          height="250"
          className="mx-4 mb-4"
        />
        <p className="mx-4">{description}</p>
      </div>
    </div>
  );
}

export default Card;
