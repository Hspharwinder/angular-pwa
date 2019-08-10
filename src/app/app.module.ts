import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpService } from './emp.service';
import { HttpClientModule } from '@angular/common/http';
import { AbcRoutingModule, nav} from '../app/abc/abc-routing.module';
 
@NgModule({
  declarations: [
    AppComponent,    
    EmpDetailComponent,    
    nav
  ],
  imports: [
    BrowserModule,
    AbcRoutingModule,
    HttpClientModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
