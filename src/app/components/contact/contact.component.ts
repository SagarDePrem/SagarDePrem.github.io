import { Component, OnInit } from '@angular/core';
import bio from 'assets/bio.json'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  bio : any = bio;
  tomorrow = new Date(2017, 9, 20, 14,34)
  ngOnInit(): void {
  }

}
