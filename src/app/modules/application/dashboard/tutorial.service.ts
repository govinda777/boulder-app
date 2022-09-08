import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DashboardCard } from './card/card';
import { CARD } from './card/mock-card';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  card: DashboardCard;
  constructor(private http: HttpClient) {
    this.card = new DashboardCard;
   }

  getCard(): DashboardCard {
    this.card = CARD;
    
    return this.card;
  }

}
