import { Component } from '@angular/core';
import { AutoScrollService, ColDef, SizeColumnsToFitGridStrategy } from 'ag-grid-community';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css',
 
})
export class CrearComponent {

  autoSizeStrategy :SizeColumnsToFitGridStrategy = {
    type: 'fitGridWidth',
    defaultMinWidth: 100,
    columnLimits: [
        {
            colId: 'country',
            minWidth: 900
        }
    ]
};

  rowData : Object[]=[{Titulo:234,Idioma:"df"}]

  colDefs: ColDef[] = [
    { 
      field: "NODO", 
      headerName: 'Nodo',
    
      
    },
    { 
      field: "PG(MW)", 
      headerName: 'PG (MW)', 
      type: 'numericColumn' 
    },
    { 
      field: "QG(MW)", 
      headerName: 'QG (MW)', 
      type: 'numericColumn' 
    },
    { 
      field: "Q_MAX(MVAR)", 
      headerName: 'Q_MAX (MVAR)', 
      type: 'numericColumn' 
    },
    { 
      field: "Q_MIN(MVAR)", 
      headerName: 'Q_MIN (MVAR)', 
      type: 'numericColumn' 
    },
    { 
      field: "P_MAX(MW)", 
      headerName: 'P_MAX (MW)', 
      type: 'numericColumn' 
    },
    { 
      field: "COSTO_MARGINAL($/MW)", 
      headerName: 'Costo Marginal ($/MW)', 
      type: 'numericColumn', 
      valueFormatter: (params) => `$${params.value.toFixed(2)}`  // Formato de precio
    },
    
  ];


getEntradasIniciales(event: any) {
  console.log(event)
}

}
