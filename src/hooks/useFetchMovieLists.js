import { useDispatch } from "react-redux";
import { API_OPTIONS } from '../utils/constants'
import {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies} from '../utils/moviesSlice'
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
	const getNowPlayingMovies = async () =>{
		const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results))
	}
	useEffect(()=>{
		getNowPlayingMovies();
	},[]);
};

export const usePopularMovies = () => {
    const dispatch = useDispatch();
	const getPopularMovies = async () =>{
		const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
		const json = await data.json();
		dispatch(addPopularMovies(json.results))
	}
	useEffect(()=>{
		getPopularMovies();
	},[]);
};

export const useTopRatedMovies = () => {
    const dispatch = useDispatch();
	const getTopRatedMovies = async () =>{
		const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
		const json = await data.json();
		dispatch(addTopRatedMovies(json.results))
	}
	useEffect(()=>{
		getTopRatedMovies();
	},[]);
};

export const useUpcomingMovies = () => {
    const dispatch = useDispatch();
	const getUpcomingMovies = async () =>{
		const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
		const json = await data.json();
		dispatch(addUpcomingMovies(json.results))
	}
	useEffect(()=>{
		getUpcomingMovies();
	},[]);
};