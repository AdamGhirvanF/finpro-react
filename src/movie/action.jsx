
// export const getData = (page) => async (dispatch, getState) => {
export function getData(page) {
  return async function (dispatch, getState) {
    try {
        dispatch({
          type:"GET_ALL_MOVIES",
          payload:[]
        });
        
        const query = getState().movieName == "" ? "man" : getState().movieName;
        
        const data = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`);
        const dataSec = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}&page=${page+1}`);
        
        const result = await data.json();
        const resultSec = await dataSec.json();
        const finalResult = result.Search.concat(resultSec.Search);

        dispatch({
          type:"GET_ALL_MOVIES",
          payload:finalResult
        });
        
        dispatch({
          type:"GET_ALL_PAGES",
          payload:(result.totalResults - (result.totalResults % 20)) / 20
        });

    } catch (err) {
        console.log(err);
    }
  }
}

export function getOneData(idMovie){
  return async function (dispatch) {
    try {
      const data = await fetch(`http://www.omdbapi.com/?i=${idMovie.id}&apikey=${process.env.REACT_APP_API_KEY}`);
      const result = await data.json();
      
      dispatch({
        type:"GET_ONE_MOVIE",
        payload:result
      });
      
    } catch (err) {
      console.log(err);
    }
  };
}