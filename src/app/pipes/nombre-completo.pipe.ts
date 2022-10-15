import { Pipe, PipeTransform } from '@angular/core';
import { IContacto } from '../models/contact.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: IContacto | undefined, ...args: unknown[]): string {
    return `${contacto?.nombre} ${contacto?.apellido}`;
  }

}
