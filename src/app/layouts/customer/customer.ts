import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../../components/customer/nav-bar/nav-bar';

@Component({
  selector: 'app-customer',
  imports: [RouterOutlet, NavBar],
  templateUrl: './customer.html',
  styleUrl: './customer.scss',
})
export class Customer {}
