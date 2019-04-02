import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordFrequencyComponent } from './word-freq/word-freq.component';
import { WordCountComponent } from './word-count/word-count.component';
import { WordManipulationComponent } from './word-manipulation/word-manipulation.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { InputboxComponent } from './inputbox/inputbox.component';

const appRoutes: Routes = [
    { 
      path: '', 
      component: InputboxComponent, children: [{ path: '', component: WordCountComponent }],
      data: {
        title: 'Word Counter',
        description: 'Counts the total number of words in text and input',
        author: 'Steven King',
        keywords: 'Word, Words, Number, Twitter 280 character limit, Counter, Count, Sentences, Tool'
      }
    },
    { 
      path: 'frequency', 
      component: InputboxComponent, children: [{ path: '', component: WordFrequencyComponent }],
      data: {
        title: 'Word Frequency',
        description: 'Counts the number of times a specific word occurs in text and input',
        author: 'Steven King',
        keywords: 'Word, Words, Number, Frequency, Amount, How many, Sentences, Tool'
      }
    },
    { 
      path: 'manipulation', 
      component: InputboxComponent, children: [{ path: '', component: WordManipulationComponent }],
      data: {
        title: 'Word Manipulation',
        description: 'A tool that changes words and input to uppercase, lowercase, and spongecase',
        author: 'Steven King',
        keywords: 'Word, Words, Manipulation, Change, Capital, Uppercase, Lowercase, Tool'
      }
    },
    { 
      path: 'privacy', 
      component: PrivacyPolicyComponent,
      data: {
        title: 'Privacy Policy',
        description: 'Information regarding our policies for collection, use, and disclosure of personal data',
        author: 'Riley Kitchen',
        keywords: 'Privacy policy, Information, Data, Legal'
      } 
    },
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