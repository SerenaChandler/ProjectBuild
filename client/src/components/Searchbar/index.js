
import React from "react";


function Searchbar(props) {
  const { search, handleFormSubmit, handleInputChange } = props;


  return (
    <div className="row">

      <div className="col-lg-12">
        <div className="container">
          <h1>Book Search</h1>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={handleFormSubmit}
          >
            <input
              value={search}
              name="search"
              onChange={handleInputChange}
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="d-flex justify-content-end mt-4">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}


export default Searchbar;
