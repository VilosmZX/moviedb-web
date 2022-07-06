import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div className='title'>
                <p>{movie?.l}</p>
                <span>{movie?.y}</span>
            </div>
            <div>
                <img
                    src={movie?.i ? movie?.i.imageUrl : 'https://via.placeholder.com/400'}
                    alt={movie?.l}
                />
            </div>
            <div>
                <span>Rank {movie?.rank}</span>
            </div>
        </div>
    );
};

export default MovieCard;