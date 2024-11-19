import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearComponent } from './components/crear/crear.component';
import { CorridosComponent } from './components/corridos/corridos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartModule } from '../cart/cart.module';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { CasoComponent } from './components/caso/caso.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgOptimizedImage } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoginComponent } from './components/login/login.component'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    InicioComponent,
    CrearComponent,
    CorridosComponent,
    ReportesComponent,
    WrapperComponent,
    CasoComponent,
    DialogComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    CartModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
    MatDividerModule,
    MatProgressBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavContainer,
    MatSidenav,
    AgGridModule,
    NgOptimizedImage,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ]
})
export class DashboardModule { }
