import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import CountryWords from '../utils/countries';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words='';
  Countries='';
  limit=20;

  handleSlideChange(newlimit: number){
    this.limit=newlimit;
  }
  generate(){
    this.words=arrayWords.slice(0, this.limit).join(' ');
  }
  generateRandomCountries(){
    this.Countries=CountryWords.slice(0, this.limit).join(', ');
  }
}
