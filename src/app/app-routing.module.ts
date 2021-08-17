import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AllProductsComponent } from './pages/products/all-products/all-products.component';
import { DetailProductComponent } from './pages/products/detail-product/detail-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { AllServicesComponent } from './pages/services/all-services/all-services.component';
import { DetailsServicesComponent } from './pages/services/details-services/details-services.component';

import { ServicesComponent } from './pages/services/services.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'somos', component: AboutComponent },
  {
    path: 'services', component: ServicesComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllServicesComponent },
      { path: 'details/:id', component: DetailsServicesComponent },
    ]
  },
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllProductsComponent },
      { path: 'details/:id', component: DetailProductComponent },
    ]
  },
  { path: 'contacto', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
