import { NgModule } from '@angular/core';
import { ContatoListComponent } from './contato/contato-list/contato-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'contatos', component: ContatoListComponent },
  { path: '', redirectTo: 'contatos', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
