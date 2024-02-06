import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('pastedText') pastedText!: HTMLTextAreaElement;
  disabled = true;
  contentForm!: FormGroup
  fileReader: FileReader = new FileReader()
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
this.initForm()
  }
  initForm(){
    this.contentForm = this.formBuilder.group({
      uploadedFile:[''],
      pastedText:['']
    })
  }
  handleFile(file:any){
    this.fileReader.readAsDataURL(file.target.files[0]);
    this.fileReader.onload = ()=>{
      // console.log(this.fileReader.result)
      // const blob = new Blob([this.fileReader.result!],{type: file.target.files[0].type})
      // console.log(blob)
      // localStorage.setItem('uploadedFile',JSON.stringify(blob))
      localStorage.setItem('uploadedFile',JSON.stringify(this.fileReader.result));

    }
    }
  viewContent(){
    this.router.navigate(['/view-content'])
  }
  onSubmit(){
    if(this.contentForm.value.pastedText){
      localStorage.setItem('pastedText',JSON.stringify(this.contentForm.value.pastedText));
    }
    if(this.contentForm.value.uploadedFile || this.contentForm.value.pastedText){
      this.viewContent()
    }    
    // localStorage.setItem('content',JSON.stringify(content));
    // this.viewContent();

  }
}
