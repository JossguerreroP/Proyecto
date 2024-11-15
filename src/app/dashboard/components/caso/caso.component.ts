import { Component ,EventEmitter, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-caso',
  templateUrl: './caso.component.html',
  styleUrl: './caso.component.css'
})
export class CasoComponent {

  selectCase(caso:string):void{

    if(this.location.path()!='/Crear'){
      console.log(this.location.path())
  }

    if(this.location.path()=='/Corridos?st=true'){
      this.getEntradasIniciales(caso);
  }

  }
  getEntradasIniciales(caso: string) {
   if(caso=="5"){
    let generadores:object = {
      "generators": [
        {
          "nodo": 1,
          "PG_MW": 40,
          "QG_MW": 0,
          "Q_MAX_MVAR": 30,
          "Q_MIN_MVAR": -30,
          "P_MAX_MW": 40,
          "costo_marginal_dolar_per_MW": 14
        },
        {
          "nodo": 1,
          "PG_MW": 170,
          "QG_MW": 0,
          "Q_MAX_MVAR": 127.5,
          "Q_MIN_MVAR": -127.5,
          "P_MAX_MW": 170,
          "costo_marginal_dolar_per_MW": 15
        },
        {
          "nodo": 3,
          "PG_MW": 323.49,
          "QG_MW": 0,
          "Q_MAX_MVAR": 390,
          "Q_MIN_MVAR": -390,
          "P_MAX_MW": 520,
          "costo_marginal_dolar_per_MW": 30
        },
        {
          "nodo": 4,
          "PG_MW": 0,
          "QG_MW": 0,
          "Q_MAX_MVAR": 150,
          "Q_MIN_MVAR": -150,
          "P_MAX_MW": 200,
          "costo_marginal_dolar_per_MW": 40
        },
        {
          "nodo": 5,
          "PG_MW": 466.51,
          "QG_MW": 0,
          "Q_MAX_MVAR": 450,
          "Q_MIN_MVAR": -450,
          "P_MAX_MW": 600,
          "costo_marginal_dolar_per_MW": 10
        }
      ]
    }

    let lineas:object = {
      "lines": [
        {
          "I": 1,
          "J": 2,
          "flujo_P_I_a_J_MW": 252.3778671,
          "flujo_Q_I_a_J_MW": -42.44955488,
          "flujo_P_J_a_I_MW": -250.7938342,
          "flujo_Q_J_a_I_MW": 57.45810647
        },
        {
          "I": 1,
          "J": 4,
          "flujo_P_I_a_J_MW": 187.8686257,
          "flujo_Q_I_a_J_MW": 33.13174049,
          "flujo_P_J_a_I_MW": -186.9152627,
          "flujo_Q_J_a_I_MW": -24.35271919
        },
        {
          "I": 1,
          "J": 5,
          "flujo_P_I_a_J_MW": -230.2465927,
          "flujo_Q_I_a_J_MW": 166.8171615,
          "flujo_P_J_a_I_MW": 230.6954868,
          "flujo_Q_J_a_I_MW": -165.929638
        },
        {
          "I": 2,
          "J": 3,
          "flujo_P_I_a_J_MW": -49.20616581,
          "flujo_Q_I_a_J_MW": -156.0681065,
          "flujo_P_J_a_I_MW": 49.44914858,
          "flujo_Q_J_a_I_MW": 156.2892453
        },
        {
          "I": 3,
          "J": 4,
          "flujo_P_I_a_J_MW": -24.95118828,
          "flujo_Q_I_a_J_MW": 135.099644,
          "flujo_P_J_a_I_MW": 25.41717997,
          "flujo_Q_J_a_I_MW": -131.229111
        },
        {
          "I": 4,
          "J": 5,
          "flujo_P_I_a_J_MW": -238.5015123,
          "flujo_Q_I_a_J_MW": 13.31037583,
          "flujo_P_J_a_I_MW": 239.9983436,
          "flujo_Q_J_a_I_MW": 0.891161392
        }
      ]
    }

    let nodos:object = {
      "nodes": [
        {
          "nodo": 1,
          "tipo_de_nodo": 2,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 2,
          "tipo_de_nodo": 1,
          "P_MW": 300,
          "Q_MVAR": 98.61,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 3,
          "tipo_de_nodo": 2,
          "P_MW": 300,
          "Q_MVAR": 98.61,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 4,
          "tipo_de_nodo": 3,
          "P_MW": 400,
          "Q_MVAR": 131.47,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 5,
          "tipo_de_nodo": 2,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.9
        }
      ]
    }
    this.datos.emit({generadores,lineas,nodos})
   }
  }



  @Output() datos = new EventEmitter<any>();

  constructor( private location: Location) { }

  caso =[
    {val:'5'},
    {val:'6'},
    {val:'9'},
    {val:'12'},
    {val:'14'},
    {val:'15'},
    {val:'18'},
    {val:'22'},
    {val:'24'},
    {val:'30'},
    {val:'33'},
    {val:'34'},
    {val:'38'},
    {val:'39'},
    {val:'51'},
    {val:'57'},
    {val:'69'},
    {val:'74'},
    {val:'118'},
    {val:'141'},
    {val:'300'},
    {val:'1354'},
  ];
  

}
