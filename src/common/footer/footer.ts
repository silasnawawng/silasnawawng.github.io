import { Component, OnInit }  from '@angular/core';
import { Router }     from '@angular/router';

const template = require('./footer.html');

@Component({
  selector: 'footer-common',
  template: template
})
export class Footer implements OnInit {

  constructor(
    public router: Router) { }
    ngOnInit() {}
    ngOnDestroy() {}

}
