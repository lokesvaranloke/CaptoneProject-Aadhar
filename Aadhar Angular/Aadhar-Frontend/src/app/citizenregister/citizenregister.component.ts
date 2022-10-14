import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizenregister',
  templateUrl: './citizenregister.component.html',
  styleUrls: ['./citizenregister.component.css']
})
export class CitizenregisterComponent implements OnInit {

  backendurl = 'http://localhost:8080/aadhar/citizen';

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    
  }

  onAddCitizen(citizenData: {name:string,dob:string,emailid:string,gender:string,number:string,address:string }, form: NgForm) {
    this.http.post(this.backendurl, citizenData).subscribe((responseData) => {
      console.log(responseData);
      alert("Citizen Registered Successfully... Please Click Ok To Go Login Page");
      form.reset();
      this.route.navigate(['citizenlogin']);
    },err=>{
      alert("Something Happened... Please Try Again");
    });
  }

}
