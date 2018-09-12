import { Component } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Posts } from '../../models/post.model';

@Component({
  selector: 'app-drag-drop-user',
  templateUrl: './drag-drop-user.component.html',
  styleUrls: ['./drag-drop-user.component.css']
})
export class DragDropUserComponent {

  public progress: number;
  public message: string;
  constructor(private http: HttpClient) { }

abupload(files) {
  
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
    this.http.post<Posts[]>('http://172.23.238.225:5001/api/endusers',{"OrganisationName":"stackroute","email":"stackroute@gmail.in","password":"stackroute1","logoUrl":"logo@stackroute.com"}).subscribe(result =>console.log(result));
  }

}