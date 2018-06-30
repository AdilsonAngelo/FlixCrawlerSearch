import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private durations: any[] = [
    { value: '30', view: '\u2264 30min' },
    { value: '60', view: '\u2264 1h' },
    { value: '90', view: '\u2264 1h30min' },
    { value: '120', view: '\u2264 2h' },
    { value: '150', view: '\u2264 2h30min' },
    { value: '180', view: '\u2264 3h' },
    { value: '210', view: '\u2264 3h30min' },
    { value: '240', view: '\u2264 4h' },
    { value: '999', view: '\u003E 4h' }
  ];
  private genres: string[] = ['Action', 'Adventure', 'Children/Family', 'Comedy', 'Crime', 'Drama', 'Epic',
    'Fantasy', 'Historical', 'Horror', 'Musical', 'Mystery', 'Romance', 'Science Fiction', 'Spy', 'Thriller', 'War', 'Western'];

  // SEARCH PARAMETERS
  private title: string;
  private director: string;
  // tslint:disable-next-line:no-inferrable-types
  private genre: string = 'Drama';
  private cast: string;
  // tslint:disable-next-line:no-inferrable-types
  private duration: number = 150;

  ngOnInit(): void {
  }
}
