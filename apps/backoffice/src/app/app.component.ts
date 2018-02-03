import { Component, OnInit } from '@angular/core';
import { Mylib } from '@bug2/fake-db';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  caption = '';

  constructor(
    private mylib: Mylib
  ) {
    this.caption = mylib.getCaption();
  }

  ngOnInit() {}
}
