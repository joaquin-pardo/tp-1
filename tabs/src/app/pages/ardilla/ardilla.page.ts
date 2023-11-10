import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/empleado';

@Component({
  selector: 'app-ardilla',
  templateUrl: './ardilla.page.html',
  styleUrls: ['./ardilla.page.scss'],
})
export class ArdillaPage implements OnInit {
  listado: Array<Empleado> = new Array<Empleado>();
  empleado : Empleado = new Empleado();

  constructor() { }

  ngOnInit() {

    

  }


  guardarEmpleado(){

    // this.empleado.Nombre="Jota";
    // this.empleado.Apellido="Nose";
    // this.empleado.Edad=22;
    // this.empleado.Estado="Activo";
    console.log(this.empleado);
    this.listado.push(this.empleado);
    this.empleado = new Empleado();
  }

}
