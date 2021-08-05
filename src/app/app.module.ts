import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ui-kit/header/header.component';
import { FooterComponent } from './components/ui-kit/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlidesComponent } from './components/ui-kit/slides/slides.component';
import { BigBannerComponent } from './components/ui-kit/big-banner/big-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    SlidesComponent,
    BigBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
