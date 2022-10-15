import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePAgeComponent implements OnInit {
  logueado : string | null = null;
   contactoSeleccionado : IContacto | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
   
  this.logueado = sessionStorage.getItem('token')
    //leemos del estado del historial de navegacion
    if(history.state.data){
      console.log(history.state.data)
      this.contactoSeleccionado = history.state.data
    
    }
  }

  navegarAcontacts(): void {
    let navigationExtras: NavigationExtras = {
      queryParams:{
        filter:'edad'
      }
    }
     this.router.navigate(['contacts'],navigationExtras);
  }

}
