import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'API TESTING';
  form= this.formBuilder.group({
    mobile: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder, private service: PostService){}

  ngOnInit(){

  }
  onSubmit(): void {
    this.service.sendData(this.form.value).subscribe((data: {}) => {
      console.log(this.form.value)
      alert("success")
    })
  }
}
