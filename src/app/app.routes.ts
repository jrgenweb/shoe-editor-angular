import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { Signin } from './pages/signin/signin';
import { Signup } from './pages/signup/signup';
import { Customer } from './layouts/customer/customer';
import { Admin } from './layouts/admin/admin';
import { ProductCustomization } from './pages/product-customization/product-customization';
import { ProductsCustom } from './pages/products-custom/products-custom';
import { Error } from './pages/error/error';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
  { path: 'admin', component: Admin, children: [] }, //ez majd csak később

  {
    path: '',
    component: Customer,
    children: [
      { path: 'home', component: Home },
      { path: 'products', component: Products },
      { path: 'products/:slug', component: Products },
      { path: 'products-details', component: ProductDetails },
      { path: 'products-custom', component: ProductsCustom },
      { path: 'product-customize/:id', component: ProductCustomization }, //ideiglenesen kirakom ide
      { path: 'cart', component: Cart },
      { path: 'signin', component: Signin },
      { path: 'signup', component: Signup },
      { path: 'error', component: Error },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/error', pathMatch: 'full' },
    ],
  },
];
