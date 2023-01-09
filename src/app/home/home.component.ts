import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public students = [{
    name: "Toan",
    home: "Hai Duong"
  },
  {
    name: "Nam",
    home: "Hai Phong"
  },
  {
    name: "Son",
    home: "Hai Duong"
  }
  ];
}
