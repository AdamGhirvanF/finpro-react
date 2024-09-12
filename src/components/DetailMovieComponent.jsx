import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailMovieComponent() {

  let idMovie = useParams(); // Get movie ID from URL params

  const [getMovieData, setMovieData] = useState({}); // Initialize as empty object

  useEffect(() => {
    getData();
  }, [idMovie]); // Re-run effect only when idMovie changes

  const getData = async () => {
    try {
      const data = await fetch("http://www.omdbapi.com/?i=" + idMovie.id + "&apikey=f790a9c0");
      const result = await data.json();
      setMovieData(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card bg-dark text-light p-4 border-0">
            {getMovieData.hasOwnProperty('Title') && ( // Check if data has Title property (data loaded)
              <div className="row">
                <img
                  src={getMovieData.Poster}
                  className="col-lg-3 img-fluid text-center"
                  style={{ width: "320px" }}
                  alt="Img loading.."
                />
                <div className="col-8">
                  <h3>{getMovieData.Title}</h3>
                  <p>
                    {getMovieData.Year}
                    <br />
                    <br />
                    <b>Duration:</b> {getMovieData.Runtime}
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
                </div>
                <div className="row">
                  <div className="col-4">
                    <h4 className="mt-2">Ratings</h4>
                    <table>
                        {getMovieData.Ratings && getMovieData.Ratings.length > 0 ? ( // Check if Ratings exist and have elements
                          getMovieData.Ratings.map((data) => (
                            <>                      
                            <tr>
                              <th>{data.Source}</th>
                              <td>:{data.Value}</td>
                            </tr>
                            </>
                          ))
                        ) : (
                          <td colSpan="...">No ratings available</td> // Handle empty ratings
                        )}
                        <tr>
                            <th>IMDB Rating</th>
                            <td>: {getMovieData.imdbRating} </td>
                        </tr>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}