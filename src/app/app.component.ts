import { Component, VERSION } from '@angular/core';
import { temperatures } from './Temperatures';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  temperatures = temperatures;
}
