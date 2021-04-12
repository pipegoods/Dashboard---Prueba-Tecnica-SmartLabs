import { Component, OnInit } from '@angular/core';
import { CatapiService } from 'src/app/servicios/catapi.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  constructor(private catapi: CatapiService) { }
  
  public src: string;
  
  ngOnInit(): void {
    this.generateSrc();
   
  }

  generateSrc()  {
    this.src = this.catapi.getGatoGif();
  }


}
