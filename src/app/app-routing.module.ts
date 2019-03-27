import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordFrequencyComponent } from './word-freq/word-freq.component';
import { WordCountComponent } from './word-count/word-count.component';

const appRoutes: Routes = [
    { path: '', component: WordCountComponent },
    { path: 'frequency', component: WordFrequencyComponent },
    { path: '**',  redirectTo: '/' }
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