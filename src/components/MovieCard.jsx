import React from 'react';

const MovieCard = ({ movie: { title, poster_path, release_date, original_language, vote_average } }) => {
  return (
    <div className="movie_card">
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
        alt={title}
      />

      <div className="mt-4">
        <h3 className="text-white">{title}</h3>

        {/* Flexbox for aligning rating, language, and year in one line */}
        <div className="content flex items-center gap-1 text-gray-300">
          {/* Rating with star icon */}
          <div className="rating flex items-center gap-1">
            <img src="star.svg" alt="Star Icon" className="w-5 h-5" />
            <p className='text-white'>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>

          <span>•</span>
          <p className="lang uppercase">{original_language}</p>
          <span>•</span>

          <p className="year">{release_date ? release_date.split('-')[0] : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
