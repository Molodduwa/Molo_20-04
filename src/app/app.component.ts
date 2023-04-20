import { Component } from '@angular/core';
import { Team } from './models/team.model';
import { ServiceResponse } from './models/service.response';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  teams:Team[]
  serviceResponse:ServiceResponse
  oServiceResponse:Observable<ServiceResponse>
  serviceURL="https://www.balldontlie.io/api/v1/teams/"

  constructor(public http:HttpClient) {
    this.makeTypedRequest();
  }
  makeTypedRequest() : void
  {
    alert("richiesta");
    this.oServiceResponse = this.http.get<ServiceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.teams = d.data;});
  } 
  /* sort(){
  this.teams = this.teams.sort((a, b) => a.conferance.localeCompare(b.conferance) || a.division.localeCompare(b.division));
  } */
}
