import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
         addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
         addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
          addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})

export default moviesSlice.reducer;

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions;