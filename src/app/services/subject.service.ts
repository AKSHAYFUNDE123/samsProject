import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  // Add Subject

  addSubject(subject: any): Observable<any> {
    return this.http.post(
      'http://localhost:8091/subject/add-subject',
      subject,
      {
        responseType: 'text',
      }
    );
  }

  // Get All Subject

  getAllSubjects(): Observable<any> {
    return this.http.get('http://localhost:8091/subject/get-all-subjects');
  }

  // Delete Subject By Id

  deleteSubject(id:string):Observable<any>{
    return this.http.delete(`http://localhost:8091/subject/delete-subject/${id}`,{responseType:'text'});
  }
}
