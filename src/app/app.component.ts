import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trade Me, what can we help you find?';
  pw: '';

  public sConsole(event) {
    event.preventDefault();
    const password = document.getElementById('password');
    console.log(password.value);
  }
}

//
// var topMenuChoice = document.getElementById("firstinput");
// document.getElementById("result").innerHTML = topMenuChoice.value;
