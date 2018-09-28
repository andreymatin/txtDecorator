import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',

]
})

export class AppComponent implements OnInit {
  // Set title
  title = 'txtDecorator';
  subtitle = 'web-typographycal experiments';
  ver = '0.2';

  // Get Current Year
  year = (new Date()).getFullYear();

  ngOnInit() {
  }
}
