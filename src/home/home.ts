import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

const template = require('./home.html');

@Component({
  selector: 'home',
  template: template,
})
export class Home {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(
    public router: Router,) { }

}
