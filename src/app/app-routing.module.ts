import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordFrequencyComponent } from './word-freq/word-freq.component';
import { WordCountComponent } from './word-count/word-count.component';
import { WordManipulationComponent } from './word-manipulation/word-manipulation.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
    { path: '', component: InputboxComponent, children: [
      { path: '', component: WordCountComponent }
    ] },
    { path: 'frequency', component: InputboxComponent, children: [
      { path: '', component: WordFrequencyComponent }
    ] },
    { path: 'manipulation', component: InputboxComponent, children: [
      { path: '', component: WordManipulationComponent }
    ] },
    { path: 'blog', component: BlogComponent },
    { path: 'privacy', component: PrivacyPolicyComponent },
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