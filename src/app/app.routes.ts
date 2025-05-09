import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {PokemonListComponent} from './pages/pokemon/pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './pages/pokemon/pokemon-details/pokemon-details.component';
import {YugiohListComponent} from './pages/yugioh/yugioh-list/yugioh-list.component';
import {YugiohDetailsComponent} from './pages/yugioh/yugioh-details/yugioh-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pokemon',
    children: [
      {
        path:'',
        component: PokemonListComponent
      },
      {
        path:'monster',
        component: PokemonDetailsComponent
      },
      {
        path:'monster/:id',
        component: PokemonDetailsComponent,
        runGuardsAndResolvers: 'paramsChange'
      }
    ]

  },
  {
    path: 'yugioh',
    children: [
      {
        path: '',
        component: YugiohListComponent
      },
      {
        path: 'monster',
        component: YugiohDetailsComponent
      },
      {
        path: 'monster/:id',
        component: YugiohDetailsComponent,
        runGuardsAndResolvers: 'paramsChange'
      }
    ]
  },
];
