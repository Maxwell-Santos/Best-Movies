export interface MoreAboutMovieInterface{
  id: number;
  poster_path: string;
  title: string;
  overview: string;

  genres:{
    id: number,
    name: string
  }[];

  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number | string;
}