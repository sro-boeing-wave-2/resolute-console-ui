import { Component } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
import { Router } from '@angular/router';
// import { Headers,RequestOptions,RequestMethod } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';
import { SignupService } from '../../signup.service'
import { LoginService } from '../../login.service';
import { OrganizationData } from '../organizationData';

@Component({
  selector: 'app-drag-drop-agent',
  templateUrl: './drag-drop-agent.component.html',
  styleUrls: ['./drag-drop-agent.component.css']
})
export class DragDropAgentComponent {

  public progress: number;
  public message: string;
  constructor(private http: HttpClient, private router: Router, private signUpService: SignupService) { }

  data: OrganizationData;

  public upload(files) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', 'http://35.189.155.116:8082/api/Upload', formData, {
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

  OnPost(data) {
    console.log("Post");
    console.log('getdata');
    this.data = this.signUpService.getData();
    console.log(this.data);
    this.http.post('http://35.189.155.116:8082/api/agents', this.data).subscribe();
  }
}
