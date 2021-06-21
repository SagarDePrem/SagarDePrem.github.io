import { Component, OnInit } from '@angular/core';
import workItems from '/assets/work.json'
import avatar from 'assets/avatar.json'
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }
  workItems: any = [];
  ngOnInit(): void {
    this.workItems = workItems
  }
  avatar: any = avatar;

}
