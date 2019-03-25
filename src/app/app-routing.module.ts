import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MlaComponent } from './mla/mla.component';
import { CountComponent } from './Count/count.component';

const appRoutes: Routes = [
    { path: 'count', component: CountComponent },
    { path: 'mla', component: MlaComponent },
    { path: '**', redirectTo: '/' }
  ]

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: false, // <-- debugging purposes only
          //preloadingStrategy: SelectivePreloadingStrategyService,
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }