import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LISTA_CONTACTOS } from 'src/app/mocks/contacts.mock';
import { IContacto } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  
  listaContactos : IContacto[] = []
  filtroEdad : string = 'todos'   

  constructor(private router: Router , private route : ActivatedRoute , private contactService : ContactService) { }

  ngOnInit(): void {
    //obtenemos los Query Params
    this.route.queryParams.subscribe((params : any)=>{
      this.filtroEdad = params.edad
      // obtenemos la lista de contactos
      this.contactService.obtenerContactos(this.filtroEdad)
      .then( lista => this.listaContactos = lista)
      .catch(() => console.log("se produjo un error"))
      .finally(()=> console.info("peticion terminadoa"))
    })
    

  }

 //Ejemplo de paso de información entre componentes a traves del estado
  volverAHome(contacto: IContacto){
    let navigationExtras: NavigationExtras = {
      state:{
        data: contacto
      }
    }
    this.router.navigate(['/home'],navigationExtras)
  }
}
