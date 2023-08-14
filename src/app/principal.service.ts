import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import {HttpClient, HttpParams} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { keys } from 'src/key/key';
import { DropdownComponente } from './dropdown/dropdown.component';
@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  public anumb: number = 0;
  public str: string = this.anumb.toString();
  public url = environment.host + this.str + keys.host
  
  constructor(private http: HttpClient) {
   }
   public getDog(): Dog{
    let dog = new Dog()
    dog.id = "lil ze"
    dog.url = "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg"
    return dog
  }

  public minus(){
    if(this.anumb > 0){
      this.anumb = this.anumb - 1;
    }else{
      alert ("Não há páginas menores que zero!")
    }
  }

  public plus(){
    this.anumb = this.anumb + 1;
  }

  public dogList():Observable<Dog[]>{
    
    this.str = this.anumb.toString();
    this.url = environment.host + this.str + keys.host
    console.log("Bem vindo(a) a pagina: "+this.str)
    console.log('Enviando pedido...')

    return this.http.get<Dog[]>(this.url).pipe(
      map((dogs: Dog[]) => dogs.slice(0,8))
    );
  }

  public dogListFiltered(pgn:string):Observable<Dog[]>{
    console.log("filtrando")
    this.str = this.anumb.toString()
    this.url = environment.host + this.str + keys.host +"&breed_ids="+pgn
    console.log("Bem vindo(a) a pagina: "+this.url + " atualizada para o id" + pgn)
    console.log('Enviando pedido...')

    return this.http.get<Dog[]>(this.url).pipe(
      map((dogs: Dog[]) => dogs.slice(0,8))
    );
  }
}
