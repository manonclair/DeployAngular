import { Component } from '@angular/core';
import { Active } from '../services/active';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  constructor(public active: Active) {}
}