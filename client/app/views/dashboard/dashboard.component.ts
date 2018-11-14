import { Component, OnInit } from '@angular/core';
import { BadcityComponent } from '../badcity/badcity.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'BadStack';

  constructor() { }

  ngOnInit() {
  }

}
