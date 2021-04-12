import { Component, OnInit } from '@angular/core';
import { CatapiService } from 'src/app/servicios/catapi.service';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private catapi: CatapiService) { }
  
  public src: string;
  
  ngOnInit(): void {
    this.generateSrc();
    $('.materialboxed').materialbox();
  }

  generateSrc()  {
    this.src = this.catapi.getGatoFoto();
  }

}
