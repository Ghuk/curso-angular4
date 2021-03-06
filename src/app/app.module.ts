import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ContactoComponent} from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

import { ConversorPipe} from './pipes/conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    FrutaComponent,
    ContactoComponent,
    HomeComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
