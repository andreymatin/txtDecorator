import { Component, OnInit, Pipe } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // Set title
  title = 'txtDecorator';

  // Get Current Year
  year = (new Date()).getFullYear();


  ngOnInit() {
//    console.log('Hello');
  }
}
