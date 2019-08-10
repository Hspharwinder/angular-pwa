import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmp } from '../Interface/IEmp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }
  private file:string = '../assets/emp.json';
  getEmp():Observable<IEmp>{
    return this.http.get<IEmp[]>(this.file);
  }
  getDept(){
    return [
      {"id": 1, "name": "Dept1", "age": 30},
      {"id": 2, "name": "Dept2", "age": 25},
      {"id": 3, "name": "Dept3", "age": 26},
      {"id": 4, "name": "Dept4", "age": 28},
      {"id": 5, "name": "Dept5", "age": 25}    
    ];
  }
}
