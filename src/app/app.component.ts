import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  isDisabled = false

  constructor(){
  }

  getStyle(){
    return {
      backgroundColor: this.isDisabled ?'red':'blue',
      color: this.isDisabled ?'white':'black'
    }
  }

  getClass(){
    return {
      heading: this.isDisabled,
      active: this.isDisabled
    }
  }


  toggleDisabled(){
    this.isDisabled = !this.isDisabled
  }


}
