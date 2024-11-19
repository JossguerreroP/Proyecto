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
   
   if(caso=="14"){
   
    let generadores = {
      "generators": [
        {
          "nodo": 1,
          "PG_MW": 232.4,
          "QG_MW": -16.9,
          "Q_MAX_MVAR": 10,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 332.4,
          "costo_marginal_dolar_per_MW": 20.04302926
        },
        {
          "nodo": 2,
          "PG_MW": 40,
          "QG_MW": 42.4,
          "Q_MAX_MVAR": 50,
          "Q_MIN_MVAR": -40,
          "P_MAX_MW": 140,
          "costo_marginal_dolar_per_MW": 20.25
        },
        {
          "nodo": 3,
          "PG_MW": 0,
          "QG_MW": 23.4,
          "Q_MAX_MVAR": 40,
          "Q_MIN_MVAR": 0,
          "P_MAX_MW": 100,
          "costo_marginal_dolar_per_MW": 40.01
        },
        {
          "nodo": 6,
          "PG_MW": 0,
          "QG_MW": 12.2,
          "Q_MAX_MVAR": 24,
          "Q_MIN_MVAR": -6,
          "P_MAX_MW": 100,
          "costo_marginal_dolar_per_MW": 40.01
        },
        {
          "nodo": 8,
          "PG_MW": 0,
          "QG_MW": 17.4,
          "Q_MAX_MVAR": 24,
          "Q_MIN_MVAR": -6,
          "P_MAX_MW": 100,
          "costo_marginal_dolar_per_MW": 40.01
        }
      ]
    };
    

    let lineas = {
      "lines": [
        {
          "I": 1,
          "J": 2,
          "flujo_P_I_a_J_MW": 129.6692158,
          "flujo_Q_I_a_J_MW": -6.364272678,
          "flujo_P_J_a_I_MW": -126.7671046,
          "flujo_Q_J_a_I_MW": 9.398984049
        },
        {
          "I": 1,
          "J": 5,
          "flujo_P_I_a_J_MW": 64.66095215,
          "flujo_Q_I_a_J_MW": 6.365105079,
          "flujo_P_J_a_I_MW": -62.61036007,
          "flujo_Q_J_a_I_MW": -3.205318767
        },
        {
          "I": 2,
          "J": 3,
          "flujo_P_I_a_J_MW": 55.59272693,
          "flujo_Q_I_a_J_MW": 0.474292069,
          "flujo_P_J_a_I_MW": -54.24846685,
          "flujo_Q_J_a_I_MW": 0.558002701
        },
        {
          "I": 2,
          "J": 4,
          "flujo_P_I_a_J_MW": 48.91565895,
          "flujo_Q_I_a_J_MW": -0.478493251,
          "flujo_P_J_a_I_MW": -47.63099791,
          "flujo_Q_J_a_I_MW": 0.785566575
        },
        {
          "I": 2,
          "J": 5,
          "flujo_P_I_a_J_MW": 37.27788091,
          "flujo_Q_I_a_J_MW": 1.590255493,
          "flujo_P_J_a_I_MW": -36.5409356,
          "flujo_Q_J_a_I_MW": -3.001164624
        },
        {
          "I": 3,
          "J": 4,
          "flujo_P_I_a_J_MW": -11.20890975,
          "flujo_Q_I_a_J_MW": 4.568858298,
          "flujo_P_J_a_I_MW": 11.30829321,
          "flujo_Q_J_a_I_MW": -5.634000385
        },
        {
          "I": 4,
          "J": 5,
          "flujo_P_I_a_J_MW": -49.16500597,
          "flujo_Q_I_a_J_MW": 11.5752631,
          "flujo_P_J_a_I_MW": 49.49594878,
          "flujo_Q_J_a_I_MW": -10.53136783
        },
        {
          "I": 4,
          "J": 7,
          "flujo_P_I_a_J_MW": 22.8471267,
          "flujo_Q_I_a_J_MW": -3.993613584,
          "flujo_P_J_a_I_MW": -22.8471267,
          "flujo_Q_J_a_I_MW": 5.039144917
        },
        {
          "I": 4,
          "J": 9,
          "flujo_P_I_a_J_MW": 14.84058396,
          "flujo_Q_I_a_J_MW": 1.166784304,
          "flujo_P_J_a_I_MW": -14.84058396,
          "flujo_Q_J_a_I_MW": -0.042254542
        },
        {
          "I": 5,
          "J": 6,
          "flujo_P_I_a_J_MW": 42.05534694,
          "flujo_Q_I_a_J_MW": 15.13785129,
          "flujo_P_J_a_I_MW": -42.05534694,
          "flujo_Q_J_a_I_MW": -10.90411946
        },
        {
          "I": 6,
          "J": 11,
          "flujo_P_I_a_J_MW": 6.087327096,
          "flujo_Q_I_a_J_MW": 4.562636974,
          "flujo_P_J_a_I_MW": -6.038405668,
          "flujo_Q_J_a_I_MW": -4.460189385
        },
        {
          "I": 6,
          "J": 12,
          "flujo_P_I_a_J_MW": 7.651662201,
          "flujo_Q_I_a_J_MW": 2.660415528,
          "flujo_P_J_a_I_MW": -7.579874363,
          "flujo_Q_J_a_I_MW": -2.51100501
        },
        {
          "I": 6,
          "J": 13,
          "flujo_P_I_a_J_MW": 17.11667358,
          "flujo_Q_I_a_J_MW": 7.726533673,
          "flujo_P_J_a_I_MW": -16.9090389,
          "flujo_Q_J_a_I_MW": -7.317636176
        },
        {
          "I": 7,
          "J": 8,
          "flujo_P_I_a_J_MW": -8.494938193,
          "flujo_Q_I_a_J_MW": -8.052552397,
          "flujo_P_J_a_I_MW": 8.494938193,
          "flujo_Q_J_a_I_MW": 8.272985324
        },
        {
          "I": 7,
          "J": 9,
          "flujo_P_I_a_J_MW": 31.3420649,
          "flujo_Q_I_a_J_MW": 3.013407501,
          "flujo_P_J_a_I_MW": -31.3420649,
          "flujo_Q_J_a_I_MW": -2.017239017
        },
        {
          "I": 9,
          "J": 10,
          "flujo_P_I_a_J_MW": 6.487019865,
          "flujo_Q_I_a_J_MW": 3.204152085,
          "flujo_P_J_a_I_MW": -6.471733156,
          "flujo_Q_J_a_I_MW": -3.163544512
        },
        {
          "I": 9,
          "J": 14,
          "flujo_P_I_a_J_MW": 10.19562902,
          "flujo_Q_I_a_J_MW": 2.952156367,
          "flujo_P_J_a_I_MW": -10.06416013,
          "flujo_Q_J_a_I_MW": -2.672504434
        },
        {
          "I": 10,
          "J": 11,
          "flujo_P_I_a_J_MW": -2.528266834,
          "flujo_Q_I_a_J_MW": -2.63645548,
          "flujo_P_J_a_I_MW": 2.538405678,
          "flujo_Q_J_a_I_MW": 2.660189398
        },
        {
          "I": 12,
          "J": 13,
          "flujo_P_I_a_J_MW": 1.479874367,
          "flujo_Q_I_a_J_MW": 0.911005011,
          "flujo_P_J_a_I_MW": -1.473762783,
          "flujo_Q_J_a_I_MW": -0.905475483
        },
        {
          "I": 13,
          "J": 14,
          "flujo_P_I_a_J_MW": 4.882801696,
          "flujo_Q_I_a_J_MW": 2.423111664,
          "flujo_P_J_a_I_MW": -4.835839852,
          "flujo_Q_J_a_I_MW": -2.32749556
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
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 2,
          "tipo_de_nodo": 2,
          "P_MW": 21.7,
          "Q_MVAR": 12.7,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 3,
          "tipo_de_nodo": 2,
          "P_MW": 94.2,
          "Q_MVAR": 19,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 4,
          "tipo_de_nodo": 1,
          "P_MW": 47.8,
          "Q_MVAR": -3.9,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 5,
          "tipo_de_nodo": 1,
          "P_MW": 7.6,
          "Q_MVAR": 1.6,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 6,
          "tipo_de_nodo": 2,
          "P_MW": 11.2,
          "Q_MVAR": 7.5,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 7,
          "tipo_de_nodo": 1,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 8,
          "tipo_de_nodo": 2,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 9,
          "tipo_de_nodo": 1,
          "P_MW": 29.5,
          "Q_MVAR": 16.6,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 10,
          "tipo_de_nodo": 1,
          "P_MW": 9,
          "Q_MVAR": 5.8,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 11,
          "tipo_de_nodo": 1,
          "P_MW": 3.5,
          "Q_MVAR": 1.8,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 12,
          "tipo_de_nodo": 1,
          "P_MW": 6.1,
          "Q_MVAR": 1.6,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 13,
          "tipo_de_nodo": 1,
          "P_MW": 13.5,
          "Q_MVAR": 5.8,
          "V_max": 1.06,
          "V_min": 0.94
        },
        {
          "nodo": 14,
          "tipo_de_nodo": 1,
          "P_MW": 14.9,
          "Q_MVAR": 5,
          "V_max": 1.06,
          "V_min": 0.94
        }
      ]
    };
    
    
    
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 258.9999996,
        "potencia_atendida_MW": 3.77727e-07,
        "potencia_generada_adicional_MW": 3.77727e-07 - 258.9999996, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 48374.99992,
        "costo_deslastre_dolar_per_MWH": 48374.99992,
        "U1": 1.45841e-09,
        "U2": 0,
        "U": 7.29203e-10,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 184.9411368,
        "potencia_atendida_MW": 74.05886316,
        "potencia_generada_adicional_MW": 74.05886316 - 184.9411368, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 29892.3413,
        "costo_deslastre_dolar_per_MWH": 26157.34137,
        "U1": 0.285941557,
        "U2": 0.12494839,
        "U": 0.205444973,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 154.5615998,
        "potencia_atendida_MW": 104.4384002,
        "potencia_generada_adicional_MW": 104.4384002 - 154.5615998, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 26162.32069,
        "costo_deslastre_dolar_per_MWH": 18287.32124,
        "U1": 0.403237066,
        "U2": 0.301005387,
        "U": 0.352121226,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 80.59140679,
        "potencia_atendida_MW": 178.4085932,
        "potencia_generada_adicional_MW": 178.4085932 - 80.59140679, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 19669.13979,
        "costo_deslastre_dolar_per_MWH": 8059.141011,
        "U1": 0.688836267,
        "U2": 0.590264694,
        "U": 0.639550481,
        "resiliencia": "POBRE"
      }
    ];
    
    
    
    let escenario1ConSinRdNiGd = [
      {
        "nodo": 2,
        "carga_MW": 21.7,
        "potencia_deslastrada_MW": 21.70000017,
        "costo_dolar_por_MW": 6510.000052,
        "potencia_atendida_MW": -1.74796e-07,
        "_atendido": (-1.74796e-07 / 21.7) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 94.2,
        "potencia_deslastrada_MW": 94.1999999,
        "costo_dolar_por_MW": 9419.99999,
        "potencia_atendida_MW": 1.01187e-07,
        "_atendido": (1.01187e-07 / 94.2) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 47.8,
        "potencia_deslastrada_MW": 47.79999987,
        "costo_dolar_por_MW": 14339.99996,
        "potencia_atendida_MW": 1.33698e-07,
        "_atendido": (1.33698e-07 / 47.8) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 7.6,
        "potencia_deslastrada_MW": 7.599999985,
        "costo_dolar_por_MW": 1139.999998,
        "potencia_atendida_MW": 1.47665e-08,
        "_atendido": (1.47665e-08 / 7.6) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 11.2,
        "potencia_deslastrada_MW": 11.19999998,
        "costo_dolar_por_MW": 1119.999998,
        "potencia_atendida_MW": 1.97156e-08,
        "_atendido": (1.97156e-08 / 11.2) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 29.5,
        "potencia_deslastrada_MW": 29.49999997,
        "costo_dolar_por_MW": 5899.999994,
        "potencia_atendida_MW": 3.24421e-08,
        "_atendido": (3.24421e-08 / 29.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 9,
        "potencia_deslastrada_MW": 8.999999916,
        "costo_dolar_por_MW": 2699.999975,
        "potencia_atendida_MW": 8.40323e-08,
        "_atendido": (8.40323e-08 / 9) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 3.5,
        "potencia_deslastrada_MW": 3.499999988,
        "costo_dolar_por_MW": 349.9999988,
        "potencia_atendida_MW": 1.2111e-08,
        "_atendido": (1.2111e-08 / 3.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 6.1,
        "potencia_deslastrada_MW": 6.099999985,
        "costo_dolar_por_MW": 609.9999985,
        "potencia_atendida_MW": 1.46962e-08,
        "_atendido": (1.46962e-08 / 6.1) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 13.5,
        "potencia_deslastrada_MW": 13.49999988,
        "costo_dolar_por_MW": 4049.999965,
        "potencia_atendida_MW": 1.18015e-07,
        "_atendido": (1.18015e-07 / 13.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 14.9,
        "potencia_deslastrada_MW": 14.89999998,
        "costo_dolar_por_MW": 2234.999997,
        "potencia_atendida_MW": 2.18592e-08,
        "_atendido": (2.18592e-08 / 14.9) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    
    let escenario2ConRdSinGd = [
      {
        "nodo": 2,
        "carga_MW": 21.7,
        "potencia_deslastrada_MW": 1.57238e-05,
        "costo_dolar_por_MW": 0.004717144,
        "potencia_atendida_MW": 21.69998428,
        "_atendido": (21.69998428 / 21.7) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 94.2,
        "potencia_deslastrada_MW": 94.19999976,
        "costo_dolar_por_MW": 9419.999976,
        "potencia_atendida_MW": 2.37341e-07,
        "_atendido": (2.37341e-07 / 94.2) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 47.8,
        "potencia_deslastrada_MW": 4.412742422,
        "costo_dolar_por_MW": 1323.822727,
        "potencia_atendida_MW": 43.38725758,
        "_atendido": (43.38725758 / 47.8) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 7.6,
        "potencia_deslastrada_MW": 7.599999696,
        "costo_dolar_por_MW": 1139.999954,
        "potencia_atendida_MW": 3.04348e-07,
        "_atendido": (3.04348e-07 / 7.6) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 11.2,
        "potencia_deslastrada_MW": 11.19999977,
        "costo_dolar_por_MW": 1119.999977,
        "potencia_atendida_MW": 2.27783e-07,
        "_atendido": (2.27783e-07 / 11.2) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 29.5,
        "potencia_deslastrada_MW": 29.49999955,
        "costo_dolar_por_MW": 5899.999909,
        "potencia_atendida_MW": 4.54058e-07,
        "_atendido": (4.54058e-07 / 29.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 9,
        "potencia_deslastrada_MW": 7.122209809,
        "costo_dolar_por_MW": 2136.662943,
        "potencia_atendida_MW": 1.877790191,
        "_atendido": (1.877790191 / 9) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 3.5,
        "potencia_deslastrada_MW": 3.499999772,
        "costo_dolar_por_MW": 349.9999772,
        "potencia_atendida_MW": 2.27528e-07,
        "_atendido": (2.27528e-07 / 3.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 6.1,
        "potencia_deslastrada_MW": 6.099999771,
        "costo_dolar_por_MW": 609.9999771,
        "potencia_atendida_MW": 2.29166e-07,
        "_atendido": (2.29166e-07 / 6.1) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 13.5,
        "potencia_deslastrada_MW": 6.406170868,
        "costo_dolar_por_MW": 1921.851261,
        "potencia_atendida_MW": 7.093829132,
        "_atendido": (7.093829132 / 13.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 14.9,
        "potencia_deslastrada_MW": 14.8999997,
        "costo_dolar_por_MW": 2234.999955,
        "potencia_atendida_MW": 3.02531e-07,
        "_atendido": (3.02531e-07 / 14.9) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    
    let escenario3ConGdSinRd = [
      {
        "nodo": 2,
        "carga_MW": 21.7,
        "potencia_deslastrada_MW": 1.23707e-06,
        "costo_dolar_por_MW": 0.00037112,
        "potencia_atendida_MW": 21.69999876,
        "_atendido": (21.69999876 / 21.7) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 94.2,
        "potencia_deslastrada_MW": 94.19999866,
        "costo_dolar_por_MW": 9419.999866,
        "potencia_atendida_MW": 1.34437e-06,
        "_atendido": (1.34437e-06 / 94.2) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 47.8,
        "potencia_deslastrada_MW": 1.28222e-06,
        "costo_dolar_por_MW": 0.000384667,
        "potencia_atendida_MW": 47.79999872,
        "_atendido": (47.79999872 / 47.8) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 7.6,
        "potencia_deslastrada_MW": 7.599997447,
        "costo_dolar_por_MW": 1139.999617,
        "potencia_atendida_MW": 2.55309e-06,
        "_atendido": (2.55309e-06 / 7.6) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 11.2,
        "potencia_deslastrada_MW": 11.19999873,
        "costo_dolar_por_MW": 1119.999873,
        "potencia_atendida_MW": 1.27316e-06,
        "_atendido": (1.27316e-06 / 11.2) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 29.5,
        "potencia_deslastrada_MW": 17.06160488,
        "costo_dolar_por_MW": 3412.320977,
        "potencia_atendida_MW": 12.43839512,
        "_atendido": (12.43839512 / 29.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 9,
        "potencia_deslastrada_MW": 1.29054e-06,
        "costo_dolar_por_MW": 0.000387163,
        "potencia_atendida_MW": 8.999998709,
        "_atendido": (8.999998709 / 9) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 3.5,
        "potencia_deslastrada_MW": 3.49999873,
        "costo_dolar_por_MW": 349.999873,
        "potencia_atendida_MW": 1.26984e-06,
        "_atendido": (1.26984e-06 / 3.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 6.1,
        "potencia_deslastrada_MW": 6.099998736,
        "costo_dolar_por_MW": 609.9998736,
        "potencia_atendida_MW": 1.26413e-06,
        "_atendido": (1.26413e-06 / 6.1) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 13.5,
        "potencia_deslastrada_MW": 1.31395e-06,
        "costo_dolar_por_MW": 0.000394185,
        "potencia_atendida_MW": 13.49999869,
        "_atendido": (13.49999869 / 13.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 14.9,
        "potencia_deslastrada_MW": 14.8999975,
        "costo_dolar_por_MW": 2234.999625,
        "potencia_atendida_MW": 2.49992e-06,
        "_atendido": (2.49992e-06 / 14.9) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    
    let escenario4ConGdYRd = [
      {
        "nodo": 2,
        "carga_MW": 21.7,
        "potencia_deslastrada_MW": 2.26779e-07,
        "costo_dolar_por_MW": 6.80337e-05,
        "potencia_atendida_MW": 21.69999977,
        "_atendido": (21.69999977 / 21.7) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 94.2,
        "potencia_deslastrada_MW": 59.79144213,
        "costo_dolar_por_MW": 5979.144213,
        "potencia_atendida_MW": 34.40855787,
        "_atendido": (34.40855787 / 94.2) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 47.8,
        "potencia_deslastrada_MW": 2.3013e-07,
        "costo_dolar_por_MW": 6.90389e-05,
        "potencia_atendida_MW": 47.79999977,
        "_atendido": (47.79999977 / 47.8) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 7.6,
        "potencia_deslastrada_MW": 9.74399e-07,
        "costo_dolar_por_MW": 0.00014616,
        "potencia_atendida_MW": 7.599999026,
        "_atendido": (7.599999026 / 7.6) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 11.2,
        "potencia_deslastrada_MW": 11.19998645,
        "costo_dolar_por_MW": 1119.998645,
        "potencia_atendida_MW": 1.35513e-05,
        "_atendido": (1.35513e-05 / 11.2) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 29.5,
        "potencia_deslastrada_MW": 4.71267e-07,
        "costo_dolar_por_MW": 9.42534e-05,
        "potencia_atendida_MW": 29.49999953,
        "_atendido": (29.49999953 / 29.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 9,
        "potencia_deslastrada_MW": 2.30848e-07,
        "costo_dolar_por_MW": 6.92545e-05,
        "potencia_atendida_MW": 8.999999769,
        "_atendido": (8.999999769 / 9) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 3.5,
        "potencia_deslastrada_MW": 3.499988523,
        "costo_dolar_por_MW": 349.9988523,
        "potencia_atendida_MW": 1.14773e-05,
        "_atendido": (1.14773e-05 / 3.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 6.1,
        "potencia_deslastrada_MW": 6.099986288,
        "costo_dolar_por_MW": 609.9986288,
        "potencia_atendida_MW": 1.37117e-05,
        "_atendido": (1.37117e-05 / 6.1) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 13.5,
        "potencia_deslastrada_MW": 2.31228e-07,
        "costo_dolar_por_MW": 6.93683e-05,
        "potencia_atendida_MW": 13.49999977,
        "_atendido": (13.49999977 / 13.5) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 14.9,
        "potencia_deslastrada_MW": 1.04039e-06,
        "costo_dolar_por_MW": 0.000156058,
        "potencia_atendida_MW": 14.89999896,
        "_atendido": (14.89999896 / 14.9) * 100 // Calculando el porcentaje atendido
      }
    ];
    

  
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="15"){
   
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
          "flujo_P_I_a_J_MW": 1.288194411,
          "flujo_Q_I_a_J_MW": 1.308476218,
          "flujo_P_J_a_I_MW": -1.25049179,
          "flujo_Q_J_a_I_MW": -1.271598374
        },
        {
          "I": 2,
          "J": 3,
          "flujo_P_I_a_J_MW": 0.735485815,
          "flujo_Q_I_a_J_MW": 0.748539886,
          "flujo_P_J_a_I_MW": -0.724196057,
          "flujo_Q_J_a_I_MW": -0.737497102
        },
        {
          "I": 3,
          "J": 4,
          "flujo_P_I_a_J_MW": 0.39724408,
          "flujo_Q_I_a_J_MW": 0.404925219,
          "flujo_P_J_a_I_MW": -0.394800166,
          "flujo_Q_J_a_I_MW": -0.402534768
        },
        {
          "I": 4,
          "J": 5,
          "flujo_P_I_a_J_MW": 0.044155381,
          "flujo_Q_I_a_J_MW": 0.045028355,
          "flujo_P_J_a_I_MW": -0.0441,
          "flujo_Q_J_a_I_MW": -0.044991
        },
        {
          "I": 2,
          "J": 9,
          "flujo_P_I_a_J_MW": 0.114631372,
          "flujo_Q_I_a_J_MW": 0.116763715,
          "flujo_P_J_a_I_MW": -0.11415918,
          "flujo_Q_J_a_I_MW": -0.116445217
        },
        {
          "I": 9,
          "J": 10,
          "flujo_P_I_a_J_MW": 0.04415918,
          "flujo_Q_I_a_J_MW": 0.045030917,
          "flujo_P_J_a_I_MW": -0.0441,
          "flujo_Q_J_a_I_MW": -0.044991
        },
        {
          "I": 2,
          "J": 6,
          "flujo_P_I_a_J_MW": 0.356274603,
          "flujo_Q_I_a_J_MW": 0.361303772,
          "flujo_P_J_a_I_MW": -0.350506543,
          "flujo_Q_J_a_I_MW": -0.357413167
        },
        {
          "I": 6,
          "J": 7,
          "flujo_P_I_a_J_MW": 0.140393605,
          "flujo_Q_I_a_J_MW": 0.14309409,
          "flujo_P_J_a_I_MW": -0.14,
          "flujo_Q_J_a_I_MW": -0.1428286
        },
        {
          "I": 6,
          "J": 8,
          "flujo_P_I_a_J_MW": 0.070112938,
          "flujo_Q_I_a_J_MW": 0.071490477,
          "flujo_P_J_a_I_MW": -0.07,
          "flujo_Q_J_a_I_MW": -0.0714143
        },
        {
          "I": 3,
          "J": 11,
          "flujo_P_I_a_J_MW": 0.256951977,
          "flujo_Q_I_a_J_MW": 0.261157582,
          "flujo_P_J_a_I_MW": -0.254775642,
          "flujo_Q_J_a_I_MW": -0.259689626
        },
        {
          "I": 11,
          "J": 12,
          "flujo_P_I_a_J_MW": 0.114775642,
          "flujo_Q_I_a_J_MW": 0.116861026,
          "flujo_P_J_a_I_MW": -0.114174021,
          "flujo_Q_J_a_I_MW": -0.116455228
        },
        {
          "I": 12,
          "J": 13,
          "flujo_P_I_a_J_MW": 0.044174021,
          "flujo_Q_I_a_J_MW": 0.045040928,
          "flujo_P_J_a_I_MW": -0.0441,
          "flujo_Q_J_a_I_MW": -0.044991
        },
        {
          "I": 4,
          "J": 14,
          "flujo_P_I_a_J_MW": 0.070204882,
          "flujo_Q_I_a_J_MW": 0.071552495,
          "flujo_P_J_a_I_MW": -0.07,
          "flujo_Q_J_a_I_MW": -0.0714143
        },
        {
          "I": 4,
          "J": 15,
          "flujo_P_I_a_J_MW": 0.140439903,
          "flujo_Q_I_a_J_MW": 0.143125318,
          "flujo_P_J_a_I_MW": -0.14,
          "flujo_Q_J_a_I_MW": -0.1428286
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
          "V_max": 1,
          "V_min": 1
        },
        {
          "nodo": 2,
          "tipo_de_nodo": 1,
          "P_MW": 0.0441,
          "Q_MVAR": 0.044991,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 3,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714143,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 4,
          "tipo_de_nodo": 1,
          "P_MW": 0.14,
          "Q_MVAR": 0.1428286,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 5,
          "tipo_de_nodo": 1,
          "P_MW": 0.0441,
          "Q_MVAR": 0.044991,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 6,
          "tipo_de_nodo": 1,
          "P_MW": 0.14,
          "Q_MVAR": 0.1428286,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 7,
          "tipo_de_nodo": 1,
          "P_MW": 0.14,
          "Q_MVAR": 0.1428286,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 8,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714143,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 9,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714143,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 10,
          "tipo_de_nodo": 1,
          "P_MW": 0.0441,
          "Q_MVAR": 0.044991,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 11,
          "tipo_de_nodo": 1,
          "P_MW": 0.14,
          "Q_MVAR": 0.1428286,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 12,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714143,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 13,
          "tipo_de_nodo": 1,
          "P_MW": 0.0441,
          "Q_MVAR": 0.044991,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 14,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714143,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 15,
          "tipo_de_nodo": 1,
          "P_MW": 0.14,
          "Q_MVAR": 0.1428286,
          "V_max": 1.1,
          "V_min": 0.9
        }
      ]
    };
    
    
    
    
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 1.226399999,
        "potencia_atendida_MW": 7.44957e-10,
        "potencia_generada_adicional_MW": 7.44957e-10 - 1.226399999, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 208.4600001,
        "costo_deslastre_dolar_per_MWH": 208.4600001,
        "U1": 6.07434e-10,
        "U2": 1.11022e-16,
        "U": 3.03717e-10,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 0.900436379,
        "potencia_atendida_MW": 0.325963621,
        "potencia_generada_adicional_MW": 0.325963621 - 0.900436379, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 150.1752352,
        "costo_deslastre_dolar_per_MWH": 133.8740858,
        "U1": 0.265788993,
        "U2": 0.10854752,
        "U": 0.187168257,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 0.55230334,
        "potencia_atendida_MW": 0.67409666,
        "potencia_generada_adicional_MW": 0.67409666 - 0.55230334, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 142.6329857,
        "costo_deslastre_dolar_per_MWH": 92.05039028,
        "U1": 0.549654811,
        "U2": 0.354634625,
        "U": 0.452144718,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 0.418803841,
        "potencia_atendida_MW": 0.807596159,
        "potencia_generada_adicional_MW": 0.807596159 - 0.418803841, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 122.3843562,
        "costo_deslastre_dolar_per_MWH": 69.95158564,
        "U1": 0.658509588,
        "U2": 0.428427065,
        "U": 0.543468327,
        "resiliencia": "MALA"
      }
    ];
    
    
    
    
    let escenario1ConSinRdNiGd = [
      {
        "nodo": 3,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 14,
        "potencia_atendida_MW": 2.96554e-13,
        "_atendido": (2.96554e-13 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.139999999,
        "costo_dolar_por_MW": 13.99999995,
        "potencia_atendida_MW": 5.04507e-10,
        "_atendido": (5.04507e-10 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 14,
        "potencia_atendida_MW": 9.29007e-13,
        "_atendido": (9.29007e-13 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 2,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.40999999,
        "potencia_atendida_MW": 9.62201e-11,
        "_atendido": (9.62201e-11 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 14,
        "potencia_atendida_MW": 6.109e-14,
        "_atendido": (6.109e-14 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.140000001,
        "costo_dolar_por_MW": 42.00000018,
        "potencia_atendida_MW": -6.11228e-10,
        "_atendido": (-6.11228e-10 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.139999999,
        "costo_dolar_por_MW": 13.99999993,
        "potencia_atendida_MW": 7.04281e-10,
        "_atendido": (7.04281e-10 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.14,
        "costo_dolar_por_MW": 28.00000007,
        "potencia_atendida_MW": -3.29324e-10,
        "_atendido": (-3.29324e-10 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.14,
        "costo_dolar_por_MW": 13.99999996,
        "potencia_atendida_MW": 3.79214e-10,
        "_atendido": (3.79214e-10 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.41,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 7,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.41,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 21,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    
    
    let escenario2ConRdSinGd = [
      {
        "nodo": 3,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.032307953,
        "costo_dolar_por_MW": 6.461590614,
        "potencia_atendida_MW": 0.037692047,
        "_atendido": (0.037692047 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.139999991,
        "costo_dolar_por_MW": 13.99999912,
        "potencia_atendida_MW": 8.82722e-09,
        "_atendido": (8.82722e-09 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.020200757,
        "costo_dolar_por_MW": 4.040151427,
        "potencia_atendida_MW": 0.049799243,
        "_atendido": (0.049799243 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 2,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.044097672,
        "costo_dolar_por_MW": 4.409767217,
        "potencia_atendida_MW": 2.32783e-06,
        "_atendido": (2.32783e-06 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.052503881,
        "costo_dolar_por_MW": 10.50077623,
        "potencia_atendida_MW": 0.017496119,
        "_atendido": (0.017496119 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 4.01313e-05,
        "costo_dolar_por_MW": 0.012039402,
        "potencia_atendida_MW": 0.139959869,
        "_atendido": (0.139959869 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.13999998,
        "costo_dolar_por_MW": 13.99999801,
        "potencia_atendida_MW": 1.99023e-08,
        "_atendido": (1.99023e-08 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.105011625,
        "costo_dolar_por_MW": 21.00232508,
        "potencia_atendida_MW": 0.034988375,
        "_atendido": (0.034988375 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.139999387,
        "costo_dolar_por_MW": 13.99993875,
        "potencia_atendida_MW": 6.1254e-07,
        "_atendido": (6.1254e-07 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.033075,
        "costo_dolar_por_MW": 3.3075,
        "potencia_atendida_MW": 0.011025,
        "_atendido": (0.011025 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.035,
        "costo_dolar_por_MW": 3.5,
        "potencia_atendida_MW": 0.035,
        "_atendido": (0.035 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.41,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 21,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    
    
    let escenario3ConGdSinRd = [
      {
        "nodo": 3,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 14,
        "potencia_atendida_MW": 2.96554e-13,
        "_atendido": (2.96554e-13 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.139999999,
        "costo_dolar_por_MW": 13.99999995,
        "potencia_atendida_MW": 5.04507e-10,
        "_atendido": (5.04507e-10 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 14,
        "potencia_atendida_MW": 9.29007e-13,
        "_atendido": (9.29007e-13 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 2,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 2.30316e-06,
        "costo_dolar_por_MW": 0.000230316,
        "potencia_atendida_MW": 0.044097697,
        "_atendido": (0.044097697 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 4.57129e-07,
        "costo_dolar_por_MW": 9.14257e-05,
        "potencia_atendida_MW": 0.069999543,
        "_atendido": (0.069999543 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 2.96852e-08,
        "costo_dolar_por_MW": 8.90557e-06,
        "potencia_atendida_MW": 0.13999997,
        "_atendido": (0.13999997 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 2.68873e-07,
        "costo_dolar_por_MW": 2.68873e-05,
        "potencia_atendida_MW": 0.139999731,
        "_atendido": (0.139999731 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 4.66515e-08,
        "costo_dolar_por_MW": 9.3303e-06,
        "potencia_atendida_MW": 0.139999953,
        "_atendido": (0.139999953 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 2.3461e-07,
        "costo_dolar_por_MW": 2.3461e-05,
        "potencia_atendida_MW": 0.139999765,
        "_atendido": (0.139999765 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.41,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 7,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.41,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 21,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    
    
    let escenario4ConGdYRd = [
      {
        "nodo": 3,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.032307953,
        "costo_dolar_por_MW": 6.461590614,
        "potencia_atendida_MW": 0.037692047,
        "_atendido": (0.037692047 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.139999991,
        "costo_dolar_por_MW": 13.99999912,
        "potencia_atendida_MW": 8.82722e-09,
        "_atendido": (8.82722e-09 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.020200757,
        "costo_dolar_por_MW": 4.040151427,
        "potencia_atendida_MW": 0.049799243,
        "_atendido": (0.049799243 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 2,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 6.2075e-06,
        "costo_dolar_por_MW": 0.00062075,
        "potencia_atendida_MW": 0.044093793,
        "_atendido": (0.044093793 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 1.21905e-06,
        "costo_dolar_por_MW": 0.000243811,
        "potencia_atendida_MW": 0.069998781,
        "_atendido": (0.069998781 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 3.61932e-09,
        "costo_dolar_por_MW": 1.0858e-06,
        "potencia_atendida_MW": 0.139999996,
        "_atendido": (0.139999996 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 3.2681e-08,
        "costo_dolar_por_MW": 3.2681e-06,
        "potencia_atendida_MW": 0.139999967,
        "_atendido": (0.139999967 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 2.07902e-06,
        "costo_dolar_por_MW": 0.000415804,
        "potencia_atendida_MW": 0.139997921,
        "_atendido": (0.139997921 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 1.05976e-05,
        "costo_dolar_por_MW": 0.001059762,
        "potencia_atendida_MW": 0.139989402,
        "_atendido": (0.139989402 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.033075,
        "costo_dolar_por_MW": 3.3075,
        "potencia_atendida_MW": 0.011025,
        "_atendido": (0.011025 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.035,
        "costo_dolar_por_MW": 3.5,
        "potencia_atendida_MW": 0.035,
        "_atendido": (0.035 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.41,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 21,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    

  
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="18"){
   
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
          "flujo_P_I_a_J_MW": 1.469108006,
          "flujo_Q_I_a_J_MW": 1.493470965,
          "flujo_P_J_a_I_MW": -1.435025098,
          "flujo_Q_J_a_I_MW": -1.460134142
        },
        {
          "I": 2,
          "J": 3,
          "flujo_P_I_a_J_MW": 0.922198401,
          "flujo_Q_I_a_J_MW": 0.938613314,
          "flujo_P_J_a_I_MW": -0.910022222,
          "flujo_Q_J_a_I_MW": -0.926703648
        },
        {
          "I": 3,
          "J": 4,
          "flujo_P_I_a_J_MW": 0.583986637,
          "flujo_Q_I_a_J_MW": 0.594798059,
          "flujo_P_J_a_I_MW": -0.580382024,
          "flujo_Q_J_a_I_MW": -0.591271856
        },
        {
          "I": 4,
          "J": 5,
          "flujo_P_I_a_J_MW": 0.229942368,
          "flujo_Q_I_a_J_MW": 0.233975296,
          "flujo_P_J_a_I_MW": -0.228918675,
          "flujo_Q_J_a_I_MW": -0.233284794
        },
        {
          "I": 2,
          "J": 9,
          "flujo_P_I_a_J_MW": 0.11446361,
          "flujo_Q_I_a_J_MW": 0.116645249,
          "flujo_P_J_a_I_MW": -0.114140488,
          "flujo_Q_J_a_I_MW": -0.116427309
        },
        {
          "I": 9,
          "J": 10,
          "flujo_P_I_a_J_MW": 0.044140488,
          "flujo_Q_I_a_J_MW": 0.045027309,
          "flujo_P_J_a_I_MW": -0.0441,
          "flujo_Q_J_a_I_MW": -0.045
        },
        {
          "I": 2,
          "J": 6,
          "flujo_P_I_a_J_MW": 0.354263088,
          "flujo_Q_I_a_J_MW": 0.359875579,
          "flujo_P_J_a_I_MW": -0.350343947,
          "flujo_Q_J_a_I_MW": -0.357232021
        },
        {
          "I": 6,
          "J": 7,
          "flujo_P_I_a_J_MW": 0.140267221,
          "flujo_Q_I_a_J_MW": 0.142980273,
          "flujo_P_J_a_I_MW": -0.14,
          "flujo_Q_J_a_I_MW": -0.1428
        },
        {
          "I": 6,
          "J": 8,
          "flujo_P_I_a_J_MW": 0.070076726,
          "flujo_Q_I_a_J_MW": 0.071451749,
          "flujo_P_J_a_I_MW": -0.07,
          "flujo_Q_J_a_I_MW": -0.0714
        },
        {
          "I": 3,
          "J": 11,
          "flujo_P_I_a_J_MW": 0.256035585,
          "flujo_Q_I_a_J_MW": 0.260505589,
          "flujo_P_J_a_I_MW": -0.254557954,
          "flujo_Q_J_a_I_MW": -0.259508887
        },
        {
          "I": 11,
          "J": 12,
          "flujo_P_I_a_J_MW": 0.114557954,
          "flujo_Q_I_a_J_MW": 0.116708887,
          "flujo_P_J_a_I_MW": -0.114150159,
          "flujo_Q_J_a_I_MW": -0.116433832
        },
        {
          "I": 12,
          "J": 13,
          "flujo_P_I_a_J_MW": 0.044150159,
          "flujo_Q_I_a_J_MW": 0.045033832,
          "flujo_P_J_a_I_MW": -0.0441,
          "flujo_Q_J_a_I_MW": -0.045
        },
        {
          "I": 4,
          "J": 14,
          "flujo_P_I_a_J_MW": 0.070139711,
          "flujo_Q_I_a_J_MW": 0.071494239,
          "flujo_P_J_a_I_MW": -0.07,
          "flujo_Q_J_a_I_MW": -0.0714
        },
        {
          "I": 4,
          "J": 15,
          "flujo_P_I_a_J_MW": 0.140299945,
          "flujo_Q_I_a_J_MW": 0.143002321,
          "flujo_P_J_a_I_MW": -0.14,
          "flujo_Q_J_a_I_MW": -0.1428
        },
        {
          "I": 5,
          "J": 16,
          "flujo_P_I_a_J_MW": 0.184818675,
          "flujo_Q_I_a_J_MW": 0.188284794,
          "flujo_P_J_a_I_MW": -0.184342262,
          "flujo_Q_J_a_I_MW": -0.187963397
        },
        {
          "I": 16,
          "J": 17,
          "flujo_P_I_a_J_MW": 0.114342262,
          "flujo_Q_I_a_J_MW": 0.116563397,
          "flujo_P_J_a_I_MW": -0.114131513,
          "flujo_Q_J_a_I_MW": -0.116421255
        },
        {
          "I": 17,
          "J": 18,
          "flujo_P_I_a_J_MW": 0.044131513,
          "flujo_Q_I_a_J_MW": 0.045021255,
          "flujo_P_J_a_I_MW": -0.0441,
          "flujo_Q_J_a_I_MW": -0.045
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
          "V_max": 1,
          "V_min": 1
        },
        {
          "nodo": 2,
          "tipo_de_nodo": 1,
          "P_MW": 0.0441,
          "Q_MVAR": 0.045,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 3,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 4,
          "tipo_de_nodo": 1,
          "P_MW": 0.14,
          "Q_MVAR": 0.1428,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 5,
          "tipo_de_nodo": 1,
          "P_MW": 0.0441,
          "Q_MVAR": 0.045,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 6,
          "tipo_de_nodo": 1,
          "P_MW": 0.14,
          "Q_MVAR": 0.1428,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 7,
          "tipo_de_nodo": 1,
          "P_MW": 0.14,
          "Q_MVAR": 0.1428,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 8,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 9,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 10,
          "tipo_de_nodo": 1,
          "P_MW": 0.0441,
          "Q_MVAR": 0.045,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 11,
          "tipo_de_nodo": 1,
          "P_MW": 0.14,
          "Q_MVAR": 0.1428,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 12,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 13,
          "tipo_de_nodo": 1,
          "P_MW": 0.0441,
          "Q_MVAR": 0.045,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 14,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 15,
          "tipo_de_nodo": 1,
          "P_MW": 0.14,
          "Q_MVAR": 0.1428,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 16,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 17,
          "tipo_de_nodo": 1,
          "P_MW": 0.07,
          "Q_MVAR": 0.0714,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 18,
          "tipo_de_nodo": 1,
          "P_MW": 0.0441,
          "Q_MVAR": 0.045,
          "V_max": 1.1,
          "V_min": 0.9
        }
      ]
    };
    
    
    
    
    
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 44.32043185,
        "potencia_atendida_MW": -42.90993185,
        "potencia_generada_adicional_MW": -42.90993185 - 44.32043185, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 3178.745528,
        "costo_deslastre_dolar_per_MWH": 6583.298066,
        "U1": -30.42178791,
        "U2": -1.071036517,
        "U": -15.74641221,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 0.451855145,
        "potencia_atendida_MW": 0.958644855,
        "potencia_generada_adicional_MW": 0.958644855 - 0.451855145, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 103.3037949,
        "costo_deslastre_dolar_per_MWH": 92.57579662,
        "U1": 0.679648958,
        "U2": 0.103849024,
        "U": 0.391748991,
        "resiliencia": "POBRE"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 0.666405486,
        "potencia_atendida_MW": 0.744094514,
        "potencia_generada_adicional_MW": 0.744094514 - 0.666405486, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 189.358495,
        "costo_deslastre_dolar_per_MWH": 133.2806954,
        "U1": 0.527539535,
        "U2": 0.296146204,
        "U": 0.41184287,
        "resiliencia": "POBRE"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 14.85050243,
        "potencia_atendida_MW": -13.44000243,
        "potencia_generada_adicional_MW": -13.44000243 - 14.85050243, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 8467.308547,
        "costo_deslastre_dolar_per_MWH": 2487.143531,
        "U1": -9.528537703,
        "U2": 0.706265159,
        "U": -4.411136272,
        "resiliencia": "POBRE"
      }
    ];
    
    
    
    
    
    let escenario1ConSinRdNiGd = [
      {
        "nodo": 2,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 7.600352699,
        "costo_dolar_por_MW": 760.0352699,
        "potencia_atendida_MW": -7.556252699,
        "_atendido": (-7.556252699 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 7.625274176,
        "costo_dolar_por_MW": 1525.054835,
        "potencia_atendida_MW": -7.555274176,
        "_atendido": (-7.555274176 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 5.595600492,
        "costo_dolar_por_MW": 1119.120098,
        "potencia_atendida_MW": -5.455600492,
        "_atendido": (-5.455600492 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 7.514901338,
        "costo_dolar_por_MW": 751.4901338,
        "potencia_atendida_MW": -7.374901338,
        "_atendido": (-7.374901338 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 7.692629,
        "costo_dolar_por_MW": 769.2629,
        "potencia_atendida_MW": -7.552629,
        "_atendido": (-7.552629 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 7.625274144,
        "costo_dolar_por_MW": 1525.054829,
        "potencia_atendida_MW": -7.555274144,
        "_atendido": (-7.555274144 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.14,
        "costo_dolar_por_MW": 42,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.41,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.41,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 7,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.14,
        "costo_dolar_por_MW": 28,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 7,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 17,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 14,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    
    
    
    let escenario2ConRdSinGd = [
      {
        "nodo": 2,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 9.96031e-7,
        "costo_dolar_por_MW": 9.96031e-5,
        "potencia_atendida_MW": 0.044099004,
        "_atendido": (0.044099004 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 4.97873e-7,
        "costo_dolar_por_MW": 9.95746e-5,
        "potencia_atendida_MW": 0.069999502,
        "_atendido": (0.069999502 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 4.9785e-7,
        "costo_dolar_por_MW": 9.95701e-5,
        "potencia_atendida_MW": 0.139999502,
        "_atendido": (0.139999502 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 9.95833e-7,
        "costo_dolar_por_MW": 9.95833e-5,
        "potencia_atendida_MW": 0.139999004,
        "_atendido": (0.139999004 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 3.31889e-7,
        "costo_dolar_por_MW": 9.95668e-5,
        "potencia_atendida_MW": 0.069999668,
        "_atendido": (0.069999668 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 3.31899e-7,
        "costo_dolar_por_MW": 9.95696e-5,
        "potencia_atendida_MW": 0.069999668,
        "_atendido": (0.069999668 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 9.95829e-7,
        "costo_dolar_por_MW": 9.95829e-5,
        "potencia_atendida_MW": 0.139999004,
        "_atendido": (0.139999004 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 4.9786e-7,
        "costo_dolar_por_MW": 9.9572e-5,
        "potencia_atendida_MW": 0.069999502,
        "_atendido": (0.069999502 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 21,
        "potencia_atendida_MW": 0.07,
        "_atendido": (0.07 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.033075,
        "costo_dolar_por_MW": 3.3075,
        "potencia_atendida_MW": 0.011025,
        "_atendido": (0.011025 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.033075,
        "costo_dolar_por_MW": 3.3075,
        "potencia_atendida_MW": 0.011025,
        "_atendido": (0.011025 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.035,
        "costo_dolar_por_MW": 3.5,
        "potencia_atendida_MW": 0.035,
        "_atendido": (0.035 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.105,
        "costo_dolar_por_MW": 21,
        "potencia_atendida_MW": 0.035,
        "_atendido": (0.035 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.035,
        "costo_dolar_por_MW": 3.5,
        "potencia_atendida_MW": 0.035,
        "_atendido": (0.035 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 17,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.0525,
        "costo_dolar_por_MW": 10.5,
        "potencia_atendida_MW": 0.0175,
        "_atendido": (0.0175 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    
    
    
    let escenario3ConGdSinRd = [
      {
        "nodo": 2,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 1.43284e-6,
        "costo_dolar_por_MW": 0.000143284,
        "potencia_atendida_MW": 0.044098567,
        "_atendido": (0.044098567 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 2.80181e-7,
        "costo_dolar_por_MW": 5.60362e-5,
        "potencia_atendida_MW": 0.06999972,
        "_atendido": (0.06999972 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 2.83012e-7,
        "costo_dolar_por_MW": 5.66023e-5,
        "potencia_atendida_MW": 0.139999717,
        "_atendido": (0.139999717 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 1.48778e-6,
        "costo_dolar_por_MW": 0.000148778,
        "potencia_atendida_MW": 0.139998512,
        "_atendido": (0.139998512 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 1.56536e-7,
        "costo_dolar_por_MW": 4.69608e-5,
        "potencia_atendida_MW": 0.069999843,
        "_atendido": (0.069999843 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 9,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 1.56016e-7,
        "costo_dolar_por_MW": 4.68049e-5,
        "potencia_atendida_MW": 0.069999844,
        "_atendido": (0.069999844 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 1.40966e-6,
        "costo_dolar_por_MW": 0.000140966,
        "potencia_atendida_MW": 0.13999859,
        "_atendido": (0.13999859 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 2.80009e-7,
        "costo_dolar_por_MW": 5.60018e-5,
        "potencia_atendida_MW": 0.06999972,
        "_atendido": (0.06999972 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.14,
        "costo_dolar_por_MW": 42,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.41,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 4.41,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 7,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.14,
        "costo_dolar_por_MW": 28,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 7,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 17,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 14,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    
    
    
    let escenario4ConGdYRd = [
      {
        "nodo": 2,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 2.343858957,
        "costo_dolar_por_MW": 234.3858957,
        "potencia_atendida_MW": -2.299758957,
        "_atendido": (-2.299758957 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 2.36945462,
        "costo_dolar_por_MW": 473.8909239,
        "potencia_atendida_MW": -2.29945462,
        "_atendido": (-2.29945462 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 6,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 2.438656025,
        "costo_dolar_por_MW": 487.731205,
        "potencia_atendida_MW": -2.298656025,
        "_atendido": (-2.298656025 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 7,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 2.438655693,
        "costo_dolar_por_MW": 243.8655693,
        "potencia_atendida_MW": -2.298655693,
        "_atendido": (-2.298655693 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 2.369461118,
        "costo_dolar_por_MW": 710.8383354,
        "potencia_atendida_MW": -2.299461118,
        "_atendido": (-2.299461118 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 2.438566018,
        "costo_dolar_por_MW": 243.8566018,
        "potencia_atendida_MW": -2.298566018,
        "_atendido": (-2.298566018 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.07,
        "costo_dolar_por_MW": 21,
        "potencia_atendida_MW": 0.07,
        "_atendido": (0.07 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.033075,
        "costo_dolar_por_MW": 3.3075,
        "potencia_atendida_MW": 0.011025,
        "_atendido": (0.011025 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.033075,
        "costo_dolar_por_MW": 3.3075,
        "potencia_atendida_MW": 0.011025,
        "_atendido": (0.011025 / 0.0441) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.035,
        "costo_dolar_por_MW": 3.5,
        "potencia_atendida_MW": 0.035,
        "_atendido": (0.035 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.14,
        "potencia_deslastrada_MW": 0.105,
        "costo_dolar_por_MW": 21,
        "potencia_atendida_MW": 0.035,
        "_atendido": (0.035 / 0.14) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.035,
        "costo_dolar_por_MW": 3.5,
        "potencia_atendida_MW": 0.035,
        "_atendido": (0.035 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 17,
        "carga_MW": 0.07,
        "potencia_deslastrada_MW": 0.0525,
        "costo_dolar_por_MW": 10.5,
        "potencia_atendida_MW": 0.0175,
        "_atendido": (0.0175 / 0.07) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 0.0441,
        "potencia_deslastrada_MW": 0.0441,
        "costo_dolar_por_MW": 13.23,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.0441) * 100 // Calculando el porcentaje atendido
      }
    ];
    
    
    

  
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="22"){
   
    let generadores = {
      "generators": [
        {
          "nodo": 0,
          "PG_MW": 0,
          "QG_MW": 10,
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
          "flujo_P_I_a_J_MW": 0.680053602,
          "flujo_Q_I_a_J_MW": 0.666479664,
          "flujo_P_J_a_I_MW": -0.677308121,
          "flujo_Q_J_a_I_MW": -0.665125656
        },
        {
          "I": 2,
          "J": 3,
          "flujo_P_I_a_J_MW": 0.016780327,
          "flujo_Q_I_a_J_MW": 0.020910169,
          "flujo_P_J_a_I_MW": -0.01678,
          "flujo_Q_J_a_I_MW": -0.02091
        },
        {
          "I": 2,
          "J": 4,
          "flujo_P_I_a_J_MW": 0.643747794,
          "flujo_Q_I_a_J_MW": 0.623305487,
          "flujo_P_J_a_I_MW": -0.64013184,
          "flujo_Q_J_a_I_MW": -0.621443431
        },
        {
          "I": 4,
          "J": 5,
          "flujo_P_I_a_J_MW": 0.048265734,
          "flujo_Q_I_a_J_MW": 0.057003021,
          "flujo_P_J_a_I_MW": -0.048256703,
          "flujo_Q_J_a_I_MW": -0.056998388
        },
        {
          "I": 4,
          "J": 9,
          "flujo_P_I_a_J_MW": 0.558066106,
          "flujo_Q_I_a_J_MW": 0.527120411,
          "flujo_P_J_a_I_MW": -0.554393015,
          "flujo_Q_J_a_I_MW": -0.525228752
        },
        {
          "I": 5,
          "J": 6,
          "flujo_P_I_a_J_MW": 0.033696703,
          "flujo_Q_I_a_J_MW": 0.044478388,
          "flujo_P_J_a_I_MW": -0.033662453,
          "flujo_Q_J_a_I_MW": -0.044460748
        },
        {
          "I": 6,
          "J": 7,
          "flujo_P_I_a_J_MW": 0.008821107,
          "flujo_Q_I_a_J_MW": 0.011660055,
          "flujo_P_J_a_I_MW": -0.008821,
          "flujo_Q_J_a_I_MW": -0.01166
        },
        {
          "I": 6,
          "J": 8,
          "flujo_P_I_a_J_MW": 0.014351346,
          "flujo_Q_I_a_J_MW": 0.018590693,
          "flujo_P_J_a_I_MW": -0.01435,
          "flujo_Q_J_a_I_MW": -0.01859
        },
        {
          "I": 9,
          "J": 10,
          "flujo_P_I_a_J_MW": 0.014350256,
          "flujo_Q_I_a_J_MW": 0.018590132,
          "flujo_P_J_a_I_MW": -0.01435,
          "flujo_Q_J_a_I_MW": -0.01859
        },
        {
          "I": 9,
          "J": 11,
          "flujo_P_I_a_J_MW": 0.52073276,
          "flujo_Q_I_a_J_MW": 0.48076862,
          "flujo_P_J_a_I_MW": -0.517859187,
          "flujo_Q_J_a_I_MW": -0.479286708
        },
        {
          "I": 11,
          "J": 12,
          "flujo_P_I_a_J_MW": 0.016270301,
          "flujo_Q_I_a_J_MW": 0.019480155,
          "flujo_P_J_a_I_MW": -0.01627,
          "flujo_Q_J_a_I_MW": -0.01948
        },
        {
          "I": 11,
          "J": 13,
          "flujo_P_I_a_J_MW": 0.485318886,
          "flujo_Q_I_a_J_MW": 0.440326553,
          "flujo_P_J_a_I_MW": -0.483871506,
          "flujo_Q_J_a_I_MW": -0.4395812
        },
        {
          "I": 13,
          "J": 14,
          "flujo_P_I_a_J_MW": 0.401741506,
          "flujo_Q_I_a_J_MW": 0.3679312,
          "flujo_P_J_a_I_MW": -0.399074526,
          "flujo_Q_J_a_I_MW": -0.366557425
        },
        {
          "I": 14,
          "J": 15,
          "flujo_P_I_a_J_MW": 0.034710403,
          "flujo_Q_I_a_J_MW": 0.030120213,
          "flujo_P_J_a_I_MW": -0.03471,
          "flujo_Q_J_a_I_MW": -0.03012
        },
        {
          "I": 14,
          "J": 16,
          "flujo_P_I_a_J_MW": 0.329654123,
          "flujo_Q_I_a_J_MW": 0.306317212,
          "flujo_P_J_a_I_MW": -0.329557937,
          "flujo_Q_J_a_I_MW": -0.306267624
        },
        {
          "I": 16,
          "J": 17,
          "flujo_P_I_a_J_MW": 0.249247937,
          "flujo_Q_I_a_J_MW": 0.236147624,
          "flujo_P_J_a_I_MW": -0.248918972,
          "flujo_Q_J_a_I_MW": -0.235978226
        },
        {
          "I": 17,
          "J": 18,
          "flujo_P_I_a_J_MW": 0.049623924,
          "flujo_Q_I_a_J_MW": 0.047822018,
          "flujo_P_J_a_I_MW": -0.04962,
          "flujo_Q_J_a_I_MW": -0.04782
        },
        {
          "I": 17,
          "J": 19,
          "flujo_P_I_a_J_MW": 0.149675048,
          "flujo_Q_I_a_J_MW": 0.140336208,
          "flujo_P_J_a_I_MW": -0.149464691,
          "flujo_Q_J_a_I_MW": -0.140227768
        },
        {
          "I": 19,
          "J": 20,
          "flujo_P_I_a_J_MW": 0.105694691,
          "flujo_Q_I_a_J_MW": 0.101297768,
          "flujo_P_J_a_I_MW": -0.105670531,
          "flujo_Q_J_a_I_MW": -0.101285426
        },
        {
          "I": 20,
          "J": 21,
          "flujo_P_I_a_J_MW": 0.037322042,
          "flujo_Q_I_a_J_MW": 0.035961055,
          "flujo_P_J_a_I_MW": -0.03732,
          "flujo_Q_J_a_I_MW": -0.03596
        },
        {
          "I": 20,
          "J": 22,
          "flujo_P_I_a_J_MW": 0.031028488,
          "flujo_Q_I_a_J_MW": 0.029364371,
          "flujo_P_J_a_I_MW": -0.03102,
          "flujo_Q_J_a_I_MW": -0.02936
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
          "V_max": 1,
          "V_min": 1
        },
        {
          "nodo": 2,
          "tipo_de_nodo": 1,
          "P_MW": 0.01678,
          "Q_MVAR": 0.02091,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 3,
          "tipo_de_nodo": 1,
          "P_MW": 0.01678,
          "Q_MVAR": 0.02091,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 4,
          "tipo_de_nodo": 1,
          "P_MW": 0.0338,
          "Q_MVAR": 0.03732,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 5,
          "tipo_de_nodo": 1,
          "P_MW": 0.01456,
          "Q_MVAR": 0.01252,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 6,
          "tipo_de_nodo": 1,
          "P_MW": 0.01049,
          "Q_MVAR": 0.01421,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 7,
          "tipo_de_nodo": 1,
          "P_MW": 0.008821,
          "Q_MVAR": 0.01166,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 8,
          "tipo_de_nodo": 1,
          "P_MW": 0.01435,
          "Q_MVAR": 0.01859,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 9,
          "tipo_de_nodo": 1,
          "P_MW": 0.01931,
          "Q_MVAR": 0.02587,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 10,
          "tipo_de_nodo": 1,
          "P_MW": 0.01435,
          "Q_MVAR": 0.01859,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 11,
          "tipo_de_nodo": 1,
          "P_MW": 0.01627,
          "Q_MVAR": 0.01948,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 12,
          "tipo_de_nodo": 1,
          "P_MW": 0.01627,
          "Q_MVAR": 0.01948,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 13,
          "tipo_de_nodo": 1,
          "P_MW": 0.08213,
          "Q_MVAR": 0.07165,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 14,
          "tipo_de_nodo": 1,
          "P_MW": 0.03471,
          "Q_MVAR": 0.03012,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 15,
          "tipo_de_nodo": 1,
          "P_MW": 0.03471,
          "Q_MVAR": 0.03012,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 16,
          "tipo_de_nodo": 1,
          "P_MW": 0.08031,
          "Q_MVAR": 0.07012,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 17,
          "tipo_de_nodo": 1,
          "P_MW": 0.04962,
          "Q_MVAR": 0.04782,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 18,
          "tipo_de_nodo": 1,
          "P_MW": 0.04962,
          "Q_MVAR": 0.04782,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 19,
          "tipo_de_nodo": 1,
          "P_MW": 0.04377,
          "Q_MVAR": 0.03893,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 20,
          "tipo_de_nodo": 1,
          "P_MW": 0.03732,
          "Q_MVAR": 0.03596,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 21,
          "tipo_de_nodo": 1,
          "P_MW": 0.03732,
          "Q_MVAR": 0.03596,
          "V_max": 1.1,
          "V_min": 0.9
        },
        {
          "nodo": 22,
          "tipo_de_nodo": 1,
          "P_MW": 0.03102,
          "Q_MVAR": 0.02936,
          "V_max": 1.1,
          "V_min": 0.9
        }
      ]
    };
    
  
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 0.62369,
        "potencia_atendida_MW": 0.038621,
        "potencia_generada_adicional_MW": 0.038621 - 0.62369, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 131.1812003,
        "costo_deslastre_dolar_per_MWH": 121.3590003,
        "U1": 0.058312485,
        "U2": 0.074875059,
        "U": 0.066593772,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 0.423040061,
        "potencia_atendida_MW": 0.239270939,
        "potencia_generada_adicional_MW": 0.239270939 - 0.423040061, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 97.75235485,
        "costo_deslastre_dolar_per_MWH": 78.66855489,
        "U1": 0.361266745,
        "U2": 0.195225987,
        "U": 0.278246366,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 0.449819327,
        "potencia_atendida_MW": 0.212491673,
        "potencia_generada_adicional_MW": 0.212491673 - 0.449819327, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 95.79185735,
        "costo_deslastre_dolar_per_MWH": 72.92927604,
        "U1": 0.320833676,
        "U2": 0.23866936,
        "U": 0.279751518,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 0.289558468,
        "potencia_atendida_MW": 0.372752532,
        "potencia_generada_adicional_MW": 0.372752532 - 0.289558468, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 72.69095827,
        "costo_deslastre_dolar_per_MWH": 43.59512618,
        "U1": 0.56280589,
        "U2": 0.400267554,
        "U": 0.481536722,
        "resiliencia": "MALA"
      }
    ];
    
   
    
    let escenario1ConSinRdNiGd = [
      {
        "nodo": 2,
        "carga_MW": 0.01678,
        "potencia_deslastrada_MW": 0.01678,
        "costo_dolar_por_MW": 1.677999969,
        "potencia_atendida_MW": 3.05725E-10,
        "_atendido": (3.05725E-10 / 0.01678) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.01678,
        "potencia_deslastrada_MW": 0.01678,
        "costo_dolar_por_MW": 3.35600006,
        "potencia_atendida_MW": -3.00624E-10,
        "_atendido": (-3.00624E-10 / 0.01678) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.0338,
        "potencia_deslastrada_MW": 0.0338,
        "costo_dolar_por_MW": 6.759999991,
        "potencia_atendida_MW": 4.68508E-11,
        "_atendido": (4.68508E-11 / 0.0338) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.01456,
        "potencia_deslastrada_MW": 0.01456,
        "costo_dolar_por_MW": 4.368,
        "potencia_atendida_MW": 2.97262E-14,
        "_atendido": (2.97262E-14 / 0.01456) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.01435,
        "potencia_deslastrada_MW": 0.01435,
        "costo_dolar_por_MW": 4.305000051,
        "potencia_atendida_MW": -1.68707E-10,
        "_atendido": (-1.68707E-10 / 0.01435) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.01627,
        "potencia_deslastrada_MW": 0.01627,
        "costo_dolar_por_MW": 4.88100009,
        "potencia_atendida_MW": -2.99505E-10,
        "_atendido": (-2.99505E-10 / 0.01627) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.01627,
        "potencia_deslastrada_MW": 0.01627,
        "costo_dolar_por_MW": 3.253999939,
        "potencia_atendida_MW": 3.04432E-10,
        "_atendido": (3.04432E-10 / 0.01627) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.03471,
        "potencia_deslastrada_MW": 0.03471,
        "costo_dolar_por_MW": 6.942000064,
        "potencia_atendida_MW": -3.22147E-10,
        "_atendido": (-3.22147E-10 / 0.03471) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.03471,
        "potencia_deslastrada_MW": 0.03471,
        "costo_dolar_por_MW": 3.470999967,
        "potencia_atendida_MW": 3.33544E-10,
        "_atendido": (3.33544E-10 / 0.03471) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 17,
        "carga_MW": 0.04962,
        "potencia_deslastrada_MW": 0.049619999,
        "costo_dolar_por_MW": 9.923999876,
        "potencia_atendida_MW": 6.17608E-10,
        "_atendido": (6.17608E-10 / 0.04962) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 0.04962,
        "potencia_deslastrada_MW": 0.049620001,
        "costo_dolar_por_MW": 19.84800024,
        "potencia_atendida_MW": -5.87625E-10,
        "_atendido": (-5.87625E-10 / 0.04962) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 20,
        "carga_MW": 0.03732,
        "potencia_deslastrada_MW": 0.03732,
        "costo_dolar_por_MW": 11.1960001,
        "potencia_atendida_MW": -3.23698E-10,
        "_atendido": (-3.23698E-10 / 0.03732) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 21,
        "carga_MW": 0.03732,
        "potencia_deslastrada_MW": 0.03732,
        "costo_dolar_por_MW": 7.463999933,
        "potencia_atendida_MW": 3.36038E-10,
        "_atendido": (3.36038E-10 / 0.03732) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.01435,
        "potencia_deslastrada_MW": 0.01435,
        "costo_dolar_por_MW": 1.435,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.01435) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.08213,
        "potencia_deslastrada_MW": 0.08213,
        "costo_dolar_por_MW": 8.213,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.08213) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 0.08031,
        "potencia_deslastrada_MW": 0.08031,
        "costo_dolar_por_MW": 8.031,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.08031) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 19,
        "carga_MW": 0.04377,
        "potencia_deslastrada_MW": 0.04377,
        "costo_dolar_por_MW": 13.131,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.04377) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 22,
        "carga_MW": 0.03102,
        "potencia_deslastrada_MW": 0.03102,
        "costo_dolar_por_MW": 3.102,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.03102) * 100 // Calculando el porcentaje atendido
      }
    ];
    
  
    
    let escenario2ConRdSinGd = [
      {
        "nodo": 2,
        "carga_MW": 0.01678,
        "potencia_deslastrada_MW": 0.016778452,
        "costo_dolar_por_MW": 1.677845187,
        "potencia_atendida_MW": 1.54813e-6,
        "_atendido": (1.54813e-6 / 0.01678) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.01678,
        "potencia_deslastrada_MW": 0.012587587,
        "costo_dolar_por_MW": 2.51751743,
        "potencia_atendida_MW": 0.004192413,
        "_atendido": (0.004192413 / 0.01678) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.0338,
        "potencia_deslastrada_MW": 0.027821386,
        "costo_dolar_por_MW": 5.564277183,
        "potencia_atendida_MW": 0.005978614,
        "_atendido": (0.005978614 / 0.0338) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.01456,
        "potencia_deslastrada_MW": 2.86539e-6,
        "costo_dolar_por_MW": 0.000859617,
        "potencia_atendida_MW": 0.014557135,
        "_atendido": (0.014557135 / 0.01456) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.01435,
        "potencia_deslastrada_MW": 0.002349678,
        "costo_dolar_por_MW": 0.704903287,
        "potencia_atendida_MW": 0.012000322,
        "_atendido": (0.012000322 / 0.01435) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.01627,
        "potencia_deslastrada_MW": 0.01627,
        "costo_dolar_por_MW": 4.881000099,
        "potencia_atendida_MW": -3.30743e-10,
        "_atendido": (-3.30743e-10 / 0.01627) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.01627,
        "potencia_deslastrada_MW": 0.01627,
        "costo_dolar_por_MW": 3.253999933,
        "potencia_atendida_MW": 3.36184e-10,
        "_atendido": (3.36184e-10 / 0.01627) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.03471,
        "potencia_deslastrada_MW": 0.008686216,
        "costo_dolar_por_MW": 1.737243185,
        "potencia_atendida_MW": 0.026023784,
        "_atendido": (0.026023784 / 0.03471) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.03471,
        "potencia_deslastrada_MW": 0.034706181,
        "costo_dolar_por_MW": 3.470618116,
        "potencia_atendida_MW": 3.81884e-6,
        "_atendido": (3.81884e-6 / 0.03471) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 17,
        "carga_MW": 0.04962,
        "potencia_deslastrada_MW": 0.049618126,
        "costo_dolar_por_MW": 9.923625255,
        "potencia_atendida_MW": 1.87372e-6,
        "_atendido": (1.87372e-6 / 0.04962) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 0.04962,
        "potencia_deslastrada_MW": 0.037218067,
        "costo_dolar_por_MW": 14.88722673,
        "potencia_atendida_MW": 0.012401933,
        "_atendido": (0.012401933 / 0.04962) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 20,
        "carga_MW": 0.03732,
        "potencia_deslastrada_MW": 0.009338883,
        "costo_dolar_por_MW": 2.801664916,
        "potencia_atendida_MW": 0.027981117,
        "_atendido": (0.027981117 / 0.03732) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 21,
        "carga_MW": 0.03732,
        "potencia_deslastrada_MW": 0.03731512,
        "costo_dolar_por_MW": 7.463023954,
        "potencia_atendida_MW": 4.88023e-6,
        "_atendido": (4.88023e-6 / 0.03732) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.01435,
        "potencia_deslastrada_MW": 0.007175,
        "costo_dolar_por_MW": 0.7175,
        "potencia_atendida_MW": 0.007175,
        "_atendido": (0.007175 / 0.01435) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.08213,
        "potencia_deslastrada_MW": 0.0615975,
        "costo_dolar_por_MW": 6.15975,
        "potencia_atendida_MW": 0.0205325,
        "_atendido": (0.0205325 / 0.08213) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 0.08031,
        "potencia_deslastrada_MW": 0.040155,
        "costo_dolar_por_MW": 4.0155,
        "potencia_atendida_MW": 0.040155,
        "_atendido": (0.040155 / 0.08031) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 19,
        "carga_MW": 0.04377,
        "potencia_deslastrada_MW": 0.021885,
        "costo_dolar_por_MW": 6.5655,
        "potencia_atendida_MW": 0.021885,
        "_atendido": (0.021885 / 0.04377) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 22,
        "carga_MW": 0.03102,
        "potencia_deslastrada_MW": 0.023265,
        "costo_dolar_por_MW": 2.3265,
        "potencia_atendida_MW": 0.007755,
        "_atendido": (0.007755 / 0.03102) * 100 // Calculando el porcentaje atendido
      }
    ];
    
  
    
    let escenario3ConGdSinRd = [
      {
        "nodo": 2,
        "carga_MW": 0.01678,
        "potencia_deslastrada_MW": 0.01678,
        "costo_dolar_por_MW": 1.677999969,
        "potencia_atendida_MW": 3.05725e-10,
        "_atendido": (3.05725e-10 / 0.01678) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.01678,
        "potencia_deslastrada_MW": 0.01678,
        "costo_dolar_por_MW": 3.35600006,
        "potencia_atendida_MW": -3.00624e-10,
        "_atendido": (-3.00624e-10 / 0.01678) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.0338,
        "potencia_deslastrada_MW": 0.0338,
        "costo_dolar_por_MW": 6.759999991,
        "potencia_atendida_MW": 4.68508e-11,
        "_atendido": (4.68508e-11 / 0.0338) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.01456,
        "potencia_deslastrada_MW": 0.01456,
        "costo_dolar_por_MW": 4.368,
        "potencia_atendida_MW": 2.97262e-14,
        "_atendido": (2.97262e-14 / 0.01456) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.01435,
        "potencia_deslastrada_MW": 0.01435,
        "costo_dolar_por_MW": 4.305000051,
        "potencia_atendida_MW": -1.68707e-10,
        "_atendido": (-1.68707e-10 / 0.01435) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.01627,
        "potencia_deslastrada_MW": 0.01627,
        "costo_dolar_por_MW": 4.88100009,
        "potencia_atendida_MW": -2.99505e-10,
        "_atendido": (-2.99505e-10 / 0.01627) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.01627,
        "potencia_deslastrada_MW": 0.01627,
        "costo_dolar_por_MW": 3.253999939,
        "potencia_atendida_MW": 3.04432e-10,
        "_atendido": (3.04432e-10 / 0.01627) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.03471,
        "potencia_deslastrada_MW": 0.03471,
        "costo_dolar_por_MW": 6.942000064,
        "potencia_atendida_MW": -3.22147e-10,
        "_atendido": (-3.22147e-10 / 0.03471) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.03471,
        "potencia_deslastrada_MW": 0.03471,
        "costo_dolar_por_MW": 3.470999967,
        "potencia_atendida_MW": 3.33544e-10,
        "_atendido": (3.33544e-10 / 0.03471) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 17,
        "carga_MW": 0.04962,
        "potencia_deslastrada_MW": 2.94458e-6,
        "costo_dolar_por_MW": 0.000588917,
        "potencia_atendida_MW": 0.049617055,
        "_atendido": (0.049617055 / 0.04962) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 0.04962,
        "potencia_deslastrada_MW": 1.11811e-6,
        "costo_dolar_por_MW": 0.000447243,
        "potencia_atendida_MW": 0.049618882,
        "_atendido": (0.049618882 / 0.04962) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 20,
        "carga_MW": 0.03732,
        "potencia_deslastrada_MW": 1.86929e-6,
        "costo_dolar_por_MW": 0.000560787,
        "potencia_atendida_MW": 0.037318131,
        "_atendido": (0.037318131 / 0.03732) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 21,
        "carga_MW": 0.03732,
        "potencia_deslastrada_MW": 3.39481e-6,
        "costo_dolar_por_MW": 0.000678962,
        "potencia_atendida_MW": 0.037316605,
        "_atendido": (0.037316605 / 0.03732) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.01435,
        "potencia_deslastrada_MW": 0.01435,
        "costo_dolar_por_MW": 1.435,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.01435) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.08213,
        "potencia_deslastrada_MW": 0.08213,
        "costo_dolar_por_MW": 8.213,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.08213) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 0.08031,
        "potencia_deslastrada_MW": 0.08031,
        "costo_dolar_por_MW": 8.031,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.08031) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 19,
        "carga_MW": 0.04377,
        "potencia_deslastrada_MW": 0.04377,
        "costo_dolar_por_MW": 13.131,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.04377) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 22,
        "carga_MW": 0.03102,
        "potencia_deslastrada_MW": 0.03102,
        "costo_dolar_por_MW": 3.102,
        "potencia_atendida_MW": 0,
        "_atendido": (0 / 0.03102) * 100 // Calculando el porcentaje atendido
      }
    ];
    
  
    
    let escenario4ConGdYRd = [
      {
        "nodo": 2,
        "carga_MW": 0.01678,
        "potencia_deslastrada_MW": 0.016778452,
        "costo_dolar_por_MW": 1.677845187,
        "potencia_atendida_MW": 1.54813e-6,
        "_atendido": (1.54813e-6 / 0.01678) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 3,
        "carga_MW": 0.01678,
        "potencia_deslastrada_MW": 0.012587587,
        "costo_dolar_por_MW": 2.51751743,
        "potencia_atendida_MW": 0.004192413,
        "_atendido": (0.004192413 / 0.01678) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 4,
        "carga_MW": 0.0338,
        "potencia_deslastrada_MW": 0.027821386,
        "costo_dolar_por_MW": 5.564277183,
        "potencia_atendida_MW": 0.005978614,
        "_atendido": (0.005978614 / 0.0338) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 5,
        "carga_MW": 0.01456,
        "potencia_deslastrada_MW": 2.86539e-6,
        "costo_dolar_por_MW": 0.000859617,
        "potencia_atendida_MW": 0.014557135,
        "_atendido": (0.014557135 / 0.01456) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 10,
        "carga_MW": 0.01435,
        "potencia_deslastrada_MW": 0.002349678,
        "costo_dolar_por_MW": 0.704903287,
        "potencia_atendida_MW": 0.012000322,
        "_atendido": (0.012000322 / 0.01435) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 11,
        "carga_MW": 0.01627,
        "potencia_deslastrada_MW": 0.01627,
        "costo_dolar_por_MW": 4.881000099,
        "potencia_atendida_MW": -3.30743e-10,
        "_atendido": (-3.30743e-10 / 0.01627) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 12,
        "carga_MW": 0.01627,
        "potencia_deslastrada_MW": 0.01627,
        "costo_dolar_por_MW": 3.253999933,
        "potencia_atendida_MW": 3.36184e-10,
        "_atendido": (3.36184e-10 / 0.01627) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 14,
        "carga_MW": 0.03471,
        "potencia_deslastrada_MW": 0.008686216,
        "costo_dolar_por_MW": 1.737243185,
        "potencia_atendida_MW": 0.026023784,
        "_atendido": (0.026023784 / 0.03471) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 15,
        "carga_MW": 0.03471,
        "potencia_deslastrada_MW": 0.034706181,
        "costo_dolar_por_MW": 3.470618116,
        "potencia_atendida_MW": 3.81884e-6,
        "_atendido": (3.81884e-6 / 0.03471) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 17,
        "carga_MW": 0.04962,
        "potencia_deslastrada_MW": 3.2028e-6,
        "costo_dolar_por_MW": 0.000640559,
        "potencia_atendida_MW": 0.049616797,
        "_atendido": (0.049616797 / 0.04962) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 18,
        "carga_MW": 0.04962,
        "potencia_deslastrada_MW": 1.21583e-6,
        "costo_dolar_por_MW": 0.000486333,
        "potencia_atendida_MW": 0.049618784,
        "_atendido": (0.049618784 / 0.04962) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 20,
        "carga_MW": 0.03732,
        "potencia_deslastrada_MW": 1.48293e-6,
        "costo_dolar_por_MW": 0.000444878,
        "potencia_atendida_MW": 0.037318517,
        "_atendido": (0.037318517 / 0.03732) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 21,
        "carga_MW": 0.03732,
        "potencia_deslastrada_MW": 2.7019e-6,
        "costo_dolar_por_MW": 0.000540379,
        "potencia_atendida_MW": 0.037317298,
        "_atendido": (0.037317298 / 0.03732) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 8,
        "carga_MW": 0.01435,
        "potencia_deslastrada_MW": 0.007175,
        "costo_dolar_por_MW": 0.7175,
        "potencia_atendida_MW": 0.007175,
        "_atendido": (0.007175 / 0.01435) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 13,
        "carga_MW": 0.08213,
        "potencia_deslastrada_MW": 0.0615975,
        "costo_dolar_por_MW": 6.15975,
        "potencia_atendida_MW": 0.0205325,
        "_atendido": (0.0205325 / 0.08213) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 16,
        "carga_MW": 0.08031,
        "potencia_deslastrada_MW": 0.040155,
        "costo_dolar_por_MW": 4.0155,
        "potencia_atendida_MW": 0.040155,
        "_atendido": (0.040155 / 0.08031) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 19,
        "carga_MW": 0.04377,
        "potencia_deslastrada_MW": 0.021885,
        "costo_dolar_por_MW": 6.5655,
        "potencia_atendida_MW": 0.021885,
        "_atendido": (0.021885 / 0.04377) * 100 // Calculando el porcentaje atendido
      },
      {
        "nodo": 22,
        "carga_MW": 0.03102,
        "potencia_deslastrada_MW": 0.023265,
        "costo_dolar_por_MW": 2.3265,
        "potencia_atendida_MW": 0.007755,
        "_atendido": (0.007755 / 0.03102) * 100 // Calculando el porcentaje atendido
      }
    ];
 
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="30"){
   
    let generadores = {
      "generators": [
        {
          "nodo": 1,
          "PG_MW": 23.54,
          "QG_MW": 0,
          "Q_MAX_MVAR": 150,
          "Q_MIN_MVAR": -20,
          "P_MAX_MW": 80,
          "costo_marginal_dolar_per_MW": 2.02
        },
        {
          "nodo": 2,
          "PG_MW": 60.97,
          "QG_MW": 0,
          "Q_MAX_MVAR": 60,
          "Q_MIN_MVAR": -20,
          "P_MAX_MW": 80,
          "costo_marginal_dolar_per_MW": 1.7675
        },
        {
          "nodo": 22,
          "PG_MW": 21.59,
          "QG_MW": 0,
          "Q_MAX_MVAR": 62.5,
          "Q_MIN_MVAR": -15,
          "P_MAX_MW": 50,
          "costo_marginal_dolar_per_MW": 1.0625
        },
        {
          "nodo": 27,
          "PG_MW": 26.91,
          "QG_MW": 0,
          "Q_MAX_MVAR": 48.7,
          "Q_MIN_MVAR": -15,
          "P_MAX_MW": 55,
          "costo_marginal_dolar_per_MW": 3.25834
        },
        {
          "nodo": 23,
          "PG_MW": 19.2,
          "QG_MW": 0,
          "Q_MAX_MVAR": 40,
          "Q_MIN_MVAR": -10,
          "P_MAX_MW": 30,
          "costo_marginal_dolar_per_MW": 3.025
        },
        {
          "nodo": 13,
          "PG_MW": 37,
          "QG_MW": 0,
          "Q_MAX_MVAR": 44.7,
          "Q_MIN_MVAR": -15,
          "P_MAX_MW": 40,
          "costo_marginal_dolar_per_MW": 3.025
        }
      ]
    };
    
    
  

    let lineas = {
      "lines": [
        {
          "I": 1,
          "J": 2,
          "flujo_P_I_a_J_MW": 21.04311622,
          "flujo_Q_I_a_J_MW": -2.336084992,
          "flujo_P_J_a_I_MW": -20.95118327,
          "flujo_Q_J_a_I_MW": -0.272533104
        },
        {
          "I": 1,
          "J": 3,
          "flujo_P_I_a_J_MW": 20.49896283,
          "flujo_Q_I_a_J_MW": -3.10034809,
          "flujo_P_J_a_I_MW": -20.27888908,
          "flujo_Q_J_a_I_MW": 2.017202429
        },
        {
          "I": 2,
          "J": 4,
          "flujo_P_I_a_J_MW": 18.63264823,
          "flujo_Q_I_a_J_MW": -5.851438138,
          "flujo_P_J_a_I_MW": -18.40018548,
          "flujo_Q_J_a_I_MW": 4.598767074
        },
        {
          "I": 3,
          "J": 4,
          "flujo_P_I_a_J_MW": 17.87888907,
          "flujo_Q_I_a_J_MW": -3.217202427,
          "flujo_P_J_a_I_MW": -17.84431076,
          "flujo_Q_J_a_I_MW": 3.355515684
        },
        {
          "I": 2,
          "J": 5,
          "flujo_P_I_a_J_MW": 14.36155073,
          "flujo_Q_I_a_J_MW": -0.686953007,
          "flujo_P_J_a_I_MW": -14.25385161,
          "flujo_Q_J_a_I_MW": -0.78349811
        },
        {
          "I": 2,
          "J": 6,
          "flujo_P_I_a_J_MW": 21.65883696,
          "flujo_Q_I_a_J_MW": -4.214316253,
          "flujo_P_J_a_I_MW": -21.35835767,
          "flujo_Q_J_a_I_MW": 3.212441262
        },
        {
          "I": 4,
          "J": 6,
          "flujo_P_I_a_J_MW": 17.5801826,
          "flujo_Q_I_a_J_MW": 5.684356106,
          "flujo_P_J_a_I_MW": -17.54437757,
          "flujo_Q_J_a_I_MW": -5.541135996
        },
        {
          "I": 5,
          "J": 7,
          "flujo_P_I_a_J_MW": 14.25385161,
          "flujo_Q_I_a_J_MW": 0.962736299,
          "flujo_P_J_a_I_MW": -14.14507549,
          "flujo_Q_J_a_I_MW": -1.636368093
        },
        {
          "I": 6,
          "J": 7,
          "flujo_P_I_a_J_MW": 8.704283117,
          "flujo_Q_I_a_J_MW": 8.459527797,
          "flujo_P_J_a_I_MW": -8.654924491,
          "flujo_Q_J_a_I_MW": -9.263631906
        },
        {
          "I": 6,
          "J": 8,
          "flujo_P_I_a_J_MW": 23.82193488,
          "flujo_Q_I_a_J_MW": 21.36622113,
          "flujo_P_J_a_I_MW": -23.7136237,
          "flujo_Q_J_a_I_MW": -20.93297643
        },
        {
          "I": 6,
          "J": 9,
          "flujo_P_I_a_J_MW": 7.269862587,
          "flujo_Q_I_a_J_MW": -8.27231017,
          "flujo_P_J_a_I_MW": -7.269862587,
          "flujo_Q_J_a_I_MW": 8.541704855
        },
        {
          "I": 6,
          "J": 10,
          "flujo_P_I_a_J_MW": 4.154207196,
          "flujo_Q_I_a_J_MW": -4.727034379,
          "flujo_P_J_a_I_MW": -4.154207196,
          "flujo_Q_J_a_I_MW": 4.961609343
        },
        {
          "I": 9,
          "J": 11,
          "flujo_P_I_a_J_MW": 0,
          "flujo_Q_I_a_J_MW": 0,
          "flujo_P_J_a_I_MW": 0,
          "flujo_Q_J_a_I_MW": 0
        },
        {
          "I": 9,
          "J": 10,
          "flujo_P_I_a_J_MW": 7.269862606,
          "flujo_Q_I_a_J_MW": -8.541704837,
          "flujo_P_J_a_I_MW": -7.269862606,
          "flujo_Q_J_a_I_MW": 8.682816338
        },
        {
          "I": 4,
          "J": 12,
          "flujo_P_I_a_J_MW": 11.06431365,
          "flujo_Q_I_a_J_MW": -15.2386388,
          "flujo_P_J_a_I_MW": -11.06431365,
          "flujo_Q_J_a_I_MW": 16.20573076
        },
        {
          "I": 12,
          "J": 13,
          "flujo_P_I_a_J_MW": -16.20020172,
          "flujo_Q_I_a_J_MW": -34.01099463,
          "flujo_P_J_a_I_MW": 16.20020172,
          "flujo_Q_J_a_I_MW": 35.93033995
        },
        {
          "I": 12,
          "J": 14,
          "flujo_P_I_a_J_MW": 4.684269449,
          "flujo_Q_I_a_J_MW": 2.079071746,
          "flujo_P_J_a_I_MW": -4.653822727,
          "flujo_Q_J_a_I_MW": -2.013103847
        },
        {
          "I": 12,
          "J": 15,
          "flujo_P_I_a_J_MW": 6.070788843,
          "flujo_Q_I_a_J_MW": 3.181570603,
          "flujo_P_J_a_I_MW": -6.039022638,
          "flujo_Q_J_a_I_MW": -3.122576222
        },
        {
          "I": 12,
          "J": 16,
          "flujo_P_I_a_J_MW": 5.309456967,
          "flujo_Q_I_a_J_MW": 5.044621908,
          "flujo_P_J_a_I_MW": -5.262822962,
          "flujo_Q_J_a_I_MW": -4.940990787
        },
        {
          "I": 14,
          "J": 15,
          "flujo_P_I_a_J_MW": -1.546177216,
          "flujo_Q_I_a_J_MW": 0.413103891,
          "flujo_P_J_a_I_MW": 1.551737955,
          "flujo_Q_J_a_I_MW": -0.408048674
        },
        {
          "I": 16,
          "J": 17,
          "flujo_P_I_a_J_MW": 1.762823241,
          "flujo_Q_I_a_J_MW": 3.140990708,
          "flujo_P_J_a_I_MW": -1.752503327,
          "flujo_Q_J_a_I_MW": -3.116480913
        },
        {
          "I": 15,
          "J": 18,
          "flujo_P_I_a_J_MW": 7.204077077,
          "flujo_Q_I_a_J_MW": 3.74738969,
          "flujo_P_J_a_I_MW": -7.132859485,
          "flujo_Q_J_a_I_MW": -3.604954506
        },
        {
          "I": 18,
          "J": 19,
          "flujo_P_I_a_J_MW": 3.932859593,
          "flujo_Q_I_a_J_MW": 2.704954467,
          "flujo_P_J_a_I_MW": -3.919002918,
          "flujo_Q_J_a_I_MW": -2.674931672
        },
        {
          "I": 19,
          "J": 20,
          "flujo_P_I_a_J_MW": -5.580997004,
          "flujo_Q_I_a_J_MW": -0.725068348,
          "flujo_P_J_a_I_MW": 5.590744028,
          "flujo_Q_J_a_I_MW": 0.747811404
        },
        {
          "I": 10,
          "J": 20,
          "flujo_P_I_a_J_MW": 7.848454635,
          "flujo_Q_I_a_J_MW": 1.582469577,
          "flujo_P_J_a_I_MW": -7.790743994,
          "flujo_Q_J_a_I_MW": -1.447811413
        },
        {
          "I": 10,
          "J": 17,
          "flujo_P_I_a_J_MW": 7.265577578,
          "flujo_Q_I_a_J_MW": 2.731735332,
          "flujo_P_J_a_I_MW": -7.247496503,
          "flujo_Q_J_a_I_MW": -2.683519132
        },
        {
          "I": 10,
          "J": 21,
          "flujo_P_I_a_J_MW": -4.428727928,
          "flujo_Q_I_a_J_MW": -11.56488286,
          "flujo_P_J_a_I_MW": 4.474750675,
          "flujo_Q_J_a_I_MW": 11.67226927
        },
        {
          "I": 10,
          "J": 22,
          "flujo_P_I_a_J_MW": -5.06123428,
          "flujo_Q_I_a_J_MW": -8.39374771,
          "flujo_P_J_a_I_MW": 5.128505535,
          "flujo_Q_J_a_I_MW": 8.537900401
        },
        {
          "I": 21,
          "J": 22,
          "flujo_P_I_a_J_MW": -21.97475058,
          "flujo_Q_I_a_J_MW": -22.87226928,
          "flujo_P_J_a_I_MW": 22.07351486,
          "flujo_Q_J_a_I_MW": 23.06979785
        },
        {
          "I": 15,
          "J": 23,
          "flujo_P_I_a_J_MW": -10.91679211,
          "flujo_Q_I_a_J_MW": -2.716764926,
          "flujo_P_J_a_I_MW": 11.04104929,
          "flujo_Q_J_a_I_MW": 2.965279276
        },
        {
          "I": 22,
          "J": 24,
          "flujo_P_I_a_J_MW": -4.461688283,
          "flujo_Q_I_a_J_MW": 2.589369717,
          "flujo_P_J_a_I_MW": 4.492625565,
          "flujo_Q_J_a_I_MW": -2.542963795
        },
        {
          "I": 23,
          "J": 24,
          "flujo_P_I_a_J_MW": 2.025902925,
          "flujo_Q_I_a_J_MW": 2.394566592,
          "flujo_P_J_a_I_MW": -2.01374347,
          "flujo_Q_J_a_I_MW": -2.36931234
        },
        {
          "I": 24,
          "J": 25,
          "flujo_P_I_a_J_MW": -11.1788819,
          "flujo_Q_I_a_J_MW": -1.746375203,
          "flujo_P_J_a_I_MW": 11.41418086,
          "flujo_Q_J_a_I_MW": 2.155052355
        },
        {
          "I": 25,
          "J": 26,
          "flujo_P_I_a_J_MW": 3.541595716,
          "flujo_Q_I_a_J_MW": 2.363225489,
          "flujo_P_J_a_I_MW": -3.5,
          "flujo_Q_J_a_I_MW": -2.3
        },
        {
          "I": 25,
          "J": 27,
          "flujo_P_I_a_J_MW": -14.95577657,
          "flujo_Q_I_a_J_MW": -4.518277849,
          "flujo_P_J_a_I_MW": 15.20221469,
          "flujo_Q_J_a_I_MW": 4.988750623
        },
        {
          "I": 28,
          "J": 27,
          "flujo_P_I_a_J_MW": -11.44966968,
          "flujo_Q_I_a_J_MW": -21.09185593,
          "flujo_P_J_a_I_MW": 11.44966968,
          "flujo_Q_J_a_I_MW": 23.48082705
        },
        {
          "I": 27,
          "J": 29,
          "flujo_P_I_a_J_MW": 6.15678877,
          "flujo_Q_I_a_J_MW": 1.650881906,
          "flujo_P_J_a_I_MW": -6.078559573,
          "flujo_Q_J_a_I_MW": -1.501535256
        },
        {
          "I": 27,
          "J": 30,
          "flujo_P_I_a_J_MW": 7.100347964,
          "flujo_Q_I_a_J_MW": 1.633916376,
          "flujo_P_J_a_I_MW": -6.951685098,
          "flujo_Q_J_a_I_MW": -1.355173502
        },
        {
          "I": 29,
          "J": 30,
          "flujo_P_I_a_J_MW": 3.678559573,
          "flujo_Q_I_a_J_MW": 0.601535256,
          "flujo_P_J_a_I_MW": -3.648314902,
          "flujo_Q_J_a_I_MW": -0.544826498
        },
        {
          "I": 8,
          "J": 28,
          "flujo_P_I_a_J_MW": -6.286376266,
          "flujo_Q_I_a_J_MW": -9.067023561,
          "flujo_P_J_a_I_MW": 6.355116497,
          "flujo_Q_J_a_I_MW": 7.408039608
        },
        {
          "I": 6,
          "J": 28,
          "flujo_P_I_a_J_MW": -5.047552492,
          "flujo_Q_I_a_J_MW": -14.49770963,
          "flujo_P_J_a_I_MW": 5.094553269,
          "flujo_Q_J_a_I_MW": 13.68381631
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
          "V_min": 0.95
        },
        {
          "nodo": 2,
          "tipo_de_nodo": 2,
          "P_MW": 21.7,
          "Q_MVAR": 12.7,
          "V_max": 1.1,
          "V_min": 0.95
        },
        {
          "nodo": 3,
          "tipo_de_nodo": 1,
          "P_MW": 2.4,
          "Q_MVAR": 1.2,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 4,
          "tipo_de_nodo": 1,
          "P_MW": 7.6,
          "Q_MVAR": 1.6,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 5,
          "tipo_de_nodo": 1,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 6,
          "tipo_de_nodo": 1,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 7,
          "tipo_de_nodo": 1,
          "P_MW": 22.8,
          "Q_MVAR": 10.9,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 8,
          "tipo_de_nodo": 1,
          "P_MW": 30,
          "Q_MVAR": 30,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 9,
          "tipo_de_nodo": 1,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 10,
          "tipo_de_nodo": 1,
          "P_MW": 5.8,
          "Q_MVAR": 2,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 11,
          "tipo_de_nodo": 1,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 12,
          "tipo_de_nodo": 1,
          "P_MW": 11.2,
          "Q_MVAR": 7.5,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 13,
          "tipo_de_nodo": 2,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.95
        },
        {
          "nodo": 14,
          "tipo_de_nodo": 1,
          "P_MW": 6.2,
          "Q_MVAR": 1.6,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 15,
          "tipo_de_nodo": 1,
          "P_MW": 8.2,
          "Q_MVAR": 2.5,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 16,
          "tipo_de_nodo": 1,
          "P_MW": 3.5,
          "Q_MVAR": 1.8,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 17,
          "tipo_de_nodo": 1,
          "P_MW": 9,
          "Q_MVAR": 5.8,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 18,
          "tipo_de_nodo": 1,
          "P_MW": 3.2,
          "Q_MVAR": 0.9,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 19,
          "tipo_de_nodo": 1,
          "P_MW": 9.5,
          "Q_MVAR": 3.4,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 20,
          "tipo_de_nodo": 1,
          "P_MW": 2.2,
          "Q_MVAR": 0.7,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 21,
          "tipo_de_nodo": 1,
          "P_MW": 17.5,
          "Q_MVAR": 11.2,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 22,
          "tipo_de_nodo": 2,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.95
        },
        {
          "nodo": 23,
          "tipo_de_nodo": 2,
          "P_MW": 3.2,
          "Q_MVAR": 1.6,
          "V_max": 1.1,
          "V_min": 0.95
        },
        {
          "nodo": 24,
          "tipo_de_nodo": 1,
          "P_MW": 8.7,
          "Q_MVAR": 6.7,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 25,
          "tipo_de_nodo": 1,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 26,
          "tipo_de_nodo": 1,
          "P_MW": 3.5,
          "Q_MVAR": 2.3,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 27,
          "tipo_de_nodo": 2,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.1,
          "V_min": 0.95
        },
        {
          "nodo": 28,
          "tipo_de_nodo": 1,
          "P_MW": 0,
          "Q_MVAR": 0,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 29,
          "tipo_de_nodo": 1,
          "P_MW": 2.4,
          "Q_MVAR": 0.9,
          "V_max": 1.05,
          "V_min": 0.95
        },
        {
          "nodo": 30,
          "tipo_de_nodo": 1,
          "P_MW": 10.6,
          "Q_MVAR": 1.9,
          "V_max": 1.05,
          "V_min": 0.95
        }
      ]
    };
    
    
  
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 189.2016368,
        "potencia_atendida_MW": -0.00163682,
        "potencia_generada_adicional_MW": -0.00163682 - 189.2016368, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 46870.35739,
        "costo_deslastre_dolar_per_MWH": 46870.35739,
        "U1": -8.65127e-06,
        "U2": 0,
        "U": -4.32563e-06,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 156.3569476,
        "potencia_atendida_MW": 32.84305238,
        "potencia_generada_adicional_MW": 32.84305238 - 156.3569476, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 36834.02849,
        "costo_deslastre_dolar_per_MWH": 35187.77871,
        "U1": 0.173589072,
        "U2": 0.044693721,
        "U": 0.109141396,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 99.47003146,
        "potencia_atendida_MW": 89.72996854,
        "potencia_generada_adicional_MW": 89.72996854 - 99.47003146, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 24084.00631,
        "costo_deslastre_dolar_per_MWH": 17334.00632,
        "U1": 0.474259876,
        "U2": 0.280268985,
        "U": 0.37726443,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 66.54804536,
        "potencia_atendida_MW": 122.6519546,
        "potencia_generada_adicional_MW": 122.6519546 - 66.54804536, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 18880.8593,
        "costo_deslastre_dolar_per_MWH": 10484.60972,
        "U1": 0.648266145,
        "U2": 0.444696369,
        "U": 0.546481257,
        "resiliencia": "POBRE"
      }
    ];
    
    
   
    
    let escenario1ConSinRdNiGd = [
      { "nodo": 2, "carga_MW": 21.7, "potencia_deslastrada_MW": 21.70010284, "costo_dolar_por_MW": 8680.041136, "potencia_atendida_MW": -0.000102841, "_atendido": -0.000473923 },
      { "nodo": 3, "carga_MW": 2.4, "potencia_deslastrada_MW": 2.400113977, "costo_dolar_por_MW": 720.034193, "potencia_atendida_MW": -0.000113977, "_atendido": -0.00474903 },
      { "nodo": 4, "carga_MW": 7.6, "potencia_deslastrada_MW": 7.600110845, "costo_dolar_por_MW": 760.0110845, "potencia_atendida_MW": -0.000110845, "_atendido": -0.001458483 },
      { "nodo": 7, "carga_MW": 22.8, "potencia_deslastrada_MW": 22.80010218, "costo_dolar_por_MW": 4560.020436, "potencia_atendida_MW": -0.00010218, "_atendido": -0.000448157 },
      { "nodo": 8, "carga_MW": 30, "potencia_deslastrada_MW": 30.00009806, "costo_dolar_por_MW": 9000.029417, "potencia_atendida_MW": -9.80569E-05, "_atendido": -0.000326856 },
      { "nodo": 10, "carga_MW": 5.8, "potencia_deslastrada_MW": 5.800111883, "costo_dolar_por_MW": 580.0111883, "potencia_atendida_MW": -0.000111883, "_atendido": -0.001929009 },
      { "nodo": 12, "carga_MW": 11.2, "potencia_deslastrada_MW": 11.20010887, "costo_dolar_por_MW": 2240.021774, "potencia_atendida_MW": -0.000108871, "_atendido": -0.00097206 },
      { "nodo": 14, "carga_MW": 6.2, "potencia_deslastrada_MW": 6.200111785, "costo_dolar_por_MW": 1860.033535, "potencia_atendida_MW": -0.000111785, "_atendido": -0.001802983 },
      { "nodo": 15, "carga_MW": 8.2, "potencia_deslastrada_MW": 8.200110631, "costo_dolar_por_MW": 3280.044252, "potencia_atendida_MW": -0.000110631, "_atendido": -0.001349156 },
      { "nodo": 16, "carga_MW": 3.5, "potencia_deslastrada_MW": 3.500113312, "costo_dolar_por_MW": 700.0226623, "potencia_atendida_MW": -0.000113312, "_atendido": -0.003237477 },
      { "nodo": 17, "carga_MW": 9, "potencia_deslastrada_MW": 9.000110038, "costo_dolar_por_MW": 900.0110038, "potencia_atendida_MW": -0.000110038, "_atendido": -0.001222648 },
      { "nodo": 18, "carga_MW": 3.2, "potencia_deslastrada_MW": 3.200113378, "costo_dolar_por_MW": 320.0113378, "potencia_atendida_MW": -0.000113378, "_atendido": -0.003543047 },
      { "nodo": 19, "carga_MW": 9.5, "potencia_deslastrada_MW": 9.50010975, "costo_dolar_por_MW": 950.010975, "potencia_atendida_MW": -0.00010975, "_atendido": -0.001155263 },
      { "nodo": 20, "carga_MW": 2.2, "potencia_deslastrada_MW": 2.200114061, "costo_dolar_por_MW": 440.0228121, "potencia_atendida_MW": -0.000114061, "_atendido": -0.005184576 },
      { "nodo": 21, "carga_MW": 17.5, "potencia_deslastrada_MW": 17.50010527, "costo_dolar_por_MW": 5250.03158, "potencia_atendida_MW": -0.000105267, "_atendido": -0.000601526 },
      { "nodo": 23, "carga_MW": 3.2, "potencia_deslastrada_MW": 3.199999934, "costo_dolar_por_MW": 639.9999867, "potencia_atendida_MW": 6.64744E-08, "_atendido": 2.07733E-06 },
      { "nodo": 24, "carga_MW": 8.7, "potencia_deslastrada_MW": 8.700000094, "costo_dolar_por_MW": 1740.000019, "potencia_atendida_MW": -9.43754E-08, "_atendido": -1.08477E-06 },
      { "nodo": 26, "carga_MW": 3.5, "potencia_deslastrada_MW": 3.499999918, "costo_dolar_por_MW": 349.9999918, "potencia_atendida_MW": 8.16695E-08, "_atendido": 2.33341E-06 },
      { "nodo": 29, "carga_MW": 2.4, "potencia_deslastrada_MW": 2.4, "costo_dolar_por_MW": 720, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 30, "carga_MW": 10.6, "potencia_deslastrada_MW": 10.6, "costo_dolar_por_MW": 3180, "potencia_atendida_MW": 0, "_atendido": 0 }
    ];
    
  
    
    let escenario2ConRdSinGd = [
      { "nodo": 2, "carga_MW": 21.7, "potencia_deslastrada_MW": 4.432170886, "costo_dolar_por_MW": 1772.868354, "potencia_atendida_MW": 17.26782911, "_atendido": 79.57524937 },
      { "nodo": 3, "carga_MW": 2.4, "potencia_deslastrada_MW": 2.399999879, "costo_dolar_por_MW": 719.9999637, "potencia_atendida_MW": 1.20909e-7, "_atendido": 5.03786e-6 },
      { "nodo": 4, "carga_MW": 7.6, "potencia_deslastrada_MW": 7.59999996, "costo_dolar_por_MW": 759.999996, "potencia_atendida_MW": 3.98326e-8, "_atendido": 5.24113e-7 },
      { "nodo": 7, "carga_MW": 22.8, "potencia_deslastrada_MW": 22.79999994, "costo_dolar_por_MW": 4559.999988, "potencia_atendida_MW": 6.01533e-8, "_atendido": 2.6383e-7 },
      { "nodo": 8, "carga_MW": 30, "potencia_deslastrada_MW": 29.99999988, "costo_dolar_por_MW": 8999.999964, "potencia_atendida_MW": 1.21462e-7, "_atendido": 4.04874e-7 },
      { "nodo": 10, "carga_MW": 5.8, "potencia_deslastrada_MW": 5.79999996, "costo_dolar_por_MW": 579.999996, "potencia_atendida_MW": 3.9921e-8, "_atendido": 6.88293e-7 },
      { "nodo": 12, "carga_MW": 11.2, "potencia_deslastrada_MW": 11.19999994, "costo_dolar_por_MW": 2239.999988, "potencia_atendida_MW": 5.9788e-8, "_atendido": 5.33821e-7 },
      { "nodo": 14, "carga_MW": 6.2, "potencia_deslastrada_MW": 6.19999988, "costo_dolar_por_MW": 1859.999964, "potencia_atendida_MW": 1.19891e-7, "_atendido": 1.93373e-6 },
      { "nodo": 15, "carga_MW": 8.2, "potencia_deslastrada_MW": 1.22477366, "costo_dolar_por_MW": 489.9094639, "potencia_atendida_MW": 6.97522634, "_atendido": 85.06373586 },
      { "nodo": 16, "carga_MW": 3.5, "potencia_deslastrada_MW": 3.49999994, "costo_dolar_por_MW": 699.999988, "potencia_atendida_MW": 6.02161e-8, "_atendido": 1.72046e-6 },
      { "nodo": 17, "carga_MW": 9, "potencia_deslastrada_MW": 8.99999996, "costo_dolar_por_MW": 899.999996, "potencia_atendida_MW": 3.99767e-8, "_atendido": 4.44186e-7 },
      { "nodo": 18, "carga_MW": 3.2, "potencia_deslastrada_MW": 3.19999996, "costo_dolar_por_MW": 319.999996, "potencia_atendida_MW": 3.99248e-8, "_atendido": 1.24765e-6 },
      { "nodo": 19, "carga_MW": 9.5, "potencia_deslastrada_MW": 9.49999996, "costo_dolar_por_MW": 949.999996, "potencia_atendida_MW": 4.00324e-8, "_atendido": 4.21394e-7 },
      { "nodo": 20, "carga_MW": 2.2, "potencia_deslastrada_MW": 2.19999994, "costo_dolar_por_MW": 439.9999879, "potencia_atendida_MW": 6.03755e-8, "_atendido": 2.74434e-6 },
      { "nodo": 21, "carga_MW": 17.5, "potencia_deslastrada_MW": 17.49999988, "costo_dolar_por_MW": 5249.999963, "potencia_atendida_MW": 1.22007e-7, "_atendido": 6.97185e-7 },
      { "nodo": 23, "carga_MW": 3.2, "potencia_deslastrada_MW": 1.600021995, "costo_dolar_por_MW": 320.0043989, "potencia_atendida_MW": 1.599978005, "_atendido": 49.99931267 },
      { "nodo": 24, "carga_MW": 8.7, "potencia_deslastrada_MW": 4.349985016, "costo_dolar_por_MW": 869.9970033, "potencia_atendida_MW": 4.350014984, "_atendido": 50.00017223 },
      { "nodo": 26, "carga_MW": 3.5, "potencia_deslastrada_MW": 3.499996991, "costo_dolar_por_MW": 349.9996991, "potencia_atendida_MW": 3.00874e-6, "_atendido": 8.59641e-5 },
      { "nodo": 29, "carga_MW": 2.4, "potencia_deslastrada_MW": 2.4, "costo_dolar_por_MW": 720, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 30, "carga_MW": 10.6, "potencia_deslastrada_MW": 7.95, "costo_dolar_por_MW": 2385, "potencia_atendida_MW": 2.65, "_atendido": 25 }
    ];
    
    
  
    let escenario3ConGdSinRd = [
      {nodo: 2, carga_MW: 21.7, potencia_deslastrada_MW: 8.31633e-9, costo_dolar_por_MW: 3.32653e-6, potencia_atendida_MW: 21.7, _atendido: 99.99999996},
      {nodo: 3, carga_MW: 2.4, potencia_deslastrada_MW: 1.67531e-8, costo_dolar_por_MW: 5.02592e-6, potencia_atendida_MW: 2.399999983, _atendido: 99.9999993},
      {nodo: 4, carga_MW: 7.6, potencia_deslastrada_MW: 7.599999983, costo_dolar_por_MW: 759.9999983, potencia_atendida_MW: 1.67288e-8, _atendido: 2.20116e-7},
      {nodo: 7, carga_MW: 22.8, potencia_deslastrada_MW: 19.24945452, costo_dolar_por_MW: 3849.890903, potencia_atendida_MW: 3.550545484, _atendido: 15.57256791},
      {nodo: 8, carga_MW: 30, potencia_deslastrada_MW: 1.66762e-8, costo_dolar_por_MW: 5.00285e-6, potencia_atendida_MW: 29.99999998, _atendido: 99.99999994},
      {nodo: 10, carga_MW: 5.8, potencia_deslastrada_MW: 5.799999983, costo_dolar_por_MW: 579.9999983, potencia_atendida_MW: 1.67271e-8, _atendido: 2.88398e-7},
      {nodo: 12, carga_MW: 11.2, potencia_deslastrada_MW: 11.02060432, costo_dolar_por_MW: 2204.120864, potencia_atendida_MW: 0.179395679, _atendido: 1.601747134},
      {nodo: 14, carga_MW: 6.2, potencia_deslastrada_MW: 1.71847e-8, costo_dolar_por_MW: 5.1554e-6, potencia_atendida_MW: 6.199999983, _atendido: 99.99999972},
      {nodo: 15, carga_MW: 8.2, potencia_deslastrada_MW: 8.45385e-9, costo_dolar_por_MW: 3.38154e-6, potencia_atendida_MW: 8.199999992, _atendido: 99.9999999},
      {nodo: 16, carga_MW: 3.5, potencia_deslastrada_MW: 3.499975151, costo_dolar_por_MW: 699.9950301, potencia_atendida_MW: 2.48493e-5, _atendido: 0.00070998},
      {nodo: 17, carga_MW: 9, potencia_deslastrada_MW: 8.999999983, costo_dolar_por_MW: 899.9999983, potencia_atendida_MW: 1.67302e-8, _atendido: 1.85891e-7},
      {nodo: 18, carga_MW: 3.2, potencia_deslastrada_MW: 3.199999983, costo_dolar_por_MW: 319.9999983, potencia_atendida_MW: 1.65514e-8, _atendido: 5.17232e-7},
      {nodo: 19, carga_MW: 9.5, potencia_deslastrada_MW: 9.499999983, costo_dolar_por_MW: 949.9999983, potencia_atendida_MW: 1.66093e-8, _atendido: 1.74835e-7},
      {nodo: 20, carga_MW: 2.2, potencia_deslastrada_MW: 2.199997526, costo_dolar_por_MW: 439.9995051, potencia_atendida_MW: 2.47448e-6, _atendido: 0.000112477},
      {nodo: 21, carga_MW: 17.5, potencia_deslastrada_MW: 1.71069e-8, costo_dolar_por_MW: 5.13206e-6, potencia_atendida_MW: 17.49999998, _atendido: 99.9999999},
      {nodo: 23, carga_MW: 3.2, potencia_deslastrada_MW: 3.199999934, costo_dolar_por_MW: 639.9999867, potencia_atendida_MW: 6.64744e-8, _atendido: 2.07733e-6},
      {nodo: 24, carga_MW: 8.7, potencia_deslastrada_MW: 8.700000094, costo_dolar_por_MW: 1740.000019, potencia_atendida_MW: -9.43754e-8, _atendido: -1.08477e-6},
      {nodo: 26, carga_MW: 3.5, potencia_deslastrada_MW: 3.499999918, costo_dolar_por_MW: 349.9999918, potencia_atendida_MW: 8.16695e-8, _atendido: 2.33341e-6},
      {nodo: 29, carga_MW: 2.4, potencia_deslastrada_MW: 2.4, costo_dolar_por_MW: 720, potencia_atendida_MW: 0, _atendido: 0},
      {nodo: 30, carga_MW: 10.6, potencia_deslastrada_MW: 10.6, costo_dolar_por_MW: 3180, potencia_atendida_MW: 0, _atendido: 0}
    ];
    
    
 
    let escenario4ConGdYRd = [
      { "nodo": 2, "carga_MW": 21.7, "potencia_deslastrada_MW": 1.55604e-7, "costo_dolar_por_MW": 6.22416e-5, "potencia_atendida_MW": 21.69999984, "_atendido": 99.99999928 },
      { "nodo": 3, "carga_MW": 2.4, "potencia_deslastrada_MW": 3.1259e-7, "costo_dolar_por_MW": 9.3777e-5, "potencia_atendida_MW": 2.399999687, "_atendido": 99.99998698 },
      { "nodo": 4, "carga_MW": 7.6, "potencia_deslastrada_MW": 7.599999685, "costo_dolar_por_MW": 759.9999685, "potencia_atendida_MW": 3.15031e-7, "_atendido": 4.14515e-6 },
      { "nodo": 7, "carga_MW": 22.8, "potencia_deslastrada_MW": 8.405117057, "costo_dolar_por_MW": 1681.023411, "potencia_atendida_MW": 14.39488294, "_atendido": 63.13545151 },
      { "nodo": 8, "carga_MW": 30, "potencia_deslastrada_MW": 3.1121e-7, "costo_dolar_por_MW": 9.33631e-5, "potencia_atendida_MW": 29.99999969, "_atendido": 99.99999896 },
      { "nodo": 10, "carga_MW": 5.8, "potencia_deslastrada_MW": 5.799999684, "costo_dolar_por_MW": 579.9999684, "potencia_atendida_MW": 3.16123e-7, "_atendido": 5.45039e-6 },
      { "nodo": 12, "carga_MW": 11.2, "potencia_deslastrada_MW": 3.241259912, "costo_dolar_por_MW": 648.2519824, "potencia_atendida_MW": 7.958740088, "_atendido": 71.06017936 },
      { "nodo": 14, "carga_MW": 6.2, "potencia_deslastrada_MW": 3.21929e-7, "costo_dolar_por_MW": 9.65787e-5, "potencia_atendida_MW": 6.199999678, "_atendido": 99.99999481 },
      { "nodo": 15, "carga_MW": 8.2, "potencia_deslastrada_MW": 1.58175e-7, "costo_dolar_por_MW": 6.32698e-5, "potencia_atendida_MW": 8.199999842, "_atendido": 99.99999807 },
      { "nodo": 16, "carga_MW": 3.5, "potencia_deslastrada_MW": 0.001443954, "costo_dolar_por_MW": 0.288790826, "potencia_atendida_MW": 3.498556046, "_atendido": 99.95874417 },
      { "nodo": 17, "carga_MW": 9, "potencia_deslastrada_MW": 8.999999684, "costo_dolar_por_MW": 899.9999684, "potencia_atendida_MW": 3.16378e-7, "_atendido": 3.51531e-6 },
      { "nodo": 18, "carga_MW": 3.2, "potencia_deslastrada_MW": 3.199999686, "costo_dolar_por_MW": 319.9999686, "potencia_atendida_MW": 3.13713e-7, "_atendido": 9.80353e-6 },
      { "nodo": 19, "carga_MW": 9.5, "potencia_deslastrada_MW": 9.499999685, "costo_dolar_por_MW": 949.9999685, "potencia_atendida_MW": 3.14975e-7, "_atendido": 3.31553e-6 },
      { "nodo": 20, "carga_MW": 2.2, "potencia_deslastrada_MW": 0.000220438, "costo_dolar_por_MW": 0.044087654, "potencia_atendida_MW": 2.199779562, "_atendido": 99.98998008 },
      { "nodo": 21, "carga_MW": 17.5, "potencia_deslastrada_MW": 3.18103e-7, "costo_dolar_por_MW": 9.54309e-5, "potencia_atendida_MW": 17.49999968, "_atendido": 99.99999818 },
      { "nodo": 23, "carga_MW": 3.2, "potencia_deslastrada_MW": 1.600021995, "costo_dolar_por_MW": 320.0043989, "potencia_atendida_MW": 1.599978005, "_atendido": 49.99931267 },
      { "nodo": 24, "carga_MW": 8.7, "potencia_deslastrada_MW": 4.349985016, "costo_dolar_por_MW": 869.9970033, "potencia_atendida_MW": 4.350014984, "_atendido": 50.00017223 },
      { "nodo": 26, "carga_MW": 3.5, "potencia_deslastrada_MW": 3.499996991, "costo_dolar_por_MW": 349.9996991, "potencia_atendida_MW": 3.00874e-6, "_atendido": 8.59641e-5 },
      { "nodo": 29, "carga_MW": 2.4, "potencia_deslastrada_MW": 2.4, "costo_dolar_por_MW": 720, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 30, "carga_MW": 10.6, "potencia_deslastrada_MW": 7.95, "costo_dolar_por_MW": 2385, "potencia_atendida_MW": 2.65, "_atendido": 25 }
    ];
    
 
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="33"){
   
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
      {"I": 1, "J": 2, "flujo_P_I_a_J_MW": 3.917677126, "flujo_Q_I_a_J_MW": 2.435140971, "flujo_P_J_a_I_MW": -3.905436702, "flujo_Q_J_a_I_MW": -2.428901275},
      {"I": 2, "J": 3, "flujo_P_I_a_J_MW": 3.444299179, "flujo_Q_I_a_J_MW": 2.207822423, "flujo_P_J_a_I_MW": -3.392507944, "flujo_Q_J_a_I_MW": -2.181443561},
      {"I": 3, "J": 4, "flujo_P_I_a_J_MW": 2.362895188, "flujo_Q_I_a_J_MW": 1.684200515, "flujo_P_J_a_I_MW": -2.342994711, "flujo_Q_J_a_I_MW": -1.674065409},
      {"I": 4, "J": 5, "flujo_P_I_a_J_MW": 2.222994711, "flujo_Q_I_a_J_MW": 1.594065409, "flujo_P_J_a_I_MW": -2.204295769, "flujo_Q_J_a_I_MW": -1.584541755},
      {"I": 5, "J": 6, "flujo_P_I_a_J_MW": 2.144295769, "flujo_Q_I_a_J_MW": 1.554541755, "flujo_P_J_a_I_MW": -2.106047145, "flujo_Q_J_a_I_MW": -1.521523712},
      {"I": 6, "J": 7, "flujo_P_I_a_J_MW": 1.095267378, "flujo_Q_I_a_J_MW": 0.527887739, "flujo_P_J_a_I_MW": -1.093352861, "flujo_Q_J_a_I_MW": -0.521559195},
      {"I": 7, "J": 8, "flujo_P_I_a_J_MW": 0.893352861, "flujo_Q_I_a_J_MW": 0.421559195, "flujo_P_J_a_I_MW": -0.888514896, "flujo_Q_J_a_I_MW": -0.419960367},
      {"I": 8, "J": 9, "flujo_P_I_a_J_MW": 0.688514896, "flujo_Q_I_a_J_MW": 0.319960367, "flujo_P_J_a_I_MW": -0.684334359, "flujo_Q_J_a_I_MW": -0.316956875},
      {"I": 9, "J": 10, "flujo_P_I_a_J_MW": 0.624334359, "flujo_Q_I_a_J_MW": 0.296956875, "flujo_P_J_a_I_MW": -0.620773444, "flujo_Q_J_a_I_MW": -0.294432855},
      {"I": 10, "J": 11, "flujo_P_I_a_J_MW": 0.560773444, "flujo_Q_I_a_J_MW": 0.274432855, "flujo_P_J_a_I_MW": -0.560219743, "flujo_Q_J_a_I_MW": -0.27424979},
      {"I": 11, "J": 12, "flujo_P_I_a_J_MW": 0.515219743, "flujo_Q_I_a_J_MW": 0.24424979, "flujo_P_J_a_I_MW": -0.514338608, "flujo_Q_J_a_I_MW": -0.243958432},
      {"I": 12, "J": 13, "flujo_P_I_a_J_MW": 0.454338608, "flujo_Q_I_a_J_MW": 0.208958432, "flujo_P_J_a_I_MW": -0.451672372, "flujo_Q_J_a_I_MW": -0.206860678},
      {"I": 13, "J": 14, "flujo_P_I_a_J_MW": 0.391672372, "flujo_Q_I_a_J_MW": 0.171860678, "flujo_P_J_a_I_MW": -0.390943211, "flujo_Q_J_a_I_MW": -0.170900894},
      {"I": 14, "J": 15, "flujo_P_I_a_J_MW": 0.270943211, "flujo_Q_I_a_J_MW": 0.090900894, "flujo_P_J_a_I_MW": -0.270586237, "flujo_Q_J_a_I_MW": -0.090583181},
      {"I": 15, "J": 16, "flujo_P_I_a_J_MW": 0.210586237, "flujo_Q_I_a_J_MW": 0.080583181, "flujo_P_J_a_I_MW": -0.21030477, "flujo_Q_J_a_I_MW": -0.080377634},
      {"I": 16, "J": 17, "flujo_P_I_a_J_MW": 0.15030477, "flujo_Q_I_a_J_MW": 0.060377634, "flujo_P_J_a_I_MW": -0.150053136, "flujo_Q_J_a_I_MW": -0.060041667},
      {"I": 17, "J": 18, "flujo_P_I_a_J_MW": 0.090053136, "flujo_Q_I_a_J_MW": 0.040041667, "flujo_P_J_a_I_MW": -0.09, "flujo_Q_J_a_I_MW": -0.04},
      {"I": 2, "J": 19, "flujo_P_I_a_J_MW": 0.361137523, "flujo_Q_I_a_J_MW": 0.161078853, "flujo_P_J_a_I_MW": -0.360976569, "flujo_Q_J_a_I_MW": -0.160925259},
      {"I": 19, "J": 20, "flujo_P_I_a_J_MW": 0.270976569, "flujo_Q_I_a_J_MW": 0.120925259, "flujo_P_J_a_I_MW": -0.270144393, "flujo_Q_J_a_I_MW": -0.120175404},
      {"I": 20, "J": 21, "flujo_P_I_a_J_MW": 0.180144393, "flujo_Q_I_a_J_MW": 0.080175404, "flujo_P_J_a_I_MW": -0.180043634, "flujo_Q_J_a_I_MW": -0.080057693},
      {"I": 21, "J": 22, "flujo_P_I_a_J_MW": 0.090043634, "flujo_Q_I_a_J_MW": 0.040057693, "flujo_P_J_a_I_MW": -0.09, "flujo_Q_J_a_I_MW": -0.04},
      {"I": 3, "J": 23, "flujo_P_I_a_J_MW": 0.939612757, "flujo_Q_I_a_J_MW": 0.457243045, "flujo_P_J_a_I_MW": -0.936431128, "flujo_Q_J_a_I_MW": -0.455069073},
      {"I": 23, "J": 24, "flujo_P_I_a_J_MW": 0.846431128, "flujo_Q_I_a_J_MW": 0.405069073, "flujo_P_J_a_I_MW": -0.841287452, "flujo_Q_J_a_I_MW": -0.401007403},
      {"I": 24, "J": 25, "flujo_P_I_a_J_MW": 0.421287452, "flujo_Q_I_a_J_MW": 0.201007403, "flujo_P_J_a_I_MW": -0.42, "flujo_Q_J_a_I_MW": -0.2},
      {
        "I": 6,
        "J": 26,
        "flujo_P_I_a_J_MW": 0.950779767,
        "flujo_Q_I_a_J_MW": 0.973635973,
        "flujo_P_J_a_I_MW": -0.948178871,
        "flujo_Q_J_a_I_MW": -0.972311182
      },
      {
        "I": 26,
        "J": 27,
        "flujo_P_I_a_J_MW": 0.888178871,
        "flujo_Q_I_a_J_MW": 0.947311182,
        "flujo_P_J_a_I_MW": -0.884849877,
        "flujo_Q_J_a_I_MW": -0.945616229
      },
      {
        "I": 27,
        "J": 28,
        "flujo_P_I_a_J_MW": 0.824849877,
        "flujo_Q_I_a_J_MW": 0.920616229,
        "flujo_P_J_a_I_MW": -0.813549021,
        "flujo_Q_J_a_I_MW": -0.910652481
      },
      {
        "I": 28,
        "J": 29,
        "flujo_P_I_a_J_MW": 0.753549021,
        "flujo_Q_I_a_J_MW": 0.890652481,
        "flujo_P_J_a_I_MW": -0.745715671,
        "flujo_Q_J_a_I_MW": -0.883828252
      },
      {
        "I": 29,
        "J": 30,
        "flujo_P_I_a_J_MW": 0.625715671,
        "flujo_Q_I_a_J_MW": 0.813828252,
        "flujo_P_J_a_I_MW": -0.621820002,
        "flujo_Q_J_a_I_MW": -0.811843956
      },
      {
        "I": 30,
        "J": 31,
        "flujo_P_I_a_J_MW": 0.421820002,
        "flujo_Q_I_a_J_MW": 0.211843956,
        "flujo_P_J_a_I_MW": -0.420226364,
        "flujo_Q_J_a_I_MW": -0.210268962
      },
      {
        "I": 31,
        "J": 32,
        "flujo_P_I_a_J_MW": 0.270226364,
        "flujo_Q_I_a_J_MW": 0.140268962,
        "flujo_P_J_a_I_MW": -0.270013169,
        "flujo_Q_J_a_I_MW": -0.140020475
      },
      {
        "I": 32,
        "J": 33,
        "flujo_P_I_a_J_MW": 0.060013169,
        "flujo_Q_I_a_J_MW": 0.040020475,
        "flujo_P_J_a_I_MW": -0.06,
        "flujo_Q_J_a_I_MW": -0.04
      },
      {
        "I": 21,
        "J": 8,
        "flujo_P_I_a_J_MW": 0,
        "flujo_Q_I_a_J_MW": 0,
        "flujo_P_J_a_I_MW": 0,
        "flujo_Q_J_a_I_MW": 0
      },
      {
        "I": 9,
        "J": 15,
        "flujo_P_I_a_J_MW": 0,
        "flujo_Q_I_a_J_MW": 0,
        "flujo_P_J_a_I_MW": 0,
        "flujo_Q_J_a_I_MW": 0
      },
      {
        "I": 12,
        "J": 22,
        "flujo_P_I_a_J_MW": 0,
        "flujo_Q_I_a_J_MW": 0,
        "flujo_P_J_a_I_MW": 0,
        "flujo_Q_J_a_I_MW": 0
      },
      {
        "I": 18,
        "J": 33,
        "flujo_P_I_a_J_MW": 0,
        "flujo_Q_I_a_J_MW": 0,
        "flujo_P_J_a_I_MW": 0,
        "flujo_Q_J_a_I_MW": 0
      },
      {
        "I": 25,
        "J": 29,
        "flujo_P_I_a_J_MW": 0,
        "flujo_Q_I_a_J_MW": 0,
        "flujo_P_J_a_I_MW": 0,
        "flujo_Q_J_a_I_MW": 0
      }
    ]
  };
    
    

  let nodos = {
    "nodes": [
      { "nodo": 1, "tipo_de_nodo": 3, "P_MW": 0, "Q_MVAR": 0, "V_max": 1, "V_min": 1 },
      { "nodo": 2, "tipo_de_nodo": 1, "P_MW": 0.1, "Q_MVAR": 0.06, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 3, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 4, "tipo_de_nodo": 1, "P_MW": 0.12, "Q_MVAR": 0.08, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 5, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 6, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 7, "tipo_de_nodo": 1, "P_MW": 0.2, "Q_MVAR": 0.1, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 8, "tipo_de_nodo": 1, "P_MW": 0.2, "Q_MVAR": 0.1, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 9, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 10, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 11, "tipo_de_nodo": 1, "P_MW": 0.045, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 12, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.035, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 13, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.035, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 14, "tipo_de_nodo": 1, "P_MW": 0.12, "Q_MVAR": 0.08, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 15, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.01, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 16, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 17, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 18, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 19, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 20, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 21, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 22, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 23, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.05, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 24, "tipo_de_nodo": 1, "P_MW": 0.42, "Q_MVAR": 0.2, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 25, "tipo_de_nodo": 1, "P_MW": 0.42, "Q_MVAR": 0.2, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 26, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.025, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 27, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.025, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 28, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 29, "tipo_de_nodo": 1, "P_MW": 0.12, "Q_MVAR": 0.07, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 30, "tipo_de_nodo": 1, "P_MW": 0.2, "Q_MVAR": 0.6, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 31, "tipo_de_nodo": 1, "P_MW": 0.15, "Q_MVAR": 0.07, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 32, "tipo_de_nodo": 1, "P_MW": 0.21, "Q_MVAR": 0.1, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 33, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 }
    ]
  };
  
    
    
  
  let escenarios = [
    {
      "escenario": "ESCENARIO 1 CON SIN RD NI GD",
      "potencia_deslastrada_MW": 3.714999938,
      "potencia_atendida_MW": 6.23228e-08,
      "potencia_generada_adicional_MW": 3.714999938 - 6.23228e-08, // Calculado como potencia atendida - potencia deslastrada
      "costo_operacion_dolar_per_MWH": 812.0000365,
      "costo_deslastre_dolar_per_MWH": 812.0000365,
      "U1": 1.6776e-08,
      "U2": 0,
      "U": 8.38799e-09,
      "resiliencia": "MALA"
    },
    {
      "escenario": "ESCENARIO 2 CON RD SIN GD",
      "potencia_deslastrada_MW": 2.87137329,
      "potencia_atendida_MW": 0.84362671,
      "potencia_generada_adicional_MW": 2.87137329 - 0.84362671, // Calculado como potencia atendida - potencia deslastrada
      "costo_operacion_dolar_per_MWH": 623.2161152,
      "costo_deslastre_dolar_per_MWH": 581.0294847,
      "U1": 0.227086598,
      "U2": 0.067691816,
      "U": 0.147389207,
      "resiliencia": "MALA"
    },
    {
      "escenario": "ESCENARIO 3 CON GD SIN RD",
      "potencia_deslastrada_MW": 2.195002459,
      "potencia_atendida_MW": 1.519997541,
      "potencia_generada_adicional_MW": 2.195002459 - 1.519997541, // Calculado como potencia atendida - potencia deslastrada
      "costo_operacion_dolar_per_MWH": 604.2072499,
      "costo_deslastre_dolar_per_MWH": 490.0004264,
      "U1": 0.409151424,
      "U2": 0.189019287,
      "U": 0.299085356,
      "resiliencia": "MALA"
    },
    {
      "escenario": "ESCENARIO 4 CON GD Y RD",
      "potencia_deslastrada_MW": 2.26897477,
      "potencia_atendida_MW": 1.44602523,
      "potencia_generada_adicional_MW": 2.26897477 - 1.44602523, // Calculado como potencia atendida - potencia deslastrada
      "costo_operacion_dolar_per_MWH": 830.0809719,
      "costo_deslastre_dolar_per_MWH": 479.5013433,
      "U1": 0.389239631,
      "U2": 0.422343892,
      "U": 0.405791762,
      "resiliencia": "MALA"
    }
  ];
  
    
    

   
    let escenario1ConSinRdNiGd = [
      { "nodo": 24, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.420000005, "costo_dolar_por_MW": 84.00000097, "potencia_atendida_MW": -4.86218E-09, "_atendido": -1.15766E-06 },
      { "nodo": 25, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.420000005, "costo_dolar_por_MW": 84.00000098, "potencia_atendida_MW": -4.88029E-09, "_atendido": -1.16197E-06 },
      { "nodo": 29, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.119999984, "costo_dolar_por_MW": 11.99999843, "potencia_atendida_MW": 1.56727E-08, "_atendido": 1.30606E-05 },
      { "nodo": 30, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.200000005, "costo_dolar_por_MW": 40.000001, "potencia_atendida_MW": -5.01944E-09, "_atendido": -2.50972E-06 },
      { "nodo": 31, "carga_MW": 0.15, "potencia_deslastrada_MW": 0.149999992, "costo_dolar_por_MW": 59.99999694, "potencia_atendida_MW": 7.63883E-09, "_atendido": 5.09255E-06 },
      { "nodo": 32, "carga_MW": 0.21, "potencia_deslastrada_MW": 0.210000005, "costo_dolar_por_MW": 42.00000108, "potencia_atendida_MW": -5.42151E-09, "_atendido": -2.58167E-06 },
      { "nodo": 19, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.090000005, "costo_dolar_por_MW": 18.00000105, "potencia_atendida_MW": -5.24201E-09, "_atendido": -5.82445E-06 },
      { "nodo": 20, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.09000001, "costo_dolar_por_MW": 27.00000315, "potencia_atendida_MW": -1.04913E-08, "_atendido": -1.1657E-05 },
      { "nodo": 21, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.090000011, "costo_dolar_por_MW": 27.00000316, "potencia_atendida_MW": -1.05486E-08, "_atendido": -1.17207E-05 },
      { "nodo": 22, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089999966, "costo_dolar_por_MW": 8.999996641, "potencia_atendida_MW": 3.35934E-08, "_atendido": 3.7326E-05 },
      { "nodo": 3, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.090000038, "costo_dolar_por_MW": 27.00001146, "potencia_atendida_MW": -3.82025E-08, "_atendido": -4.24472E-05 },
      { "nodo": 4, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.119999983, "costo_dolar_por_MW": 11.99999832, "potencia_atendida_MW": 1.67835E-08, "_atendido": 1.39863E-05 },
      { "nodo": 23, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089999975, "costo_dolar_por_MW": 8.999997521, "potencia_atendida_MW": 2.47877E-08, "_atendido": 2.75419E-05 },
      { "nodo": 10, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.060000017, "costo_dolar_por_MW": 12.00000336, "potencia_atendida_MW": -1.68108E-08, "_atendido": -2.8018E-05 },
      { "nodo": 11, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.044999999, "costo_dolar_por_MW": 8.999999737, "potencia_atendida_MW": 1.31696E-09, "_atendido": 2.92658E-06 },
      { "nodo": 12, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999971, "costo_dolar_por_MW": 5.999997054, "potencia_atendida_MW": 2.94646E-08, "_atendido": 4.91077E-05 },
      { "nodo": 17, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.05999999, "costo_dolar_por_MW": 5.999998975, "potencia_atendida_MW": 1.02454E-08, "_atendido": 1.70757E-05 },
      { "nodo": 18, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.09000002, "costo_dolar_por_MW": 18.00000398, "potencia_atendida_MW": -1.9876E-08, "_atendido": -2.20844E-05 },
      { "nodo": 33, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.05999999, "costo_dolar_por_MW": 5.99999897, "potencia_atendida_MW": 1.03023E-08, "_atendido": 1.71705E-05 },
      { "nodo": 6, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999976, "costo_dolar_por_MW": 11.99999528, "potencia_atendida_MW": 2.3604E-08, "_atendido": 3.934E-05 },
      { "nodo": 7, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.200000023, "costo_dolar_por_MW": 80.00000925, "potencia_atendida_MW": -2.31154E-08, "_atendido": -1.15577E-05 },
      { "nodo": 8, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.200000023, "costo_dolar_por_MW": 60.00000695, "potencia_atendida_MW": -2.3153E-08, "_atendido": -1.15765E-05 },
      { "nodo": 9, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999973, "costo_dolar_por_MW": 5.999997325, "potencia_atendida_MW": 2.6752E-08, "_atendido": 4.45867E-05 },
      { "nodo": 13, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999978, "costo_dolar_por_MW": 5.999997751, "potencia_atendida_MW": 2.24949E-08, "_atendido": 3.74915E-05 },
      { "nodo": 14, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.120000021, "costo_dolar_por_MW": 36.00000624, "potencia_atendida_MW": -2.07842E-08, "_atendido": -1.73201E-05 },
      { "nodo": 15, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.060000025, "costo_dolar_por_MW": 24.00000988, "potencia_atendida_MW": -2.46929E-08, "_atendido": -4.11548E-05 },
      { "nodo": 16, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999967, "costo_dolar_por_MW": 5.99999665, "potencia_atendida_MW": 3.34984E-08, "_atendido": 5.58307E-05 },
      { "nodo": 27, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.060000021, "costo_dolar_por_MW": 24.0000084, "potencia_atendida_MW": -2.10051E-08, "_atendido": -3.50084E-05 },
      { "nodo": 28, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.05999996, "costo_dolar_por_MW": 5.999995973, "potencia_atendida_MW": 4.0273E-08, "_atendido": 6.71217E-05 },
      { "nodo": 2, "carga_MW": 0.1, "potencia_deslastrada_MW": 0.1, "costo_dolar_por_MW": 20, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 5, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 6, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 26, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 18, "potencia_atendida_MW": 0, "_atendido": 0 }
    ];
    
    
   
    
    let escenario2ConRdSinGd = [
      { "nodo": 24, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.314988828, "costo_dolar_por_MW": 62.99776565, "potencia_atendida_MW": 0.105011172, "_atendido": 25.00265994 },
      { "nodo": 25, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.302686469, "costo_dolar_por_MW": 60.53729381, "potencia_atendida_MW": 0.117313531, "_atendido": 27.93179308 },
      { "nodo": 29, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.119999994, "costo_dolar_por_MW": 11.99999941, "potencia_atendida_MW": 5.85687E-09, "_atendido": 4.88073E-06 },
      { "nodo": 30, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.199889238, "costo_dolar_por_MW": 39.97784757, "potencia_atendida_MW": 0.000110762, "_atendido": 0.055381071 },
      { "nodo": 31, "carga_MW": 0.15, "potencia_deslastrada_MW": 2.93081E-09, "costo_dolar_por_MW": 1.17232E-06, "potencia_atendida_MW": 0.149999997, "_atendido": 99.99999805 },
      { "nodo": 32, "carga_MW": 0.21, "potencia_deslastrada_MW": 0.209994064, "costo_dolar_por_MW": 41.99881273, "potencia_atendida_MW": 5.93636E-06, "_atendido": 0.002826839 },
      { "nodo": 19, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089997665, "costo_dolar_por_MW": 17.99953308, "potencia_atendida_MW": 2.33458E-06, "_atendido": 0.002593977 },
      { "nodo": 20, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.059035775, "costo_dolar_por_MW": 17.71073242, "potencia_atendida_MW": 0.030964225, "_atendido": 34.40469474 },
      { "nodo": 21, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.053483326, "costo_dolar_por_MW": 16.04499771, "potencia_atendida_MW": 0.036516674, "_atendido": 40.57408255 },
      { "nodo": 22, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089998836, "costo_dolar_por_MW": 8.999883584, "potencia_atendida_MW": 1.16416E-06, "_atendido": 0.001293509 },
      { "nodo": 3, "carga_MW": 0.09, "potencia_deslastrada_MW": 9.09156E-07, "costo_dolar_por_MW": 0.000272747, "potencia_atendida_MW": 0.089999091, "_atendido": 99.99898983 },
      { "nodo": 4, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.108701764, "costo_dolar_por_MW": 10.87017637, "potencia_atendida_MW": 0.011298236, "_atendido": 9.415196943 },
      { "nodo": 23, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.086315188, "costo_dolar_por_MW": 8.631518817, "potencia_atendida_MW": 0.003684812, "_atendido": 4.094235365 },
      { "nodo": 10, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.036632658, "costo_dolar_por_MW": 7.326531653, "potencia_atendida_MW": 0.023367342, "_atendido": 38.94556956 },
      { "nodo": 11, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.027124804, "costo_dolar_por_MW": 5.424960702, "potencia_atendida_MW": 0.017875196, "_atendido": 39.72265886 },
      { "nodo": 12, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059997725, "costo_dolar_por_MW": 5.999772483, "potencia_atendida_MW": 2.27517E-06, "_atendido": 0.003791956 },
      { "nodo": 17, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999651, "costo_dolar_por_MW": 5.9999651, "potencia_atendida_MW": 3.48995E-07, "_atendido": 0.000581658 },
      { "nodo": 18, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.022505171, "costo_dolar_por_MW": 4.501034232, "potencia_atendida_MW": 0.067494829, "_atendido": 74.99425426 },
      { "nodo": 33, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999651, "costo_dolar_por_MW": 5.999965097, "potencia_atendida_MW": 3.49025E-07, "_atendido": 0.000581708 },
      { "nodo": 6, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999754, "costo_dolar_por_MW": 11.99995085, "potencia_atendida_MW": 2.45744E-07, "_atendido": 0.000409573 },
      { "nodo": 7, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.185000648, "costo_dolar_por_MW": 74.00025933, "potencia_atendida_MW": 0.014999352, "_atendido": 7.499675842 },
      { "nodo": 8, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.170007233, "costo_dolar_por_MW": 51.0021699, "potencia_atendida_MW": 0.029992767, "_atendido": 14.99638351 },
      { "nodo": 9, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999158, "costo_dolar_por_MW": 5.999915817, "potencia_atendida_MW": 8.4183E-07, "_atendido": 0.001403051 },
      { "nodo": 13, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999433, "costo_dolar_por_MW": 5.999943312, "potencia_atendida_MW": 5.66879E-07, "_atendido": 0.000944798 },
      { "nodo": 14, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.090004035, "costo_dolar_por_MW": 27.00121038, "potencia_atendida_MW": 0.029995965, "_atendido": 24.99663784 },
      { "nodo": 15, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.030005493, "costo_dolar_por_MW": 12.00219722, "potencia_atendida_MW": 0.029994507, "_atendido": 49.99084491 },
      { "nodo": 16, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999279, "costo_dolar_por_MW": 5.999927939, "potencia_atendida_MW": 7.20606E-07, "_atendido": 0.00120101 },
      { "nodo": 27, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.030007306, "costo_dolar_por_MW": 12.00292242, "potencia_atendida_MW": 0.029992694, "_atendido": 49.98782323 },
      { "nodo": 28, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999231, "costo_dolar_por_MW": 5.999923149, "potencia_atendida_MW": 7.6851E-07, "_atendido": 0.00128085 },
      { "nodo": 2, "carga_MW": 0.1, "potencia_deslastrada_MW": 0.075, "costo_dolar_por_MW": 15, "potencia_atendida_MW": 0.025, "_atendido": 25 },
      { "nodo": 5, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.03, "costo_dolar_por_MW": 3, "potencia_atendida_MW": 0.03, "_atendido": 50 },
      { "nodo": 26, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 18, "potencia_atendida_MW": 0, "_atendido": 0 }
  ];
  
    

    
    let escenario3ConGdSinRd = [
      {nodo: 24, carga_MW: 0.42, potencia_deslastrada_MW: 2.66233e-7, costo_dolar_por_MW: 5.32467e-5, potencia_atendida_MW: 0.419999734, _atendido: 99.99993661},
      {nodo: 25, carga_MW: 0.42, potencia_deslastrada_MW: 2.66255e-7, costo_dolar_por_MW: 5.3251e-5, potencia_atendida_MW: 0.419999734, _atendido: 99.99993661},
      {nodo: 29, carga_MW: 0.12, potencia_deslastrada_MW: 1.34725e-6, costo_dolar_por_MW: 0.000134725, potencia_atendida_MW: 0.119998653, _atendido: 99.99887729},
      {nodo: 30, carga_MW: 0.2, potencia_deslastrada_MW: 2.67328e-7, costo_dolar_por_MW: 5.34656e-5, potencia_atendida_MW: 0.199999733, _atendido: 99.99986634},
      {nodo: 31, carga_MW: 0.15, potencia_deslastrada_MW: 1.02644e-7, costo_dolar_por_MW: 4.10576e-5, potencia_atendida_MW: 0.149999897, _atendido: 99.99993157},
      {nodo: 32, carga_MW: 0.21, potencia_deslastrada_MW: 2.68037e-7, costo_dolar_por_MW: 5.36074e-5, potencia_atendida_MW: 0.209999732, _atendido: 99.99987236},
      {nodo: 19, carga_MW: 0.09, potencia_deslastrada_MW: 0.090000005, costo_dolar_por_MW: 18.00000105, potencia_atendida_MW: -5.24201e-9, _atendido: -5.82445e-6},
      {nodo: 20, carga_MW: 0.09, potencia_deslastrada_MW: 0.09000001, costo_dolar_por_MW: 27.00000315, potencia_atendida_MW: -1.04913e-8, _atendido: -1.1657e-5},
      {nodo: 21, carga_MW: 0.09, potencia_deslastrada_MW: 0.090000011, costo_dolar_por_MW: 27.00000316, potencia_atendida_MW: -1.05486e-8, _atendido: -1.17207e-5},
      {nodo: 22, carga_MW: 0.09, potencia_deslastrada_MW: 0.089999966, costo_dolar_por_MW: 8.999996641, potencia_atendida_MW: 3.35934e-8, _atendido: 3.7326e-5},
      {nodo: 3, carga_MW: 0.09, potencia_deslastrada_MW: 0.090000038, costo_dolar_por_MW: 27.00001146, potencia_atendida_MW: -3.82025e-8, _atendido: -4.24472e-5},
      {nodo: 4, carga_MW: 0.12, potencia_deslastrada_MW: 0.119999983, costo_dolar_por_MW: 11.99999832, potencia_atendida_MW: 1.67835e-8, _atendido: 1.39863e-5},
      {nodo: 23, carga_MW: 0.09, potencia_deslastrada_MW: 0.089999975, costo_dolar_por_MW: 8.999997521, potencia_atendida_MW: 2.47877e-8, _atendido: 2.75419e-5},
      {nodo: 10, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000017, costo_dolar_por_MW: 12.00000336, potencia_atendida_MW: -1.68108e-8, _atendido: -2.8018e-5},
      {nodo: 11, carga_MW: 0.045, potencia_deslastrada_MW: 0.044999999, costo_dolar_por_MW: 8.999999737, potencia_atendida_MW: 1.31696e-9, _atendido: 2.92658e-6},
      {nodo: 12, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999971, costo_dolar_por_MW: 5.999997054, potencia_atendida_MW: 2.94646e-8, _atendido: 4.91077e-5},
      {nodo: 17, carga_MW: 0.06, potencia_deslastrada_MW: 0.05999999, costo_dolar_por_MW: 5.999998975, potencia_atendida_MW: 1.02454e-8, _atendido: 1.70757e-5},
      {nodo: 18, carga_MW: 0.09, potencia_deslastrada_MW: 0.09000002, costo_dolar_por_MW: 18.00000398, potencia_atendida_MW: -1.9876e-8, _atendido: -2.20844e-5},
      {nodo: 33, carga_MW: 0.06, potencia_deslastrada_MW: 0.05999999, costo_dolar_por_MW: 5.99999897, potencia_atendida_MW: 1.03023e-8, _atendido: 1.71705e-5},
      {nodo: 6, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999976, costo_dolar_por_MW: 11.99999528, potencia_atendida_MW: 2.3604e-8, _atendido: 3.934e-5},
      {nodo: 7, carga_MW: 0.2, potencia_deslastrada_MW: 0.200000023, costo_dolar_por_MW: 80.00000925, potencia_atendida_MW: -2.31154e-8, _atendido: -1.15577e-5},
      {nodo: 8, carga_MW: 0.2, potencia_deslastrada_MW: 0.200000023, costo_dolar_por_MW: 60.00000695, potencia_atendida_MW: -2.3153e-8, _atendido: -1.15765e-5},
      {nodo: 9, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999973, costo_dolar_por_MW: 5.999997325, potencia_atendida_MW: 2.6752e-8, _atendido: 4.45867e-5},
      {nodo: 13, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999978, costo_dolar_por_MW: 5.999997751, potencia_atendida_MW: 2.24949e-8, _atendido: 3.74915e-5},
      {nodo: 14, carga_MW: 0.12, potencia_deslastrada_MW: 0.120000021, costo_dolar_por_MW: 36.00000624, potencia_atendida_MW: -2.07842e-8, _atendido: -1.73201e-5},
      {nodo: 15, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000025, costo_dolar_por_MW: 24.00000988, potencia_atendida_MW: -2.46929e-8, _atendido: -4.11548e-5},
      {nodo: 16, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999967, costo_dolar_por_MW: 5.99999665, potencia_atendida_MW: 3.34984e-8, _atendido: 5.58307e-5},
      {nodo: 27, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000021, costo_dolar_por_MW: 24.0000084, potencia_atendida_MW: -2.10051e-8, _atendido: -3.50084e-5},
      {nodo: 28, carga_MW: 0.06, potencia_deslastrada_MW: 0.05999996, costo_dolar_por_MW: 5.999995973, potencia_atendida_MW: 4.0273e-8, _atendido: 6.71217e-5},
      {nodo: 2, carga_MW: 0.1, potencia_deslastrada_MW: 0.1, costo_dolar_por_MW: 20, potencia_atendida_MW: 0, _atendido: 0},
      {nodo: 5, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 6, potencia_atendida_MW: 0, _atendido: 0},
      {nodo: 26, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 18, potencia_atendida_MW: 0, _atendido: 0}
    ];
    
 
   
    
    let escenario4ConGdYRd = [
      {nodo: 24, carga_MW: 0.42, potencia_deslastrada_MW: 0.131801755, costo_dolar_por_MW: 26.36035095, potencia_atendida_MW: 0.288198245, _atendido: 68.61862983},
      {nodo: 25, carga_MW: 0.42, potencia_deslastrada_MW: 0.122981517, costo_dolar_por_MW: 24.59630343, potencia_atendida_MW: 0.297018483, _atendido: 70.7186864},
      {nodo: 29, carga_MW: 0.12, potencia_deslastrada_MW: 0.067003799, costo_dolar_por_MW: 6.700379866, potencia_atendida_MW: 0.052996201, _atendido: 44.16350112},
      {nodo: 30, carga_MW: 0.2, potencia_deslastrada_MW: 0.08357121, costo_dolar_por_MW: 16.71424205, potencia_atendida_MW: 0.11642879, _atendido: 58.21439488},
      {nodo: 31, carga_MW: 0.15, potencia_deslastrada_MW: 0.068259718, costo_dolar_por_MW: 27.30388718, potencia_atendida_MW: 0.081740282, _atendido: 54.49352136},
      {nodo: 32, carga_MW: 0.21, potencia_deslastrada_MW: 0.071542078, costo_dolar_por_MW: 14.30841557, potencia_atendida_MW: 0.138457922, _atendido: 65.93234389},
      {nodo: 19, carga_MW: 0.09, potencia_deslastrada_MW: 0.089997665, costo_dolar_por_MW: 17.99953308, potencia_atendida_MW: 2.33458e-6, _atendido: 0.002593977},
      {nodo: 20, carga_MW: 0.09, potencia_deslastrada_MW: 0.059035775, costo_dolar_por_MW: 17.71073242, potencia_atendida_MW: 0.030964225, _atendido: 34.40469474},
      {nodo: 21, carga_MW: 0.09, potencia_deslastrada_MW: 0.053483326, costo_dolar_por_MW: 16.04499771, potencia_atendida_MW: 0.036516674, _atendido: 40.57408255},
      {nodo: 22, carga_MW: 0.09, potencia_deslastrada_MW: 0.089998836, costo_dolar_por_MW: 8.999883584, potencia_atendida_MW: 1.16416e-6, _atendido: 0.001293509},
      {nodo: 3, carga_MW: 0.09, potencia_deslastrada_MW: 9.09156e-7, costo_dolar_por_MW: 0.000272747, potencia_atendida_MW: 0.089999091, _atendido: 99.99898983},
      {nodo: 4, carga_MW: 0.12, potencia_deslastrada_MW: 0.108701764, costo_dolar_por_MW: 10.87017637, potencia_atendida_MW: 0.011298236, _atendido: 9.415196943},
      {nodo: 23, carga_MW: 0.09, potencia_deslastrada_MW: 0.086315188, costo_dolar_por_MW: 8.631518817, potencia_atendida_MW: 0.003684812, _atendido: 4.094235365},
      {nodo: 10, carga_MW: 0.06, potencia_deslastrada_MW: 0.036632658, costo_dolar_por_MW: 7.326531653, potencia_atendida_MW: 0.023367342, _atendido: 38.94556956},
      {nodo: 11, carga_MW: 0.045, potencia_deslastrada_MW: 0.027124804, costo_dolar_por_MW: 5.424960702, potencia_atendida_MW: 0.017875196, _atendido: 39.72265886},
      {nodo: 12, carga_MW: 0.06, potencia_deslastrada_MW: 0.059997725, costo_dolar_por_MW: 5.999772483, potencia_atendida_MW: 2.27517e-6, _atendido: 0.003791956},
      {nodo: 17, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999651, costo_dolar_por_MW: 5.9999651, potencia_atendida_MW: 3.48995e-7, _atendido: 0.000581658},
      {nodo: 18, carga_MW: 0.09, potencia_deslastrada_MW: 0.022505171, costo_dolar_por_MW: 4.501034232, potencia_atendida_MW: 0.067494829, _atendido: 74.99425426},
      {nodo: 33, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999651, costo_dolar_por_MW: 5.999965097, potencia_atendida_MW: 3.49025e-7, _atendido: 0.000581708},
      {nodo: 6, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999754, costo_dolar_por_MW: 11.99995085, potencia_atendida_MW: 2.45744e-7, _atendido: 0.000409573},
      {nodo: 7, carga_MW: 0.2, potencia_deslastrada_MW: 0.185000648, costo_dolar_por_MW: 74.00025933, potencia_atendida_MW: 0.014999352, _atendido: 7.499675842},
      {nodo: 8, carga_MW: 0.2, potencia_deslastrada_MW: 0.170007233, costo_dolar_por_MW: 51.0021699, potencia_atendida_MW: 0.029992767, _atendido: 14.99638351},
      {nodo: 9, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999158, costo_dolar_por_MW: 5.999915817, potencia_atendida_MW: 8.4183e-7, _atendido: 0.001403051},
      {nodo: 13, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999433, costo_dolar_por_MW: 5.999943312, potencia_atendida_MW: 5.66879e-7, _atendido: 0.000944798},
      {nodo: 14, carga_MW: 0.12, potencia_deslastrada_MW: 0.090004035, costo_dolar_por_MW: 27.00121038, potencia_atendida_MW: 0.029995965, _atendido: 24.99663784},
      {nodo: 15, carga_MW: 0.06, potencia_deslastrada_MW: 0.030005493, costo_dolar_por_MW: 12.00219722, potencia_atendida_MW: 0.029994507, _atendido: 49.99084491},
      {nodo: 16, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999279, costo_dolar_por_MW: 5.999927939, potencia_atendida_MW: 7.20606e-7, _atendido: 0.00120101},
      {nodo: 27, carga_MW: 0.06, potencia_deslastrada_MW: 0.030007306, costo_dolar_por_MW: 12.00292242, potencia_atendida_MW: 0.029992694, _atendido: 49.98782323},
      {nodo: 28, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999231, costo_dolar_por_MW: 5.999923149, potencia_atendida_MW: 7.6851e-7, _atendido: 0.00128085},
      {nodo: 2, carga_MW: 0.1, potencia_deslastrada_MW: 0.075, costo_dolar_por_MW: 15, potencia_atendida_MW: 0.025, _atendido: 25},
      {nodo: 5, carga_MW: 0.06, potencia_deslastrada_MW: 0.03, costo_dolar_por_MW: 3, potencia_atendida_MW: 0.03, _atendido: 50},
      {nodo: 26, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 18, potencia_atendida_MW: 0, _atendido: 0}
    ];
    
 
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="34"){
   
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
      {"I": 1, "J": 2, "flujo_P_I_a_J_MW": 3.917677126, "flujo_Q_I_a_J_MW": 2.435140971, "flujo_P_J_a_I_MW": -3.905436702, "flujo_Q_J_a_I_MW": -2.428901275},
      {"I": 2, "J": 3, "flujo_P_I_a_J_MW": 3.444299179, "flujo_Q_I_a_J_MW": 2.207822423, "flujo_P_J_a_I_MW": -3.392507944, "flujo_Q_J_a_I_MW": -2.181443561},
      {"I": 3, "J": 4, "flujo_P_I_a_J_MW": 2.362895188, "flujo_Q_I_a_J_MW": 1.684200515, "flujo_P_J_a_I_MW": -2.342994711, "flujo_Q_J_a_I_MW": -1.674065409},
      {"I": 4, "J": 5, "flujo_P_I_a_J_MW": 2.222994711, "flujo_Q_I_a_J_MW": 1.594065409, "flujo_P_J_a_I_MW": -2.204295769, "flujo_Q_J_a_I_MW": -1.584541755},
      {"I": 5, "J": 6, "flujo_P_I_a_J_MW": 2.144295769, "flujo_Q_I_a_J_MW": 1.554541755, "flujo_P_J_a_I_MW": -2.106047145, "flujo_Q_J_a_I_MW": -1.521523712},
      {"I": 6, "J": 7, "flujo_P_I_a_J_MW": 1.095267378, "flujo_Q_I_a_J_MW": 0.527887739, "flujo_P_J_a_I_MW": -1.093352861, "flujo_Q_J_a_I_MW": -0.521559195},
      {"I": 7, "J": 8, "flujo_P_I_a_J_MW": 0.893352861, "flujo_Q_I_a_J_MW": 0.421559195, "flujo_P_J_a_I_MW": -0.888514896, "flujo_Q_J_a_I_MW": -0.419960367},
      {"I": 8, "J": 9, "flujo_P_I_a_J_MW": 0.688514896, "flujo_Q_I_a_J_MW": 0.319960367, "flujo_P_J_a_I_MW": -0.684334359, "flujo_Q_J_a_I_MW": -0.316956875},
      {"I": 9, "J": 10, "flujo_P_I_a_J_MW": 0.624334359, "flujo_Q_I_a_J_MW": 0.296956875, "flujo_P_J_a_I_MW": -0.620773444, "flujo_Q_J_a_I_MW": -0.294432855},
      {"I": 10, "J": 11, "flujo_P_I_a_J_MW": 0.560773444, "flujo_Q_I_a_J_MW": 0.274432855, "flujo_P_J_a_I_MW": -0.560219743, "flujo_Q_J_a_I_MW": -0.27424979},
      {"I": 11, "J": 12, "flujo_P_I_a_J_MW": 0.515219743, "flujo_Q_I_a_J_MW": 0.24424979, "flujo_P_J_a_I_MW": -0.514338608, "flujo_Q_J_a_I_MW": -0.243958432},
      {"I": 12, "J": 13, "flujo_P_I_a_J_MW": 0.454338608, "flujo_Q_I_a_J_MW": 0.208958432, "flujo_P_J_a_I_MW": -0.451672372, "flujo_Q_J_a_I_MW": -0.206860678},
      {"I": 13, "J": 14, "flujo_P_I_a_J_MW": 0.391672372, "flujo_Q_I_a_J_MW": 0.171860678, "flujo_P_J_a_I_MW": -0.390943211, "flujo_Q_J_a_I_MW": -0.170900894},
      {"I": 14, "J": 15, "flujo_P_I_a_J_MW": 0.270943211, "flujo_Q_I_a_J_MW": 0.090900894, "flujo_P_J_a_I_MW": -0.270586237, "flujo_Q_J_a_I_MW": -0.090583181},
      {"I": 15, "J": 16, "flujo_P_I_a_J_MW": 0.210586237, "flujo_Q_I_a_J_MW": 0.080583181, "flujo_P_J_a_I_MW": -0.21030477, "flujo_Q_J_a_I_MW": -0.080377634},
      {"I": 16, "J": 17, "flujo_P_I_a_J_MW": 0.15030477, "flujo_Q_I_a_J_MW": 0.060377634, "flujo_P_J_a_I_MW": -0.150053136, "flujo_Q_J_a_I_MW": -0.060041667},
      {"I": 17, "J": 18, "flujo_P_I_a_J_MW": 0.090053136, "flujo_Q_I_a_J_MW": 0.040041667, "flujo_P_J_a_I_MW": -0.09, "flujo_Q_J_a_I_MW": -0.04},
      {"I": 2, "J": 19, "flujo_P_I_a_J_MW": 0.361137523, "flujo_Q_I_a_J_MW": 0.161078853, "flujo_P_J_a_I_MW": -0.360976569, "flujo_Q_J_a_I_MW": -0.160925259},
      {"I": 19, "J": 20, "flujo_P_I_a_J_MW": 0.270976569, "flujo_Q_I_a_J_MW": 0.120925259, "flujo_P_J_a_I_MW": -0.270144393, "flujo_Q_J_a_I_MW": -0.120175404},
      {"I": 20, "J": 21, "flujo_P_I_a_J_MW": 0.180144393, "flujo_Q_I_a_J_MW": 0.080175404, "flujo_P_J_a_I_MW": -0.180043634, "flujo_Q_J_a_I_MW": -0.080057693},
      {"I": 21, "J": 22, "flujo_P_I_a_J_MW": 0.090043634, "flujo_Q_I_a_J_MW": 0.040057693, "flujo_P_J_a_I_MW": -0.09, "flujo_Q_J_a_I_MW": -0.04},
      {"I": 3, "J": 23, "flujo_P_I_a_J_MW": 0.939612757, "flujo_Q_I_a_J_MW": 0.457243045, "flujo_P_J_a_I_MW": -0.936431128, "flujo_Q_J_a_I_MW": -0.455069073},
      {"I": 23, "J": 24, "flujo_P_I_a_J_MW": 0.846431128, "flujo_Q_I_a_J_MW": 0.405069073, "flujo_P_J_a_I_MW": -0.841287452, "flujo_Q_J_a_I_MW": -0.401007403},
      {"I": 24, "J": 25, "flujo_P_I_a_J_MW": 0.421287452, "flujo_Q_I_a_J_MW": 0.201007403, "flujo_P_J_a_I_MW": -0.42, "flujo_Q_J_a_I_MW": -0.2},
      {
        "I": 6,
        "J": 26,
        "flujo_P_I_a_J_MW": 0.950779767,
        "flujo_Q_I_a_J_MW": 0.973635973,
        "flujo_P_J_a_I_MW": -0.948178871,
        "flujo_Q_J_a_I_MW": -0.972311182
      },
      {
        "I": 26,
        "J": 27,
        "flujo_P_I_a_J_MW": 0.888178871,
        "flujo_Q_I_a_J_MW": 0.947311182,
        "flujo_P_J_a_I_MW": -0.884849877,
        "flujo_Q_J_a_I_MW": -0.945616229
      },
      {
        "I": 27,
        "J": 28,
        "flujo_P_I_a_J_MW": 0.824849877,
        "flujo_Q_I_a_J_MW": 0.920616229,
        "flujo_P_J_a_I_MW": -0.813549021,
        "flujo_Q_J_a_I_MW": -0.910652481
      },
      {
        "I": 28,
        "J": 29,
        "flujo_P_I_a_J_MW": 0.753549021,
        "flujo_Q_I_a_J_MW": 0.890652481,
        "flujo_P_J_a_I_MW": -0.745715671,
        "flujo_Q_J_a_I_MW": -0.883828252
      },
      {
        "I": 29,
        "J": 30,
        "flujo_P_I_a_J_MW": 0.625715671,
        "flujo_Q_I_a_J_MW": 0.813828252,
        "flujo_P_J_a_I_MW": -0.621820002,
        "flujo_Q_J_a_I_MW": -0.811843956
      },
      {
        "I": 30,
        "J": 31,
        "flujo_P_I_a_J_MW": 0.421820002,
        "flujo_Q_I_a_J_MW": 0.211843956,
        "flujo_P_J_a_I_MW": -0.420226364,
        "flujo_Q_J_a_I_MW": -0.210268962
      },
      {
        "I": 31,
        "J": 32,
        "flujo_P_I_a_J_MW": 0.270226364,
        "flujo_Q_I_a_J_MW": 0.140268962,
        "flujo_P_J_a_I_MW": -0.270013169,
        "flujo_Q_J_a_I_MW": -0.140020475
      },
      {
        "I": 32,
        "J": 33,
        "flujo_P_I_a_J_MW": 0.060013169,
        "flujo_Q_I_a_J_MW": 0.040020475,
        "flujo_P_J_a_I_MW": -0.06,
        "flujo_Q_J_a_I_MW": -0.04
      },
      {
        "I": 21,
        "J": 8,
        "flujo_P_I_a_J_MW": 0,
        "flujo_Q_I_a_J_MW": 0,
        "flujo_P_J_a_I_MW": 0,
        "flujo_Q_J_a_I_MW": 0
      },
      {
        "I": 9,
        "J": 15,
        "flujo_P_I_a_J_MW": 0,
        "flujo_Q_I_a_J_MW": 0,
        "flujo_P_J_a_I_MW": 0,
        "flujo_Q_J_a_I_MW": 0
      },
      {
        "I": 12,
        "J": 22,
        "flujo_P_I_a_J_MW": 0,
        "flujo_Q_I_a_J_MW": 0,
        "flujo_P_J_a_I_MW": 0,
        "flujo_Q_J_a_I_MW": 0
      },
      {
        "I": 18,
        "J": 33,
        "flujo_P_I_a_J_MW": 0,
        "flujo_Q_I_a_J_MW": 0,
        "flujo_P_J_a_I_MW": 0,
        "flujo_Q_J_a_I_MW": 0
      },
      {
        "I": 25,
        "J": 29,
        "flujo_P_I_a_J_MW": 0,
        "flujo_Q_I_a_J_MW": 0,
        "flujo_P_J_a_I_MW": 0,
        "flujo_Q_J_a_I_MW": 0
      }
    ]
  };
    
    

  let nodos = {
    "nodes": [
      { "nodo": 1, "tipo_de_nodo": 3, "P_MW": 0, "Q_MVAR": 0, "V_max": 1, "V_min": 1 },
      { "nodo": 2, "tipo_de_nodo": 1, "P_MW": 0.1, "Q_MVAR": 0.06, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 3, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 4, "tipo_de_nodo": 1, "P_MW": 0.12, "Q_MVAR": 0.08, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 5, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 6, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 7, "tipo_de_nodo": 1, "P_MW": 0.2, "Q_MVAR": 0.1, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 8, "tipo_de_nodo": 1, "P_MW": 0.2, "Q_MVAR": 0.1, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 9, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 10, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 11, "tipo_de_nodo": 1, "P_MW": 0.045, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 12, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.035, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 13, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.035, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 14, "tipo_de_nodo": 1, "P_MW": 0.12, "Q_MVAR": 0.08, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 15, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.01, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 16, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 17, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 18, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 19, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 20, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 21, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 22, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 23, "tipo_de_nodo": 1, "P_MW": 0.09, "Q_MVAR": 0.05, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 24, "tipo_de_nodo": 1, "P_MW": 0.42, "Q_MVAR": 0.2, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 25, "tipo_de_nodo": 1, "P_MW": 0.42, "Q_MVAR": 0.2, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 26, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.025, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 27, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.025, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 28, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 29, "tipo_de_nodo": 1, "P_MW": 0.12, "Q_MVAR": 0.07, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 30, "tipo_de_nodo": 1, "P_MW": 0.2, "Q_MVAR": 0.6, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 31, "tipo_de_nodo": 1, "P_MW": 0.15, "Q_MVAR": 0.07, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 32, "tipo_de_nodo": 1, "P_MW": 0.21, "Q_MVAR": 0.1, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 33, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 }
    ]
  };
  
    
    
  
  let escenarios = [
    {
      "escenario": "ESCENARIO 1 CON SIN RD NI GD",
      "potencia_deslastrada_MW": 3.714999938,
      "potencia_atendida_MW": 6.23228e-08,
      "potencia_generada_adicional_MW": 3.714999938 - 6.23228e-08, // Calculado como potencia atendida - potencia deslastrada
      "costo_operacion_dolar_per_MWH": 812.0000365,
      "costo_deslastre_dolar_per_MWH": 812.0000365,
      "U1": 1.6776e-08,
      "U2": 0,
      "U": 8.38799e-09,
      "resiliencia": "MALA"
    },
    {
      "escenario": "ESCENARIO 2 CON RD SIN GD",
      "potencia_deslastrada_MW": 2.87137329,
      "potencia_atendida_MW": 0.84362671,
      "potencia_generada_adicional_MW": 2.87137329 - 0.84362671, // Calculado como potencia atendida - potencia deslastrada
      "costo_operacion_dolar_per_MWH": 623.2161152,
      "costo_deslastre_dolar_per_MWH": 581.0294847,
      "U1": 0.227086598,
      "U2": 0.067691816,
      "U": 0.147389207,
      "resiliencia": "MALA"
    },
    {
      "escenario": "ESCENARIO 3 CON GD SIN RD",
      "potencia_deslastrada_MW": 2.195002459,
      "potencia_atendida_MW": 1.519997541,
      "potencia_generada_adicional_MW": 2.195002459 - 1.519997541, // Calculado como potencia atendida - potencia deslastrada
      "costo_operacion_dolar_per_MWH": 604.2072499,
      "costo_deslastre_dolar_per_MWH": 490.0004264,
      "U1": 0.409151424,
      "U2": 0.189019287,
      "U": 0.299085356,
      "resiliencia": "MALA"
    },
    {
      "escenario": "ESCENARIO 4 CON GD Y RD",
      "potencia_deslastrada_MW": 2.26897477,
      "potencia_atendida_MW": 1.44602523,
      "potencia_generada_adicional_MW": 2.26897477 - 1.44602523, // Calculado como potencia atendida - potencia deslastrada
      "costo_operacion_dolar_per_MWH": 830.0809719,
      "costo_deslastre_dolar_per_MWH": 479.5013433,
      "U1": 0.389239631,
      "U2": 0.422343892,
      "U": 0.405791762,
      "resiliencia": "MALA"
    }
  ];
  
    
    

   
    let escenario1ConSinRdNiGd = [
      { "nodo": 24, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.420000005, "costo_dolar_por_MW": 84.00000097, "potencia_atendida_MW": -4.86218E-09, "_atendido": -1.15766E-06 },
      { "nodo": 25, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.420000005, "costo_dolar_por_MW": 84.00000098, "potencia_atendida_MW": -4.88029E-09, "_atendido": -1.16197E-06 },
      { "nodo": 29, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.119999984, "costo_dolar_por_MW": 11.99999843, "potencia_atendida_MW": 1.56727E-08, "_atendido": 1.30606E-05 },
      { "nodo": 30, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.200000005, "costo_dolar_por_MW": 40.000001, "potencia_atendida_MW": -5.01944E-09, "_atendido": -2.50972E-06 },
      { "nodo": 31, "carga_MW": 0.15, "potencia_deslastrada_MW": 0.149999992, "costo_dolar_por_MW": 59.99999694, "potencia_atendida_MW": 7.63883E-09, "_atendido": 5.09255E-06 },
      { "nodo": 32, "carga_MW": 0.21, "potencia_deslastrada_MW": 0.210000005, "costo_dolar_por_MW": 42.00000108, "potencia_atendida_MW": -5.42151E-09, "_atendido": -2.58167E-06 },
      { "nodo": 19, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.090000005, "costo_dolar_por_MW": 18.00000105, "potencia_atendida_MW": -5.24201E-09, "_atendido": -5.82445E-06 },
      { "nodo": 20, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.09000001, "costo_dolar_por_MW": 27.00000315, "potencia_atendida_MW": -1.04913E-08, "_atendido": -1.1657E-05 },
      { "nodo": 21, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.090000011, "costo_dolar_por_MW": 27.00000316, "potencia_atendida_MW": -1.05486E-08, "_atendido": -1.17207E-05 },
      { "nodo": 22, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089999966, "costo_dolar_por_MW": 8.999996641, "potencia_atendida_MW": 3.35934E-08, "_atendido": 3.7326E-05 },
      { "nodo": 3, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.090000038, "costo_dolar_por_MW": 27.00001146, "potencia_atendida_MW": -3.82025E-08, "_atendido": -4.24472E-05 },
      { "nodo": 4, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.119999983, "costo_dolar_por_MW": 11.99999832, "potencia_atendida_MW": 1.67835E-08, "_atendido": 1.39863E-05 },
      { "nodo": 23, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089999975, "costo_dolar_por_MW": 8.999997521, "potencia_atendida_MW": 2.47877E-08, "_atendido": 2.75419E-05 },
      { "nodo": 10, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.060000017, "costo_dolar_por_MW": 12.00000336, "potencia_atendida_MW": -1.68108E-08, "_atendido": -2.8018E-05 },
      { "nodo": 11, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.044999999, "costo_dolar_por_MW": 8.999999737, "potencia_atendida_MW": 1.31696E-09, "_atendido": 2.92658E-06 },
      { "nodo": 12, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999971, "costo_dolar_por_MW": 5.999997054, "potencia_atendida_MW": 2.94646E-08, "_atendido": 4.91077E-05 },
      { "nodo": 17, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.05999999, "costo_dolar_por_MW": 5.999998975, "potencia_atendida_MW": 1.02454E-08, "_atendido": 1.70757E-05 },
      { "nodo": 18, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.09000002, "costo_dolar_por_MW": 18.00000398, "potencia_atendida_MW": -1.9876E-08, "_atendido": -2.20844E-05 },
      { "nodo": 33, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.05999999, "costo_dolar_por_MW": 5.99999897, "potencia_atendida_MW": 1.03023E-08, "_atendido": 1.71705E-05 },
      { "nodo": 6, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999976, "costo_dolar_por_MW": 11.99999528, "potencia_atendida_MW": 2.3604E-08, "_atendido": 3.934E-05 },
      { "nodo": 7, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.200000023, "costo_dolar_por_MW": 80.00000925, "potencia_atendida_MW": -2.31154E-08, "_atendido": -1.15577E-05 },
      { "nodo": 8, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.200000023, "costo_dolar_por_MW": 60.00000695, "potencia_atendida_MW": -2.3153E-08, "_atendido": -1.15765E-05 },
      { "nodo": 9, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999973, "costo_dolar_por_MW": 5.999997325, "potencia_atendida_MW": 2.6752E-08, "_atendido": 4.45867E-05 },
      { "nodo": 13, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999978, "costo_dolar_por_MW": 5.999997751, "potencia_atendida_MW": 2.24949E-08, "_atendido": 3.74915E-05 },
      { "nodo": 14, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.120000021, "costo_dolar_por_MW": 36.00000624, "potencia_atendida_MW": -2.07842E-08, "_atendido": -1.73201E-05 },
      { "nodo": 15, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.060000025, "costo_dolar_por_MW": 24.00000988, "potencia_atendida_MW": -2.46929E-08, "_atendido": -4.11548E-05 },
      { "nodo": 16, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999967, "costo_dolar_por_MW": 5.99999665, "potencia_atendida_MW": 3.34984E-08, "_atendido": 5.58307E-05 },
      { "nodo": 27, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.060000021, "costo_dolar_por_MW": 24.0000084, "potencia_atendida_MW": -2.10051E-08, "_atendido": -3.50084E-05 },
      { "nodo": 28, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.05999996, "costo_dolar_por_MW": 5.999995973, "potencia_atendida_MW": 4.0273E-08, "_atendido": 6.71217E-05 },
      { "nodo": 2, "carga_MW": 0.1, "potencia_deslastrada_MW": 0.1, "costo_dolar_por_MW": 20, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 5, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 6, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 26, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 18, "potencia_atendida_MW": 0, "_atendido": 0 }
    ];
    
    
   
    
    let escenario2ConRdSinGd = [
      { "nodo": 24, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.314988828, "costo_dolar_por_MW": 62.99776565, "potencia_atendida_MW": 0.105011172, "_atendido": 25.00265994 },
      { "nodo": 25, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.302686469, "costo_dolar_por_MW": 60.53729381, "potencia_atendida_MW": 0.117313531, "_atendido": 27.93179308 },
      { "nodo": 29, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.119999994, "costo_dolar_por_MW": 11.99999941, "potencia_atendida_MW": 5.85687E-09, "_atendido": 4.88073E-06 },
      { "nodo": 30, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.199889238, "costo_dolar_por_MW": 39.97784757, "potencia_atendida_MW": 0.000110762, "_atendido": 0.055381071 },
      { "nodo": 31, "carga_MW": 0.15, "potencia_deslastrada_MW": 2.93081E-09, "costo_dolar_por_MW": 1.17232E-06, "potencia_atendida_MW": 0.149999997, "_atendido": 99.99999805 },
      { "nodo": 32, "carga_MW": 0.21, "potencia_deslastrada_MW": 0.209994064, "costo_dolar_por_MW": 41.99881273, "potencia_atendida_MW": 5.93636E-06, "_atendido": 0.002826839 },
      { "nodo": 19, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089997665, "costo_dolar_por_MW": 17.99953308, "potencia_atendida_MW": 2.33458E-06, "_atendido": 0.002593977 },
      { "nodo": 20, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.059035775, "costo_dolar_por_MW": 17.71073242, "potencia_atendida_MW": 0.030964225, "_atendido": 34.40469474 },
      { "nodo": 21, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.053483326, "costo_dolar_por_MW": 16.04499771, "potencia_atendida_MW": 0.036516674, "_atendido": 40.57408255 },
      { "nodo": 22, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089998836, "costo_dolar_por_MW": 8.999883584, "potencia_atendida_MW": 1.16416E-06, "_atendido": 0.001293509 },
      { "nodo": 3, "carga_MW": 0.09, "potencia_deslastrada_MW": 9.09156E-07, "costo_dolar_por_MW": 0.000272747, "potencia_atendida_MW": 0.089999091, "_atendido": 99.99898983 },
      { "nodo": 4, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.108701764, "costo_dolar_por_MW": 10.87017637, "potencia_atendida_MW": 0.011298236, "_atendido": 9.415196943 },
      { "nodo": 23, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.086315188, "costo_dolar_por_MW": 8.631518817, "potencia_atendida_MW": 0.003684812, "_atendido": 4.094235365 },
      { "nodo": 10, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.036632658, "costo_dolar_por_MW": 7.326531653, "potencia_atendida_MW": 0.023367342, "_atendido": 38.94556956 },
      { "nodo": 11, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.027124804, "costo_dolar_por_MW": 5.424960702, "potencia_atendida_MW": 0.017875196, "_atendido": 39.72265886 },
      { "nodo": 12, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059997725, "costo_dolar_por_MW": 5.999772483, "potencia_atendida_MW": 2.27517E-06, "_atendido": 0.003791956 },
      { "nodo": 17, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999651, "costo_dolar_por_MW": 5.9999651, "potencia_atendida_MW": 3.48995E-07, "_atendido": 0.000581658 },
      { "nodo": 18, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.022505171, "costo_dolar_por_MW": 4.501034232, "potencia_atendida_MW": 0.067494829, "_atendido": 74.99425426 },
      { "nodo": 33, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999651, "costo_dolar_por_MW": 5.999965097, "potencia_atendida_MW": 3.49025E-07, "_atendido": 0.000581708 },
      { "nodo": 6, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999754, "costo_dolar_por_MW": 11.99995085, "potencia_atendida_MW": 2.45744E-07, "_atendido": 0.000409573 },
      { "nodo": 7, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.185000648, "costo_dolar_por_MW": 74.00025933, "potencia_atendida_MW": 0.014999352, "_atendido": 7.499675842 },
      { "nodo": 8, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.170007233, "costo_dolar_por_MW": 51.0021699, "potencia_atendida_MW": 0.029992767, "_atendido": 14.99638351 },
      { "nodo": 9, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999158, "costo_dolar_por_MW": 5.999915817, "potencia_atendida_MW": 8.4183E-07, "_atendido": 0.001403051 },
      { "nodo": 13, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999433, "costo_dolar_por_MW": 5.999943312, "potencia_atendida_MW": 5.66879E-07, "_atendido": 0.000944798 },
      { "nodo": 14, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.090004035, "costo_dolar_por_MW": 27.00121038, "potencia_atendida_MW": 0.029995965, "_atendido": 24.99663784 },
      { "nodo": 15, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.030005493, "costo_dolar_por_MW": 12.00219722, "potencia_atendida_MW": 0.029994507, "_atendido": 49.99084491 },
      { "nodo": 16, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999279, "costo_dolar_por_MW": 5.999927939, "potencia_atendida_MW": 7.20606E-07, "_atendido": 0.00120101 },
      { "nodo": 27, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.030007306, "costo_dolar_por_MW": 12.00292242, "potencia_atendida_MW": 0.029992694, "_atendido": 49.98782323 },
      { "nodo": 28, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999231, "costo_dolar_por_MW": 5.999923149, "potencia_atendida_MW": 7.6851E-07, "_atendido": 0.00128085 },
      { "nodo": 2, "carga_MW": 0.1, "potencia_deslastrada_MW": 0.075, "costo_dolar_por_MW": 15, "potencia_atendida_MW": 0.025, "_atendido": 25 },
      { "nodo": 5, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.03, "costo_dolar_por_MW": 3, "potencia_atendida_MW": 0.03, "_atendido": 50 },
      { "nodo": 26, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 18, "potencia_atendida_MW": 0, "_atendido": 0 }
  ];
  
    

    
    let escenario3ConGdSinRd = [
      {nodo: 24, carga_MW: 0.42, potencia_deslastrada_MW: 2.66233e-7, costo_dolar_por_MW: 5.32467e-5, potencia_atendida_MW: 0.419999734, _atendido: 99.99993661},
      {nodo: 25, carga_MW: 0.42, potencia_deslastrada_MW: 2.66255e-7, costo_dolar_por_MW: 5.3251e-5, potencia_atendida_MW: 0.419999734, _atendido: 99.99993661},
      {nodo: 29, carga_MW: 0.12, potencia_deslastrada_MW: 1.34725e-6, costo_dolar_por_MW: 0.000134725, potencia_atendida_MW: 0.119998653, _atendido: 99.99887729},
      {nodo: 30, carga_MW: 0.2, potencia_deslastrada_MW: 2.67328e-7, costo_dolar_por_MW: 5.34656e-5, potencia_atendida_MW: 0.199999733, _atendido: 99.99986634},
      {nodo: 31, carga_MW: 0.15, potencia_deslastrada_MW: 1.02644e-7, costo_dolar_por_MW: 4.10576e-5, potencia_atendida_MW: 0.149999897, _atendido: 99.99993157},
      {nodo: 32, carga_MW: 0.21, potencia_deslastrada_MW: 2.68037e-7, costo_dolar_por_MW: 5.36074e-5, potencia_atendida_MW: 0.209999732, _atendido: 99.99987236},
      {nodo: 19, carga_MW: 0.09, potencia_deslastrada_MW: 0.090000005, costo_dolar_por_MW: 18.00000105, potencia_atendida_MW: -5.24201e-9, _atendido: -5.82445e-6},
      {nodo: 20, carga_MW: 0.09, potencia_deslastrada_MW: 0.09000001, costo_dolar_por_MW: 27.00000315, potencia_atendida_MW: -1.04913e-8, _atendido: -1.1657e-5},
      {nodo: 21, carga_MW: 0.09, potencia_deslastrada_MW: 0.090000011, costo_dolar_por_MW: 27.00000316, potencia_atendida_MW: -1.05486e-8, _atendido: -1.17207e-5},
      {nodo: 22, carga_MW: 0.09, potencia_deslastrada_MW: 0.089999966, costo_dolar_por_MW: 8.999996641, potencia_atendida_MW: 3.35934e-8, _atendido: 3.7326e-5},
      {nodo: 3, carga_MW: 0.09, potencia_deslastrada_MW: 0.090000038, costo_dolar_por_MW: 27.00001146, potencia_atendida_MW: -3.82025e-8, _atendido: -4.24472e-5},
      {nodo: 4, carga_MW: 0.12, potencia_deslastrada_MW: 0.119999983, costo_dolar_por_MW: 11.99999832, potencia_atendida_MW: 1.67835e-8, _atendido: 1.39863e-5},
      {nodo: 23, carga_MW: 0.09, potencia_deslastrada_MW: 0.089999975, costo_dolar_por_MW: 8.999997521, potencia_atendida_MW: 2.47877e-8, _atendido: 2.75419e-5},
      {nodo: 10, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000017, costo_dolar_por_MW: 12.00000336, potencia_atendida_MW: -1.68108e-8, _atendido: -2.8018e-5},
      {nodo: 11, carga_MW: 0.045, potencia_deslastrada_MW: 0.044999999, costo_dolar_por_MW: 8.999999737, potencia_atendida_MW: 1.31696e-9, _atendido: 2.92658e-6},
      {nodo: 12, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999971, costo_dolar_por_MW: 5.999997054, potencia_atendida_MW: 2.94646e-8, _atendido: 4.91077e-5},
      {nodo: 17, carga_MW: 0.06, potencia_deslastrada_MW: 0.05999999, costo_dolar_por_MW: 5.999998975, potencia_atendida_MW: 1.02454e-8, _atendido: 1.70757e-5},
      {nodo: 18, carga_MW: 0.09, potencia_deslastrada_MW: 0.09000002, costo_dolar_por_MW: 18.00000398, potencia_atendida_MW: -1.9876e-8, _atendido: -2.20844e-5},
      {nodo: 33, carga_MW: 0.06, potencia_deslastrada_MW: 0.05999999, costo_dolar_por_MW: 5.99999897, potencia_atendida_MW: 1.03023e-8, _atendido: 1.71705e-5},
      {nodo: 6, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999976, costo_dolar_por_MW: 11.99999528, potencia_atendida_MW: 2.3604e-8, _atendido: 3.934e-5},
      {nodo: 7, carga_MW: 0.2, potencia_deslastrada_MW: 0.200000023, costo_dolar_por_MW: 80.00000925, potencia_atendida_MW: -2.31154e-8, _atendido: -1.15577e-5},
      {nodo: 8, carga_MW: 0.2, potencia_deslastrada_MW: 0.200000023, costo_dolar_por_MW: 60.00000695, potencia_atendida_MW: -2.3153e-8, _atendido: -1.15765e-5},
      {nodo: 9, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999973, costo_dolar_por_MW: 5.999997325, potencia_atendida_MW: 2.6752e-8, _atendido: 4.45867e-5},
      {nodo: 13, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999978, costo_dolar_por_MW: 5.999997751, potencia_atendida_MW: 2.24949e-8, _atendido: 3.74915e-5},
      {nodo: 14, carga_MW: 0.12, potencia_deslastrada_MW: 0.120000021, costo_dolar_por_MW: 36.00000624, potencia_atendida_MW: -2.07842e-8, _atendido: -1.73201e-5},
      {nodo: 15, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000025, costo_dolar_por_MW: 24.00000988, potencia_atendida_MW: -2.46929e-8, _atendido: -4.11548e-5},
      {nodo: 16, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999967, costo_dolar_por_MW: 5.99999665, potencia_atendida_MW: 3.34984e-8, _atendido: 5.58307e-5},
      {nodo: 27, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000021, costo_dolar_por_MW: 24.0000084, potencia_atendida_MW: -2.10051e-8, _atendido: -3.50084e-5},
      {nodo: 28, carga_MW: 0.06, potencia_deslastrada_MW: 0.05999996, costo_dolar_por_MW: 5.999995973, potencia_atendida_MW: 4.0273e-8, _atendido: 6.71217e-5},
      {nodo: 2, carga_MW: 0.1, potencia_deslastrada_MW: 0.1, costo_dolar_por_MW: 20, potencia_atendida_MW: 0, _atendido: 0},
      {nodo: 5, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 6, potencia_atendida_MW: 0, _atendido: 0},
      {nodo: 26, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 18, potencia_atendida_MW: 0, _atendido: 0}
    ];
    
 
   
    
    let escenario4ConGdYRd = [
      {nodo: 24, carga_MW: 0.42, potencia_deslastrada_MW: 0.131801755, costo_dolar_por_MW: 26.36035095, potencia_atendida_MW: 0.288198245, _atendido: 68.61862983},
      {nodo: 25, carga_MW: 0.42, potencia_deslastrada_MW: 0.122981517, costo_dolar_por_MW: 24.59630343, potencia_atendida_MW: 0.297018483, _atendido: 70.7186864},
      {nodo: 29, carga_MW: 0.12, potencia_deslastrada_MW: 0.067003799, costo_dolar_por_MW: 6.700379866, potencia_atendida_MW: 0.052996201, _atendido: 44.16350112},
      {nodo: 30, carga_MW: 0.2, potencia_deslastrada_MW: 0.08357121, costo_dolar_por_MW: 16.71424205, potencia_atendida_MW: 0.11642879, _atendido: 58.21439488},
      {nodo: 31, carga_MW: 0.15, potencia_deslastrada_MW: 0.068259718, costo_dolar_por_MW: 27.30388718, potencia_atendida_MW: 0.081740282, _atendido: 54.49352136},
      {nodo: 32, carga_MW: 0.21, potencia_deslastrada_MW: 0.071542078, costo_dolar_por_MW: 14.30841557, potencia_atendida_MW: 0.138457922, _atendido: 65.93234389},
      {nodo: 19, carga_MW: 0.09, potencia_deslastrada_MW: 0.089997665, costo_dolar_por_MW: 17.99953308, potencia_atendida_MW: 2.33458e-6, _atendido: 0.002593977},
      {nodo: 20, carga_MW: 0.09, potencia_deslastrada_MW: 0.059035775, costo_dolar_por_MW: 17.71073242, potencia_atendida_MW: 0.030964225, _atendido: 34.40469474},
      {nodo: 21, carga_MW: 0.09, potencia_deslastrada_MW: 0.053483326, costo_dolar_por_MW: 16.04499771, potencia_atendida_MW: 0.036516674, _atendido: 40.57408255},
      {nodo: 22, carga_MW: 0.09, potencia_deslastrada_MW: 0.089998836, costo_dolar_por_MW: 8.999883584, potencia_atendida_MW: 1.16416e-6, _atendido: 0.001293509},
      {nodo: 3, carga_MW: 0.09, potencia_deslastrada_MW: 9.09156e-7, costo_dolar_por_MW: 0.000272747, potencia_atendida_MW: 0.089999091, _atendido: 99.99898983},
      {nodo: 4, carga_MW: 0.12, potencia_deslastrada_MW: 0.108701764, costo_dolar_por_MW: 10.87017637, potencia_atendida_MW: 0.011298236, _atendido: 9.415196943},
      {nodo: 23, carga_MW: 0.09, potencia_deslastrada_MW: 0.086315188, costo_dolar_por_MW: 8.631518817, potencia_atendida_MW: 0.003684812, _atendido: 4.094235365},
      {nodo: 10, carga_MW: 0.06, potencia_deslastrada_MW: 0.036632658, costo_dolar_por_MW: 7.326531653, potencia_atendida_MW: 0.023367342, _atendido: 38.94556956},
      {nodo: 11, carga_MW: 0.045, potencia_deslastrada_MW: 0.027124804, costo_dolar_por_MW: 5.424960702, potencia_atendida_MW: 0.017875196, _atendido: 39.72265886},
      {nodo: 12, carga_MW: 0.06, potencia_deslastrada_MW: 0.059997725, costo_dolar_por_MW: 5.999772483, potencia_atendida_MW: 2.27517e-6, _atendido: 0.003791956},
      {nodo: 17, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999651, costo_dolar_por_MW: 5.9999651, potencia_atendida_MW: 3.48995e-7, _atendido: 0.000581658},
      {nodo: 18, carga_MW: 0.09, potencia_deslastrada_MW: 0.022505171, costo_dolar_por_MW: 4.501034232, potencia_atendida_MW: 0.067494829, _atendido: 74.99425426},
      {nodo: 33, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999651, costo_dolar_por_MW: 5.999965097, potencia_atendida_MW: 3.49025e-7, _atendido: 0.000581708},
      {nodo: 6, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999754, costo_dolar_por_MW: 11.99995085, potencia_atendida_MW: 2.45744e-7, _atendido: 0.000409573},
      {nodo: 7, carga_MW: 0.2, potencia_deslastrada_MW: 0.185000648, costo_dolar_por_MW: 74.00025933, potencia_atendida_MW: 0.014999352, _atendido: 7.499675842},
      {nodo: 8, carga_MW: 0.2, potencia_deslastrada_MW: 0.170007233, costo_dolar_por_MW: 51.0021699, potencia_atendida_MW: 0.029992767, _atendido: 14.99638351},
      {nodo: 9, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999158, costo_dolar_por_MW: 5.999915817, potencia_atendida_MW: 8.4183e-7, _atendido: 0.001403051},
      {nodo: 13, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999433, costo_dolar_por_MW: 5.999943312, potencia_atendida_MW: 5.66879e-7, _atendido: 0.000944798},
      {nodo: 14, carga_MW: 0.12, potencia_deslastrada_MW: 0.090004035, costo_dolar_por_MW: 27.00121038, potencia_atendida_MW: 0.029995965, _atendido: 24.99663784},
      {nodo: 15, carga_MW: 0.06, potencia_deslastrada_MW: 0.030005493, costo_dolar_por_MW: 12.00219722, potencia_atendida_MW: 0.029994507, _atendido: 49.99084491},
      {nodo: 16, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999279, costo_dolar_por_MW: 5.999927939, potencia_atendida_MW: 7.20606e-7, _atendido: 0.00120101},
      {nodo: 27, carga_MW: 0.06, potencia_deslastrada_MW: 0.030007306, costo_dolar_por_MW: 12.00292242, potencia_atendida_MW: 0.029992694, _atendido: 49.98782323},
      {nodo: 28, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999231, costo_dolar_por_MW: 5.999923149, potencia_atendida_MW: 7.6851e-7, _atendido: 0.00128085},
      {nodo: 2, carga_MW: 0.1, potencia_deslastrada_MW: 0.075, costo_dolar_por_MW: 15, potencia_atendida_MW: 0.025, _atendido: 25},
      {nodo: 5, carga_MW: 0.06, potencia_deslastrada_MW: 0.03, costo_dolar_por_MW: 3, potencia_atendida_MW: 0.03, _atendido: 50},
      {nodo: 26, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 18, potencia_atendida_MW: 0, _atendido: 0}
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
