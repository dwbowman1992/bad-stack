import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { interval } from 'rxjs';


const APIEndpoint = environment.apiUrl;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tokenInterval = interval(100000).subscribe(x => {
    this.checkToken();
  });

  constructor(private dataservice: DataService, private http: HttpClient) {

  }

  checkToken() {
    const token = this.dataservice.getCurrentUserToken();
    this.http
      .request(
        'GET',
        'api/session/isAuthenticated',
        {
          responseType: 'json',
          params: {
            token: token
          }
        })
      .subscribe((data:any) => {
        if (!data.authenticated) {
         this.dataservice.removeCurrentUser();
         this.tokenInterval.unsubscribe();
        }
      });
  }

  ngOnInit() {

  }

}
