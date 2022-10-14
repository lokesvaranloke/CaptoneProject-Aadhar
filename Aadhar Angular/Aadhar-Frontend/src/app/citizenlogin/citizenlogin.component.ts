import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizenlogin',
  templateUrl: './citizenlogin.component.html',
  styleUrls: ['./citizenlogin.component.css'],
})
export class CitizenloginComponent implements OnInit {
  submitted = false;
  public loginForm!: FormGroup;

  backendurl = "http://localhost:8080/aadhar/citizen";

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      citizenid: ['', Validators.required],
      number: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    this.login();
  }

  login() {
    this.http.get<any>(this.backendurl).subscribe(responseData=>{
      const log = responseData.find((a:any)=>{
        return a.citizenid === this.loginForm.value.citizenid && a.number === this.loginForm.value.number
      });
      if(log){
        console.log(log);
        alert("Login SuccessFull");
        this.loginForm.reset();
        this.route.navigate(['citizenhome']);
        
      } else{
        alert("Please Try Again...");
      }
    }, err=>{
          alert("Something Wrong, Please Try Again...");
          this.loginForm.reset();
    })
  }

}
