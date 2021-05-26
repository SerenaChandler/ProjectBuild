import React, { Component } from "react";

class Searchbar extends Component {
  
    state = {
      query : ""
    }

    handleOnChange = event => { 
        console.log ("handleOnChange[24]" + event.target.name +"," + event.target.value); 
        const { name, value } = event.target;
        this.setState ( {
          [name] : value
        });
      }
    
      handleOnSubmit =  event => {
        event.preventDefault();
        console.log ("Form submitted with" + this.state.query); 
        this.props.onSubmit(this.state.query); 
      }
    
 render() {
  return (

    <div className="row">
                    <div className="col-lg-12">
                        <div className="container">
                            <h1>Book Search</h1>
                            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleOnSubmit}>
                                <input className="form-control mr-sm-2 " type="text" placeholder="Search"
                                    aria-label="Search" data-length="80" name="query" onChange={this.handleOnChange} value={this.state.query}/>
                                <div className="d-flex justify-content-end mt-4">
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
 
  );
}
}

export default Searchbar;