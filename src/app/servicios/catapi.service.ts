import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatapiService {

  constructor() { }

  public getGatoFoto () { 
    return 'https://cataas.com/cat?ts=' + Date.now();
  }

  public getGatoGif () { 
    return 'https://cataas.com/cat/gif?ts=' + Date.now();
  }
}
