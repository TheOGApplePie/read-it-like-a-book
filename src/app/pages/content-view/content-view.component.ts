import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit {
   pastedText: string ='';
   uploadedFile!: SafeResourceUrl;
   fileReader: FileReader = new FileReader();
  @ViewChild('myIFrame') myIFrame!: HTMLIFrameElement;
  constructor(
    private sanitizer: DomSanitizer
  ) { }
  ngOnInit(): void {
    this.uploadedFile = this.sanitizer.bypassSecurityTrustResourceUrl(JSON.parse(localStorage.getItem('uploadedFile')!));
    // this.myIFrame.contentWindow!.document.body.style.backgroundColor = "#ff0000";
    console.log(this.uploadedFile)
    
  }

}
