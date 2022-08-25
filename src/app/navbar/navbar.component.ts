import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    document.body.classList.toggle('dark')
  }

  progress:number=0

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event :Event) {
    
    this.progress= (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100)
     console.log(this.progress); 
  }


  toggleDarkTheme(): void {
    console.log("ejecutado");
    
    document.body.classList.toggle('dark-theme');
 }
}
