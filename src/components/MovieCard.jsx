import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div className='title'>
                <p>{movie?.l ? movie?.l : 'No Title'}</p>
                <span>{movie?.y ? movie?.y : 'Unknown'}</span>
            </div>
            <div>
                <img
                    src={movie?.i ? movie?.i.imageUrl : 'https://via.placeholder.com/400'}
                    alt={movie?.l ? movie?.l : 'No Title'}
                />
            </div>
            <div>
                <span>Rank {movie?.rank ? movie?.rank : 'Unranked'}</span>
            </div>
        </div>
    );
};

export default MovieCard;