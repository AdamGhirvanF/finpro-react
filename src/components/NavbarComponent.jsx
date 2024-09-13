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
      <nav class="navbar sticky-top navbar-dark bg-danger shadow-lg d-block">
        <div class="container-fluid">
          <Link class="navbar-brand h1 m-1" onClick={() => movePage()} to="/">Hacktivflix</Link>
          <div className="d-flex flex-grow-1 justify-content-end align-items-center">
            <ul className="navbar-nav d-flex flex-row align-items-center">
              <li className="nav-item ms-3"> {/* Adds margin between Home and search bar */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search movie..."
                  onBlur={(el) => searchNewMovie(el)}
                  ref={inputRef}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }