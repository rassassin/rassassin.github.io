import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgClass, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
@HostListener('document:click', ['$event'])
export class NavbarComponent {
  isMenuOpened: boolean = false;
  constructor() {}

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
