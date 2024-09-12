import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"

export default function CardComponent(movie){
    
    return(
        <>
            <div className="row">
                {movie.movie.length >= 0 && movie.movie.map(function(data) {
                    return(<>
                        <div className="col-6 col-lg-3 col-md-3 col-sm-4 my-4">
                                <div className="img-container overflow-hidden" style={{height: "200px"}}>
                                    <img src={data.Poster} className="card-img-top" alt="Img loading.."/>
                                    <p className="image-title text-truncate">{data.Title}</p>
                                    <p className="image-year">{data.Year}</p>
                                    <a href="" className="watch-btn btn btn-danger d-grid gap-2">Watch</a>
                                    <Link to={`/detail-movie/${data.imdbID}`} className="details-btn btn btn-primary d-grid gap-2">Details</Link> {" "}
                                    <Outlet />
                                </div> 
                        </div>
                    </>)
                })}
            </div>
        </>
    )
}