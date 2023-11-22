import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.page.html',
  styleUrls: ['./gato.page.scss'],
})
export class GatoPage {
  colorFondo: string = 'rgb(255, 0, 0)';
  tamanoBoton: string = '100px'; 
  margenBoton: string = '20px'; 

  
  cambiarEstilos() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    this.colorFondo = `rgb(${red}, ${green}, ${blue})`;

    this.tamanoBoton = Math.floor(Math.random() * (150 - 80 + 1) + 80) + 'px';

    this.margenBoton = Math.floor(Math.random() * (30 - 10 + 1) + 10) + 'px';
  }

[x: string]: any;
nombreUsuario: any;
mostrarImagen: boolean = false;

mostrarMensaje() {
  this.mostrarImagen = true;

  } }


