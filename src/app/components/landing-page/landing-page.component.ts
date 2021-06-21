import { Component, OnInit } from '@angular/core';
import * as data from '/assets/hero.json'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  data: any = data;

  ngOnInit(){
    console.log(data)
  }

}
