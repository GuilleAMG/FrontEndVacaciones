import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/api/models/empleado';
import { EmpleadoControllerService } from '../../api/services/empleado-controller.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CargoControllerService } from '../../api/services/cargo-controller.service';
import { Cargo } from 'src/app/api/models/cargo';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  
  empleado: Empleado[]=[];
  visible:boolean=false;
  cargo: Cargo[]=[];

  constructor(
    private empleadoService:EmpleadoControllerService,
    private cargoService:CargoControllerService,
    private messageService:NzMessageService,
    private fb: FormBuilder
  ){ }
  
    formEmpleado: FormGroup = this.fb.group({
      id:[],
      nombre:[],
      fechaIngreso:[],
      cargoId:[],
      disponibilidad:[]
    })

  ngOnInit(): void {
    this.empleadoService.find().subscribe(data => this.empleado = data)
    this.cargoService.find().subscribe(data => this.cargo = data )
  }

  eliminar(id:string): void{
    this.empleadoService.deleteById({id}).subscribe(() => {

    })
    this.messageService.info('El registro se ha eliminado.')
  }

  cancel(): void{
    this.messageService.info('El registro sigue activo.')
  }

  ocultar(): void{
    this.visible = false
    this.formEmpleado.reset()
  }

  mostrar(data?:Empleado): void{
    if(data?.id){
      this.formEmpleado.setValue(data)
    }
    this.visible = true
  }

  guardar(){
    if(this.formEmpleado.value.id){
      this.empleadoService.updateById({id:this.formEmpleado.value.id, 'body': this.formEmpleado.value}).subscribe(() => {
        this.empleado = this.empleado.map(obj => {
          if(obj.id === this.formEmpleado.value.id)
            return this.formEmpleado.value;
            return obj;
        })
        this.messageService.success('El registro se ha actualizado exitosamente.')
      });
    }
    else{
      delete this.formEmpleado.value.id
        this.empleadoService.create({body:this.formEmpleado.value}).subscribe((datoAgregado) =>{
        this.empleado = [...this.empleado, datoAgregado]
        this.messageService.success('El registro se ha creado exitosamente.')
      })
    }
    this.formEmpleado.reset()
    this.visible = false
  }
}
