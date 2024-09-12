import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function NavbarComponent(){
  let page = useParams();
  const dispatch = useDispatch();
    
  const movePage = () => {
      dispatch({
          type: "MOVE_PAGE",
          payload: page.page
      });
  }
    return(
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-danger shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand h1 mx-4" href="#">Hacktivflix</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" onClick={movePage} to="/1">Home</Link>
              </li>
              <li>
                <input type="text" className="form-control" name="" placeholder="Search movie..." id="" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }