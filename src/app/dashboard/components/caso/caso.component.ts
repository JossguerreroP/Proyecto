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

    if(this.location.path()=='/Corridos?st=true' 
    || this.location.path()=='/Reportes?Visualizar=true' 
    || this.location.path()=='/Reportes?Descargar=true' ){
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
        },
        
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

    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 999.9999986,
        "potencia_atendida_MW": 1.38608E-06,
        "potencia_generada_adicional_MW": 0,
        "costo_operacion_dolar_per_MWH": 219999.9994,
        "costo_deslastre_dolar_per_MWH": 219999.9994,
        "U1": 1.38608E-09,
        "U2": 2.22045E-16,
        "U": 6.93038E-10,
        "resiliencia": "DEFICIENTE"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 750.5522735,
        "potencia_atendida_MW": 249.4477265,
        "potencia_generada_adicional_MW": 249.4477251,
        "costo_operacion_dolar_per_MWH": 132720.9095,
        "costo_deslastre_dolar_per_MWH": 120220.9096,
        "U1": 0.249447727,
        "U2": 0.094182597,
        "U": 0.171815162,
        "resiliencia": "DEFICIENTE"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 955.0055239,
        "potencia_atendida_MW": 44.99447609,
        "potencia_generada_adicional_MW": 44.99447471,
        "costo_operacion_dolar_per_MWH": 205377.2097,
        "costo_deslastre_dolar_per_MWH": 202002.2098,
        "U1": 0.044994476,
        "U2": 0.016433176,
        "U": 0.030713826,
        "resiliencia": "DEFICIENTE"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 705.6682519,
        "potencia_atendida_MW": 294.3317481,
        "potencia_generada_adicional_MW": 294.3317467,
        "costo_operacion_dolar_per_MWH": 118142.3009,
        "costo_deslastre_dolar_per_MWH": 102267.301,
        "U1": 0.294331748,
        "U2": 0.134371853,
        "U": 0.214351801,
        "resiliencia": "DEFICIENTE"
      }
    ];

     let escenario1ConSinRdNiGd = [
      {
        "nodo": 2,
        "carga_MW": 300,
        "potencia_deslastrada_MW": 300,
        "costo_dolar_por_MW": 30000,
        "potencia_atendida_MW": 4.3417E-10,
        "_atendido": 1.44723E-10
      },
      {
        "nodo": 3,
        "carga_MW": 300,
        "potencia_deslastrada_MW": 300,
        "costo_dolar_por_MW": 30000,
        "potencia_atendida_MW": 4.21892E-10,
        "_atendido": 1.40631E-10
      },
      {
        "nodo": 4,
        "carga_MW": 400,
        "potencia_deslastrada_MW": 399.9999986,
        "costo_dolar_por_MW": 159999.9994,
        "potencia_atendida_MW": 1.38522E-06,
        "_atendido": 3.46305E-07
      }
    ];

   let  escenario2ConRdSinGd = [
      {
        "nodo": 2,
        "carga_MW": 300,
        "potencia_deslastrada_MW": 299.9999997,
        "costo_dolar_por_MW": 29999.99997,
        "potencia_atendida_MW": 2.79418E-07,
        "_atendido": 9.31393E-08
      },
      {
        "nodo": 3,
        "carga_MW": 300,
        "potencia_deslastrada_MW": 299.9999997,
        "costo_dolar_por_MW": 29999.99997,
        "potencia_atendida_MW": 2.7942E-07,
        "_atendido": 9.314E-08
      },
      {
        "nodo": 4,
        "carga_MW": 400,
        "potencia_deslastrada_MW": 150.552274,
        "costo_dolar_por_MW": 60220.90961,
        "potencia_atendida_MW": 249.447726,
        "_atendido": 62.36193149
      }
    ];
  
   let  escenario3ConGdSinRd = [
      {
        "nodo": 2,
        "carga_MW": 300,
        "potencia_deslastrada_MW": 299.9999996,
        "costo_dolar_por_MW": 29999.99996,
        "potencia_atendida_MW": 4.32616E-07,
        "_atendido": 1.44205E-07
      },
      {
        "nodo": 3,
        "carga_MW": 300,
        "potencia_deslastrada_MW": 299.9999996,
        "costo_dolar_por_MW": 29999.99996,
        "potencia_atendida_MW": 4.32616E-07,
        "_atendido": 1.44205E-07
      },
      {
        "nodo": 4,
        "carga_MW": 400,
        "potencia_deslastrada_MW": 355.0055248,
        "costo_dolar_por_MW": 142002.2099,
        "potencia_atendida_MW": 44.99447523,
        "_atendido": 11.24861881
      }
    ];
  
   let escenario4ConGdYRd = [
      {
        "nodo": 2,
        "carga_MW": 300,
        "potencia_deslastrada_MW": 299.9999996,
        "costo_dolar_por_MW": 29999.99996,
        "potencia_atendida_MW": 3.58864E-07,
        "_atendido": 1.19621E-07
      },
      {
        "nodo": 3,
        "carga_MW": 300,
        "potencia_deslastrada_MW": 299.9999996,
        "costo_dolar_por_MW": 29999.99996,
        "potencia_atendida_MW": 3.58867E-07,
        "_atendido": 1.19622E-07
      },
      {
        "nodo": 4,
        "carga_MW": 400,
        "potencia_deslastrada_MW": 105.6682526,
        "costo_dolar_por_MW": 42267.30104,
        "potencia_atendida_MW": 294.3317474,
        "_atendido": 73.58293685
      }
    ];

    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
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
