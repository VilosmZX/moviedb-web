import React from 'react';
import { useEffect, useState } from 'react';
import  './App.css';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';

const API_URL = 'https://imdb8.p.rapidapi.com/auto-complete';

const App = () => {
    
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}?q=${title}`, {
            headers: {
                'X-RapidAPI-Key': '8259075b20msh8ff5c35111a7496p1e5967jsn537bb2a3bc16',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
            },
        });
        const data = await response.json();
        setMovies(data.d);
    };

    useEffect(() => {
        searchMovies(searchTerm);
    }, [searchTerm]);

    return (
        <>
            <div className='app'>
                <h1>JMovie</h1>
                <div className='search'>
                    <input 
                        placeholder='Search Movies'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>Movies not found!</h2>
                        </div>    
                    )}
            </div>
            <Footer />
        </>
    )
};

export default App;