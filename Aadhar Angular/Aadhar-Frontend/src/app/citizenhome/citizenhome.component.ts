import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { CitizenModel } from './citizen.model';
import { CitizenData } from './citizendata.model';

@Component({
  selector: 'app-citizenhome',
  templateUrl: './citizenhome.component.html',
  styleUrls: ['./citizenhome.component.css']
})
export class CitizenhomeComponent implements OnInit {

  citizenModelObj:CitizenModel=new CitizenModel();
  fetchedCitizens: CitizenData[] = [];
  public loginForm!: FormGroup;
  backendurl = "http://localhost:8080/aadhar/citizen";
  constructor(private http:HttpClient, private formBuilder: FormBuilder, private api:ApiService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      name : [''],
      dob : [''],
      emailid : [''],
      number : [''],
      address : [''],
      gender : [''],
  })
    this.fetchCitizens();
  }

  fetchCitizens(){
    this.http.get(this.backendurl).subscribe((result:any)=>{
      this.fetchedCitizens=result;
      console.log(this.fetchedCitizens);
    })
  }
  

  // fetchCitizens() {
  //   this.http
  //     .get(this.backendurl)
  //     .pipe(
  //       map((responseData) => {
  //         const citizenArray: CitizenData[] = [];
  //         for (const key in responseData) {
  //           if(responseData.hasOwnProperty(key)){
  //             if(key==="data")
  //           {
  //             citizenArray.push(...((responseData as any).Key.hello))
  //           // var x = { ...responseData[key] };
  //           // citizenArray.push(x);
  //           }
  //         }
  //         }
  //         return citizenArray;
  //       })
  //     )
  //     .subscribe((citizens) => {
  //       this.fetchedCitizens = citizens;
  //     });
  // }

  onEdit(citizen:any){
    this.citizenModelObj.citizenid=citizen.citizenid;
    this.loginForm.controls['name'].setValue(citizen.name);
    this.loginForm.controls['dob'].setValue(citizen.dob);
    this.loginForm.controls['emailid'].setValue(citizen.emailid);
    this.loginForm.controls['number'].setValue(citizen.number);
    this.loginForm.controls['address'].setValue(citizen.address);
    this.loginForm.controls['gender'].setValue(citizen.gender);
   }
   updateCitizen(){
     this.citizenModelObj.name=this.loginForm.value.name;
     this.citizenModelObj.emailid=this.loginForm.value.emailid;
     this.citizenModelObj.gender=this.loginForm.value.gender;
 
     this.citizenModelObj.address=this.loginForm.value.address;
     this.citizenModelObj.number=this.loginForm.value.number;
     this.citizenModelObj.dob=this.loginForm.value.dob;
 
     this.api.UpdateCitizen(this.citizenModelObj,this.citizenModelObj.citizenid)
     .subscribe(res=>{
       alert("Citizen Updated SuccessFully");
       this.loginForm.reset();
       this.fetchCitizens();
     },err=>{
       alert("Something Went Wrong...")
     })
   }

   goToHome(){
    this.route.navigate(['/home']);
   }
}
