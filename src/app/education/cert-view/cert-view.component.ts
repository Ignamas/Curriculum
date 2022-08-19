import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cert-view',
  templateUrl: './cert-view.component.html',
  styleUrls: ['./cert-view.component.css']
})
export class CertViewComponent implements OnInit {
  route: any
  image:string=''

  constructor(private _route: ActivatedRoute,) {
    this.route=_route
   }

  ngOnInit(): void {
    this.image=this.route.params.value.id;
    
  }
  
}
