import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class GradientComponent implements OnInit {
  color1 = '#ffffff3a';
  color2 = '#1d2749ff';
  direction = 'to left';
  arrow = 1;
  selectArrow(id){
    this.arrow = id
  }
  constructor() { }

  ngOnInit() {
  }

}
