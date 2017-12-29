import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email = 'narvaneni.rakesh2012@gmail.com'
  constructor() { }

  ngOnInit() {
  }

}
