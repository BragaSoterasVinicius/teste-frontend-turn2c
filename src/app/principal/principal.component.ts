import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { PrincipalService } from '../principal.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public dogs:Dog[] = [];
  public page:number = 0;
  constructor(private principalService:PrincipalService){}
  ngOnInit() {
    this.dogList()
  }
  public changePageMais(){
    console.log("page changed")
    this.principalService.plus()
    this.page = this.page + 1
    this.dogList()
  }
  public changePageMenos(){
    console.log("page changed")
    this.principalService.minus()
    if(this.page>0){
      this.page = this.page - 1
    this.dogList()}
  }
  public dogFilList(pgn:string){
    console.log("atualiznando fotos segundo a raca")
    this.principalService.dogListFiltered(pgn).subscribe(
      Response =>{
        this.dogs = Response
      },
      error =>{
        alert("Houve algum erro")
      }
    )
  }
  public dogList(){
    this.principalService.dogList().subscribe(
      Response =>{
        this.dogs = Response
      },
      error =>{
        alert("Houve algum erro")
      }
    )
  }
}
