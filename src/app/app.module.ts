import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { ButtonComponent } from './cover/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { FootComponent } from './foot/foot.component';
import { PortfolioIconbuttonComponent } from './portfolio/portfolio-iconbutton/portfolio-iconbutton.component';
import { ExpEduComponent } from './exp-edu/exp-edu.component';


@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    ButtonComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ReferenceComponent,
    ContactComponent,
    FootComponent,
    PortfolioIconbuttonComponent,
    ExpEduComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
