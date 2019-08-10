import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp',
  template: `
    <p>
      emp works!
    </p>

    <div *ngFor='let emp of emp'>
    <span>{{emp.name}}</span>
    </div>
  `,
  styles: []
})
export class EmpComponent implements OnInit {

  constructor(private _service : EmpService) { }
  emp:any[];
  ngOnInit() {
     this._service.getEmp().subscribe(data => this.emp = data);
  }

}
