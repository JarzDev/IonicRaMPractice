import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http:HttpClient) {}

  getCharacters(params : any){
    return this.http.get(environment.baseUrl + environment.character, {params});
  }
}
