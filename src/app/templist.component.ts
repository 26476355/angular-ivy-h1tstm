import { Component, VERSION } from '@angular/core';
import { temperatures} from './Temperatures';



@Component({
  selector: 'templist',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  
})
export class TempComponent {
  temperatures = temperatures;

  share() {
    window.alert('The product has been shared!');
  }
}

