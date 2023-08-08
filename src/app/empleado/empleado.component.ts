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
  private empresa:String = ""
  protected habilitacionCuadro = false;
  protected UsuRegistrado = true;
  protected textoDeRegistro = "NO HAY NADIE REGISTRADO"

  protected getNombre(){
    return this.nombre
  }
  protected getApellido(){
    return this.apellido;
  }
  protected getEmpresa(){
    return this.empresa;
  }

  protected getEdad(){
    return this.edad;
  }

  protected setUsuarioRegistro(event:Event){
    //alert("El usuario se acaba de Registrar")
    if ((<HTMLInputElement>event.target).value == "si") {
      this.textoDeRegistro = "USUARIO REGISTRADO";
    }else{
      this.textoDeRegistro = "NO HAY NADIE REGISTRADO";
    }
  }
  
  protected guardarEmpresa(empresa: String){
    this.empresa = empresa
  }

  protected getRegistroUsuario(){
    this.UsuRegistrado = false;
  }
  
}
