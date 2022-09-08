import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { Vias } from './vias';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dashboard-card',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ListComponent implements OnInit {

  model = new Vias;
  loaded: boolean;
  plus: boolean;
  old: number;
  showOldText: boolean;

  constructor(
    private service: TutorialService) {
    this.loaded = false;
    this.plus = true;
    this.old = 1;
    this.showOldText = true;
  }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.loaded = false;
  }

  toggle() {
    this.plus = !this.plus;
    return this.plus;
  }

  showOld(indexOld : number) : boolean {
    return !(this.old == indexOld);
  }

  getOpacity(old : number) {
    if(old == 4)
      return 0.4;
    
    if(old == 3)
      return 0.6;

    if(old == 2)
      return 0.7;

    return 1;
  }

}
