import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor () {
    this.buttonPressed = false;
    this.loggedPressCounter = 0;
    this.loggedPress = [];
  }

  onPress() {
    this.loggedPressCounter++;
    // this.loggedPress.push(this.loggedPress.length + 1);
    this.loggedPress.push(new Date()); 
    if (this.buttonPressed) {
      this.buttonPressed = false;
      return;
    }
    this.buttonPressed = true;
  }
}
