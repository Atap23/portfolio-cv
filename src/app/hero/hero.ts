import { Component } from '@angular/core';
import { Portrait } from './portrait/portrait';

@Component({
  selector: 'app-hero',
  imports: [
    Portrait
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
