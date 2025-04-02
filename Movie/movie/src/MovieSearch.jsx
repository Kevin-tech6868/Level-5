import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "26f03259"; 
const API_URL = "https://www.omdbapi.com/";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(API_URL, {
          params: {
            apikey: API_KEY,
            s: searchTerm,
          },
        });
        if (response.data.Response === "True") {
          setMovies(response.data.Search);
        } else {
          setError(response.data.Error);
          setMovies([]);
        }
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
      }
      setLoading(false);
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Database Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie..."
        className="border p-2 w-full mb-4"
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="border p-2 rounded shadow">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              className="w-full h-auto"
            />
            <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
