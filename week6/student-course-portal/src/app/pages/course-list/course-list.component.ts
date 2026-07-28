import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent, Course } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  courses: Course[] = [
    { id: 1, name: 'Intro to Programming', code: 'CS101', credits: 3 },
    { id: 2, name: 'Data Structures',      code: 'CS201', credits: 4 },
    { id: 3, name: 'Web Development',      code: 'CS210', credits: 3 },
    { id: 4, name: 'Database Systems',     code: 'CS301', credits: 4 },
    { id: 5, name: 'Operating Systems',    code: 'CS310', credits: 4 },
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
