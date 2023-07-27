import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  private nombre = "Juan"
  private apellido = "Diaz"
  private edad = 18
  private empresa = "AdaptLeap"

  protected getNombre(){
    return this.nombre
  }
  protected getApellido(){
    return this.apellido
  }
  protected getEmpresa(){
    return this.empresa
  }

  protected getEdad(){
    return this.edad
  }

}
