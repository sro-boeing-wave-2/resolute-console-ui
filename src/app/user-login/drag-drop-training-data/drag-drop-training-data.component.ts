import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drag-drop-training-data',
  templateUrl: './drag-drop-training-data.component.html',
  styleUrls: ['./drag-drop-training-data.component.css']
})
export class DragDropTrainingDataComponent implements OnInit {

  selectedFile: File = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onClick() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://35.221.88.74/intent/upload', fd).subscribe(res => {console.log(res)});
  }
}
