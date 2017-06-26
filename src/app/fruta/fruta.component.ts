import { Component } from '@angular/core';

@Component({
	selector:'fruta',
	templateUrl: './fruta.component.html',
	styleUrls: ['./fruta.component.css']
})

export class FrutaComponent{
	public nombre_component = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string;
	public edad:number;
	public mayorDeEdad:boolean;
	public trabajos:Array<string>;
	comodin:any;

	constructor(){
		
		this.nombre = "Camilo Ramirez";
		this.edad = 21;
		this.mayorDeEdad = true;
		this.trabajos = ['Carpintero', 'Ingeniero', 'Fisico']
		this.comodin = 23;
		console.log(this.trabajos);

		
	}

	ngOnInit(){
		this.mostrarNombre();
		this.cambiarEdad(42);

		//variables y alcance
		var uno = 8;
		var dos = 15;
		console.log("Antes del if \n" + uno+ " "+dos);
		if(uno === 8){

			let uno = 3;
			var dos = 88;
			console.log("Dentro del if \n" + uno+ " "+dos);
		}
		console.log("Fuera del if \n" + uno + " "+dos);
	}

	mostrarNombre(){
		alert("Nombre: "+ this.nombre);
	}
	cambiarEdad(nuevaEdad){
		this.edad = nuevaEdad; 
		console.log(this.edad);
	}

}