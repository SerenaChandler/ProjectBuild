import React from "react";


function Nav() {
  return (

    <div>
         <nav className="mt-4">
                    <li className="d-inline mx-4 nav-item"><a href="/home" className="text-decoration-none">Google Books</a></li>
                    <li className="d-inline mx-4 nav-item"><a href="/search" className="text-decoration-none">Search</a></li>
                    <li className="d-inline mx-4 nav-item"><a href="/saved" className="text-decoration-none">Saved</a></li>
                </nav>
    </div>
 
  );
}

export default Nav;