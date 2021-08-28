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
  workItems: any=[];
  workProjects: any = [];
  activeTab: any = [];
  activeWorkItems: any = {};

  ngOnInit(): void {
    this.workNodes = workNodes;
    this.workItems = workItems;

    for (let i=0; i < workNodes.length; i++){
      this.workProjects[workNodes[i].name] = []
    }
    console.log(workNodes)
    for (let i=0; i< workItems.length; i++){
      for (let j=0; j<workItems[i].tags.length; j++){
        this.workProjects[workItems[i].tags[j]].push(workItems[i])
      }
    }
    console.log(this.workProjects)

    // this.activeTab = workNodes[0].name;
    // this.setActiveTab(this.activeTab)
  }

  // setActiveTab(val: string){
  //   console.log(val)
  //   this.activeTab = val;
  //   this.activeWorkItems = {};


  //   for (let i = 0; i < workItems.length; i++) { 
  //     if (workItems[i].tags.includes(this.activeTab)){
  //       this.activeWorkItems.push(workItems[i])
  //     }
  //   }
  //   console.log(this.activeWorkItems)
  // }
}
