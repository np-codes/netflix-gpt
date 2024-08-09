import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from '../utils/constants'
import {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies} from '../utils/moviesSlice'
import { useEffect, useState } from "react";
//---------------------------- This file contain all TMDB APIs used ------------------------------------------------------
//-------------------------------- APIs to fetch list of movies -----------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

	const getNowPlayingMovies = async () =>{
		const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results))
	}
	useEffect(()=>{
		!nowPlayingMovies && getNowPlayingMovies();
	},[]);
};

export const usePopularMovies = () => {
    const dispatch = useDispatch();
    const PopularMovies = useSelector((store) => store.movies.PopularMovies)

	const getPopularMovies = async () =>{
		const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
		const json = await data.json();
		!PopularMovies && dispatch(addPopularMovies(json.results))
	}
	useEffect(()=>{
		getPopularMovies();
	},[]);
};

export const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const TopRatedMovies = useSelector((store) => store.movies.TopRatedMovies)

	const getTopRatedMovies = async () =>{
		const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
		const json = await data.json();
		dispatch(addTopRatedMovies(json.results))
	}
	useEffect(()=>{
		!TopRatedMovies && getTopRatedMovies();
	},[]);
};

export const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const UpcomingMovies = useSelector((store) => store.movies.UpcomingMovies)

	const getUpcomingMovies = async () =>{
		const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
		const json = await data.json();
		dispatch(addUpcomingMovies(json.results))
	}
	useEffect(()=>{
		!UpcomingMovies && getUpcomingMovies();
	},[]);
};


//-------------------------------- API to fetch movies recommended by openai -------------------------------------------------
//--------------------------------------------- This is not hook ------------------------------------------------------------

export const SearchRecommendedMovies = async(moviename) => {
	const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${moviename}&include_adult=false&language=en-US&page=1`,API_OPTIONS);
	const json = await data.json();
	return json.results;
};
