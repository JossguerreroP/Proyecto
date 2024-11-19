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
  rowDataEscenarios: Object[]=[]
  rowDataEscenario1: Object[]=[]
  rowDataEscenario2: Object[]=[]
  rowDataEscenario3: Object[]=[]
  rowDataEscenario4: Object[]=[]
  Objects:Object[]=[]

  generadores :any;
  lineas :any;
  nodos:any;
  escenarios:any;
  escenariosConNodos:Array<Object>=[];


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

  colDefsEscenarios : ColDef[] = [
    { field: 'escenario', headerName: 'Escenario' },
    { field: 'potencia_deslastrada_MW', headerName: 'Potencia Deslastrada (MW)' },
    { field: 'potencia_atendida_MW', headerName: 'Potencia Atendida (MW)' },
    { field: 'potencia_generada_adicional_MW', headerName: 'Potencia Generada Adicional (MW)' },
    { field: 'costo_operacion_dolar_per_MWH', headerName: 'Costo Operación ($/MWH)' },
    { field: 'costo_deslastre_dolar_per_MWH', headerName: 'Costo Deslastre ($/MWH)' },
    { field: 'U1', headerName: 'U1' },
    { field: 'U2', headerName: 'U2' },
    { field: 'U', headerName: 'U' },
    { field: 'resiliencia', headerName: 'Resiliencia' }
  ];

  colDefsEscenariosNodos: ColDef[]  = [
    { field: 'nodo', headerName: 'Nodo' },
    { field: 'carga_MW', headerName: 'Carga (MW)' },
    { field: 'potencia_deslastrada_MW', headerName: 'Potencia Deslastrada (MW)' },
    { field: 'costo_dolar_por_MW', headerName: 'Costo ($/MW)' },
    { field: 'potencia_atendida_MW', headerName: 'Potencia Atendida (MW)' },
    { field: '_atendido', headerName: '% Atendido' }
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

getResuldatos(event:any){
  this.escenarios = event.escenarios;
  const newRows: object[] = []; 
  for (let i = 0; i < this.escenarios.length; i++) {
    let escenario: Object = {
      escenario: this.escenarios[i].escenario,
      potencia_deslastrada_MW: this.escenarios[i].potencia_deslastrada_MW,
      potencia_atendida_MW: this.escenarios[i].potencia_atendida_MW,
      potencia_generada_adicional_MW: this.escenarios[i].potencia_generada_adicional_MW,
      costo_operacion_dolar_per_MWH: this.escenarios[i].costo_operacion_dolar_per_MWH,
      costo_deslastre_dolar_per_MWH: this.escenarios[i].costo_deslastre_dolar_per_MWH,
      U1: this.escenarios[i].U1,
      U2: this.escenarios[i].U2,
      U: this.escenarios[i].U,
      resiliencia: this.escenarios[i].resiliencia
    };
    newRows.push(escenario);
  }
  this.rowDataEscenarios = newRows;
}

getResultadosEscenarios(event:any){

  this.escenariosConNodos = event.elements.escenario1ConSinRdNiGd;
  const escenario1: object[] = [];  
  for(let i=0; i<this.escenariosConNodos.length;i++){
    escenario1.push(this.escenariosConNodos[i]);
  }
  this.rowDataEscenario1= escenario1;


  this.escenariosConNodos = event.elements.escenario2ConRdSinGd;
  const escenario2: object[] = [];  
  for(let i=0; i<this.escenariosConNodos.length;i++){
    escenario2.push(this.escenariosConNodos[i]);
  }
  this.rowDataEscenario2= escenario2;

  
  this.escenariosConNodos = event.elements.escenario3ConGdSinRd;
  const escenario3: object[] = [];  
  for(let i=0; i<this.escenariosConNodos.length;i++){
    escenario3.push(this.escenariosConNodos[i]);
  }
  this.rowDataEscenario3= escenario3;

  this.escenariosConNodos = event.elements.escenario4ConGdYRd;
  const escenario4: object[] = [];  
  for(let i=0; i<this.escenariosConNodos.length;i++){
    escenario4.push(this.escenariosConNodos[i]);
  }
  this.rowDataEscenario4= escenario4;



}


Test(event:any){
  console.log(event)
}

getEntradasIniciales(event: any) {
  let aux : Object[]=[];

  this.rowData=aux;
  this.rowData1=aux;
  this.rowData2=aux;
  this.rowDataEscenarios=aux;
  this.rowDataEscenario1=aux;
  this.rowDataEscenario2=aux;
  this.rowDataEscenario3=aux;
  this.rowDataEscenario4=aux;

  console.log(event)
  this.one(event);
  this.two(event);
  this.three(event);
  this.getResuldatos(event);
  this.getResultadosEscenarios(event);
}
}
