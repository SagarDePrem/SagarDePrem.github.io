import { Component, OnInit } from '@angular/core';
import workNodes from '/assets/work_category.json'
import workItems from '/assets/work.json'


interface WorkNode {
  name: string;
  icon: string;
  items: [];
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  constructor() { 
  }
  workNodes: any= [];
  workItems: any=[]
  activeTab: any = [];
  activeWorkItems: any = [];

  ngOnInit(): void {
    this.workNodes = workNodes;
    this.workItems = workItems;
    this.activeTab = workNodes[0].name;
    this.setActiveTab(this.activeTab)
  }

  setActiveTab(val: string){
    console.log(val)
    this.activeTab = val;
    this.activeWorkItems = [];
    for (let i = 0; i < workItems.length; i++) { 
      if (workItems[i].tags.includes(this.activeTab)){
        this.activeWorkItems.push(workItems[i])
      }
    }
    // console.log(this.activeWorkItems)
  }
}
