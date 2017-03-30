import { Component, OnInit }  from '@angular/core';
import { Router }     from '@angular/router';

const template = require('./header.html');

@Component({
  selector: 'header-common',
  template: template
})
export class Header implements OnInit {

  constructor(
    public router: Router) { }
    ngOnInit() {}
    ngOnDestroy() {}

}
