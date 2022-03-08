import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StickyNavModule } from 'ng2-sticky-nav';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollToComponent } from './components/ui-kit/scroll-to/scroll-to.component';
import { HttpClientModule } from '@angular/common/http';
import { PageLoadingComponent } from './components/ui-kit/page-loading/page-loading.component';
import { AsideCategoryComponent } from './components/ui-kit/aside-category/aside-category.component';
import { NzTableModule } from 'ng-zorro-antd/table';


// ANT-DESIN
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingCartComponent } from './components/ui-kit/shopping-cart/shopping-cart.component';
import { MarkdownModule } from 'ngx-markdown';
import { NzModalModule } from 'ng-zorro-antd/modal';

registerLocaleData(es);
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
    ScrollToComponent,
    PageLoadingComponent,
    AsideCategoryComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCardModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzToolTipModule,
    NzInputNumberModule,
    NzTableModule,
    NzModalModule,
    FormsModule,
    StickyNavModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    { provide: Window, useValue: window },
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
