import { Injectable } from '@angular/core';
import { LISTA_CONTACTOS } from '../mocks/contacts.mock';
import { IContacto } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
 listaContactos: IContacto[] = LISTA_CONTACTOS

  constructor() { }

  obtenerContactos(filtro?:string): Promise<IContacto[]>{
    let listaFiltrada : IContacto[];
    if(filtro === 'mayor30'){
     listaFiltrada = this.listaContactos.filter((contacto  : IContacto) =>  contacto.edad >= 30)
     return Promise.resolve(listaFiltrada)
     
    }else if(filtro === 'menor30'){
      listaFiltrada = this.listaContactos.filter((contacto  : IContacto) =>  contacto.edad < 30 )
       return Promise.resolve(listaFiltrada)
    }else{
       listaFiltrada = this.listaContactos

       return Promise.resolve(listaFiltrada)
    }
  }
}
