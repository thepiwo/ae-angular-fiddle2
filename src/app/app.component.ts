import {Component} from '@angular/core';
import { Crypto } from '@aeternity/aepp-sdk/es/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ae-angular-fiddle2';

  constructor() {
    console.log(Crypto);
  }
}
