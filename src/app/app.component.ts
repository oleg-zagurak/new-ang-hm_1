import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public badWords: string[] = ['java', 'tottenham'];
  public inputIsEmpty: string = '';
  public areaIsEmpty: string = '';
  public input: string = '';
  public area: string = '';
  public inputPlaceholder: string = 'word here...';
  public areaPlaceholder: string = 'text here...';

  constructor() { }
  ngOnInit(): void {
  }
  adding(): void {
    this.inputIsEmpty = this.input === "" ? 'empty' : '';
    this.inputPlaceholder = this.inputIsEmpty === '' ? 'word here...' : 'Please write a word!';
    if (this.input !== '') {
      this.input.split(' ').forEach(item => { if (item !== ' ' && item !== '') this.badWords.push(item); });
      this.input = '';
    }
  }
  reset(): void {
    this.badWords.length = 0;
    this.input = '';
    this.area = '';
    this.inputPlaceholder = 'word here...';
    this.areaPlaceholder = 'text here...';
    this.areaIsEmpty = this.inputIsEmpty = '';
  }
  cenzor(): void {
    this.areaIsEmpty = this.area === "" ? 'empty' : '';
    this.areaPlaceholder = this.areaIsEmpty === '' ? 'text here...' : 'Please write a text!';
    for (const word of this.badWords) {
      let patern = new RegExp(`${word}`, 'gi');
      let stars = word.split('').fill('*', 0).join('');
      this.area = this.area.replace(patern, stars);
    }
  }
}
