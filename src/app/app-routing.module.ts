import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './contatti/contatti.component';
import { EventiComponent } from './eventi/eventi.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Menu", component: MenuComponent },
  { path: "Galleria", component: GalleriaComponent},
  { path: "Eventi", component: EventiComponent},
  { path: "Contatti", component: ContattiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
