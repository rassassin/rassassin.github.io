import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgClass, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor() {}
}
