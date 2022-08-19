import { Component, OnInit } from '@angular/core';
import { Certificado } from './cert.interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  lenguajes: string[] = [];
  certificados: Certificado[] = [
    {
      titulo: 'Desarrollo Web con Wordpress',
      archivo: 'Certificado Desarrollo Web con Wordpress.pdf_1.jpg',
      lenguaje: ['wordpress'],
      anio: 2018,
    },
    {
      titulo: 'Programador Web',
      archivo: 'Certificado Programador Web.pdf_1.jpg',
      lenguaje: ['html', 'css', 'Javascript'],
      anio: 2018,
    },
    {
      titulo: 'MySQL y PHP',
      archivo: 'Certificado MySQL y PHP.pdf_1.jpg',
      lenguaje: ['php', 'mysql'],
      anio: 2018,
    },
    {
      titulo: 'Gestion de Calidad y Mejora Continua',
      archivo: 'Certificado Gestion de Calidad y Mejora Continua.pdf_1.jpg',
      lenguaje:[],
      anio: 2018,
    },
    {
      titulo: 'Java - Empieza desde cero con Intellij',
      archivo: 'Certificado Java-Empieza-Desde-Cero-Con-Intellij.pdf_1.jpg',
      lenguaje: ['java'],
      anio: 2021,
    },
    {
      titulo: 'Angular .NET Core Aplicacion de Preguntas y Respuestas',
      archivo:
        'Certificado-Angular-NET-Core-Aplicacion-de-Preguntas-y-Respuestas.pdf_1.jpg',
      lenguaje: ['angular', '.net'],
      anio: 2021,
    },
    {
      titulo: 'Aprende Javascript y Jquery de 0 a 100',
      archivo: 'Certificado-Aprende-Javascript-y-Jquery-de-0-a-100.pdf_1.jpg',
      lenguaje: ['javascript', 'jquery'],
      anio: 2021,
    },
    {
      titulo: 'C++ - Desarrollo de videojuego 2d Arcade paso a paso',
      archivo:
        'Certificado-C++-Desarrollo-De-Videojuego-2d-Arcade-Paso-a-Paso.pdf_1.jpg',
      lenguaje: ['c++'],
      anio: 2021,
    },
    {
      titulo: 'Domina CSS desde Cero',
      archivo: '/Certificado-CSS.pdf_1.jpg',
      lenguaje: ['css'],
      anio: 2021,
    },
    {
      titulo: 'Fundamentos de Angular',
      archivo: 'Certificado-Fundamentos-de-Angular.pdf_1.jpg',
      lenguaje: ['angular'],
      anio: 2021,
    },
    {
      titulo: 'Introduccion a Nodejs',
      archivo: 'Certificado-Introduccion-a-Nodejs.pdf_1.jpg',
      lenguaje: ['nodejs'],
      anio: 2021,
    },
    {
      titulo: 'The Complete Introduction to C++ Programming',
      archivo:
        'Certificado-The-Complete-Introduction-to-C++-Programming.pdf_1.jpg',
      lenguaje: ['c++'],
      anio: 2021,
    },
    {
      titulo: 'Universidad Angular: De cero a experto en Angular',
      archivo:
        'Certificado-Universidad-Angular-De-Cero-A-Experto-En-Angular.pdf_1.jpg',
      lenguaje: ['angular'],
      anio: 2022,
    },
    {
      titulo: 'Universidad Desarrollo web 2021: FrontEnd web developer',
      archivo:
        'Certificado-Universidad-Desarrollo-Web-2021-FrontEnd-Web-Developer!.pdf_1.jpg',
      lenguaje: ['html', 'css', 'javascript'],
      anio: 2021,
    },
    {
      titulo: 'Crea un chat server con Go',
      archivo: 'Crea-un-chat-server-con-Go.pdf_1.jpg',
      lenguaje: ['golang'],
      anio: 2022,
    },
    {
      titulo: 'Crea una app del clima con Angular',
      archivo: 'Crea-una-app-del-clima-con-Angular.pdf_1.jpg',
      lenguaje: ['angular'],
      anio: 2022,
    },
    {
      titulo: 'Curso de desarrollo web con Go',
      archivo: 'Curso-de-desarrollo-web-con-Go.pdf_1.jpg',
      lenguaje: ['golang'],
      anio: 2022,
    },
    {
      titulo: 'Curso profesional de Go',
      archivo: 'Curso-profesional-de-Go.pdf_1.jpg',
      lenguaje: ['golang'],
      anio: 2022,
    },
    {
      titulo: 'Golang - Curso profesional de Go de cero a Master 2022',
      archivo: 'Golang-Curso-profesional-de-Go-De-cero-a-Master-2022.pdf_1.jpg',
      lenguaje: ['golang'],
      anio: 2022,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    for (let i of this.certificados) {
      
      for (let j of i.lenguaje) {
        if (this.lenguajes.includes(j)) {
        } else {
          this.lenguajes.push(j);
        }
      }
    }    
  }

  viewCert(cert: number){
   
  }
}
