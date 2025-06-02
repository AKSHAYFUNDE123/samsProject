import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css'],
})
export class EditSubjectComponent {
  isDisplayName: any;

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




  editSubject() {}


}
