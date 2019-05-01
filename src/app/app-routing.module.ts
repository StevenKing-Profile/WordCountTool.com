import { Routes } from '@angular/router';
import { MetaGuard } from 'ng2-meta';

import { WordFrequencyComponent } from './word-frequency/frequency.component';
import { WordCountComponent } from './word-count/word-count.component';
import { WordManipulationComponent } from './word-manipulation/word-manipulation.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    component: InputboxComponent, children: [{ path: '', component: WordCountComponent }],
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Word Counter',
        description: 'Word Count Tool offers a word counter and more to help you write.',
        'og:title': 'Word Counter',
      }
    }
  },
  { 
    path: 'frequency', 
    component: InputboxComponent, children: [{ path: '', component: WordFrequencyComponent }],
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Word Frequency',
        description: 'Our word frequency tool counts the number of times a specific word occurs in text and input.',
        'og-title': 'Word Frequency',
      }
    }
  },
  { 
    path: 'manipulation', 
    component: InputboxComponent, children: [{ path: '', component: WordManipulationComponent }],
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Word Manipulation',
        description: 'Our word manipulation tool changes words and input to uppercase, lowercase, and spongecase.',
        'og:title': 'Word Manipulation',
      }
    }
  },
  { 
    path: 'privacy', 
    component: PrivacyPolicyComponent,
    canActivate: [MetaGuard],
    data: {
      title: 'Privacy Policy',
      description: 'Information regarding our policies for collection, use, and disclosure of personal data.',
      'og:title': 'Privacy Policy',
    } 
  },
  { path: '**',  redirectTo: '/' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
