import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"

export default function CardComponent(){
    const movie = useSelector((state) => state)
    
    return(
        <>
            <div className="row">
                {movie.movie.length > 0 ? movie.movie.map(function(data) {
                    return(<>
                        <div className="col-6 col-lg-3 col-md-3 col-sm-4 my-4">
                        <Link to={`/detail-movie/${data.imdbID}`}>
                                <div className="img-container overflow-hidden" style={{height: "200px"}}>
                                    <img src={data.Poster} className="card-img-top" alt="Poster not available"/>
                                    <p className="image-title text-truncate">{data.Title}</p>
                                    <p className="image-year">{data.Year}</p>
                                </div> 
                            </Link> {" "}<Outlet />
                        </div>
                    </>)
                }) : 
                <div className="col-12">
                    <h1 className="text-light text-center mt-4">{movie.movieName.length >= 3 ? "Loading" : "Error too many results"}</h1>
                </div>}
            </div>
        </>
    )
}