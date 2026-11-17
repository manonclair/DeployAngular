import { Component } from '@angular/core';
import { Active } from '../services/active';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  id!: number;
  objectif = '';
  modification = false;
  titreModifie = '';

  constructor(
    private route: ActivatedRoute,
    public active: Active,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.params['id']);
    this.objectif = this.active.objectifs[this.id];
  }

  supprimeElem(): void {
    this.active.removeItem(this.id);
    this.router.navigate(['/']);
  }

  modifier(): void {
    this.modification = true;
    this.titreModifie = this.objectif;
  }

  sauvegarder(): void {
    this.active.objectifs[this.id] = this.titreModifie;
    this.objectif = this.titreModifie;
    this.modification = false;
  }

  retour(): void {
    this.router.navigate(['/']);
  }
}