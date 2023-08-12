import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private url = environment.host
  constructor(private http: HttpClient) {
   }
   public getDog(): Dog{
    let dog = new Dog()
    dog.url = "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg"
    return dog
  }

  public dogList():Observable<Dog[]>{
    return this.http.get<Dog[]>(this.url)
  }
}
