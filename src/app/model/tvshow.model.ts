export interface TvShow {
  id?: number;
  title: string;
  year: number;
  runtime?: number;
  plot?: string;
  poster: string;
  rating?: number;
  onlineId?: number;
  seen?: boolean;
  overview?: string;
  status?: string;
}
