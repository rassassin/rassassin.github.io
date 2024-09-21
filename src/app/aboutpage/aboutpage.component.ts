import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkhistoryComponent } from "../workhistory/workhistory.component";

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [RouterModule, CommonModule, WorkhistoryComponent],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.css'
})

export class AboutpageComponent {
}