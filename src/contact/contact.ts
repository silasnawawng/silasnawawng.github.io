import { Component, OnInit }  from '@angular/core';
import { Router }     from '@angular/router';

const template = require('./contact.html');

@Component({
  selector: 'contact',
  template: template
})
export class Contact implements OnInit {

  constructor(
    public router: Router) { }
    ngOnInit() {}
    ngOnDestroy() {}

}
