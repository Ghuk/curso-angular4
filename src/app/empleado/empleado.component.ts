import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
	selector:'empleado-tag',
	templateUrl: './empleado.component.html',
	styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent{
	public titulo = 'Componente Empleados:';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;

	constructor(){
		this.empleado = new Empleado('Camilo Ramirez', 21, 'Ingeniero', true);
		this.trabajadores = [
		new Empleado('Andres Romero', 21, 'Jardinero', true),
		new Empleado('Yiyo Lopez', 11, 'Panadero', false),
		new Empleado('Mario Popo', 41, 'Comerciante', true)
		];
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

}