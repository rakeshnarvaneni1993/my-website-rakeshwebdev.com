import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  slice4 = false;
  slice1 = false;
  slice2 = false;
  slice3 = false;

  constructor() { }

  ngOnInit() {
  }

}
