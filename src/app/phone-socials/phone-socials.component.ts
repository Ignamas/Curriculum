import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-phone-socials',
  templateUrl: './phone-socials.component.html',
  styleUrls: ['./phone-socials.component.css']
})
export class PhoneSocialsComponent implements OnInit {
  actual:Date = new Date();
  desplegado:boolean = false;
  imgSocial : string = '';
  irSitio : string = '';

  /* apiBaseURL = Config.API_SERVER_URL; */
  public urlIframe:string = 'https://www.linkedin.com/in/ignacio-mascali/';
  public id:string | undefined;
 constructor(private sanitizer: DomSanitizer) { }

/*  
  
  horas: number =  Math.floor(this.actual%(24*60*60*1000)/3.6e+6);
  minutos: number=Math.floor(((this.diferencia%(24*60*60*1000)/3.6e+6)%this.horas)*(60)); */

  selected:string='face'
  positionLeft:boolean=false

  ngOnInit(): void {
    const contador= interval(1000);
    contador.subscribe((n)=>{
    
        this.actual=new Date();
      })

  }

  getembenurl()
  {

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlIframe);
  }

  openMenu(){
    this.desplegado=!this.desplegado;
  }
  

  moveLeft(ev: string){
/*     if(this.desplegado){
  
    }else{
    this.positionLeft=!this.positionLeft
    this.imgSocial=ev
  }
    if (!this.desplegado){

     if(ev != ''){ 
       
      
      } else{
        this.positionLeft=!this.positionLeft
        this.imgSocial=''
      }
    } */

    if( ev != ''){
      console.log(ev);
      
      this.positionLeft = true
      this.imgSocial=ev
      if (ev=='linked'){
        this.irSitio = 'https://www.linkedin.com/in/ignacio-mascali/'
      }else if (ev == 'insta'){
        this.irSitio = 'https://www.instagram.com/nakymas/'
      }else if (ev == 'tele'){
        this.irSitio = 'https://t.me/IgnaMas'
      }else if (ev == 'what'){
        this.irSitio='#contact'
        this.irSitio =  "https://api.whatsapp.com/send?phone=3454130189&text='Hola que tal de llamo desde la pagina'"
      
      }
    }
    else{
      this.positionLeft = false
    }

   
  }

  link(){

  }
}
