import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllProductsComponent } from './pages/products/all-products/all-products.component';
import { ProductsComponent } from './pages/products/products.component';
import { AllServicesComponent } from './pages/services/all-services/all-services.component';
import { DetailsServicesComponent } from './pages/services/details-services/details-services.component';

import { ServicesComponent } from './pages/services/services.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
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
      // { path: 'details/:id', component: DetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
