import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Active } from '../services/active';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  nbItems: number = 4;
  btnText: string = "Envoyer";
  objectifText: string = "";

  constructor(
    private monRouteur: Router,
    public active: Active,
  ) {}
  ajoutItem() {
    this.active.objectifs.push(this.objectifText);
    this.nbItems = this.active.objectifs.length;
    setTimeout(() => this.monRouteur.navigate(['/about']), 1000);
  }

  ngOnInit() {
    this.nbItems = this.active.objectifs.length;
  }

  consulterActivite(index: number) {
  this.monRouteur.navigate(['/consultAct', index]);
}
}
