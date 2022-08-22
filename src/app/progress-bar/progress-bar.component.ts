import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  progress:number=0

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event :Event) {
    
    this.progress= (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100)
/*     console.log(this.progress); */
  }



  constructor() { }


  ngOnInit(): void {
    
  }

  

}
