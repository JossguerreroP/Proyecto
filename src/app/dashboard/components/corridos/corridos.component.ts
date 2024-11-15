import { Component,OnInit } from '@angular/core';
import { AutoScrollService, ColDef, SizeColumnsToFitGridStrategy } from 'ag-grid-community';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corridos',
  templateUrl: './corridos.component.html',
  styleUrl: './corridos.component.css'
})
export class CorridosComponent implements OnInit{
  rowData : Object[]=[]
  rowData1 : Object[]=[]
  rowData2: Object[]=[]
  Objects:Object[]=[]
  generadores :any;
  lineas :any;
  nodos:any;
  sd:boolean = false;
  st:boolean = true;

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

  colDefsNodos : ColDef[]= [
    { field: 'nodo', headerName: 'Nodo' },
    { field: 'tipo_de_nodo', headerName: 'Tipo de Nodo' },
    { field: 'P_MW', headerName: 'P [MW]' },
    { field: 'Q_MVAR', headerName: 'Q [MVAR]' },
    { field: 'V_max', headerName: 'V_max' },
    { field: 'V_min', headerName: 'V_min' }
  ];



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

three (event:any){
  this.nodos = event.nodos;  // Suponiendo que los nodos están en "event.nodos"
  console.log(this.nodos.nodes);
  const newRows: object[] = [];  
  for (let i = 0; i < this.nodos.nodes.length; i++) {
    let nodo: Object = {
      nodo: this.nodos.nodes[i].nodo,
      tipo_de_nodo: this.nodos.nodes[i].tipo_de_nodo,
      P_MW: this.nodos.nodes[i].P_MW,
      Q_MVAR: this.nodos.nodes[i].Q_MVAR,
      V_max: this.nodos.nodes[i].V_max,
      V_min: this.nodos.nodes[i].V_min
    };
    newRows.push(nodo);
  }
  this.rowData2= newRows;
}

getEntradasIniciales(event: any) {
  console.log(event)
  this.one(event);
  this.two(event);
  this.three(event);
}
}
