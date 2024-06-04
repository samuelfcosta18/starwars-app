import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiswService {
  constructor(private http: HttpClient) {}

  getfilm(){
    return this.http.get('https://swapi.dev/api/planets/2/');
  }
  getmovie() {
    return this.http.get('https://swapi.dev/api/planets/1/');
  }
  getplaneta3() {
    return this.http.get('https://swapi.dev/api/planets/6/');
  }
  getpessoa1() {
    return this.http.get('https://swapi.dev/api/people/1/');
  }
  getpessoa2() {
    return this.http.get('https://swapi.dev/api/people/4/');
  }
  getmovie2() {
    return this.http.get('https://swapi.dev/api/films/1/');
  }
  getmovie3() {
    return this.http.get('https://swapi.dev/api/films/2/');
  }
  getmovie4() {
    return this.http.get('https://swapi.dev/api/films/3/');
  }
  getTPM() {
    return this.http.get('https://swapi.dev/api/films/4/');
  }
  getAOTC() {
    return this.http.get('https://swapi.dev/api/films/5/');
  }
  getROTS() {
    return this.http.get('https://swapi.dev/api/films/6/');
  }
}
