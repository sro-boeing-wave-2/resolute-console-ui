import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop-agent',
  templateUrl: './drag-drop-agent.component.html',
  styleUrls: ['./drag-drop-agent.component.css']
})
export class DragDropAgentComponent implements OnInit {

  function(){
    var dropzone = document.getElementById('dropzone');

    dropzone.ondrop = function(e) {
      e.preventDefault();
      this.className = 'dropzone';
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

  constructor() { }

  ngOnInit() {

  }

}
