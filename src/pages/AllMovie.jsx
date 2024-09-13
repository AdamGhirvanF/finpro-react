import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardComponent,PaginationComponent } from '../components';
import { getData } from '../movies/action';

export default function AllMovie(){
    const {page, movie} = useSelector((state) => state);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getData(page));
    }, [page]);
    
    return(
        <>
        <h2 className="text-light">Movie Reccomendation</h2>
        <CardComponent movie={movie}/>
        <PaginationComponent />
        </>
    )
}