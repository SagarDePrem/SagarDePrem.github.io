import { Component, OnInit } from '@angular/core';
import * as data from '/assets/hero.json'
import avatar_image from '/assets/avatar.json'
import  skills from '/assets/skills.json'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  data: any = data;
  avatar_image: any = avatar_image;
  skills: any = skills;
  skill_groups: any = [];



  ngOnInit(){
    this.skills = skills;
 
  }

}
