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
  @ViewChild('canvas') canvas!: HTMLCanvasElement;
  constructor(
  ) { }
  ngOnInit(): void {
  }
}
