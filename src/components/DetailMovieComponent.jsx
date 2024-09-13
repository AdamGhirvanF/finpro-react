import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { getData } from "../movies/action";

export default function DetailMovieComponent() {
  
  let idMovie = useParams(); 
  const dispatch = useDispatch();
  const {movie,page} = useSelector((state) => state);

  let similarIndex = Math.floor(1 + Math.random() * (20 - 1));
  if(similarIndex > 16){
    similarIndex = 16;
  }
  
  const [getMovieData, setMovieData] = useState({}); 
  

  useEffect(() => {
    getOneData();
    dispatch(getData(page));
  }, [idMovie]); 

  const getOneData = async () => {
    try {
      const data = await fetch(`http://www.omdbapi.com/?i=${idMovie.id}&apikey=${process.env.REACT_APP_API_KEY}`);
      const result = await data.json();
      setMovieData(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="row px-4">
        <div className="col-lg-12">
          <div className="card bg-dark text-light p-4 border-0">
            {getMovieData.hasOwnProperty('Title') && ( // Check if data has Title property (data loaded)
              <div className="row">
                <div className="col-12 col-lg-3 col-s-6">
                  <img
                    src={getMovieData.Poster}
                    className="img-fluid text-center"
                    style={{ width: "320px" }}
                    alt="Img loading.."
                  />
                </div>
                <div className="col-12 col-lg-8 col-s-6">
                  <h2>{getMovieData.Title}</h2>
                  <p>
                    {getMovieData.Year} | IMDB Rating {getMovieData.imdbRating} <span class="fa fa-star" style={{color: "orange"}}></span> | {getMovieData.Rated} | {getMovieData.Runtime}
                    <br />
                    <br />
                    <b>Genre:</b> {getMovieData.Genre}
                    <br />
                    <br />
                    <b>Sinopsis:</b>
                    <br />
                    {getMovieData.Plot}
                    <br />
                    <br />
                    <b>Actors: </b> {getMovieData.Actors}
                    <br />
                    <br />
                    <b>Director: </b> {getMovieData.Director}
                    <br />
                    <b>Writers: </b> {getMovieData.Writer}
                    <br />
                    <br />
                    <b>Awards: </b> {getMovieData.Awards}
                  </p>
                    <br />
                    <h4 className="mt-2">Ratings</h4>
                    <table>
                      <tr>
                        {getMovieData.Ratings && getMovieData.Ratings.length > 0 ? ( // Check if Ratings exist and have elements
                          getMovieData.Ratings.map((data) => (
                            <>                      
                              <th>{data.Source}</th>
                              <td className="px-1">: {data.Value}</td>
                            </>
                          ))
                        ) : (
                          <td>No ratings available</td> // Handle empty ratings
                        )}
                      </tr> 
                    </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row px-4">
        <h3 className="text-light">Similar Movie</h3>
        {movie.length > 0 ? movie.slice(similarIndex, similarIndex+4).map(function(data) {
            return(<>
                <div className="col-6 col-lg-3 col-md-3 col-sm-4 my-4">
                <Link to={`/detail-movie/${data.imdbID}`}>
                        <div className="img-container overflow-hidden" style={{height: "200px"}}>
                            <img src={data.Poster} className="card-img-top" alt="Img loading.."/>
                            <p className="image-title text-truncate">{data.Title}</p>
                            <p className="image-year">{data.Year}</p>
                        </div> 
                    </Link> {" "}<Outlet />
                </div>
            </>)
        }) : 
        <div className="col-12">
            <h1 className="text-light text-center mt-4">Loading...</h1>
        </div>}
      </div>
    </>
  );
}