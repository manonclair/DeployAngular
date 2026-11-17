import { Routes } from '@angular/router';
import { About } from './about/about';
import { ConsultActivite } from './consult-activite/consult-activite';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'index.html', component: Home },
  { path: 'about', component: About },
  { path: 'consultAct', component: ConsultActivite },
  { path: 'consultAct/:id', component: ConsultActivite },
  { path: 'consultAct/:id/:id2', component: ConsultActivite },
];
