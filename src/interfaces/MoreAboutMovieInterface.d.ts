export interface MoreAboutMovieInterface{
  id: number;

  genres:{
    id: number,
    name: string
  }[];

  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number | string;
}