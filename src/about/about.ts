import { Component, OnInit }  from '@angular/core';
import { Router }     from '@angular/router';

const template = require('./about.html');

@Component({
  selector: 'about',
  template: template
})
export class About implements OnInit {

  constructor(
    public router: Router) { }
    ngOnInit() {}
    ngOnDestroy() {}

}
