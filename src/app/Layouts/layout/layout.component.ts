import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
showNavbar= true;

  private router = inject(Router);

  constructor(){
    this.router.events.subscribe(()=> {
      this.showNavbar = !['/login', '/register'].includes(this.router.url);
    });
  }
}
