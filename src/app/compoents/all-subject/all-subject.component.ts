import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.css'],
})
export class AllSubjectComponent implements OnInit {
  isDisplayName = false; // Popup visibility flag
  msg = ''; // Message for the popup
  subjects: subject[] = [];
  isLoading = false; // Loading state for better UX

  constructor(private service: SubjectService) {}

  ngOnInit(): void {
    this.getAllSubject();
  }

  getAllSubject() {
    this.isLoading = true; // Show loading spinner
    this.service.getAllSubjects().subscribe({
      next: (res: subject[]) => {
        this.subjects = res;
        this.isLoading = false; // Hide loading spinner
      },
      error: (err: any) => {
        console.error('Error fetching subjects:', err);
        alert('Failed to load subjects. Please try again.');
        this.isLoading = false;
      }
    });
  }

  deleteSubject(id: string, name: string) {
    // Show confirmation dialog
    const confirmDelete = confirm(`Are you sure you want to delete the subject "${name}"?`);
    if (!confirmDelete) {
      return; // Exit if user cancels
    }

    // Reset popup state to ensure animation triggers
    this.isDisplayName = false;
    this.msg = `${name}`; // Set the message
    this.isDisplayName = true; // Show the popup

    // Call the delete API
    this.service.deleteSubject(id).subscribe({
      next: (res: any) => {
        this.getAllSubject(); // Refresh the list after deletion
        // Hide the popup after animation duration (2.5s as per CSS)
        setTimeout(() => {
          this.isDisplayName = false;
        }, 2500); // Match with CSS fadeOut animation duration
      },
      error: (err: any) => {
        console.error('Error deleting subject:', err);
        this.msg = `Failed to delete subject "${name}"`;
        this.isDisplayName = true; // Show error message in popup
        setTimeout(() => {
          this.isDisplayName = false;
        }, 2500);
      }
    });
  }
}