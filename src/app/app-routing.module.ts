import { Routes } from '@angular/router';
import { MetaGuard } from 'ng2-meta';

import { WordFrequencyComponent } from './word-freq/word-freq.component';
import { WordCountComponent } from './word-count/word-count.component';
import { WordManipulationComponent } from './word-manipulation/word-manipulation.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { InputboxComponent } from './inputbox/inputbox.component';

export const routes: Routes = [
  { 
    path: '', 
    component: InputboxComponent, children: [{ path: '', component: WordCountComponent }],
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Word Counter',
        description: 'Counts the total number of words in text and input',
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
        description: 'Counts the number of times a specific word occurs in text and input',
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
        description: 'A tool that changes words and input to uppercase, lowercase, and spongecase',
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
      description: 'Information regarding our policies for collection, use, and disclosure of personal data',
      'og:title': 'Privacy Policy',
    } 
  }
];