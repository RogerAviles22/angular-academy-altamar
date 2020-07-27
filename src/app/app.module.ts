import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
