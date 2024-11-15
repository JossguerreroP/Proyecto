import { Component, OnInit } from '@angular/core';
import { AutoScrollService, ColDef, SizeColumnsToFitGridStrategy } from 'ag-grid-community';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css',
 
})
export class CrearComponent implements OnInit {

  sd:boolean = false;
  st:boolean = true;
  

  constructor(private route:ActivatedRoute) 
  { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

    if(params['sd']){
      this.sd =true;
      this.st =false;
    }

    if(params['st']){
      this.st=true;
      this.sd =false;
    }
     
    })
     
   }

Objects:Object[]=[]
  generadores :any;

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

  rowData : Object[]=[]

  colDefs: ColDef[] = [
    { 
      field: "NODO", 
      headerName: 'Nodo',
    },
    { 
      field: "PG_MW", 
      headerName: 'PG (MW)', 
      type: 'numericColumn' 
    },
    { 
      field: "QG_MW", 
      headerName: 'QG (MW)', 
      type: 'numericColumn' 
    },
    { 
      field: "Q_MAX_MVAR", 
      headerName: 'Q_MAX (MVAR)', 
      type: 'numericColumn' 
    },
    { 
      field: "Q_MIN_MVAR", 
      headerName: 'Q_MIN (MVAR)', 
      type: 'numericColumn' 
    },
    { 
      field: "P_MAX_MW", 
      headerName: 'P_MAX (MW)', 
      type: 'numericColumn' 
    },
    { 
      field: "costo_marginal_dolar_per_MW", 
      headerName: 'Costo Marginal ($/MW)', 
      type: 'numericColumn', 
      //valueFormatter: (params) => `$${params.value.toFixed(2)}`  // Formato de precio
    },
    
  ];


getEntradasIniciales(event: any) {
  this.generadores=event.generadores
  console.log(this.generadores.generators)
  const newRows: object[] = [];  

  for (let i = 0; i < this.generadores.generators.length; i++) {
    let generador:Object ={
      NODO: this.generadores.generators[i].nodo,
      PG_MW: this.generadores.generators[i].PG_MW,
      QG_MW: this.generadores.generators[i].QG_MW,
      Q_MAX_MVAR: this.generadores.generators[i].Q_MAX_MVAR,
      Q_MIN_MVAR: this.generadores.generators[i].Q_MIN_MVAR,
      P_MAX_MW: this.generadores.generators[i].P_MAX_MW,
      costo_marginal_dolar_per_MW: this.generadores.generators[i].costo_marginal_dolar_per_MW
    }
    newRows.push(generador);
}
this.rowData = newRows;
console.log(this.rowData)
}
}


