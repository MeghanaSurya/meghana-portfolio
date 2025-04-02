import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for ngIf, ngFor, ngClass

import { projects } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // ✅ Include it here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = projects;
  activeIndex: number | null = null;

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
