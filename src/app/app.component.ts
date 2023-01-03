import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';
  constructor(private route:Router) { }
  CreateEmployee(){
    console.log("inside routing");
    
    this.route.navigate(['/add']);

  }

  listAllEmployee(){
    console.log("inside routing");
    
    this.route.navigate(['/employees']);

  }
}
