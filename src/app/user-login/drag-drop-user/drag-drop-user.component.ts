import { Component } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { SignupService } from '../../signup.service';
import { OrganizationData } from '../organizationData';

@Component({
  selector: 'app-drag-drop-user',
  templateUrl: './drag-drop-user.component.html',
  styleUrls: ['./drag-drop-user.component.css']
})
export class DragDropUserComponent {

  public progress: number;
  public message: string;
  constructor(private http: HttpClient, private router: Router, private signUpService: SignupService) { }

  data: OrganizationData;

  abupload(files) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', 'http://35.189.155.116:8082/api/upload', formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response)
        this.message = event.body.toString();
      console.log(event);
    });
  }

  OnPost() {
    this.data = this.signUpService.getData();
    console.log(this.data);
    this.http.post('http://35.189.155.116:8082/api/endusers', this.data).subscribe(
      result => this.router.navigate(['/userlogin/login'])
    );
  }
}
