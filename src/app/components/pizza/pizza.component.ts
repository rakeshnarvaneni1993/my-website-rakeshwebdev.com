import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
// declare var Typed: any;
export class PizzaComponent implements OnInit {

  slice4 = false;
  slice1 = false;
  slice2 = false;
  slice3 = false;

  constructor() { }

  ngOnInit() {

    var typed2 = new Typed('.element', {
      strings: [
        '',
        'I am a Web Developer from Charlotte, NC.',
        'I Design, Develop and Deploy web applications.',
        'If you are a company, Access my resume below <i class="fa fa-arrow-down fa-3x" aria-hidden="true"></i>',
        'If you are an individual, contact me above <i class="fa fa-arrow-up fa-3x" aria-hidden="true"></i>'
      ],
      typeSpeed: 10,
      backSpeed: 0,
      fadeOut: true,
      loop: true
    });
  }

}
