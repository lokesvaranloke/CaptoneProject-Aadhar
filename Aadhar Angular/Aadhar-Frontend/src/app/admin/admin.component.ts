import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordStrengthValidator } from './passwordStrength.validators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  submitted=false;
  public loginForm!: FormGroup;

  backendurl="http://localhost:8080/aadhar/admin";

  constructor(private formBuilder: FormBuilder, private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      password: ['', Validators.compose([
        Validators.required, PasswordStrengthValidator])]
    })
    
  }

  onSubmit(){
    this.submitted=true;
    this.login();
    console.log(this.loginForm.value);
    // this.route.navigate(['/admindashboard']);
  }

  login() {
    this.http.get<any>(this.backendurl).subscribe(responseData=>{
      const AdminData = responseData.find((admin:any)=>{
        return admin.name === this.loginForm.value.name && admin.email === this.loginForm.value.email && admin.password === this.loginForm.value.password
      });
      if(AdminData){
        this.route.navigate(['/adminhome']);
        this.loginForm.reset();
      } else{
        alert("Please Try Again...");
      }
    }, err=>{
          alert("Something Wrong, Please Try Again...");
          this.loginForm.reset();
    })
  }
}


