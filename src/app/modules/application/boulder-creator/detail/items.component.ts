import { Component, OnInit } from '@angular/core';
import { DashboardDetail } from './detail';


@Component({
  selector: 'app-dashboard-card',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class DashboardDetailComponent implements OnInit {

  model = {} as DashboardDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
