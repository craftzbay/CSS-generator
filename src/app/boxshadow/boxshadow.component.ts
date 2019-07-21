import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxshadow',
  templateUrl: './boxshadow.component.html',
  styleUrls: ['./boxshadow.component.css']
})
export class BoxshadowComponent implements OnInit {
  horizantal = '5';
  vertical = '5';
  blur = '10';
  spread = '5';
  color = '#816d6dff';
  
  constructor() { }

  ngOnInit() {
  }

}
