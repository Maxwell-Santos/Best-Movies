export interface MovieContentInterface {
  
  id?: number,
  title?: string,
  poster_path?: string,
  genre_ids?: number[],
  release_date?: string,
  overview?: string,

  backdrop_path?: string;
  popularity?: number;
  
};

export interface MostPopularMovie{
  title?: string,
  backdrop_path?: string;
  popularity?: number;
  genre_ids?: number[],  
  release_date?: string,


}