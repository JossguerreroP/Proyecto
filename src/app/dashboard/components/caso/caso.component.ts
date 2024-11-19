import { Component ,EventEmitter, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-caso',
  templateUrl: './caso.component.html',
  styleUrl: './caso.component.css'
})
export class CasoComponent implements OnInit {

  selectCase(caso:string):void{

    if(this.location.path()!='/Crear'){
      console.log(this.location.path())
  }

    if(this.location.path()=='/Corridos?st=true' || this.location.path()=='/Reportes?Visualizar=true' || this.location.path()=='/Reportes?Descargar=true' || this.location.path()=='/Corridos?sd=true' ){
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

   if(caso=="24"){
   
    let generadores = {
      "generators": [
        {
          "nodo": 1,
          "PG_MW": 10,
          "QG_MW": 0,
          "Q_MAX_MVAR": 10,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 20,
          "costo_marginal_dolar_per_MW": 530.6849
        },
        {
          "nodo": 1,
          "PG_MW": 10,
          "QG_MW": 0,
          "Q_MAX_MVAR": 10,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 20,
          "costo_marginal_dolar_per_MW": 530.6849
        },
        {
          "nodo": 1,
          "PG_MW": 76,
          "QG_MW": 0,
          "Q_MAX_MVAR": 30,
          "Q_MIN_MVAR": -25,
          "P_MAX_MW": 76,
          "costo_marginal_dolar_per_MW": 228.402842
        },
        {
          "nodo": 1,
          "PG_MW": 76,
          "QG_MW": 0,
          "Q_MAX_MVAR": 30,
          "Q_MIN_MVAR": -25,
          "P_MAX_MW": 76,
          "costo_marginal_dolar_per_MW": 228.402842
        },
        {
          "nodo": 2,
          "PG_MW": 10,
          "QG_MW": 0,
          "Q_MAX_MVAR": 10,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 20,
          "costo_marginal_dolar_per_MW": 530.6849
        },
        {
          "nodo": 2,
          "PG_MW": 10,
          "QG_MW": 0,
          "Q_MAX_MVAR": 10,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 20,
          "costo_marginal_dolar_per_MW": 530.6849
        },
        {
          "nodo": 2,
          "PG_MW": 76,
          "QG_MW": 0,
          "Q_MAX_MVAR": 30,
          "Q_MIN_MVAR": -25,
          "P_MAX_MW": 76,
          "costo_marginal_dolar_per_MW": 228.402842
        },
        {
          "nodo": 2,
          "PG_MW": 76,
          "QG_MW": 0,
          "Q_MAX_MVAR": 30,
          "Q_MIN_MVAR": -25,
          "P_MAX_MW": 76,
          "costo_marginal_dolar_per_MW": 228.402842
        },
        {
          "nodo": 7,
          "PG_MW": 80,
          "QG_MW": 0,
          "Q_MAX_MVAR": 60,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 100,
          "costo_marginal_dolar_per_MW": 825.235172
        },
        {
          "nodo": 7,
          "PG_MW": 80,
          "QG_MW": 0,
          "Q_MAX_MVAR": 60,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 100,
          "costo_marginal_dolar_per_MW": 825.235172
        },
        {
          "nodo": 7,
          "PG_MW": 80,
          "QG_MW": 0,
          "Q_MAX_MVAR": 60,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 100,
          "costo_marginal_dolar_per_MW": 825.235172
        },
        {
          "nodo": 13,
          "PG_MW": 95.1,
          "QG_MW": 0,
          "Q_MAX_MVAR": 80,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 197,
          "costo_marginal_dolar_per_MW": 881.34507
        },
        {
          "nodo": 13,
          "PG_MW": 95.1,
          "QG_MW": 0,
          "Q_MAX_MVAR": 80,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 197,
          "costo_marginal_dolar_per_MW": 881.34507
        },
        {
          "nodo": 13,
          "PG_MW": 95.1,
          "QG_MW": 0,
          "Q_MAX_MVAR": 80,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 197,
          "costo_marginal_dolar_per_MW": 881.34507
        },
        {
          "nodo": 14,
          "PG_MW": 0,
          "QG_MW": 35.3,
          "Q_MAX_MVAR": 200,
          "Q_MIN_MVAR": -50,
          "P_MAX_MW": 0,
          "costo_marginal_dolar_per_MW": 0
        },
        {
          "nodo": 15,
          "PG_MW": 12,
          "QG_MW": 0,
          "Q_MAX_MVAR": 6,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 12,
          "costo_marginal_dolar_per_MW": 143.277612
        },
        {
          "nodo": 15,
          "PG_MW": 12,
          "QG_MW": 0,
          "Q_MAX_MVAR": 6,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 12,
          "costo_marginal_dolar_per_MW": 143.277612
        },
        {
          "nodo": 15,
          "PG_MW": 12,
          "QG_MW": 0,
          "Q_MAX_MVAR": 6,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 12,
          "costo_marginal_dolar_per_MW": 143.277612
        },
        {
          "nodo": 15,
          "PG_MW": 12,
          "QG_MW": 0,
          "Q_MAX_MVAR": 6,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 12,
          "costo_marginal_dolar_per_MW": 143.277612
        },
        {
          "nodo": 15,
          "PG_MW": 12,
          "QG_MW": 0,
          "Q_MAX_MVAR": 6,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 12,
          "costo_marginal_dolar_per_MW": 143.277612
        },
        {
          "nodo": 15,
          "PG_MW": 155,
          "QG_MW": 0,
          "Q_MAX_MVAR": 80,
          "Q_MIN_MVAR": -50,
          "P_MAX_MW": 155,
          "costo_marginal_dolar_per_MW": 394.635742
        },
        {
          "nodo": 16,
          "PG_MW": 155,
          "QG_MW": 0,
          "Q_MAX_MVAR": 80,
          "Q_MIN_MVAR": -50,
          "P_MAX_MW": 155,
          "costo_marginal_dolar_per_MW": 394.635742
        },
        {
          "nodo": 18,
          "PG_MW": 400,
          "QG_MW": 0,
          "Q_MAX_MVAR": 200,
          "Q_MIN_MVAR": -50,
          "P_MAX_MW": 400,
          "costo_marginal_dolar_per_MW": 399.798213
        },
        {
          "nodo": 21,
          "PG_MW": 400,
          "QG_MW": 0,
          "Q_MAX_MVAR": 200,
          "Q_MIN_MVAR": -50,
          "P_MAX_MW": 400,
          "costo_marginal_dolar_per_MW": 399.798213
        },
        {
          "nodo": 22,
          "PG_MW": 50,
          "QG_MW": 0,
          "Q_MAX_MVAR": 16,
          "Q_MIN_MVAR": -10,
          "P_MAX_MW": 50,
          "costo_marginal_dolar_per_MW": 0.002
        },
        {
          "nodo": 22,
          "PG_MW": 50,
          "QG_MW": 0,
          "Q_MAX_MVAR": 16,
          "Q_MIN_MVAR": -10,
          "P_MAX_MW": 50,
          "costo_marginal_dolar_per_MW": 0.002
        },
        {
          "nodo": 22,
          "PG_MW": 50,
          "QG_MW": 0,
          "Q_MAX_MVAR": 16,
          "Q_MIN_MVAR": -10,
          "P_MAX_MW": 50,
          "costo_marginal_dolar_per_MW": 0.002
        },
        {
          "nodo": 22,
          "PG_MW": 50,
          "QG_MW": 0,
          "Q_MAX_MVAR": 16,
          "Q_MIN_MVAR": -10,
          "P_MAX_MW": 50,
          "costo_marginal_dolar_per_MW": 0.002
        },
        {
          "nodo": 22,
          "PG_MW": 50,
          "QG_MW": 0,
          "Q_MAX_MVAR": 16,
          "Q_MIN_MVAR": -10,
          "P_MAX_MW": 50,
          "costo_marginal_dolar_per_MW": 0.002
        },
        {
          "nodo": 22,
          "PG_MW": 50,
          "QG_MW": 0,
          "Q_MAX_MVAR": 16,
          "Q_MIN_MVAR": -10,
          "P_MAX_MW": 50,
          "costo_marginal_dolar_per_MW": 0.002
        },
        {
          "nodo": 23,
          "PG_MW": 155,
          "QG_MW": 0,
          "Q_MAX_MVAR": 80,
          "Q_MIN_MVAR": -50,
          "P_MAX_MW": 155,
          "costo_marginal_dolar_per_MW": 394.635742
        },
        {
          "nodo": 23,
          "PG_MW": 155,
          "QG_MW": 0,
          "Q_MAX_MVAR": 80,
          "Q_MIN_MVAR": -50,
          "P_MAX_MW": 155,
          "costo_marginal_dolar_per_MW": 394.635742
        },
        {
          "nodo": 23,
          "PG_MW": 350,
          "QG_MW": 0,
          "Q_MAX_MVAR": 150,
          "Q_MIN_MVAR": -25,
          "P_MAX_MW": 350,
          "costo_marginal_dolar_per_MW": 676.963795
        }
      ]
    };

    let lineas = {
      "lines": [
        {
          "I": 1,
          "J": 2,
          "flujo_P_I_a_J_MW": 10.09460084,
          "flujo_Q_I_a_J_MW": -27.00351897,
          "flujo_P_J_a_I_MW": -10.09211481,
          "flujo_Q_J_a_I_MW": -23.54930754
        },
        {
          "I": 1,
          "J": 3,
          "flujo_P_I_a_J_MW": -0.645296829,
          "flujo_Q_I_a_J_MW": 13.63607932,
          "flujo_P_J_a_I_MW": 0.785565005,
          "flujo_Q_J_a_I_MW": -19.16930716
        },
        {
          "I": 1,
          "J": 5,
          "flujo_P_I_a_J_MW": 66.55068575,
          "flujo_Q_I_a_J_MW": -2.069074554,
          "flujo_P_J_a_I_MW": -65.67013769,
          "flujo_Q_J_a_I_MW": 2.998976197
        },
        {
          "I": 2,
          "J": 4,
          "flujo_P_I_a_J_MW": 44.11696416,
          "flujo_Q_I_a_J_MW": 13.24276746,
          "flujo_P_J_a_I_MW": -43.4664112,
          "flujo_Q_J_a_I_MW": -14.38167935
        },
        {
          "I": 2,
          "J": 6,
          "flujo_P_I_a_J_MW": 52.9751395,
          "flujo_Q_I_a_J_MW": -5.922897726,
          "flujo_P_J_a_I_MW": -51.69898664,
          "flujo_Q_J_a_I_MW": 5.230469668
        },
        {
          "I": 3,
          "J": 9,
          "flujo_P_I_a_J_MW": 21.25409119,
          "flujo_Q_I_a_J_MW": -15.44997481,
          "flujo_P_J_a_I_MW": -21.06167891,
          "flujo_Q_J_a_I_MW": 12.85075043
        },
        {
          "I": 3,
          "J": 24,
          "flujo_P_I_a_J_MW": -202.0396525,
          "flujo_Q_I_a_J_MW": -2.380718296,
          "flujo_P_J_a_I_MW": 203.0089367,
          "flujo_Q_J_a_I_MW": 37.73851769
        },
        {
          "I": 4,
          "J": 9,
          "flujo_P_I_a_J_MW": -30.53358398,
          "flujo_Q_I_a_J_MW": -0.618321339,
          "flujo_P_J_a_I_MW": 30.7756964,
          "flujo_Q_J_a_I_MW": -1.368905946
        },
        {
          "I": 5,
          "J": 10,
          "flujo_P_I_a_J_MW": -5.329856175,
          "flujo_Q_I_a_J_MW": -16.99897709,
          "flujo_P_J_a_I_MW": 5.38843687,
          "flujo_Q_J_a_I_MW": 14.62720438
        },
        {
          "I": 6,
          "J": 10,
          "flujo_P_I_a_J_MW": -84.30100944,
          "flujo_Q_I_a_J_MW": -139.8161147,
          "flujo_P_J_a_I_MW": 85.23782826,
          "flujo_Q_J_a_I_MW": -122.705766
        },
        {
          "I": 7,
          "J": 8,
          "flujo_P_I_a_J_MW": 86.02866398,
          "flujo_Q_I_a_J_MW": 24.31958579,
          "flujo_P_J_a_I_MW": -84.83814772,
          "flujo_Q_J_a_I_MW": -21.45805303
        },
        {
          "I": 8,
          "J": 9,
          "flujo_P_I_a_J_MW": -50.1132181,
          "flujo_Q_I_a_J_MW": 3.678497664,
          "flujo_P_J_a_I_MW": 51.1814498,
          "flujo_Q_J_a_I_MW": -4.166667832
        },
        {
          "I": 8,
          "J": 10,
          "flujo_P_I_a_J_MW": -36.04863174,
          "flujo_Q_I_a_J_MW": -17.22044494,
          "flujo_P_J_a_I_MW": 36.68738678,
          "flujo_Q_J_a_I_MW": 14.95084749
        },
        {
          "I": 9,
          "J": 11,
          "flujo_P_I_a_J_MW": -110.6326672,
          "flujo_Q_I_a_J_MW": -25.77056581,
          "flujo_P_J_a_I_MW": 110.9329832,
          "flujo_Q_J_a_I_MW": 36.72556893
        },
        {
          "I": 9,
          "J": 12,
          "flujo_P_I_a_J_MW": -125.2627981,
          "flujo_Q_I_a_J_MW": -17.54461102,
          "flujo_P_J_a_I_MW": 125.6351429,
          "flujo_Q_J_a_I_MW": 31.12710221
        },
        {
          "I": 10,
          "J": 11,
          "flujo_P_I_a_J_MW": -153.7241871,
          "flujo_Q_I_a_J_MW": 22.06117421,
          "flujo_P_J_a_I_MW": 154.2476522,
          "flujo_Q_J_a_I_MW": -2.966078033
        },
        {
          "I": 10,
          "J": 12,
          "flujo_P_I_a_J_MW": -168.5894616,
          "flujo_Q_I_a_J_MW": 31.06653948,
          "flujo_P_J_a_I_MW": 169.2273032,
          "flujo_Q_J_a_I_MW": -7.799187424
        },
        {
          "I": 11,
          "J": 13,
          "flujo_P_I_a_J_MW": -102.2385082,
          "flujo_Q_I_a_J_MW": -13.13068156,
          "flujo_P_J_a_I_MW": 102.8518619,
          "flujo_Q_J_a_I_MW": 7.35810057
        },
        {
          "I": 11,
          "J": 14,
          "flujo_P_I_a_J_MW": -162.942123,
          "flujo_Q_I_a_J_MW": -20.6288098,
          "flujo_P_J_a_I_MW": 164.3263493,
          "flujo_Q_J_a_I_MW": 21.99513201
        },
        {
          "I": 12,
          "J": 13,
          "flujo_P_I_a_J_MW": -75.35582754,
          "flujo_Q_I_a_J_MW": -28.96856604,
          "flujo_P_J_a_I_MW": 75.72393883,
          "flujo_Q_J_a_I_MW": 21.33685591
        },
        {
          "I": 12,
          "J": 23,
          "flujo_P_I_a_J_MW": -219.506616,
          "flujo_Q_I_a_J_MW": 5.640651062,
          "flujo_P_J_a_I_MW": 225.3113525,
          "flujo_Q_J_a_I_MW": 17.88602189
        },
        {
          "I": 13,
          "J": 23,
          "flujo_P_I_a_J_MW": -207.8389564,
          "flujo_Q_I_a_J_MW": 15.10502688,
          "flujo_P_J_a_I_MW": 212.3921461,
          "flujo_Q_J_a_I_MW": 0.646376142
        },
        {
          "I": 14,
          "J": 16,
          "flujo_P_I_a_J_MW": -358.3263494,
          "flujo_Q_I_a_J_MW": 53.92495408,
          "flujo_P_J_a_I_MW": 364.4208069,
          "flujo_Q_J_a_I_MW": -15.39291784
        },
        {
          "I": 15,
          "J": 16,
          "flujo_P_I_a_J_MW": 82.02953419,
          "flujo_Q_I_a_J_MW": -31.1808082,
          "flujo_P_J_a_I_MW": -81.87562911,
          "flujo_Q_J_a_I_MW": 28.43379551
        },
        {
          "I": 15,
          "J": 21,
          "flujo_P_I_a_J_MW": -218.9182012,
          "flujo_Q_I_a_J_MW": 14.59649602,
          "flujo_P_J_a_I_MW": 221.7276857,
          "flujo_Q_J_a_I_MW": -4.004425595
        },
        {
          "I": 15,
          "J": 21,
          "flujo_P_I_a_J_MW": -218.9182012,
          "flujo_Q_I_a_J_MW": 14.59649602,
          "flujo_P_J_a_I_MW": 221.7276857,
          "flujo_Q_J_a_I_MW": -4.004425595
        },
        {
          "I": 15,
          "J": 24,
          "flujo_P_I_a_J_MW": 205.8069346,
          "flujo_Q_I_a_J_MW": 47.98145136,
          "flujo_P_J_a_I_MW": -203.0089364,
          "flujo_Q_J_a_I_MW": -37.7385176
        },
        {
          "I": 16,
          "J": 17,
          "flujo_P_I_a_J_MW": -315.3168669,
          "flujo_Q_I_a_J_MW": 36.11513289,
          "flujo_P_J_a_I_MW": 318.3717814,
          "flujo_Q_J_a_I_MW": -18.10072757
        },
        {
          "I": 16,
          "J": 19,
          "flujo_P_I_a_J_MW": 87.77168444,
          "flujo_Q_I_a_J_MW": 10.84242138,
          "flujo_P_J_a_I_MW": -87.55474768,
          "flujo_Q_J_a_I_MW": -14.43408078
        },
        {
          "I": 17,
          "J": 18,
          "flujo_P_I_a_J_MW": -179.8195514,
          "flujo_Q_I_a_J_MW": 5.234344179,
          "flujo_P_J_a_I_MW": 180.3507092,
          "flujo_Q_J_a_I_MW": -4.317914889
        },
        {
          "I": 17,
          "J": 22,
          "flujo_P_I_a_J_MW": -138.5522299,
          "flujo_Q_I_a_J_MW": 12.86638339,
          "flujo_P_J_a_I_MW": 140.990702,
          "flujo_Q_J_a_I_MW": -18.17708536
        },
        {
          "I": 18,
          "J": 21,
          "flujo_P_I_a_J_MW": -56.67535633,
          "flujo_Q_I_a_J_MW": 4.606119464,
          "flujo_P_J_a_I_MW": 56.7732344,
          "flujo_Q_J_a_I_MW": -9.846546894
        },
        {
          "I": 18,
          "J": 21,
          "flujo_P_I_a_J_MW": -56.67535633,
          "flujo_Q_I_a_J_MW": 4.606119464,
          "flujo_P_J_a_I_MW": 56.7732344,
          "flujo_Q_J_a_I_MW": -9.846546894
        },
        {
          "I": 19,
          "J": 20,
          "flujo_P_I_a_J_MW": -46.72262616,
          "flujo_Q_I_a_J_MW": -11.28295961,
          "flujo_P_J_a_I_MW": 46.82794525,
          "flujo_Q_J_a_I_MW": 3.065628958
        },
        {
          "I": 19,
          "J": 20,
          "flujo_P_I_a_J_MW": -46.72262616,
          "flujo_Q_I_a_J_MW": -11.28295961,
          "flujo_P_J_a_I_MW": 46.82794525,
          "flujo_Q_J_a_I_MW": 3.065628958
        },
        {
          "I": 20,
          "J": 23,
          "flujo_P_I_a_J_MW": -110.8279453,
          "flujo_Q_I_a_J_MW": -16.06562896,
          "flujo_P_J_a_I_MW": 111.1482441,
          "flujo_Q_J_a_I_MW": 13.54883871
        },
        {
          "I": 20,
          "J": 23,
          "flujo_P_I_a_J_MW": -110.8279453,
          "flujo_Q_I_a_J_MW": -16.06562896,
          "flujo_P_J_a_I_MW": 111.1482441,
          "flujo_Q_J_a_I_MW": 13.54883871
        },
        {
          "I": 21,
          "J": 22,
          "flujo_P_I_a_J_MW": -157.0018438,
          "flujo_Q_I_a_J_MW": 20.24746718,
          "flujo_P_J_a_I_MW": 159.0092784,
          "flujo_Q_J_a_I_MW": -20.30291641
        }
      ]
    };
    
    let nodos = {
      "nodes": [
        {"nodo": 1, "tipo_de_nodo": 2, "P_MW": 108, "Q_MVAR": 22, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 2, "tipo_de_nodo": 2, "P_MW": 97, "Q_MVAR": 20, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 3, "tipo_de_nodo": 1, "P_MW": 180, "Q_MVAR": 37, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 4, "tipo_de_nodo": 1, "P_MW": 74, "Q_MVAR": 15, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 5, "tipo_de_nodo": 1, "P_MW": 71, "Q_MVAR": 14, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 6, "tipo_de_nodo": 1, "P_MW": 136, "Q_MVAR": 28, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 7, "tipo_de_nodo": 2, "P_MW": 125, "Q_MVAR": 25, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 8, "tipo_de_nodo": 1, "P_MW": 171, "Q_MVAR": 35, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 9, "tipo_de_nodo": 1, "P_MW": 175, "Q_MVAR": 36, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 10, "tipo_de_nodo": 1, "P_MW": 195, "Q_MVAR": 40, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 11, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 12, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 13, "tipo_de_nodo": 3, "P_MW": 265, "Q_MVAR": 54, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 14, "tipo_de_nodo": 2, "P_MW": 194, "Q_MVAR": 39, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 15, "tipo_de_nodo": 2, "P_MW": 317, "Q_MVAR": 64, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 16, "tipo_de_nodo": 2, "P_MW": 100, "Q_MVAR": 20, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 17, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 18, "tipo_de_nodo": 2, "P_MW": 333, "Q_MVAR": 68, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 19, "tipo_de_nodo": 1, "P_MW": 181, "Q_MVAR": 37, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 20, "tipo_de_nodo": 1, "P_MW": 128, "Q_MVAR": 26, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 21, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 22, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 23, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.05, "V_min": 0.95},
        {"nodo": 24, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.05, "V_min": 0.95}
      ]
    }

    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 1092.699954,
        "potencia_atendida_MW": 1757.300046,
        "potencia_generada_adicional_MW": 1757.300046 - 1092.699954, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 288094.4322,
        "costo_deslastre_dolar_per_MWH": 211470.5201,
        "U1": 0.616596507,
        "U2": 0.265968042,
        "U": 0.441282275,
        "resiliencia": "DEFICIENTE"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 656.2362377,
        "potencia_atendida_MW": 2193.763762,
        "potencia_generada_adicional_MW": 2193.763762 - 656.2362377, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 200437.8074,
        "costo_deslastre_dolar_per_MWH": 102923.6254,
        "U1": 0.769741671,
        "U2": 0.48650593,
        "U": 0.628123801,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 957.7459589,
        "potencia_atendida_MW": 1892.254041,
        "potencia_generada_adicional_MW": 1892.254041 - 957.7459589, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 257733.2331,
        "costo_deslastre_dolar_per_MWH": 170984.3215,
        "U1": 0.663948786,
        "U2": 0.336584113,
        "U": 0.50026645,
        "resiliencia": "BUENA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 521.2362009,
        "potencia_atendida_MW": 2328.763799,
        "potencia_generada_adicional_MW": 2328.763799 - 521.2362009, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 179062.8052,
        "costo_deslastre_dolar_per_MWH": 71423.62071,
        "U1": 0.817110105,
        "U2": 0.601125311,
        "U": 0.709117708,
        "resiliencia": "BUENA"
      }
    ];
    
    let escenario1ConSinRdNiGd = [
      {
        "nodo": 1,
        "carga_MW": 108,
        "potencia_deslastrada_MW": 2.70242E-06,
        "costo_dolar_por_MW": 0.000270242,
        "potencia_atendida_MW": 107.9999973,
        "_atendido": (107.9999973 / 108) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 2,
        "carga_MW": 97,
        "potencia_deslastrada_MW": 1.21521E-07,
        "costo_dolar_por_MW": 3.64563E-05,
        "potencia_atendida_MW": 96.99999988,
        "_atendido": (96.99999988 / 97) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 180,
        "potencia_deslastrada_MW": 54.69730718,
        "costo_dolar_por_MW": 5469.730718,
        "potencia_atendida_MW": 125.3026928,
        "_atendido": (125.3026928 / 180) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 74,
        "potencia_deslastrada_MW": 4.01875E-06,
        "costo_dolar_por_MW": 0.000401875,
        "potencia_atendida_MW": 73.99999598,
        "_atendido": (73.99999598 / 74) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 71,
        "potencia_deslastrada_MW": 3.5816E-06,
        "costo_dolar_por_MW": 0.00035816,
        "potencia_atendida_MW": 70.99999642,
        "_atendido": (70.99999642 / 71) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 136,
        "potencia_deslastrada_MW": 4.82604E-06,
        "costo_dolar_por_MW": 0.000482604,
        "potencia_atendida_MW": 135.9999952,
        "_atendido": (135.9999952 / 136) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 125,
        "potencia_deslastrada_MW": 5.53969E-07,
        "costo_dolar_por_MW": 5.53969E-05,
        "potencia_atendida_MW": 124.9999994,
        "_atendido": (124.9999994 / 125) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 171,
        "potencia_deslastrada_MW": 3.36743E-06,
        "costo_dolar_por_MW": 0.000336743,
        "potencia_atendida_MW": 170.9999966,
        "_atendido": (170.9999966 / 171) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 175,
        "potencia_deslastrada_MW": 1.22747E-07,
        "costo_dolar_por_MW": 3.68242E-05,
        "potencia_atendida_MW": 174.9999999,
        "_atendido": (174.9999999 / 175) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 195,
        "potencia_deslastrada_MW": 3.41946E-06,
        "costo_dolar_por_MW": 0.000341946,
        "potencia_atendida_MW": 194.9999966,
        "_atendido": (194.9999966 / 195) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 265,
        "potencia_deslastrada_MW": 2.47213E-06,
        "costo_dolar_por_MW": 0.000247213,
        "potencia_atendida_MW": 264.9999975,
        "_atendido": (264.9999975 / 265) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 194,
        "potencia_deslastrada_MW": 193.9999994,
        "costo_dolar_por_MW": 19399.99994,
        "potencia_atendida_MW": 5.57577E-07,
        "_atendido": (5.57577E-07 / 194) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 317,
        "potencia_deslastrada_MW": 102.76988,
        "costo_dolar_por_MW": 30830.96401,
        "potencia_atendida_MW": 214.23012,
        "_atendido": (214.23012 / 317) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 100,
        "potencia_deslastrada_MW": 99.23274391,
        "costo_dolar_por_MW": 29769.82317,
        "potencia_atendida_MW": 0.767256087,
        "_atendido": (0.767256087 / 100) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 333,
        "potencia_deslastrada_MW": 332.9999994,
        "costo_dolar_por_MW": 33299.99994,
        "potencia_atendida_MW": 5.57517E-07,
        "_atendido": (5.57517E-07 / 333) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 19,
        "carga_MW": 181,
        "potencia_deslastrada_MW": 181.0000001,
        "costo_dolar_por_MW": 54300.00002,
        "potencia_atendida_MW": -5.96425E-08,
        "_atendido": (-5.96425E-08 / 181) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 20,
        "carga_MW": 128,
        "potencia_deslastrada_MW": 127.9999989,
        "costo_dolar_por_MW": 38399.99968,
        "potencia_atendida_MW": 1.06277E-06,
        "_atendido": (1.06277E-06 / 128) * 100 // Calculando el porcentaje atendido
      }
    ];
  
    let escenario2ConRdSinGd = [
      {
        "nodo": 1,
        "carga_MW": 108,
        "potencia_deslastrada_MW": 1.06616E-06,
        "costo_dolar_por_MW": 0.000106616,
        "potencia_atendida_MW": 107.9999989,
        "_atendido": (107.9999989 / 108) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 2,
        "carga_MW": 97,
        "potencia_deslastrada_MW": 2.13207E-07,
        "costo_dolar_por_MW": 6.39621E-05,
        "potencia_atendida_MW": 96.99999979,
        "_atendido": (96.99999979 / 97) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 180,
        "potencia_deslastrada_MW": 1.16211E-06,
        "costo_dolar_por_MW": 0.000116211,
        "potencia_atendida_MW": 179.9999988,
        "_atendido": (179.9999988 / 180) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 74,
        "potencia_deslastrada_MW": 1.09354E-06,
        "costo_dolar_por_MW": 0.000109354,
        "potencia_atendida_MW": 73.99999891,
        "_atendido": (73.99999891 / 74) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 71,
        "potencia_deslastrada_MW": 1.09865E-06,
        "costo_dolar_por_MW": 0.000109865,
        "potencia_atendida_MW": 70.9999989,
        "_atendido": (70.9999989 / 71) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 136,
        "potencia_deslastrada_MW": 1.12503E-06,
        "costo_dolar_por_MW": 0.000112503,
        "potencia_atendida_MW": 135.9999989,
        "_atendido": (135.9999989 / 136) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 125,
        "potencia_deslastrada_MW": 1.06554E-06,
        "costo_dolar_por_MW": 0.000106554,
        "potencia_atendida_MW": 124.9999989,
        "_atendido": (124.9999989 / 125) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 171,
        "potencia_deslastrada_MW": 1.10363E-06,
        "costo_dolar_por_MW": 0.000110363,
        "potencia_atendida_MW": 170.9999989,
        "_atendido": (170.9999989 / 171) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 175,
        "potencia_deslastrada_MW": 2.14335E-07,
        "costo_dolar_por_MW": 6.43005E-05,
        "potencia_atendida_MW": 174.9999998,
        "_atendido": (174.9999998 / 175) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 195,
        "potencia_deslastrada_MW": 1.09909E-06,
        "costo_dolar_por_MW": 0.000109909,
        "potencia_atendida_MW": 194.9999989,
        "_atendido": (194.9999989 / 195) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 265,
        "potencia_deslastrada_MW": 1.07527E-06,
        "costo_dolar_por_MW": 0.000107527,
        "potencia_atendida_MW": 264.9999989,
        "_atendido": (264.9999989 / 265) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 194,
        "potencia_deslastrada_MW": 140.0471838,
        "costo_dolar_por_MW": 14004.71838,
        "potencia_atendida_MW": 53.95281619,
        "_atendido": (53.95281619 / 194) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 317,
        "potencia_deslastrada_MW": 1.23524E-06,
        "costo_dolar_por_MW": 0.000370573,
        "potencia_atendida_MW": 316.9999988,
        "_atendido": (316.9999988 / 317) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 100,
        "potencia_deslastrada_MW": 1.23568E-06,
        "costo_dolar_por_MW": 0.000370703,
        "potencia_atendida_MW": 99.99999876,
        "_atendido": (99.99999876 / 100) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 333,
        "potencia_deslastrada_MW": 329.6890357,
        "costo_dolar_por_MW": 32968.90357,
        "potencia_atendida_MW": 3.310964261,
        "_atendido": (3.310964261 / 333) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 19,
        "carga_MW": 181,
        "potencia_deslastrada_MW": 90.50092276,
        "costo_dolar_por_MW": 27150.27683,
        "potencia_atendida_MW": 90.49907724,
        "_atendido": (90.49907724 / 181) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 20,
        "carga_MW": 128,
        "potencia_deslastrada_MW": 95.99908257,
        "costo_dolar_por_MW": 28799.72477,
        "potencia_atendida_MW": 32.00091743,
        "_atendido": (32.00091743 / 128) * 100 // Calculando el porcentaje atendido
      }
    ];
  
    let escenario3ConGdSinRd = [
      {
        "nodo": 1,
        "carga_MW": 108,
        "potencia_deslastrada_MW": 2.70242E-06,
        "costo_dolar_por_MW": 0.000270242,
        "potencia_atendida_MW": 107.9999973,
        "_atendido": (107.9999973 / 108) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 2,
        "carga_MW": 97,
        "potencia_deslastrada_MW": 1.21521E-07,
        "costo_dolar_por_MW": 3.64563E-05,
        "potencia_atendida_MW": 96.99999988,
        "_atendido": (96.99999988 / 97) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 180,
        "potencia_deslastrada_MW": 54.69730718,
        "costo_dolar_por_MW": 5469.730718,
        "potencia_atendida_MW": 125.3026928,
        "_atendido": (125.3026928 / 180) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 74,
        "potencia_deslastrada_MW": 4.01875E-06,
        "costo_dolar_por_MW": 0.000401875,
        "potencia_atendida_MW": 73.99999598,
        "_atendido": (73.99999598 / 74) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 71,
        "potencia_deslastrada_MW": 3.5816E-06,
        "costo_dolar_por_MW": 0.00035816,
        "potencia_atendida_MW": 70.99999642,
        "_atendido": (70.99999642 / 71) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 136,
        "potencia_deslastrada_MW": 4.82604E-06,
        "costo_dolar_por_MW": 0.000482604,
        "potencia_atendida_MW": 135.9999952,
        "_atendido": (135.9999952 / 136) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 125,
        "potencia_deslastrada_MW": 5.53969E-07,
        "costo_dolar_por_MW": 5.53969E-05,
        "potencia_atendida_MW": 124.9999994,
        "_atendido": (124.9999994 / 125) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 171,
        "potencia_deslastrada_MW": 3.36743E-06,
        "costo_dolar_por_MW": 0.000336743,
        "potencia_atendida_MW": 170.9999966,
        "_atendido": (170.9999966 / 171) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 175,
        "potencia_deslastrada_MW": 1.22747E-07,
        "costo_dolar_por_MW": 3.68242E-05,
        "potencia_atendida_MW": 174.9999999,
        "_atendido": (174.9999999 / 175) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 195,
        "potencia_deslastrada_MW": 3.41946E-06,
        "costo_dolar_por_MW": 0.000341946,
        "potencia_atendida_MW": 194.9999966,
        "_atendido": (194.9999966 / 195) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 265,
        "potencia_deslastrada_MW": 2.47213E-06,
        "costo_dolar_por_MW": 0.000247213,
        "potencia_atendida_MW": 264.9999975,
        "_atendido": (264.9999975 / 265) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 194,
        "potencia_deslastrada_MW": 193.9999994,
        "costo_dolar_por_MW": 19399.99994,
        "potencia_atendida_MW": 6.46382E-07,
        "_atendido": (6.46382E-07 / 194) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 317,
        "potencia_deslastrada_MW": 78.81560983,
        "costo_dolar_por_MW": 23644.68295,
        "potencia_atendida_MW": 238.1843902,
        "_atendido": (238.1843902 / 317) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 100,
        "potencia_deslastrada_MW": 78.23301384,
        "costo_dolar_por_MW": 23469.90415,
        "potencia_atendida_MW": 21.76698616,
        "_atendido": (21.76698616 / 100) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 333,
        "potencia_deslastrada_MW": 332.9999994,
        "costo_dolar_por_MW": 33299.99994,
        "potencia_atendida_MW": 6.48415E-07,
        "_atendido": (6.48415E-07 / 333) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 19,
        "carga_MW": 181,
        "potencia_deslastrada_MW": 135.9999541,
        "costo_dolar_por_MW": 40799.98623,
        "potencia_atendida_MW": 45.00004591,
        "_atendido": (45.00004591 / 181) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 20,
        "carga_MW": 128,
        "potencia_deslastrada_MW": 83.00005008,
        "costo_dolar_por_MW": 24900.01502,
        "potencia_atendida_MW": 44.99994992,
        "_atendido": (44.99994992 / 128) * 100 // Calculando el porcentaje atendido
      }
    ];
  
    let escenario4ConGdYRd = [
      {
        "nodo": 1,
        "carga_MW": 108,
        "potencia_deslastrada_MW": 1.06616E-06,
        "costo_dolar_por_MW": 0.000106616,
        "potencia_atendida_MW": 107.9999989,
        "_atendido": (107.9999989 / 108) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 2,
        "carga_MW": 97,
        "potencia_deslastrada_MW": 2.13207E-07,
        "costo_dolar_por_MW": 6.39621E-05,
        "potencia_atendida_MW": 96.99999979,
        "_atendido": (96.99999979 / 97) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 180,
        "potencia_deslastrada_MW": 1.16211E-06,
        "costo_dolar_por_MW": 0.000116211,
        "potencia_atendida_MW": 179.9999988,
        "_atendido": (179.9999988 / 180) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 74,
        "potencia_deslastrada_MW": 1.09354E-06,
        "costo_dolar_por_MW": 0.000109354,
        "potencia_atendida_MW": 73.99999891,
        "_atendido": (73.99999891 / 74) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 71,
        "potencia_deslastrada_MW": 1.09865E-06,
        "costo_dolar_por_MW": 0.000109865,
        "potencia_atendida_MW": 70.9999989,
        "_atendido": (70.9999989 / 71) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 136,
        "potencia_deslastrada_MW": 1.12503E-06,
        "costo_dolar_por_MW": 0.000112503,
        "potencia_atendida_MW": 135.9999989,
        "_atendido": (135.9999989 / 136) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 125,
        "potencia_deslastrada_MW": 1.06554E-06,
        "costo_dolar_por_MW": 0.000106554,
        "potencia_atendida_MW": 124.9999989,
        "_atendido": (124.9999989 / 125) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 171,
        "potencia_deslastrada_MW": 1.10363E-06,
        "costo_dolar_por_MW": 0.000110363,
        "potencia_atendida_MW": 170.9999989,
        "_atendido": (170.9999989 / 171) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 175,
        "potencia_deslastrada_MW": 2.14335E-07,
        "costo_dolar_por_MW": 6.43005E-05,
        "potencia_atendida_MW": 174.9999998,
        "_atendido": (174.9999998 / 175) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 195,
        "potencia_deslastrada_MW": 1.09909E-06,
        "costo_dolar_por_MW": 0.000109909,
        "potencia_atendida_MW": 194.9999989,
        "_atendido": (194.9999989 / 195) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 265,
        "potencia_deslastrada_MW": 1.07527E-06,
        "costo_dolar_por_MW": 0.000107527,
        "potencia_atendida_MW": 264.9999989,
        "_atendido": (264.9999989 / 265) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 194,
        "potencia_deslastrada_MW": 140.011746,
        "costo_dolar_por_MW": 14001.1746,
        "potencia_atendida_MW": 53.98825398,
        "_atendido": (53.98825398 / 194) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 317,
        "potencia_deslastrada_MW": 1.47522E-07,
        "costo_dolar_por_MW": 4.42566E-05,
        "potencia_atendida_MW": 316.9999999,
        "_atendido": (316.9999999 / 317) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 100,
        "potencia_deslastrada_MW": 1.47567E-07,
        "costo_dolar_por_MW": 4.42702E-05,
        "potencia_atendida_MW": 99.99999985,
        "_atendido": (99.99999985 / 100) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 333,
        "potencia_deslastrada_MW": 284.7244419,
        "costo_dolar_por_MW": 28472.44419,
        "potencia_atendida_MW": 48.27555806,
        "_atendido": (48.27555806 / 333) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 19,
        "carga_MW": 181,
        "potencia_deslastrada_MW": 45.50003677,
        "costo_dolar_por_MW": 13650.01103,
        "potencia_atendida_MW": 135.4999632,
        "_atendido": (135.4999632 / 181) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 20,
        "carga_MW": 128,
        "potencia_deslastrada_MW": 50.99996559,
        "costo_dolar_por_MW": 15299.98968,
        "potencia_atendida_MW": 77.00003441,
        "_atendido": (77.00003441 / 128) * 100 // Calculando el porcentaje atendido
      }
    ];

    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="12"){
   
    let generadores = {
      "generators": [
        {
          "nodo": 1,
          "PG_MW": 0,
          "QG_MW": 0,
          "Q_MAX_MVAR": 10,
          "Q_MIN_MVAR": -10,
          "P_MAX_MW": 10,
          "costo_marginal_dolar_per_MW": 20
        }
      ]
    };

    let lineas = {
      "lines": [
        {
          "I": 1,
          "J": 2,
          "flujo_P_I_a_J_MW": 0.455713774,
          "flujo_Q_I_a_J_MW": 0.413041134,
          "flujo_P_J_a_I_MW": -0.452296767,
          "flujo_Q_J_a_I_MW": -0.411618683
        },
        {
          "I": 2,
          "J": 3,
          "flujo_P_I_a_J_MW": 0.392296767,
          "flujo_Q_I_a_J_MW": 0.351618683,
          "flujo_P_J_a_I_MW": -0.389550031,
          "flujo_Q_J_a_I_MW": -0.350472664
        },
        {
          "I": 3,
          "J": 4,
          "flujo_P_I_a_J_MW": 0.349550031,
          "flujo_Q_I_a_J_MW": 0.320472664,
          "flujo_P_J_a_I_MW": -0.345569454,
          "flujo_Q_J_a_I_MW": -0.318813931
        },
        {
          "I": 4,
          "J": 5,
          "flujo_P_I_a_J_MW": 0.290569454,
          "flujo_Q_I_a_J_MW": 0.263813931,
          "flujo_P_J_a_I_MW": -0.286348896,
          "flujo_Q_J_a_I_MW": -0.262054483
        },
        {
          "I": 5,
          "J": 6,
          "flujo_P_I_a_J_MW": 0.256348896,
          "flujo_Q_I_a_J_MW": 0.232054483,
          "flujo_P_J_a_I_MW": -0.255200609,
          "flujo_Q_J_a_I_MW": -0.231576468
        },
        {
          "I": 6,
          "J": 7,
          "flujo_P_I_a_J_MW": 0.235200609,
          "flujo_Q_I_a_J_MW": 0.216576468,
          "flujo_P_J_a_I_MW": -0.234294455,
          "flujo_Q_J_a_I_MW": -0.216199356
        },
        {
          "I": 7,
          "J": 8,
          "flujo_P_I_a_J_MW": 0.179294455,
          "flujo_Q_I_a_J_MW": 0.161199356,
          "flujo_P_J_a_I_MW": -0.177017007,
          "flujo_Q_J_a_I_MW": -0.160570898
        },
        {
          "I": 8,
          "J": 9,
          "flujo_P_I_a_J_MW": 0.132017007,
          "flujo_Q_I_a_J_MW": 0.115570898,
          "flujo_P_J_a_I_MW": -0.130444109,
          "flujo_Q_J_a_I_MW": -0.115125681
        },
        {
          "I": 9,
          "J": 10,
          "flujo_P_I_a_J_MW": 0.090444109,
          "flujo_Q_I_a_J_MW": 0.075125681,
          "flujo_P_J_a_I_MW": -0.090076156,
          "flujo_Q_J_a_I_MW": -0.075021533
        },
        {
          "I": 10,
          "J": 11,
          "flujo_P_I_a_J_MW": 0.055076156,
          "flujo_Q_I_a_J_MW": 0.045021533,
          "flujo_P_J_a_I_MW": -0.055005174,
          "flujo_Q_J_a_I_MW": -0.045001467
        },
        {
          "I": 11,
          "J": 12,
          "flujo_P_I_a_J_MW": 0.015005174,
          "flujo_Q_I_a_J_MW": 0.015001467,
          "flujo_P_J_a_I_MW": -0.015,
          "flujo_Q_J_a_I_MW": -0.015
        }
      ]
    };
    
    
    let nodos = {
      "nodes": [
        {"nodo": 1, "tipo_de_nodo": 3, "P_MW": 0, "Q_MVAR": 0, "V_max": 1, "V_min": 1},
        {"nodo": 2, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.06, "V_max": 1.1, "V_min": 0.9},
        {"nodo": 3, "tipo_de_nodo": 1, "P_MW": 0.04, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9},
        {"nodo": 4, "tipo_de_nodo": 1, "P_MW": 0.055, "Q_MVAR": 0.055, "V_max": 1.1, "V_min": 0.9},
        {"nodo": 5, "tipo_de_nodo": 1, "P_MW": 0.03, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9},
        {"nodo": 6, "tipo_de_nodo": 1, "P_MW": 0.02, "Q_MVAR": 0.015, "V_max": 1.1, "V_min": 0.9},
        {"nodo": 7, "tipo_de_nodo": 1, "P_MW": 0.055, "Q_MVAR": 0.055, "V_max": 1.1, "V_min": 0.9},
        {"nodo": 8, "tipo_de_nodo": 1, "P_MW": 0.045, "Q_MVAR": 0.045, "V_max": 1.1, "V_min": 0.9},
        {"nodo": 9, "tipo_de_nodo": 1, "P_MW": 0.04, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9},
        {"nodo": 10, "tipo_de_nodo": 1, "P_MW": 0.035, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9},
        {"nodo": 11, "tipo_de_nodo": 1, "P_MW": 0.04, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9},
        {"nodo": 12, "tipo_de_nodo": 1, "P_MW": 0.015, "Q_MVAR": 0.015, "V_max": 1.1, "V_min": 0.9}
      ]
    };

    let escenarios = [
      {
        "escenario": "ESCENARIO 1",
        "potencia_deslastrada_MW": 0.435,
        "potencia_atendida_MW": 1.86364E-11,
        "potencia_generada_adicional_MW": 1.86364E-11 - 0.435, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 86.50000004,
        "costo_deslastre_dolar_per_MWH": 86.50000004,
        "U1": 4.28424E-11,
        "U2": 0,
        "U": 2.14212E-11,
        "resiliencia": "DEFICIENTE"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 0.326258746,
        "potencia_atendida_MW": 0.108741254,
        "potencia_generada_adicional_MW": 0.108741254 - 0.326258746, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 62.43937405,
        "costo_deslastre_dolar_per_MWH": 57.00212038,
        "U1": 0.249979894,
        "U2": 0.087080528,
        "U": 0.168530211,
        "resiliencia": "DEFICIENTE"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 0.245021267,
        "potencia_atendida_MW": 0.189978733,
        "potencia_generada_adicional_MW": 0.189978733 - 0.245021267, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 61.25201236,
        "costo_deslastre_dolar_per_MWH": 47.00246202,
        "U1": 0.436732721,
        "U2": 0.232638077,
        "U": 0.334685399,
        "resiliencia": "POBRE"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 0.191251786,
        "potencia_atendida_MW": 0.243748214,
        "potencia_generada_adicional_MW": 0.243748214 - 0.191251786, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 49.56293323,
        "costo_deslastre_dolar_per_MWH": 34.00020818,
        "U1": 0.560340721,
        "U2": 0.313999274,
        "U": 0.437169997,
        "resiliencia": "POBRE"
      }
    ];
    
  
    let escenario1ConSinRdNiGd = [
      {
        "nodo": 10,
        "carga_MW": 0.035,
        "potencia_deslastrada_MW": 0.035,
        "costo_dolar_por_MW": 3.499999953,
        "potencia_atendida_MW": 4.69242E-10,
        "_atendido": (4.69242E-10 / 0.035) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 0.04,
        "costo_dolar_por_MW": 8.00000009,
        "potencia_atendida_MW": -4.50606E-10,
        "_atendido": (-4.50606E-10 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 2,
        "carga_MW": 0.06,
        "potencia_deslastrada_MW": 0.06,
        "costo_dolar_por_MW": 6,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.06) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 0.04,
        "costo_dolar_por_MW": 8,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.055,
        "potencia_deslastrada_MW": 0.055,
        "costo_dolar_por_MW": 22,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.055) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.03,
        "potencia_deslastrada_MW": 0.03,
        "costo_dolar_por_MW": 6,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.03) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.02,
        "potencia_deslastrada_MW": 0.02,
        "costo_dolar_por_MW": 2,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.02) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.055,
        "potencia_deslastrada_MW": 0.055,
        "costo_dolar_por_MW": 16.5,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.055) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.045,
        "potencia_deslastrada_MW": 0.045,
        "costo_dolar_por_MW": 9,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.045) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 0.04,
        "costo_dolar_por_MW": 4,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.015,
        "potencia_deslastrada_MW": 0.015,
        "costo_dolar_por_MW": 1.5,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.015) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    let escenario2ConRdSinGd = [
      {
        "nodo": 10,
        "carga_MW": 0.035,
        "potencia_deslastrada_MW": 0.034996289,
        "costo_dolar_por_MW": 3.499628867,
        "potencia_atendida_MW": 3.71133E-06,
        "_atendido": (3.71133E-06 / 0.035) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 0.012512458,
        "costo_dolar_por_MW": 2.502491509,
        "potencia_atendida_MW": 0.027487542,
        "_atendido": (0.027487542 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 2,
        "carga_MW": 0.06,
        "potencia_deslastrada_MW": 0.06,
        "costo_dolar_por_MW": 6,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.06) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 0.03,
        "costo_dolar_por_MW": 6,
        "potencia_atendida_MW": 0.01,
        "_atendido": (0.01 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.055,
        "potencia_deslastrada_MW": 0.0275,
        "costo_dolar_por_MW": 11,
        "potencia_atendida_MW": 0.0275,
        "_atendido": (0.0275 / 0.055) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.03,
        "potencia_deslastrada_MW": 0.03,
        "costo_dolar_por_MW": 6,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.03) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.02,
        "potencia_deslastrada_MW": 0.015,
        "costo_dolar_por_MW": 1.5,
        "potencia_atendida_MW": 0.005,
        "_atendido": (0.005 / 0.02) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.055,
        "potencia_deslastrada_MW": 0.0275,
        "costo_dolar_por_MW": 8.25,
        "potencia_atendida_MW": 0.0275,
        "_atendido": (0.0275 / 0.055) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.045,
        "potencia_deslastrada_MW": 0.03375,
        "costo_dolar_por_MW": 6.75,
        "potencia_atendida_MW": 0.01125,
        "_atendido": (0.01125 / 0.045) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 0.04,
        "costo_dolar_por_MW": 4,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.015,
        "potencia_deslastrada_MW": 0.015,
        "costo_dolar_por_MW": 1.5,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.015) * 100 // Calculando el porcentaje atendido
      }
    ];
    


    let escenario3ConGdSinRd = [
      {
        "nodo": 10,
        "carga_MW": 0.035,
        "potencia_deslastrada_MW": 1.79129E-05,
        "costo_dolar_por_MW": 0.001791294,
        "potencia_atendida_MW": 0.034982087,
        "_atendido": (0.034982087 / 0.035) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 3.35361E-06,
        "costo_dolar_por_MW": 0.000670722,
        "potencia_atendida_MW": 0.039996646,
        "_atendido": (0.039996646 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 0.04,
        "costo_dolar_por_MW": 8,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.03,
        "potencia_deslastrada_MW": 0.03,
        "costo_dolar_por_MW": 6,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.03) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.02,
        "potencia_deslastrada_MW": 0.02,
        "costo_dolar_por_MW": 2,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.02) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.055,
        "potencia_deslastrada_MW": 0.055,
        "costo_dolar_por_MW": 16.5,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.055) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.045,
        "potencia_deslastrada_MW": 0.045,
        "costo_dolar_por_MW": 9,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.045) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 0.04,
        "costo_dolar_por_MW": 4,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.015,
        "potencia_deslastrada_MW": 0.015,
        "costo_dolar_por_MW": 1.5,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.015) * 100 // Calculando el porcentaje atendido
      }
    ];
    


    let escenario4ConGdYRd = [
      {
        "nodo": 10,
        "carga_MW": 0.035,
        "potencia_deslastrada_MW": 1.49076E-06,
        "costo_dolar_por_MW": 0.000149076,
        "potencia_atendida_MW": 0.034998509,
        "_atendido": (0.034998509 / 0.035) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 2.95542E-07,
        "costo_dolar_por_MW": 5.91083E-05,
        "potencia_atendida_MW": 0.039999704,
        "_atendido": (0.039999704 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 0.03,
        "costo_dolar_por_MW": 6,
        "potencia_atendida_MW": 0.01,
        "_atendido": (0.01 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.03,
        "potencia_deslastrada_MW": 0.03,
        "costo_dolar_por_MW": 6,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.03) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.02,
        "potencia_deslastrada_MW": 0.015,
        "costo_dolar_por_MW": 1.5,
        "potencia_atendida_MW": 0.005,
        "_atendido": (0.005 / 0.02) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.055,
        "potencia_deslastrada_MW": 0.0275,
        "costo_dolar_por_MW": 8.25,
        "potencia_atendida_MW": 0.0275,
        "_atendido": (0.0275 / 0.055) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.045,
        "potencia_deslastrada_MW": 0.03375,
        "costo_dolar_por_MW": 6.75,
        "potencia_atendida_MW": 0.01125,
        "_atendido": (0.01125 / 0.045) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 0.04,
        "potencia_deslastrada_MW": 0.04,
        "costo_dolar_por_MW": 4,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.04) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.015,
        "potencia_deslastrada_MW": 0.015,
        "costo_dolar_por_MW": 1.5,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.015) * 100 // Calculando el porcentaje atendido
      }
    ];
    

    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="6"){
   
    let generadores = {
      "generators": [
        {
          "nodo": 1,
          "PG_MW": 0,
          "QG_MW": 0,
          "Q_MAX_MVAR": 100,
          "Q_MIN_MVAR": -100,
          "P_MAX_MW": 200,
          "costo_marginal_dolar_per_MW": 224.77433
        },
        {
          "nodo": 2,
          "PG_MW": 50,
          "QG_MW": 0,
          "Q_MAX_MVAR": 100,
          "Q_MIN_MVAR": -100,
          "P_MAX_MW": 150,
          "costo_marginal_dolar_per_MW": 210.34189
        },
        {
          "nodo": 3,
          "PG_MW": 60,
          "QG_MW": 0,
          "Q_MAX_MVAR": 100,
          "Q_MIN_MVAR": -100,
          "P_MAX_MW": 180,
          "costo_marginal_dolar_per_MW": 250.84041
        }
      ]
    };

    let lineas = {
      "lines": [
        {
          "I": 1,
          "J": 2,
          "flujo_P_I_a_J_MW": 15.40659799,
          "flujo_Q_I_a_J_MW": -9.577553187,
          "flujo_P_J_a_I_MW": -15.14200134,
          "flujo_Q_J_a_I_MW": 5.696746479
        },
        {
          "I": 1,
          "J": 4,
          "flujo_P_I_a_J_MW": 33.95108467,
          "flujo_Q_I_a_J_MW": 22.49662934,
          "flujo_P_J_a_I_MW": -33.15160773,
          "flujo_Q_J_a_I_MW": -23.45679751
        },
        {
          "I": 1,
          "J": 5,
          "flujo_P_I_a_J_MW": 27.86218471,
          "flujo_Q_I_a_J_MW": 12.79596757,
          "flujo_P_J_a_I_MW": -27.11071224,
          "flujo_Q_J_a_I_MW": -16.19651062
        },
        {
          "I": 2,
          "J": 3,
          "flujo_P_I_a_J_MW": 0.287042358,
          "flujo_Q_I_a_J_MW": -11.76055697,
          "flujo_P_J_a_I_MW": -0.254599471,
          "flujo_Q_J_a_I_MW": 5.1805714
        },
        {
          "I": 2,
          "J": 4,
          "flujo_P_I_a_J_MW": 41.73564031,
          "flujo_Q_I_a_J_MW": 43.1060912,
          "flujo_P_J_a_I_MW": -40.05933047,
          "flujo_Q_J_a_I_MW": -41.83250946
        },
        {
          "I": 2,
          "J": 5,
          "flujo_P_I_a_J_MW": 17.3533078,
          "flujo_Q_I_a_J_MW": 14.93403563,
          "flujo_P_J_a_I_MW": -16.81373063,
          "flujo_Q_J_a_I_MW": -17.461014
        },
        {
          "I": 2,
          "J": 6,
          "flujo_P_I_a_J_MW": 25.03409709,
          "flujo_Q_I_a_J_MW": 12.67365936,
          "flujo_P_J_a_I_MW": -24.48502527,
          "flujo_Q_J_a_I_MW": -16.38426905
        },
        {
          "I": 3,
          "J": 5,
          "flujo_P_I_a_J_MW": 23.17934478,
          "flujo_Q_I_a_J_MW": 21.56802382,
          "flujo_P_J_a_I_MW": -21.99064326,
          "flujo_Q_J_a_I_MW": -24.28064123
        },
        {
          "I": 3,
          "J": 6,
          "flujo_P_I_a_J_MW": 47.49574693,
          "flujo_Q_I_a_J_MW": 59.89553961,
          "flujo_P_J_a_I_MW": -46.45080305,
          "flujo_Q_J_a_I_MW": -56.82497473
        },
        {
          "I": 4,
          "J": 5,
          "flujo_P_I_a_J_MW": 3.210938201,
          "flujo_Q_I_a_J_MW": -4.710693035,
          "flujo_P_J_a_I_MW": -3.18849686,
          "flujo_Q_J_a_I_MW": -3.031995859
        },
        {
          "I": 5,
          "J": 6,
          "flujo_P_I_a_J_MW": -0.896417015,
          "flujo_Q_I_a_J_MW": -9.029838293,
          "flujo_P_J_a_I_MW": 0.935828318,
          "flujo_Q_J_a_I_MW": 3.209243783
        }
      ]
    };
    
    
    let nodos = {
      "nodes": [
        {
          "nodo": 1,
          "tipo_de_nodo": 3,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.05,
          "V_min": 1.05
        },
        {
          "nodo": 2,
          "tipo_de_nodo": 2,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.05,
          "V_min": 1.05
        },
        {
          "nodo": 3,
          "tipo_de_nodo": 2,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.07,
          "V_min": 1.07
        },
        {
          "nodo": 4,
          "tipo_de_nodo": 1,
          "P_MW": 70,
          "Q_MVAR": 70,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 5,
          "tipo_de_nodo": 1,
          "P_MW": 70,
          "Q_MVAR": 70,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 6,
          "tipo_de_nodo": 1,
          "P_MW": 70,
          "Q_MVAR": 70,
          "V_max": 1.05,
          "V_min": 0.95
        }
      ]
    };
    

    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 195.1073806,
        "potencia_atendida_MW": 14.89261939,
        "potencia_generada_adicional_MW": 14.89261939 - 195.1073806, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 36624.19471,
        "costo_deslastre_dolar_per_MWH": 39021.47695,
        "U1": 0.070917235,
        "U2": -0.065456244,
        "U": 0.002730495,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 170.8486936,
        "potencia_atendida_MW": 39.15130639,
        "potencia_generada_adicional_MW": 39.15130639 - 170.8486936, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 35204.34286,
        "costo_deslastre_dolar_per_MWH": 34169.70931,
        "U1": 0.186434792,
        "U2": 0.029389373,
        "U": 0.107912083,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 103.7830843,
        "potencia_atendida_MW": 106.2169157,
        "potencia_generada_adicional_MW": 106.2169157 - 103.7830843, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 19084.99978,
        "costo_deslastre_dolar_per_MWH": 13015.55843,
        "U1": 0.505794837,
        "U2": 0.318021557,
        "U": 0.411908197,
        "resiliencia": "POBRE"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 115.9606768,
        "potencia_atendida_MW": 94.03932319,
        "potencia_generada_adicional_MW": 94.03932319 - 115.9606768, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 23914.96594,
        "costo_deslastre_dolar_per_MWH": 17787.10859,
        "U1": 0.447806301,
        "U2": 0.256235253,
        "U": 0.352020777,
        "resiliencia": "POBRE"
      }
    ];
    
  
    let escenario1ConSinRdNiGd = [
      {
        "nodo": 4,
        "carga_MW": 70,
        "potencia_deslastrada_MW": 97.55368616,
        "costo_dolar_por_MW": 9755.368616,
        "potencia_atendida_MW": -27.55368616,
        "_atendido": (-27.55368616 / 70) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 70,
        "potencia_deslastrada_MW": 97.55369445,
        "costo_dolar_por_MW": 29266.10834,
        "potencia_atendida_MW": -27.55369445,
        "_atendido": (-27.55369445 / 70) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    let escenario2ConRdSinGd = [
      {
        "nodo": 4,
        "carga_MW": 70,
        "potencia_deslastrada_MW": 85.42449388,
        "costo_dolar_por_MW": 8542.449388,
        "potencia_atendida_MW": -15.42449388,
        "_atendido": (-15.42449388 / 70) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 70,
        "potencia_deslastrada_MW": 85.42419973,
        "costo_dolar_por_MW": 25627.25992,
        "potencia_atendida_MW": -15.42419973,
        "_atendido": (-15.42419973 / 70) * 100 // Calculando el porcentaje atendido
      }
    ];
    


    let escenario3ConGdSinRd = [
      {
        "nodo": 4,
        "carga_MW": 70,
        "potencia_deslastrada_MW": 90.59683425,
        "costo_dolar_por_MW": 9059.683425,
        "potencia_atendida_MW": -20.59683425,
        "_atendido": (-20.59683425 / 70) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 70,
        "potencia_deslastrada_MW": 13.18625003,
        "costo_dolar_por_MW": 3955.875009,
        "potencia_atendida_MW": 56.81374997,
        "_atendido": (56.81374997 / 70) * 100 // Calculando el porcentaje atendido
      }
    ];
    


    let escenario4ConGdYRd = [
      {
        "nodo": 4,
        "carga_MW": 70,
        "potencia_deslastrada_MW": 85.00547225,
        "costo_dolar_por_MW": 8500.547225,
        "potencia_atendida_MW": -15.00547225,
        "_atendido": (-15.00547225 / 70) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 70,
        "potencia_deslastrada_MW": 30.95520456,
        "costo_dolar_por_MW": 9286.561369,
        "potencia_atendida_MW": 39.04479544,
        "_atendido": (39.04479544 / 70) * 100 // Calculando el porcentaje atendido
      }
    ];
    

    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="9"){
   
    let generadores = {
      "generators": [
        {
          "nodo": 1,
          "PG_MW": 72.3,
          "QG_MW": 27.03,
          "Q_MAX_MVAR": 300,
          "Q_MIN_MVAR": -300,
          "P_MAX_MW": 250,
          "costo_marginal_dolar_per_MW": 155.11
        },
        {
          "nodo": 2,
          "PG_MW": 163,
          "QG_MW": 6.54,
          "Q_MAX_MVAR": 300,
          "Q_MIN_MVAR": -300,
          "P_MAX_MW": 300,
          "costo_marginal_dolar_per_MW": 601.285
        },
        {
          "nodo": 3,
          "PG_MW": 85,
          "QG_MW": -10.95,
          "Q_MAX_MVAR": 300,
          "Q_MIN_MVAR": -300,
          "P_MAX_MW": 270,
          "costo_marginal_dolar_per_MW": 336.1225
        }
      ]
    };

    let lineas = {
      "lines": [
        {
          "I": 1,
          "J": 4,
          "flujo_P_I_a_J_MW": 89.79859506,
          "flujo_Q_I_a_J_MW": 12.93879236,
          "flujo_P_J_a_I_MW": -89.79859506,
          "flujo_Q_J_a_I_MW": -9.020118921
        },
        {
          "I": 4,
          "J": 5,
          "flujo_P_I_a_J_MW": 35.22099056,
          "flujo_Q_I_a_J_MW": -3.902947452,
          "flujo_P_J_a_I_MW": -35.04046382,
          "flujo_Q_J_a_I_MW": -13.86852049
        },
        {
          "I": 5,
          "J": 6,
          "flujo_P_I_a_J_MW": -54.95952794,
          "flujo_Q_I_a_J_MW": -16.13147967,
          "flujo_P_J_a_I_MW": 55.969284,
          "flujo_Q_J_a_I_MW": -22.17596007
        },
        {
          "I": 3,
          "J": 6,
          "flujo_P_I_a_J_MW": 94.18743846,
          "flujo_Q_I_a_J_MW": -22.61972555,
          "flujo_P_J_a_I_MW": -94.18743846,
          "flujo_Q_J_a_I_MW": 27.27638655
        },
        {
          "I": 6,
          "J": 7,
          "flujo_P_I_a_J_MW": 38.21815659,
          "flujo_Q_I_a_J_MW": -5.100426642,
          "flujo_P_J_a_I_MW": -38.06891066,
          "flujo_Q_J_a_I_MW": -18.68385098
        },
        {
          "I": 7,
          "J": 8,
          "flujo_P_I_a_J_MW": -61.93108933,
          "flujo_Q_I_a_J_MW": -16.31614902,
          "flujo_P_J_a_I_MW": 62.20974575,
          "flujo_Q_J_a_I_MW": 0.819004615
        },
        {
          "I": 8,
          "J": 2,
          "flujo_P_I_a_J_MW": -134.3206521,
          "flujo_Q_I_a_J_MW": 9.316344688,
          "flujo_P_J_a_I_MW": 134.3206521,
          "flujo_Q_J_a_I_MW": 0.047735431
        },
        {
          "I": 8,
          "J": 9,
          "flujo_P_I_a_J_MW": 72.11090848,
          "flujo_Q_I_a_J_MW": -10.1353494,
          "flujo_P_J_a_I_MW": -70.71714303,
          "flujo_Q_J_a_I_MW": -18.93893045
        },
        {
          "I": 9,
          "J": 4,
          "flujo_P_I_a_J_MW": -54.28284674,
          "flujo_Q_I_a_J_MW": -31.06106895,
          "flujo_P_J_a_I_MW": 54.57760976,
          "flujo_Q_J_a_I_MW": 12.92306803
        }
      ]
    };
    

    let nodos = {
      "nodes": [
        {
          "nodo": 1,
          "tipo_de_nodo": 3,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 2,
          "tipo_de_nodo": 2,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 3,
          "tipo_de_nodo": 2,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 4,
          "tipo_de_nodo": 1,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 5,
          "tipo_de_nodo": 1,
          "P_MW": 90,
          "Q_MVAR": 30,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 6,
          "tipo_de_nodo": 1,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 7,
          "tipo_de_nodo": 1,
          "P_MW": 100,
          "Q_MVAR": 35,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 8,
          "tipo_de_nodo": 1,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 9,
          "tipo_de_nodo": 1,
          "P_MW": 125,
          "Q_MVAR": 50,
          "V_max": 1.1,
          "V_min": 0.9
        }
      ]
    };
    
    
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 315.0808624,
        "potencia_atendida_MW": -0.080862352,
        "potencia_generada_adicional_MW": -0.080862352 - 315.0808624, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 79017.92156,
        "costo_deslastre_dolar_per_MWH": 79017.92156,
        "U1": -0.000256706,
        "U2": 0,
        "U": -0.000128353,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 227.6864371,
        "potencia_atendida_MW": 87.31356288,
        "potencia_generada_adicional_MW": 87.31356288 - 227.6864371, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 53449.57509,
        "costo_deslastre_dolar_per_MWH": 49074.57513,
        "U1": 0.277185914,
        "U2": 0.081852848,
        "U": 0.179519381,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 240.4654967,
        "potencia_atendida_MW": 74.53450328,
        "potencia_generada_adicional_MW": 74.53450328 - 240.4654967, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 57811.19869,
        "costo_deslastre_dolar_per_MWH": 52186.19874,
        "U1": 0.236617471,
        "U2": 0.097299487,
        "U": 0.166958479,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 152.9654979,
        "potencia_atendida_MW": 162.0345021,
        "potencia_generada_adicional_MW": 162.0345021 - 152.9654979, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 32186.19917,
        "costo_deslastre_dolar_per_MWH": 22186.1993,
        "U1": 0.514395245,
        "U2": 0.310692164,
        "U": 0.412543704,
        "resiliencia": "POBRE"
      }
    ];
    
    
  
    let escenario1ConSinRdNiGd = [
      {
        "nodo": 5,
        "carga_MW": 90,
        "potencia_deslastrada_MW": 89.99999908,
        "costo_dolar_por_MW": 8999.999908,
        "potencia_atendida_MW": 9.22162E-07,
        "_atendido": (9.22162E-07 / 90) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 125,
        "potencia_deslastrada_MW": 62.68643804,
        "costo_dolar_por_MW": 25074.57522,
        "potencia_atendida_MW": 62.31356196,
        "_atendido": (62.31356196 / 125) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 100,
        "potencia_deslastrada_MW": 75,
        "costo_dolar_por_MW": 15000,
        "potencia_atendida_MW": 25,
        "_atendido": (25 / 100) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    
    let escenario2ConRdSinGd = [
      {
        "nodo": 5,
        "carga_MW": 90,
        "potencia_deslastrada_MW": 89.99999983,
        "costo_dolar_por_MW": 8999.999983,
        "potencia_atendida_MW": 1.67813E-07,
        "_atendido": (1.67813E-07 / 90) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 125,
        "potencia_deslastrada_MW": 65.46549688,
        "costo_dolar_por_MW": 26186.19875,
        "potencia_atendida_MW": 59.53450312,
        "_atendido": (59.53450312 / 125) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 100,
        "potencia_deslastrada_MW": 85,
        "costo_dolar_por_MW": 17000,
        "potencia_atendida_MW": 15,
        "_atendido": (15 / 100) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    


    let escenario3ConGdSinRd = [
      {
        "nodo": 5,
        "carga_MW": 90,
        "potencia_deslastrada_MW": 89.99999958,
        "costo_dolar_por_MW": 8999.999958,
        "potencia_atendida_MW": 4.15043E-07,
        "_atendido": (4.15043E-07 / 90) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 125,
        "potencia_deslastrada_MW": 2.965498356,
        "costo_dolar_por_MW": 1186.199342,
        "potencia_atendida_MW": 122.0345016,
        "_atendido": (122.0345016 / 125) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 100,
        "potencia_deslastrada_MW": 60,
        "costo_dolar_por_MW": 12000,
        "potencia_atendida_MW": 40,
        "_atendido": (40 / 100) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    


    let escenario4ConGdYRd = [
      {
        "nodo": 5,
        "carga_MW": 90,
        "potencia_deslastrada_MW": 89.99999958,
        "costo_dolar_por_MW": 8999.999958,
        "potencia_atendida_MW": 4.15043E-07,
        "_atendido": (4.15043E-07 / 90) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 125,
        "potencia_deslastrada_MW": 2.965498356,
        "costo_dolar_por_MW": 1186.199342,
        "potencia_atendida_MW": 122.0345016,
        "_atendido": (122.0345016 / 125) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 100,
        "potencia_deslastrada_MW": 60,
        "costo_dolar_por_MW": 12000,
        "potencia_atendida_MW": 40,
        "_atendido": (40 / 100) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    

    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }
   
  }

  

  @Output() datos = new EventEmitter<any>();

  constructor( private location: Location) { }
  ngOnInit(): void {
    console.log(this.location.path())

if(this.location.path()=='/Crear?sd=true' || this.location.path()=='/Corridos?sd=true' ){
      this.caso=this.casosSD;
  }

  if(this.location.path()=='/Crear?st=true' || this.location.path()=='/Corridos?st=true'){
    this.caso=this.casosST;
}

if(this.location.path()=='/Reportes?Visualizar=true' || this.location.path()=='/Reportes?Descargar=true' ){
  this.caso=this.caso;
}



  }

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
  ];
  
  casosSD =[
    {val:'12'},
    {val:'15'},
    {val:'18'},
    {val:'22'},
    {val:'33'},
    {val:'34'},
    {val:'38'},
    {val:'51'},
    {val:'69'},
    {val:'74'},
  ];

  casosST =[
    {val:'5'},
    {val:'6'},
    {val:'9'},
    {val:'14'},
    {val:'24'},
    {val:'30'},
    {val:'39'},
    {val:'57'},
  ];

}
