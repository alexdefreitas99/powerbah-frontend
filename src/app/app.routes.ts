import { Routes } from '@angular/router';
import { PlatformMercadoLivreComponent } from './platform-mercado-livre/platform-mercado-livre.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'platform/mercado-livre', component: PlatformMercadoLivreComponent },
  { path: '', component: HomeComponent },
];
