import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css'],
})
export class AddSubjectComponent {
  addedUser: any;
  isDisplayName = 0;

  constructor(private service: SubjectService) {}

  subject = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.required,
    ]),
    subjectCode: new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(9999),
      Validators.required,
    ]),
    department: new FormControl('', Validators.required),
    faculty: new FormControl('', Validators.required),
  });

  addSubject() {
    this.service.addSubject(this.subject.value).subscribe({
      next: (res: any) => {
        try {
          console.log('Raw Response:', res);
          console.log('Response Type:', typeof res);

          let parsedResponse = res;
          if (typeof res === 'string') {
            // Check if the response looks like JSON
            if (res.trim().startsWith('{') || res.trim().startsWith('[')) {
              try {
                parsedResponse = JSON.parse(res);
              } catch (parseError) {
                console.error('Failed to parse response as JSON:', parseError);
                alert('Error: Invalid response format from server.');
                return;
              }
            } else {
              // Handle non-JSON response
              console.warn('Response is not JSON:', res);
              alert('Server response: becouse subject is duplicate ' + res);
              return;
            }
          }

          this.addedUser = parsedResponse;

          if (this.subject.value.name === this.addedUser.name) {
            this.cleanInput();
          } else {
            alert('Subject has already been added');
          }
        } catch (error) {
          console.error('Error in addSubject:', error);
          alert('An unexpected error occurred while adding the subject.');
        }
      },
      error: (err: any) => {
        console.error('API Error:', err);
        alert('Failed to add subject. Check console for details.');
      },
    });
  }

  cleanInput() {
    this.isDisplayName = 1;
    this.subject.reset();
  }
}
