import { gender } from "./enums"

export interface genre {
  id: number,
  name: string
}

export interface company {
  id: number,
  name: string,
  logo_path: string,
  origin_country: string,
}

export interface dates {
  maximum: string,
  minimum: string
}

export interface cast {
  id: number,
  name: string,
  gender: gender,
  known_for_department: string,
  popularity: number,
  profile_path: string,
  character: string,
}

export interface crew {
  id: number,
  name: string,
  gender: gender,
  known_for_department: string,
  popularity: number,
  profile_path: string,
  department: string,
  job: string,
}

export interface peopleMovieCast {
  id: number,
  title: string,
  genre_ids: genre[],
  original_language: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: number,
  vote_average: number,
  vote_count: string,
  character: string,
}

export interface peopleMovieCrew {
  id: number,
  title: string,
  genre_ids: genre[],
  original_language: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  vote_average: number,
  vote_count: number,
  department: string,
  job: string,
}

export interface peopleTvCast {
  id: number,
  name: string,
  genre_ids: genre[],
  original_language: string,
  overview: string,
  popularity: number,
  poster_path: string,
  first_air_date: string,
  vote_average: number,
  vote_count: number,
  character: string,
  episode_count: number,
}

export interface peopleTvCrew {
  id: number,
  name: string,
  genre_ids: genre[],
  original_language: string,
  overview: string,
  popularity: number,
  poster_path: string,
  first_air_date: string,
  vote_average: number,
  vote_count: number,
  department: string,
  job: string,
}

export interface image {
  file_path: string,
  width: number,
  height: number,
}

export interface episodeToAir {
  id: number,
  name: string,
  overview: string,
  vote_average: number,
  vote_count: number,
  air_date: string,
  episode_number: number,
  episode_type: string,
  runtime: number,
  season_number: number,
  show_id: number,        // this is tv_id
  still_path: string,
}

export interface network {
  id: number,
  name: string,
  logo_path: string,
  origin_country: string,
  homepage: string,
}

export interface season {
  id: number,
  name: string,
  overview: string,
  episode_count: number,
  air_date: string,
  poster_path: string,
  season_number: number,
  vote_average: number,
}

export interface keywords {
  id: number,
  name: string
}

export interface translation {
  name: string,
  english_name: string,
  iso_3166_1: string,
  iso_639_1: string,
  data: {
    overview: string,
  }
}

export interface episode {
  id: number,
  air_date: string,
  episode_number: number,
  episode_type: string,
  name: string,
  overview: string,
  runtime: number,
  season_number: number,
  show_id: number,
  still_path: string,
  vote_average: number,
  vote_count: number,
  crew: crew[],
  guest_stars: cast[],
}

export interface role {
  episode_count: number,
  character: string,
}

export interface seasonCast {
  id: number,
  name: string,
  gender: gender,
  known_for_department: string,
  popularity: number,
  profile_path: string,
  roles: role[],
  total_episode_count: number
}

export interface job {
  episode_count: number,
  job: string,
}

export interface seasonCrew {
  id: number,
  name: string,
  gender: gender,
  known_for_department: string,
  popularity: number,
  profile_path: string,
  department: string,
  jobs: job[],
  total_episode_count: number

}

// trending
// trending/{MediaType}/{TimeWindow}?api_key=
export interface movieCol {
  id: number,
  title: string,
  original_language: string,
  overview: string,
  poster_path: string,
  media_type: string,
  genre_ids: genre[],
  popularity: number,
  release_date: string,
  vote_average: number,
  vote_count: number
}

export interface trending_All_Movie {
  page: number,
  results: movieCol[],
  total_pages: number,
  total_results: number
}

export interface tvCol {
  id: number,
  name: string,
  original_language: string,
  overview: string,
  poster_path: string,
  media_type: string,
  genre_ids: genre[],
  popularity: number,
  first_air_date: string,
  vote_average: number,
  vote_count: number,
}

export interface trending_Tv {
  page: number,
  results: tvCol[],
  total_pages: number,
  total_results: number
}

export interface peopleCol {
  id: number,
  name: string,
  popularity: number,
  gender: gender,
  known_for_department: string,
  profile_path: string,
  known_for: movieCol[]
}

export interface trending_People {
  page: number,
  results: peopleCol[],
  total_pages: number,
  total_results: number
}

// movie list
// movie/{movieType}?api_key
export interface movieList {
  dates: dates,
  page: number,
  results: movieCol[],
  total_pages: number,
  total_results: number
}

// movies
// movie/{movie_id}?api_key
export interface movieDetails {
  id: number,
  budget: number,
  genres: genre[],
  homepage: string,
  original_language: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: company[],
  release_date: string,
  runtime: number,
  status: string,
  tagline: string,
  title: string,
  vote_average: number,
  vote_count: number
}

// movie/{movie_id}/credits?api_key
export interface movieCredit {
  id: number,
  cast: cast[],
  crew: crew[]
}

// movie/{movie_id}/images?api_key
export interface movieImage {
  id: number,
  backdrops: image[],
  logos: image[],
  posters: image[],
}

// movie/{movie_id}/recommendations?api_key
export interface movieRecommendations {
  page: number,
  results: movieCol[],
  total_pages: number,
  total_results: number
}

// movie/{movie_id}/similar?api_key
export interface movieSimilar {
  page: number,
  results: movieCol[],
  total_pages: number,
  total_results: number
}

// geners
// genre/{genreType}/list?api_key
export interface geners {
  genres: genre[]
}

// company
// company/{company_id}?api_key
export interface companyDetails {
  id: number,
  name: string,
  description: string,
  headquarters: string,
  homepage: string,
  logo_path: string,
  origin_country: string,
}

// discover
// discover/movie?api_key
export interface discoverMovie {
  page: number,
  results: movieCol[],
  total_pages: number,
  total_results: number
}

// discover/tv?api_key
export interface discoverTv {
  page: number,
  results: tvCol[],
  total_pages: number,
  total_results: number
}

// people list
// person/popular?api_key
export interface peopleList {
  page: number,
  results: peopleCol[],
  total_pages: number,
  total_results: number
}

// people
// person/{people_id}?api_key
export interface peopleDetails {
  id: number,
  name: string,
  biography: string,
  birthday: string,
  deathday: string,
  gender: number,
  homepage: string,
  known_for_department: string,
  place_of_birth: string,
  popularity: string,
  profile_path: string,
}

// person/{people_id}/images?api_key
export interface peopleImage {
  id: number,
  profiles: image[],
}

// person/{people_id}/movie_credits?api_key
export interface peopleMovieCredits {
  id: number,
  cast: peopleMovieCast[],
  crew: peopleMovieCrew[]
}

// person/{people_id}/tv_credits?api_key
export interface peopleTvCredits {
  id: number,
  cast: peopleTvCast[],
  crew: peopleTvCrew[]
}





// Tv list
// tv/{tvType}?api_key
export interface tvList {
  page: number,
  results: tvCol[],
  total_pages: number,
  total_results: number
}

// Tv
// tv/{tv_id}?api_key
export interface tvDetails {
  id: number,
  name: string,
  first_air_date: string,
  genres: genre[],
  homepage: string,
  last_air_date: string,
  last_episode_to_air: episodeToAir,
  next_episode_to_air: episodeToAir,
  networks: network[],
  number_of_episodes: number,
  number_of_seasons: number,
  original_language: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: company[],
  seasons: season[],
  status: string,
  tagline: string,
  type: string,
  vote_average: number,
  vote_count: number
}

// tv/{tv_id}/credits?api_key
export interface tvCredit {
  id: number,
  cast: cast[],
  crew: crew[]
}

// tv/{tv_id}/images?api_key
export interface tvImage {
  id: number,
  backdrops: image[],
  logos: image[],
  posters: image[],
}

// tv/{tv_id}/recommendations?api_key
export interface tvRecommendations {
  page: number,
  results: tvCol[],
  total_pages: number,
  total_results: number
}

// tv/{tv_id}/similar?api_key
export interface tvSimilar {
  page: number,
  results: tvCol[],
  total_pages: number,
  total_results: number
}

// tv/{tv_id}/keywords?api_key
export interface tvKeywords {
  id: number,
  results: keywords[],
}

// tv/{tv_id}/translations?api_key
export interface tvTranslations {
  id: number,
  translations: translation[],
}



// season
// tv/{tv_id}/season/{number_of_seasons}?api_key
export interface seasonDetails {
  id: number,
  poster_path: string,
  season_number: number,
  vote_average: number,
  overview: string,
  air_date: string,
  name: string,
  episodes: episode[],
}

// tv/{tv_id}/season/{number_of_seasons}/aggregate_credits?api_key
export interface seasonCredit {
  id: number,
  cast: seasonCast[],
  crew: seasonCrew[]
}

// tv/{tv_id}/season/{number_of_seasons}/images?api_key
export interface tvImage {
  id: number,
  posters: image[],
}


// tv/{tv_id}/season/{number_of_seasons}/translations?api_key
export interface tvTranslations {
  id: number,
  translations: translation[],
}






// episode
// tv/{tv_id}/season/{number_of_seasons}/episode/{number_of_episodes}?api_key
export interface episodeDetails {
  id: number,
  name: string,
  air_date: string,
  episode_number: number,
  overview: string,
  runtime: number,
  season_number: number,
  still_path: string,
  crew: crew[],
  guest_stars: cast[],
  vote_average: number,
  vote_count: number,
}

// tv/{tv_id}/season/{number_of_seasons}/episode/{number_of_episodes}/credits?api_key
export interface episodeCredit {
  id: number,
  cast: cast[],
  crew: crew[]
  guest_stars: cast[]
}

// tv/{tv_id}/season/{number_of_seasons}/episode/{number_of_episodes}/images?api_key
export interface episodeImage {
  id: number,
  stills: image[],
}

// tv/{tv_id}/season/{number_of_seasons}/episode/{number_of_episodes}/translations?api_key
export interface tvTranslations {
  id: number,
  translations: translation[],
}
