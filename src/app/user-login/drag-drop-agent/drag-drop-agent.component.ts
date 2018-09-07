import { Component } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http'
import { Router } from '@angular/router';
// import { Headers,RequestOptions,RequestMethod } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';
import{ SignupService } from '../../signup.service'

@Component({
  selector: 'app-drag-drop-agent',
  templateUrl: './drag-drop-agent.component.html',
  styleUrls: ['./drag-drop-agent.component.css']
})
export class DragDropAgentComponent {

  public progress: number;
  public message: string;
  constructor(private http: HttpClient,private router: Router) { }

 public upload(files) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', 'http://172.23.238.225:5001/api/Upload', formData, {
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

  OnPost()
  {
    this.http.post('http://172.23.238.225:5001/api/agents','').subscribe();//result => this.router.navigate(['/uploadusercsv']));
  }
 }
