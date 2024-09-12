import { Link, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

export default function PaginationComponent(){
    let {page} = useSelector((state) => state);

    useEffect(() => {

    }, [page]);
    
    const dispatch = useDispatch();
    
    const movePage = (index) => {
        dispatch({
            type: "MOVE_PAGE",
            payload: index
        });
    }
    
    const index = parseInt(page);
    
    return(
        <>
            <nav>
            <ul className="pagination d-flex justify-content-center">
                <li className={index == 1 ? "page-item disabled" : "page-item"} ><Link className="page-link" onClick={() => movePage(index == 1 ? 1 : index-1)} to={`/${index == 1 ? 1 : index-1}`}>Previous</Link></li>{" "}
                <Outlet />
                <li className="page-item active"><Link className="page-link" onClick={() => movePage(index)} to={`/${index}`}>{index}</Link></li>{" "}
                <Outlet />
                <li className="page-item"><Link className="page-link" onClick={() => movePage(index+1)} to={`/${index+1}`}>{index+1}</Link></li>{" "}
                <Outlet />
                <li className="page-item"><Link className="page-link" onClick={() => movePage(index+2)} to={`/${index+2}`}>{index+2}</Link></li>{" "}
                <Outlet />
                <li className="page-item"><Link className="page-link" onClick={() => movePage(index+1)} to={`/${index+1}`}>Next</Link></li>{" "}
                <Outlet />
            </ul>
            </nav>
        </>
    )
}