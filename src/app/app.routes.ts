import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './component/home/home/home.component';
import {PokemonListComponent} from './component/pokemon/pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './component/pokemon/pokemon-details/pokemon-details/pokemon-details.component';
import {YugiohListComponent} from './component/yugioh/yugioh-list/yugioh-list/yugioh-list.component';
import {YugiohDetailsComponent} from './component/yugioh/yugioh-details/yugioh-details/yugioh-details.component';

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
