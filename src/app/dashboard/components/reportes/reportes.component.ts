import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ColDef, SizeColumnsToFitGridStrategy } from 'ag-grid-community';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
import autotable, { autoTable } from 'jspdf-autotable'; 






@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent implements OnInit{

  caso:string='';
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
  
  colDefsLineasAtacadas:ColDef[] = [
    { headerName: 'Línea', field: 'linea' },
    { headerName: 'Porcentaje', field: 'porcentaje' }
  ];

 rowdataLineasAtacadas:any;

  colDefsGeneradores:ColDef[]= [
    { headerName: 'Generador', field: 'generador' },
    { headerName: 'Porcentaje', field: 'porcentaje' }
  ];


  metricas: boolean=false;
  obj: any={};


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

downloadPDF(ss:string){

  if(this.caso!=null){
    const data:any= document.getElementById('pdf-content');
    html2canvas(data ).then(canvas => {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL('image/png'),'PNG',0,0,400,298);
      pdf.setProperties({
        title:'xd',
        subject:'xd'
      })
      pdf.save('File')

  });
  }
}

down(){
  if (this.caso != null) {
    let tableHTML = `<div id="pdf-content" class="container">`;
    tableHTML += `<h2>Tabla de generadores</h2>`;
     // TABLA 1
    tableHTML += `<table border="1" style="border-collapse: collapse; width: 100%;">`;
    tableHTML += `<thead><tr>`;
    this.colDefs.forEach(col => {
      tableHTML += `<th style="padding: 8px; text-align: left; background-color: #f2f2f2;">${col.headerName}</th>`;
    });
    tableHTML += `</tr></thead>`;
    tableHTML += `<tbody>`;
    this.rowData.forEach((row:any) => {
      tableHTML += `<tr>`;
      this.colDefs.forEach((col:any) => {
        console.log(row)
        tableHTML += `<td style="padding: 8px; text-align: left;">${row[col.field]}</td>`;
      });
      tableHTML += `</tr>`;
    });
    tableHTML += `</tbody>`;
    
    tableHTML += `</table>`;
    // tABLA 2
    tableHTML += `<h2>Tabla de Lineas</h2>`;
    tableHTML += `<table border="1" style="border-collapse: collapse; width: 100%;">`;
    tableHTML += `<thead><tr>`;
    this.colDefsLineas.forEach(col => {
      tableHTML += `<th style="padding: 8px; text-align: left; background-color: #f2f2f2;">${col.headerName}</th>`;
    });
    tableHTML += `</tr></thead>`;
    tableHTML += `<tbody>`;
    this.rowData1.forEach((row:any) => {
      tableHTML += `<tr>`;
      this.colDefsLineas.forEach((col:any) => {
        console.log(row)
        tableHTML += `<td style="padding: 8px; text-align: left;">${row[col.field]}</td>`;
      });
      tableHTML += `</tr>`;
    });
    tableHTML += `</tbody>`;
    tableHTML += `</table>`;
      // tABLA NODOS 3
      tableHTML += `<h2>Tabla de nodos</h2>`;
      tableHTML += `<table border="1" style="border-collapse: collapse; width: 100%;">`;
      tableHTML += `<thead><tr>`;
      this.colDefsNodos.forEach(col => {
        tableHTML += `<th style="padding: 8px; text-align: left; background-color: #f2f2f2;">${col.headerName}</th>`;
      });
      tableHTML += `</tr></thead>`;
      tableHTML += `<tbody>`;
      this.rowData2.forEach((row:any) => {
        tableHTML += `<tr>`;
        this.colDefsNodos.forEach((col:any) => {
          console.log(row)
          tableHTML += `<td style="padding: 8px; text-align: left;">${row[col.field]}</td>`;
        });
        tableHTML += `</tr>`;
      });
      tableHTML += `</tbody>`;
      tableHTML += `</table>`;

      // tABLA resl 
      tableHTML += `<h2>Tabla de resultados</h2>`;
      tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionResultados[0]}</span>`
      tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionResultados[1]}</span>`
      tableHTML += `<table border="1" style="border-collapse: collapse; width: 100%;">`;
      tableHTML += `<thead><tr>`;
      this.colDefsEscenarios.forEach(col => {
        tableHTML += `<th style="padding: 8px; text-align: left; background-color: #f2f2f2;">${col.headerName}</th>`;
      });
      tableHTML += `</tr></thead>`;
      tableHTML += `<tbody>`;
      this.rowDataEscenarios.forEach((row:any) => {
        tableHTML += `<tr>`;
        this.colDefsEscenarios.forEach((col:any) => {
          console.log(row)
          tableHTML += `<td style="padding: 8px; text-align: left;">${row[col.field]}</td>`;
        });
        tableHTML += `</tr>`;
      });
      tableHTML += `</tbody>`;
      tableHTML += `</table>`;
  // tABLA resl 
      tableHTML += `<h2>Tabla Escenario 1 : Sin RD ni GD</h2>`;
      tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario1[0]}</span>`
      tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario1[1]}</span>`
      tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario1[2]}</span>`
      tableHTML += `<table border="1" style="border-collapse: collapse; width: 100%;">`;
      tableHTML += `<thead><tr>`;
      this.colDefsEscenariosNodos.forEach(col => {
        tableHTML += `<th style="padding: 8px; text-align: left; background-color: #f2f2f2;">${col.headerName}</th>`;
      });
      tableHTML += `</tr></thead>`;
      tableHTML += `<tbody>`;
      this.rowDataEscenario1.forEach((row:any) => {
        tableHTML += `<tr>`;
        this.colDefsEscenariosNodos.forEach((col:any) => {
          console.log(row)
          tableHTML += `<td style="padding: 8px; text-align: left;">${row[col.field]}</td>`;
        });
        tableHTML += `</tr>`;
      });
      tableHTML += `</tbody>`;
      tableHTML += `</table>`;
      //tabla 2 Escenario 2: RD sin GD
      tableHTML += `<h2>Tabla Escenario 2: RD sin GD</h2>`;
      tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario2[0]}</span>`
      tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario2[1]}</span>`
      tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario2[2]}</span>`
      tableHTML += `<table border="1" style="border-collapse: collapse; width: 100%;">`;
      tableHTML += `<thead><tr>`;
      this.colDefsEscenariosNodos.forEach(col => {
        tableHTML += `<th style="padding: 8px; text-align: left; background-color: #f2f2f2;">${col.headerName}</th>`;
      });
      tableHTML += `</tr></thead>`;
      tableHTML += `<tbody>`;
      this.rowDataEscenario2.forEach((row:any) => {
        tableHTML += `<tr>`;
        this.colDefsEscenariosNodos.forEach((col:any) => {
          console.log(row)
          tableHTML += `<td style="padding: 8px; text-align: left;">${row[col.field]}</td>`;
        });
        tableHTML += `</tr>`;
      });
      tableHTML += `</tbody>`;
      tableHTML += `</table>`;
       //tabla 3 Escenario 3:  GD sin RD
       tableHTML += `<h2>Tabla Escenario 3:  GD sin RD</h2>`;
       tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario3[0]}</span>`
       tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario3[1]}</span>`
       tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario3[2]}</span>`
       tableHTML += `<table border="1" style="border-collapse: collapse; width: 100%;">`;
       tableHTML += `<thead><tr>`;
       this.colDefsEscenariosNodos.forEach(col => {
         tableHTML += `<th style="padding: 8px; text-align: left; background-color: #f2f2f2;">${col.headerName}</th>`;
       });
       tableHTML += `</tr></thead>`;
       tableHTML += `<tbody>`;
       this.rowDataEscenario3.forEach((row:any) => {
         tableHTML += `<tr>`;
         this.colDefsEscenariosNodos.forEach((col:any) => {
           console.log(row)
           tableHTML += `<td style="padding: 8px; text-align: left;">${row[col.field]}</td>`;
         });
         tableHTML += `</tr>`;
       });
       tableHTML += `</tbody>`;
       tableHTML += `</table>`;
       //tabla 4 Escenario 4:  GD y RD
       tableHTML += `<h2>Tabla Escenario 3:  GD y RD</h2>`;
       tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario4[0]}</span>`
       tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario4[1]}</span>`
       tableHTML += `<span style="flex-grow: 1;overflow: visiblepadding-bottom: 10px;background-color: #fff;display: flex;justify-content: left;white-space: normal;text-align: justify;">${this.descripcionEscenario4[2]}</span>`
       tableHTML += `<table border="1" style="border-collapse: collapse; width: 100%;">`;
       tableHTML += `<thead><tr>`;
       this.colDefsEscenariosNodos.forEach(col => {
         tableHTML += `<th style="padding: 8px; text-align: left; background-color: #f2f2f2;">${col.headerName}</th>`;
       });
       tableHTML += `</tr></thead>`;
       tableHTML += `<tbody>`;
       this.rowDataEscenario4.forEach((row:any) => {
         tableHTML += `<tr>`;
         this.colDefsEscenariosNodos.forEach((col:any) => {
           console.log(row)
           tableHTML += `<td style="padding: 8px; text-align: left;">${row[col.field]}</td>`;
         });
         tableHTML += `</tr>`;
       });
       tableHTML += `</tbody>`;
       tableHTML += `</table>`;


       tableHTML += `</table>`;
       tableHTML += `<h2>Metricas</h2>`;
       tableHTML += `<table border="1" style="border-collapse: collapse; width: 100%;">`;
       tableHTML += `<thead><tr>`;
       this.colDefsLineasAtacadas.forEach(col => {
         tableHTML += `<th style="padding: 8px; text-align: left; background-color: #f2f2f2;">${col.headerName}</th>`;
       });
       tableHTML += `</tr></thead>`;
       tableHTML += `<tbody>`;
       this.obj.metrica_lineas_generadores_atacados.lineas.forEach((linea: any) => {
        tableHTML += `<tr>`;
        tableHTML += `<td style="padding: 8px; text-align: left;">${linea.linea}</td>`;
        tableHTML += `<td style="padding: 8px; text-align: left;">${linea.porcentaje}%</td>`;
        tableHTML += `</tr>`;
      });
       tableHTML += `</tbody>`;
       tableHTML += `</table>`;

       tableHTML += `</tbody>`;
tableHTML += `</table>`;

// Reporte de Generadores Atacados
tableHTML += `<h3>Generadores Atacados</h3>`;
tableHTML += `<table border="1" style="border-collapse: collapse; width: 100%;">`;
tableHTML += `<thead><tr><th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Generador</th><th style="padding: 8px; text-align: left; background-color: #f2f2f2;">Porcentaje</th></tr></thead>`;
tableHTML += `<tbody>`;
this.obj.metrica_lineas_generadores_atacados.generadores.forEach((generador: any) => {
  tableHTML += `<tr>`;
  tableHTML += `<td style="padding: 8px; text-align: left;">${generador.generador}</td>`;
  tableHTML += `<td style="padding: 8px; text-align: left;">${generador.porcentaje}%</td>`;
  tableHTML += `</tr>`;
});

tableHTML += `</tbody>`;
tableHTML += `</table>`;

tableHTML += `<h3>Tiempo de Ejecución</h3>`;
tableHTML += `<p>${this.obj.tiempo_ejecucion.toFixed(2)} segundos</p>`;

       tableHTML += `<span><h6> Gráfica Nodo: </h6></span>`
       tableHTML += `<img src="/assets/images/Ncaso_${this.caso}.jpg"  width="%100" height="100%" alt=" ">`
       
       tableHTML += `<span><h6> Gráfica Resumen: </h6></span>`
       tableHTML += `<img src="/assets/images/caso_${this.caso}.jpg"  width="%100" height="100%" alt=" ">`


    tableHTML += `</div>`;

    // Paso 2: Insertar el HTML generado en un contenedor temporal
    const container = document.createElement('div');
    container.innerHTML = tableHTML;
    document.body.appendChild(container); // Añadir temporalmente al body

    // Paso 3: Usar html2canvas para generar una imagen del contenido
    const data: any = container.querySelector('#pdf-content');
    html2canvas(data, { allowTaint: true,
      width: 2480,
        height: 3508
       }).then(canvas => {  // Escalar para mejorar la resolución
      const pdf = new jsPDF();
      
      // Obtener el tamaño del canvas generado
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Calcular el tamaño en unidades de PDF (puntos)
      const pdfWidth = 210;  // Tamaño de una página A4 en mm
      const pdfHeight = 2910; // Tamaño de una página A4 en mm

      // Calcular escala para ajustarse a la página
      const scaleX = pdfWidth / canvasWidth;
      const scaleY = pdfHeight / canvasHeight;
      const scale = Math.min(scaleX, scaleY);  // Escalar proporcionalmente

      // Agregar la imagen al PDF
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, canvasWidth * scale, canvasHeight * scale);

      pdf.setProperties({
        title: 'Reporte de Nodos',
        subject: 'Tabla de Nodos'
      });
      pdf.save('Reporte.pdf');

      // Limpia el contenedor temporal
      document.body.removeChild(container);
    });
  }


}



  async dd(){
  const columnGeneratos:any = this.colDefs.map(col => col.headerName);
  const rows:any =this.rowData.map((row:any)=> [
  row.NODO,                    
  row.PG_MW,                   
  row.QG_MW,                   
  row.Q_MAX_MVAR,               
  row.Q_MIN_MVAR,               
  row.P_MAX_MW,              
  row.costo_marginal_dolar_per_MW
  ]);

  const columnLineas:any = this.colDefsLineas.map(col => col.headerName);
 const rowLineas: any = this.rowData1.map((row:any)=>
   [row.I,
   row.J,
   row.flujo_P_I_a_J_MW,
   row.flujo_P_J_a_I_MW,
   row.flujo_Q_I_a_J_MW,
   row.flujo_Q_J_a_I_MW
   ]
  ); 

  const columnNodosLineas:any = this.colDefsNodos.map(col => col.headerName);
  const rowLineasNodos: any = this.rowData2.map((row:any)=>
    [
      row.nodo,
      row.tipo_de_nodo,
      row.P_MW,
      row.Q_MVAR,
      row.V_max,
      row.V_min
    ]
   );

   const columnsResultados:any = this.colDefsEscenarios.map(col => col.headerName);
   const rowResultados: any = this.rowDataEscenarios.map((row:any)=>
    [
      row.escenario,
      row.potencia_deslastrada_MW,
      row.potencia_atendida_MW,
      row.potencia_generada_adicional_MW,
      row.costo_operacion_dolar_per_MWH,
      row.costo_deslastre_dolar_per_MWH,
      row.U1,
      row.U2,
      row.U,
      row.resilencia
    ]
   );

   const columnsEscenariol:any = this.colDefsEscenariosNodos.map(col => col.headerName);
   const rowResultadosEscenario1: any = this.rowDataEscenario1.map((row:any)=>
    [
      row.nodo,
      row.carga_MW,
      row.potencia_atendida_MW,
      row.potencia_deslastrada_MW,
      row.costo_dolar_por_MW,
      row.potencia_atendida_MW,
      row._atendido,
    ]
   );

   const columnsEscenario2:any = this.colDefsEscenariosNodos.map(col => col.headerName);
   const rowResultadosEscenario2: any = this.rowDataEscenario2.map((row:any)=>
    [
      row.nodo,
      row.carga_MW,
      row.potencia_atendida_MW,
      row.potencia_deslastrada_MW,
      row.costo_dolar_por_MW,
      row.potencia_atendida_MW,
      row._atendido,
    ]
   );

   const columnsEscenario3:any = this.colDefsEscenariosNodos.map(col => col.headerName);
   const rowResultadosEscenario3: any = this.rowDataEscenario3.map((row:any)=>
    [
      row.nodo,
      row.carga_MW,
      row.potencia_atendida_MW,
      row.potencia_deslastrada_MW,
      row.costo_dolar_por_MW,
      row.potencia_atendida_MW,
      row._atendido,
    ]
   );

   const columnsEscenario4:any = this.colDefsEscenariosNodos.map(col => col.headerName);
   const rowResultadosEscenario4: any = this.rowDataEscenario4.map((row:any)=>
    [
      row.nodo,
      row.carga_MW,
      row.potencia_atendida_MW,
      row.potencia_deslastrada_MW,
      row.costo_dolar_por_MW,
      row.potencia_atendida_MW,
      row._atendido,
    ]
   );


   console.log('RES',rowResultados)

  let pdf = new jsPDF();
  //
  pdf.text(`Reporte caso ${this.caso}`,10,10);
  pdf.text(`Tabla 1. Características de los generadores`,10,20);
  autotable(pdf, {
    head: [columnGeneratos],
    body:  rows,
  startY: 25,       // Establecer la posición vertical donde comenzará la tabla
  theme: 'grid',    // Estilo de la tabla (puedes usar 'striped', 'grid', 'plain')
  margin: { top: 30, left: 10, right: 10 }, // Márgenes de la tabla
  styles: { fontSize: 10 },
    didDrawCell: (data) => { },
});
//
let finalY = (pdf as any).lastAutoTable.finalY;
pdf.text(`Tabla 2. Características de los generadores`,10,finalY+10);
autotable(pdf, {
  head: [columnLineas],
  body:  rowLineas,
startY: finalY+15,       
theme: 'grid',    
margin: { top: 30, left: 10, right: 10 }, // Márgenes de la tabla
styles: { fontSize: 10 },
  didDrawCell: (data) => { },
});
//
let finalY1 = (pdf as any).lastAutoTable.finalY;
pdf.text(`Tabla 3. Características de los nodos`,10,finalY1+10);
autotable(pdf, {
  head: [columnNodosLineas],
  body:  rowLineasNodos,
startY: finalY1+15,       
theme: 'grid',    
margin: { top: 30, left: 10, right: 10 }, // Márgenes de la tabla
styles: { fontSize: 10},
  didDrawCell: (data) => { },
});
//
let finalY2 = (pdf as any).lastAutoTable.finalY;
pdf.text(`Resultados`,10,finalY2+10);
autotable(pdf, {
  head: [[`${this.descripcionResultados[0].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY2+15,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
//
let finalY3 = (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [[`${this.descripcionResultados[1].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY3,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});

let finalY4 = (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [columnsResultados],
  body:  rowResultados,
startY: finalY4+15,       
theme: 'grid',    
margin: { top: 30, left: 10, right: 10 }, // Márgenes de la tabla
styles: { fontSize: 10},
  didDrawCell: (data) => { },
});
let finalY5= (pdf as any).lastAutoTable.finalY;
pdf.text(`Escenarios`,10,finalY5+10);
pdf.text(`Escenario 1 : Sin RD ni GD`,10,finalY5+20);
autotable(pdf, {
  head: [[`${this.descripcionEscenario1[0].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY5+25,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY6= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [[`${this.descripcionEscenario1[1].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY6,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY7= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [[`${this.descripcionEscenario1[2].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY7,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY8= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [columnsEscenariol],
  body:  rowResultadosEscenario1,
startY: finalY8,       
theme: 'grid',    
margin: { top: 30, left: 10, right: 10 }, // Márgenes de la tabla
styles: { fontSize: 10},
  didDrawCell: (data) => { },
});
let finalY9= (pdf as any).lastAutoTable.finalY;
pdf.text(`Escenario 2: RD sin GD`,10,finalY9+10);
autotable(pdf, {
  head: [[`${this.descripcionEscenario2[0].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY9+15,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY10= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [[`${this.descripcionEscenario2[1].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY10,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY11= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [[`${this.descripcionEscenario2[2].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY11,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY12= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [columnsEscenario2],
  body:  rowResultadosEscenario2,
startY: finalY12,       
theme: 'grid',    
margin: { top: 30, left: 10, right: 10 }, // Márgenes de la tabla
styles: { fontSize: 10},
  didDrawCell: (data) => { },
});
let finalY13= (pdf as any).lastAutoTable.finalY;
pdf.text(`Escenario 3 : GD sin RD`,10,finalY13+10);
autotable(pdf, {
  head: [[`${this.descripcionEscenario3[0].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY13+15,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY14= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [[`${this.descripcionEscenario3[0].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY14,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY15= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [[`${this.descripcionEscenario3[1].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY15,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY16= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [[`${this.descripcionEscenario3[2].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY16,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY17= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [columnsEscenario3],
  body:  rowResultadosEscenario3,
startY: finalY17,       
theme: 'grid',    
margin: { top: 30, left: 10, right: 10 }, // Márgenes de la tabla
styles: { fontSize: 10},
  didDrawCell: (data) => { },
});
////pegados

let finalY18= (pdf as any).lastAutoTable.finalY;
pdf.text(`Escenario 4 : GD y RD`,10,finalY18+10);
autotable(pdf, {
  head: [[`${this.descripcionEscenario4[0].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY18+15,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY19= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [[`${this.descripcionEscenario4[1].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY19,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});
let finalY20= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [[`${this.descripcionEscenario4[2].replace(/[\r\n]+/g, ' ')}`]],
  //body:  rowLineasNodos,
startY: finalY20,       
margin: { top: 30, left: 10, right: 10 },
styles: { 
  fontSize: 10,      
  cellWidth: 'auto',
},
});

let finalY21= (pdf as any).lastAutoTable.finalY;
autotable(pdf, {
  head: [columnsEscenario4],
  body:  rowResultadosEscenario4,
startY: finalY21,       
theme: 'grid',    
margin: { top: 30, left: 10, right: 10 }, // Márgenes de la tabla
styles: { fontSize: 10},
  didDrawCell: (data) => { },
});



//let tableHTML = ''
 //await new Promise<void>((resolve) => {
  //pdf.html(tableHTML, {
    //callback: function (pdf) {
     // resolve(); // El callback se usa para indicar que el HTML ya se ha procesado
    //},
    //x: 10,
    //y: finalY2 + 30,
   // width: pdf.internal.pageSize.getWidth() - 20,
 // });
//});

pdf.save('table.pdf');

}




getEntradasIniciales(event: any) {
  let aux : Object[]=[];
  this.metricas=false;
  this.obj=event.obj
  this.rowdataLineasAtacadas=event.obj.metrica_lineas_generadores_atacados.lineas;


  this.rowData=aux;
  this.rowData1=aux;
  this.rowData2=aux;
  this.rowDataEscenarios=aux;
  this.rowDataEscenario1=aux;
  this.rowDataEscenario2=aux;
  this.rowDataEscenario3=aux;
  this.rowDataEscenario4=aux;
  
this.caso=event.caso
this.one(event);
this.two(event);
this.three(event);
this.getResuldatos(event);
this.getResultadosEscenarios(event);
this.metricas=true;
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
