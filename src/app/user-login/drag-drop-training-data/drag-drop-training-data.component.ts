import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drag-drop-training-data',
  templateUrl: './drag-drop-training-data.component.html',
  styleUrls: ['./drag-drop-training-data.component.css']
})
export class DragDropTrainingDataComponent implements OnInit {

  selectedFile: File = null;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() { }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onClick() {
    const fd = new FormData();
    fd.append('training', this.selectedFile);

    const httpOptions = {
      headers: new HttpHeaders({ 'Access': 'Allow_Service' })
    };
    this.http.post('http://13.126.8.255/intent/upload', fd, httpOptions).subscribe(res => {
      console.log(res);
      setTimeout(a => {
        this.router.navigate(['/userlogin/login'])
      }, 1000);
    });
  }
}
