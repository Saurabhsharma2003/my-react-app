
<Link
  to={`/movie/${movie.id}`}
  className="movie-card"
  key={movie.id}
>
  <img src={movie.image} alt={movie.title} />

  <div className="movie-info">
    <h3>{movie.title}</h3>
    <p>{movie.category}</p>
    <span>⭐ {movie.rating}</span>
  </div>
</Link>
