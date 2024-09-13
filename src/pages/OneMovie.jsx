import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailMovieComponent } from '../components';
import { getOneData } from '../movies/action';
import { useParams } from "react-router-dom";

export default function OneMovie(){
    const {singleMovie} = useSelector((state) => state);
    let idMovie = useParams(); 
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getOneData(idMovie.id));
    }, [idMovie]);
    
    
    return(
        <>
        <DetailMovieComponent/>
        </>
    )
}