import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string= 'https://ghibliapi.vercel.app/films';
// CRUD - Create(post) , Read (get), 
  constructor(private http: HttpClient) {}

  getMovies(){
    return this.http.get(this.url)
  }

  getMovieById(id: string){
    return this.http.get(this.url + '/' + id);   // Ben thirrjen e id per filmin

  }
}
