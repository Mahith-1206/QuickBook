import axios from "axios";

const getMovieController = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movieInfoUrl =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "?api_key=cd3b90152fe991306b189d1e8dd01428";
    const movieInfoResponse = await axios.get(movieInfoUrl);

    // Extract relevant data from the external API response
    const { id, original_title, overview, poster_path, release_date, runtime } =
      movieInfoResponse.data;
    const movieDetails = {
      id,
      original_title,
      overview,
      poster_path,
      release_date,
      runtime,
    };

    const movieTrailerUrl =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/videos?language=en-US&api_key=cd3b90152fe991306b189d1e8dd01428";

    const movieTrailerResponse = await axios.get(movieTrailerUrl);

    const trailer = movieTrailerResponse.data.results.find(
      (item) => item.type === "Trailer"
    );

    movieDetails.trailerKey = trailer.key;

    const movieCastUrl =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/credits?api_key=cd3b90152fe991306b189d1e8dd01428";

    const movieCastResponse = await axios.get(movieCastUrl);
    // Extract the first 4 cast members
    const first4Cast = movieCastResponse.data.cast.slice(0, 4);

    // Extract the first 4 crew members
    const first4Crew = movieCastResponse.data.crew.slice(0, 4);

    movieDetails.cast = first4Cast;
    movieDetails.crew = first4Crew;

    res.status(200).json({ success: true, movie: movieDetails });
  } catch (error) {
    console.error("Error getting movie details:", error);
    res
      .status(500)
      .json({ success: false, error: "Could not fetch movie details" });
  }
};

export { getMovieController };
