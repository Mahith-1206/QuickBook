import axios from "axios";

const getMovieController = async (req, res) => {
  try {
    const movieId = req.params.id;
    const externalApiUrl =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "?api_key=cd3b90152fe991306b189d1e8dd01428";
    const response = await axios.get(externalApiUrl);

    // Extract relevant data from the external API response
    const { id, original_title } = response.data;
    const movieDetails = { id, original_title };

    res.status(200).json({ success: true, movie: movieDetails });
  } catch (error) {
    console.error("Error getting movie details:", error);
    res
      .status(500)
      .json({ success: false, error: "Could not fetch movie details" });
  }
};

export { getMovieController };
