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
  constructor(private principalService:PrincipalService){}
  ngOnInit() {
    this.dogList()
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
