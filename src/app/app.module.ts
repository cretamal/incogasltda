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
import { CardComponent } from './components/ui-kit/card/card.component';
import { ButtonComponent } from './components/ui-kit/button/button.component';
import { QuickShortcutsComponent } from './components/ui-kit/quick-shortcuts/quick-shortcuts.component';
import { TeaserComponent } from './components/ui-kit/teaser/teaser.component';
import { WorksComponent } from './components/ui-kit/works/works.component';
import { BreadcrumbsComponent } from './components/ui-kit/breadcrumbs/breadcrumbs.component';

import { AllServicesComponent } from './pages/services/all-services/all-services.component';
import { ProductsComponent } from './pages/products/products.component';
import { AllProductsComponent } from './pages/products/all-products/all-products.component';
import { DetailsServicesComponent } from './pages/services/details-services/details-services.component';
import { GridCardComponent } from './components/ui-kit/grid-card/grid-card.component';
import { DetailProductComponent } from './pages/products/detail-product/detail-product.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToComponent } from './components/ui-kit/scroll-to/scroll-to.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    SlidesComponent,
    BigBannerComponent,
    CardComponent,
    ButtonComponent,
    QuickShortcutsComponent,
    TeaserComponent,
    WorksComponent,
    BreadcrumbsComponent,
    AllServicesComponent,
    ProductsComponent,
    AllProductsComponent,
    DetailsServicesComponent,
    GridCardComponent,
    DetailProductComponent,
    AboutComponent,
    ContactComponent,
    ScrollToComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
