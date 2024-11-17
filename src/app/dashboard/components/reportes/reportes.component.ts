import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoScrollService, ColDef, SizeColumnsToFitGridStrategy } from 'ag-grid-community';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent implements OnInit{

  descripcionEscenario1: string[]=[];
  descripcionEscenario2: string[]=[];
  descripcionEscenario3: string[]=[];
  descripcionEscenario4: string[]=[];
  descripcionResultados: string[]=[];

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
  
    if(params['Visualizar']){
      this.sd =true;
      this.st =false;
    }
  
    if(params['Descargar']){
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


getDescripcion(rowDataEscenario1:Object[] ,descripcion: string[]) :string[]{
  const nodoConMayorCosto = rowDataEscenario1.reduce((prev:any, curr:any) => (curr.costo_dolar_por_MW > prev.costo_dolar_por_MW ? curr : prev));
  const nodoConMenorCosto = rowDataEscenario1.reduce((prev:any, curr:any) => (curr.costo_dolar_por_MW < prev.costo_dolar_por_MW ? curr : prev));
  descripcion.push(this.generarTextoEscenarios(nodoConMenorCosto,nodoConMayorCosto))
  return descripcion;
}

 generarTextoEscenarios(mejor: any , peor:any) :string{
  const string= `El Nodo ${mejor.nodo} mostró el mejor desempeño, con una demanda de ${mejor.carga_MW} MW, atendió el ${Number(mejor._atendido)*100} % de su carga (${mejor.potencia_atendida_MW} MW), deslastrando ${mejor.potencia_deslastrada_MW} MW con un costo de ${mejor.costo_dolar_por_MW} $/MW por la potencia no suministrada.` 
  + `\n\n En contrate el nodo ${peor.nodo} solo atendió el ${Number(peor._atendido)*100} de su carga (${peor.carga_MW} MW) dejando ${peor.potencia_deslastrada_MW} sin suministro. Esta potencia deslastrada generó un costo elevado de ${peor.costo_dolar_por_MW} $/MW reflejando una importante limitación para cubrir la demanda en este nodo. La comparación entre los nodos sugiere la necesidad de mejorar la capacidad de suministro en el Nodo 4 para reducir los costos de deslastre y optimizar la eficiencia general del sistema.` ;
  return string;
}

getResultadosEscenario1(event:any){
  this.escenariosConNodos = event.elements.escenario1ConSinRdNiGd;
  const escenario1: object[] = [];  
  for(let i=0; i<this.escenariosConNodos.length;i++){
    escenario1.push(this.escenariosConNodos[i]);
  }
  this.rowDataEscenario1= escenario1;
}

getResultadosEscenario2(event:any){
  this.escenariosConNodos = event.elements.escenario2ConRdSinGd;
const escenario2: object[] = [];  
for(let i=0; i<this.escenariosConNodos.length;i++){
  escenario2.push(this.escenariosConNodos[i]);
}
this.rowDataEscenario2= escenario2;
}

getResultadosEscenario3(event:any){
  this.escenariosConNodos = event.elements.escenario3ConGdSinRd;
  const escenario3: object[] = [];  
  for(let i=0; i<this.escenariosConNodos.length;i++){
    escenario3.push(this.escenariosConNodos[i]);
  }
  this.rowDataEscenario3= escenario3;
}

getResultadosEscenario4(event:any){
  this.escenariosConNodos = event.elements.escenario4ConGdYRd;
const escenario4: object[] = [];  
for(let i=0; i<this.escenariosConNodos.length;i++){
  escenario4.push(this.escenariosConNodos[i]);
}
this.rowDataEscenario4= escenario4;
}

getDescripcionResultados(rowDataEscenarios: Object[]):string[] {
  let String:string[]=[];
  let datos:any = rowDataEscenarios;
  const string= `El análisis de los cuatro escenarios muestra variaciones
  en la eficiencia y el costo de operación del sistema eléctrico. En el Escenario 1 (sin RD ni GD),se observa la mayor potencia deslastrada ( ${datos[0].potencia_deslastrada_MW} MW) 
  y altos costos de operación y deslastre ($${datos[0].costo_operacion_dolar_per_MWH} y $${datos[0].costo_deslastre_dolar_per_MWH} ,repectivamente) ,
  junto con factores de utilización relativamente bajos (U1 = ${datos[0].U1} y U2= ${datos[0].U2}). 
  En el Escenario 2 (con RD, sin GD), la potencia deslastrada disminuye a (${datos[1].potencia_deslastrada_MW} MW), los costos de operación y deslastre son menores 
  ($${datos[1].costo_operacion_dolar_per_MWH} y $${datos[1].costo_deslastre_dolar_per_MWH}) y los factores de utilización son más altos (U1 = ${datos[1].U1} y U2 =${datos[1].U2}), lo cual refleja una mejora en la eficiencia del sistema.`;
  
 const string2 =`El Escenario 3 (con GD, sin RD) presenta una potencia deslastrada de ( ${datos[2].potencia_deslastrada_MW} MW) y costos intermedios ($${datos[2].costo_operacion_dolar_per_MWH} y ${datos[2].costo_deslastre_dolar_per_MWH})
 con factores de utilización (U1 = ${datos[2].U1} y U2= ${datos[2].U2}) superiores a los del primer escenario, pero inferiores a los del segundo
 . El Escenario 4 (con GD y RD) es el más eficiente, logrando la menor potencia deslastrada ( ${datos[3].potencia_deslastrada_MW} MW) ,el menor costo de operación ($${datos[3].costo_operacion_dolar_per_MWH}) y los factores de utilización más altos
  (U1 = ${datos[3].U1} y U2= ${datos[3].U2}) ), lo que sugiere una combinación óptima de recursos. Esto indica que el uso conjunto de GD y RD permite reducir significativamente la potencia deslastrada y los costos, optimizando el rendimiento del sistema.`;
  String =[string,string2];
  console.log(String)
  return String;
}



getResultadosEscenarios(event:any){
  this.getResultadosEscenario1(event);
  this.getResultadosEscenario2(event);
  this.getResultadosEscenario3(event);
  this.getResultadosEscenario4(event);
}



getEntradasIniciales(event: any) {

this.one(event);
this.two(event);
this.three(event);
this.getResuldatos(event);
this.getResultadosEscenarios(event);

const DesEscenario1: string[] = [
  `No existe acuerdo para la desconexión voluntaria de carga y bajo esta condición es ejecutado
   el plan de ataque más severo del análisis de vulnerabilidad, pero no se toman acciones de mitigación
    por el operador de red.\n`,
  `La siguiente tabla muestra la distribución de carga, potencia deslastrada, costo por MW, 
  potencia atendida y porcentaje de carga atendida por los ${this.rowDataEscenario1.length} nodos de un sistema eléctrico.\n\n`
];

const DesEscenario2: string[] = [
  `Existe un acuerdo bilateral entre el operador de red y algunas cargas del sistema para desconectar
   voluntariamente un porcentaje de la carga total. En la etapa posterior al ataque el operador de red 
   no realiza acciones para disminuir el deslastre de carga.\n`,
  `La siguiente tabla muestra muestra el desempeño de ${this.rowDataEscenario2.length} en un sistema eléctrico en cuanto
  a la carga atendida, potencia deslastrada, costo por MW de potencia no atendida, y el porcentaje de carga cubierta.\n\n`
];

const DesEscenario3: string[] = [
  `No existe acuerdo para la desconexión voluntaria de carga En la etapa posterior
   al ataque el operador de red optimiza la ubicación y dimensionamiento de generadores 
   distribuidos para disminuir el deslastre de carga.\n`,
  `La siguiente tabla muestra muestra el desempeño de ${this.rowDataEscenario3.length} en un sistema eléctrico en cuanto
  a la carga atendida, potencia deslastrada, costo por MW de potencia no atendida, y el porcentaje de carga cubierta.\n\n`
];

const DesEscenario4: string[] = [
  `Existe un acuerdo bilateral entre el operador de red y algunas cargas del sistema para desconectar voluntariamente un 
  porcentaje de la carga total. En la etapa posterior al ataque el operador de red optimiza la ubicación de generadores
   distribuidos y reasigna la respuesta a la demanda para disminuir el deslastre de carga..\n`,
  `La siguiente tabla muestra muestra el desempeño de ${this.rowDataEscenario4.length} en un sistema eléctrico en cuanto
  a la carga atendida, potencia deslastrada, costo por MW de potencia no atendida, y el porcentaje de carga cubierta.\n\n`
];

const Descripciones ={
  DesEscenario1,
  DesEscenario2,
  DesEscenario3,
  DesEscenario4
}
this.descripcionEscenario1=this.getDescripcion(this.rowDataEscenario1,Descripciones.DesEscenario1);
this.descripcionEscenario2=this.getDescripcion(this.rowDataEscenario2,Descripciones.DesEscenario2);
this.descripcionEscenario3=this.getDescripcion(this.rowDataEscenario3,Descripciones.DesEscenario3);
this.descripcionEscenario4=this.getDescripcion(this.rowDataEscenario4,Descripciones.DesEscenario4);
this.descripcionResultados =this.getDescripcionResultados(this.rowDataEscenarios);
}
 


}
