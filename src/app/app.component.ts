import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnChanges {
  title = 'ngRouting';
  token: string | null = null;
  constructor(private router : Router){}
  
  ngOnChanges(): void {
    console.log(this.token)
    this.token = sessionStorage.getItem('token')
  }

  ngOnInit(): void {
    
    this.token = sessionStorage.getItem('token')
  }
 

  logout(): void{
    sessionStorage.removeItem('token')
    location.reload()
    this.router.navigate(['login'])
  }

  //paso de información entre componentes:
  //1- A traves de @inputs y @Outputs
  //2- A traves de inyección de constructores hijos @ViewChild , @ContentChild o @COntentChildren
  //3- A traves de servicios(Promesas y oBservables) --> NGRX(gestión de)

}
