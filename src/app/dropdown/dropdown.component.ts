import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrincipalService } from '../principal.service';
import { dropdownUrl } from 'src/dropdownUrl/dropdownUrl';
import { PrincipalComponent } from '../principal/principal.component';
@Component({
  selector: 'app-dropdown',
  template: '<div> <select id="dogRaces" (click)="fun()"><option value=-1>Todas</option><option *ngFor="let r of options" [value]=r.id> {{r.name}}</option></select></div>',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponente implements OnInit{
  identif: number = 0;
  options: any[] = [];
  constructor(private http: HttpClient,private principalComponent:PrincipalComponent, private principalService:PrincipalService){}
  ngOnInit() {
    this.fetchData();

    //this.race = [
    //  {Id:1, Name: "test" },
    //]
  }
  fun(){
    
    let value = (<HTMLSelectElement>document.getElementById('dogRaces')).value;
    if (value=="-1"){
      this.principalService.dogList()
      this.principalComponent.dogList()
  }else{
      console.log(value)
      this.principalService.dogListFiltered(value)
      this.principalComponent.dogFilList(value)
  }}
  fetchData(): void {
    const apiUrl = dropdownUrl.host
    this.http.get(apiUrl).subscribe(
      (data:any) => {
        this.options = data;
        console.log(this.options);

      },
      (error: any) => {
        console.error("Houveram problemas para pegar os dados da url do dropdown.", error)
      }
    )
  }
}
