import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop-user',
  templateUrl: './drag-drop-user.component.html',
  styleUrls: ['./drag-drop-user.component.css']
})
export class DragDropUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 (function(){
      var dropzone = document.getElementById('dropzone');
      var uploads = document.getElementById('uploads');


      dropzone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'dropzone';
          console.log(e.dataTransfer.files);
      };

      dropzone.ondragover = function() {
        this.className = 'dropzone dragover';
        return false;
      };

      dropzone.ondragleave = function () {
        this.className = 'dropzone';
        return false;
      };
    }
  )
  }

}
