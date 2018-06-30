import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public durations: any[] = [
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
  public genres: string[] = ['Action', 'Adventure', 'Children/Family', 'Comedy', 'Crime', 'Drama', 'Epic',
    'Fantasy', 'Historical', 'Horror', 'Musical', 'Mystery', 'Romance', 'Science Fiction', 'Spy', 'Thriller', 'War', 'Western'];

  // SEARCH PARAMETERS
  public title: string;
  public director: string;
  // tslint:disable-next-line:no-inferrable-types
  public genre: string = 'Drama';
  public cast: string;
  // tslint:disable-next-line:no-inferrable-types
  public duration: number = 150;

  ngOnInit(): void {
  }
}
