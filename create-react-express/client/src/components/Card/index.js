import React, {useState} from "react";
import API from "../../utils/API"


function Card(props) {
    const [bookState, setBookState] = useState({

    })


    const getBooks = () => {
        API.getBook()
          .then(results => {
            setBookState(results);
          })
          .catch(err => console.log(err));
      };


  return (
                       
                        <div className="card my-3">
                        <div className="d-flex justify-content-end mt-4">
                            <button className="btn btn-outline-primary d-inline mx-1"><a href={props.link}>View</a></button>
                            <button className="btn btn-outline-primary d-inline mx-4" >Save</button>
                        </div>
                        <h1 className="mx-4">{props.title}</h1>
                        <h2 className="mx-4">{props.author}</h2>
                        <div className="d-flex justify-content-start">
                            <img src={props.image}
                                alt="" width="250" height="250" className="mx-4 mb-4"/>
                                <p className="mx-4">
                                    {props.description}
                                </p>
                        </div>
                    </div>
                   
  );
}

export default Card;