const apiConfig = {
  baseUrl: "https://api.themovie.org/3/",
  apikey: "46a8682993caf1282e9f401f19dd4885",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
