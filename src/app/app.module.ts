import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { DesplazarArribaComponent } from './desplazar-arriba/desplazar-arriba.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CarruselComponent } from './carrusel/carrusel.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ProyectoComponent,
    SkillsComponent,
    ContactoComponent,
    SocialComponent,
    FooterComponent,
    DesplazarArribaComponent,
    CarruselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SharedModule,
    ButtonModule
  ],
  exports:[
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: Aura
      }
  })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
