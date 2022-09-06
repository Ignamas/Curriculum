import { Component, OnInit } from '@angular/core';
import { Certificado } from './cert.interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  lenguajes: string[] = [];
  lenguajeSeleccionado:string=''
  certificados: Certificado[] = [
    {
      titulo: 'Desarrollo Web con Wordpress',
      archivo: 'Certificado Desarrollo Web con Wordpress.pdf_1.jpg',
      lenguaje: ['wordpress'],
      expedidaPor: 'Universidad Tecnológica Nacional',
      anio: 2018,
      imprimir:true
    },
    {
      titulo: 'Programador Web',
      archivo: 'Certificado Programador Web.pdf_1.jpg',
      lenguaje: ['html', 'css', 'javascript'],
      expedidaPor: 'Universidad Tecnológica Nacional',
      anio: 2018,
      imprimir:true
    },
    {
      titulo: 'MySQL y PHP',
      archivo: 'Certificado MySQL y PHP.pdf_1.jpg',
      lenguaje: ['php', 'mysql'],
      expedidaPor: 'Universidad Tecnológica Nacional',
      anio: 2018,
      imprimir:true
    },
    {
      titulo: 'Gestion de Calidad y Mejora Continua',
      archivo: 'Certificado Gestion de Calidad y Mejora Continua.pdf_1.jpg',
      lenguaje: [],
      expedidaPor: 'Universidad Tecnológica Nacional',
      anio: 2018,
      imprimir:true
    },
    {
      titulo: 'Java - Empieza desde cero con Intellij',
      archivo: 'Certificado Java-Empieza-Desde-Cero-Con-Intellij.pdf_1.jpg',
      lenguaje: ['java'],
      expedidaPor: 'Udemy',
      anio: 2021,
      imprimir:true
    },
    {
      titulo: 'Angular .NET Core Aplicacion de Preguntas y Respuestas',
      archivo:
        'Certificado-Angular-NET-Core-Aplicacion-de-Preguntas-y-Respuestas.pdf_1.jpg',
      lenguaje: ['angular', '.net'],
      expedidaPor: 'Udemy',
      anio: 2021,
      imprimir:true
    },
    {
      titulo: 'Aprende Javascript y Jquery de 0 a 100',
      archivo: 'Certificado-Aprende-Javascript-y-Jquery-de-0-a-100.pdf_1.jpg',
      lenguaje: ['javascript', 'jquery'],
      expedidaPor: 'Udemy',
      anio: 2021,
      imprimir:true
    },
    {
      titulo: 'C++ - Desarrollo de videojuego 2d Arcade paso a paso',
      archivo:
        'Certificado-C++-Desarrollo-De-Videojuego-2d-Arcade-Paso-a-Paso.pdf_1.jpg',
      lenguaje: ['c++'],
      expedidaPor: 'Udemy',
      anio: 2021,
      imprimir:true
    },
    {
      titulo: 'Domina CSS desde Cero',
      archivo: '/Certificado-CSS.pdf_1.jpg',
      lenguaje: ['css'],
      expedidaPor: 'Udemy',
      anio: 2021,
      imprimir:true
    },
    {
      titulo: 'Fundamentos de Angular',
      archivo: 'Certificado-Fundamentos-de-Angular.pdf_1.jpg',
      lenguaje: ['angular'],
      expedidaPor: 'Udemy',
      anio: 2021,
      imprimir:true
    },
    {
      titulo: 'Introduccion a Nodejs',
      archivo: 'Certificado-Introduccion-a-Nodejs.pdf_1.jpg',
      lenguaje: ['nodejs'],
      expedidaPor: 'Udemy',
      anio: 2021,
      imprimir:true
    },
    {
      titulo: 'The Complete Introduction to C++ Programming',
      archivo:
        'Certificado-The-Complete-Introduction-to-C++-Programming.pdf_1.jpg',
      lenguaje: ['c++'],
      expedidaPor: 'Udemy',
      anio: 2021,
      imprimir:true
    },
    {
      titulo: 'Universidad Desarrollo web 2021: FrontEnd web developer',
      archivo:
      'Certificado-Universidad-Desarrollo-Web-2021-FrontEnd-Web-Developer!.pdf_1.jpg',
      lenguaje: ['html', 'css', 'javascript'],
      expedidaPor: 'Udemy',
      anio: 2021,
      imprimir:true
    },
    {
      titulo: 'Universidad Angular: De cero a experto en Angular',
      archivo:
        'Certificado-Universidad-Angular-De-Cero-A-Experto-En-Angular.pdf_1.jpg',
      lenguaje: ['angular'],
      expedidaPor: 'Udemy',
      anio: 2022,
      imprimir:true
    },
    {
      titulo: 'Crea un chat server con Go',
      archivo: 'Crea-un-chat-server-con-Go.pdf_1.jpg',
      lenguaje: ['golang'],
      expedidaPor: 'Código facilito',
      anio: 2022,
      imprimir:true
    },
    {
      titulo: 'Crea una app del clima con Angular',
      archivo: 'Crea-una-app-del-clima-con-Angular.pdf_1.jpg',
      lenguaje: ['angular'],
      expedidaPor: 'Código facilito',
      anio: 2022,
      imprimir:true
    },
    {
      titulo: 'Curso de desarrollo web con Go',
      archivo: 'Curso-de-desarrollo-web-con-Go.pdf_1.jpg',
      lenguaje: ['golang'],
      expedidaPor: 'Código facilito',
      anio: 2022,
      imprimir:true
    },
    {
      titulo: 'Curso profesional de Go',
      archivo: 'Curso-profesional-de-Go.pdf_1.jpg',
      lenguaje: ['golang'],
      expedidaPor: 'Código facilito',
      anio: 2022,
      imprimir:true
    },
    {
      titulo: 'Golang - Curso profesional de Go de cero a Master',
      archivo: 'Golang-Curso-profesional-de-Go-De-cero-a-Master-2022.pdf_1.jpg',
      lenguaje: ['golang'],
      expedidaPor: 'Udemy',
      anio: 2022,
      imprimir:true
    },{
      titulo: 'Angular - De cero a experto',
      archivo: 'Certificado-Angular-De-Cero-A-Experto.jpg',
      lenguaje: ['angular'],
      expedidaPor: 'Udemy',
      anio: 2022,
      imprimir:true
    },
  ];
  certificadosVisbles:Certificado[]=[]

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
    this.lenguajes.sort()   
  }

  viewCert(cert: string){
    this.certificadosVisbles=[]
    this.lenguajeSeleccionado=cert
    if (cert!='todos'){
    this.certificados.forEach(element => {
      if (element.lenguaje.includes(cert)){
      
        this.certificadosVisbles.push(element)
      }
    });
  }else{
    this.certificadosVisbles=this.certificados
  }
  }
}
