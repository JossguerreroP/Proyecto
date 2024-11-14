import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearComponent } from './components/crear/crear.component';
import { CorridosComponent } from './components/corridos/corridos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
const routes: Routes = [
  {
    path: '',  
    component: WrapperComponent,
    children: [
      {
        path:'Inicio',
        component:InicioComponent
      },
      {
        path:'Crear',
        component:CrearComponent
      },
      {
        path:'Corridos',
        component:CorridosComponent
      },
      {
        path:'Reportes',
        component:ReportesComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
