import { Component, OnInit } from '@angular/core';
import {state,style,trigger} from "@angular/animations";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('normalState', [
      state('default', style({
        marginLeft: 0,
      })),
      state('onLoad', style({
        marginLeft: '10%'
      }))
    ])
  ]
})
export class AboutMeComponent implements OnInit {

  stateOfAnimation = 'default'

  constructor() { }

  ngOnInit() {
    this.stateOfAnimation = 'onLoad'
  }

}
