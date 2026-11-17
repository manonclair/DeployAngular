import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Active {
  objectifs: string[] = [];
  
  removeItem(index: number): void {
  this.objectifs.splice(index, 1);
}
}
