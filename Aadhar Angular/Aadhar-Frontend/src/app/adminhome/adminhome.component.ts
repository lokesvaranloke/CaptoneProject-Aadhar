import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { CitizenData } from './citizendata.model';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  fetchedCitizens: CitizenData[] = [];
  backendurl = "http://localhost:8080/aadhar/citizen";
  constructor(private http:HttpClient, private formBuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
  }

  onFetchCitizens(){
    this.fetchCitizens();
  }

  fetchCitizens(){
    this.http.get(this.backendurl).subscribe((result:any)=>{
      this.fetchedCitizens=result;
      console.log(this.fetchedCitizens);
    })
  }

  onDeleteCitizen(id: number) {
    this.http.delete(this.backendurl + '/' + id).subscribe((response) => {
      console.log('Citizen deleted: ' + response);
      this.fetchCitizens();
    });
  }
}
