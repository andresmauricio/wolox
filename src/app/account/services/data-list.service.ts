import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataListService {

  private Countries = [
    {
      value: 'Argentina',
      name: 'Argentina',
      departaments: [
        {
          value: 'Buenos Aires',
          name: 'Buenos Aires',
        },
        {
          value: 'Córdoba',
          name: 'Córdoba',
        },
        {
          value: 'Santa Fe',
          name: 'Santa Fe',
        },
        {
          value: 'Mendoza',
          name: 'Mendoza',
        },
        {
          value: 'Chaco',
          name: 'Chaco',
        },
      ]
    },
    {
      value: 'Colombia',
      name: 'Colombia',
      departaments: [
        {
          value: 'Cundinamarca',
          name: 'Cundinamarca',
        },
        {
          value: 'Boyacá',
          name: 'Boyacá',
        },
        {
          value: 'Antioquia',
          name: 'Antioquia',
        },
        {
          value: 'Casanare',
          name: 'Casanare',
        },
        {
          value: 'Arauca',
          name: 'Arauca',
        },
      ]
    },
    {
      value: 'Perú',
      name: 'Perú',
      departaments: [
        {
          value: 'Loreto',
          name: 'Loreto',
        },
        {
          value: 'San Martin',
          name: 'San Martin',
        },
        {
          value: 'Junin',
          name: 'Junin',
        },
        {
          value: 'Uyacali',
          name: 'Uyacali',
        },
        {
          value: 'Puno',
          name: 'Puno',
        },
      ]
    },
    {
      value: 'Chile',
      name: 'Chile',
      departaments: [
        {
          value: 'Puerto Chacarubo',
          name: 'Puerto Chacarubo',
        },
        {
          value: 'Puerto Arenas',
          name: 'Puerto Arenas',
        },
        {
          value: 'Copiapo',
          name: 'Copiapo',
        },
        {
          value: 'Santiago',
          name: 'Santiago',
        },
        {
          value: 'Talca',
          name: 'Talca',
        },
      ]
    },
    {
      value: 'México',
      name: 'México',
      departaments: [
        {
          value: 'Jalisco',
          name: 'Jalisco',
        },
        {
          value: 'Sinaloa',
          name: 'Sinaloa',
        },
        {
          value: 'Veracruz',
          name: 'Veracruz',
        },
        {
          value: 'Nuevo León',
          name: 'Nuevo León',
        },
        {
          value: 'Puebla',
          name: 'Puebla',
        },
      ]
    },
  ]

  constructor() { }

  getConuntrie() {
    return this.Countries;
  }

  getDepartaments(conuntrie: string) {
    const departaments = this.Countries.filter(countrie => countrie.value === conuntrie);
    return departaments[0].departaments || [];
  }
}
