import { Component,OnInit } from '@angular/core';
import { AutoScrollService, ColDef, SizeColumnsToFitGridStrategy } from 'ag-grid-community';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corridos',
  templateUrl: './corridos.component.html',
  styleUrl: './corridos.component.css'
})
export class CorridosComponent implements OnInit{

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
  lineas :any;

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
  rowData1 : Object[]=[]

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

  colDefsLineas :ColDef[]= [
    { field: 'I', headerName: 'Nodo I' },
    { field: 'J', headerName: 'Nodo J' },
    { field: 'flujo_P_I_a_J_MW', headerName: 'Flujo P (I a J) [MW]' },
    { field: 'flujo_Q_I_a_J_MW', headerName: 'Flujo Q (I a J) [MW]' },
    { field: 'flujo_P_J_a_I_MW', headerName: 'Flujo P (J a I) [MW]' },
    { field: 'flujo_Q_J_a_I_MW', headerName: 'Flujo Q (J a I) [MW]' }
  ];
  


 one(event:any) {
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

two(event:any){
this.lineas = event.lineas;
console.log(this.lineas.lines);
const newRows: object[] = [];  
for (let i = 0; i < this.lineas.lines.length; i++) {
  let linea: Object = {
    I: this.lineas.lines[i].I,
    J: this.lineas.lines[i].J,
    flujo_P_I_a_J_MW: this.lineas.lines[i].flujo_P_I_a_J_MW,
    flujo_Q_I_a_J_MW: this.lineas.lines[i].flujo_Q_I_a_J_MW,
    flujo_P_J_a_I_MW: this.lineas.lines[i].flujo_P_J_a_I_MW,
    flujo_Q_J_a_I_MW: this.lineas.lines[i].flujo_Q_J_a_I_MW
  };
  newRows.push(linea);
}
this.rowData1 = newRows;
}

getEntradasIniciales(event: any) {
  this.one(event);
  this.two(event)
}
}
