import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdsenseModule } from 'ng2-adsense';

import { AppComponent } from './app.component';
import { CountComponent } from './Count/count.component';
import { CountService } from './Count/count.service';
import { NavbarComponent } from './Navbar/navbar.component';
import { FooterComponent } from './Footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, 
    CountComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdsenseModule.forRoot({adClient: 'ca-pub-7640562161899788', adSlot: 7259870550,}),
  ],
  providers: [
    CountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
