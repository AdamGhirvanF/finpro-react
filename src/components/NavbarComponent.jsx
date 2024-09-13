import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { getData } from "../movies/action";

export default function NavbarComponent(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
    
  const movePage = () => {
      dispatch({
          type: "MOVE_PAGE",
          payload: 1
      });
      
      dispatch({
        type: "SEARCH_MOVIE",
        payload: ""
      });
      
      dispatch(getData(1));

      if (inputRef.current) {
        inputRef.current.value = "";
      }
  }

  const searchNewMovie = (el) => {
    navigate("/")
    dispatch({
      type: "SEARCH_MOVIE",
      payload: el.target.value
  });
    dispatch(getData(1));
  }
    return(
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-danger shadow-lg">
        <div class="container-fluid">
          <Link class="navbar-brand h1 m-1" onClick={() => movePage()} to="/">Hacktivflix</Link>
          <div class="navbar" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" onClick={() => movePage()} to="/">Home</Link>
              </li>
            </ul>
          </div>
          <input type="text" className="form-control w-25" name="" onBlur={(el) => searchNewMovie(el)} placeholder="Search movie..." id="" ref={inputRef}/>
        </div>
      </nav>
    )
  }