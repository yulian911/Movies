import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

export type movieProps ={
  poster_path:string,
   overview: string,
    title:string,
     id:number,
     name:string,
}


type ThemeState = {
  movies:movieProps[]
};



const initialState: ThemeState = {
  movies:[]
};




export const movieSlice = createSlice({
  name:'theme',
  initialState,
  reducers:{
    addLikeMovie: (state,action) => {
      
      state.movies.push(action.payload)

    },
    dislikeMovie:(state,action) =>{
      console.log(action.payload)
      state.movies = state.movies.filter(f => f.id !== action.payload)
      console.log(state.movies)
      storage.setItem("persist:movies", JSON.stringify(state.movies))
    }
  }
})

export const {addLikeMovie,dislikeMovie} =movieSlice.actions
export  default movieSlice.reducer