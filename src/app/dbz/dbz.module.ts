import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    CharacterListComponent,
    CharacterFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
