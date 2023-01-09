import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public cities = [
    {
      name: "Hanoi",
      temp: 20
    },
    {
      name: "New York",
      temp: -5
    },
    {
      name: "Paris",
      temp: -1
    },
    {
      name: "Bangkok",
      temp: 30
    }
  ]
}
