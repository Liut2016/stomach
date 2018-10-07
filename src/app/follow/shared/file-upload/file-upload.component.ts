import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {
  filename = 'test';
  ngOnInit() {}
  selector(event) {
    console.log('this in the file upload selector');
    // let file = new FormData();
    // let fileList: FileList = event.target.files;
    // if (fileList.length > 0) {
    //
    // }
  }
}
