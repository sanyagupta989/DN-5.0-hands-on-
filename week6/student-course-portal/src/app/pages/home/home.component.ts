import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // Hands-On 2 Task 1: binding demo
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  // Stats
  coursesAvailable = 12;
  enrolled = 3;
  gpa = 3.8;

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  // Lifecycle hook: fires once after inputs are set. Use for data fetching.
  ngOnInit(): void {
    // Simulate loading a course count
    this.coursesAvailable = 12;
    console.log('HomeComponent initialised — courses loaded');
  }

  // Lifecycle hook: clean up subscriptions / timers here.
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  /*
   * Binding notes:
   * [property]="value"    -> one-way, component -> DOM
   * (event)="handler()"   -> one-way, DOM -> component
   * [(ngModel)]="value"   -> two-way, DOM <-> component
   */
}
