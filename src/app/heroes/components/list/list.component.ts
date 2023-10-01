import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
  public heroeEliminado?: string;

  removeLastHero(): void {
    this.heroeEliminado = this.heroNames.pop();
  }
}
