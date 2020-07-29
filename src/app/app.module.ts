import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexComponent } from './secondary/index/index.component';
import { NosotrosComponent } from './secondary/nosotros/nosotros.component';

const rutas: Routes = [
 { path: '', component: IndexComponent },
 { path: 'nosotros', component: NosotrosComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(rutas) ],
  declarations: [ AppComponent, NavbarComponent, FooterComponent, IndexComponent, NosotrosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
