import { Component } from '@angular/core';
import avatar from 'assets/avatar.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS';
  showFiller = false;
  avatar: any = avatar;
}
