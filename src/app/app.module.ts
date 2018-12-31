import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageInfoComponent } from './components/pages/page-info/page-info.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageNotfoundComponent } from './components/pages/page-notfound/page-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PageInfoComponent,
    PageHomeComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
