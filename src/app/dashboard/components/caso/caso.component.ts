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

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "4 - 5",
            "porcentaje": 100
          },
          {
            "linea": "1 - 4",
            "porcentaje": 90
          },
          {
            "linea": "1 - 2",
            "porcentaje": 60
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 4",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 3",
            "porcentaje": 80
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [],
      "tiempo_ejecucion": 57.3774135
    }
    

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

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso,obj})
   }

   if(caso=="24"){
    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "12 - 23",
            "porcentaje": 100
          },
          {
            "linea": "20 - 23",
            "porcentaje": 100
          },
          {
            "linea": "20 - 23_2",
            "porcentaje": 100
          },
          {
            "linea": "21 - 22",
            "porcentaje": 100
          },
          {
            "linea": "12 - 13",
            "porcentaje": 94
          },
          {
            "linea": "17 - 22",
            "porcentaje": 94
          },
          {
            "linea": "11 - 13",
            "porcentaje": 92
          },
          {
            "linea": "14 - 16",
            "porcentaje": 78
          },
          {
            "linea": "3 - 24",
            "porcentaje": 66
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 18",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 21",
            "porcentaje": 100
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [
        {
          "linea": "7-8",
          "porcentaje_sobrecarga": 99.9848
        }
      ],
      "tiempo_ejecucion": 199.4452682
    }
    
   
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

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso,obj})
   }

   if(caso=="12"){

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "5 - 6",
            "porcentaje": 100
          },
          {
            "linea": "9 - 10",
            "porcentaje": 96.6667
          },
          {
            "linea": "11 - 12",
            "porcentaje": 93.3333
          },
          {
            "linea": "2 - 3",
            "porcentaje": 90
          },
          {
            "linea": "3 - 4",
            "porcentaje": 83.3333
          },
          {
            "linea": "1 - 2",
            "porcentaje": 70
          },
          {
            "linea": "4 - 5",
            "porcentaje": 63.3333
          },
          {
            "linea": "6 - 7",
            "porcentaje": 60
          },
          {
            "linea": "7 - 8",
            "porcentaje": 60
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 1",
            "porcentaje": 53.3333
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [],
      "tiempo_ejecucion": 108.9025465
    }
    
   
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

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "Nodo 2",
            "porcentaje": 100
          },
          {
            "linea": "Nodo 3",
            "porcentaje": 91.6667
          },
          {
            "linea": "Nodo 1",
            "porcentaje": 75
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 2",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 3",
            "porcentaje": 91.6667
          },
          {
            "generador": "Nodo 1",
            "porcentaje": 75
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [
        {
          "linea": "4-5",
          "porcentaje_sobrecarga": 128.3223
        }
      ],
      "tiempo_ejecucion": 58.96929
    }
   
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

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "6 - 7",
            "porcentaje": 100
          },
          {
            "linea": "3 - 6",
            "porcentaje": 80
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 1",
            "porcentaje": 90
          },
          {
            "generador": "Nodo 2",
            "porcentaje": 80
          },
          {
            "generador": "Nodo 3",
            "porcentaje": 70
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [],
      "tiempo_ejecucion": 65.425929
    }
    
   
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

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "2 - 3",
            "porcentaje": 100
          },
          {
            "linea": "2 - 4",
            "porcentaje": 100
          },
          {
            "linea": "4 - 5",
            "porcentaje": 100
          },
          {
            "linea": "7 - 8",
            "porcentaje": 100
          },
          {
            "linea": "6 - 13",
            "porcentaje": 93.3333
          },
          {
            "linea": "6 - 12",
            "porcentaje": 70
          },
          {
            "linea": "6 - 11",
            "porcentaje": 63.3333
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 3",
            "porcentaje": 100
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [],
      "tiempo_ejecucion": 0
    }
    
   
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

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "3 - 4",
            "porcentaje": 100
          },
          {
            "linea": "4 - 5",
            "porcentaje": 100
          },
          {
            "linea": "4 - 14",
            "porcentaje": 100
          },
          {
            "linea": "9 - 10",
            "porcentaje": 83.3333
          },
          {
            "linea": "6 - 8",
            "porcentaje": 83.3333
          },
          {
            "linea": "2 - 6",
            "porcentaje": 76.6667
          },
          {
            "linea": "1 - 2",
            "porcentaje": 63.3333
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 1",
            "porcentaje": 60
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [
        {
          "linea": "3-11",
          "porcentaje_sobrecarga": "Inf"
        }
      ],
      "tiempo_ejecucion": 183.5796306
    }
    
   
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

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "12 - 13",
            "porcentaje": 97.2222
          },
          {
            "linea": "5 - 16",
            "porcentaje": 97.2222
          },
          {
            "linea": "6 - 8",
            "porcentaje": 83.3333
          },
          {
            "linea": "9 - 10",
            "porcentaje": 72.2222
          },
          {
            "linea": "6 - 7",
            "porcentaje": 66.6667
          },
          {
            "linea": "2 - 9",
            "porcentaje": 63.8889
          },
          {
            "linea": "11 - 12",
            "porcentaje": 61.1111
          },
          {
            "linea": "16 - 17",
            "porcentaje": 52.7778
          },
          {
            "linea": "17 - 18",
            "porcentaje": 52.7778
          }
        ],
        "generadores": []
      },
      "metrica_lineas_con_sobrecarga": [],
      "tiempo_ejecucion": 234.9771219
    }
    
   
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

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "5 - 6",
            "porcentaje": 100
          },
          {
            "linea": "11 - 13",
            "porcentaje": 100
          },
          {
            "linea": "13 - 14",
            "porcentaje": 100
          },
          {
            "linea": "14 - 16",
            "porcentaje": 100
          },
          {
            "linea": "16 - 17",
            "porcentaje": 100
          },
          {
            "linea": "17 - 19",
            "porcentaje": 100
          },
          {
            "linea": "9 - 11",
            "porcentaje": 80
          },
          {
            "linea": "20 - 22",
            "porcentaje": 77.5
          },
          {
            "linea": "6 - 7",
            "porcentaje": 75
          },
          {
            "linea": "19 - 20",
            "porcentaje": 70
          },
          {
            "linea": "1 - 2",
            "porcentaje": 57.5
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 1",
            "porcentaje": 62.5
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [],
      "tiempo_ejecucion": 359.5231133
    }
    
   
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

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "12 - 13",
            "porcentaje": 100
          },
          {
            "linea": "4 - 6",
            "porcentaje": 68.3333
          },
          {
            "linea": "6 - 9",
            "porcentaje": 66.6667
          },
          {
            "linea": "21 - 22",
            "porcentaje": 51.6667
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 1",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 2",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 27",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 23",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 22",
            "porcentaje": 95
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [],
      "tiempo_ejecucion": 246.2458001
    }
    
   
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

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "14 - 15",
            "porcentaje": 100
          },
          {
            "linea": "9 - 15",
            "porcentaje": 100
          },
          {
            "linea": "21 - 8",
            "porcentaje": 98.4848
          },
          {
            "linea": "4 - 5",
            "porcentaje": 96.9697
          },
          {
            "linea": "16 - 17",
            "porcentaje": 95.4545
          },
          {
            "linea": "2 - 3",
            "porcentaje": 93.9394
          },
          {
            "linea": "12 - 13",
            "porcentaje": 93.9394
          },
          {
            "linea": "12 - 22",
            "porcentaje": 92.4242
          },
          {
            "linea": "28 - 29",
            "porcentaje": 90.9091
          },
          {
            "linea": "9 - 10",
            "porcentaje": 89.3939
          },
          {
            "linea": "26 - 27",
            "porcentaje": 89.3939
          },
          {
            "linea": "1 - 2",
            "porcentaje": 87.8788
          },
          {
            "linea": "23 - 24",
            "porcentaje": 87.8788
          },
          {
            "linea": "7 - 8",
            "porcentaje": 84.8485
          },
          {
            "linea": "5 - 6",
            "porcentaje": 63.6364
          },
          {
            "linea": "6 - 26",
            "porcentaje": 53.0303
          }
        ],
        "generadores": [],
      },
      "metrica_lineas_con_sobrecarga": [
        {
          "linea": "24-25",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "30-31",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "25-29",
          "porcentaje_sobrecarga": "Inf"
        }
      ],
      "tiempo_ejecucion": 1106.019104
    }
    
   
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

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "6 - 7",
            "porcentaje": 100
          },
          {
            "linea": "3 - 13",
            "porcentaje": 100
          },
          {
            "linea": "15 - 16",
            "porcentaje": 100
          },
          {
            "linea": "19 - 20",
            "porcentaje": 100
          },
          {
            "linea": "33 - 34",
            "porcentaje": 100
          },
          {
            "linea": "26 - 27",
            "porcentaje": 97.0588
          },
          {
            "linea": "10 - 31",
            "porcentaje": 97.0588
          },
          {
            "linea": "11 - 12",
            "porcentaje": 91.1765
          },
          {
            "linea": "21 - 22",
            "porcentaje": 91.1765
          },
          {
            "linea": "24 - 25",
            "porcentaje": 80.8824
          },
          {
            "linea": "7 - 28",
            "porcentaje": 73.5294
          },
          {
            "linea": "7 - 8",
            "porcentaje": 72.0588
          },
          {
            "linea": "9 - 10",
            "porcentaje": 54.4118
          }
        ],
        "generadores": [],
      },
      "metrica_lineas_con_sobrecarga": [
        {
          "linea": "1-2",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "2-3",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "3-4",
          "porcentaje_sobrecarga": "Inf"
        }
      ],
      "tiempo_ejecucion": 476.8133372
    }
    
   
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
        {"I": 1, "J": 2, "flujo_P_I_a_J_MW": 3.090510178, "flujo_Q_I_a_J_MW": 4.700253918, "flujo_P_J_a_I_MW": -3.059912609, "flujo_Q_J_a_I_MW": -4.687701069},
        {"I": 2, "J": 3, "flujo_P_I_a_J_MW": 2.917412609, "flujo_Q_I_a_J_MW": 4.457701069, "flujo_P_J_a_I_MW": -2.892009809, "flujo_Q_J_a_I_MW": -4.447279408},
        {"I": 3, "J": 4, "flujo_P_I_a_J_MW": 2.749343593, "flujo_Q_I_a_J_MW": 4.217750859, "flujo_P_J_a_I_MW": -2.714259356, "flujo_Q_J_a_I_MW": -4.208011757},
        {"I": 4, "J": 5, "flujo_P_I_a_J_MW": 2.571759356, "flujo_Q_I_a_J_MW": 3.978011757, "flujo_P_J_a_I_MW": -2.543217634, "flujo_Q_J_a_I_MW": -3.970088804},
        {"I": 5, "J": 6, "flujo_P_I_a_J_MW": 2.400717634, "flujo_Q_I_a_J_MW": 3.740088804, "flujo_P_J_a_I_MW": -2.375357357, "flujo_Q_J_a_I_MW": -3.733048995},
        {"I": 6, "J": 7, "flujo_P_I_a_J_MW": 0.806653926, "flujo_Q_I_a_J_MW": 1.282259262, "flujo_P_J_a_I_MW": -0.800402381, "flujo_Q_J_a_I_MW": -1.281185523},
        {"I": 7, "J": 8, "flujo_P_I_a_J_MW": 0.656250209, "flujo_Q_I_a_J_MW": 1.056159387, "flujo_P_J_a_I_MW": -0.653426544, "flujo_Q_J_a_I_MW": -1.055674406},
        {"I": 8, "J": 9, "flujo_P_I_a_J_MW": 0.510926544, "flujo_Q_I_a_J_MW": 0.825674406, "flujo_P_J_a_I_MW": -0.508335963, "flujo_Q_J_a_I_MW": -0.825229459},
        {"I": 9, "J": 10, "flujo_P_I_a_J_MW": 0.365835963, "flujo_Q_I_a_J_MW": 0.595229459, "flujo_P_J_a_I_MW": -0.364938554, "flujo_Q_J_a_I_MW": -0.595075324},
        {"I": 10, "J": 11, "flujo_P_I_a_J_MW": 0.226738037, "flujo_Q_I_a_J_MW": 0.367040884, "flujo_P_J_a_I_MW": -0.2265238, "flujo_Q_J_a_I_MW": -0.367004088},
        {"I": 11, "J": 12, "flujo_P_I_a_J_MW": 0.0840238, "flujo_Q_I_a_J_MW": 0.137004088, "flujo_P_J_a_I_MW": -0.084, "flujo_Q_J_a_I_MW": -0.137},
        {"I": 3, "J": 13, "flujo_P_I_a_J_MW": 0.142666217, "flujo_Q_I_a_J_MW": 0.229528549, "flujo_P_J_a_I_MW": -0.142569584, "flujo_Q_J_a_I_MW": -0.229511951},
        {"I": 13, "J": 14, "flujo_P_I_a_J_MW": 0.097569584, "flujo_Q_I_a_J_MW": 0.157511951, "flujo_P_J_a_I_MW": -0.097508994, "flujo_Q_J_a_I_MW": -0.157501545},
        {"I": 14, "J": 15, "flujo_P_I_a_J_MW": 0.052508994, "flujo_Q_I_a_J_MW": 0.085501545, "flujo_P_J_a_I_MW": -0.052500105, "flujo_Q_J_a_I_MW": -0.085500018},
        {"I": 15, "J": 16, "flujo_P_I_a_J_MW": 0.007500105, "flujo_Q_I_a_J_MW": 0.013500018, "flujo_P_J_a_I_MW": -0.0075, "flujo_Q_J_a_I_MW": -0.0135},
        {"I": 6, "J": 17, "flujo_P_I_a_J_MW": 1.568703431, "flujo_Q_I_a_J_MW": 2.450789732, "flujo_P_J_a_I_MW": -1.555541874, "flujo_Q_J_a_I_MW": -2.44713619},
        {"I": 17, "J": 18, "flujo_P_I_a_J_MW": 1.413041874, "flujo_Q_I_a_J_MW": 2.21713619, "flujo_P_J_a_I_MW": -1.403123419, "flujo_Q_J_a_I_MW": -2.214382906},
        {"I": 18, "J": 19, "flujo_P_I_a_J_MW": 1.260623419, "flujo_Q_I_a_J_MW": 1.984382906, "flujo_P_J_a_I_MW": -1.250538994, "flujo_Q_J_a_I_MW": -1.982088566},
        {"I": 19, "J": 20, "flujo_P_I_a_J_MW": 1.108038994, "flujo_Q_I_a_J_MW": 1.752088566, "flujo_P_J_a_I_MW": -1.100865858, "flujo_Q_J_a_I_MW": -1.750456583},
        {"I": 20, "J": 21, "flujo_P_I_a_J_MW": 0.958365858, "flujo_Q_I_a_J_MW": 1.520456583, "flujo_P_J_a_I_MW": -0.952947004, "flujo_Q_J_a_I_MW": -1.519223722},
        {"I": 21, "J": 22, "flujo_P_I_a_J_MW": 0.810447004, "flujo_Q_I_a_J_MW": 1.289223722, "flujo_P_J_a_I_MW": -0.805030774, "flujo_Q_J_a_I_MW": -1.288293454},
        {"I": 22, "J": 23, "flujo_P_I_a_J_MW": 0.662530774, "flujo_Q_I_a_J_MW": 1.058293454, "flujo_P_J_a_I_MW": -0.65887204, "flujo_Q_J_a_I_MW": -1.057665045},
        {"I": 23, "J": 24, "flujo_P_I_a_J_MW": 0.51637204, "flujo_Q_I_a_J_MW": 0.827665045, "flujo_P_J_a_I_MW": -0.513681176, "flujo_Q_J_a_I_MW": -0.827202874},
        {"I": 24, "J": 25, "flujo_P_I_a_J_MW": 0.371181176, "flujo_Q_I_a_J_MW": 0.597202874, "flujo_P_J_a_I_MW": -0.370245698, "flujo_Q_J_a_I_MW": -0.5970422},
        {"I": 25, "J": 26, "flujo_P_I_a_J_MW": 0.227745698, "flujo_Q_I_a_J_MW": 0.3670422, "flujo_P_J_a_I_MW": -0.227524657, "flujo_Q_J_a_I_MW": -0.367017832},
        {"I": 26, "J": 27, "flujo_P_I_a_J_MW": 0.085024657, "flujo_Q_I_a_J_MW": 0.137004235, "flujo_P_J_a_I_MW": -0.085, "flujo_Q_J_a_I_MW": -0.137},
        {"I": 7, "J": 28, "flujo_P_I_a_J_MW": 0.144152172, "flujo_Q_I_a_J_MW": 0.225026136, "flujo_P_J_a_I_MW": -0.144054353, "flujo_Q_J_a_I_MW": -0.225009335},
        {"I": 28, "J": 29, "flujo_P_I_a_J_MW": 0.096054353, "flujo_Q_I_a_J_MW": 0.150009335, "flujo_P_J_a_I_MW": -0.096010871, "flujo_Q_J_a_I_MW": -0.150001867},
        {"I": 29, "J": 30, "flujo_P_I_a_J_MW": 0.048010871, "flujo_Q_I_a_J_MW": 0.075001867, "flujo_P_J_a_I_MW": -0.048, "flujo_Q_J_a_I_MW": -0.075},
        {"I": 10, "J": 31, "flujo_P_I_a_J_MW": 0.138200518, "flujo_Q_I_a_J_MW": 0.22803444, "flujo_P_J_a_I_MW": -0.138102315, "flujo_Q_J_a_I_MW": -0.228017573},
        {"I": 31, "J": 32, "flujo_P_I_a_J_MW": 0.103602315, "flujo_Q_I_a_J_MW": 0.171017573, "flujo_P_J_a_I_MW": -0.10352865, "flujo_Q_J_a_I_MW": -0.171004921},
        {"I": 32, "J": 33, "flujo_P_I_a_J_MW": 0.06902865, "flujo_Q_I_a_J_MW": 0.114004921, "flujo_P_J_a_I_MW": -0.069004093, "flujo_Q_J_a_I_MW": -0.114000703},
        {"I": 33, "J": 34, "flujo_P_I_a_J_MW": 0.034504093, "flujo_Q_I_a_J_MW": 0.057000703, "flujo_P_J_a_I_MW": -0.0345, "flujo_Q_J_a_I_MW": -0.057}
      ]
    };
    
    

    let nodos = {
      "nodes": [
        { "nodo": 1, "tipo_de_nodo": 3, "P_MW": 0, "Q_MVAR": 0, "V_max": 1, "V_min": 1 },
        { "nodo": 2, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 3, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 4, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 5, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 6, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 7, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 8, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 9, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 10, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 11, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 12, "tipo_de_nodo": 1, "P_MW": 0.084, "Q_MVAR": 0.137, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 13, "tipo_de_nodo": 1, "P_MW": 0.045, "Q_MVAR": 0.072, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 14, "tipo_de_nodo": 1, "P_MW": 0.045, "Q_MVAR": 0.072, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 15, "tipo_de_nodo": 1, "P_MW": 0.045, "Q_MVAR": 0.072, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 16, "tipo_de_nodo": 1, "P_MW": 0.0075, "Q_MVAR": 0.0135, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 17, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 18, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 19, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 20, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 21, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 22, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 23, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 24, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 25, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 26, "tipo_de_nodo": 1, "P_MW": 0.1425, "Q_MVAR": 0.23, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 27, "tipo_de_nodo": 1, "P_MW": 0.085, "Q_MVAR": 0.137, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 28, "tipo_de_nodo": 1, "P_MW": 0.048, "Q_MVAR": 0.075, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 29, "tipo_de_nodo": 1, "P_MW": 0.048, "Q_MVAR": 0.075, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 30, "tipo_de_nodo": 1, "P_MW": 0.048, "Q_MVAR": 0.075, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 31, "tipo_de_nodo": 1, "P_MW": 0.0345, "Q_MVAR": 0.057, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 32, "tipo_de_nodo": 1, "P_MW": 0.0345, "Q_MVAR": 0.057, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 33, "tipo_de_nodo": 1, "P_MW": 0.0345, "Q_MVAR": 0.057, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 34, "tipo_de_nodo": 1, "P_MW": 0.0345, "Q_MVAR": 0.057, "V_max": 1.1, "V_min": 0.9 }
      ]
    };
    
  
    
    
  
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 2.554093237,
        "potencia_atendida_MW": 0.319406763,
        "potencia_generada_adicional_MW": 2.554093237 - 0.319406763, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 708.767874,
        "costo_deslastre_dolar_per_MWH": 588.0997891,
        "U1": 0.111155999,
        "U2": 0.1702505,
        "U": 0.140703249,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 1.548439998,
        "potencia_atendida_MW": 1.325060002,
        "potencia_generada_adicional_MW": 1.548439998 - 1.325060002, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 348.7452616,
        "costo_deslastre_dolar_per_MWH": 308.0807899,
        "U1": 0.461131025,
        "U2": 0.11660222,
        "U": 0.288866623,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 1.841593247,
        "potencia_atendida_MW": 1.031906753,
        "potencia_generada_adicional_MW": 1.841593247 - 1.031906753, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 605.4722916,
        "costo_deslastre_dolar_per_MWH": 431.3497898,
        "U1": 0.35911145,
        "U2": 0.287581288,
        "U": 0.323346369,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 1.014045169,
        "potencia_atendida_MW": 1.859454831,
        "potencia_generada_adicional_MW": 1.014045169 - 1.859454831, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 296.2010258,
        "costo_deslastre_dolar_per_MWH": 215.4518064,
        "U1": 0.647104517,
        "U2": 0.272616272,
        "U": 0.459860395,
        "resiliencia": "MALA"
      }
    ];
    
  
    
    

   
    let escenario1ConSinRdNiGd = [
      { "nodo": 2, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.112603337, "costo_dolar_por_MW": 45.04133465, "potencia_atendida_MW": 0.029896663, "_atendido": 20.98011465 },
      { "nodo": 4, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.103921097, "costo_dolar_por_MW": 20.78421938, "potencia_atendida_MW": 0.038578903, "_atendido": 27.07291447 },
      { "nodo": 5, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.093324891, "costo_dolar_por_MW": 9.332489074, "potencia_atendida_MW": 0.049175109, "_atendido": 34.5088486 },
      { "nodo": 17, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.075509768, "costo_dolar_por_MW": 15.10195362, "potencia_atendida_MW": 0.066990232, "_atendido": 47.01068904 },
      { "nodo": 18, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.078679558, "costo_dolar_por_MW": 7.867955789, "potencia_atendida_MW": 0.063820442, "_atendido": 44.78627517 },
      { "nodo": 19, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.071554588, "costo_dolar_por_MW": 28.62183524, "potencia_atendida_MW": 0.070945412, "_atendido": 49.78625396 },
      { "nodo": 8, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.142499999, "costo_dolar_por_MW": 14.24999994, "potencia_atendida_MW": 6.36271E-10, "_atendido": 4.46506E-07 },
      { "nodo": 9, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.1425, "costo_dolar_por_MW": 28.49999995, "potencia_atendida_MW": 2.52181E-10, "_atendido": 1.76969E-07 },
      { "nodo": 11, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.142500001, "costo_dolar_por_MW": 42.75000022, "potencia_atendida_MW": -7.21862E-10, "_atendido": -5.0657E-07 },
      { "nodo": 21, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.1425, "costo_dolar_por_MW": 28.49999995, "potencia_atendida_MW": 2.26979E-10, "_atendido": 1.59283E-07 },
      { "nodo": 22, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.142499999, "costo_dolar_por_MW": 14.24999991, "potencia_atendida_MW": 9.27424E-10, "_atendido": 6.50824E-07 },
      { "nodo": 23, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.142500002, "costo_dolar_por_MW": 57.00000064, "potencia_atendida_MW": -1.59239E-09, "_atendido": -1.11746E-06 },
      { "nodo": 24, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.142499999, "costo_dolar_por_MW": 14.24999991, "potencia_atendida_MW": 9.27478E-10, "_atendido": 6.50862E-07 },
      { "nodo": 28, "carga_MW": 0.048, "potencia_deslastrada_MW": 0.047999999, "costo_dolar_por_MW": 4.799999934, "potencia_atendida_MW": 6.64834E-10, "_atendido": 1.38507E-06 },
      { "nodo": 29, "carga_MW": 0.048, "potencia_deslastrada_MW": 0.048000001, "costo_dolar_por_MW": 14.40000019, "potencia_atendida_MW": -6.3356E-10, "_atendido": -1.31992E-06 },
      { "nodo": 13, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.045000001, "costo_dolar_por_MW": 18.00000059, "potencia_atendida_MW": -1.46263E-09, "_atendido": -3.2503E-06 },
      { "nodo": 14, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.044999999, "costo_dolar_por_MW": 8.999999858, "potencia_atendida_MW": 7.11781E-10, "_atendido": 1.58174E-06 },
      { "nodo": 15, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.044999999, "costo_dolar_por_MW": 4.499999915, "potencia_atendida_MW": 8.52534E-10, "_atendido": 1.89452E-06 },
      { "nodo": 31, "carga_MW": 0.0345, "potencia_deslastrada_MW": 0.034500002, "costo_dolar_por_MW": 13.8000006, "potencia_atendida_MW": -1.50428E-09, "_atendido": -4.36024E-06 },
      { "nodo": 32, "carga_MW": 0.0345, "potencia_deslastrada_MW": 0.034499999, "costo_dolar_por_MW": 6.899999852, "potencia_atendida_MW": 7.38406E-10, "_atendido": 2.14031E-06 },
      { "nodo": 33, "carga_MW": 0.0345, "potencia_deslastrada_MW": 0.034499999, "costo_dolar_por_MW": 3.449999915, "potencia_atendida_MW": 8.45719E-10, "_atendido": 2.45136E-06 },
      { "nodo": 25, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.1425, "costo_dolar_por_MW": 28.49999992, "potencia_atendida_MW": 3.79751E-10, "_atendido": 2.66492E-07 },
      { "nodo": 26, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.1425, "costo_dolar_por_MW": 42.7500001, "potencia_atendida_MW": -3.29157E-10, "_atendido": -2.30988E-07 },
      { "nodo": 12, "carga_MW": 0.084, "potencia_deslastrada_MW": 0.084, "costo_dolar_por_MW": 16.8, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 16, "carga_MW": 0.0075, "potencia_deslastrada_MW": 0.0075, "costo_dolar_por_MW": 2.25, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 20, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.1425, "costo_dolar_por_MW": 42.75, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 27, "carga_MW": 0.085, "potencia_deslastrada_MW": 0.085, "costo_dolar_por_MW": 34, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 30, "carga_MW": 0.048, "potencia_deslastrada_MW": 0.048, "costo_dolar_por_MW": 9.6, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 34, "carga_MW": 0.0345, "potencia_deslastrada_MW": 0.0345, "costo_dolar_por_MW": 10.35, "potencia_atendida_MW": 0, "_atendido": 0 }
    ];
    
    
    
  
  let escenario2ConRdSinGd = [
    { "nodo": 2, "carga_MW": 0.1425, "potencia_deslastrada_MW": 4.68625E-08, "costo_dolar_por_MW": 1.8745E-05, "potencia_atendida_MW": 0.142499953, "_atendido": 99.99996711 },
    { "nodo": 4, "carga_MW": 0.1425, "potencia_deslastrada_MW": 9.89806E-08, "costo_dolar_por_MW": 1.97961E-05, "potencia_atendida_MW": 0.142499901, "_atendido": 99.99993054 },
    { "nodo": 5, "carga_MW": 0.1425, "potencia_deslastrada_MW": 2.22956E-07, "costo_dolar_por_MW": 2.22956E-05, "potencia_atendida_MW": 0.142499777, "_atendido": 99.99984354 },
    { "nodo": 17, "carga_MW": 0.1425, "potencia_deslastrada_MW": 9.90223E-08, "costo_dolar_por_MW": 1.98045E-05, "potencia_atendida_MW": 0.142499901, "_atendido": 99.99993051 },
    { "nodo": 18, "carga_MW": 0.1425, "potencia_deslastrada_MW": 2.23132E-07, "costo_dolar_por_MW": 2.23132E-05, "potencia_atendida_MW": 0.142499777, "_atendido": 99.99984342 },
    { "nodo": 19, "carga_MW": 0.1425, "potencia_deslastrada_MW": 4.68831E-08, "costo_dolar_por_MW": 1.87532E-05, "potencia_atendida_MW": 0.142499953, "_atendido": 99.9999671 },
    { "nodo": 8, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.142499989, "costo_dolar_por_MW": 14.24999888, "potencia_atendida_MW": 1.12292E-08, "_atendido": 7.88015E-06 },
    { "nodo": 9, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.142499978, "costo_dolar_por_MW": 28.49999551, "potencia_atendida_MW": 2.24643E-08, "_atendido": 1.57644E-05 },
    { "nodo": 11, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.035662558, "costo_dolar_por_MW": 10.6987673, "potencia_atendida_MW": 0.106837442, "_atendido": 74.97364374 },
    { "nodo": 21, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.106895031, "costo_dolar_por_MW": 21.3790063, "potencia_atendida_MW": 0.035604969, "_atendido": 24.98594282 },
    { "nodo": 22, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.142499993, "costo_dolar_por_MW": 14.24999935, "potencia_atendida_MW": 6.53149E-09, "_atendido": 4.5835E-06 },
    { "nodo": 23, "carga_MW": 0.1425, "potencia_deslastrada_MW": 3.26649E-09, "costo_dolar_por_MW": 1.3066E-06, "potencia_atendida_MW": 0.142499997, "_atendido": 99.99999771 },
    { "nodo": 24, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.142499993, "costo_dolar_por_MW": 14.24999935, "potencia_atendida_MW": 6.53211E-09, "_atendido": 4.58394E-06 },
    { "nodo": 28, "carga_MW": 0.048, "potencia_deslastrada_MW": 0.047998456, "costo_dolar_por_MW": 4.799845558, "potencia_atendida_MW": 1.54442E-06, "_atendido": 0.003217549 },
    { "nodo": 29, "carga_MW": 0.048, "potencia_deslastrada_MW": 0.02400353, "costo_dolar_por_MW": 7.201058945, "potencia_atendida_MW": 0.02399647, "_atendido": 49.99264622 },
    { "nodo": 13, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.022501495, "costo_dolar_por_MW": 9.000598121, "potencia_atendida_MW": 0.022498505, "_atendido": 49.99667711 },
    { "nodo": 14, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.044999816, "costo_dolar_por_MW": 8.999963238, "potencia_atendida_MW": 1.83809E-07, "_atendido": 0.000408465 },
    { "nodo": 15, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.044999877, "costo_dolar_por_MW": 4.499987748, "potencia_atendida_MW": 1.22525E-07, "_atendido": 0.000272277 },
    { "nodo": 31, "carga_MW": 0.0345, "potencia_deslastrada_MW": 0.008627406, "costo_dolar_por_MW": 3.450962404, "potencia_atendida_MW": 0.025872594, "_atendido": 74.99302606 },
    { "nodo": 32, "carga_MW": 0.0345, "potencia_deslastrada_MW": 0.03449969, "costo_dolar_por_MW": 6.899938041, "potencia_atendida_MW": 3.09797E-07, "_atendido": 0.000897962 },
    { "nodo": 33, "carga_MW": 0.0345, "potencia_deslastrada_MW": 0.034499793, "costo_dolar_por_MW": 3.449979336, "potencia_atendida_MW": 2.06643E-07, "_atendido": 0.000598964 },
    { "nodo": 25, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.142499285, "costo_dolar_por_MW": 28.49985704, "potencia_atendida_MW": 7.14794E-07, "_atendido": 0.00050161 },
    { "nodo": 26, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.106877366, "costo_dolar_por_MW": 32.06320975, "potencia_atendida_MW": 0.035622634, "_atendido": 24.99833977 },
    { "nodo": 12, "carga_MW": 0.084, "potencia_deslastrada_MW": 0.042, "costo_dolar_por_MW": 8.4, "potencia_atendida_MW": 0.042, "_atendido": 50 },
    { "nodo": 16, "carga_MW": 0.0075, "potencia_deslastrada_MW": 0.005625, "costo_dolar_por_MW": 1.6875, "potencia_atendida_MW": 0.001875, "_atendido": 25 },
    { "nodo": 20, "carga_MW": 0.1425, "potencia_deslastrada_MW": 0.1425, "costo_dolar_por_MW": 42.75, "potencia_atendida_MW": 0, "_atendido": 0 },
    { "nodo": 27, "carga_MW": 0.085, "potencia_deslastrada_MW": 0.06375, "costo_dolar_por_MW": 25.5, "potencia_atendida_MW": 0.02125, "_atendido": 25 },
    { "nodo": 30, "carga_MW": 0.048, "potencia_deslastrada_MW": 0.036, "costo_dolar_por_MW": 7.2, "potencia_atendida_MW": 0.012, "_atendido": 25 },
    { "nodo": 34, "carga_MW": 0.0345, "potencia_deslastrada_MW": 0.0345, "costo_dolar_por_MW": 10.35, "potencia_atendida_MW": 0, "_atendido": 0 }
];


    
    
    let escenario3ConGdSinRd = [
      { nodo: 2, carga_MW: 0.1425, potencia_deslastrada_MW: 0.112603337, costo_dolar_por_MW: 45.04133465, potencia_atendida_MW: 0.029896663, _atendido: 20.98011465 },
      { nodo: 4, carga_MW: 0.1425, potencia_deslastrada_MW: 0.103921097, costo_dolar_por_MW: 20.78421938, potencia_atendida_MW: 0.038578903, _atendido: 27.07291447 },
      { nodo: 5, carga_MW: 0.1425, potencia_deslastrada_MW: 0.093324891, costo_dolar_por_MW: 9.332489074, potencia_atendida_MW: 0.049175109, _atendido: 34.5088486 },
      { nodo: 17, carga_MW: 0.1425, potencia_deslastrada_MW: 0.075509768, costo_dolar_por_MW: 15.10195362, potencia_atendida_MW: 0.066990232, _atendido: 47.01068904 },
      { nodo: 18, carga_MW: 0.1425, potencia_deslastrada_MW: 0.078679558, costo_dolar_por_MW: 7.867955789, potencia_atendida_MW: 0.063820442, _atendido: 44.78627517 },
      { nodo: 19, carga_MW: 0.1425, potencia_deslastrada_MW: 0.071554588, costo_dolar_por_MW: 28.62183524, potencia_atendida_MW: 0.070945412, _atendido: 49.78625396 },
      { nodo: 8, carga_MW: 0.1425, potencia_deslastrada_MW: 0.142499999, costo_dolar_por_MW: 14.24999994, potencia_atendida_MW: 6.36271E-10, _atendido: 4.46506E-07 },
      { nodo: 9, carga_MW: 0.1425, potencia_deslastrada_MW: 0.1425, costo_dolar_por_MW: 28.49999995, potencia_atendida_MW: 2.52181E-10, _atendido: 1.76969E-07 },
      { nodo: 11, carga_MW: 0.1425, potencia_deslastrada_MW: 0.142500001, costo_dolar_por_MW: 42.75000022, potencia_atendida_MW: -7.21862E-10, _atendido: -5.0657E-07 },
      { nodo: 21, carga_MW: 0.1425, potencia_deslastrada_MW: 8.06647E-10, costo_dolar_por_MW: 1.61329E-07, potencia_atendida_MW: 0.142499999, _atendido: 99.99999943 },
      { nodo: 22, carga_MW: 0.1425, potencia_deslastrada_MW: 4.04204E-09, costo_dolar_por_MW: 4.04204E-07, potencia_atendida_MW: 0.142499996, _atendido: 99.99999716 },
      { nodo: 23, carga_MW: 0.1425, potencia_deslastrada_MW: 3.0996E-10, costo_dolar_por_MW: 1.23984E-07, potencia_atendida_MW: 0.1425, _atendido: 99.99999978 },
      { nodo: 24, carga_MW: 0.1425, potencia_deslastrada_MW: 4.03701E-09, costo_dolar_por_MW: 4.03701E-07, potencia_atendida_MW: 0.142499996, _atendido: 99.99999717 },
      { nodo: 28, carga_MW: 0.048, potencia_deslastrada_MW: 0.047999999, costo_dolar_por_MW: 4.799999934, potencia_atendida_MW: 6.64834E-10, _atendido: 1.38507E-06 },
      { nodo: 29, carga_MW: 0.048, potencia_deslastrada_MW: 0.048000001, costo_dolar_por_MW: 14.40000019, potencia_atendida_MW: -6.3356E-10, _atendido: -1.31992E-06 },
      { nodo: 13, carga_MW: 0.045, potencia_deslastrada_MW: 0.045000001, costo_dolar_por_MW: 18.00000059, potencia_atendida_MW: -1.46263E-09, _atendido: -3.2503E-06 },
      { nodo: 14, carga_MW: 0.045, potencia_deslastrada_MW: 0.044999999, costo_dolar_por_MW: 8.999999858, potencia_atendida_MW: 7.11781E-10, _atendido: 1.58174E-06 },
      { nodo: 15, carga_MW: 0.045, potencia_deslastrada_MW: 0.044999999, costo_dolar_por_MW: 4.499999915, potencia_atendida_MW: 8.52534E-10, _atendido: 1.89452E-06 },
      { nodo: 31, carga_MW: 0.0345, potencia_deslastrada_MW: 0.034500002, costo_dolar_por_MW: 13.8000006, potencia_atendida_MW: -1.50428E-09, _atendido: -4.36024E-06 },
      { nodo: 32, carga_MW: 0.0345, potencia_deslastrada_MW: 0.034499999, costo_dolar_por_MW: 6.899999852, potencia_atendida_MW: 7.38406E-10, _atendido: 2.14031E-06 },
      { nodo: 33, carga_MW: 0.0345, potencia_deslastrada_MW: 0.034499999, costo_dolar_por_MW: 3.449999915, potencia_atendida_MW: 8.45719E-10, _atendido: 2.45136E-06 },
      { nodo: 25, carga_MW: 0.1425, potencia_deslastrada_MW: 0.1425, costo_dolar_por_MW: 28.49999992, potencia_atendida_MW: 3.79751E-10, _atendido: 2.66492E-07 },
      { nodo: 26, carga_MW: 0.1425, potencia_deslastrada_MW: 0.1425, costo_dolar_por_MW: 42.7500001, potencia_atendida_MW: -3.29157E-10, _atendido: -2.30988E-07 },
      { nodo: 12, carga_MW: 0.084, potencia_deslastrada_MW: 0.084, costo_dolar_por_MW: 16.8, potencia_atendida_MW: 0, _atendido: 0 },
      { nodo: 16, carga_MW: 0.0075, potencia_deslastrada_MW: 0.0075, costo_dolar_por_MW: 2.25, potencia_atendida_MW: 0, _atendido: 0 },
      { nodo: 27, carga_MW: 0.085, potencia_deslastrada_MW: 0.085, costo_dolar_por_MW: 34, potencia_atendida_MW: 0, _atendido: 0 },
      { nodo: 30, carga_MW: 0.048, potencia_deslastrada_MW: 0.048, costo_dolar_por_MW: 9.6, potencia_atendida_MW: 0, _atendido: 0 },
      { nodo: 34, carga_MW: 0.0345, potencia_deslastrada_MW: 0.0345, costo_dolar_por_MW: 10.35, potencia_atendida_MW: 0, _atendido: 0 }
  ];
  
 
   
    let escenario4ConGdYRd = [
      {nodo: 2, carga_MW: 0.1425, potencia_deslastrada_MW: 4.68625e-8, costo_dolar_por_MW: 1.8745e-5, potencia_atendida_MW: 0.142499953, _atendido: 99.99996711},
      {nodo: 4, carga_MW: 0.1425, potencia_deslastrada_MW: 9.89806e-8, costo_dolar_por_MW: 1.97961e-5, potencia_atendida_MW: 0.142499901, _atendido: 99.99993054},
      {nodo: 5, carga_MW: 0.1425, potencia_deslastrada_MW: 2.22956e-7, costo_dolar_por_MW: 2.22956e-5, potencia_atendida_MW: 0.142499777, _atendido: 99.99984354},
      {nodo: 17, carga_MW: 0.1425, potencia_deslastrada_MW: 9.90223e-8, costo_dolar_por_MW: 1.98045e-5, potencia_atendida_MW: 0.142499901, _atendido: 99.99993051},
      {nodo: 18, carga_MW: 0.1425, potencia_deslastrada_MW: 2.23132e-7, costo_dolar_por_MW: 2.23132e-5, potencia_atendida_MW: 0.142499777, _atendido: 99.99984342},
      {nodo: 19, carga_MW: 0.1425, potencia_deslastrada_MW: 4.68831e-8, costo_dolar_por_MW: 1.87532e-5, potencia_atendida_MW: 0.142499953, _atendido: 99.9999671},
      {nodo: 8, carga_MW: 0.1425, potencia_deslastrada_MW: 0.142499989, costo_dolar_por_MW: 14.24999888, potencia_atendida_MW: 1.12292e-8, _atendido: 7.88015e-6},
      {nodo: 9, carga_MW: 0.1425, potencia_deslastrada_MW: 0.142499978, costo_dolar_por_MW: 28.49999551, potencia_atendida_MW: 2.24643e-8, _atendido: 1.57644e-5},
      {nodo: 11, carga_MW: 0.1425, potencia_deslastrada_MW: 0.035662558, costo_dolar_por_MW: 10.6987673, potencia_atendida_MW: 0.106837442, _atendido: 74.97364374},
      {nodo: 21, carga_MW: 0.1425, potencia_deslastrada_MW: 1.68737e-8, costo_dolar_por_MW: 3.37474e-6, potencia_atendida_MW: 0.142499983, _atendido: 99.99998816},
      {nodo: 22, carga_MW: 0.1425, potencia_deslastrada_MW: 8.44685e-8, costo_dolar_por_MW: 8.44685e-6, potencia_atendida_MW: 0.142499916, _atendido: 99.99994072},
      {nodo: 23, carga_MW: 0.1425, potencia_deslastrada_MW: 6.4864e-9, costo_dolar_por_MW: 2.59456e-6, potencia_atendida_MW: 0.142499994, _atendido: 99.99999545},
      {nodo: 24, carga_MW: 0.1425, potencia_deslastrada_MW: 8.43958e-8, costo_dolar_por_MW: 8.43958e-6, potencia_atendida_MW: 0.142499916, _atendido: 99.99994077},
      {nodo: 28, carga_MW: 0.048, potencia_deslastrada_MW: 0.047998456, costo_dolar_por_MW: 4.799845558, potencia_atendida_MW: 1.54442e-6, _atendido: 0.003217549},
      {nodo: 29, carga_MW: 0.048, potencia_deslastrada_MW: 0.02400353, costo_dolar_por_MW: 7.201058945, potencia_atendida_MW: 0.02399647, _atendido: 49.99264622},
      {nodo: 13, carga_MW: 0.045, potencia_deslastrada_MW: 0.022501495, costo_dolar_por_MW: 9.000598121, potencia_atendida_MW: 0.022498505, _atendido: 49.99667711},
      {nodo: 14, carga_MW: 0.045, potencia_deslastrada_MW: 0.044999816, costo_dolar_por_MW: 8.999963238, potencia_atendida_MW: 1.83809e-7, _atendido: 0.000408465},
      {nodo: 15, carga_MW: 0.045, potencia_deslastrada_MW: 0.044999877, costo_dolar_por_MW: 4.499987748, potencia_atendida_MW: 1.22525e-7, _atendido: 0.000272277},
      {nodo: 31, carga_MW: 0.0345, potencia_deslastrada_MW: 0.008627406, costo_dolar_por_MW: 3.450962404, potencia_atendida_MW: 0.025872594, _atendido: 74.99302606},
      {nodo: 32, carga_MW: 0.0345, potencia_deslastrada_MW: 0.03449969, costo_dolar_por_MW: 6.899938041, potencia_atendida_MW: 3.09797e-7, _atendido: 0.000897962},
      {nodo: 33, carga_MW: 0.0345, potencia_deslastrada_MW: 0.034499793, costo_dolar_por_MW: 3.449979336, potencia_atendida_MW: 2.06643e-7, _atendido: 0.000598964},
      {nodo: 25, carga_MW: 0.1425, potencia_deslastrada_MW: 0.142499285, costo_dolar_por_MW: 28.49985704, potencia_atendida_MW: 7.14794e-7, _atendido: 0.00050161},
      {nodo: 26, carga_MW: 0.1425, potencia_deslastrada_MW: 0.106877366, costo_dolar_por_MW: 32.06320975, potencia_atendida_MW: 0.035622634, _atendido: 24.99833977},
      {nodo: 12, carga_MW: 0.084, potencia_deslastrada_MW: 0.042, costo_dolar_por_MW: 8.4, potencia_atendida_MW: 0.042, _atendido: 50},
      {nodo: 16, carga_MW: 0.0075, potencia_deslastrada_MW: 0.005625, costo_dolar_por_MW: 1.6875, potencia_atendida_MW: 0.001875, _atendido: 25},
      {nodo: 27, carga_MW: 0.085, potencia_deslastrada_MW: 0.06375, costo_dolar_por_MW: 25.5, potencia_atendida_MW: 0.02125, _atendido: 25},
      {nodo: 30, carga_MW: 0.048, potencia_deslastrada_MW: 0.036, costo_dolar_por_MW: 7.2, potencia_atendida_MW: 0.012, _atendido: 25},
      {nodo: 34, carga_MW: 0.0345, potencia_deslastrada_MW: 0.0345, costo_dolar_por_MW: 10.35, potencia_atendida_MW: 0, _atendido: 0}
    ];
    
    
 
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="38"){

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "5 - 6",
            "porcentaje": 100
          },
          {
            "linea": "6 - 7",
            "porcentaje": 100
          },
          {
            "linea": "8 - 9",
            "porcentaje": 100
          },
          {
            "linea": "10 - 11",
            "porcentaje": 100
          },
          {
            "linea": "13 - 14",
            "porcentaje": 100
          },
          {
            "linea": "15 - 16",
            "porcentaje": 100
          },
          {
            "linea": "17 - 18",
            "porcentaje": 100
          },
          {
            "linea": "19 - 20",
            "porcentaje": 100
          },
          {
            "linea": "23 - 24",
            "porcentaje": 100
          },
          {
            "linea": "28 - 29",
            "porcentaje": 100
          },
          {
            "linea": "29 - 30",
            "porcentaje": 100
          },
          {
            "linea": "30 - 31",
            "porcentaje": 100
          },
          {
            "linea": "31 - 32",
            "porcentaje": 100
          },
          {
            "linea": "32 - 33",
            "porcentaje": 100
          },
          {
            "linea": "27 - 28",
            "porcentaje": 95.7143
          },
          {
            "linea": "1 - 2",
            "porcentaje": 92.8571
          }
        ],
        "generadores": [],
      },
      "metrica_lineas_con_sobrecarga": [
        {
          "linea": "3-4",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "4-5",
          "porcentaje_sobrecarga": "Inf"
        }
      ],
      "tiempo_ejecucion": 766.0206574
    }
    
   
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
        {"I": 6, "J": 26, "flujo_P_I_a_J_MW": 0.950779767, "flujo_Q_I_a_J_MW": 0.973635973, "flujo_P_J_a_I_MW": -0.948178871, "flujo_Q_J_a_I_MW": -0.972311182},
        {"I": 26, "J": 27, "flujo_P_I_a_J_MW": 0.888178871, "flujo_Q_I_a_J_MW": 0.947311182, "flujo_P_J_a_I_MW": -0.884849877, "flujo_Q_J_a_I_MW": -0.945616229},
        {"I": 27, "J": 28, "flujo_P_I_a_J_MW": 0.824849877, "flujo_Q_I_a_J_MW": 0.920616229, "flujo_P_J_a_I_MW": -0.813549021, "flujo_Q_J_a_I_MW": -0.910652481},
        {"I": 28, "J": 29, "flujo_P_I_a_J_MW": 0.753549021, "flujo_Q_I_a_J_MW": 0.890652481, "flujo_P_J_a_I_MW": -0.745715671, "flujo_Q_J_a_I_MW": -0.883828252},
        {"I": 29, "J": 30, "flujo_P_I_a_J_MW": 0.625715671, "flujo_Q_I_a_J_MW": 0.813828252, "flujo_P_J_a_I_MW": -0.621820002, "flujo_Q_J_a_I_MW": -0.811843956},
        {"I": 30, "J": 31, "flujo_P_I_a_J_MW": 0.421820002, "flujo_Q_I_a_J_MW": 0.211843956, "flujo_P_J_a_I_MW": -0.420226364, "flujo_Q_J_a_I_MW": -0.210268962},
        {"I": 31, "J": 32, "flujo_P_I_a_J_MW": 0.270226364, "flujo_Q_I_a_J_MW": 0.140268962, "flujo_P_J_a_I_MW": -0.270013169, "flujo_Q_J_a_I_MW": -0.140020475},
        {"I": 32, "J": 33, "flujo_P_I_a_J_MW": 0.060013169, "flujo_Q_I_a_J_MW": 0.040020475, "flujo_P_J_a_I_MW": -0.06, "flujo_Q_J_a_I_MW": -0.04},
        {"I": 8, "J": 34, "flujo_P_I_a_J_MW": 0, "flujo_Q_I_a_J_MW": 0, "flujo_P_J_a_I_MW": 0, "flujo_Q_J_a_I_MW": 0},
        {"I": 9, "J": 35, "flujo_P_I_a_J_MW": 0, "flujo_Q_I_a_J_MW": 0, "flujo_P_J_a_I_MW": 0, "flujo_Q_J_a_I_MW": 0},
        {"I": 12, "J": 36, "flujo_P_I_a_J_MW": 0, "flujo_Q_I_a_J_MW": 0, "flujo_P_J_a_I_MW": 0, "flujo_Q_J_a_I_MW": 0},
        {"I": 18, "J": 37, "flujo_P_I_a_J_MW": 0, "flujo_Q_I_a_J_MW": 0, "flujo_P_J_a_I_MW": 0, "flujo_Q_J_a_I_MW": 0},
        {"I": 25, "J": 38, "flujo_P_I_a_J_MW": 0, "flujo_Q_I_a_J_MW": 0, "flujo_P_J_a_I_MW": 0, "flujo_Q_J_a_I_MW": 0}
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
        { "nodo": 33, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.04, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 34, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 35, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 36, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 37, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 38, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 }
      ]
    };
    
    
  
    
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 3.714999998,
        "potencia_atendida_MW": 1.79076E-09,
        "potencia_generada_adicional_MW": 3.714999998 - 1.79076E-09, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 788.5000011,
        "costo_deslastre_dolar_per_MWH": 788.5000011,
        "U1": 4.82035E-10,
        "U2": 0,
        "U": 2.41018E-10,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 2.780183676,
        "potencia_atendida_MW": 0.934816324,
        "potencia_generada_adicional_MW": 2.780183676 - 0.934816324, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 598.5553542,
        "costo_deslastre_dolar_per_MWH": 551.8058604,
        "U1": 0.251632927,
        "U2": 0.078103877,
        "U": 0.164868402,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 2.665000355,
        "potencia_atendida_MW": 1.049999645,
        "potencia_generada_adicional_MW": 2.665000355 - 1.049999645, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 615.2500487,
        "costo_deslastre_dolar_per_MWH": 536.5000851,
        "U1": 0.282637859,
        "U2": 0.12799668,
        "U": 0.205317269,
        "resiliencia": "POBRE"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 1.940133236,
        "potencia_atendida_MW": 1.774866764,
        "potencia_generada_adicional_MW": 1.940133236 - 1.774866764, // Calculado como potencia atendida - potencia deslastrada
        "costo_operacion_dolar_per_MWH": 462.0401388,
        "costo_deslastre_dolar_per_MWH": 352.2906837,
        "U1": 0.477756868,
        "U2": 0.237532296,
        "U": 0.357644582,
        "resiliencia": "POBRE"
      }
    ];
    
  
    
   
    let escenario1ConSinRdNiGd = [
      { "nodo": 2, "carga_MW": 0.1, "potencia_deslastrada_MW": 0.1, "costo_dolar_por_MW": 29.99999992, "potencia_atendida_MW": 2.53212E-10, "_atendido": 2.53212E-07 },
      { "nodo": 3, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.09, "costo_dolar_por_MW": 18.00000002, "potencia_atendida_MW": -8.50017E-11, "_atendido": -9.44463E-08 },
      { "nodo": 4, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.12, "costo_dolar_por_MW": 11.99999998, "potencia_atendida_MW": 2.3263E-10, "_atendido": 1.93858E-07 },
      { "nodo": 5, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 11.99999996, "potencia_atendida_MW": 2.00889E-10, "_atendido": 3.34815E-07 },
      { "nodo": 19, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.09, "costo_dolar_por_MW": 18.00000002, "potencia_atendida_MW": -8.48955E-11, "_atendido": -9.43283E-08 },
      { "nodo": 23, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.09, "costo_dolar_por_MW": 18.00000002, "potencia_atendida_MW": -8.50069E-11, "_atendido": -9.44521E-08 },
      { "nodo": 11, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.044999999, "costo_dolar_por_MW": 4.499999895, "potencia_atendida_MW": 1.05088E-09, "_atendido": 2.33528E-06 },
      { "nodo": 12, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999999, "costo_dolar_por_MW": 11.99999987, "potencia_atendida_MW": 6.6745E-10, "_atendido": 1.11242E-06 },
      { "nodo": 13, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.060000001, "costo_dolar_por_MW": 18.00000037, "potencia_atendida_MW": -1.21992E-09, "_atendido": -2.03321E-06 },
      { "nodo": 6, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.060000001, "costo_dolar_por_MW": 24.0000004, "potencia_atendida_MW": -9.97089E-10, "_atendido": -1.66182E-06 },
      { "nodo": 26, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 17.99999988, "potencia_atendida_MW": 4.15877E-10, "_atendido": 6.93129E-07 },
      { "nodo": 27, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999999, "costo_dolar_por_MW": 5.999999919, "potencia_atendida_MW": 8.06351E-10, "_atendido": 1.34392E-06 },
      { "nodo": 9, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 5.999999962, "potencia_atendida_MW": 3.76127E-10, "_atendido": 6.26879E-07 },
      { "nodo": 10, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 12.00000007, "potencia_atendida_MW": -3.53941E-10, "_atendido": -5.89901E-07 },
      { "nodo": 20, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089999999, "costo_dolar_por_MW": 8.999999885, "potencia_atendida_MW": 1.14802E-09, "_atendido": 1.27557E-06 },
      { "nodo": 21, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089999999, "costo_dolar_por_MW": 8.999999885, "potencia_atendida_MW": 1.14776E-09, "_atendido": 1.27529E-06 },
      { "nodo": 22, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.090000002, "costo_dolar_por_MW": 36.0000008, "potencia_atendida_MW": -2.0082E-09, "_atendido": -2.23134E-06 },
      { "nodo": 7, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.200000001, "costo_dolar_por_MW": 60.00000018, "potencia_atendida_MW": -6.03288E-10, "_atendido": -3.01644E-07 },
      { "nodo": 8, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.199999999, "costo_dolar_por_MW": 19.99999993, "potencia_atendida_MW": 7.37829E-10, "_atendido": 3.68914E-07 },
      { "nodo": 16, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999999, "costo_dolar_por_MW": 5.999999937, "potencia_atendida_MW": 6.34086E-10, "_atendido": 1.05681E-06 },
      { "nodo": 17, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.060000001, "costo_dolar_por_MW": 18.00000018, "potencia_atendida_MW": -5.96006E-10, "_atendido": -9.93343E-07 },
      { "nodo": 18, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.09, "costo_dolar_por_MW": 36, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 24, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.42, "costo_dolar_por_MW": 83.99999991, "potencia_atendida_MW": 4.40111E-10, "_atendido": 1.04788E-07 },
      { "nodo": 25, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.42, "costo_dolar_por_MW": 126.0000001, "potencia_atendida_MW": -2.87105E-10, "_atendido": -6.83583E-08 },
      { "nodo": 14, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.12, "costo_dolar_por_MW": 12, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 15, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 12, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 28, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 12, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 29, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.12, "costo_dolar_por_MW": 36, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 30, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.2, "costo_dolar_por_MW": 20, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 31, "carga_MW": 0.15, "potencia_deslastrada_MW": 0.15, "costo_dolar_por_MW": 30, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 32, "carga_MW": 0.21, "potencia_deslastrada_MW": 0.21, "costo_dolar_por_MW": 42, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 33, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 12, "potencia_atendida_MW": 0, "_atendido": 0 }
    ];
    
  
let escenario2ConRdSinGd = [
  { "nodo": 2, "carga_MW": 0.1, "potencia_deslastrada_MW": 6.87929E-07, "costo_dolar_por_MW": 0.000206379, "potencia_atendida_MW": 0.099999312, "_atendido": 99.99931207 },
  { "nodo": 3, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.083988494, "costo_dolar_por_MW": 16.79769873, "potencia_atendida_MW": 0.006011506, "_atendido": 6.67945148 },
  { "nodo": 4, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.119999312, "costo_dolar_por_MW": 11.9999312, "potencia_atendida_MW": 6.87951E-07, "_atendido": 0.000573292 },
  { "nodo": 5, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.034542645, "costo_dolar_por_MW": 6.908528987, "potencia_atendida_MW": 0.025457355, "_atendido": 42.42892511 },
  { "nodo": 19, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.088069137, "costo_dolar_por_MW": 17.61382732, "potencia_atendida_MW": 0.001930863, "_atendido": 2.14540379 },
  { "nodo": 23, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.080926667, "costo_dolar_por_MW": 16.18533332, "potencia_atendida_MW": 0.009073333, "_atendido": 10.08148154 },
  { "nodo": 11, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.044999994, "costo_dolar_por_MW": 4.499999426, "potencia_atendida_MW": 5.7394E-09, "_atendido": 1.27542E-05 },
  { "nodo": 12, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999989, "costo_dolar_por_MW": 11.9999977, "potencia_atendida_MW": 1.14863E-08, "_atendido": 1.91438E-05 },
  { "nodo": 13, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.022511678, "costo_dolar_por_MW": 6.753503411, "potencia_atendida_MW": 0.037488322, "_atendido": 62.4805366 },
  { "nodo": 6, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.030004792, "costo_dolar_por_MW": 12.00191686, "potencia_atendida_MW": 0.029995208, "_atendido": 49.9920131 },
  { "nodo": 26, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059998719, "costo_dolar_por_MW": 17.99961563, "potencia_atendida_MW": 1.28122E-06, "_atendido": 0.002135371 },
  { "nodo": 27, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999573, "costo_dolar_por_MW": 5.999957329, "potencia_atendida_MW": 4.26712E-07, "_atendido": 0.000711187 },
  { "nodo": 9, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059994906, "costo_dolar_por_MW": 5.999490639, "potencia_atendida_MW": 5.09361E-06, "_atendido": 0.008489355 },
  { "nodo": 10, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.015017676, "costo_dolar_por_MW": 3.003535142, "potencia_atendida_MW": 0.044982324, "_atendido": 74.97054048 },
  { "nodo": 20, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089999987, "costo_dolar_por_MW": 8.999998666, "potencia_atendida_MW": 1.33389E-08, "_atendido": 1.4821E-05 },
  { "nodo": 21, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.089999987, "costo_dolar_por_MW": 8.999998666, "potencia_atendida_MW": 1.33361E-08, "_atendido": 1.48179E-05 },
  { "nodo": 22, "carga_MW": 0.09, "potencia_deslastrada_MW": 3.39776E-05, "costo_dolar_por_MW": 0.013591033, "potencia_atendida_MW": 0.089966022, "_atendido": 99.96224713 },
  { "nodo": 7, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.100036783, "costo_dolar_por_MW": 30.01103485, "potencia_atendida_MW": 0.099963217, "_atendido": 49.98160858 },
  { "nodo": 8, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.199999973, "costo_dolar_por_MW": 19.99999728, "potencia_atendida_MW": 2.71812E-08, "_atendido": 1.35906E-05 },
  { "nodo": 16, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999597, "costo_dolar_por_MW": 5.999959721, "potencia_atendida_MW": 4.02787E-07, "_atendido": 0.000671312 },
  { "nodo": 17, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.01500808, "costo_dolar_por_MW": 4.5024239, "potencia_atendida_MW": 0.04499192, "_atendido": 74.98653389 },
  { "nodo": 18, "carga_MW": 0.09, "potencia_deslastrada_MW": 0.09, "costo_dolar_por_MW": 36, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 24, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.419999929, "costo_dolar_por_MW": 83.99998588, "potencia_atendida_MW": 7.05926E-08, "_atendido": 1.68078E-05 },
  { "nodo": 25, "carga_MW": 0.42, "potencia_deslastrada_MW": 0.315051094, "costo_dolar_por_MW": 94.51532829, "potencia_atendida_MW": 0.104948906, "_atendido": 24.98783469 },
  { "nodo": 14, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.06, "costo_dolar_por_MW": 6, "potencia_atendida_MW": 0.06, "_atendido": 50 },
  { "nodo": 15, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.045, "costo_dolar_por_MW": 9, "potencia_atendida_MW": 0.015, "_atendido": 25 },
  { "nodo": 28, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.045, "costo_dolar_por_MW": 9, "potencia_atendida_MW": 0.015, "_atendido": 25 },
  { "nodo": 29, "carga_MW": 0.12, "potencia_deslastrada_MW": 0.09, "costo_dolar_por_MW": 27, "potencia_atendida_MW": 0.03, "_atendido": 25 },
  { "nodo": 30, "carga_MW": 0.2, "potencia_deslastrada_MW": 0.1, "costo_dolar_por_MW": 10, "potencia_atendida_MW": 0.1, "_atendido": 50 },
  { "nodo": 31, "carga_MW": 0.15, "potencia_deslastrada_MW": 0.15, "costo_dolar_por_MW": 30, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 32, "carga_MW": 0.21, "potencia_deslastrada_MW": 0.105, "costo_dolar_por_MW": 21, "potencia_atendida_MW": 0.105, "_atendido": 50 },
  { "nodo": 33, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.045, "costo_dolar_por_MW": 9, "potencia_atendida_MW": 0.015, "_atendido": 25 }
];

    
    

  let escenario3ConGdSinRd = [
    { nodo: 2, carga_MW: 0.1, potencia_deslastrada_MW: 0.1, costo_dolar_por_MW: 29.99999992, potencia_atendida_MW: 2.53212E-10, _atendido: 2.53212E-07 },
    { nodo: 3, carga_MW: 0.09, potencia_deslastrada_MW: 0.09, costo_dolar_por_MW: 18.00000002, potencia_atendida_MW: -8.50017E-11, _atendido: -9.44463E-08 },
    { nodo: 4, carga_MW: 0.12, potencia_deslastrada_MW: 0.12, costo_dolar_por_MW: 11.99999998, potencia_atendida_MW: 2.3263E-10, _atendido: 1.93858E-07 },
    { nodo: 5, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 11.99999996, potencia_atendida_MW: 2.00889E-10, _atendido: 3.34815E-07 },
    { nodo: 19, carga_MW: 0.09, potencia_deslastrada_MW: 0.09, costo_dolar_por_MW: 18.00000002, potencia_atendida_MW: -8.48955E-11, _atendido: -9.43283E-08 },
    { nodo: 23, carga_MW: 0.09, potencia_deslastrada_MW: 0.09, costo_dolar_por_MW: 18.00000002, potencia_atendida_MW: -8.50069E-11, _atendido: -9.44521E-08 },
    { nodo: 11, carga_MW: 0.045, potencia_deslastrada_MW: 0.044999999, costo_dolar_por_MW: 4.499999895, potencia_atendida_MW: 1.05088E-09, _atendido: 2.33528E-06 },
    { nodo: 12, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999999, costo_dolar_por_MW: 11.99999987, potencia_atendida_MW: 6.6745E-10, _atendido: 1.11242E-06 },
    { nodo: 13, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000001, costo_dolar_por_MW: 18.00000037, potencia_atendida_MW: -1.21992E-09, _atendido: -2.03321E-06 },
    { nodo: 6, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000001, costo_dolar_por_MW: 24.0000004, potencia_atendida_MW: -9.97089E-10, _atendido: -1.66182E-06 },
    { nodo: 26, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 17.99999988, potencia_atendida_MW: 4.15877E-10, _atendido: 6.93129E-07 },
    { nodo: 27, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999999, costo_dolar_por_MW: 5.999999919, potencia_atendida_MW: 8.06351E-10, _atendido: 1.34392E-06 },
    { nodo: 9, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 5.999999962, potencia_atendida_MW: 3.76127E-10, _atendido: 6.26879E-07 },
    { nodo: 10, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 12.00000007, potencia_atendida_MW: -3.53941E-10, _atendido: -5.89901E-07 },
    { nodo: 20, carga_MW: 0.09, potencia_deslastrada_MW: 0.089999999, costo_dolar_por_MW: 8.999999885, potencia_atendida_MW: 1.14802E-09, _atendido: 1.27557E-06 },
    { nodo: 21, carga_MW: 0.09, potencia_deslastrada_MW: 0.089999999, costo_dolar_por_MW: 8.999999885, potencia_atendida_MW: 1.14776E-09, _atendido: 1.27529E-06 },
    { nodo: 22, carga_MW: 0.09, potencia_deslastrada_MW: 0.090000002, costo_dolar_por_MW: 36.0000008, potencia_atendida_MW: -2.0082E-09, _atendido: -2.23134E-06 },
    { nodo: 7, carga_MW: 0.2, potencia_deslastrada_MW: 0.200000001, costo_dolar_por_MW: 60.00000018, potencia_atendida_MW: -6.03288E-10, _atendido: -3.01644E-07 },
    { nodo: 8, carga_MW: 0.2, potencia_deslastrada_MW: 0.199999999, costo_dolar_por_MW: 19.99999993, potencia_atendida_MW: 7.37829E-10, _atendido: 3.68914E-07 },
    { nodo: 16, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999999, costo_dolar_por_MW: 5.999999937, potencia_atendida_MW: 6.34086E-10, _atendido: 1.05681E-06 },
    { nodo: 17, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000001, costo_dolar_por_MW: 18.00000018, potencia_atendida_MW: -5.96006E-10, _atendido: -9.93343E-07 },
    { nodo: 18, carga_MW: 0.09, potencia_deslastrada_MW: 0.09, costo_dolar_por_MW: 36, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 24, carga_MW: 0.42, potencia_deslastrada_MW: 2.29303E-07, costo_dolar_por_MW: 4.58605E-05, potencia_atendida_MW: 0.419999771, _atendido: 99.9999454 },
    { nodo: 25, carga_MW: 0.42, potencia_deslastrada_MW: 1.274E-07, costo_dolar_por_MW: 3.82201E-05, potencia_atendida_MW: 0.419999873, _atendido: 99.99996967 },
    { nodo: 14, carga_MW: 0.12, potencia_deslastrada_MW: 0.12, costo_dolar_por_MW: 12, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 15, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 12, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 28, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 12, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 29, carga_MW: 0.12, potencia_deslastrada_MW: 0.12, costo_dolar_por_MW: 36, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 30, carga_MW: 0.2, potencia_deslastrada_MW: 0.2, costo_dolar_por_MW: 20, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 31, carga_MW: 0.15, potencia_deslastrada_MW: 0.15, costo_dolar_por_MW: 30, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 33, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 12, potencia_atendida_MW: 0, _atendido: 0 }
];

  
   
    let escenario4ConGdYRd = [
      { nodo: 2, carga_MW: 0.1, potencia_deslastrada_MW: 6.87929E-7, costo_dolar_por_MW: 2.06379E-4, potencia_atendida_MW: 0.099999312, _atendido: 99.99931207 },
      { nodo: 3, carga_MW: 0.09, potencia_deslastrada_MW: 8.39885E-2, costo_dolar_por_MW: 1.67977E+1, potencia_atendida_MW: 6.01151E-3, _atendido: 6.67945148 },
      { nodo: 4, carga_MW: 0.12, potencia_deslastrada_MW: 1.19999E-1, costo_dolar_por_MW: 1.19999E+1, potencia_atendida_MW: 6.87951E-7, _atendido: 5.73292E-4 },
      { nodo: 5, carga_MW: 0.06, potencia_deslastrada_MW: 3.45426E-2, costo_dolar_por_MW: 6.90853E+0, potencia_atendida_MW: 2.54573E-2, _atendido: 42.42892511 },
      { nodo: 19, carga_MW: 0.09, potencia_deslastrada_MW: 8.80691E-2, costo_dolar_por_MW: 1.76138E+1, potencia_atendida_MW: 1.93086E-3, _atendido: 2.145403789 },
      { nodo: 23, carga_MW: 0.09, potencia_deslastrada_MW: 8.09267E-2, costo_dolar_por_MW: 1.61853E+1, potencia_atendida_MW: 9.07333E-3, _atendido: 10.08148154 },
      { nodo: 11, carga_MW: 0.045, potencia_deslastrada_MW: 4.49999E-2, costo_dolar_por_MW: 4.50000E+0, potencia_atendida_MW: 5.7394E-9, _atendido: 1.27542E-5 },
      { nodo: 12, carga_MW: 0.06, potencia_deslastrada_MW: 5.99999E-2, costo_dolar_por_MW: 1.19999E+1, potencia_atendida_MW: 1.14863E-8, _atendido: 1.91438E-5 },
      { nodo: 13, carga_MW: 0.06, potencia_deslastrada_MW: 2.25117E-2, costo_dolar_por_MW: 6.75350E+0, potencia_atendida_MW: 3.74883E-2, _atendido: 62.4805366 },
      { nodo: 6, carga_MW: 0.06, potencia_deslastrada_MW: 3.00048E-2, costo_dolar_por_MW: 1.20019E+1, potencia_atendida_MW: 2.99995E-2, _atendido: 49.9920131 },
      { nodo: 26, carga_MW: 0.06, potencia_deslastrada_MW: 5.99999E-2, costo_dolar_por_MW: 1.79996E+1, potencia_atendida_MW: 1.28122E-6, _atendido: 0.002135371 },
      { nodo: 27, carga_MW: 0.06, potencia_deslastrada_MW: 5.99996E-2, costo_dolar_por_MW: 5.99996E+0, potencia_atendida_MW: 4.26712E-7, _atendido: 0.000711187 },
      { nodo: 9, carga_MW: 0.06, potencia_deslastrada_MW: 5.99995E-2, costo_dolar_por_MW: 5.99949E+0, potencia_atendida_MW: 5.09361E-6, _atendido: 0.008489355 },
      { nodo: 10, carga_MW: 0.06, potencia_deslastrada_MW: 1.50177E-2, costo_dolar_por_MW: 3.00354E+0, potencia_atendida_MW: 4.49823E-2, _atendido: 74.97054048 },
      { nodo: 20, carga_MW: 0.09, potencia_deslastrada_MW: 8.99999E-2, costo_dolar_por_MW: 9.00000E+0, potencia_atendida_MW: 1.33389E-8, _atendido: 1.4821E-5 },
      { nodo: 21, carga_MW: 0.09, potencia_deslastrada_MW: 8.99999E-2, costo_dolar_por_MW: 9.00000E+0, potencia_atendida_MW: 1.33361E-8, _atendido: 1.48179E-5 },
      { nodo: 22, carga_MW: 0.09, potencia_deslastrada_MW: 3.39776E-5, costo_dolar_por_MW: 1.35910E-2, potencia_atendida_MW: 8.99660E-2, _atendido: 99.96224713 },
      { nodo: 7, carga_MW: 0.2, potencia_deslastrada_MW: 1.00037E-1, costo_dolar_por_MW: 3.00110E+1, potencia_atendida_MW: 9.99632E-2, _atendido: 49.98160858 },
      { nodo: 8, carga_MW: 0.2, potencia_deslastrada_MW: 2.00000E-1, costo_dolar_por_MW: 2.00000E+1, potencia_atendida_MW: 2.71812E-8, _atendido: 1.35906E-5 },
      { nodo: 16, carga_MW: 0.06, potencia_deslastrada_MW: 5.99996E-2, costo_dolar_por_MW: 5.99996E+0, potencia_atendida_MW: 4.02787E-7, _atendido: 0.000671312 },
      { nodo: 17, carga_MW: 0.06, potencia_deslastrada_MW: 1.50081E-2, costo_dolar_por_MW: 4.50242E+0, potencia_atendida_MW: 4.49919E-2, _atendido: 74.98653389 },
      { nodo: 18, carga_MW: 0.09, potencia_deslastrada_MW: 9.00000E-2, costo_dolar_por_MW: 3.60000E+1, potencia_atendida_MW: 0, _atendido: 0 },
      { nodo: 24, carga_MW: 0.42, potencia_deslastrada_MW: 3.74998E-7, costo_dolar_por_MW: 7.49996E-5, potencia_atendida_MW: 0.419999625, _atendido: 99.99991071 },
      { nodo: 25, carga_MW: 0.42, potencia_deslastrada_MW: 2.08203E-7, costo_dolar_por_MW: 6.24609E-5, potencia_atendida_MW: 0.419999792, _atendido: 99.99995043 },
      { nodo: 14, carga_MW: 0.12, potencia_deslastrada_MW: 6.00000E-2, costo_dolar_por_MW: 6.00000E+0, potencia_atendida_MW: 6.00000E-2, _atendido: 50 },
      { nodo: 15, carga_MW: 0.06, potencia_deslastrada_MW: 4.50000E-2, costo_dolar_por_MW: 9.00000E+0, potencia_atendida_MW: 1.50000E-2, _atendido: 25 },
      { nodo: 28, carga_MW: 0.06, potencia_deslastrada_MW: 4.50000E-2, costo_dolar_por_MW: 9.00000E+0, potencia_atendida_MW: 1.50000E-2, _atendido: 25 },
      { nodo: 29, carga_MW: 0.12, potencia_deslastrada_MW: 9.00000E-2, costo_dolar_por_MW: 2.70000E+1, potencia_atendida_MW: 3.00000E-2, _atendido: 25 },
      { nodo: 30, carga_MW: 0.2, potencia_deslastrada_MW: 1.00000E-1, costo_dolar_por_MW: 1.00000E+1, potencia_atendida_MW: 1.00000E-1, _atendido: 50 },
      { nodo: 31, carga_MW: 0.15, potencia_deslastrada_MW: 1.50000E-1, costo_dolar_por_MW: 3.00000E+1, potencia_atendida_MW: 0, _atendido: 0 },
      { nodo: 33, carga_MW: 0.06, potencia_deslastrada_MW: 4.50000E-2, costo_dolar_por_MW: 9.00000E+0, potencia_atendida_MW: 1.50000E-2, _atendido: 25 }
  ];
  
    
 
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="39"){

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "2 - 30",
            "porcentaje": 100
          },
          {
            "linea": "10 - 32",
            "porcentaje": 100
          },
          {
            "linea": "19 - 33",
            "porcentaje": 100
          },
          {
            "linea": "20 - 34",
            "porcentaje": 100
          },
          {
            "linea": "23 - 36",
            "porcentaje": 100
          },
          {
            "linea": "29 - 38",
            "porcentaje": 100
          },
          {
            "linea": "22 - 35",
            "porcentaje": 98.6667
          },
          {
            "linea": "25 - 37",
            "porcentaje": 98.6667
          },
          {
            "linea": "23 - 24",
            "porcentaje": 66.6667
          },
          {
            "linea": "16 - 21",
            "porcentaje": 65.3333
          },
          {
            "linea": "9 - 39",
            "porcentaje": 61.3333
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 31",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 39",
            "porcentaje": 100
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [],
      "tiempo_ejecucion": 514.3694511
    }
    
   
    let generadores = {
      "generators": [
        { "nodo": 30, "PG_MW": 250, "QG_MW": 161.762, "Q_MAX_MVAR": 400, "Q_MIN_MVAR": 140, "P_MAX_MW": 1040, "costo_marginal_dolar_per_MW": 0.51 },
        { "nodo": 31, "PG_MW": 677.871, "QG_MW": 221.574, "Q_MAX_MVAR": 300, "Q_MIN_MVAR": -100, "P_MAX_MW": 646, "costo_marginal_dolar_per_MW": 0.51 },
        { "nodo": 32, "PG_MW": 650, "QG_MW": 206.965, "Q_MAX_MVAR": 300, "Q_MIN_MVAR": 150, "P_MAX_MW": 725, "costo_marginal_dolar_per_MW": 0.51 },
        { "nodo": 33, "PG_MW": 632, "QG_MW": 108.293, "Q_MAX_MVAR": 250, "Q_MIN_MVAR": 0, "P_MAX_MW": 652, "costo_marginal_dolar_per_MW": 0.51 },
        { "nodo": 34, "PG_MW": 508, "QG_MW": 166.688, "Q_MAX_MVAR": 167, "Q_MIN_MVAR": 0, "P_MAX_MW": 508, "costo_marginal_dolar_per_MW": 0.51 },
        { "nodo": 35, "PG_MW": 650, "QG_MW": 210.661, "Q_MAX_MVAR": 300, "Q_MIN_MVAR": -100, "P_MAX_MW": 687, "costo_marginal_dolar_per_MW": 0.51 },
        { "nodo": 36, "PG_MW": 560, "QG_MW": 100.165, "Q_MAX_MVAR": 240, "Q_MIN_MVAR": 0, "P_MAX_MW": 580, "costo_marginal_dolar_per_MW": 0.51 },
        { "nodo": 37, "PG_MW": 540, "QG_MW": -1.36945, "Q_MAX_MVAR": 250, "Q_MIN_MVAR": 0, "P_MAX_MW": 564, "costo_marginal_dolar_per_MW": 0.51 },
        { "nodo": 38, "PG_MW": 830, "QG_MW": 21.7327, "Q_MAX_MVAR": 300, "Q_MIN_MVAR": -150, "P_MAX_MW": 865, "costo_marginal_dolar_per_MW": 0.51 },
        { "nodo": 39, "PG_MW": 1000, "QG_MW": 78.4674, "Q_MAX_MVAR": 300, "Q_MIN_MVAR": -100, "P_MAX_MW": 1100, "costo_marginal_dolar_per_MW": 0.51 }
      ]
    };
    
    
    
  
    let lineas = {
      "lines": [
        {"I": 1, "J": 2, "flujo_P_I_a_J_MW": -367.1074057, "flujo_Q_I_a_J_MW": -14.52704929, "flujo_P_J_a_I_MW": 371.4762284, "flujo_Q_J_a_I_MW": -10.88121119},
        {"I": 1, "J": 39, "flujo_P_I_a_J_MW": 269.507375, "flujo_Q_I_a_J_MW": -29.67294779, "flujo_P_J_a_I_MW": -268.836226, "flujo_Q_J_a_I_MW": -34.60036581},
        {"I": 2, "J": 3, "flujo_P_I_a_J_MW": 454.3903683, "flujo_Q_I_a_J_MW": 22.58336444, "flujo_P_J_a_I_MW": -451.960211, "flujo_Q_J_a_I_MW": -22.71118992},
        {"I": 2, "J": 25, "flujo_P_I_a_J_MW": -154.2780569, "flujo_Q_I_a_J_MW": 50.49050117, "flujo_P_J_a_I_MW": 155.9929203, "flujo_Q_J_a_I_MW": -64.70194272},
        {"I": 2, "J": 30, "flujo_P_I_a_J_MW": -671.5885501, "flujo_Q_I_a_J_MW": -62.19265021, "flujo_P_J_a_I_MW": 671.5885501, "flujo_Q_J_a_I_MW": 140.0003383},
        {"I": 3, "J": 4, "flujo_P_I_a_J_MW": 128.2282455, "flujo_Q_I_a_J_MW": 31.58253585, "flujo_P_J_a_I_MW": -128.0100087, "flujo_Q_J_a_I_MW": -51.97407939},
        {"I": 3, "J": 18, "flujo_P_I_a_J_MW": 1.731967102, "flujo_Q_I_a_J_MW": -11.27134582, "flujo_P_J_a_I_MW": -1.73193519, "flujo_Q_J_a_I_MW": -12.09762778},
        {"I": 4, "J": 5, "flujo_P_I_a_J_MW": -107.0406169, "flujo_Q_I_a_J_MW": -69.10491215, "flujo_P_J_a_I_MW": 107.1547335, "flujo_Q_J_a_I_MW": 56.42588326},
        {"I": 4, "J": 14, "flujo_P_I_a_J_MW": -264.9493605, "flujo_Q_I_a_J_MW": -62.92100724, "flujo_P_J_a_I_MW": 265.4962548, "flujo_Q_J_a_I_MW": 56.78927017},
        {"I": 5, "J": 6, "flujo_P_I_a_J_MW": -513.9160557, "flujo_Q_I_a_J_MW": -122.0589507, "flujo_P_J_a_I_MW": 514.4270701, "flujo_Q_J_a_I_MW": 123.9543224},
        {"I": 5, "J": 8, "flujo_P_I_a_J_MW": 406.7613206, "flujo_Q_I_a_J_MW": 65.63306733, "flujo_P_J_a_I_MW": -405.5068355, "flujo_Q_J_a_I_MW": -63.9996035},
        {"I": 6, "J": 7, "flujo_P_I_a_J_MW": 504.9592316, "flujo_Q_I_a_J_MW": 111.0158915, "flujo_P_J_a_I_MW": -503.4910504, "flujo_Q_J_a_I_MW": -100.7690182},
        {"I": 6, "J": 11, "flujo_P_I_a_J_MW": -382.5863698, "flujo_Q_I_a_J_MW": -53.81384732, "flujo_P_J_a_I_MW": 383.5329597, "flujo_Q_J_a_I_MW": 49.5523991},
        {"I": 6, "J": 31, "flujo_P_I_a_J_MW": -636.7999377, "flujo_Q_I_a_J_MW": -181.156365, "flujo_P_J_a_I_MW": 636.7999377, "flujo_Q_J_a_I_MW": 295.399909},
        {"I": 7, "J": 8, "flujo_P_I_a_J_MW": 269.6910609, "flujo_Q_I_a_J_MW": 16.76901967, "flujo_P_J_a_I_MW": -269.4181943, "flujo_Q_J_a_I_MW": -21.98232224},
        {"I": 8, "J": 9, "flujo_P_I_a_J_MW": 152.9250517, "flujo_Q_I_a_J_MW": -90.61807168, "flujo_P_J_a_I_MW": -152.3154174, "flujo_Q_J_a_I_MW": 58.68261171},
        {"I": 9, "J": 39, "flujo_P_I_a_J_MW": 145.8154021, "flujo_Q_I_a_J_MW": 7.917384736, "flujo_P_J_a_I_MW": -145.5746709, "flujo_Q_J_a_I_MW": -133.51295},
        {"I": 10, "J": 11, "flujo_P_I_a_J_MW": 383.6938938, "flujo_Q_I_a_J_MW": 92.711864, "flujo_P_J_a_I_MW": -383.1362163, "flujo_Q_J_a_I_MW": -94.86419048},
        {"I": 10, "J": 13, "flujo_P_I_a_J_MW": 287.4660348, "flujo_Q_I_a_J_MW": 107.2932843, "flujo_P_J_a_I_MW": -287.1275521, "flujo_Q_J_a_I_MW": -111.7998175},
        {"I": 10, "J": 32, "flujo_P_I_a_J_MW": -671.1599306, "flujo_Q_I_a_J_MW": -200.0051464, "flujo_P_J_a_I_MW": 671.1599306, "flujo_Q_J_a_I_MW": 299.994016},
        {"I": 12, "J": 11, "flujo_P_I_a_J_MW": 0.426288788, "flujo_Q_I_a_J_MW": -44.50858995, "flujo_P_J_a_I_MW": -0.396745745, "flujo_Q_J_a_I_MW": 45.31179145},
        {"I": 12, "J": 13, "flujo_P_I_a_J_MW": -8.956288554, "flujo_Q_I_a_J_MW": -43.49140894, "flujo_P_J_a_I_MW": 8.985690257, "flujo_Q_J_a_I_MW": 44.29076772},
        {"I": 13, "J": 14, "flujo_P_I_a_J_MW": 278.1418636, "flujo_Q_I_a_J_MW": 67.50904972, "flujo_P_J_a_I_MW": -277.4673022, "flujo_Q_J_a_I_MW": -78.91868538},
        {"I": 14, "J": 15, "flujo_P_I_a_J_MW": 11.97104973, "flujo_Q_I_a_J_MW": 22.12941508, "flujo_P_J_a_I_MW": -11.93945268, "flujo_Q_J_a_I_MW": -61.36199124},
        {"I": 15, "J": 16, "flujo_P_I_a_J_MW": -308.0605437, "flujo_Q_I_a_J_MW": -91.63800848, "flujo_P_J_a_I_MW": 308.9135657, "flujo_Q_J_a_I_MW": 82.01143419},
        {"I": 16, "J": 17, "flujo_P_I_a_J_MW": 236.5010092, "flujo_Q_I_a_J_MW": -35.70001965, "flujo_P_J_a_I_MW": -236.1382822, "flujo_Q_J_a_I_MW": 25.60361014},
        {"I": 16, "J": 19, "flujo_P_I_a_J_MW": -471.0802382, "flujo_Q_I_a_J_MW": -31.61771216, "flujo_P_J_a_I_MW": 474.3263737, "flujo_Q_J_a_I_MW": 37.45851277},
        {"I": 16, "J": 21, "flujo_P_I_a_J_MW": -347.7461779, "flujo_Q_I_a_J_MW": 32.20484959, "flujo_P_J_a_I_MW": 348.6452959, "flujo_Q_J_a_I_MW": -44.86906411},
        {"I": 16, "J": 24, "flujo_P_I_a_J_MW": -55.58815745, "flujo_Q_I_a_J_MW": -79.1985519, "flujo_P_J_a_I_MW": 55.61223225, "flujo_Q_J_a_I_MW": 72.19506767},
        {"I": 17, "J": 18, "flujo_P_I_a_J_MW": 156.4251929, "flujo_Q_I_a_J_MW": 5.299714334, "flujo_P_J_a_I_MW": -156.2680633, "flujo_Q_J_a_I_MW": -17.90237217},
        {"I": 17, "J": 27, "flujo_P_I_a_J_MW": 79.71309005, "flujo_Q_I_a_J_MW": -30.90332444, "flujo_P_J_a_I_MW": -79.63571018, "flujo_Q_J_a_I_MW": -3.391952295},
        {"I": 19, "J": 20, "flujo_P_I_a_J_MW": 174.6486059, "flujo_Q_I_a_J_MW": 16.30288553, "flujo_P_J_a_I_MW": -174.4332304, "flujo_Q_J_a_I_MW": -12.05691173},
        {"I": 19, "J": 33, "flujo_P_I_a_J_MW": -648.974978, "flujo_Q_I_a_J_MW": -53.76139817, "flujo_P_J_a_I_MW": 651.9996623, "flujo_Q_J_a_I_MW": 115.1192788},
        {"I": 20, "J": 34, "flujo_P_I_a_J_MW": -505.5667695, "flujo_Q_I_a_J_MW": -90.94308827, "flujo_P_J_a_I_MW": 507.9999933, "flujo_Q_J_a_I_MW": 139.607563},
        {"I": 21, "J": 22, "flujo_P_I_a_J_MW": -622.6452961, "flujo_Q_I_a_J_MW": -70.13093581, "flujo_P_J_a_I_MW": 625.5136465, "flujo_Q_J_a_I_MW": 91.94678766},
        {"I": 22, "J": 23, "flujo_P_I_a_J_MW": 35.94085715, "flujo_Q_I_a_J_MW": 68.97800789, "flujo_P_J_a_I_MW": -35.90031519, "flujo_Q_J_a_I_MW": -88.9124204},
        {"I": 22, "J": 35, "flujo_P_I_a_J_MW": -661.4545042, "flujo_Q_I_a_J_MW": -160.9247955, "flujo_P_J_a_I_MW": 661.4545042, "flujo_Q_J_a_I_MW": 222.9332279},
        {"I": 23, "J": 24, "flujo_P_I_a_J_MW": 366.8869611, "flujo_Q_I_a_J_MW": -17.36810027, "flujo_P_J_a_I_MW": -364.2122319, "flujo_Q_J_a_I_MW": 20.00493227},
        {"I": 23, "J": 36, "flujo_P_I_a_J_MW": -578.4866462, "flujo_Q_I_a_J_MW": 21.68052069, "flujo_P_J_a_I_MW": 579.999987, "flujo_Q_J_a_I_MW": 60.64521865},
        {"I": 25, "J": 26, "flujo_P_I_a_J_MW": 182.2132364, "flujo_Q_I_a_J_MW": -43.03931455, "flujo_P_J_a_I_MW": -181.2626886, "flujo_Q_J_a_I_MW": -7.029248039},
        {"I": 25, "J": 37, "flujo_P_I_a_J_MW": -562.2061332, "flujo_Q_I_a_J_MW": 60.5412518, "flujo_P_J_a_I_MW": 563.999981, "flujo_Q_J_a_I_MW": 8.820863277},
        {"I": 26, "J": 27, "flujo_P_I_a_J_MW": 201.9246727, "flujo_Q_I_a_J_MW": 51.35619508, "flujo_P_J_a_I_MW": -201.3642888, "flujo_Q_J_a_I_MW": -72.10804766},
        {"I": 26, "J": 28, "flujo_P_I_a_J_MW": -54.9207262, "flujo_Q_I_a_J_MW": -27.83935601, "flujo_P_J_a_I_MW": 55.04594664, "flujo_Q_J_a_I_MW": -58.06213909},
        {"I": 26, "J": 29, "flujo_P_I_a_J_MW": -104.7412575, "flujo_Q_I_a_J_MW": -33.48759091, "flujo_P_J_a_I_MW": 105.3278092, "flujo_Q_J_a_I_MW": -74.95803857},
        {"I": 28, "J": 29, "flujo_P_I_a_J_MW": -261.0459462, "flujo_Q_I_a_J_MW": 30.46213907, "flujo_P_J_a_I_MW": 261.9271829, "flujo_Q_J_a_I_MW": -48.63389063},
        {"I": 29, "J": 38, "flujo_P_I_a_J_MW": -650.7549903, "flujo_Q_I_a_J_MW": 96.69192911, "flujo_P_J_a_I_MW": 654.0348097, "flujo_Q_J_a_I_MW": -32.73545077}
      ]
    };
    
    
  
    
    let nodos = {
      "nodes": [
        { "nodo": 1, "tipo_de_nodo": 1, "P_MW": 97.6, "Q_MVAR": 44.2, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 2, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 3, "tipo_de_nodo": 1, "P_MW": 322, "Q_MVAR": 2.4, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 4, "tipo_de_nodo": 1, "P_MW": 500, "Q_MVAR": 184, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 5, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 6, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 7, "tipo_de_nodo": 1, "P_MW": 233.8, "Q_MVAR": 84, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 8, "tipo_de_nodo": 1, "P_MW": 522, "Q_MVAR": 176.6, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 9, "tipo_de_nodo": 1, "P_MW": 6.5, "Q_MVAR": -66.6, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 10, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 11, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 12, "tipo_de_nodo": 1, "P_MW": 8.53, "Q_MVAR": 88, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 13, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 14, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 15, "tipo_de_nodo": 1, "P_MW": 320, "Q_MVAR": 153, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 16, "tipo_de_nodo": 1, "P_MW": 329, "Q_MVAR": 32.3, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 17, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 18, "tipo_de_nodo": 1, "P_MW": 158, "Q_MVAR": 30, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 19, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 20, "tipo_de_nodo": 1, "P_MW": 680, "Q_MVAR": 103, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 21, "tipo_de_nodo": 1, "P_MW": 274, "Q_MVAR": 115, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 22, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 23, "tipo_de_nodo": 1, "P_MW": 247.5, "Q_MVAR": 84.6, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 24, "tipo_de_nodo": 1, "P_MW": 308.6, "Q_MVAR": -92.2, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 25, "tipo_de_nodo": 1, "P_MW": 224, "Q_MVAR": 47.2, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 26, "tipo_de_nodo": 1, "P_MW": 139, "Q_MVAR": 17, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 27, "tipo_de_nodo": 1, "P_MW": 281, "Q_MVAR": 75.5, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 28, "tipo_de_nodo": 1, "P_MW": 206, "Q_MVAR": 27.6, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 29, "tipo_de_nodo": 1, "P_MW": 283.5, "Q_MVAR": 26.9, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 30, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 31, "tipo_de_nodo": 3, "P_MW": 9.2, "Q_MVAR": 4.6, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 32, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 33, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 34, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 35, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 36, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 37, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 38, "tipo_de_nodo": 2, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 39, "tipo_de_nodo": 2, "P_MW": 1104, "Q_MVAR": 250, "V_max": 1.06, "V_min": 0.94 }
      ]
    };
    
    
    
  
    
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 6254.238143,
        "potencia_atendida_MW": -0.008142685,
        "potencia_generada_adicional_MW": 6254.238143 - (-0.008142685),
        "costo_operacion_dolar_per_MWH": 1386962.852,
        "costo_deslastre_dolar_per_MWH": 1386961.252,
        "U1": -1.30195E-06,
        "U2": 1.1536E-06,
        "U": -7.41744E-08,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 4632.190361,
        "potencia_atendida_MW": 1622.039639,
        "potencia_generada_adicional_MW": 4632.190361 - 1622.039639,
        "costo_operacion_dolar_per_MWH": 936920.9362,
        "costo_deslastre_dolar_per_MWH": 854414.3364,
        "U1": 0.259350814,
        "U2": 0.088061433,
        "U": 0.173706123,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 6164.349032,
        "potencia_atendida_MW": 89.88096775,
        "potencia_generada_adicional_MW": 6164.349032 - 89.88096775,
        "costo_operacion_dolar_per_MWH": 1357758.213,
        "costo_deslastre_dolar_per_MWH": 1351006.613,
        "U1": 0.014371228,
        "U2": 0.004972608,
        "U": 0.009671918,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 4542.343976,
        "potencia_atendida_MW": 1711.886024,
        "potencia_generada_adicional_MW": 4542.343976 - 1711.886024,
        "costo_operacion_dolar_per_MWH": 912217.0798,
        "costo_deslastre_dolar_per_MWH": 822960.48,
        "U1": 0.273716513,
        "U2": 0.097845789,
        "U": 0.185781151,
        "resiliencia": "POBRE"
      }
    ];
    
    
  
 
    let escenario1ConSinRdNiGd = [
      { "nodo": 1, "carga_MW": 97.6, "potencia_deslastrada_MW": 97.60106742, "costo_dolar_por_MW": 9760.106742, "potencia_atendida_MW": -0.001067419, "_atendido": -0.001093667 },
      { "nodo": 3, "carga_MW": 322, "potencia_deslastrada_MW": 322, "costo_dolar_por_MW": 96599.99999, "potencia_atendida_MW": 1.96323E-08, "_atendido": 6.09699E-09 },
      { "nodo": 4, "carga_MW": 500, "potencia_deslastrada_MW": 500, "costo_dolar_por_MW": 100000, "potencia_atendida_MW": 1.54761E-08, "_atendido": 3.09523E-09 },
      { "nodo": 7, "carga_MW": 233.8, "potencia_deslastrada_MW": 233.8, "costo_dolar_por_MW": 70139.99999, "potencia_atendida_MW": 1.96316E-08, "_atendido": 8.39673E-09 },
      { "nodo": 8, "carga_MW": 522, "potencia_deslastrada_MW": 522, "costo_dolar_por_MW": 52200, "potencia_atendida_MW": 5.05406E-09, "_atendido": 9.68211E-10 },
      { "nodo": 9, "carga_MW": 6.5, "potencia_deslastrada_MW": 6.502017029, "costo_dolar_por_MW": 2600.806812, "potencia_atendida_MW": -0.002017029, "_atendido": -0.031031218 },
      { "nodo": 12, "carga_MW": 8.53, "potencia_deslastrada_MW": 8.531995874, "costo_dolar_por_MW": 2559.598762, "potencia_atendida_MW": -0.001995874, "_atendido": -0.023398289 },
      { "nodo": 15, "carga_MW": 320, "potencia_deslastrada_MW": 320, "costo_dolar_por_MW": 32000, "potencia_atendida_MW": 5.0116E-09, "_atendido": 1.56613E-09 },
      { "nodo": 16, "carga_MW": 329, "potencia_deslastrada_MW": 329, "costo_dolar_por_MW": 32900, "potencia_atendida_MW": 5.02791E-09, "_atendido": 1.52824E-09 },
      { "nodo": 18, "carga_MW": 158, "potencia_deslastrada_MW": 158.0004378, "costo_dolar_por_MW": 31600.08756, "potencia_atendida_MW": -0.000437795, "_atendido": -0.000277085 },
      { "nodo": 21, "carga_MW": 274, "potencia_deslastrada_MW": 274, "costo_dolar_por_MW": 27400, "potencia_atendida_MW": 5.02598E-09, "_atendido": 1.8343E-09 },
      { "nodo": 23, "carga_MW": 247.5, "potencia_deslastrada_MW": 247.5, "costo_dolar_por_MW": 49500, "potencia_atendida_MW": 1.54749E-08, "_atendido": 6.25249E-09 },
      { "nodo": 24, "carga_MW": 308.6, "potencia_deslastrada_MW": 308.6, "costo_dolar_por_MW": 30860, "potencia_atendida_MW": 5.02718E-09, "_atendido": 1.62903E-09 },
      { "nodo": 25, "carga_MW": 224, "potencia_deslastrada_MW": 224, "costo_dolar_por_MW": 67199.99999, "potencia_atendida_MW": 1.9632E-08, "_atendido": 8.76427E-09 },
      { "nodo": 26, "carga_MW": 139, "potencia_deslastrada_MW": 139.0006358, "costo_dolar_por_MW": 55600.25434, "potencia_atendida_MW": -0.00063585, "_atendido": -0.000457446 },
      { "nodo": 27, "carga_MW": 281, "potencia_deslastrada_MW": 281, "costo_dolar_por_MW": 28100, "potencia_atendida_MW": 4.9908E-09, "_atendido": 1.77608E-09 },
      { "nodo": 28, "carga_MW": 206, "potencia_deslastrada_MW": 206, "costo_dolar_por_MW": 61799.99999, "potencia_atendida_MW": 1.96321E-08, "_atendido": 9.53016E-09 },
      { "nodo": 29, "carga_MW": 283.5, "potencia_deslastrada_MW": 283.5, "costo_dolar_por_MW": 56700, "potencia_atendida_MW": 1.54762E-08, "_atendido": 5.45899E-09 },
      { "nodo": 31, "carga_MW": 9.2, "potencia_deslastrada_MW": 9.201988894, "costo_dolar_por_MW": 1840.397779, "potencia_atendida_MW": -0.001988894, "_atendido": -0.021618415 },
      { "nodo": 39, "carga_MW": 1104, "potencia_deslastrada_MW": 1104, "costo_dolar_por_MW": 441600, "potencia_atendida_MW": 2.09857E-08, "_atendido": 1.90088E-09 },
      { "nodo": 20, "carga_MW": 680, "potencia_deslastrada_MW": 680, "costo_dolar_por_MW": 136000, "potencia_atendida_MW": 0, "_atendido": 0 }
    ];
    
  


let escenario2ConRdSinGd = [
  { "nodo": 1, "carga_MW": 97.6, "potencia_deslastrada_MW": 97.59999985, "costo_dolar_por_MW": 9759.999985, "potencia_atendida_MW": 1.54213E-07, "_atendido": 1.58005E-07 },
  { "nodo": 3, "carga_MW": 322, "potencia_deslastrada_MW": 281.3734814, "costo_dolar_por_MW": 84412.04443, "potencia_atendida_MW": 40.62651855, "_atendido": 12.61693123 },
  { "nodo": 4, "carga_MW": 500, "potencia_deslastrada_MW": 499.9999995, "costo_dolar_por_MW": 99999.99991, "potencia_atendida_MW": 4.5954E-07, "_atendido": 9.1908E-08 },
  { "nodo": 7, "carga_MW": 233.8, "potencia_deslastrada_MW": 4.47688E-07, "costo_dolar_por_MW": 0.000134306, "potencia_atendida_MW": 233.7999996, "_atendido": 99.99999981 },
  { "nodo": 8, "carga_MW": 522, "potencia_deslastrada_MW": 521.9999995, "costo_dolar_por_MW": 52199.99995, "potencia_atendida_MW": 4.6486E-07, "_atendido": 8.90536E-08 },
  { "nodo": 9, "carga_MW": 6.5, "potencia_deslastrada_MW": 2.25572E-07, "costo_dolar_por_MW": 9.02288E-05, "potencia_atendida_MW": 6.499999774, "_atendido": 99.99999653 },
  { "nodo": 12, "carga_MW": 8.53, "potencia_deslastrada_MW": 4.49082E-07, "costo_dolar_por_MW": 0.000134725, "potencia_atendida_MW": 8.529999551, "_atendido": 99.99999474 },
  { "nodo": 15, "carga_MW": 320, "potencia_deslastrada_MW": 319.9999995, "costo_dolar_por_MW": 31999.99995, "potencia_atendida_MW": 4.59064E-07, "_atendido": 1.43457E-07 },
  { "nodo": 16, "carga_MW": 329, "potencia_deslastrada_MW": 328.9999995, "costo_dolar_por_MW": 32899.99995, "potencia_atendida_MW": 4.55743E-07, "_atendido": 1.38524E-07 },
  { "nodo": 18, "carga_MW": 158, "potencia_deslastrada_MW": 157.9999995, "costo_dolar_por_MW": 31599.99991, "potencia_atendida_MW": 4.69867E-07, "_atendido": 2.97384E-07 },
  { "nodo": 21, "carga_MW": 274, "potencia_deslastrada_MW": 273.9999995, "costo_dolar_por_MW": 27399.99995, "potencia_atendida_MW": 4.56808E-07, "_atendido": 1.66718E-07 },
  { "nodo": 23, "carga_MW": 247.5, "potencia_deslastrada_MW": 106.953032, "costo_dolar_por_MW": 21390.6064, "potencia_atendida_MW": 140.546968, "_atendido": 56.78665373 },
  { "nodo": 24, "carga_MW": 308.6, "potencia_deslastrada_MW": 308.5999995, "costo_dolar_por_MW": 30859.99995, "potencia_atendida_MW": 4.56386E-07, "_atendido": 1.47889E-07 },
  { "nodo": 25, "carga_MW": 224, "potencia_deslastrada_MW": 89.43412354, "costo_dolar_por_MW": 26830.23706, "potencia_atendida_MW": 134.5658765, "_atendido": 60.07405199 },
  { "nodo": 26, "carga_MW": 139, "potencia_deslastrada_MW": 4.47131E-07, "costo_dolar_por_MW": 0.000178852, "potencia_atendida_MW": 138.9999996, "_atendido": 99.99999968 },
  { "nodo": 27, "carga_MW": 281, "potencia_deslastrada_MW": 280.9999998, "costo_dolar_por_MW": 28099.99998, "potencia_atendida_MW": 2.32422E-07, "_atendido": 8.27126E-08 },
  { "nodo": 28, "carga_MW": 206, "potencia_deslastrada_MW": 100.3043681, "costo_dolar_por_MW": 30091.31042, "potencia_atendida_MW": 105.6956319, "_atendido": 51.30855919 },
  { "nodo": 29, "carga_MW": 283.5, "potencia_deslastrada_MW": 283.4999995, "costo_dolar_por_MW": 56699.99991, "potencia_atendida_MW": 4.59227E-07, "_atendido": 1.61985E-07 },
  { "nodo": 31, "carga_MW": 9.2, "potencia_deslastrada_MW": 2.64246E-05, "costo_dolar_por_MW": 0.005284928, "potencia_atendida_MW": 9.199973575, "_atendido": 99.99971278 },
  { "nodo": 39, "carga_MW": 1104, "potencia_deslastrada_MW": 470.425332, "costo_dolar_por_MW": 188170.1328, "potencia_atendida_MW": 633.574668, "_atendido": 57.38900978 },
  { "nodo": 20, "carga_MW": 680, "potencia_deslastrada_MW": 510, "costo_dolar_por_MW": 102000, "potencia_atendida_MW": 170, "_atendido": 25 }
];


  let escenario3ConGdSinRd = [
    { nodo: 2, carga_MW: 0.1, potencia_deslastrada_MW: 0.1, costo_dolar_por_MW: 29.99999992, potencia_atendida_MW: 2.53212E-10, _atendido: 2.53212E-07 },
    { nodo: 3, carga_MW: 0.09, potencia_deslastrada_MW: 0.09, costo_dolar_por_MW: 18.00000002, potencia_atendida_MW: -8.50017E-11, _atendido: -9.44463E-08 },
    { nodo: 4, carga_MW: 0.12, potencia_deslastrada_MW: 0.12, costo_dolar_por_MW: 11.99999998, potencia_atendida_MW: 2.3263E-10, _atendido: 1.93858E-07 },
    { nodo: 5, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 11.99999996, potencia_atendida_MW: 2.00889E-10, _atendido: 3.34815E-07 },
    { nodo: 19, carga_MW: 0.09, potencia_deslastrada_MW: 0.09, costo_dolar_por_MW: 18.00000002, potencia_atendida_MW: -8.48955E-11, _atendido: -9.43283E-08 },
    { nodo: 23, carga_MW: 0.09, potencia_deslastrada_MW: 0.09, costo_dolar_por_MW: 18.00000002, potencia_atendida_MW: -8.50069E-11, _atendido: -9.44521E-08 },
    { nodo: 11, carga_MW: 0.045, potencia_deslastrada_MW: 0.044999999, costo_dolar_por_MW: 4.499999895, potencia_atendida_MW: 1.05088E-09, _atendido: 2.33528E-06 },
    { nodo: 12, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999999, costo_dolar_por_MW: 11.99999987, potencia_atendida_MW: 6.6745E-10, _atendido: 1.11242E-06 },
    { nodo: 13, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000001, costo_dolar_por_MW: 18.00000037, potencia_atendida_MW: -1.21992E-09, _atendido: -2.03321E-06 },
    { nodo: 6, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000001, costo_dolar_por_MW: 24.0000004, potencia_atendida_MW: -9.97089E-10, _atendido: -1.66182E-06 },
    { nodo: 26, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 17.99999988, potencia_atendida_MW: 4.15877E-10, _atendido: 6.93129E-07 },
    { nodo: 27, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999999, costo_dolar_por_MW: 5.999999919, potencia_atendida_MW: 8.06351E-10, _atendido: 1.34392E-06 },
    { nodo: 9, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 5.999999962, potencia_atendida_MW: 3.76127E-10, _atendido: 6.26879E-07 },
    { nodo: 10, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 12.00000007, potencia_atendida_MW: -3.53941E-10, _atendido: -5.89901E-07 },
    { nodo: 20, carga_MW: 0.09, potencia_deslastrada_MW: 0.089999999, costo_dolar_por_MW: 8.999999885, potencia_atendida_MW: 1.14802E-09, _atendido: 1.27557E-06 },
    { nodo: 21, carga_MW: 0.09, potencia_deslastrada_MW: 0.089999999, costo_dolar_por_MW: 8.999999885, potencia_atendida_MW: 1.14776E-09, _atendido: 1.27529E-06 },
    { nodo: 22, carga_MW: 0.09, potencia_deslastrada_MW: 0.090000002, costo_dolar_por_MW: 36.0000008, potencia_atendida_MW: -2.0082E-09, _atendido: -2.23134E-06 },
    { nodo: 7, carga_MW: 0.2, potencia_deslastrada_MW: 0.200000001, costo_dolar_por_MW: 60.00000018, potencia_atendida_MW: -6.03288E-10, _atendido: -3.01644E-07 },
    { nodo: 8, carga_MW: 0.2, potencia_deslastrada_MW: 0.199999999, costo_dolar_por_MW: 19.99999993, potencia_atendida_MW: 7.37829E-10, _atendido: 3.68914E-07 },
    { nodo: 16, carga_MW: 0.06, potencia_deslastrada_MW: 0.059999999, costo_dolar_por_MW: 5.999999937, potencia_atendida_MW: 6.34086E-10, _atendido: 1.05681E-06 },
    { nodo: 17, carga_MW: 0.06, potencia_deslastrada_MW: 0.060000001, costo_dolar_por_MW: 18.00000018, potencia_atendida_MW: -5.96006E-10, _atendido: -9.93343E-07 },
    { nodo: 18, carga_MW: 0.09, potencia_deslastrada_MW: 0.09, costo_dolar_por_MW: 36, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 24, carga_MW: 0.42, potencia_deslastrada_MW: 2.29303E-07, costo_dolar_por_MW: 4.58605E-05, potencia_atendida_MW: 0.419999771, _atendido: 99.9999454 },
    { nodo: 25, carga_MW: 0.42, potencia_deslastrada_MW: 1.274E-07, costo_dolar_por_MW: 3.82201E-05, potencia_atendida_MW: 0.419999873, _atendido: 99.99996967 },
    { nodo: 14, carga_MW: 0.12, potencia_deslastrada_MW: 0.12, costo_dolar_por_MW: 12, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 15, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 12, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 28, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 12, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 29, carga_MW: 0.12, potencia_deslastrada_MW: 0.12, costo_dolar_por_MW: 36, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 30, carga_MW: 0.2, potencia_deslastrada_MW: 0.2, costo_dolar_por_MW: 20, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 31, carga_MW: 0.15, potencia_deslastrada_MW: 0.15, costo_dolar_por_MW: 30, potencia_atendida_MW: 0, _atendido: 0 },
    { nodo: 33, carga_MW: 0.06, potencia_deslastrada_MW: 0.06, costo_dolar_por_MW: 12, potencia_atendida_MW: 0, _atendido: 0 }
];

  


  let escenario4ConGdYRd = [
    { nodo: 1, carga_MW: 97.6, potencia_deslastrada_MW: 97.59999985, costo_dolar_por_MW: 9759.999985, potencia_atendida_MW: 1.54213E-07, _atendido: 1.58005E-07 },
    { nodo: 3, carga_MW: 322, potencia_deslastrada_MW: 281.3734814, costo_dolar_por_MW: 84412.04443, potencia_atendida_MW: 40.62651855, _atendido: 12.61693123 },
    { nodo: 4, carga_MW: 500, potencia_deslastrada_MW: 499.9999995, costo_dolar_por_MW: 99999.99991, potencia_atendida_MW: 4.5954E-07, _atendido: 9.1908E-08 },
    { nodo: 7, carga_MW: 233.8, potencia_deslastrada_MW: 4.47688E-07, costo_dolar_por_MW: 0.000134306, potencia_atendida_MW: 233.7999996, _atendido: 99.99999981 },
    { nodo: 8, carga_MW: 522, potencia_deslastrada_MW: 521.9999995, costo_dolar_por_MW: 52199.99995, potencia_atendida_MW: 4.6486E-07, _atendido: 8.90536E-08 },
    { nodo: 9, carga_MW: 6.5, potencia_deslastrada_MW: 2.25572E-07, costo_dolar_por_MW: 9.02288E-05, potencia_atendida_MW: 6.499999774, _atendido: 99.99999653 },
    { nodo: 12, carga_MW: 8.53, potencia_deslastrada_MW: 4.49082E-07, costo_dolar_por_MW: 0.000134725, potencia_atendida_MW: 8.529999551, _atendido: 99.99999474 },
    { nodo: 15, carga_MW: 320, potencia_deslastrada_MW: 319.9999995, costo_dolar_por_MW: 31999.99995, potencia_atendida_MW: 4.59064E-07, _atendido: 1.43457E-07 },
    { nodo: 16, carga_MW: 329, potencia_deslastrada_MW: 328.9999995, costo_dolar_por_MW: 32899.99995, potencia_atendida_MW: 4.55743E-07, _atendido: 1.38524E-07 },
    { nodo: 18, carga_MW: 158, potencia_deslastrada_MW: 157.9999995, costo_dolar_por_MW: 31599.99991, potencia_atendida_MW: 4.69867E-07, _atendido: 2.97384E-07 },
    { nodo: 21, carga_MW: 274, potencia_deslastrada_MW: 273.9999995, costo_dolar_por_MW: 27399.99995, potencia_atendida_MW: 4.56808E-07, _atendido: 1.66718E-07 },
    { nodo: 23, carga_MW: 247.5, potencia_deslastrada_MW: 106.953032, costo_dolar_por_MW: 21390.6064, potencia_atendida_MW: 140.546968, _atendido: 56.78665373 },
    { nodo: 24, carga_MW: 308.6, potencia_deslastrada_MW: 308.5999995, costo_dolar_por_MW: 30859.99995, potencia_atendida_MW: 4.56386E-07, _atendido: 1.47889E-07 },
    { nodo: 25, carga_MW: 224, potencia_deslastrada_MW: 89.43412354, costo_dolar_por_MW: 26830.23706, potencia_atendida_MW: 134.5658765, _atendido: 60.07405199 },
    { nodo: 26, carga_MW: 139, potencia_deslastrada_MW: 4.47131E-07, costo_dolar_por_MW: 0.000178852, potencia_atendida_MW: 138.9999996, _atendido: 99.99999968 },
    { nodo: 27, carga_MW: 281, potencia_deslastrada_MW: 280.9999998, costo_dolar_por_MW: 28099.99998, potencia_atendida_MW: 2.32422E-07, _atendido: 8.27126E-08 },
    { nodo: 28, carga_MW: 206, potencia_deslastrada_MW: 100.3043681, costo_dolar_por_MW: 30091.31042, potencia_atendida_MW: 105.6956319, _atendido: 51.30855919 },
    { nodo: 29, carga_MW: 283.5, potencia_deslastrada_MW: 283.4999995, costo_dolar_por_MW: 56699.99991, potencia_atendida_MW: 4.59227E-07, _atendido: 1.61985E-07 },
    { nodo: 31, carga_MW: 9.2, potencia_deslastrada_MW: 2.64246E-05, costo_dolar_por_MW: 0.005284928, potencia_atendida_MW: 9.199973575, _atendido: 99.99971278 },
    { nodo: 39, carga_MW: 1104, potencia_deslastrada_MW: 470.425332, costo_dolar_por_MW: 188170.1328, potencia_atendida_MW: 633.574668, _atendido: 57.38900978 },
    { nodo: 20, carga_MW: 680, potencia_deslastrada_MW: 510, costo_dolar_por_MW: 102000, potencia_atendida_MW: 170, _atendido: 25 }
];

  
    
 
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="51"){

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "36 - 37",
            "porcentaje": 97
          },
          {
            "linea": "37 - 38",
            "porcentaje": 97
          },
          {
            "linea": "1 - 2",
            "porcentaje": 96
          },
          {
            "linea": "35 - 36",
            "porcentaje": 94
          },
          {
            "linea": "11 - 44",
            "porcentaje": 93
          },
          {
            "linea": "22 - 23",
            "porcentaje": 91
          },
          {
            "linea": "3 - 20",
            "porcentaje": 90
          },
          {
            "linea": "7 - 30",
            "porcentaje": 90
          },
          {
            "linea": "5 - 22",
            "porcentaje": 86
          },
          {
            "linea": "16 - 17",
            "porcentaje": 84
          },
          {
            "linea": "15 - 50",
            "porcentaje": 78
          },
          {
            "linea": "25 - 26",
            "porcentaje": 70
          },
          {
            "linea": "34 - 35",
            "porcentaje": 66
          },
          {
            "linea": "47 - 48",
            "porcentaje": 57
          },
          {
            "linea": "4 - 21",
            "porcentaje": 52
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 36",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 37",
            "porcentaje": 100
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [
        {
          "linea": "5-6",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "6-7",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "7-8",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "8-9",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "9-10",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "10-11",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "11-12",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "24-29",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "8-41",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "9-42",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "10-43",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "12-45",
          "porcentaje_sobrecarga": "Inf"
        }
      ],
      "tiempo_ejecucion": 520.9183211
    }
    
   
    let generadores = {
      "generators": [
        { 
          "nodo": 0, 
          "PG_MW": 0, 
          "QG_MW": 10, 
          "Q_MAX_MVAR": -10, 
          "Q_MIN_MVAR": 10, 
          "P_MAX_MW": 20, 
          "costo_marginal_dolar_per_MW": 0.51 
        }
      ]
    };
    
    
    
  
    let lineas = {
      "lines": [
        {"I": 1, "J": 2, "flujo_P_I_a_J_MW": 1.95834181, "flujo_Q_I_a_J_MW": 1.107862476, "flujo_P_J_a_I_MW": -1.953934121, "flujo_Q_J_a_I_MW": -1.100191381},
        {"I": 2, "J": 3, "flujo_P_I_a_J_MW": 1.939354121, "flujo_Q_I_a_J_MW": 1.092121381, "flujo_P_J_a_I_MW": -1.935011699, "flujo_Q_J_a_I_MW": -1.084563877},
        {"I": 3, "J": 4, "flujo_P_I_a_J_MW": 1.872075019, "flujo_Q_I_a_J_MW": 1.051196402, "flujo_P_J_a_I_MW": -1.87004098, "flujo_Q_J_a_I_MW": -1.047656383},
        {"I": 4, "J": 5, "flujo_P_I_a_J_MW": 1.855460202, "flujo_Q_I_a_J_MW": 1.039585869, "flujo_P_J_a_I_MW": -1.851455135, "flujo_Q_J_a_I_MW": -1.032615494},
        {"I": 5, "J": 6, "flujo_P_I_a_J_MW": 1.540819512, "flujo_Q_I_a_J_MW": 0.860586473, "flujo_P_J_a_I_MW": -1.539431638, "flujo_Q_J_a_I_MW": -0.858171031},
        {"I": 6, "J": 7, "flujo_P_I_a_J_MW": 1.524851638, "flujo_Q_I_a_J_MW": 0.850101031, "flujo_P_J_a_I_MW": -1.523489884, "flujo_Q_J_a_I_MW": -0.84773105},
        {"I": 7, "J": 8, "flujo_P_I_a_J_MW": 0.95963295, "flujo_Q_I_a_J_MW": 0.545697801, "flujo_P_J_a_I_MW": -0.958541026, "flujo_Q_J_a_I_MW": -0.543797429},
        {"I": 8, "J": 9, "flujo_P_I_a_J_MW": 0.929368654, "flujo_Q_I_a_J_MW": 0.527655861, "flujo_P_J_a_I_MW": -0.928341795, "flujo_Q_J_a_I_MW": -0.525868726},
        {"I": 9, "J": 10, "flujo_P_I_a_J_MW": 0.840838622, "flujo_Q_I_a_J_MW": 0.477456628, "flujo_P_J_a_I_MW": -0.840038855, "flujo_Q_J_a_I_MW": -0.476111375},
        {"I": 10, "J": 11, "flujo_P_I_a_J_MW": 0.810859305, "flujo_Q_I_a_J_MW": 0.459965061, "flujo_P_J_a_I_MW": -0.809865333, "flujo_Q_J_a_I_MW": -0.458293142},
        {"I": 11, "J": 12, "flujo_P_I_a_J_MW": 0.661032214, "flujo_Q_I_a_J_MW": 0.375938187, "flujo_P_J_a_I_MW": -0.660700306, "flujo_Q_J_a_I_MW": -0.375379899},
        {"I": 12, "J": 13, "flujo_P_I_a_J_MW": 0.611519106, "flujo_Q_I_a_J_MW": 0.344232494, "flujo_P_J_a_I_MW": -0.610669927, "flujo_Q_J_a_I_MW": -0.342804127},
        {"I": 13, "J": 14, "flujo_P_I_a_J_MW": 0.610669927, "flujo_Q_I_a_J_MW": 0.342804127, "flujo_P_J_a_I_MW": -0.610103808, "flujo_Q_J_a_I_MW": -0.341851882},
        {"I": 14, "J": 15, "flujo_P_I_a_J_MW": 0.478757553, "flujo_Q_I_a_J_MW": 0.269168241, "flujo_P_J_a_I_MW": -0.477665248, "flujo_Q_J_a_I_MW": -0.268446045},
        {"I": 15, "J": 16, "flujo_P_I_a_J_MW": 0.360813544, "flujo_Q_I_a_J_MW": 0.203775909, "flujo_P_J_a_I_MW": -0.360063869, "flujo_Q_J_a_I_MW": -0.203280248},
        {"I": 16, "J": 17, "flujo_P_I_a_J_MW": 0.330893869, "flujo_Q_I_a_J_MW": 0.187140248, "flujo_P_J_a_I_MW": -0.330682646, "flujo_Q_J_a_I_MW": -0.187000595},
        {"I": 17, "J": 18, "flujo_P_I_a_J_MW": 0.165818005, "flujo_Q_I_a_J_MW": 0.095787856, "flujo_P_J_a_I_MW": -0.165710664, "flujo_Q_J_a_I_MW": -0.095716886},
        {"I": 18, "J": 19, "flujo_P_I_a_J_MW": 0.145710664, "flujo_Q_I_a_J_MW": 0.080716886, "flujo_P_J_a_I_MW": -0.14567, "flujo_Q_J_a_I_MW": -0.08069},
        {"I": 3, "J": 20, "flujo_P_I_a_J_MW": 0.06293668, "flujo_Q_I_a_J_MW": 0.033367475, "flujo_P_J_a_I_MW": -0.06288, "flujo_Q_J_a_I_MW": -0.03333},
        {"I": 4, "J": 21, "flujo_P_I_a_J_MW": 0.014580778, "flujo_Q_I_a_J_MW": 0.008070514, "flujo_P_J_a_I_MW": -0.01458, "flujo_Q_J_a_I_MW": -0.00807},
        {"I": 5, "J": 22, "flujo_P_I_a_J_MW": 0.310635623, "flujo_Q_I_a_J_MW": 0.172029021, "flujo_P_J_a_I_MW": -0.309746748, "flujo_Q_J_a_I_MW": -0.171441327},
        {"I": 22, "J": 23, "flujo_P_I_a_J_MW": 0.214956748, "flujo_Q_I_a_J_MW": 0.118991327, "flujo_P_J_a_I_MW": -0.21461426, "flujo_Q_J_a_I_MW": -0.118764885},
        {"I": 23, "J": 24, "flujo_P_I_a_J_MW": 0.170851596, "flujo_Q_I_a_J_MW": 0.094546512, "flujo_P_J_a_I_MW": -0.170797332, "flujo_Q_J_a_I_MW": -0.094510635},
        {"I": 24, "J": 25, "flujo_P_I_a_J_MW": 0.078885907, "flujo_Q_I_a_J_MW": 0.043659857, "flujo_P_J_a_I_MW": -0.078770141, "flujo_Q_J_a_I_MW": -0.043583317},
        {"I": 25, "J": 26, "flujo_P_I_a_J_MW": 0.064190141, "flujo_Q_I_a_J_MW": 0.035513317, "flujo_P_J_a_I_MW": -0.064174767, "flujo_Q_J_a_I_MW": -0.035503152},
      {"I": 26, "J": 27, "flujo_P_I_a_J_MW": 0.029174767, "flujo_Q_I_a_J_MW": 0.016143152, "flujo_P_J_a_I_MW": -0.02917, "flujo_Q_J_a_I_MW": -0.01614},
      {"I": 23, "J": 28, "flujo_P_I_a_J_MW": 0.029182665, "flujo_Q_I_a_J_MW": 0.016148374, "flujo_P_J_a_I_MW": -0.02917, "flujo_Q_J_a_I_MW": -0.01614},
      {"I": 24, "J": 29, "flujo_P_I_a_J_MW": 0.091911425, "flujo_Q_I_a_J_MW": 0.050850777, "flujo_P_J_a_I_MW": -0.09188, "flujo_Q_J_a_I_MW": -0.05083},
      {"I": 7, "J": 30, "flujo_P_I_a_J_MW": 0.563856935, "flujo_Q_I_a_J_MW": 0.302033249, "flujo_P_J_a_I_MW": -0.559506915, "flujo_Q_J_a_I_MW": -0.29915716},
      {"I": 30, "J": 31, "flujo_P_I_a_J_MW": 0.415257694, "flujo_Q_I_a_J_MW": 0.230044451, "flujo_P_J_a_I_MW": -0.414932986, "flujo_Q_J_a_I_MW": -0.229829765},
      {"I": 31, "J": 32, "flujo_P_I_a_J_MW": 0.385762986, "flujo_Q_I_a_J_MW": 0.213689765, "flujo_P_J_a_I_MW": -0.385201647, "flujo_Q_J_a_I_MW": -0.213318626},
      {"I": 32, "J": 33, "flujo_P_I_a_J_MW": 0.370621647, "flujo_Q_I_a_J_MW": 0.205248626, "flujo_P_J_a_I_MW": -0.370101993, "flujo_Q_J_a_I_MW": -0.204905048},
      {"I": 33, "J": 34, "flujo_P_I_a_J_MW": 0.326351993, "flujo_Q_I_a_J_MW": 0.180695048, "flujo_P_J_a_I_MW": -0.32604894, "flujo_Q_J_a_I_MW": -0.180494679},
      {"I": 34, "J": 35, "flujo_P_I_a_J_MW": 0.28229894, "flujo_Q_I_a_J_MW": 0.156284679, "flujo_P_J_a_I_MW": -0.281996024, "flujo_Q_J_a_I_MW": -0.156084401},
      {"I": 35, "J": 36, "flujo_P_I_a_J_MW": 0.267415214, "flujo_Q_I_a_J_MW": 0.148013866, "flujo_P_J_a_I_MW": -0.266938512, "flujo_Q_J_a_I_MW": -0.147698687},
      {"I": 36, "J": 37, "flujo_P_I_a_J_MW": 0.121108512, "flujo_Q_I_a_J_MW": 0.067008687, "flujo_P_J_a_I_MW": -0.121052442, "flujo_Q_J_a_I_MW": -0.066971615},
      {"I": 37, "J": 38, "flujo_P_I_a_J_MW": 0.029172442, "flujo_Q_I_a_J_MW": 0.016141615, "flujo_P_J_a_I_MW": -0.02917, "flujo_Q_J_a_I_MW": -0.01614},
      {"I": 30, "J": 39, "flujo_P_I_a_J_MW": 0.058349221, "flujo_Q_I_a_J_MW": 0.032282709, "flujo_P_J_a_I_MW": -0.05833, "flujo_Q_J_a_I_MW": -0.03227},
      {"I": 35, "J": 40, "flujo_P_I_a_J_MW": 0.01458081, "flujo_Q_I_a_J_MW": 0.008070535, "flujo_P_J_a_I_MW": -0.01458, "flujo_Q_J_a_I_MW": -0.00807},
      {"I": 8, "J": 41, "flujo_P_I_a_J_MW": 0.029172372, "flujo_Q_I_a_J_MW": 0.016141568, "flujo_P_J_a_I_MW": -0.02917, "flujo_Q_J_a_I_MW": -0.01614},
      {"I": 9, "J": 42, "flujo_P_I_a_J_MW": 0.029173173, "flujo_Q_I_a_J_MW": 0.016142098, "flujo_P_J_a_I_MW": -0.02917, "flujo_Q_J_a_I_MW": -0.01614},
      {"I": 10, "J": 43, "flujo_P_I_a_J_MW": 0.02917955, "flujo_Q_I_a_J_MW": 0.016146314, "flujo_P_J_a_I_MW": -0.02917, "flujo_Q_J_a_I_MW": -0.01614},
      {"I": 11, "J": 44, "flujo_P_I_a_J_MW": 0.148833119, "flujo_Q_I_a_J_MW": 0.082354955, "flujo_P_J_a_I_MW": -0.14875, "flujo_Q_J_a_I_MW": -0.0823},
      {"I": 12, "J": 45, "flujo_P_I_a_J_MW": 0.0291812, "flujo_Q_I_a_J_MW": 0.016147405, "flujo_P_J_a_I_MW": -0.02917, "flujo_Q_J_a_I_MW": -0.01614},
      {"I": 14, "J": 46, "flujo_P_I_a_J_MW": 0.131346255, "flujo_Q_I_a_J_MW": 0.072683641, "flujo_P_J_a_I_MW": -0.131313616, "flujo_Q_J_a_I_MW": -0.072662061},
      {"I": 46, "J": 47, "flujo_P_I_a_J_MW": 0.087562891, "flujo_Q_I_a_J_MW": 0.048451582, "flujo_P_J_a_I_MW": -0.087519352, "flujo_Q_J_a_I_MW": -0.048422795},
      {"I": 47, "J": 48, "flujo_P_I_a_J_MW": 0.058349352, "flujo_Q_I_a_J_MW": 0.032282795, "flujo_P_J_a_I_MW": -0.05833, "flujo_Q_J_a_I_MW": -0.03227},
      {"I": 46, "J": 49, "flujo_P_I_a_J_MW": 0.043750725, "flujo_Q_I_a_J_MW": 0.024210479, "flujo_P_J_a_I_MW": -0.04375, "flujo_Q_J_a_I_MW": -0.02421},
      {"I": 15, "J": 50, "flujo_P_I_a_J_MW": 0.116851703, "flujo_Q_I_a_J_MW": 0.064670136, "flujo_P_J_a_I_MW": -0.11667, "flujo_Q_J_a_I_MW": -0.06455},
      {"I": 17, "J": 51, "flujo_P_I_a_J_MW": 0.091944642, "flujo_Q_I_a_J_MW": 0.050872739, "flujo_P_J_a_I_MW": -0.09188, "flujo_Q_J_a_I_MW": -0.05083}
  
      ]
    };
    
    
  
    
    let nodos = {
      "nodes": [
        { "nodo": 1, "tipo_de_nodo": 3, "P_MW": 0, "Q_MVAR": 0, "V_max": 1, "V_min": 1 },
        { "nodo": 2, "tipo_de_nodo": 1, "P_MW": 0.01458, "Q_MVAR": 0.00807, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 3, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 4, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 5, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 6, "tipo_de_nodo": 1, "P_MW": 0.01458, "Q_MVAR": 0.00807, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 7, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 8, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 9, "tipo_de_nodo": 1, "P_MW": 0.05833, "Q_MVAR": 0.03227, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 10, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 11, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 12, "tipo_de_nodo": 1, "P_MW": 0.02, "Q_MVAR": 0.015, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 13, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 14, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 15, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 16, "tipo_de_nodo": 1, "P_MW": 0.02917, "Q_MVAR": 0.01614, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 17, "tipo_de_nodo": 1, "P_MW": 0.07292, "Q_MVAR": 0.04034, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 18, "tipo_de_nodo": 1, "P_MW": 0.02, "Q_MVAR": 0.015, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 19, "tipo_de_nodo": 1, "P_MW": 0.14567, "Q_MVAR": 0.08069, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 20, "tipo_de_nodo": 1, "P_MW": 0.06288, "Q_MVAR": 0.03333, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 21, "tipo_de_nodo": 1, "P_MW": 0.01458, "Q_MVAR": 0.00807, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 22, "tipo_de_nodo": 1, "P_MW": 0.09479, "Q_MVAR": 0.05245, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 23, "tipo_de_nodo": 1, "P_MW": 0.01458, "Q_MVAR": 0.00807, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 24, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 25, "tipo_de_nodo": 1, "P_MW": 0.01458, "Q_MVAR": 0.00807, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 26, "tipo_de_nodo": 1, "P_MW": 0.035, "Q_MVAR": 0.01936, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 27, "tipo_de_nodo": 1, "P_MW": 0.02917, "Q_MVAR": 0.01614, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 28, "tipo_de_nodo": 1, "P_MW": 0.02917, "Q_MVAR": 0.01614, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 29, "tipo_de_nodo": 1, "P_MW": 0.09188, "Q_MVAR": 0.05083, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 30, "tipo_de_nodo": 1, "P_MW": 0.0859, "Q_MVAR": 0.03683, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 31, "tipo_de_nodo": 1, "P_MW": 0.02917, "Q_MVAR": 0.01614, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 32, "tipo_de_nodo": 1, "P_MW": 0.01458, "Q_MVAR": 0.00807, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 33, "tipo_de_nodo": 1, "P_MW": 0.04375, "Q_MVAR": 0.02421, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 34, "tipo_de_nodo": 1, "P_MW": 0.04375, "Q_MVAR": 0.02421, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 35, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 36, "tipo_de_nodo": 1, "P_MW": 0.14583, "Q_MVAR": 0.08069, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 37, "tipo_de_nodo": 1, "P_MW": 0.09188, "Q_MVAR": 0.05083, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 38, "tipo_de_nodo": 1, "P_MW": 0.02917, "Q_MVAR": 0.01614, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 39, "tipo_de_nodo": 1, "P_MW": 0.05833, "Q_MVAR": 0.03227, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 40, "tipo_de_nodo": 1, "P_MW": 0.01458, "Q_MVAR": 0.00807, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 41, "tipo_de_nodo": 1, "P_MW": 0.02917, "Q_MVAR": 0.01614, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 42, "tipo_de_nodo": 1, "P_MW": 0.02917, "Q_MVAR": 0.01614, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 43, "tipo_de_nodo": 1, "P_MW": 0.02917, "Q_MVAR": 0.01614, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 44, "tipo_de_nodo": 1, "P_MW": 0.14875, "Q_MVAR": 0.0823, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 45, "tipo_de_nodo": 1, "P_MW": 0.02917, "Q_MVAR": 0.01614, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 46, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 47, "tipo_de_nodo": 1, "P_MW": 0.02917, "Q_MVAR": 0.01614, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 48, "tipo_de_nodo": 1, "P_MW": 0.05833, "Q_MVAR": 0.03227, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 49, "tipo_de_nodo": 1, "P_MW": 0.04375, "Q_MVAR": 0.02421, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 50, "tipo_de_nodo": 1, "P_MW": 0.11667, "Q_MVAR": 0.06455, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 51, "tipo_de_nodo": 1, "P_MW": 0.09188, "Q_MVAR": 0.05083, "V_max": 1.1, "V_min": 0.9 }
      ]
    };
    
    
    
    
  
    
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 1.40779,
        "potencia_atendida_MW": 0.51626,
        "potencia_generada_adicional_MW": 1.40779 - 0.51626,
        "costo_operacion_dolar_per_MWH": 392.423,
        "costo_deslastre_dolar_per_MWH": 265.4,
        "U1": 0.268319431,
        "U2": 0.323688979,
        "U": 0.296004205,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 0.98733,
        "potencia_atendida_MW": 0.93672,
        "potencia_generada_adicional_MW": 0.98733 - 0.93672,
        "costo_operacion_dolar_per_MWH": 312.2302767,
        "costo_deslastre_dolar_per_MWH": 174.5203715,
        "U1": 0.486846483,
        "U2": 0.441052375,
        "U": 0.463949429,
        "resiliencia": "POBRE"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 0.69873,
        "potencia_atendida_MW": 1.22532,
        "potencia_generada_adicional_MW": 0.69873 - 1.22532,
        "costo_operacion_dolar_per_MWH": 215.2410037,
        "costo_deslastre_dolar_per_MWH": 122.8290279,
        "U1": 0.636846427,
        "U2": 0.429341873,
        "U": 0.53309415,
        "resiliencia": "BUENA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 0.68014,
        "potencia_atendida_MW": 1.24391,
        "potencia_generada_adicional_MW": 0.68014 - 1.24391,
        "costo_operacion_dolar_per_MWH": 207.5935145,
        "costo_deslastre_dolar_per_MWH": 121.5172221,
        "U1": 0.64650525,
        "U2": 0.414638639,
        "U": 0.530571945,
        "resiliencia": "BUENA"
      }
    ];
    
    
  
    
    let escenario1ConSinRdNiGd = [
      { "nodo": 6, "carga_MW": 0.01458, "potencia_deslastrada_MW": 0.01458, "costo_dolar_por_MW": 2.9159998, "potencia_atendida_MW": 1.00201E-09, "_atendido": 6.87253E-06 },
      { "nodo": 9, "carga_MW": 0.05833, "potencia_deslastrada_MW": 0.05833, "costo_dolar_por_MW": 5.83299995, "potencia_atendida_MW": 4.99498E-10, "_atendido": 8.56331E-07 },
      { "nodo": 12, "carga_MW": 0.02, "potencia_deslastrada_MW": 0.02, "costo_dolar_por_MW": 3.9999998, "potencia_atendida_MW": 1.0019E-09, "_atendido": 5.00951E-06 },
      { "nodo": 23, "carga_MW": 0.01458, "potencia_deslastrada_MW": 1.06816E-07, "costo_dolar_por_MW": 3.20447E-05, "potencia_atendida_MW": 0.014579893, "_atendido": 99.99926738 },
      { "nodo": 30, "carga_MW": 0.0859, "potencia_deslastrada_MW": 2.99703E-06, "costo_dolar_por_MW": 0.00089911, "potencia_atendida_MW": 0.085897003, "_atendido": 99.99651102 },
      { "nodo": 31, "carga_MW": 0.02917, "potencia_deslastrada_MW": 2.78532E-06, "costo_dolar_por_MW": 0.000835595, "potencia_atendida_MW": 0.029167215, "_atendido": 99.99045143 },
      { "nodo": 32, "carga_MW": 0.01458, "potencia_deslastrada_MW": 0.01458, "costo_dolar_por_MW": 1.45799995, "potencia_atendida_MW": 4.98152E-10, "_atendido": 3.41668E-06 },
      { "nodo": 33, "carga_MW": 0.04375, "potencia_deslastrada_MW": 0.04375, "costo_dolar_por_MW": 4.37499995, "potencia_atendida_MW": 4.98181E-10, "_atendido": 1.1387E-06 },
      { "nodo": 34, "carga_MW": 0.04375, "potencia_deslastrada_MW": 0.043749999, "costo_dolar_por_MW": 8.749999801, "potencia_atendida_MW": 9.96754E-10, "_atendido": 2.2783E-06 },
      { "nodo": 38, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.02917, "costo_dolar_por_MW": 2.91699995, "potencia_atendida_MW": 4.97956E-10, "_atendido": 1.70708E-06 },
      { "nodo": 41, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.02917, "costo_dolar_por_MW": 2.91699995, "potencia_atendida_MW": 4.99507E-10, "_atendido": 1.7124E-06 },
      { "nodo": 42, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.02917, "costo_dolar_por_MW": 2.91699995, "potencia_atendida_MW": 4.99549E-10, "_atendido": 1.71254E-06 },
      { "nodo": 43, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.029169999, "costo_dolar_por_MW": 5.8339998, "potencia_atendida_MW": 1.00241E-09, "_atendido": 3.43644E-06 },
      { "nodo": 45, "carga_MW": 0.02917, "potencia_deslastrada_MW": 2.15888E-07, "costo_dolar_por_MW": 6.47663E-05, "potencia_atendida_MW": 0.029169784, "_atendido": 99.9992599 },
      { "nodo": 2, "carga_MW": 0.01458, "potencia_deslastrada_MW": 0.014578877, "costo_dolar_por_MW": 1.457887731, "potencia_atendida_MW": 1.12269E-06, "_atendido": 0.007700217 },
      { "nodo": 20, "carga_MW": 0.06288, "potencia_deslastrada_MW": 0.03987325, "costo_dolar_por_MW": 7.974649927, "potencia_atendida_MW": 0.02300675, "_atendido": 36.58834346 },
      { "nodo": 17, "carga_MW": 0.07292, "potencia_deslastrada_MW": 0.028230435, "costo_dolar_por_MW": 8.469130482, "potencia_atendida_MW": 0.044689565, "_atendido": 61.28574473 },
      { "nodo": 18, "carga_MW": 0.02, "potencia_deslastrada_MW": 0.019999998, "costo_dolar_por_MW": 1.999999802, "potencia_atendida_MW": 1.98113E-09, "_atendido": 9.90567E-06 },
      { "nodo": 19, "carga_MW": 0.14567, "potencia_deslastrada_MW": 0.145669996, "costo_dolar_por_MW": 29.13399921, "potencia_atendida_MW": 3.96439E-09, "_atendido": 2.72149E-06 },
      { "nodo": 50, "carga_MW": 0.11667, "potencia_deslastrada_MW": 0.08750941, "costo_dolar_por_MW": 17.50188192, "potencia_atendida_MW": 0.02916059, "_atendido": 24.99407765 },
      { "nodo": 49, "carga_MW": 0.04375, "potencia_deslastrada_MW": 0.03281496, "costo_dolar_por_MW": 6.562992035, "potencia_atendida_MW": 0.01093504, "_atendido": 24.99437674 },
      { "nodo": 16, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.02917, "costo_dolar_por_MW": 8.751, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 21, "carga_MW": 0.01458, "potencia_deslastrada_MW": 0.00729, "costo_dolar_por_MW": 0.729, "potencia_atendida_MW": 0.00729, "_atendido": 50 },
      { "nodo": 25, "carga_MW": 0.01458, "potencia_deslastrada_MW": 0.010935, "costo_dolar_por_MW": 2.187, "potencia_atendida_MW": 0.003645, "_atendido": 25 },
      { "nodo": 26, "carga_MW": 0.035, "potencia_deslastrada_MW": 0.0175, "costo_dolar_por_MW": 1.75, "potencia_atendida_MW": 0.0175, "_atendido": 50 },
      { "nodo": 27, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.0218775, "costo_dolar_por_MW": 4.3755, "potencia_atendida_MW": 0.0072925, "_atendido": 25 },
      { "nodo": 28, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.0218775, "costo_dolar_por_MW": 4.3755, "potencia_atendida_MW": 0.0072925, "_atendido": 25 },
      { "nodo": 39, "carga_MW": 0.05833, "potencia_deslastrada_MW": 0.05833, "costo_dolar_por_MW": 17.499, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 40, "carga_MW": 0.01458, "potencia_deslastrada_MW": 0.00729, "costo_dolar_por_MW": 0.729, "potencia_atendida_MW": 0.00729, "_atendido": 50 },
      { "nodo": 44, "carga_MW": 0.14875, "potencia_deslastrada_MW": 0.074375, "costo_dolar_por_MW": 7.4375, "potencia_atendida_MW": 0.074375, "_atendido": 50 },
      { "nodo": 47, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.02917, "costo_dolar_por_MW": 8.751, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 48, "carga_MW": 0.05833, "potencia_deslastrada_MW": 0.029165, "costo_dolar_por_MW": 2.9165, "potencia_atendida_MW": 0.029165, "_atendido": 50 }
    ];
    


let escenario2ConRdSinGd = [
  { "nodo": 6, "carga_MW": 0.01458, "potencia_deslastrada_MW": 6.08281E-08, "costo_dolar_por_MW": 1.21656E-05, "potencia_atendida_MW": 0.014579939, "_atendido": 99.9995828 },
  { "nodo": 9, "carga_MW": 0.05833, "potencia_deslastrada_MW": 3.27155E-07, "costo_dolar_por_MW": 3.27155E-05, "potencia_atendida_MW": 0.058329673, "_atendido": 99.99943913 },
  { "nodo": 12, "carga_MW": 0.02, "potencia_deslastrada_MW": 6.08556E-08, "costo_dolar_por_MW": 1.21711E-05, "potencia_atendida_MW": 0.019999939, "_atendido": 99.99969572 },
  { "nodo": 23, "carga_MW": 0.01458, "potencia_deslastrada_MW": 3.35791E-08, "costo_dolar_por_MW": 1.00737E-05, "potencia_atendida_MW": 0.014579966, "_atendido": 99.99976969 },
  { "nodo": 30, "carga_MW": 0.0859, "potencia_deslastrada_MW": 3.34292E-08, "costo_dolar_por_MW": 1.00288E-05, "potencia_atendida_MW": 0.085899967, "_atendido": 99.99996108 },
  { "nodo": 31, "carga_MW": 0.02917, "potencia_deslastrada_MW": 3.34141E-08, "costo_dolar_por_MW": 1.00242E-05, "potencia_atendida_MW": 0.029169967, "_atendido": 99.99988545 },
  { "nodo": 32, "carga_MW": 0.01458, "potencia_deslastrada_MW": 3.13316E-07, "costo_dolar_por_MW": 3.13316E-05, "potencia_atendida_MW": 0.014579687, "_atendido": 99.99785105 },
  { "nodo": 33, "carga_MW": 0.04375, "potencia_deslastrada_MW": 3.10235E-07, "costo_dolar_por_MW": 3.10235E-05, "potencia_atendida_MW": 0.04374969, "_atendido": 99.99929089 },
  { "nodo": 34, "carga_MW": 0.04375, "potencia_deslastrada_MW": 6.01311E-08, "costo_dolar_por_MW": 1.20262E-05, "potencia_atendida_MW": 0.04374994, "_atendido": 99.99986256 },
  { "nodo": 38, "carga_MW": 0.02917, "potencia_deslastrada_MW": 2.99714E-07, "costo_dolar_por_MW": 2.99714E-05, "potencia_atendida_MW": 0.0291697, "_atendido": 99.99897253 },
  { "nodo": 41, "carga_MW": 0.02917, "potencia_deslastrada_MW": 3.27024E-07, "costo_dolar_por_MW": 3.27024E-05, "potencia_atendida_MW": 0.029169673, "_atendido": 99.9988789 },
  { "nodo": 42, "carga_MW": 0.02917, "potencia_deslastrada_MW": 3.27386E-07, "costo_dolar_por_MW": 3.27386E-05, "potencia_atendida_MW": 0.029169673, "_atendido": 99.99887766 },
  { "nodo": 43, "carga_MW": 0.02917, "potencia_deslastrada_MW": 6.08659E-08, "costo_dolar_por_MW": 1.21732E-05, "potencia_atendida_MW": 0.029169939, "_atendido": 99.99979134 },
  { "nodo": 45, "carga_MW": 0.02917, "potencia_deslastrada_MW": 3.35466E-08, "costo_dolar_por_MW": 1.0064E-05, "potencia_atendida_MW": 0.029169966, "_atendido": 99.999885 },
  { "nodo": 2, "carga_MW": 0.01458, "potencia_deslastrada_MW": 0.01458, "costo_dolar_por_MW": 1.457999995, "potencia_atendida_MW": 4.53925E-11, "_atendido": 3.11334E-07 },
  { "nodo": 20, "carga_MW": 0.06288, "potencia_deslastrada_MW": 0.06288, "costo_dolar_por_MW": 12.576, "potencia_atendida_MW": 2.83107E-14, "_atendido": 4.50234E-11 },
  { "nodo": 17, "carga_MW": 0.07292, "potencia_deslastrada_MW": 1.08832E-06, "costo_dolar_por_MW": 0.000326495, "potencia_atendida_MW": 0.072918912, "_atendido": 99.99850752 },
  { "nodo": 18, "carga_MW": 0.02, "potencia_deslastrada_MW": 1.03036E-05, "costo_dolar_por_MW": 0.001030362, "potencia_atendida_MW": 0.019989696, "_atendido": 99.94848189 },
  { "nodo": 19, "carga_MW": 0.14567, "potencia_deslastrada_MW": 1.95921E-06, "costo_dolar_por_MW": 0.000391843, "potencia_atendida_MW": 0.145668041, "_atendido": 99.99865503 },
  { "nodo": 50, "carga_MW": 0.11667, "potencia_deslastrada_MW": 0.11667, "costo_dolar_por_MW": 23.334, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 49, "carga_MW": 0.04375, "potencia_deslastrada_MW": 0.04375, "costo_dolar_por_MW": 8.75, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 16, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.02917, "costo_dolar_por_MW": 8.751, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 21, "carga_MW": 0.01458, "potencia_deslastrada_MW": 0.01458, "costo_dolar_por_MW": 1.458, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 25, "carga_MW": 0.01458, "potencia_deslastrada_MW": 0.01458, "costo_dolar_por_MW": 2.916, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 26, "carga_MW": 0.035, "potencia_deslastrada_MW": 0.035, "costo_dolar_por_MW": 3.5, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 27, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.02917, "costo_dolar_por_MW": 5.834, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 28, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.02917, "costo_dolar_por_MW": 5.834, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 39, "carga_MW": 0.05833, "potencia_deslastrada_MW": 0.05833, "costo_dolar_por_MW": 17.499, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 40, "carga_MW": 0.01458, "potencia_deslastrada_MW": 0.01458, "costo_dolar_por_MW": 1.458, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 44, "carga_MW": 0.14875, "potencia_deslastrada_MW": 0.14875, "costo_dolar_por_MW": 14.875, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 47, "carga_MW": 0.02917, "potencia_deslastrada_MW": 0.02917, "costo_dolar_por_MW": 8.751, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 48, "carga_MW": 0.05833, "potencia_deslastrada_MW": 0.05833, "costo_dolar_por_MW": 5.833, "potencia_atendida_MW": 0, "_atendido": 0 }
];


 
let escenario3ConGdSinRd = [
  { nodo: 6, carga_MW: 1.458E-02, potencia_deslastrada_MW: 7.642E-03, costo_dolar_por_MW: 1.5285, potencia_atendida_MW: 6.938E-03, _atendido: 47.58 },
  { nodo: 9, carga_MW: 5.833E-02, potencia_deslastrada_MW: 3.078E-02, costo_dolar_por_MW: 3.078, potencia_atendida_MW: 2.755E-02, _atendido: 47.23 },
  { nodo: 12, carga_MW: 2.000E-02, potencia_deslastrada_MW: 9.918E-03, costo_dolar_por_MW: 1.984, potencia_atendida_MW: 1.008E-02, _atendido: 50.41 },
  { nodo: 23, carga_MW: 1.458E-02, potencia_deslastrada_MW: 5.249E-03, costo_dolar_por_MW: 1.575, potencia_atendida_MW: 9.331E-03, _atendido: 64.00 },
  { nodo: 30, carga_MW: 8.590E-02, potencia_deslastrada_MW: 4.793E-03, costo_dolar_por_MW: 1.438, potencia_atendida_MW: 8.111E-02, _atendido: 94.42 },
  { nodo: 31, carga_MW: 2.917E-02, potencia_deslastrada_MW: 6.319E-03, costo_dolar_por_MW: 1.896, potencia_atendida_MW: 2.285E-02, _atendido: 78.34 },
  { nodo: 32, carga_MW: 1.458E-02, potencia_deslastrada_MW: 1.019E-02, costo_dolar_por_MW: 1.019, potencia_atendida_MW: 4.394E-03, _atendido: 30.14 },
  { nodo: 33, carga_MW: 4.375E-02, potencia_deslastrada_MW: 2.860E-02, costo_dolar_por_MW: 2.860, potencia_atendida_MW: 1.515E-02, _atendido: 34.64 },
  { nodo: 34, carga_MW: 4.375E-02, potencia_deslastrada_MW: 1.709E-02, costo_dolar_por_MW: 2.342, potencia_atendida_MW: 3.204E-02, _atendido: 73.24 },
  { nodo: 38, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.169E-02, costo_dolar_por_MW: 2.169, potencia_atendida_MW: 7.479E-03, _atendido: 25.64 },
  { nodo: 41, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.156E-02, costo_dolar_por_MW: 2.156, potencia_atendida_MW: 7.611E-03, _atendido: 26.09 },
  { nodo: 42, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.174E-02, costo_dolar_por_MW: 2.174, potencia_atendida_MW: 7.429E-03, _atendido: 25.47 },
  { nodo: 43, carga_MW: 2.917E-02, potencia_deslastrada_MW: 1.159E-02, costo_dolar_por_MW: 2.319, potencia_atendida_MW: 1.758E-02, _atendido: 60.26 },
  { nodo: 45, carga_MW: 2.917E-02, potencia_deslastrada_MW: 6.610E-03, costo_dolar_por_MW: 1.983, potencia_atendida_MW: 2.256E-02, _atendido: 77.34 },
  { nodo: 2, carga_MW: 1.458E-02, potencia_deslastrada_MW: 1.458E-02, costo_dolar_por_MW: 1.458, potencia_atendida_MW: 1.123E-06, _atendido: 0.008 },
  { nodo: 20, carga_MW: 6.288E-02, potencia_deslastrada_MW: 3.988E-02, costo_dolar_por_MW: 7.975, potencia_atendida_MW: 2.300E-02, _atendido: 36.59 },
  { nodo: 17, carga_MW: 7.292E-02, potencia_deslastrada_MW: 6.071E-09, costo_dolar_por_MW: 1.821E-06, potencia_atendida_MW: 7.292E-02, _atendido: 99.99 },
  { nodo: 18, carga_MW: 2.000E-02, potencia_deslastrada_MW: 5.469E-08, costo_dolar_por_MW: 5.469E-06, potencia_atendida_MW: 1.999E-02, _atendido: 99.97 },
  { nodo: 19, carga_MW: 1.457E-01, potencia_deslastrada_MW: 1.092E-08, costo_dolar_por_MW: 2.185E-06, potencia_atendida_MW: 1.457E-01, _atendido: 99.99 },
  { nodo: 50, carga_MW: 1.167E-01, potencia_deslastrada_MW: 8.751E-02, costo_dolar_por_MW: 17.502, potencia_atendida_MW: 2.916E-02, _atendido: 24.99 },
  { nodo: 49, carga_MW: 4.375E-02, potencia_deslastrada_MW: 3.281E-02, costo_dolar_por_MW: 6.563, potencia_atendida_MW: 1.094E-02, _atendido: 24.99 },
  { nodo: 16, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.917E-02, costo_dolar_por_MW: 8.751, potencia_atendida_MW: 0, _atendido: 0 },
  { nodo: 21, carga_MW: 1.458E-02, potencia_deslastrada_MW: 7.290E-03, costo_dolar_por_MW: 0.729, potencia_atendida_MW: 7.290E-03, _atendido: 50 },
  { nodo: 25, carga_MW: 1.458E-02, potencia_deslastrada_MW: 1.094E-02, costo_dolar_por_MW: 2.187, potencia_atendida_MW: 3.645E-03, _atendido: 25 },
  { nodo: 26, carga_MW: 3.500E-02, potencia_deslastrada_MW: 1.750E-02, costo_dolar_por_MW: 1.750, potencia_atendida_MW: 1.750E-02, _atendido: 50 },
  { nodo: 27, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.188E-02, costo_dolar_por_MW: 4.376, potencia_atendida_MW: 7.293E-03, _atendido: 25 },
  { nodo: 28, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.188E-02, costo_dolar_por_MW: 4.376, potencia_atendida_MW: 7.293E-03, _atendido: 25 },
  { nodo: 39, carga_MW: 5.833E-02, potencia_deslastrada_MW: 5.833E-02, costo_dolar_por_MW: 17.499, potencia_atendida_MW: 0, _atendido: 0 },
  { nodo: 40, carga_MW: 1.458E-02, potencia_deslastrada_MW: 7.290E-03, costo_dolar_por_MW: 0.729, potencia_atendida_MW: 7.290E-03, _atendido: 50 },
  { nodo: 44, carga_MW: 1.488E-01, potencia_deslastrada_MW: 7.438E-02, costo_dolar_por_MW: 7.438, potencia_atendida_MW: 7.438E-02, _atendido: 50 },
  { nodo: 47, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.917E-02, costo_dolar_por_MW: 8.751, potencia_atendida_MW: 0, _atendido: 0 },
  { nodo: 48, carga_MW: 5.833E-02, potencia_deslastrada_MW: 2.917E-02, costo_dolar_por_MW: 2.917, potencia_atendida_MW: 2.917E-02, _atendido: 50 }
];



let escenario4ConGdYRd = [
  { nodo: 6, carga_MW: 1.458E-02, potencia_deslastrada_MW: 7.642E-03, costo_dolar_por_MW: 1.528, potencia_atendida_MW: 6.938E-03, _atendido: 47.58 },
  { nodo: 9, carga_MW: 5.833E-02, potencia_deslastrada_MW: 3.078E-02, costo_dolar_por_MW: 3.078, potencia_atendida_MW: 2.756E-02, _atendido: 47.23 },
  { nodo: 12, carga_MW: 2.000E-02, potencia_deslastrada_MW: 9.918E-03, costo_dolar_por_MW: 1.984, potencia_atendida_MW: 1.008E-02, _atendido: 50.41 },
  { nodo: 23, carga_MW: 1.458E-02, potencia_deslastrada_MW: 5.249E-03, costo_dolar_por_MW: 1.575, potencia_atendida_MW: 9.331E-03, _atendido: 64.00 },
  { nodo: 30, carga_MW: 8.590E-02, potencia_deslastrada_MW: 4.793E-03, costo_dolar_por_MW: 1.438, potencia_atendida_MW: 8.111E-02, _atendido: 94.42 },
  { nodo: 31, carga_MW: 2.917E-02, potencia_deslastrada_MW: 6.319E-03, costo_dolar_por_MW: 1.896, potencia_atendida_MW: 2.285E-02, _atendido: 78.34 },
  { nodo: 32, carga_MW: 1.458E-02, potencia_deslastrada_MW: 1.019E-02, costo_dolar_por_MW: 1.019, potencia_atendida_MW: 4.394E-03, _atendido: 30.14 },
  { nodo: 33, carga_MW: 4.375E-02, potencia_deslastrada_MW: 2.860E-02, costo_dolar_por_MW: 2.860, potencia_atendida_MW: 1.515E-02, _atendido: 34.64 },
  { nodo: 34, carga_MW: 4.375E-02, potencia_deslastrada_MW: 1.709E-02, costo_dolar_por_MW: 2.342, potencia_atendida_MW: 3.204E-02, _atendido: 73.24 },
  { nodo: 38, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.169E-02, costo_dolar_por_MW: 2.169, potencia_atendida_MW: 7.479E-03, _atendido: 25.64 },
  { nodo: 41, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.156E-02, costo_dolar_por_MW: 2.156, potencia_atendida_MW: 7.611E-03, _atendido: 26.09 },
  { nodo: 42, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.174E-02, costo_dolar_por_MW: 2.174, potencia_atendida_MW: 7.429E-03, _atendido: 25.47 },
  { nodo: 43, carga_MW: 2.917E-02, potencia_deslastrada_MW: 1.159E-02, costo_dolar_por_MW: 2.319, potencia_atendida_MW: 1.758E-02, _atendido: 60.26 },
  { nodo: 45, carga_MW: 2.917E-02, potencia_deslastrada_MW: 6.610E-03, costo_dolar_por_MW: 1.983, potencia_atendida_MW: 2.256E-02, _atendido: 77.34 },
  { nodo: 2, carga_MW: 1.458E-02, potencia_deslastrada_MW: 1.458E-02, costo_dolar_por_MW: 1.458, potencia_atendida_MW: 1.123E-06, _atendido: 0.008 },
  { nodo: 20, carga_MW: 6.288E-02, potencia_deslastrada_MW: 3.988E-02, costo_dolar_por_MW: 7.975, potencia_atendida_MW: 2.300E-02, _atendido: 36.59 },
  { nodo: 17, carga_MW: 7.292E-02, potencia_deslastrada_MW: 6.071E-09, costo_dolar_por_MW: 1.821E-06, potencia_atendida_MW: 7.292E-02, _atendido: 99.99 },
  { nodo: 18, carga_MW: 2.000E-02, potencia_deslastrada_MW: 5.469E-08, costo_dolar_por_MW: 5.469E-06, potencia_atendida_MW: 1.999E-02, _atendido: 99.97 },
  { nodo: 19, carga_MW: 1.457E-01, potencia_deslastrada_MW: 1.092E-08, costo_dolar_por_MW: 2.185E-06, potencia_atendida_MW: 1.457E-01, _atendido: 99.99 },
  { nodo: 50, carga_MW: 1.167E-01, potencia_deslastrada_MW: 8.751E-02, costo_dolar_por_MW: 17.502, potencia_atendida_MW: 2.916E-02, _atendido: 24.99 },
  { nodo: 49, carga_MW: 4.375E-02, potencia_deslastrada_MW: 3.281E-02, costo_dolar_por_MW: 6.563, potencia_atendida_MW: 1.094E-02, _atendido: 24.99 },
  { nodo: 16, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.917E-02, costo_dolar_por_MW: 8.751, potencia_atendida_MW: 0, _atendido: 0 },
  { nodo: 21, carga_MW: 1.458E-02, potencia_deslastrada_MW: 7.290E-03, costo_dolar_por_MW: 0.729, potencia_atendida_MW: 7.290E-03, _atendido: 50 },
  { nodo: 25, carga_MW: 1.458E-02, potencia_deslastrada_MW: 1.094E-02, costo_dolar_por_MW: 2.187, potencia_atendida_MW: 3.645E-03, _atendido: 25 },
  { nodo: 26, carga_MW: 3.500E-02, potencia_deslastrada_MW: 1.750E-02, costo_dolar_por_MW: 1.750, potencia_atendida_MW: 1.750E-02, _atendido: 50 },
  { nodo: 27, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.188E-02, costo_dolar_por_MW: 4.376, potencia_atendida_MW: 7.293E-03, _atendido: 25 },
  { nodo: 28, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.188E-02, costo_dolar_por_MW: 4.376, potencia_atendida_MW: 7.293E-03, _atendido: 25 },
  { nodo: 39, carga_MW: 5.833E-02, potencia_deslastrada_MW: 5.833E-02, costo_dolar_por_MW: 17.499, potencia_atendida_MW: 0, _atendido: 0 },
  { nodo: 40, carga_MW: 1.458E-02, potencia_deslastrada_MW: 7.290E-03, costo_dolar_por_MW: 0.729, potencia_atendida_MW: 7.290E-03, _atendido: 50 },
  { nodo: 44, carga_MW: 1.488E-01, potencia_deslastrada_MW: 7.438E-02, costo_dolar_por_MW: 7.438, potencia_atendida_MW: 7.438E-02, _atendido: 50 },
  { nodo: 47, carga_MW: 2.917E-02, potencia_deslastrada_MW: 2.917E-02, costo_dolar_por_MW: 8.751, potencia_atendida_MW: 0, _atendido: 0 },
  { nodo: 48, carga_MW: 5.833E-02, potencia_deslastrada_MW: 2.917E-02, costo_dolar_por_MW: 2.917, potencia_atendida_MW: 2.917E-02, _atendido: 50 }
];

    
 
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="57"){

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "8 - 9",
            "porcentaje": 51.8182
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 1",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 8",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 12",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 6",
            "porcentaje": 79.0909
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [],
      "tiempo_ejecucion": 343.3819259
    }
    
   
    let generadores = {
      "generators": [
        { "nodo": 1, "PG_MW": 128.9, "QG_MW": -16.1, "Q_MAX_MVAR": 200, "Q_MIN_MVAR": -140, "P_MAX_MW": 575.88, "costo_marginal_dolar_per_MW": 20.07757952 },
        { "nodo": 2, "PG_MW": 0, "QG_MW": -0.8, "Q_MAX_MVAR": 50, "Q_MIN_MVAR": -17, "P_MAX_MW": 100, "costo_marginal_dolar_per_MW": 40.01 },
        { "nodo": 3, "PG_MW": 40, "QG_MW": -1, "Q_MAX_MVAR": 60, "Q_MIN_MVAR": -10, "P_MAX_MW": 140, "costo_marginal_dolar_per_MW": 20.25 },
        { "nodo": 6, "PG_MW": 0, "QG_MW": 0.8, "Q_MAX_MVAR": 25, "Q_MIN_MVAR": -8, "P_MAX_MW": 100, "costo_marginal_dolar_per_MW": 40.01 },
        { "nodo": 8, "PG_MW": 450, "QG_MW": 62.1, "Q_MAX_MVAR": 200, "Q_MIN_MVAR": -140, "P_MAX_MW": 550, "costo_marginal_dolar_per_MW": 20.02222222 },
        { "nodo": 9, "PG_MW": 0, "QG_MW": 2.2, "Q_MAX_MVAR": 9, "Q_MIN_MVAR": -3, "P_MAX_MW": 100, "costo_marginal_dolar_per_MW": 40.01 },
        { "nodo": 12, "PG_MW": 310, "QG_MW": 128.5, "Q_MAX_MVAR": 155, "Q_MIN_MVAR": -150, "P_MAX_MW": 410, "costo_marginal_dolar_per_MW": 20.03225806 }
      ]
    };
    
    
    
    let lineas = {
      "lines": [
        { "I": 1, "J": 2, "flujo_P_I_a_J_MW": -46.0176988, "flujo_Q_I_a_J_MW": 13.70406487, "flujo_P_J_a_I_MW": 46.22372908, "flujo_Q_J_a_I_MW": -26.12754073 },
        { "I": 2, "J": 3, "flujo_P_I_a_J_MW": 38.59124135, "flujo_Q_I_a_J_MW": -11.87392576, "flujo_P_J_a_I_MW": -38.13657153, "flujo_Q_J_a_I_MW": 4.901885672 },
        { "I": 3, "J": 4, "flujo_P_I_a_J_MW": -7.022774349, "flujo_Q_I_a_J_MW": -8.531038774, "flujo_P_J_a_I_MW": 7.033136463, "flujo_Q_J_a_I_MW": 4.727782072 },
        { "I": 4, "J": 5, "flujo_P_I_a_J_MW": -14.08203759, "flujo_Q_I_a_J_MW": -1.626845504, "flujo_P_J_a_I_MW": 14.20445209, "flujo_Q_J_a_I_MW": -0.752449587 },
        { "I": 4, "J": 6, "flujo_P_I_a_J_MW": -25.23399284, "flujo_Q_I_a_J_MW": -7.081119164, "flujo_P_J_a_I_MW": 25.51629517, "flujo_Q_J_a_I_MW": 4.459714732 },
        { "I": 6, "J": 7, "flujo_P_I_a_J_MW": -13.338889, "flujo_Q_I_a_J_MW": 2.55164857, "flujo_P_J_a_I_MW": 13.37576266, "flujo_Q_J_a_I_MW": -5.263445426 },
        { "I": 6, "J": 8, "flujo_P_I_a_J_MW": -41.71187374, "flujo_Q_I_a_J_MW": -3.663744086, "flujo_P_J_a_I_MW": 42.27300295, "flujo_Q_J_a_I_MW": 1.494746427 },
        { "I": 8, "J": 9, "flujo_P_I_a_J_MW": 184.630316, "flujo_Q_I_a_J_MW": 50.29959464, "flujo_P_J_a_I_MW": -181.2749065, "flujo_Q_J_a_I_MW": -38.93123633 },
        { "I": 9, "J": 10, "flujo_P_I_a_J_MW": 36.88036693, "flujo_Q_I_a_J_MW": 2.629327524, "flujo_P_J_a_I_MW": -36.37391803, "flujo_Q_J_a_I_MW": -4.673950421 },
        { "I": 9, "J": 11, "flujo_P_I_a_J_MW": 46.95060902, "flujo_Q_I_a_J_MW": 9.373352494, "flujo_P_J_a_I_MW": -46.35840828, "flujo_Q_J_a_I_MW": -9.580830544 },
        { "I": 9, "J": 12, "flujo_P_I_a_J_MW": 20.08135817, "flujo_Q_I_a_J_MW": -3.55331135, "flujo_P_J_a_I_MW": -19.82208053, "flujo_Q_J_a_I_MW": -2.955077782 },
        { "I": 9, "J": 13, "flujo_P_I_a_J_MW": 35.33693287, "flujo_Q_I_a_J_MW": 4.873398856, "flujo_P_J_a_I_MW": -34.71830918, "flujo_Q_J_a_I_MW": -6.828085975 },
        { "I": 13, "J": 14, "flujo_P_I_a_J_MW": 17.20902117, "flujo_Q_I_a_J_MW": 10.80354916, "flujo_P_J_a_I_MW": -17.15039466, "flujo_Q_J_a_I_MW": -11.65429692 },
        { "I": 13, "J": 15, "flujo_P_I_a_J_MW": -14.14616504, "flujo_Q_I_a_J_MW": -8.467379363, "flujo_P_J_a_I_MW": 14.21776587, "flujo_Q_J_a_I_MW": 6.476650549 },
        { "I": 1, "J": 15, "flujo_P_I_a_J_MW": 51.49964204, "flujo_Q_I_a_J_MW": 9.446933895, "flujo_P_J_a_I_MW": -50.99957722, "flujo_Q_J_a_I_MW": -16.7462719 },
        { "I": 1, "J": 16, "flujo_P_I_a_J_MW": 34.02229564, "flujo_Q_I_a_J_MW": -0.131102217, "flujo_P_J_a_I_MW": -33.50329566, "flujo_Q_J_a_I_MW": -2.975762278 },
        { "I": 1, "J": 17, "flujo_P_I_a_J_MW": 48.12599577, "flujo_Q_I_a_J_MW": 4.579428453, "flujo_P_J_a_I_MW": -47.57636282, "flujo_Q_J_a_I_MW": -4.951387911 },
        { "I": 3, "J": 15, "flujo_P_I_a_J_MW": 49.23161108, "flujo_Q_I_a_J_MW": 11.39576486, "flujo_P_J_a_I_MW": -48.80936915, "flujo_Q_J_a_I_MW": -15.40804144 },
        { "I": 4, "J": 18, "flujo_P_I_a_J_MW": 14.15829714, "flujo_Q_I_a_J_MW": 2.636454474, "flujo_P_J_a_I_MW": -14.15829714, "flujo_Q_J_a_I_MW": -1.567251824 },
        { "I": 4, "J": 18, "flujo_P_I_a_J_MW": 18.12459995, "flujo_Q_I_a_J_MW": 1.343727956, "flujo_P_J_a_I_MW": -18.12459995, "flujo_Q_J_a_I_MW": -0.002628176 },
        { "I": 5, "J": 6, "flujo_P_I_a_J_MW": -27.20445098, "flujo_Q_I_a_J_MW": -3.247550616, "flujo_P_J_a_I_MW": 27.42304746, "flujo_Q_J_a_I_MW": 2.419546678 },
        { "I": 7, "J": 8, "flujo_P_I_a_J_MW": -82.01582889, "flujo_Q_I_a_J_MW": -10.81971773, "flujo_P_J_a_I_MW": 82.9195758, "flujo_Q_J_a_I_MW": 13.37425911 },
        { "I": 10, "J": 12, "flujo_P_I_a_J_MW": -2.41697292, "flujo_Q_I_a_J_MW": -7.004257626, "flujo_P_J_a_I_MW": 2.427029934, "flujo_Q_J_a_I_MW": 3.848036802 },
        { "I": 11, "J": 13, "flujo_P_I_a_J_MW": 21.53058389, "flujo_Q_I_a_J_MW": 1.036093128, "flujo_P_J_a_I_MW": -21.42291361, "flujo_Q_J_a_I_MW": -2.490975601 },
        { "I": 12, "J": 13, "flujo_P_I_a_J_MW": -2.019543006, "flujo_Q_I_a_J_MW": 21.97384841, "flujo_P_J_a_I_MW": 2.076150457, "flujo_Q_J_a_I_MW": -22.39164244 },
        { "I": 12, "J": 16, "flujo_P_I_a_J_MW": 9.513433997, "flujo_Q_I_a_J_MW": -2.023197774, "flujo_P_J_a_I_MW": -9.496705307, "flujo_Q_J_a_I_MW": -0.024236842 },
      { "I": 12, "J": 17, "flujo_P_I_a_J_MW": -5.563637244, "flujo_Q_I_a_J_MW": -1.581032962, "flujo_P_J_a_I_MW": 5.576362087, "flujo_Q_J_a_I_MW": -3.048611251 },
      { "I": 14, "J": 15, "flujo_P_I_a_J_MW": -36.03294433, "flujo_Q_I_a_J_MW": -20.81104216, "flujo_P_J_a_I_MW": 36.34224519, "flujo_Q_J_a_I_MW": 20.38118383 },
      { "I": 18, "J": 19, "flujo_P_I_a_J_MW": 5.08289709, "flujo_Q_I_a_J_MW": 2.302689599, "flujo_P_J_a_I_MW": -4.946611322, "flujo_Q_J_a_I_MW": -2.100182546 },
      { "I": 19, "J": 20, "flujo_P_I_a_J_MW": 1.646611284, "flujo_Q_I_a_J_MW": 1.500182613, "flujo_P_J_a_I_MW": -1.632236913, "flujo_Q_J_a_I_MW": -1.478138525 },
      { "I": 21, "J": 20, "flujo_P_I_a_J_MW": 0.667763127, "flujo_Q_I_a_J_MW": -0.472650857, "flujo_P_J_a_I_MW": -0.667763127, "flujo_Q_J_a_I_MW": 0.478138589 },
      { "I": 21, "J": 22, "flujo_P_I_a_J_MW": -0.667763138, "flujo_Q_I_a_J_MW": 0.472650917, "flujo_P_J_a_I_MW": 0.668241161, "flujo_Q_J_a_I_MW": -0.471891017 },
      { "I": 22, "J": 23, "flujo_P_I_a_J_MW": 2.732322019, "flujo_Q_I_a_J_MW": 2.892129779, "flujo_P_J_a_I_MW": -2.730801074, "flujo_Q_J_a_I_MW": -2.889794591 },
      { "I": 23, "J": 24, "flujo_P_I_a_J_MW": -3.569198832, "flujo_Q_I_a_J_MW": 0.789794545, "flujo_P_J_a_I_MW": 3.592159341, "flujo_Q_J_a_I_MW": -1.621126023 },
      { "I": 24, "J": 25, "flujo_P_I_a_J_MW": 7.392102716, "flujo_Q_I_a_J_MW": 1.735136012, "flujo_P_J_a_I_MW": -7.392102716, "flujo_Q_J_a_I_MW": -1.076517849 },
      { "I": 24, "J": 25, "flujo_P_I_a_J_MW": 7.103630415, "flujo_Q_I_a_J_MW": 1.667423387, "flujo_P_J_a_I_MW": -7.103630415, "flujo_Q_J_a_I_MW": -1.034507396 },
      { "I": 24, "J": 26, "flujo_P_I_a_J_MW": -18.08789268, "flujo_Q_I_a_J_MW": -1.781433341, "flujo_P_J_a_I_MW": 18.08789268, "flujo_Q_J_a_I_MW": 1.945713709 },
      { "I": 26, "J": 27, "flujo_P_I_a_J_MW": -18.08789223, "flujo_Q_I_a_J_MW": -1.945713913, "flujo_P_J_a_I_MW": 18.66096325, "flujo_Q_J_a_I_MW": 2.827895976 },
      { "I": 27, "J": 28, "flujo_P_I_a_J_MW": -27.96096285, "flujo_Q_I_a_J_MW": -3.327896149, "flujo_P_J_a_I_MW": 28.43870921, "flujo_Q_J_a_I_MW": 4.065388107 },
      { "I": 28, "J": 29, "flujo_P_I_a_J_MW": -33.038709, "flujo_Q_I_a_J_MW": -6.365388215, "flujo_P_J_a_I_MW": 33.48196527, "flujo_Q_J_a_I_MW": 6.987855753 },
      { "I": 7, "J": 29, "flujo_P_I_a_J_MW": 68.64006295, "flujo_Q_I_a_J_MW": 16.08316493, "flujo_P_J_a_I_MW": -68.64006295, "flujo_Q_J_a_I_MW": -13.21322434 },
      { "I": 25, "J": 30, "flujo_P_I_a_J_MW": 8.195733174, "flujo_Q_I_a_J_MW": 4.819646084, "flujo_P_J_a_I_MW": -8.07387254, "flujo_Q_J_a_I_MW": -4.637306468 },
      { "I": 30, "J": 31, "flujo_P_I_a_J_MW": 4.473872558, "flujo_Q_I_a_J_MW": 2.837306467, "flujo_P_J_a_I_MW": -4.378604745, "flujo_Q_J_a_I_MW": -2.692066886 },
      { "I": 31, "J": 32, "flujo_P_I_a_J_MW": -1.421395228, "flujo_Q_I_a_J_MW": -0.207933117, "flujo_P_J_a_I_MW": 1.432968048, "flujo_Q_J_a_I_MW": 0.225166803 },
      { "I": 32, "J": 33, "flujo_P_I_a_J_MW": 3.8077123, "flujo_Q_I_a_J_MW": 1.90708273, "flujo_P_J_a_I_MW": -3.799999993, "flujo_Q_J_a_I_MW": -1.9 },
      { "I": 34, "J": 32, "flujo_P_I_a_J_MW": 6.840680321, "flujo_Q_I_a_J_MW": 3.504930982, "flujo_P_J_a_I_MW": -6.840680321, "flujo_Q_J_a_I_MW": -2.932249539 },
      { "I": 34, "J": 35, "flujo_P_I_a_J_MW": -6.840680345, "flujo_Q_I_a_J_MW": -3.504930977, "flujo_P_J_a_I_MW": 6.872980672, "flujo_Q_J_a_I_MW": 3.252325162 },
      { "I": 35, "J": 36, "flujo_P_I_a_J_MW": -12.87298067, "flujo_Q_I_a_J_MW": -6.25232516, "flujo_P_J_a_I_MW": 12.96554783, "flujo_Q_J_a_I_MW": 6.214981552 },
      { "I": 36, "J": 37, "flujo_P_I_a_J_MW": -15.33352003, "flujo_Q_I_a_J_MW": -10.35545367, "flujo_P_J_a_I_MW": 15.43642347, "flujo_Q_J_a_I_MW": 10.48532491 },
      { "I": 37, "J": 38, "flujo_P_I_a_J_MW": -18.46337201, "flujo_Q_I_a_J_MW": -13.46085712, "flujo_P_J_a_I_MW": 18.80796264, "flujo_Q_J_a_I_MW": 13.79349731 },
      { "I": 37, "J": 39, "flujo_P_I_a_J_MW": 3.026948527, "flujo_Q_I_a_J_MW": 2.975532229, "flujo_P_J_a_I_MW": -3.022560866, "flujo_Q_J_a_I_MW": -2.968574391 },
      { "I": 36, "J": 40, "flujo_P_I_a_J_MW": 2.367972191, "flujo_Q_I_a_J_MW": 4.14047212, "flujo_P_J_a_I_MW": -2.360898002, "flujo_Q_J_a_I_MW": -4.129483546 },
      { "I": 22, "J": 38, "flujo_P_I_a_J_MW": -3.400563164, "flujo_Q_I_a_J_MW": -2.420238762, "flujo_P_J_a_I_MW": 3.403809408, "flujo_Q_J_a_I_MW": 2.425226481 },
      { "I": 11, "J": 41, "flujo_P_I_a_J_MW": 10.06903852, "flujo_Q_I_a_J_MW": 3.603405124, "flujo_P_J_a_I_MW": -10.06903852, "flujo_Q_J_a_I_MW": -2.796268536 },
      { "I": 41, "J": 42, "flujo_P_I_a_J_MW": 9.877823328, "flujo_Q_I_a_J_MW": 3.363809877, "flujo_P_J_a_I_MW": -9.655405859, "flujo_Q_J_a_I_MW": -2.985592733 },
      { "I": 41, "J": 43, "flujo_P_I_a_J_MW": -12.75878172, "flujo_Q_I_a_J_MW": -2.894056998, "flujo_P_J_a_I_MW": 12.75878172, "flujo_Q_J_a_I_MW": 3.589928148 },
      { "I": 38, "J": 44, "flujo_P_I_a_J_MW": -14.75328239, "flujo_Q_I_a_J_MW": 2.585882051, "flujo_P_J_a_I_MW": 14.81619183, "flujo_Q_J_a_I_MW": -2.665712463 },
      { "I": 15, "J": 45, "flujo_P_I_a_J_MW": 27.24893025, "flujo_Q_I_a_J_MW": 0.296483158, "flujo_P_J_a_I_MW": -27.24893025, "flujo_Q_J_a_I_MW": 0.426266707 },
      { "I": 14, "J": 46, "flujo_P_I_a_J_MW": 42.6833377, "flujo_Q_I_a_J_MW": 27.16534023, "flujo_P_J_a_I_MW": -42.6833377, "flujo_Q_J_a_I_MW": -25.54665279 },
      { "I": 46, "J": 47, "flujo_P_I_a_J_MW": 42.68333766, "flujo_Q_I_a_J_MW": 25.54665281, "flujo_P_J_a_I_MW": -42.17492277, "flujo_Q_J_a_I_MW": -24.39450771 },
      { "I": 47, "J": 48, "flujo_P_I_a_J_MW": 12.47492277, "flujo_Q_I_a_J_MW": 12.79450771, "flujo_P_J_a_I_MW": -12.42061391, "flujo_Q_J_a_I_MW": -12.72498043 },
      { "I": 48, "J": 49, "flujo_P_I_a_J_MW": -2.935566483, "flujo_Q_I_a_J_MW": -5.013601564, "flujo_P_J_a_I_MW": 2.960176576, "flujo_Q_J_a_I_MW": 4.538901796 },
      { "I": 49, "J": 50, "flujo_P_I_a_J_MW": 5.603097391, "flujo_Q_I_a_J_MW": 7.533274845, "flujo_P_J_a_I_MW": -5.537534103, "flujo_Q_J_a_I_MW": -7.428504547 },
      { "I": 50, "J": 51, "flujo_P_I_a_J_MW": -15.46246595, "flujo_Q_I_a_J_MW": -3.071495306, "flujo_P_J_a_I_MW": 15.79088719, "flujo_Q_J_a_I_MW": 3.59279885 },
      { "I": 10, "J": 51, "flujo_P_I_a_J_MW": 33.79088729, "flujo_Q_I_a_J_MW": 9.678210993, "flujo_P_J_a_I_MW": -33.79088729, "flujo_Q_J_a_I_MW": -8.892798861 },
      { "I": 13, "J": 49, "flujo_P_I_a_J_MW": 32.94548968, "flujo_Q_I_a_J_MW": 32.14492506, "flujo_P_J_a_I_MW": -32.94548968, "flujo_Q_J_a_I_MW": -28.75344122 },
      { "I": 29, "J": 52, "flujo_P_I_a_J_MW": 18.15809842, "flujo_Q_I_a_J_MW": 3.625370429, "flujo_P_J_a_I_MW": -17.70994976, "flujo_Q_J_a_I_MW": -3.04420677 },
      { "I": 52, "J": 53, "flujo_P_I_a_J_MW": 12.80994979, "flujo_Q_I_a_J_MW": 0.844207296, "flujo_P_J_a_I_MW": -12.68908273, "flujo_Q_J_a_I_MW": -0.688127004 },
      { "I": 53, "J": 54, "flujo_P_I_a_J_MW": -7.31091658, "flujo_Q_I_a_J_MW": -2.897955088, "flujo_P_J_a_I_MW": 7.425003521, "flujo_Q_J_a_I_MW": 3.038893162 },
      { "I": 54, "J": 55, "flujo_P_I_a_J_MW": -11.52500315, "flujo_Q_I_a_J_MW": -4.43889279, "flujo_P_J_a_I_MW": 11.77434117, "flujo_Q_J_a_I_MW": 4.764961277 },
      { "I": 11, "J": 43, "flujo_P_I_a_J_MW": 14.7587817, "flujo_Q_I_a_J_MW": 4.941336109, "flujo_P_J_a_I_MW": -14.7587817, "flujo_Q_J_a_I_MW": -4.589928133 },
      { "I": 44, "J": 45, "flujo_P_I_a_J_MW": -26.81619199, "flujo_Q_I_a_J_MW": 0.865712601, "flujo_P_J_a_I_MW": 27.24892989, "flujo_Q_J_a_I_MW": -0.426266595 },
      { "I": 40, "J": 56, "flujo_P_I_a_J_MW": 2.360897913, "flujo_Q_I_a_J_MW": 4.129483577, "flujo_P_J_a_I_MW": -2.360897913, "flujo_Q_J_a_I_MW": -3.87086821 },
      { "I": 56, "J": 41, "flujo_P_I_a_J_MW": -6.406202354, "flujo_Q_I_a_J_MW": 0.915515395, "flujo_P_J_a_I_MW": 6.64999683, "flujo_Q_J_a_I_MW": -0.673484351 },
      { "I": 56, "J": 42, "flujo_P_I_a_J_MW": -2.536336313, "flujo_Q_I_a_J_MW": 1.446174919, "flujo_P_J_a_I_MW": 2.555405885, "flujo_Q_J_a_I_MW": -1.414407256 },
      { "I": 39, "J": 57, "flujo_P_I_a_J_MW": 3.022560807, "flujo_Q_I_a_J_MW": 2.968574412, "flujo_P_J_a_I_MW": -3.022560807, "flujo_Q_J_a_I_MW": -2.729668688 },
      { "I": 57, "J": 56, "flujo_P_I_a_J_MW": -3.677439175, "flujo_Q_I_a_J_MW": 0.729668751, "flujo_P_J_a_I_MW": 3.703436614, "flujo_Q_J_a_I_MW": -0.690822003 },
      { "I": 38, "J": 49, "flujo_P_I_a_J_MW": -6.264389471, "flujo_Q_I_a_J_MW": -8.31641677, "flujo_P_J_a_I_MW": 6.382215648, "flujo_Q_J_a_I_MW": 8.181264688 },
      { "I": 38, "J": 48, "flujo_P_I_a_J_MW": -15.19410023, "flujo_Q_I_a_J_MW": -17.48818899, "flujo_P_J_a_I_MW": 15.35618037, "flujo_Q_J_a_I_MW": 17.73858203 },
      { "I": 9, "J": 55, "flujo_P_I_a_J_MW": 18.57434069, "flujo_Q_I_a_J_MW": 8.607588858, "flujo_P_J_a_I_MW": -18.57434069, "flujo_Q_J_a_I_MW": -8.164961949 }
      ]
    };
    
    
    
    let nodos = {
      "nodes": [
        { "nodo": 1, "tipo_de_nodo": 3, "P_MW": 55, "Q_MVAR": 17, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 2, "tipo_de_nodo": 2, "P_MW": 3, "Q_MVAR": 88, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 3, "tipo_de_nodo": 2, "P_MW": 41, "Q_MVAR": 21, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 4, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 5, "tipo_de_nodo": 1, "P_MW": 13, "Q_MVAR": 4, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 6, "tipo_de_nodo": 2, "P_MW": 75, "Q_MVAR": 2, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 7, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 8, "tipo_de_nodo": 2, "P_MW": 150, "Q_MVAR": 22, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 9, "tipo_de_nodo": 2, "P_MW": 121, "Q_MVAR": 26, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 10, "tipo_de_nodo": 1, "P_MW": 5, "Q_MVAR": 2, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 11, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 12, "tipo_de_nodo": 2, "P_MW": 377, "Q_MVAR": 24, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 13, "tipo_de_nodo": 1, "P_MW": 18, "Q_MVAR": 2.3, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 14, "tipo_de_nodo": 1, "P_MW": 10.5, "Q_MVAR": 5.3, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 15, "tipo_de_nodo": 1, "P_MW": 22, "Q_MVAR": 5, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 16, "tipo_de_nodo": 1, "P_MW": 43, "Q_MVAR": 3, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 17, "tipo_de_nodo": 1, "P_MW": 42, "Q_MVAR": 8, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 18, "tipo_de_nodo": 1, "P_MW": 27.2, "Q_MVAR": 9.8, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 19, "tipo_de_nodo": 1, "P_MW": 3.3, "Q_MVAR": 0.6, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 20, "tipo_de_nodo": 1, "P_MW": 2.3, "Q_MVAR": 1, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 21, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 22, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 23, "tipo_de_nodo": 1, "P_MW": 6.3, "Q_MVAR": 2.1, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 24, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 25, "tipo_de_nodo": 1, "P_MW": 6.3, "Q_MVAR": 3.2, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 26, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 27, "tipo_de_nodo": 1, "P_MW": 9.3, "Q_MVAR": 0.5, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 28, "tipo_de_nodo": 1, "P_MW": 4.6, "Q_MVAR": 2.3, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 29, "tipo_de_nodo": 1, "P_MW": 17, "Q_MVAR": 2.6, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 30, "tipo_de_nodo": 1, "P_MW": 3.6, "Q_MVAR": 1.8, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 31, "tipo_de_nodo": 1, "P_MW": 5.8, "Q_MVAR": 2.9, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 32, "tipo_de_nodo": 1, "P_MW": 1.6, "Q_MVAR": 0.8, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 33, "tipo_de_nodo": 1, "P_MW": 3.8, "Q_MVAR": 1.9, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 34, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 35, "tipo_de_nodo": 1, "P_MW": 6, "Q_MVAR": 3, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 36, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 37, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 38, "tipo_de_nodo": 1, "P_MW": 14, "Q_MVAR": 7, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 39, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 40, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 41, "tipo_de_nodo": 1, "P_MW": 6.3, "Q_MVAR": 3, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 42, "tipo_de_nodo": 1, "P_MW": 7.1, "Q_MVAR": 4.4, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 43, "tipo_de_nodo": 1, "P_MW": 2, "Q_MVAR": 1, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 44, "tipo_de_nodo": 1, "P_MW": 12, "Q_MVAR": 1.8, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 45, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 46, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 47, "tipo_de_nodo": 1, "P_MW": 29.7, "Q_MVAR": 11.6, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 48, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 49, "tipo_de_nodo": 1, "P_MW": 18, "Q_MVAR": 8.5, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 50, "tipo_de_nodo": 1, "P_MW": 21, "Q_MVAR": 10.5, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 51, "tipo_de_nodo": 1, "P_MW": 18, "Q_MVAR": 5.3, "V_max": 1.06, "V_min": 0.94 },
        { "nodo": 52, "tipo_de_nodo": 1, "P_MW": 4.9, "Q_MVAR": 2.2, "V_max": 1.06, "V_min": 0.94 },
      { "nodo": 53, "tipo_de_nodo": 1, "P_MW": 20, "Q_MVAR": 10, "V_max": 1.06, "V_min": 0.94 },
      { "nodo": 54, "tipo_de_nodo": 1, "P_MW": 4.1, "Q_MVAR": 1.4, "V_max": 1.06, "V_min": 0.94 },
      { "nodo": 55, "tipo_de_nodo": 1, "P_MW": 6.8, "Q_MVAR": 3.4, "V_max": 1.06, "V_min": 0.94 },
      { "nodo": 56, "tipo_de_nodo": 1, "P_MW": 7.6, "Q_MVAR": 2.2, "V_max": 1.06, "V_min": 0.94 },
      { "nodo": 57, "tipo_de_nodo": 1, "P_MW": 6.7, "Q_MVAR": 2, "V_max": 1.06, "V_min": 0.94 }
      ]
    };
    
    
    
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 1206.802929,
        "potencia_atendida_MW": 43.99707085,
        "potencia_generada_adicional_MW": 1206.802929 - 43.99707085,
        "costo_operacion_dolar_per_MWH": 272890.692,
        "costo_deslastre_dolar_per_MWH": 271530.5303,
        "U1": 0.035175145,
        "U2": 0.004984273,
        "U": 0.020079709,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 983.5586879,
        "potencia_atendida_MW": 267.2413121,
        "potencia_generada_adicional_MW": 983.5586879 - 267.2413121,
        "costo_operacion_dolar_per_MWH": 217231.5179,
        "costo_deslastre_dolar_per_MWH": 204557.6068,
        "U1": 0.21365631,
        "U2": 0.058342874,
        "U": 0.135999592,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 1072.290213,
        "potencia_atendida_MW": 178.5097873,
        "potencia_generada_adicional_MW": 1072.290213 - 178.5097873,
        "costo_operacion_dolar_per_MWH": 242662.2251,
        "costo_deslastre_dolar_per_MWH": 231177.0634,
        "U1": 0.142716491,
        "U2": 0.047329829,
        "U": 0.09502316,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 851.6500362,
        "potencia_atendida_MW": 399.1499638,
        "potencia_generada_adicional_MW": 851.6500362 - 399.1499638,
        "costo_operacion_dolar_per_MWH": 187783.9225,
        "costo_deslastre_dolar_per_MWH": 164985.0115,
        "U1": 0.319115737,
        "U2": 0.121410346,
        "U": 0.220263041,
        "resiliencia": "POBRE"
      }
    ];
    
  
    
    
    let escenario1ConSinRdNiGd = [
      { "nodo": 1, "carga_MW": 55, "potencia_deslastrada_MW": 54.99999986, "costo_dolar_por_MW": 10999.99997, "potencia_atendida_MW": 1.41123E-07, "_atendido": 2.56587E-07 },
      { "nodo": 5, "carga_MW": 13, "potencia_deslastrada_MW": 12.99999986, "costo_dolar_por_MW": 2599.999973, "potencia_atendida_MW": 1.36334E-07, "_atendido": 1.04873E-06 },
      { "nodo": 6, "carga_MW": 75, "potencia_deslastrada_MW": 16.86787675, "costo_dolar_por_MW": 5060.363026, "potencia_atendida_MW": 58.13212325, "_atendido": 77.50949766 },
      { "nodo": 8, "carga_MW": 150, "potencia_deslastrada_MW": 149.9999998, "costo_dolar_por_MW": 29999.99997, "potencia_atendida_MW": 1.50764E-07, "_atendido": 1.00509E-07 },
      { "nodo": 9, "carga_MW": 121, "potencia_deslastrada_MW": 120.9999999, "costo_dolar_por_MW": 12099.99999, "potencia_atendida_MW": 7.10774E-08, "_atendido": 5.87417E-08 },
      { "nodo": 10, "carga_MW": 5, "potencia_deslastrada_MW": 4.999999929, "costo_dolar_por_MW": 499.9999929, "potencia_atendida_MW": 7.11416E-08, "_atendido": 1.42283E-06 },
      { "nodo": 12, "carga_MW": 377, "potencia_deslastrada_MW": 300.8032196, "costo_dolar_por_MW": 90240.96588, "potencia_atendida_MW": 76.19678041, "_atendido": 20.21134759 },
      { "nodo": 13, "carga_MW": 18, "potencia_deslastrada_MW": 17.99999993, "costo_dolar_por_MW": 1799.999993, "potencia_atendida_MW": 6.91458E-08, "_atendido": 3.84144E-07 },
      { "nodo": 14, "carga_MW": 10.5, "potencia_deslastrada_MW": 10.49999986, "costo_dolar_por_MW": 2099.999972, "potencia_atendida_MW": 1.41118E-07, "_atendido": 1.34398E-06 },
      { "nodo": 15, "carga_MW": 22, "potencia_deslastrada_MW": 21.99999993, "costo_dolar_por_MW": 2199.999993, "potencia_atendida_MW": 6.92214E-08, "_atendido": 3.14643E-07 },
      { "nodo": 16, "carga_MW": 43, "potencia_deslastrada_MW": 28.50977489, "costo_dolar_por_MW": 8552.932466, "potencia_atendida_MW": 14.49022511, "_atendido": 33.69819794 },
      { "nodo": 17, "carga_MW": 42, "potencia_deslastrada_MW": 41.99999986, "costo_dolar_por_MW": 8399.999972, "potencia_atendida_MW": 1.40244E-07, "_atendido": 3.33914E-07 },
      { "nodo": 18, "carga_MW": 27.2, "potencia_deslastrada_MW": 27.19999986, "costo_dolar_por_MW": 5439.999973, "potencia_atendida_MW": 1.37191E-07, "_atendido": 5.04378E-07 },
      { "nodo": 19, "carga_MW": 3.3, "potencia_deslastrada_MW": 3.299999863, "costo_dolar_por_MW": 659.9999726, "potencia_atendida_MW": 1.37117E-07, "_atendido": 4.15507E-06 },
      { "nodo": 20, "carga_MW": 2.3, "potencia_deslastrada_MW": 1.460674716, "costo_dolar_por_MW": 438.2024149, "potencia_atendida_MW": 0.839325284, "_atendido": 36.49240363 },
      { "nodo": 23, "carga_MW": 6.3, "potencia_deslastrada_MW": 1.75505E-06, "costo_dolar_por_MW": 0.000526516, "potencia_atendida_MW": 6.299998245, "_atendido": 99.99997214 },
      { "nodo": 25, "carga_MW": 6.3, "potencia_deslastrada_MW": 6.299999927, "costo_dolar_por_MW": 629.9999927, "potencia_atendida_MW": 7.29473E-08, "_atendido": 1.15789E-06 },
      { "nodo": 27, "carga_MW": 9.3, "potencia_deslastrada_MW": 9.299999927, "costo_dolar_por_MW": 929.9999927, "potencia_atendida_MW": 7.30999E-08, "_atendido": 7.8602E-07 },
      { "nodo": 28, "carga_MW": 4.6, "potencia_deslastrada_MW": 4.599999927, "costo_dolar_por_MW": 459.9999927, "potencia_atendida_MW": 7.26364E-08, "_atendido": 1.57905E-06 },
      { "nodo": 29, "carga_MW": 17, "potencia_deslastrada_MW": 16.99999993, "costo_dolar_por_MW": 1699.999993, "potencia_atendida_MW": 7.21348E-08, "_atendido": 4.24322E-07 },
      { "nodo": 30, "carga_MW": 3.6, "potencia_deslastrada_MW": 3.599999838, "costo_dolar_por_MW": 719.9999676, "potencia_atendida_MW": 1.61869E-07, "_atendido": 4.49635E-06 },
      { "nodo": 31, "carga_MW": 5.8, "potencia_deslastrada_MW": 5.799999925, "costo_dolar_por_MW": 579.9999925, "potencia_atendida_MW": 7.46999E-08, "_atendido": 1.28793E-06 },
      { "nodo": 32, "carga_MW": 1.6, "potencia_deslastrada_MW": 1.59999984, "costo_dolar_por_MW": 319.999968, "potencia_atendida_MW": 1.59832E-07, "_atendido": 9.98948E-06 },
      { "nodo": 33, "carga_MW": 3.8, "potencia_deslastrada_MW": 3.799999927, "costo_dolar_por_MW": 379.9999927, "potencia_atendida_MW": 7.33558E-08, "_atendido": 1.93042E-06 },
      { "nodo": 35, "carga_MW": 6, "potencia_deslastrada_MW": 5.999999927, "costo_dolar_por_MW": 599.9999927, "potencia_atendida_MW": 7.30274E-08, "_atendido": 1.21712E-06 },
      { "nodo": 38, "carga_MW": 14, "potencia_deslastrada_MW": 13.99999993, "costo_dolar_por_MW": 1399.999993, "potencia_atendida_MW": 7.0153E-08, "_atendido": 5.01093E-07 },
      { "nodo": 41, "carga_MW": 6.3, "potencia_deslastrada_MW": 6.299999931, "costo_dolar_por_MW": 629.9999931, "potencia_atendida_MW": 6.94777E-08, "_atendido": 1.10282E-06 },
      { "nodo": 42, "carga_MW": 7.1, "potencia_deslastrada_MW": 2.217120987, "costo_dolar_por_MW": 665.1362962, "potencia_atendida_MW": 4.882879013, "_atendido": 68.77294384 },
      { "nodo": 43, "carga_MW": 2, "potencia_deslastrada_MW": 1.999999854, "costo_dolar_por_MW": 399.9999709, "potencia_atendida_MW": 1.4552E-07, "_atendido": 7.27602E-06 },
      { "nodo": 44, "carga_MW": 12, "potencia_deslastrada_MW": 11.99999985, "costo_dolar_por_MW": 2399.999971, "potencia_atendida_MW": 1.46689E-07, "_atendido": 1.22241E-06 },
    { "nodo": 47, "carga_MW": 29.7, "potencia_deslastrada_MW": 6.1037E-06, "costo_dolar_por_MW": 0.00183111, "potencia_atendida_MW": 29.6999939, "_atendido": 99.99997945 },
    { "nodo": 49, "carga_MW": 18, "potencia_deslastrada_MW": 17.99999986, "costo_dolar_por_MW": 3599.999972, "potencia_atendida_MW": 1.41688E-07, "_atendido": 7.87156E-07 },
    { "nodo": 50, "carga_MW": 21, "potencia_deslastrada_MW": 1.37243E-05, "costo_dolar_por_MW": 0.004117296, "potencia_atendida_MW": 20.99998628, "_atendido": 99.99993465 },
    { "nodo": 51, "carga_MW": 18, "potencia_deslastrada_MW": 17.99999993, "costo_dolar_por_MW": 1799.999993, "potencia_atendida_MW": 7.12459E-08, "_atendido": 3.95811E-07 },
    { "nodo": 52, "carga_MW": 4.9, "potencia_deslastrada_MW": 1.15092E-06, "costo_dolar_por_MW": 0.000345276, "potencia_atendida_MW": 4.899998849, "_atendido": 99.99997651 },
    { "nodo": 53, "carga_MW": 20, "potencia_deslastrada_MW": 19.99999984, "costo_dolar_por_MW": 3999.999969, "potencia_atendida_MW": 1.55773E-07, "_atendido": 7.78863E-07 },
    { "nodo": 54, "carga_MW": 4.1, "potencia_deslastrada_MW": 4.099999847, "costo_dolar_por_MW": 819.9999694, "potencia_atendida_MW": 1.53224E-07, "_atendido": 3.73717E-06 },
    { "nodo": 55, "carga_MW": 6.8, "potencia_deslastrada_MW": 1.41398E-06, "costo_dolar_por_MW": 0.000424194, "potencia_atendida_MW": 6.799998586, "_atendido": 99.99997921 },
    { "nodo": 56, "carga_MW": 7.6, "potencia_deslastrada_MW": 7.599999927, "costo_dolar_por_MW": 759.9999927, "potencia_atendida_MW": 7.25324E-08, "_atendido": 9.54374E-07 },
    { "nodo": 57, "carga_MW": 6.7, "potencia_deslastrada_MW": 6.699999927, "costo_dolar_por_MW": 669.9999927, "potencia_atendida_MW": 7.28729E-08, "_atendido": 1.08766E-06 },
    { "nodo": 2, "carga_MW": 3, "potencia_deslastrada_MW": 8.70938E-09, "costo_dolar_por_MW": 1.74188E-06, "potencia_atendida_MW": 2.999999991, "_atendido": 99.99999971 },
    { "nodo": 3, "carga_MW": 41, "potencia_deslastrada_MW": 8.71028E-09, "costo_dolar_por_MW": 1.74206E-06, "potencia_atendida_MW": 40.99999999, "_atendido": 99.99999998 }
    ];


let escenario2ConRdSinGd = [
  { "nodo": 1, "carga_MW": 55, "potencia_deslastrada_MW": 54.99999994, "costo_dolar_por_MW": 10999.99999, "potencia_atendida_MW": 6.37841E-08, "_atendido": 1.15971E-07 },
  { "nodo": 5, "carga_MW": 13, "potencia_deslastrada_MW": 12.99999994, "costo_dolar_por_MW": 2599.999987, "potencia_atendida_MW": 6.362E-08, "_atendido": 4.89384E-07 },
  { "nodo": 6, "carga_MW": 75, "potencia_deslastrada_MW": 37.40867161, "costo_dolar_por_MW": 11222.60148, "potencia_atendida_MW": 37.59132839, "_atendido": 50.12177118 },
  { "nodo": 8, "carga_MW": 150, "potencia_deslastrada_MW": 149.9999999, "costo_dolar_por_MW": 29999.99999, "potencia_atendida_MW": 6.69103E-08, "_atendido": 4.46068E-08 },
  { "nodo": 9, "carga_MW": 121, "potencia_deslastrada_MW": 121, "costo_dolar_por_MW": 12100, "potencia_atendida_MW": 3.22646E-08, "_atendido": 2.6665E-08 },
  { "nodo": 10, "carga_MW": 5, "potencia_deslastrada_MW": 4.999999968, "costo_dolar_por_MW": 499.9999968, "potencia_atendida_MW": 3.21647E-08, "_atendido": 6.43294E-07 },
  { "nodo": 12, "carga_MW": 377, "potencia_deslastrada_MW": 304.1944763, "costo_dolar_por_MW": 91258.34288, "potencia_atendida_MW": 72.80552374, "_atendido": 19.31181001 },
  { "nodo": 13, "carga_MW": 18, "potencia_deslastrada_MW": 17.99999997, "costo_dolar_por_MW": 1799.999997, "potencia_atendida_MW": 3.19193E-08, "_atendido": 1.77329E-07 },
  { "nodo": 14, "carga_MW": 10.5, "potencia_deslastrada_MW": 10.49999994, "costo_dolar_por_MW": 2099.999987, "potencia_atendida_MW": 6.38992E-08, "_atendido": 6.08564E-07 },
  { "nodo": 15, "carga_MW": 22, "potencia_deslastrada_MW": 21.99999997, "costo_dolar_por_MW": 2199.999997, "potencia_atendida_MW": 3.18784E-08, "_atendido": 1.44902E-07 },
  { "nodo": 16, "carga_MW": 43, "potencia_deslastrada_MW": 42.12534923, "costo_dolar_por_MW": 12637.60477, "potencia_atendida_MW": 0.874650773, "_atendido": 2.034071564 },
  { "nodo": 17, "carga_MW": 42, "potencia_deslastrada_MW": 41.99999994, "costo_dolar_por_MW": 8399.999987, "potencia_atendida_MW": 6.37216E-08, "_atendido": 1.51718E-07 },
  { "nodo": 18, "carga_MW": 27.2, "potencia_deslastrada_MW": 27.19999994, "costo_dolar_por_MW": 5439.999987, "potencia_atendida_MW": 6.36248E-08, "_atendido": 2.33915E-07 },
  { "nodo": 19, "carga_MW": 3.3, "potencia_deslastrada_MW": 3.299999936, "costo_dolar_por_MW": 659.9999873, "potencia_atendida_MW": 6.37314E-08, "_atendido": 1.93126E-06 },
  { "nodo": 20, "carga_MW": 2.3, "potencia_deslastrada_MW": 2.292131987, "costo_dolar_por_MW": 687.639596, "potencia_atendida_MW": 0.007868013, "_atendido": 0.342087534 },
  { "nodo": 23, "carga_MW": 6.3, "potencia_deslastrada_MW": 3.537244461, "costo_dolar_por_MW": 1061.173338, "potencia_atendida_MW": 2.762755539, "_atendido": 43.85326253 },
  { "nodo": 25, "carga_MW": 6.3, "potencia_deslastrada_MW": 6.299999968, "costo_dolar_por_MW": 629.9999968, "potencia_atendida_MW": 3.20768E-08, "_atendido": 5.09155E-07 },
  { "nodo": 27, "carga_MW": 9.3, "potencia_deslastrada_MW": 9.299999968, "costo_dolar_por_MW": 929.9999968, "potencia_atendida_MW": 3.23981E-08, "_atendido": 3.48367E-07 },
  { "nodo": 28, "carga_MW": 4.6, "potencia_deslastrada_MW": 4.599999967, "costo_dolar_por_MW": 459.9999967, "potencia_atendida_MW": 3.25261E-08, "_atendido": 7.0709E-07 },
  { "nodo": 29, "carga_MW": 17, "potencia_deslastrada_MW": 16.99999997, "costo_dolar_por_MW": 1699.999997, "potencia_atendida_MW": 3.26154E-08, "_atendido": 1.91855E-07 },
  { "nodo": 30, "carga_MW": 3.6, "potencia_deslastrada_MW": 3.599999935, "costo_dolar_por_MW": 719.9999871, "potencia_atendida_MW": 6.45879E-08, "_atendido": 1.79411E-06 },
  { "nodo": 31, "carga_MW": 5.8, "potencia_deslastrada_MW": 5.799999968, "costo_dolar_por_MW": 579.9999968, "potencia_atendida_MW": 3.19863E-08, "_atendido": 5.51489E-07 },
  { "nodo": 32, "carga_MW": 1.6, "potencia_deslastrada_MW": 1.599999936, "costo_dolar_por_MW": 319.9999872, "potencia_atendida_MW": 6.39568E-08, "_atendido": 3.9973E-06 },
  { "nodo": 33, "carga_MW": 3.8, "potencia_deslastrada_MW": 3.799999968, "costo_dolar_por_MW": 379.9999968, "potencia_atendida_MW": 3.18931E-08, "_atendido": 8.39293E-07 },
  { "nodo": 35, "carga_MW": 6, "potencia_deslastrada_MW": 5.999999968, "costo_dolar_por_MW": 599.9999968, "potencia_atendida_MW": 3.18805E-08, "_atendido": 5.31342E-07 },
  { "nodo": 38, "carga_MW": 14, "potencia_deslastrada_MW": 13.99999997, "costo_dolar_por_MW": 1399.999997, "potencia_atendida_MW": 3.183E-08, "_atendido": 2.27357E-07 },
  { "nodo": 41, "carga_MW": 6.3, "potencia_deslastrada_MW": 6.299999968, "costo_dolar_por_MW": 629.9999968, "potencia_atendida_MW": 3.19935E-08, "_atendido": 5.07833E-07 },
  { "nodo": 42, "carga_MW": 7.1, "potencia_deslastrada_MW": 6.056811873, "costo_dolar_por_MW": 1817.043562, "potencia_atendida_MW": 1.043188127, "_atendido": 14.69279052 },
  { "nodo": 43, "carga_MW": 2, "potencia_deslastrada_MW": 1.999999935, "costo_dolar_por_MW": 399.9999871, "potencia_atendida_MW": 6.46396E-08, "_atendido": 3.23198E-06 },
  { "nodo": 44, "carga_MW": 12, "potencia_deslastrada_MW": 11.99999994, "costo_dolar_por_MW": 2399.999987, "potencia_atendida_MW": 6.37024E-08, "_atendido": 5.30853E-07 },
  { "nodo": 47, "carga_MW": 29.7, "potencia_deslastrada_MW": 26.02418462, "costo_dolar_por_MW": 7807.255385, "potencia_atendida_MW": 3.675815385, "_atendido": 12.37648278 },
  { "nodo": 49, "carga_MW": 18, "potencia_deslastrada_MW": 17.99999994, "costo_dolar_por_MW": 3599.999987, "potencia_atendida_MW": 6.38904E-08, "_atendido": 3.54946E-07 },
  { "nodo": 50, "carga_MW": 21, "potencia_deslastrada_MW": 16.95133014, "costo_dolar_por_MW": 5085.399041, "potencia_atendida_MW": 4.048669864, "_atendido": 19.2793803 },
  { "nodo": 51, "carga_MW": 18, "potencia_deslastrada_MW": 17.99999997, "costo_dolar_por_MW": 1799.999997, "potencia_atendida_MW": 3.21752E-08, "_atendido": 1.78751E-07 },
  { "nodo": 52, "carga_MW": 4.9, "potencia_deslastrada_MW": 5.21861E-06, "costo_dolar_por_MW": 0.001565582, "potencia_atendida_MW": 4.899994781, "_atendido": 99.9998935 },
  { "nodo": 53, "carga_MW": 20, "potencia_deslastrada_MW": 19.99999994, "costo_dolar_por_MW": 3999.999987, "potencia_atendida_MW": 6.45515E-08, "_atendido": 3.22757E-07 },
  { "nodo": 54, "carga_MW": 4.1, "potencia_deslastrada_MW": 4.099999935, "costo_dolar_por_MW": 819.999987, "potencia_atendida_MW": 6.49015E-08, "_atendido": 1.58296E-06 },
  { "nodo": 55, "carga_MW": 6.8, "potencia_deslastrada_MW": 2.54306E-06, "costo_dolar_por_MW": 0.000762919, "potencia_atendida_MW": 6.799997457, "_atendido": 99.9999626 },
  { "nodo": 56, "carga_MW": 7.6, "potencia_deslastrada_MW": 7.599999968, "costo_dolar_por_MW": 759.9999968, "potencia_atendida_MW": 3.19355E-08, "_atendido": 4.20204E-07 },
  { "nodo": 57, "carga_MW": 6.7, "potencia_deslastrada_MW": 6.699999968, "costo_dolar_por_MW": 669.9999968, "potencia_atendida_MW": 3.19168E-08, "_atendido": 4.7637E-07 },
  { "nodo": 2, "carga_MW": 3, "potencia_deslastrada_MW": 3.07233E-06, "costo_dolar_por_MW": 0.000614465, "potencia_atendida_MW": 2.999996928, "_atendido": 99.99989759 },
  { "nodo": 3, "carga_MW": 41, "potencia_deslastrada_MW": 3.07247E-06, "costo_dolar_por_MW": 0.000614495, "potencia_atendida_MW": 40.99999693, "_atendido": 99.99999251 }
];

 


let escenario3ConGdSinRd = [
  { nodo: 1, carga_MW: 55, potencia_deslastrada_MW: 54.9999998, costo_dolar_por_MW: 10999.99996, potencia_atendida_MW: 2.04335E-07, _atendido: 3.71519E-07 },
  { nodo: 5, carga_MW: 13, potencia_deslastrada_MW: 12.99999978, costo_dolar_por_MW: 2599.999957, potencia_atendida_MW: 2.1725E-07, _atendido: 1.67115E-06 },
  { nodo: 6, carga_MW: 75, potencia_deslastrada_MW: 1.84168E-06, costo_dolar_por_MW: 0.000552503, potencia_atendida_MW: 74.99999816, _atendido: 99.99999754 },
  { nodo: 8, carga_MW: 150, potencia_deslastrada_MW: 149.9999998, costo_dolar_por_MW: 29999.99995, potencia_atendida_MW: 2.43279E-07, _atendido: 1.62186E-07 },
  { nodo: 9, carga_MW: 121, potencia_deslastrada_MW: 120.9999999, costo_dolar_por_MW: 12099.99999, potencia_atendida_MW: 1.05453E-07, _atendido: 8.71516E-08 },
  { nodo: 10, carga_MW: 5, potencia_deslastrada_MW: 4.999999895, costo_dolar_por_MW: 499.9999895, potencia_atendida_MW: 1.0525E-07, _atendido: 2.105E-06 },
  { nodo: 12, carga_MW: 377, potencia_deslastrada_MW: 194.2416777, costo_dolar_por_MW: 58272.50331, potencia_atendida_MW: 182.7583223, _atendido: 48.47700857 },
  { nodo: 13, carga_MW: 18, potencia_deslastrada_MW: 17.9999999, costo_dolar_por_MW: 1799.99999, potencia_atendida_MW: 1.00222E-07, _atendido: 5.5679E-07 },
  { nodo: 14, carga_MW: 10.5, potencia_deslastrada_MW: 10.49999979, costo_dolar_por_MW: 2099.999959, potencia_atendida_MW: 2.07486E-07, _atendido: 1.97606E-06 },
  { nodo: 15, carga_MW: 22, potencia_deslastrada_MW: 21.9999999, costo_dolar_por_MW: 2199.99999, potencia_atendida_MW: 9.99982E-08, _atendido: 4.54537E-07 },
  { nodo: 16, carga_MW: 43, potencia_deslastrada_MW: 23.70832455, costo_dolar_por_MW: 7112.497364, potencia_atendida_MW: 19.29167545, _atendido: 44.86436152 },
  { nodo: 17, carga_MW: 42, potencia_deslastrada_MW: 41.9999998, costo_dolar_por_MW: 8399.99996, potencia_atendida_MW: 2.01948E-07, _atendido: 4.80828E-07 },
  { nodo: 18, carga_MW: 27.2, potencia_deslastrada_MW: 27.19999978, costo_dolar_por_MW: 5439.999956, potencia_atendida_MW: 2.18195E-07, _atendido: 8.02187E-07 },
  { nodo: 19, carga_MW: 3.3, potencia_deslastrada_MW: 3.299999791, costo_dolar_por_MW: 659.9999583, potencia_atendida_MW: 2.08593E-07, _atendido: 6.321E-06 },
  { nodo: 20, carga_MW: 2.3, potencia_deslastrada_MW: 5.30526E-06, costo_dolar_por_MW: 0.001591578, potencia_atendida_MW: 2.299994695, _atendido: 99.99976934 },
  { nodo: 23, carga_MW: 6.3, potencia_deslastrada_MW: 1.64411E-06, costo_dolar_por_MW: 0.000493232, potencia_atendida_MW: 6.299998356, _atendido: 99.9999739 },
  { nodo: 25, carga_MW: 6.3, potencia_deslastrada_MW: 6.299999892, costo_dolar_por_MW: 629.9999892, potencia_atendida_MW: 1.08255E-07, _atendido: 1.71833E-06 },
  { nodo: 27, carga_MW: 9.3, potencia_deslastrada_MW: 9.29999989, costo_dolar_por_MW: 929.999989, potencia_atendida_MW: 1.09797E-07, _atendido: 1.18061E-06 },
  { nodo: 28, carga_MW: 4.6, potencia_deslastrada_MW: 4.59999989, costo_dolar_por_MW: 459.999989, potencia_atendida_MW: 1.09612E-07, _atendido: 2.38287E-06 },
  { nodo: 29, carga_MW: 17, potencia_deslastrada_MW: 16.99999989, costo_dolar_por_MW: 1699.999989, potencia_atendida_MW: 1.09215E-07, _atendido: 6.42444E-07 },
  { nodo: 30, carga_MW: 3.6, potencia_deslastrada_MW: 3.599999749, costo_dolar_por_MW: 719.9999499, potencia_atendida_MW: 2.50607E-07, _atendido: 6.96131E-06 },
  { nodo: 31, carga_MW: 5.8, potencia_deslastrada_MW: 5.79999989, costo_dolar_por_MW: 579.999989, potencia_atendida_MW: 1.09824E-07, _atendido: 1.89352E-06 },
  { nodo: 32, carga_MW: 1.6, potencia_deslastrada_MW: 1.599999762, costo_dolar_por_MW: 319.9999523, potencia_atendida_MW: 2.3849E-07, _atendido: 1.49056E-05 },
  { nodo: 33, carga_MW: 3.8, potencia_deslastrada_MW: 3.799999893, costo_dolar_por_MW: 379.9999893, potencia_atendida_MW: 1.06849E-07, _atendido: 2.81183E-06 },
  { nodo: 35, carga_MW: 6, potencia_deslastrada_MW: 5.999999894, costo_dolar_por_MW: 599.9999894, potencia_atendida_MW: 1.06148E-07, _atendido: 1.76913E-06 },
  { nodo: 38, carga_MW: 14, potencia_deslastrada_MW: 13.9999999, costo_dolar_por_MW: 1399.99999, potencia_atendida_MW: 1.0199E-07, _atendido: 7.28502E-07 },
  { nodo: 41, carga_MW: 6.3, potencia_deslastrada_MW: 6.299999899, costo_dolar_por_MW: 629.9999899, potencia_atendida_MW: 1.01021E-07, _atendido: 1.60351E-06 },
  { nodo: 42, carga_MW: 7.1, potencia_deslastrada_MW: 2.04662E-05, costo_dolar_por_MW: 0.006139859, potencia_atendida_MW: 7.099979534, _atendido: 99.99971174 },
  { nodo: 43, carga_MW: 2, potencia_deslastrada_MW: 1.999999781, costo_dolar_por_MW: 399.9999562, potencia_atendida_MW: 2.18911E-07, _atendido: 1.09456E-05 },
  { nodo: 44, carga_MW: 12, potencia_deslastrada_MW: 11.99999978, costo_dolar_por_MW: 2399.999956, potencia_atendida_MW: 2.17598E-07, _atendido: 1.81332E-06 },
  { nodo: 47, carga_MW: 29.7, potencia_deslastrada_MW: 3.87899E-06, costo_dolar_por_MW: 0.001163696, potencia_atendida_MW: 29.69999612, _atendido: 99.99998694 },
  { nodo: 49, carga_MW: 18, potencia_deslastrada_MW: 17.99999979, costo_dolar_por_MW: 3599.999958, potencia_atendida_MW: 2.08846E-07, _atendido: 1.16026E-06 },
  { nodo: 50, carga_MW: 21, potencia_deslastrada_MW: 3.56919E-06, costo_dolar_por_MW: 0.001070756, potencia_atendida_MW: 20.99999643, _atendido: 99.999983 },
  { nodo: 51, carga_MW: 18, potencia_deslastrada_MW: 17.99999989, costo_dolar_por_MW: 1799.999989, potencia_atendida_MW: 1.05433E-07, _atendido: 5.85736E-07 },
  { nodo: 52, carga_MW: 4.9, potencia_deslastrada_MW: 8.96226E-07, costo_dolar_por_MW: 0.000268868, potencia_atendida_MW: 4.899999104, _atendido: 99.99998171 },
  { nodo: 53, carga_MW: 20, potencia_deslastrada_MW: 19.99999975, costo_dolar_por_MW: 3999.99995, potencia_atendida_MW: 2.4876E-07, _atendido: 1.2438E-06 },
  { nodo: 54, carga_MW: 4.1, potencia_deslastrada_MW: 4.099999759, costo_dolar_por_MW: 819.9999519, potencia_atendida_MW: 2.40518E-07, _atendido: 5.86629E-06 },
  { nodo: 55, carga_MW: 6.8, potencia_deslastrada_MW: 1.17157E-06, costo_dolar_por_MW: 0.000351472, potencia_atendida_MW: 6.799998828, _atendido: 99.99998277 },
  { nodo: 56, carga_MW: 7.6, potencia_deslastrada_MW: 7.599999894, costo_dolar_por_MW: 759.9999894, potencia_atendida_MW: 1.06013E-07, _atendido: 1.39491E-06 },
  { nodo: 57, carga_MW: 6.7, potencia_deslastrada_MW: 6.699999893, costo_dolar_por_MW: 669.9999893, potencia_atendida_MW: 1.06513E-07, _atendido: 1.58975E-06 },
  { nodo: 2, carga_MW: 3, potencia_deslastrada_MW: 8.70938E-09, costo_dolar_por_MW: 1.74188E-06, potencia_atendida_MW: 2.999999991, _atendido: 99.99999971 },
  { nodo: 3, carga_MW: 41, potencia_deslastrada_MW: 8.71028E-09, costo_dolar_por_MW: 1.74206E-06, potencia_atendida_MW: 40.99999999, _atendido: 99.99999998 }
];


let escenario4ConGdYRd = [
  { nodo: 1, carga_MW: 55, potencia_deslastrada_MW: 54.9999998, costo_dolar_por_MW: 10999.99996, potencia_atendida_MW: 2.04335E-07, _atendido: 3.71519E-07 },
  { nodo: 5, carga_MW: 13, potencia_deslastrada_MW: 12.99999978, costo_dolar_por_MW: 2599.999957, potencia_atendida_MW: 2.1725E-07, _atendido: 1.67115E-06 },
  { nodo: 6, carga_MW: 75, potencia_deslastrada_MW: 1.84168E-06, costo_dolar_por_MW: 0.000552503, potencia_atendida_MW: 74.99999816, _atendido: 99.99999754 },
  { nodo: 8, carga_MW: 150, potencia_deslastrada_MW: 149.9999998, costo_dolar_por_MW: 29999.99995, potencia_atendida_MW: 2.43279E-07, _atendido: 1.62186E-07 },
  { nodo: 9, carga_MW: 121, potencia_deslastrada_MW: 120.9999999, costo_dolar_por_MW: 12099.99999, potencia_atendida_MW: 1.05453E-07, _atendido: 8.71516E-08 },
  { nodo: 10, carga_MW: 5, potencia_deslastrada_MW: 4.999999895, costo_dolar_por_MW: 499.9999895, potencia_atendida_MW: 1.0525E-07, _atendido: 2.105E-06 },
  { nodo: 12, carga_MW: 377, potencia_deslastrada_MW: 194.2416777, costo_dolar_por_MW: 58272.50331, potencia_atendida_MW: 182.7583223, _atendido: 48.47700857 },
  { nodo: 13, carga_MW: 18, potencia_deslastrada_MW: 17.9999999, costo_dolar_por_MW: 1799.99999, potencia_atendida_MW: 1.00222E-07, _atendido: 5.5679E-07 },
  { nodo: 14, carga_MW: 10.5, potencia_deslastrada_MW: 10.49999979, costo_dolar_por_MW: 2099.999959, potencia_atendida_MW: 2.07486E-07, _atendido: 1.97606E-06 },
  { nodo: 15, carga_MW: 22, potencia_deslastrada_MW: 21.9999999, costo_dolar_por_MW: 2199.99999, potencia_atendida_MW: 9.99982E-08, _atendido: 4.54537E-07 },
  { nodo: 16, carga_MW: 43, potencia_deslastrada_MW: 23.70832455, costo_dolar_por_MW: 7112.497364, potencia_atendida_MW: 19.29167545, _atendido: 44.86436152 },
  { nodo: 17, carga_MW: 42, potencia_deslastrada_MW: 41.9999998, costo_dolar_por_MW: 8399.99996, potencia_atendida_MW: 2.01948E-07, _atendido: 4.80828E-07 },
  { nodo: 18, carga_MW: 27.2, potencia_deslastrada_MW: 27.19999978, costo_dolar_por_MW: 5439.999956, potencia_atendida_MW: 2.18195E-07, _atendido: 8.02187E-07 },
  { nodo: 19, carga_MW: 3.3, potencia_deslastrada_MW: 3.299999791, costo_dolar_por_MW: 659.9999583, potencia_atendida_MW: 2.08593E-07, _atendido: 6.321E-06 },
  { nodo: 20, carga_MW: 2.3, potencia_deslastrada_MW: 5.30526E-06, costo_dolar_por_MW: 0.001591578, potencia_atendida_MW: 2.299994695, _atendido: 99.99976934 },
  { nodo: 23, carga_MW: 6.3, potencia_deslastrada_MW: 1.64411E-06, costo_dolar_por_MW: 0.000493232, potencia_atendida_MW: 6.299998356, _atendido: 99.9999739 },
  { nodo: 25, carga_MW: 6.3, potencia_deslastrada_MW: 6.299999892, costo_dolar_por_MW: 629.9999892, potencia_atendida_MW: 1.08255E-07, _atendido: 1.71833E-06 },
  { nodo: 27, carga_MW: 9.3, potencia_deslastrada_MW: 9.29999989, costo_dolar_por_MW: 929.999989, potencia_atendida_MW: 1.09797E-07, _atendido: 1.18061E-06 },
  { nodo: 28, carga_MW: 4.6, potencia_deslastrada_MW: 4.59999989, costo_dolar_por_MW: 459.999989, potencia_atendida_MW: 1.09612E-07, _atendido: 2.38287E-06 },
  { nodo: 29, carga_MW: 17, potencia_deslastrada_MW: 16.99999989, costo_dolar_por_MW: 1699.999989, potencia_atendida_MW: 1.09215E-07, _atendido: 6.42444E-07 },
  { nodo: 30, carga_MW: 3.6, potencia_deslastrada_MW: 3.599999749, costo_dolar_por_MW: 719.9999499, potencia_atendida_MW: 2.50607E-07, _atendido: 6.96131E-06 },
  { nodo: 31, carga_MW: 5.8, potencia_deslastrada_MW: 5.79999989, costo_dolar_por_MW: 579.999989, potencia_atendida_MW: 1.09824E-07, _atendido: 1.89352E-06 },
  { nodo: 32, carga_MW: 1.6, potencia_deslastrada_MW: 1.599999762, costo_dolar_por_MW: 319.9999523, potencia_atendida_MW: 2.3849E-07, _atendido: 1.49056E-05 },
  { nodo: 33, carga_MW: 3.8, potencia_deslastrada_MW: 3.799999893, costo_dolar_por_MW: 379.9999893, potencia_atendida_MW: 1.06849E-07, _atendido: 2.81183E-06 },
  { nodo: 35, carga_MW: 6, potencia_deslastrada_MW: 5.999999894, costo_dolar_por_MW: 599.9999894, potencia_atendida_MW: 1.06148E-07, _atendido: 1.76913E-06 },
  { nodo: 38, carga_MW: 14, potencia_deslastrada_MW: 13.9999999, costo_dolar_por_MW: 1399.99999, potencia_atendida_MW: 1.0199E-07, _atendido: 7.28502E-07 },
  { nodo: 41, carga_MW: 6.3, potencia_deslastrada_MW: 6.299999899, costo_dolar_por_MW: 629.9999899, potencia_atendida_MW: 1.01021E-07, _atendido: 1.60351E-06 },
  { nodo: 42, carga_MW: 7.1, potencia_deslastrada_MW: 2.04662E-05, costo_dolar_por_MW: 0.006139859, potencia_atendida_MW: 7.099979534, _atendido: 99.99971174 },
  { nodo: 43, carga_MW: 2, potencia_deslastrada_MW: 1.999999781, costo_dolar_por_MW: 399.9999562, potencia_atendida_MW: 2.18911E-07, _atendido: 1.09456E-05 },
  { nodo: 44, carga_MW: 12, potencia_deslastrada_MW: 11.99999978, costo_dolar_por_MW: 2399.999956, potencia_atendida_MW: 2.17598E-07, _atendido: 1.81332E-06 },
  { nodo: 47, carga_MW: 29.7, potencia_deslastrada_MW: 3.87899E-06, costo_dolar_por_MW: 0.001163696, potencia_atendida_MW: 29.69999612, _atendido: 99.99998694 },
  { nodo: 49, carga_MW: 18, potencia_deslastrada_MW: 17.99999979, costo_dolar_por_MW: 3599.999958, potencia_atendida_MW: 2.08846E-07, _atendido: 1.16026E-06 },
  { nodo: 50, carga_MW: 21, potencia_deslastrada_MW: 3.56919E-06, costo_dolar_por_MW: 0.001070756, potencia_atendida_MW: 20.99999643, _atendido: 99.999983 },
  { nodo: 51, carga_MW: 18, potencia_deslastrada_MW: 17.99999989, costo_dolar_por_MW: 1799.999989, potencia_atendida_MW: 1.05433E-07, _atendido: 5.85736E-07 },
  { nodo: 52, carga_MW: 4.9, potencia_deslastrada_MW: 8.96226E-07, costo_dolar_por_MW: 0.000268868, potencia_atendida_MW: 4.899999104, _atendido: 99.99998171 },
  { nodo: 53, carga_MW: 20, potencia_deslastrada_MW: 19.99999975, costo_dolar_por_MW: 3999.99995, potencia_atendida_MW: 2.4876E-07, _atendido: 1.2438E-06 },
  { nodo: 54, carga_MW: 4.1, potencia_deslastrada_MW: 4.099999759, costo_dolar_por_MW: 819.9999519, potencia_atendida_MW: 2.40518E-07, _atendido: 5.86629E-06 },
  { nodo: 55, carga_MW: 6.8, potencia_deslastrada_MW: 1.17157E-06, costo_dolar_por_MW: 0.000351472, potencia_atendida_MW: 6.799998828, _atendido: 99.99998277 },
  { nodo: 56, carga_MW: 7.6, potencia_deslastrada_MW: 7.599999894, costo_dolar_por_MW: 759.9999894, potencia_atendida_MW: 1.06013E-07, _atendido: 1.39491E-06 },
  { nodo: 57, carga_MW: 6.7, potencia_deslastrada_MW: 6.699999893, costo_dolar_por_MW: 669.9999893, potencia_atendida_MW: 1.06513E-07, _atendido: 1.58975E-06 },
  { nodo: 2, carga_MW: 3, potencia_deslastrada_MW: 8.70938E-09, costo_dolar_por_MW: 1.74188E-06, potencia_atendida_MW: 2.999999991, _atendido: 99.99999971 },
  { nodo: 3, carga_MW: 41, potencia_deslastrada_MW: 8.71028E-09, costo_dolar_por_MW: 1.74206E-06, potencia_atendida_MW: 40.99999999, _atendido: 99.99999998 }
];

    
 
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="69"){

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "12 - 13",
            "porcentaje": 91.6667
          },
          {
            "linea": "11 - 12",
            "porcentaje": 90.8333
          },
          {
            "linea": "18 - 19",
            "porcentaje": 85.8333
          },
          {
            "linea": "1 - 2",
            "porcentaje": 75
          },
          {
            "linea": "14 - 15",
            "porcentaje": 75
          },
          {
            "linea": "33 - 34",
            "porcentaje": 74.1667
          },
          {
            "linea": "25 - 26",
            "porcentaje": 69.1667
          },
          {
            "linea": "21 - 22",
            "porcentaje": 65.8333
          },
          {
            "linea": "11 - 66",
            "porcentaje": 64.1667
          },
          {
            "linea": "13 - 14",
            "porcentaje": 55
          },
          {
            "linea": "2 - 3",
            "porcentaje": 54.1667
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 2",
            "porcentaje": 100
          },
          {
            "generador": "Nodo 3",
            "porcentaje": 91.6667
          },
          {
            "generador": "Nodo 1",
            "porcentaje": 75
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [
        {
          "linea": "1-2",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "2-3",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "3-4",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "4-5",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "5-6",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "6-7",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "7-8",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "3-36",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "36-37",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "37-38",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "38-39",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "9-53",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "53-54",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "54-55",
          "porcentaje_sobrecarga": "Inf"
        }
      ],
      "tiempo_ejecucion": 542.035676
    }
    
   
    let generadores = {
      "generators": [
        { "nodo": 1, "PG_MW": 0, "QG_MW": 0, "Q_MAX_MVAR": 10, "Q_MIN_MVAR": -10, "P_MAX_MW": 10, "costo_marginal_dolar_per_MW": 20 }
      ]
    };
    
    
    
    let lineas = {
      "lines": [
        { "I": 1, "J": 2, "flujo_P_I_a_J_MW": 4.027091694, "flujo_Q_I_a_J_MW": 2.79685805, "flujo_P_J_a_I_MW": -4.027016699, "flujo_Q_J_a_I_MW": -2.796678061 },
        { "I": 2, "J": 3, "flujo_P_I_a_J_MW": 4.027016699, "flujo_Q_I_a_J_MW": 2.796678061, "flujo_P_J_a_I_MW": -4.026941703, "flujo_Q_J_a_I_MW": -2.796498072 },
        { "I": 3, "J": 4, "flujo_P_I_a_J_MW": 3.749686553, "flujo_Q_I_a_J_MW": 2.6020208, "flujo_P_J_a_I_MW": -3.749491576, "flujo_Q_J_a_I_MW": -2.601552853 },
        { "I": 4, "J": 5, "flujo_P_I_a_J_MW": 2.898736073, "flujo_Q_I_a_J_MW": 1.990388266, "flujo_P_J_a_I_MW": -2.896799134, "flujo_Q_J_a_I_MW": -1.988119501 },
        { "I": 5, "J": 6, "flujo_P_I_a_J_MW": 2.896799134, "flujo_Q_I_a_J_MW": 1.988119501, "flujo_P_J_a_I_MW": -2.868555327, "flujo_Q_J_a_I_MW": -1.973735223 },
        { "I": 6, "J": 7, "flujo_P_I_a_J_MW": 2.865955327, "flujo_Q_I_a_J_MW": 1.971535223, "flujo_P_J_a_I_MW": -2.836611191, "flujo_Q_J_a_I_MW": -1.956585888 },
        { "I": 7, "J": 8, "flujo_P_I_a_J_MW": 2.796211191, "flujo_Q_I_a_J_MW": 1.926585888, "flujo_P_J_a_I_MW": -2.789315816, "flujo_Q_J_a_I_MW": -1.923070892 },
        { "I": 8, "J": 9, "flujo_P_I_a_J_MW": 2.670214015, "flujo_Q_I_a_J_MW": 1.838069981, "flujo_P_J_a_I_MW": -2.666838563, "flujo_Q_J_a_I_MW": -1.836351445 },
        { "I": 9, "J": 10, "flujo_P_I_a_J_MW": 0.780404983, "flujo_Q_I_a_J_MW": 0.533259411, "flujo_P_J_a_I_MW": -0.775626636, "flujo_Q_J_a_I_MW": -0.531680048 },
        { "I": 10, "J": 11, "flujo_P_I_a_J_MW": 0.747626636, "flujo_Q_I_a_J_MW": 0.512680048, "flujo_P_J_a_I_MW": -0.74661163, "flujo_Q_J_a_I_MW": -0.512344423 },
        { "I": 11, "J": 12, "flujo_P_I_a_J_MW": 0.56560899, "flujo_Q_I_a_J_MW": 0.382343622, "flujo_P_J_a_I_MW": -0.563416279, "flujo_Q_J_a_I_MW": -0.381618985 },
        { "I": 12, "J": 13, "flujo_P_I_a_J_MW": 0.362392918, "flujo_Q_I_a_J_MW": 0.237611263, "flujo_P_J_a_I_MW": -0.361105486, "flujo_Q_J_a_I_MW": -0.237186286 },
        { "I": 13, "J": 14, "flujo_P_I_a_J_MW": 0.353105486, "flujo_Q_I_a_J_MW": 0.231686286, "flujo_P_J_a_I_MW": -0.351858528, "flujo_Q_J_a_I_MW": -0.231280188 },
        { "I": 14, "J": 15, "flujo_P_I_a_J_MW": 0.343858528, "flujo_Q_I_a_J_MW": 0.225780188, "flujo_P_J_a_I_MW": -0.342652436, "flujo_Q_J_a_I_MW": -0.225381654 },
        { "I": 15, "J": 16, "flujo_P_I_a_J_MW": 0.342652436, "flujo_Q_I_a_J_MW": 0.225381654, "flujo_P_J_a_I_MW": -0.342428318, "flujo_Q_J_a_I_MW": -0.225307555 },
        { "I": 16, "J": 17, "flujo_P_I_a_J_MW": 0.296928318, "flujo_Q_I_a_J_MW": 0.195307555, "flujo_P_J_a_I_MW": -0.296607461, "flujo_Q_J_a_I_MW": -0.19520146 },
        { "I": 17, "J": 18, "flujo_P_I_a_J_MW": 0.236607461, "flujo_Q_I_a_J_MW": 0.16020146, "flujo_P_J_a_I_MW": -0.236604853, "flujo_Q_J_a_I_MW": -0.160200572 },
        { "I": 18, "J": 19, "flujo_P_I_a_J_MW": 0.176604853, "flujo_Q_I_a_J_MW": 0.125200572, "flujo_P_J_a_I_MW": -0.176500495, "flujo_Q_J_a_I_MW": -0.125166073 },
        { "I": 19, "J": 20, "flujo_P_I_a_J_MW": 0.176500495, "flujo_Q_I_a_J_MW": 0.125166073, "flujo_P_J_a_I_MW": -0.176433408, "flujo_Q_J_a_I_MW": -0.125144093 },
        { "I": 20, "J": 21, "flujo_P_I_a_J_MW": 0.175433408, "flujo_Q_I_a_J_MW": 0.124544093, "flujo_P_J_a_I_MW": -0.175325757, "flujo_Q_J_a_I_MW": -0.124508514 },
        { "I": 21, "J": 22, "flujo_P_I_a_J_MW": 0.061325757, "flujo_Q_I_a_J_MW": 0.043508514, "flujo_P_J_a_I_MW": -0.061325218, "flujo_Q_J_a_I_MW": -0.043508337 },
        { "I": 22, "J": 23, "flujo_P_I_a_J_MW": 0.056025218, "flujo_Q_I_a_J_MW": 0.040008337, "flujo_P_J_a_I_MW": -0.056020079, "flujo_Q_J_a_I_MW": -0.040006638 },
        { "I": 23, "J": 24, "flujo_P_I_a_J_MW": 0.056020079, "flujo_Q_I_a_J_MW": 0.040006638, "flujo_P_J_a_I_MW": -0.056008893, "flujo_Q_J_a_I_MW": -0.040002939 },
        { "I": 24, "J": 25, "flujo_P_I_a_J_MW": 0.028008893, "flujo_Q_I_a_J_MW": 0.020002939, "flujo_P_J_a_I_MW": -0.028002845, "flujo_Q_J_a_I_MW": -0.02000094 },
        { "I": 25, "J": 26, "flujo_P_I_a_J_MW": 0.028002845, "flujo_Q_I_a_J_MW": 0.02000094, "flujo_P_J_a_I_MW": -0.02800035, "flujo_Q_J_a_I_MW": -0.020000116 },
        { "I": 26, "J": 27, "flujo_P_I_a_J_MW": 0.01400035, "flujo_Q_I_a_J_MW": 0.010000116, "flujo_P_J_a_I_MW": -0.014, "flujo_Q_J_a_I_MW": -0.01 },
      { "I": 3, "J": 28, "flujo_P_I_a_J_MW": 0.091538106, "flujo_Q_I_a_J_MW": 0.065218858, "flujo_P_J_a_I_MW": -0.091537759, "flujo_Q_J_a_I_MW": -0.065218007 },
      { "I": 28, "J": 29, "flujo_P_I_a_J_MW": 0.065537759, "flujo_Q_I_a_J_MW": 0.046618007, "flujo_P_J_a_I_MW": -0.065535175, "flujo_Q_J_a_I_MW": -0.04661169 },
      { "I": 29, "J": 30, "flujo_P_I_a_J_MW": 0.039535175, "flujo_Q_I_a_J_MW": 0.02801169, "flujo_P_J_a_I_MW": -0.039529347, "flujo_Q_J_a_I_MW": -0.028009763 },
      { "I": 30, "J": 31, "flujo_P_I_a_J_MW": 0.039529347, "flujo_Q_I_a_J_MW": 0.028009763, "flujo_P_J_a_I_MW": -0.039528318, "flujo_Q_J_a_I_MW": -0.028009423 },
      { "I": 31, "J": 32, "flujo_P_I_a_J_MW": 0.039528318, "flujo_Q_I_a_J_MW": 0.028009423, "flujo_P_J_a_I_MW": -0.039523175, "flujo_Q_J_a_I_MW": -0.028007723 },
      { "I": 32, "J": 33, "flujo_P_I_a_J_MW": 0.039523175, "flujo_Q_I_a_J_MW": 0.028007723, "flujo_P_J_a_I_MW": -0.039510882, "flujo_Q_J_a_I_MW": -0.028003597 },
      { "I": 33, "J": 34, "flujo_P_I_a_J_MW": 0.025510882, "flujo_Q_I_a_J_MW": 0.018003597, "flujo_P_J_a_I_MW": -0.025500479, "flujo_Q_J_a_I_MW": -0.018000158 },
      { "I": 34, "J": 35, "flujo_P_I_a_J_MW": 0.006000479, "flujo_Q_I_a_J_MW": 0.004000158, "flujo_P_J_a_I_MW": -0.006, "flujo_Q_J_a_I_MW": -0.004 },
      { "I": 3, "J": 36, "flujo_P_I_a_J_MW": 0.185717044, "flujo_Q_I_a_J_MW": 0.129258414, "flujo_P_J_a_I_MW": -0.185715639, "flujo_Q_J_a_I_MW": -0.129254964 },
      { "I": 36, "J": 37, "flujo_P_I_a_J_MW": 0.159715639, "flujo_Q_I_a_J_MW": 0.110654964, "flujo_P_J_a_I_MW": -0.159700561, "flujo_Q_J_a_I_MW": -0.110618093 },
      { "I": 37, "J": 38, "flujo_P_I_a_J_MW": 0.133700561, "flujo_Q_I_a_J_MW": 0.092018093, "flujo_P_J_a_I_MW": -0.133683245, "flujo_Q_J_a_I_MW": -0.091997867 },
      { "I": 38, "J": 39, "flujo_P_I_a_J_MW": 0.133683245, "flujo_Q_I_a_J_MW": 0.091997867, "flujo_P_J_a_I_MW": -0.133678245, "flujo_Q_J_a_I_MW": -0.091992029 },
      { "I": 39, "J": 40, "flujo_P_I_a_J_MW": 0.109678245, "flujo_Q_I_a_J_MW": 0.074992029, "flujo_P_J_a_I_MW": -0.109678047, "flujo_Q_J_a_I_MW": -0.074991797 },
      { "I": 40, "J": 41, "flujo_P_I_a_J_MW": 0.085678047, "flujo_Q_I_a_J_MW": 0.057991797, "flujo_P_J_a_I_MW": -0.085629364, "flujo_Q_J_a_I_MW": -0.057934919 },
      { "I": 41, "J": 42, "flujo_P_I_a_J_MW": 0.084429364, "flujo_Q_I_a_J_MW": 0.056934919, "flujo_P_J_a_I_MW": -0.08440926, "flujo_Q_J_a_I_MW": -0.056911424 },
      { "I": 42, "J": 43, "flujo_P_I_a_J_MW": 0.08440926, "flujo_Q_I_a_J_MW": 0.056911424, "flujo_P_J_a_I_MW": -0.084406601, "flujo_Q_J_a_I_MW": -0.056908324 },
      { "I": 43, "J": 44, "flujo_P_I_a_J_MW": 0.078406601, "flujo_Q_I_a_J_MW": 0.052608324, "flujo_P_J_a_I_MW": -0.078406088, "flujo_Q_J_a_I_MW": -0.052607677 },
      { "I": 44, "J": 45, "flujo_P_I_a_J_MW": 0.078406088, "flujo_Q_I_a_J_MW": 0.052607677, "flujo_P_J_a_I_MW": -0.078400013, "flujo_Q_J_a_I_MW": -0.052600017 },
      { "I": 45, "J": 46, "flujo_P_I_a_J_MW": 0.039200013, "flujo_Q_I_a_J_MW": 0.026300017, "flujo_P_J_a_I_MW": -0.0392, "flujo_Q_J_a_I_MW": -0.0263 },
      { "I": 4, "J": 47, "flujo_P_I_a_J_MW": 0.850755503, "flujo_Q_I_a_J_MW": 0.611164587, "flujo_P_J_a_I_MW": -0.850732217, "flujo_Q_J_a_I_MW": -0.611107059 },
      { "I": 47, "J": 48, "flujo_P_I_a_J_MW": 0.850732217, "flujo_Q_I_a_J_MW": 0.611107059, "flujo_P_J_a_I_MW": -0.850149404, "flujo_Q_J_a_I_MW": -0.609680501 },
      { "I": 48, "J": 49, "flujo_P_I_a_J_MW": 0.771149404, "flujo_Q_I_a_J_MW": 0.553280501, "flujo_P_J_a_I_MW": -0.769515897, "flujo_Q_J_a_I_MW": -0.549283539 },
      { "I": 49, "J": 50, "flujo_P_I_a_J_MW": 0.384815897, "flujo_Q_I_a_J_MW": 0.274783539, "flujo_P_J_a_I_MW": -0.3847, "flujo_Q_J_a_I_MW": -0.2745 },
      { "I": 8, "J": 51, "flujo_P_I_a_J_MW": 0.044101801, "flujo_Q_I_a_J_MW": 0.031000911, "flujo_P_J_a_I_MW": -0.044100044, "flujo_Q_J_a_I_MW": -0.031000015 },
      { "I": 51, "J": 52, "flujo_P_I_a_J_MW": 0.003600044, "flujo_Q_I_a_J_MW": 0.002700015, "flujo_P_J_a_I_MW": -0.0036, "flujo_Q_J_a_I_MW": -0.0027 },
      { "I": 9, "J": 53, "flujo_P_I_a_J_MW": 1.85643358, "flujo_Q_I_a_J_MW": 1.281092034, "flujo_P_J_a_I_MW": -1.850652535, "flujo_Q_J_a_I_MW": -1.278148352 },
      { "I": 53, "J": 54, "flujo_P_I_a_J_MW": 1.846352535, "flujo_Q_I_a_J_MW": 1.274648352, "flujo_P_J_a_I_MW": -1.839641091, "flujo_Q_J_a_I_MW": -1.271229814 },
      { "I": 54, "J": 55, "flujo_P_I_a_J_MW": 1.813241091, "flujo_Q_I_a_J_MW": 1.252229814, "flujo_P_J_a_I_MW": -1.804116375, "flujo_Q_J_a_I_MW": -1.247583978 },
      { "I": 55, "J": 56, "flujo_P_I_a_J_MW": 1.780116375, "flujo_Q_I_a_J_MW": 1.230383978, "flujo_P_J_a_I_MW": -1.771326252, "flujo_Q_J_a_I_MW": -1.225906109 },
      { "I": 56, "J": 57, "flujo_P_I_a_J_MW": 1.771326252, "flujo_Q_I_a_J_MW": 1.225906109, "flujo_P_J_a_I_MW": -1.721641589, "flujo_Q_J_a_I_MW": -1.209228936 },
      { "I": 57, "J": 58, "flujo_P_I_a_J_MW": 1.721641589, "flujo_Q_I_a_J_MW": 1.209228936, "flujo_P_J_a_I_MW": -1.697152362, "flujo_Q_J_a_I_MW": -1.201010656 },
      { "I": 58, "J": 59, "flujo_P_I_a_J_MW": 1.697152362, "flujo_Q_I_a_J_MW": 1.201010656, "flujo_P_J_a_I_MW": -1.687646655, "flujo_Q_J_a_I_MW": -1.197867085 },
      { "I": 59, "J": 60, "flujo_P_I_a_J_MW": 1.587646655, "flujo_Q_I_a_J_MW": 1.125867085, "flujo_P_J_a_I_MW": -1.576975635, "flujo_Q_J_a_I_MW": -1.122627915 },
      { "I": 60, "J": 61, "flujo_P_I_a_J_MW": 1.576975635, "flujo_Q_I_a_J_MW": 1.122627915, "flujo_P_J_a_I_MW": -1.562949364, "flujo_Q_J_a_I_MW": -1.1154835 },
      { "I": 61, "J": 62, "flujo_P_I_a_J_MW": 0.318949364, "flujo_Q_I_a_J_MW": 0.2274835, "flujo_P_J_a_I_MW": -0.318837312, "flujo_Q_J_a_I_MW": -0.227426438 },
      { "I": 62, "J": 63, "flujo_P_I_a_J_MW": 0.286837312, "flujo_Q_I_a_J_MW": 0.204426438, "flujo_P_J_a_I_MW": -0.286702379, "flujo_Q_J_a_I_MW": -0.204357762 },
      { "I": 63, "J": 64, "flujo_P_I_a_J_MW": 0.286702379, "flujo_Q_I_a_J_MW": 0.204357762, "flujo_P_J_a_I_MW": -0.286041212, "flujo_Q_J_a_I_MW": -0.20402099 },
      { "I": 64, "J": 65, "flujo_P_I_a_J_MW": 0.059041212, "flujo_Q_I_a_J_MW": 0.04202099, "flujo_P_J_a_I_MW": -0.059, "flujo_Q_J_a_I_MW": -0.042 },
      { "I": 11, "J": 66, "flujo_P_I_a_J_MW": 0.036002639, "flujo_Q_I_a_J_MW": 0.026000801, "flujo_P_J_a_I_MW": -0.036000015, "flujo_Q_J_a_I_MW": -0.026000005 },
      { "I": 66, "J": 67, "flujo_P_I_a_J_MW": 0.018000015, "flujo_Q_I_a_J_MW": 0.013000005, "flujo_P_J_a_I_MW": -0.018, "flujo_Q_J_a_I_MW": -0.013 },
      { "I": 12, "J": 68, "flujo_P_I_a_J_MW": 0.056023361, "flujo_Q_I_a_J_MW": 0.040007722, "flujo_P_J_a_I_MW": -0.056000037, "flujo_Q_J_a_I_MW": -0.040000013 },
      { "I": 68, "J": 69, "flujo_P_I_a_J_MW": 0.028000037, "flujo_Q_I_a_J_MW": 0.020000013, "flujo_P_J_a_I_MW": -0.028, "flujo_Q_J_a_I_MW": -0.02 }
      ]
    };
    
    
    
    let nodos = {
      "nodes": [
        { "nodo": 1, "tipo_de_nodo": 3, "P_MW": 0, "Q_MVAR": 0, "V_max": 1, "V_min": 1 },
        { "nodo": 2, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 3, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 4, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 5, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 6, "tipo_de_nodo": 1, "P_MW": 0.0026, "Q_MVAR": 0.0022, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 7, "tipo_de_nodo": 1, "P_MW": 0.0404, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 8, "tipo_de_nodo": 1, "P_MW": 0.075, "Q_MVAR": 0.054, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 9, "tipo_de_nodo": 1, "P_MW": 0.03, "Q_MVAR": 0.022, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 10, "tipo_de_nodo": 1, "P_MW": 0.028, "Q_MVAR": 0.019, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 11, "tipo_de_nodo": 1, "P_MW": 0.145, "Q_MVAR": 0.104, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 12, "tipo_de_nodo": 1, "P_MW": 0.145, "Q_MVAR": 0.104, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 13, "tipo_de_nodo": 1, "P_MW": 0.008, "Q_MVAR": 0.0055, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 14, "tipo_de_nodo": 1, "P_MW": 0.008, "Q_MVAR": 0.0055, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 15, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 16, "tipo_de_nodo": 1, "P_MW": 0.0455, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 17, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.035, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 18, "tipo_de_nodo": 1, "P_MW": 0.06, "Q_MVAR": 0.035, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 19, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 20, "tipo_de_nodo": 1, "P_MW": 0.001, "Q_MVAR": 0.0006, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 21, "tipo_de_nodo": 1, "P_MW": 0.114, "Q_MVAR": 0.081, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 22, "tipo_de_nodo": 1, "P_MW": 0.0053, "Q_MVAR": 0.0035, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 23, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 24, "tipo_de_nodo": 1, "P_MW": 0.028, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 25, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 26, "tipo_de_nodo": 1, "P_MW": 0.014, "Q_MVAR": 0.01, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 27, "tipo_de_nodo": 1, "P_MW": 0.014, "Q_MVAR": 0.01, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 28, "tipo_de_nodo": 1, "P_MW": 0.026, "Q_MVAR": 0.0186, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 29, "tipo_de_nodo": 1, "P_MW": 0.026, "Q_MVAR": 0.0186, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 30, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 31, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 32, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 33, "tipo_de_nodo": 1, "P_MW": 0.014, "Q_MVAR": 0.01, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 34, "tipo_de_nodo": 1, "P_MW": 0.0195, "Q_MVAR": 0.014, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 35, "tipo_de_nodo": 1, "P_MW": 0.006, "Q_MVAR": 0.004, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 36, "tipo_de_nodo": 1, "P_MW": 0.026, "Q_MVAR": 0.0186, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 37, "tipo_de_nodo": 1, "P_MW": 0.026, "Q_MVAR": 0.0186, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 38, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 39, "tipo_de_nodo": 1, "P_MW": 0.024, "Q_MVAR": 0.017, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 40, "tipo_de_nodo": 1, "P_MW": 0.024, "Q_MVAR": 0.017, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 41, "tipo_de_nodo": 1, "P_MW": 0.0012, "Q_MVAR": 0.001, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 42, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 43, "tipo_de_nodo": 1, "P_MW": 0.006, "Q_MVAR": 0.0043, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 44, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 45, "tipo_de_nodo": 1, "P_MW": 0.0392, "Q_MVAR": 0.0263, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 46, "tipo_de_nodo": 1, "P_MW": 0.0392, "Q_MVAR": 0.0263, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 47, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 48, "tipo_de_nodo": 1, "P_MW": 0.079, "Q_MVAR": 0.0564, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 49, "tipo_de_nodo": 1, "P_MW": 0.3847, "Q_MVAR": 0.2745, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 50, "tipo_de_nodo": 1, "P_MW": 0.3847, "Q_MVAR": 0.2745, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 51, "tipo_de_nodo": 1, "P_MW": 0.0405, "Q_MVAR": 0.0283, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 52, "tipo_de_nodo": 1, "P_MW": 0.0036, "Q_MVAR": 0.0027, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 53, "tipo_de_nodo": 1, "P_MW": 0.0043, "Q_MVAR": 0.0035, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 54, "tipo_de_nodo": 1, "P_MW": 0.0264, "Q_MVAR": 0.019, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 55, "tipo_de_nodo": 1, "P_MW": 0.024, "Q_MVAR": 0.0172, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 56, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 57, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 58, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 59, "tipo_de_nodo": 1, "P_MW": 0.1, "Q_MVAR": 0.072, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 60, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 61, "tipo_de_nodo": 1, "P_MW": 1.244, "Q_MVAR": 0.888, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 62, "tipo_de_nodo": 1, "P_MW": 0.032, "Q_MVAR": 0.023, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 63, "tipo_de_nodo": 1, "P_MW": 0, "Q_MVAR": 0, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 64, "tipo_de_nodo": 1, "P_MW": 0.227, "Q_MVAR": 0.162, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 65, "tipo_de_nodo": 1, "P_MW": 0.059, "Q_MVAR": 0.042, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 66, "tipo_de_nodo": 1, "P_MW": 0.018, "Q_MVAR": 0.013, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 67, "tipo_de_nodo": 1, "P_MW": 0.018, "Q_MVAR": 0.013, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 68, "tipo_de_nodo": 1, "P_MW": 0.028, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 69, "tipo_de_nodo": 1, "P_MW": 0.028, "Q_MVAR": 0.02, "V_max": 1.1, "V_min": 0.9 }
      ]
    };
    
    
  
    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 3.551701155,
        "potencia_atendida_MW": 0.250398845,
        "potencia_generada_adicional_MW": 3.551701155 - 0.250398845,
        "costo_operacion_dolar_per_MWH": 922.3978667,
        "costo_deslastre_dolar_per_MWH": 708.2401246,
        "U1": 0.065858038,
        "U2": 0.232175019,
        "U": 0.149016528,
        "resiliencia": "POBRE"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 2.570142122,
        "potencia_atendida_MW": 1.231957878,
        "potencia_generada_adicional_MW": 2.570142122 - 1.231957878,
        "costo_operacion_dolar_per_MWH": 543.5361073,
        "costo_deslastre_dolar_per_MWH": 483.421914,
        "U1": 0.324020378,
        "U2": 0.110598344,
        "U": 0.217309361,
        "resiliencia": "POBRE"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 1.605013172,
        "potencia_atendida_MW": 2.197086828,
        "potencia_generada_adicional_MW": 1.605013172 - 2.197086828,
        "costo_operacion_dolar_per_MWH": 659.5624697,
        "costo_deslastre_dolar_per_MWH": 299.4018152,
        "U1": 0.5778614,
        "U2": 0.546059958,
        "U": 0.561960679,
        "resiliencia": "BUENA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 1.061152168,
        "potencia_atendida_MW": 2.740947832,
        "potencia_generada_adicional_MW": 1.061152168 - 2.740947832,
        "costo_operacion_dolar_per_MWH": 358.0966502,
        "costo_deslastre_dolar_per_MWH": 184.8236024,
        "U1": 0.720903667,
        "U2": 0.483872295,
        "U": 0.602387981,
        "resiliencia": "BUENA"
      }
    ];
    
  
    

    let escenario1ConSinRdNiGd = [
      { "nodo": 6, "carga_MW": 0.0026, "potencia_deslastrada_MW": 0.001257508, "costo_dolar_por_MW": 0.377252327, "potencia_atendida_MW": 0.001342492, "_atendido": 51.63431704 },
      { "nodo": 7, "carga_MW": 0.0404, "potencia_deslastrada_MW": 0.013592349, "costo_dolar_por_MW": 4.077704561, "potencia_atendida_MW": 0.026807651, "_atendido": 66.35557293 },
      { "nodo": 8, "carga_MW": 0.075, "potencia_deslastrada_MW": 0.017753643, "costo_dolar_por_MW": 5.326092783, "potencia_atendida_MW": 0.057246357, "_atendido": 76.32847652 },
      { "nodo": 9, "carga_MW": 0.03, "potencia_deslastrada_MW": 0.015068085, "costo_dolar_por_MW": 1.506808494, "potencia_atendida_MW": 0.014931915, "_atendido": 49.77305021 },
      { "nodo": 36, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.011573453, "costo_dolar_por_MW": 3.472035966, "potencia_atendida_MW": 0.014426547, "_atendido": 55.48671838 },
      { "nodo": 37, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.011646553, "costo_dolar_por_MW": 3.493965897, "potencia_atendida_MW": 0.014353447, "_atendido": 55.20556542 },
      { "nodo": 39, "carga_MW": 0.024, "potencia_deslastrada_MW": 0.012401212, "costo_dolar_por_MW": 2.480242334, "potencia_atendida_MW": 0.011598788, "_atendido": 48.32828472 },
      { "nodo": 53, "carga_MW": 0.0043, "potencia_deslastrada_MW": 0.002130585, "costo_dolar_por_MW": 0.213058529, "potencia_atendida_MW": 0.002169415, "_atendido": 50.45150497 },
      { "nodo": 54, "carga_MW": 0.0264, "potencia_deslastrada_MW": 0.012702001, "costo_dolar_por_MW": 1.270200126, "potencia_atendida_MW": 0.013697999, "_atendido": 51.88635886 },
      { "nodo": 55, "carga_MW": 0.024, "potencia_deslastrada_MW": 0.008576025, "costo_dolar_por_MW": 2.572807406, "potencia_atendida_MW": 0.015423975, "_atendido": 64.26656381 },
      { "nodo": 14, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.008000006, "costo_dolar_por_MW": 2.400001787, "potencia_atendida_MW": -5.95769E-09, "_atendido": -7.44711E-05 },
      { "nodo": 16, "carga_MW": 0.0455, "potencia_deslastrada_MW": 0.045499994, "costo_dolar_por_MW": 9.099998819, "potencia_atendida_MW": 5.90319E-09, "_atendido": 1.2974E-05 },
      { "nodo": 17, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999994, "costo_dolar_por_MW": 17.99999826, "potencia_atendida_MW": 5.81649E-09, "_atendido": 9.69415E-06 },
      { "nodo": 18, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999989, "costo_dolar_por_MW": 5.999998865, "potencia_atendida_MW": 1.13523E-08, "_atendido": 1.89205E-05 },
      { "nodo": 20, "carga_MW": 0.001, "potencia_deslastrada_MW": 0.000999977, "costo_dolar_por_MW": 0.199995478, "potencia_atendida_MW": 2.26094E-08, "_atendido": 0.00226094 },
      { "nodo": 21, "carga_MW": 0.114, "potencia_deslastrada_MW": 0.114, "costo_dolar_por_MW": 34.19999995, "potencia_atendida_MW": 1.77772E-10, "_atendido": 1.55941E-07 },
      { "nodo": 10, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999993, "costo_dolar_por_MW": 5.599998548, "potencia_atendida_MW": 7.26235E-09, "_atendido": 2.5937E-05 },
      { "nodo": 11, "carga_MW": 0.145, "potencia_deslastrada_MW": 0.144999991, "costo_dolar_por_MW": 28.99999819, "potencia_atendida_MW": 9.03965E-09, "_atendido": 6.23424E-06 },
      { "nodo": 12, "carga_MW": 0.145, "potencia_deslastrada_MW": 0.144999991, "costo_dolar_por_MW": 43.49999743, "potencia_atendida_MW": 8.56274E-09, "_atendido": 5.90534E-06 },
      { "nodo": 13, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.007999955, "costo_dolar_por_MW": 2.399986378, "potencia_atendida_MW": 4.54073E-08, "_atendido": 0.000567591 },
      { "nodo": 66, "carga_MW": 0.018, "potencia_deslastrada_MW": 0.018, "costo_dolar_por_MW": 3.599999995, "potencia_atendida_MW": 2.59112E-11, "_atendido": 1.43951E-07 },
      { "nodo": 68, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999988, "costo_dolar_por_MW": 2.799998781, "potencia_atendida_MW": 1.21877E-08, "_atendido": 4.35275E-05 },
      { "nodo": 69, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999988, "costo_dolar_por_MW": 2.799998781, "potencia_atendida_MW": 1.21874E-08, "_atendido": 4.35265E-05 },
      { "nodo": 61, "carga_MW": 1.244, "potencia_deslastrada_MW": 1.243999993, "costo_dolar_por_MW": 248.7999986, "potencia_atendida_MW": 7.16444E-09, "_atendido": 5.75919E-07 },
      { "nodo": 62, "carga_MW": 0.032, "potencia_deslastrada_MW": 0.031999992, "costo_dolar_por_MW": 3.199999202, "potencia_atendida_MW": 7.98265E-09, "_atendido": 2.49458E-05 },
      { "nodo": 64, "carga_MW": 0.227, "potencia_deslastrada_MW": 0.227, "costo_dolar_por_MW": 68.1000001, "potencia_atendida_MW": -3.2649E-10, "_atendido": -1.43828E-07 },
      { "nodo": 65, "carga_MW": 0.059, "potencia_deslastrada_MW": 0.059000004, "costo_dolar_por_MW": 11.80000089, "potencia_atendida_MW": -4.46902E-09, "_atendido": -7.57462E-06 },
      { "nodo": 22, "carga_MW": 0.0053, "potencia_deslastrada_MW": 0.005300016, "costo_dolar_por_MW": 1.590004894, "potencia_atendida_MW": -1.63144E-08, "_atendido": -0.000307818 },
      { "nodo": 24, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999982, "costo_dolar_por_MW": 5.599996388, "potencia_atendida_MW": 1.80605E-08, "_atendido": 6.45018E-05 },
      { "nodo": 28, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.026000016, "costo_dolar_por_MW": 5.200003174, "potencia_atendida_MW": -1.58696E-08, "_atendido": -6.10369E-05 },
      { "nodo": 29, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.025999984, "costo_dolar_por_MW": 2.599998407, "potencia_atendida_MW": 1.59302E-08, "_atendido": 6.12699E-05 },
      { "nodo": 33, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.013999944, "costo_dolar_por_MW": 4.199983224, "potencia_atendida_MW": 5.59194E-08, "_atendido": 0.000399424 },
      { "nodo": 34, "carga_MW": 0.0195, "potencia_deslastrada_MW": 0.019499947, "costo_dolar_por_MW": 1.949994729, "potencia_atendida_MW": 5.27065E-08, "_atendido": 0.00027029 },
      { "nodo": 35, "carga_MW": 0.006, "potencia_deslastrada_MW": 0.006, "costo_dolar_por_MW": 1.199999992, "potencia_atendida_MW": 3.94241E-11, "_atendido": 6.57069E-07 },
      { "nodo": 43, "carga_MW": 0.006, "potencia_deslastrada_MW": 0.006, "costo_dolar_por_MW": 0.6, "potencia_atendida_MW": 4.93702E-15, "_atendido": 8.22837E-11 },
      { "nodo": 26, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.014, "costo_dolar_por_MW": 1.4, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 27, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.014, "costo_dolar_por_MW": 1.4, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 40, "carga_MW": 0.024, "potencia_deslastrada_MW": 0.024, "costo_dolar_por_MW": 2.40000005, "potencia_atendida_MW": -4.96118E-10, "_atendido": -2.06716E-06 },
      { "nodo": 41, "carga_MW": 0.0012, "potencia_deslastrada_MW": 0.001199999, "costo_dolar_por_MW": 0.11999994, "potencia_atendida_MW": 6.00279E-10, "_atendido": 5.00233E-05 },
      { "nodo": 48, "carga_MW": 0.079, "potencia_deslastrada_MW": 0.079000021, "costo_dolar_por_MW": 23.70000638, "potencia_atendida_MW": -2.12658E-08, "_atendido": -2.69187E-05 },
      { "nodo": 49, "carga_MW": 0.3847, "potencia_deslastrada_MW": 0.384699977, "costo_dolar_por_MW": 38.46999769, "potencia_atendida_MW": 2.3066E-08, "_atendido": 5.99584E-06 },
      { "nodo": 51, "carga_MW": 0.0405, "potencia_deslastrada_MW": 0.040499985, "costo_dolar_por_MW": 8.099997038, "potencia_atendida_MW": 1.48087E-08, "_atendido": 3.65647E-05 },
      { "nodo": 52, "carga_MW": 0.0036, "potencia_deslastrada_MW": 0.003600014, "costo_dolar_por_MW": 1.0800043, "potencia_atendida_MW": -1.43321E-08, "_atendido": -0.000398115 },
      { "nodo": 50, "carga_MW": 0.3847, "potencia_deslastrada_MW": 0.3847, "costo_dolar_por_MW": 76.94, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 59, "carga_MW": 0.1, "potencia_deslastrada_MW": 0.1, "costo_dolar_por_MW": 10, "potencia_atendida_MW": 0, "_atendido": 0 },
      { "nodo": 67, "carga_MW": 0.018, "potencia_deslastrada_MW": 0.018, "costo_dolar_por_MW": 5.4, "potencia_atendida_MW": 0, "_atendido": 0 }
  ];



let escenario2ConRdSinGd = [
  { "nodo": 6, "carga_MW": 0.0026, "potencia_deslastrada_MW": 3.67001E-08, "costo_dolar_por_MW": 1.101E-05, "potencia_atendida_MW": 0.002599963, "_atendido": 99.99858846 },
  { "nodo": 7, "carga_MW": 0.0404, "potencia_deslastrada_MW": 3.66639E-08, "costo_dolar_por_MW": 1.09992E-05, "potencia_atendida_MW": 0.040399963, "_atendido": 99.99990925 },
  { "nodo": 8, "carga_MW": 0.075, "potencia_deslastrada_MW": 3.66632E-08, "costo_dolar_por_MW": 1.09989E-05, "potencia_atendida_MW": 0.074999963, "_atendido": 99.99995112 },
  { "nodo": 9, "carga_MW": 0.03, "potencia_deslastrada_MW": 1.28414E-07, "costo_dolar_por_MW": 1.28414E-05, "potencia_atendida_MW": 0.029999872, "_atendido": 99.99957195 },
  { "nodo": 36, "carga_MW": 0.026, "potencia_deslastrada_MW": 3.66603E-08, "costo_dolar_por_MW": 1.09981E-05, "potencia_atendida_MW": 0.025999963, "_atendido": 99.999859 },
  { "nodo": 37, "carga_MW": 0.026, "potencia_deslastrada_MW": 3.66604E-08, "costo_dolar_por_MW": 1.09981E-05, "potencia_atendida_MW": 0.025999963, "_atendido": 99.999859 },
  { "nodo": 39, "carga_MW": 0.024, "potencia_deslastrada_MW": 5.70324E-08, "costo_dolar_por_MW": 1.14065E-05, "potencia_atendida_MW": 0.023999943, "_atendido": 99.99976237 },
  { "nodo": 53, "carga_MW": 0.0043, "potencia_deslastrada_MW": 1.2868E-07, "costo_dolar_por_MW": 1.2868E-05, "potencia_atendida_MW": 0.004299871, "_atendido": 99.99700743 },
  { "nodo": 54, "carga_MW": 0.0264, "potencia_deslastrada_MW": 1.28428E-07, "costo_dolar_por_MW": 1.28428E-05, "potencia_atendida_MW": 0.026399872, "_atendido": 99.99951353 },
  { "nodo": 55, "carga_MW": 0.024, "potencia_deslastrada_MW": 3.66672E-08, "costo_dolar_por_MW": 1.10002E-05, "potencia_atendida_MW": 0.023999963, "_atendido": 99.99984722 },
  { "nodo": 14, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.005089977, "costo_dolar_por_MW": 1.526993019, "potencia_atendida_MW": 0.002910023, "_atendido": 36.37529089 },
  { "nodo": 16, "carga_MW": 0.0455, "potencia_deslastrada_MW": 0.045499979, "costo_dolar_por_MW": 9.099995755, "potencia_atendida_MW": 2.1224E-08, "_atendido": 4.66462E-05 },
  { "nodo": 17, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.024570708, "costo_dolar_por_MW": 7.371212387, "potencia_atendida_MW": 0.035429292, "_atendido": 59.04882007 },
  { "nodo": 18, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999989, "costo_dolar_por_MW": 5.999998939, "potencia_atendida_MW": 1.0611E-08, "_atendido": 1.76849E-05 },
  { "nodo": 20, "carga_MW": 0.001, "potencia_deslastrada_MW": 0.000999979, "costo_dolar_por_MW": 0.199995752, "potencia_atendida_MW": 2.12386E-08, "_atendido": 0.002123856 },
  { "nodo": 21, "carga_MW": 0.114, "potencia_deslastrada_MW": 0.110714649, "costo_dolar_por_MW": 33.21439469, "potencia_atendida_MW": 0.003285351, "_atendido": 2.881886881 },
  { "nodo": 10, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027998994, "costo_dolar_por_MW": 5.599798791, "potencia_atendida_MW": 1.00604E-06, "_atendido": 0.003593017 },
  { "nodo": 11, "carga_MW": 0.145, "potencia_deslastrada_MW": 0.144998996, "costo_dolar_por_MW": 28.99979925, "potencia_atendida_MW": 1.00373E-06, "_atendido": 0.000692227 },
  { "nodo": 12, "carga_MW": 0.145, "potencia_deslastrada_MW": 0.073058724, "costo_dolar_por_MW": 21.91761719, "potencia_atendida_MW": 0.071941276, "_atendido": 49.61467313 },
  { "nodo": 13, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.00421103, "costo_dolar_por_MW": 1.263308947, "potencia_atendida_MW": 0.00378897, "_atendido": 47.36212722 },
  { "nodo": 66, "carga_MW": 0.018, "potencia_deslastrada_MW": 0.017998992, "costo_dolar_por_MW": 3.599798483, "potencia_atendida_MW": 1.00758E-06, "_atendido": 0.005597691 },
  { "nodo": 68, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999498, "costo_dolar_por_MW": 2.799949805, "potencia_atendida_MW": 5.01948E-07, "_atendido": 0.001792673 },
  { "nodo": 69, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999498, "costo_dolar_por_MW": 2.799949805, "potencia_atendida_MW": 5.01949E-07, "_atendido": 0.001792675 },
  { "nodo": 61, "carga_MW": 1.244, "potencia_deslastrada_MW": 1.129499004, "costo_dolar_por_MW": 225.8998009, "potencia_atendida_MW": 0.114500996, "_atendido": 9.204260098 },
  { "nodo": 62, "carga_MW": 0.032, "potencia_deslastrada_MW": 0.031999923, "costo_dolar_por_MW": 3.19999233, "potencia_atendida_MW": 7.66973E-08, "_atendido": 0.000239679 },
  { "nodo": 64, "carga_MW": 0.227, "potencia_deslastrada_MW": 7.70094E-08, "costo_dolar_por_MW": 2.31028E-05, "potencia_atendida_MW": 0.226999923, "_atendido": 99.99996608 },
  { "nodo": 65, "carga_MW": 0.059, "potencia_deslastrada_MW": 0.058971121, "costo_dolar_por_MW": 11.79422424, "potencia_atendida_MW": 2.88788E-05, "_atendido": 0.048947077 },
  { "nodo": 22, "carga_MW": 0.0053, "potencia_deslastrada_MW": 8.86782E-07, "costo_dolar_por_MW": 0.000266035, "potencia_atendida_MW": 0.005299113, "_atendido": 99.98326826 },
  { "nodo": 24, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.026299833, "costo_dolar_por_MW": 5.259966669, "potencia_atendida_MW": 0.001700167, "_atendido": 6.072023771 },
  { "nodo": 28, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.006508494, "costo_dolar_por_MW": 1.301698896, "potencia_atendida_MW": 0.019491506, "_atendido": 74.96732893 },
  { "nodo": 29, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.025996575, "costo_dolar_por_MW": 2.599657525, "potencia_atendida_MW": 3.42475E-06, "_atendido": 0.013172102 },
  { "nodo": 33, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.002753213, "costo_dolar_por_MW": 0.825963761, "potencia_atendida_MW": 0.011246787, "_atendido": 80.33419615 },
  { "nodo": 34, "carga_MW": 0.0195, "potencia_deslastrada_MW": 0.019499603, "costo_dolar_por_MW": 1.949960258, "potencia_atendida_MW": 3.97421E-07, "_atendido": 0.002038055 },
  { "nodo": 35, "carga_MW": 0.006, "potencia_deslastrada_MW": 0.00599919, "costo_dolar_por_MW": 1.199838072, "potencia_atendida_MW": 8.09642E-07, "_atendido": 0.013494031 },
  { "nodo": 43, "carga_MW": 0.006, "potencia_deslastrada_MW": 0.003001225, "costo_dolar_por_MW": 0.300122542, "potencia_atendida_MW": 0.002998775, "_atendido": 49.97957632 },
  { "nodo": 26, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.007001002, "costo_dolar_por_MW": 0.700100208, "potencia_atendida_MW": 0.006998998, "_atendido": 49.99284227 },
  { "nodo": 27, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.007001002, "costo_dolar_por_MW": 0.700100208, "potencia_atendida_MW": 0.006998998, "_atendido": 49.99284227 },
  { "nodo": 40, "carga_MW": 0.024, "potencia_deslastrada_MW": 0.011745419, "costo_dolar_por_MW": 1.174541863, "potencia_atendida_MW": 0.012254581, "_atendido": 51.06075569 },
  { "nodo": 41, "carga_MW": 0.0012, "potencia_deslastrada_MW": 0.000859079, "costo_dolar_por_MW": 0.08590792, "potencia_atendida_MW": 0.000340921, "_atendido": 28.41006663 },
  { "nodo": 48, "carga_MW": 0.079, "potencia_deslastrada_MW": 6.96617E-07, "costo_dolar_por_MW": 0.000208985, "potencia_atendida_MW": 0.078999303, "_atendido": 99.99911821 },
  { "nodo": 49, "carga_MW": 0.3847, "potencia_deslastrada_MW": 0.271363281, "costo_dolar_por_MW": 27.13632815, "potencia_atendida_MW": 0.113336719, "_atendido": 29.46106538 },
  { "nodo": 51, "carga_MW": 0.0405, "potencia_deslastrada_MW": 0.033974624, "costo_dolar_por_MW": 6.794924792, "potencia_atendida_MW": 0.006525376, "_atendido": 16.1120396 },
  { "nodo": 52, "carga_MW": 0.0036, "potencia_deslastrada_MW": 1.19593E-06, "costo_dolar_por_MW": 0.00035878, "potencia_atendida_MW": 0.003598804, "_atendido": 99.96677963 },
  { "nodo": 50, "carga_MW": 0.3847, "potencia_deslastrada_MW": 0.288525, "costo_dolar_por_MW": 57.705, "potencia_atendida_MW": 0.096175, "_atendido": 25 },
  { "nodo": 59, "carga_MW": 0.1, "potencia_deslastrada_MW": 0.05, "costo_dolar_por_MW": 5, "potencia_atendida_MW": 0.05, "_atendido": 50 },
  { "nodo": 67, "carga_MW": 0.018, "potencia_deslastrada_MW": 0.018, "costo_dolar_por_MW": 5.4, "potencia_atendida_MW": 0, "_atendido": 0 }
];


let escenario3ConGdSinRd = [
  { "nodo": 6, "carga_MW": 0.0026, "potencia_deslastrada_MW": 0.001257508, "costo_dolar_por_MW": 0.377252327, "potencia_atendida_MW": 0.001342492, "_atendido": 51.63431704 },
  { "nodo": 7, "carga_MW": 0.0404, "potencia_deslastrada_MW": 0.013592349, "costo_dolar_por_MW": 4.077704561, "potencia_atendida_MW": 0.026807651, "_atendido": 66.35557293 },
  { "nodo": 8, "carga_MW": 0.075, "potencia_deslastrada_MW": 0.017753643, "costo_dolar_por_MW": 5.326092783, "potencia_atendida_MW": 0.057246357, "_atendido": 76.32847652 },
  { "nodo": 9, "carga_MW": 0.03, "potencia_deslastrada_MW": 0.015068085, "costo_dolar_por_MW": 1.506808494, "potencia_atendida_MW": 0.014931915, "_atendido": 49.77305021 },
  { "nodo": 36, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.011573453, "costo_dolar_por_MW": 3.472035966, "potencia_atendida_MW": 0.014426547, "_atendido": 55.48671838 },
  { "nodo": 37, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.011646553, "costo_dolar_por_MW": 3.493965897, "potencia_atendida_MW": 0.014353447, "_atendido": 55.20556542 },
  { "nodo": 39, "carga_MW": 0.024, "potencia_deslastrada_MW": 0.012401212, "costo_dolar_por_MW": 2.480242334, "potencia_atendida_MW": 0.011598788, "_atendido": 48.32828472 },
  { "nodo": 53, "carga_MW": 0.0043, "potencia_deslastrada_MW": 0.002130585, "costo_dolar_por_MW": 0.213058529, "potencia_atendida_MW": 0.002169415, "_atendido": 50.45150497 },
  { "nodo": 54, "carga_MW": 0.0264, "potencia_deslastrada_MW": 0.012702001, "costo_dolar_por_MW": 1.270200126, "potencia_atendida_MW": 0.013697999, "_atendido": 51.88635886 },
  { "nodo": 55, "carga_MW": 0.024, "potencia_deslastrada_MW": 0.008576025, "costo_dolar_por_MW": 2.572807406, "potencia_atendida_MW": 0.015423975, "_atendido": 64.26656381 },
  { "nodo": 14, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.008000006, "costo_dolar_por_MW": 2.400001787, "potencia_atendida_MW": -5.95769E-09, "_atendido": -7.44711E-05 },
  { "nodo": 16, "carga_MW": 0.0455, "potencia_deslastrada_MW": 0.045499994, "costo_dolar_por_MW": 9.099998819, "potencia_atendida_MW": 5.90319E-09, "_atendido": 1.2974E-05 },
  { "nodo": 17, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999994, "costo_dolar_por_MW": 17.99999826, "potencia_atendida_MW": 5.81649E-09, "_atendido": 9.69415E-06 },
  { "nodo": 18, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999989, "costo_dolar_por_MW": 5.999998865, "potencia_atendida_MW": 1.13523E-08, "_atendido": 1.89205E-05 },
  { "nodo": 20, "carga_MW": 0.001, "potencia_deslastrada_MW": 0.000999977, "costo_dolar_por_MW": 0.199995478, "potencia_atendida_MW": 2.26094E-08, "_atendido": 0.00226094 },
  { "nodo": 21, "carga_MW": 0.114, "potencia_deslastrada_MW": 0.114, "costo_dolar_por_MW": 34.19999995, "potencia_atendida_MW": 1.77772E-10, "_atendido": 1.55941E-07 },
  { "nodo": 10, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999993, "costo_dolar_por_MW": 5.599998548, "potencia_atendida_MW": 7.26235E-09, "_atendido": 2.5937E-05 },
  { "nodo": 11, "carga_MW": 0.145, "potencia_deslastrada_MW": 0.144999991, "costo_dolar_por_MW": 28.99999819, "potencia_atendida_MW": 9.03965E-09, "_atendido": 6.23424E-06 },
  { "nodo": 12, "carga_MW": 0.145, "potencia_deslastrada_MW": 0.144999991, "costo_dolar_por_MW": 43.49999743, "potencia_atendida_MW": 8.56274E-09, "_atendido": 5.90534E-06 },
  { "nodo": 13, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.007999955, "costo_dolar_por_MW": 2.399986378, "potencia_atendida_MW": 4.54073E-08, "_atendido": 0.000567591 },
  { "nodo": 66, "carga_MW": 0.018, "potencia_deslastrada_MW": 0.018, "costo_dolar_por_MW": 3.599999995, "potencia_atendida_MW": 2.59112E-11, "_atendido": 1.43951E-07 },
  { "nodo": 68, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999988, "costo_dolar_por_MW": 2.799998781, "potencia_atendida_MW": 1.21877E-08, "_atendido": 4.35275E-05 },
  { "nodo": 69, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999988, "costo_dolar_por_MW": 2.799998781, "potencia_atendida_MW": 1.21874E-08, "_atendido": 4.35265E-05 },
  { "nodo": 61, "carga_MW": 1.244, "potencia_deslastrada_MW": 1.56813E-06, "costo_dolar_por_MW": 0.000313627, "potencia_atendida_MW": 1.243998432, "_atendido": 99.99987394 },
  { "nodo": 62, "carga_MW": 0.032, "potencia_deslastrada_MW": 7.99121E-06, "costo_dolar_por_MW": 0.000799121, "potencia_atendida_MW": 0.031992009, "_atendido": 99.97502746 },
  { "nodo": 64, "carga_MW": 0.227, "potencia_deslastrada_MW": 8.72165E-07, "costo_dolar_por_MW": 0.00026165, "potencia_atendida_MW": 0.226999128, "_atendido": 99.99961579 },
  { "nodo": 65, "carga_MW": 0.059, "potencia_deslastrada_MW": 1.5747E-06, "costo_dolar_por_MW": 0.00031494, "potencia_atendida_MW": 0.058998425, "_atendido": 99.99733101 },
  { "nodo": 22, "carga_MW": 0.0053, "potencia_deslastrada_MW": 0.005300016, "costo_dolar_por_MW": 1.590004894, "potencia_atendida_MW": -1.63144E-08, "_atendido": -0.000307818 },
  { "nodo": 24, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999982, "costo_dolar_por_MW": 5.599996388, "potencia_atendida_MW": 1.80605E-08, "_atendido": 6.45018E-05 },
  { "nodo": 28, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.026000016, "costo_dolar_por_MW": 5.200003174, "potencia_atendida_MW": -1.58696E-08, "_atendido": -6.10369E-05 },
  { "nodo": 29, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.025999984, "costo_dolar_por_MW": 2.599998407, "potencia_atendida_MW": 1.59302E-08, "_atendido": 6.12699E-05 },
  { "nodo": 33, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.013999944, "costo_dolar_por_MW": 4.199983224, "potencia_atendida_MW": 5.59194E-08, "_atendido": 0.000399424 },
  { "nodo": 34, "carga_MW": 0.0195, "potencia_deslastrada_MW": 0.019499947, "costo_dolar_por_MW": 1.949994729, "potencia_atendida_MW": 5.27065E-08, "_atendido": 0.00027029 },
  { "nodo": 35, "carga_MW": 0.006, "potencia_deslastrada_MW": 0.006, "costo_dolar_por_MW": 1.199999992, "potencia_atendida_MW": 3.94241E-11, "_atendido": 6.57069E-07 },
  { "nodo": 43, "carga_MW": 0.006, "potencia_deslastrada_MW": 0.006, "costo_dolar_por_MW": 0.6, "potencia_atendida_MW": 4.93702E-15, "_atendido": 8.22837E-11 },
  { "nodo": 26, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.014, "costo_dolar_por_MW": 1.4, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 27, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.014, "costo_dolar_por_MW": 1.4, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 40, "carga_MW": 0.024, "potencia_deslastrada_MW": 0.024, "costo_dolar_por_MW": 2.40000005, "potencia_atendida_MW": -4.96118E-10, "_atendido": -2.06716E-06 },
  { "nodo": 41, "carga_MW": 0.0012, "potencia_deslastrada_MW": 0.001199999, "costo_dolar_por_MW": 0.11999994, "potencia_atendida_MW": 6.00279E-10, "_atendido": 5.00233E-05 },
  { "nodo": 48, "carga_MW": 0.079, "potencia_deslastrada_MW": 0.079000021, "costo_dolar_por_MW": 23.70000638, "potencia_atendida_MW": -2.12658E-08, "_atendido": -2.69187E-05 },
  { "nodo": 49, "carga_MW": 0.3847, "potencia_deslastrada_MW": 0.384699977, "costo_dolar_por_MW": 38.46999769, "potencia_atendida_MW": 2.3066E-08, "_atendido": 5.99584E-06 },
  { "nodo": 51, "carga_MW": 0.0405, "potencia_deslastrada_MW": 0.040499985, "costo_dolar_por_MW": 8.099997038, "potencia_atendida_MW": 1.48087E-08, "_atendido": 3.65647E-05 },
  { "nodo": 52, "carga_MW": 0.0036, "potencia_deslastrada_MW": 0.003600014, "costo_dolar_por_MW": 1.0800043, "potencia_atendida_MW": -1.43321E-08, "_atendido": -0.000398115 },
  { "nodo": 59, "carga_MW": 0.1, "potencia_deslastrada_MW": 0.1, "costo_dolar_por_MW": 10, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 67, "carga_MW": 0.018, "potencia_deslastrada_MW": 0.018, "costo_dolar_por_MW": 5.4, "potencia_atendida_MW": 0, "_atendido": 0 }
];



let escenario4ConGdYRd = [
  { "nodo": 6, "carga_MW": 0.0026, "potencia_deslastrada_MW": 3.67001E-08, "costo_dolar_por_MW": 1.101E-05, "potencia_atendida_MW": 0.002599963, "_atendido": 99.99858846 },
  { "nodo": 7, "carga_MW": 0.0404, "potencia_deslastrada_MW": 3.66639E-08, "costo_dolar_por_MW": 1.09992E-05, "potencia_atendida_MW": 0.040399963, "_atendido": 99.99990925 },
  { "nodo": 8, "carga_MW": 0.075, "potencia_deslastrada_MW": 3.66632E-08, "costo_dolar_por_MW": 1.09989E-05, "potencia_atendida_MW": 0.074999963, "_atendido": 99.99995112 },
  { "nodo": 9, "carga_MW": 0.03, "potencia_deslastrada_MW": 1.28414E-07, "costo_dolar_por_MW": 1.28414E-05, "potencia_atendida_MW": 0.029999872, "_atendido": 99.99957195 },
  { "nodo": 36, "carga_MW": 0.026, "potencia_deslastrada_MW": 3.66603E-08, "costo_dolar_por_MW": 1.09981E-05, "potencia_atendida_MW": 0.025999963, "_atendido": 99.999859 },
  { "nodo": 37, "carga_MW": 0.026, "potencia_deslastrada_MW": 3.66604E-08, "costo_dolar_por_MW": 1.09981E-05, "potencia_atendida_MW": 0.025999963, "_atendido": 99.999859 },
  { "nodo": 39, "carga_MW": 0.024, "potencia_deslastrada_MW": 5.70324E-08, "costo_dolar_por_MW": 1.14065E-05, "potencia_atendida_MW": 0.023999943, "_atendido": 99.99976237 },
  { "nodo": 53, "carga_MW": 0.0043, "potencia_deslastrada_MW": 1.2868E-07, "costo_dolar_por_MW": 1.2868E-05, "potencia_atendida_MW": 0.004299871, "_atendido": 99.99700743 },
  { "nodo": 54, "carga_MW": 0.0264, "potencia_deslastrada_MW": 1.28428E-07, "costo_dolar_por_MW": 1.28428E-05, "potencia_atendida_MW": 0.026399872, "_atendido": 99.99951353 },
  { "nodo": 55, "carga_MW": 0.024, "potencia_deslastrada_MW": 3.66672E-08, "costo_dolar_por_MW": 1.10002E-05, "potencia_atendida_MW": 0.023999963, "_atendido": 99.99984722 },
  { "nodo": 14, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.005089977, "costo_dolar_por_MW": 1.526992987, "potencia_atendida_MW": 0.002910023, "_atendido": 36.3752922 },
  { "nodo": 16, "carga_MW": 0.0455, "potencia_deslastrada_MW": 0.045499979, "costo_dolar_por_MW": 9.099995755, "potencia_atendida_MW": 2.1224E-08, "_atendido": 4.66462E-05 },
  { "nodo": 17, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.024570709, "costo_dolar_por_MW": 7.371212627, "potencia_atendida_MW": 0.035429291, "_atendido": 59.04881874 },
  { "nodo": 18, "carga_MW": 0.06, "potencia_deslastrada_MW": 0.059999989, "costo_dolar_por_MW": 5.999998939, "potencia_atendida_MW": 1.0611E-08, "_atendido": 1.76849E-05 },
  { "nodo": 20, "carga_MW": 0.001, "potencia_deslastrada_MW": 0.000999979, "costo_dolar_por_MW": 0.199995752, "potencia_atendida_MW": 2.12386E-08, "_atendido": 0.002123856 },
  { "nodo": 21, "carga_MW": 0.114, "potencia_deslastrada_MW": 0.110714648, "costo_dolar_por_MW": 33.21439448, "potencia_atendida_MW": 0.003285352, "_atendido": 2.881887497 },
  { "nodo": 10, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027998994, "costo_dolar_por_MW": 5.599798791, "potencia_atendida_MW": 1.00604E-06, "_atendido": 0.003593017 },
  { "nodo": 11, "carga_MW": 0.145, "potencia_deslastrada_MW": 0.144998996, "costo_dolar_por_MW": 28.99979925, "potencia_atendida_MW": 1.00373E-06, "_atendido": 0.000692227 },
  { "nodo": 12, "carga_MW": 0.145, "potencia_deslastrada_MW": 0.073058724, "costo_dolar_por_MW": 21.91761719, "potencia_atendida_MW": 0.071941276, "_atendido": 49.61467314 },
  { "nodo": 13, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.00421103, "costo_dolar_por_MW": 1.263308947, "potencia_atendida_MW": 0.00378897, "_atendido": 47.36212721 },
  { "nodo": 66, "carga_MW": 0.018, "potencia_deslastrada_MW": 0.017998992, "costo_dolar_por_MW": 3.599798483, "potencia_atendida_MW": 1.00758E-06, "_atendido": 0.005597691 },
  { "nodo": 68, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999498, "costo_dolar_por_MW": 2.799949805, "potencia_atendida_MW": 5.01948E-07, "_atendido": 0.001792673 },
  { "nodo": 69, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.027999498, "costo_dolar_por_MW": 2.799949805, "potencia_atendida_MW": 5.01949E-07, "_atendido": 0.001792675 },
  { "nodo": 61, "carga_MW": 1.244, "potencia_deslastrada_MW": 6.80248E-07, "costo_dolar_por_MW": 0.00013605, "potencia_atendida_MW": 1.24399932, "_atendido": 99.99994532 },
  { "nodo": 62, "carga_MW": 0.032, "potencia_deslastrada_MW": 3.43145E-06, "costo_dolar_por_MW": 0.000343145, "potencia_atendida_MW": 0.031996569, "_atendido": 99.98927671 },
  { "nodo": 64, "carga_MW": 0.227, "potencia_deslastrada_MW": 3.78128E-07, "costo_dolar_por_MW": 0.000113438, "potencia_atendida_MW": 0.226999622, "_atendido": 99.99983342 },
  { "nodo": 65, "carga_MW": 0.059, "potencia_deslastrada_MW": 6.81686E-07, "costo_dolar_por_MW": 0.000136337, "potencia_atendida_MW": 0.058999318, "_atendido": 99.9988446 },
  { "nodo": 22, "carga_MW": 0.0053, "potencia_deslastrada_MW": 8.86782E-07, "costo_dolar_por_MW": 0.000266035, "potencia_atendida_MW": 0.005299113, "_atendido": 99.98326826 },
  { "nodo": 24, "carga_MW": 0.028, "potencia_deslastrada_MW": 0.026299833, "costo_dolar_por_MW": 5.259966669, "potencia_atendida_MW": 0.001700167, "_atendido": 6.07202377 },
  { "nodo": 28, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.006508494, "costo_dolar_por_MW": 1.301698896, "potencia_atendida_MW": 0.019491506, "_atendido": 74.96732893 },
  { "nodo": 29, "carga_MW": 0.026, "potencia_deslastrada_MW": 0.025996575, "costo_dolar_por_MW": 2.599657525, "potencia_atendida_MW": 3.42475E-06, "_atendido": 0.013172102 },
  { "nodo": 33, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.002753213, "costo_dolar_por_MW": 0.825963761, "potencia_atendida_MW": 0.011246787, "_atendido": 80.33419616 },
  { "nodo": 34, "carga_MW": 0.0195, "potencia_deslastrada_MW": 0.019499603, "costo_dolar_por_MW": 1.949960258, "potencia_atendida_MW": 3.97421E-07, "_atendido": 0.002038055 },
  { "nodo": 35, "carga_MW": 0.006, "potencia_deslastrada_MW": 0.00599919, "costo_dolar_por_MW": 1.199838072, "potencia_atendida_MW": 8.09642E-07, "_atendido": 0.013494031 },
  { "nodo": 43, "carga_MW": 0.006, "potencia_deslastrada_MW": 0.003001225, "costo_dolar_por_MW": 0.300122542, "potencia_atendida_MW": 0.002998775, "_atendido": 49.97957632 },
  { "nodo": 26, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.007001002, "costo_dolar_por_MW": 0.700100208, "potencia_atendida_MW": 0.006998998, "_atendido": 49.99284227 },
  { "nodo": 27, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.007001002, "costo_dolar_por_MW": 0.700100208, "potencia_atendida_MW": 0.006998998, "_atendido": 49.99284227 },
  { "nodo": 40, "carga_MW": 0.024, "potencia_deslastrada_MW": 0.011745419, "costo_dolar_por_MW": 1.174541863, "potencia_atendida_MW": 0.012254581, "_atendido": 51.06075569 },
  { "nodo": 41, "carga_MW": 0.0012, "potencia_deslastrada_MW": 0.000859079, "costo_dolar_por_MW": 0.08590792, "potencia_atendida_MW": 0.000340921, "_atendido": 28.41006663 },
  { "nodo": 48, "carga_MW": 0.079, "potencia_deslastrada_MW": 6.96617E-07, "costo_dolar_por_MW": 0.000208985, "potencia_atendida_MW": 0.078999303, "_atendido": 99.99911821 },
  { "nodo": 49, "carga_MW": 0.3847, "potencia_deslastrada_MW": 0.271363281, "costo_dolar_por_MW": 27.13632815, "potencia_atendida_MW": 0.113336719, "_atendido": 29.46106538 },
  { "nodo": 51, "carga_MW": 0.0405, "potencia_deslastrada_MW": 0.033974624, "costo_dolar_por_MW": 6.794924792, "potencia_atendida_MW": 0.006525376, "_atendido": 16.1120396 },
  { "nodo": 52, "carga_MW": 0.0036, "potencia_deslastrada_MW": 1.19593E-06, "costo_dolar_por_MW": 0.00035878, "potencia_atendida_MW": 0.003598804, "_atendido": 99.96677963 },
  { "nodo": 59, "carga_MW": 0.1, "potencia_deslastrada_MW": 0.05, "costo_dolar_por_MW": 5, "potencia_atendida_MW": 0.05, "_atendido": 50 },
  { "nodo": 67, "carga_MW": 0.018, "potencia_deslastrada_MW": 0.018, "costo_dolar_por_MW": 5.4, "potencia_atendida_MW": 0, "_atendido": 0 }
];
    
 
    let elements ={escenario1ConSinRdNiGd,escenario2ConRdSinGd,escenario3ConGdSinRd,escenario4ConGdYRd}

    this.datos.emit({generadores,lineas,nodos,escenarios,elements,caso})
   }

   if(caso=="74"){

    let obj = {
      "metrica_lineas_generadores_atacados": {
        "lineas": [
          {
            "linea": "23 - 24",
            "porcentaje": 94.6154
          },
          {
            "linea": "26 - 27",
            "porcentaje": 90
          },
          {
            "linea": "32 - 33",
            "porcentaje": 67.6923
          },
          {
            "linea": "46 - 47",
            "porcentaje": 67.6923
          },
          {
            "linea": "43 - 44",
            "porcentaje": 66.9231
          },
          {
            "linea": "55 - 56",
            "porcentaje": 60
          },
          {
            "linea": "68 - 69",
            "porcentaje": 53.0769
          },
          {
            "linea": "36 - 37",
            "porcentaje": 51.5385
          }
        ],
        "generadores": [
          {
            "generador": "Nodo 1",
            "porcentaje": 100
          }
        ]
      },
      "metrica_lineas_con_sobrecarga": [
        {
          "linea": "1-2",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "2-3",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "3-4",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "4-5",
          "porcentaje_sobrecarga": "Inf"
        },
        {
          "linea": "5-6",
          "porcentaje_sobrecarga": "Inf"
        }
      ],
      "tiempo_ejecucion": 2929.637515
    }
    
   
    let generadores = {
      "generators": [
        { "nodo": 1, "PG_MW": 0, "QG_MW": 0, "Q_MAX_MVAR": 10, "Q_MIN_MVAR": -10, "P_MAX_MW": 10, "costo_marginal_dolar_per_MW": 20 }
      ]
    };
    
    
    
    let lineas = {
      "lines": [
        { "I": 1, "J": 2, "flujo_P_I_a_J_MW": 3.304663968, "flujo_Q_I_a_J_MW": 2.231007027, "flujo_P_J_a_I_MW": -3.297069623, "flujo_Q_J_a_I_MW": -2.225252142 },
        { "I": 2, "J": 3, "flujo_P_I_a_J_MW": 3.104069623, "flujo_Q_I_a_J_MW": 2.095252142, "flujo_P_J_a_I_MW": -3.097500886, "flujo_Q_J_a_I_MW": -2.090267356 },
        { "I": 3, "J": 4, "flujo_P_I_a_J_MW": 3.096500886, "flujo_Q_I_a_J_MW": 2.089267356, "flujo_P_J_a_I_MW": -3.091484888, "flujo_Q_J_a_I_MW": -2.085461715 },
        { "I": 4, "J": 5, "flujo_P_I_a_J_MW": 3.088484888, "flujo_Q_I_a_J_MW": 2.083461715, "flujo_P_J_a_I_MW": -3.083478586, "flujo_Q_J_a_I_MW": -2.07966343 },
        { "I": 5, "J": 6, "flujo_P_I_a_J_MW": 2.975478586, "flujo_Q_I_a_J_MW": 2.00666343, "flujo_P_J_a_I_MW": -2.971584974, "flujo_Q_J_a_I_MW": -2.003710774 },
        { "I": 6, "J": 7, "flujo_P_I_a_J_MW": 2.966584974, "flujo_Q_I_a_J_MW": 2.000710774, "flujo_P_J_a_I_MW": -2.962704004, "flujo_Q_J_a_I_MW": -1.997767705 },
        { "I": 7, "J": 8, "flujo_P_I_a_J_MW": 2.944704004, "flujo_Q_I_a_J_MW": 1.985767705, "flujo_P_J_a_I_MW": -2.941626057, "flujo_Q_J_a_I_MW": -1.983435282 },
        { "I": 8, "J": 9, "flujo_P_I_a_J_MW": 2.925626057, "flujo_Q_I_a_J_MW": 1.972435282, "flujo_P_J_a_I_MW": -2.922581705, "flujo_Q_J_a_I_MW": -1.970128316 },
        { "I": 9, "J": 10, "flujo_P_I_a_J_MW": 2.846581705, "flujo_Q_I_a_J_MW": 1.919128316, "flujo_P_J_a_I_MW": -2.84369341, "flujo_Q_J_a_I_MW": -1.916939608 },
        { "I": 10, "J": 11, "flujo_P_I_a_J_MW": 2.79169341, "flujo_Q_I_a_J_MW": 1.881939608, "flujo_P_J_a_I_MW": -2.788909731, "flujo_Q_J_a_I_MW": -1.879830177 },
        { "I": 11, "J": 12, "flujo_P_I_a_J_MW": 2.742909731, "flujo_Q_I_a_J_MW": 1.848830177, "flujo_P_J_a_I_MW": -2.740217117, "flujo_Q_J_a_I_MW": -1.846789753 },
        { "I": 12, "J": 13, "flujo_P_I_a_J_MW": 2.617217117, "flujo_Q_I_a_J_MW": 1.763789753, "flujo_P_J_a_I_MW": -2.614760894, "flujo_Q_J_a_I_MW": -1.761928463 },
        { "I": 13, "J": 14, "flujo_P_I_a_J_MW": 2.568760894, "flujo_Q_I_a_J_MW": 1.730928463, "flujo_P_J_a_I_MW": -2.566390336, "flujo_Q_J_a_I_MW": -1.729132088 },
        { "I": 14, "J": 15, "flujo_P_I_a_J_MW": 2.559390336, "flujo_Q_I_a_J_MW": 1.725132088, "flujo_P_J_a_I_MW": -2.55703208, "flujo_Q_J_a_I_MW": -1.723345036 },
        { "I": 15, "J": 16, "flujo_P_I_a_J_MW": 2.48703208, "flujo_Q_I_a_J_MW": 1.676345036, "flujo_P_J_a_I_MW": -2.483442322, "flujo_Q_J_a_I_MW": -1.673627628 },
        { "I": 16, "J": 17, "flujo_P_I_a_J_MW": 2.413442322, "flujo_Q_I_a_J_MW": 1.626627628, "flujo_P_J_a_I_MW": -2.410051852, "flujo_Q_J_a_I_MW": -1.624061078 },
        { "I": 17, "J": 18, "flujo_P_I_a_J_MW": 2.406051852, "flujo_Q_I_a_J_MW": 1.621061078, "flujo_P_J_a_I_MW": -2.402673023, "flujo_Q_J_a_I_MW": -1.618503342 },
        { "I": 18, "J": 19, "flujo_P_I_a_J_MW": 2.353673023, "flujo_Q_I_a_J_MW": 1.585503342, "flujo_P_J_a_I_MW": -2.350430595, "flujo_Q_J_a_I_MW": -1.583048858 },
        { "I": 19, "J": 20, "flujo_P_I_a_J_MW": 2.293430595, "flujo_Q_I_a_J_MW": 1.545048858, "flujo_P_J_a_I_MW": -2.290754711, "flujo_Q_J_a_I_MW": -1.543023685 },
        { "I": 20, "J": 21, "flujo_P_I_a_J_MW": 2.172754711, "flujo_Q_I_a_J_MW": 1.464023685, "flujo_P_J_a_I_MW": -2.170346907, "flujo_Q_J_a_I_MW": -1.462201402 },
        { "I": 21, "J": 22, "flujo_P_I_a_J_MW": 2.151346907, "flujo_Q_I_a_J_MW": 1.449201402, "flujo_P_J_a_I_MW": -2.148981279, "flujo_Q_J_a_I_MW": -1.447411039 },
        { "I": 22, "J": 23, "flujo_P_I_a_J_MW": 2.134981279, "flujo_Q_I_a_J_MW": 1.437411039, "flujo_P_J_a_I_MW": -2.132646952, "flujo_Q_J_a_I_MW": -1.435644365 },
        { "I": 23, "J": 24, "flujo_P_I_a_J_MW": 2.124646952, "flujo_Q_I_a_J_MW": 1.429644365, "flujo_P_J_a_I_MW": -2.121732991, "flujo_Q_J_a_I_MW": -1.42743734 },
        { "I": 24, "J": 25, "flujo_P_I_a_J_MW": 1.911732991, "flujo_Q_I_a_J_MW": 1.28643734, "flujo_P_J_a_I_MW": -1.910052985, "flujo_Q_J_a_I_MW": -1.285163336 },
        { "I": 25, "J": 26, "flujo_P_I_a_J_MW": 1.774052985, "flujo_Q_I_a_J_MW": 1.193163336, "flujo_P_J_a_I_MW": -1.772241849, "flujo_Q_J_a_I_MW": -1.191790898 },
        { "I": 26, "J": 27, "flujo_P_I_a_J_MW": 1.583241849, "flujo_Q_I_a_J_MW": 1.064790898, "flujo_P_J_a_I_MW": -1.581796328, "flujo_Q_J_a_I_MW": -1.063695514 },
        { "I": 27, "J": 28, "flujo_P_I_a_J_MW": 1.565796328, "flujo_Q_I_a_J_MW": 1.053695514, "flujo_P_J_a_I_MW": -1.564379265, "flujo_Q_J_a_I_MW": -1.052621695 },
        { "I": 28, "J": 29, "flujo_P_I_a_J_MW": 1.490379265, "flujo_Q_I_a_J_MW": 1.003621695, "flujo_P_J_a_I_MW": -1.489552851, "flujo_Q_J_a_I_MW": -1.00299545 },
        { "I": 29, "J": 30, "flujo_P_I_a_J_MW": 1.372552851, "flujo_Q_I_a_J_MW": 0.92399545, "flujo_P_J_a_I_MW": -1.371851266, "flujo_Q_J_a_I_MW": -0.923463799 },
        { "I": 30, "J": 31, "flujo_P_I_a_J_MW": 1.365851266, "flujo_Q_I_a_J_MW": 0.919463799, "flujo_P_J_a_I_MW": -1.364814063, "flujo_Q_J_a_I_MW": -0.918676872 },
        { "I": 31, "J": 32, "flujo_P_I_a_J_MW": 1.239814063, "flujo_Q_I_a_J_MW": 0.834676872, "flujo_P_J_a_I_MW": -1.23901367, "flujo_Q_J_a_I_MW": -0.834071116 },
        { "I": 32, "J": 33, "flujo_P_I_a_J_MW": 1.22201367, "flujo_Q_I_a_J_MW": 0.823071116, "flujo_P_J_a_I_MW": -1.22131793, "flujo_Q_J_a_I_MW": -0.822543514 },
        { "I": 33, "J": 34, "flujo_P_I_a_J_MW": 1.21731793, "flujo_Q_I_a_J_MW": 0.819543514, "flujo_P_J_a_I_MW": -1.216490616, "flujo_Q_J_a_I_MW": -0.818915829 },
        { "I": 34, "J": 35, "flujo_P_I_a_J_MW": 1.197490616, "flujo_Q_I_a_J_MW": 0.805915829, "flujo_P_J_a_I_MW": -1.196625841, "flujo_Q_J_a_I_MW": -0.805261205 },
        { "I": 35, "J": 36, "flujo_P_I_a_J_MW": 1.165625841, "flujo_Q_I_a_J_MW": 0.784261205, "flujo_P_J_a_I_MW": -1.164805383, "flujo_Q_J_a_I_MW": -0.783640126 },
        { "I": 36, "J": 37, "flujo_P_I_a_J_MW": 1.124805383, "flujo_Q_I_a_J_MW": 0.756640126, "flujo_P_J_a_I_MW": -1.124009104, "flujo_Q_J_a_I_MW": -0.756037982 },
        { "I": 37, "J": 38, "flujo_P_I_a_J_MW": 1.113009104, "flujo_Q_I_a_J_MW": 0.749037982, "flujo_P_J_a_I_MW": -1.112228076, "flujo_Q_J_a_I_MW": -0.748447369 },
        { "I": 38, "J": 39, "flujo_P_I_a_J_MW": 0.895228076, "flujo_Q_I_a_J_MW": 0.602447369, "flujo_P_J_a_I_MW": -0.894777477, "flujo_Q_J_a_I_MW": -0.6021055 },
        { "I": 39, "J": 40, "flujo_P_I_a_J_MW": 0.857777477, "flujo_Q_I_a_J_MW": 0.5771055, "flujo_P_J_a_I_MW": -0.85736342, "flujo_Q_J_a_I_MW": -0.576791354 },
        { "I": 40, "J": 41, "flujo_P_I_a_J_MW": 0.74336342, "flujo_Q_I_a_J_MW": 0.499791354, "flujo_P_J_a_I_MW": -0.743103528, "flujo_Q_J_a_I_MW": -0.499594269 },
        { "I": 41, "J": 42, "flujo_P_I_a_J_MW": 0.731103528, "flujo_Q_I_a_J_MW": 0.491594269, "flujo_P_J_a_I_MW": -0.73085194, "flujo_Q_J_a_I_MW": -0.491403482 },
        { "I": 42, "J": 43, "flujo_P_I_a_J_MW": 0.67585194, "flujo_Q_I_a_J_MW": 0.454403482, "flujo_P_J_a_I_MW": -0.67550652, "flujo_Q_J_a_I_MW": -0.454141728 },
        { "I": 43, "J": 44, "flujo_P_I_a_J_MW": 0.60350652, "flujo_Q_I_a_J_MW": 0.406141728, "flujo_P_J_a_I_MW": -0.603284574, "flujo_Q_J_a_I_MW": -0.405973717 },
        { "I": 44, "J": 45, "flujo_P_I_a_J_MW": 0.563284574, "flujo_Q_I_a_J_MW": 0.378973717, "flujo_P_J_a_I_MW": -0.563073636, "flujo_Q_J_a_I_MW": -0.378813954 },
        { "I": 45, "J": 46, "flujo_P_I_a_J_MW": 0.559073636, "flujo_Q_I_a_J_MW": 0.375813954, "flujo_P_J_a_I_MW": -0.558853903, "flujo_Q_J_a_I_MW": -0.375647514 },
        { "I": 46, "J": 47, "flujo_P_I_a_J_MW": 0.517853903, "flujo_Q_I_a_J_MW": 0.348647514, "flujo_P_J_a_I_MW": -0.517660458, "flujo_Q_J_a_I_MW": -0.34850058 },
        { "I": 47, "J": 48, "flujo_P_I_a_J_MW": 0.475660458, "flujo_Q_I_a_J_MW": 0.32050058, "flujo_P_J_a_I_MW": -0.475492577, "flujo_Q_J_a_I_MW": -0.320373181 },
        { "I": 48, "J": 49, "flujo_P_I_a_J_MW": 0.426492577, "flujo_Q_I_a_J_MW": 0.287373181, "flujo_P_J_a_I_MW": -0.426391516, "flujo_Q_J_a_I_MW": -0.287296787 },
        { "I": 49, "J": 50, "flujo_P_I_a_J_MW": 0.383391516, "flujo_Q_I_a_J_MW": 0.258296787, "flujo_P_J_a_I_MW": -0.383308074, "flujo_Q_J_a_I_MW": -0.258233479 },
        { "I": 50, "J": 51, "flujo_P_I_a_J_MW": 0.322308074, "flujo_Q_I_a_J_MW": 0.217233479, "flujo_P_J_a_I_MW": -0.322219211, "flujo_Q_J_a_I_MW": -0.217166113 },
        { "I": 51, "J": 52, "flujo_P_I_a_J_MW": 0.276219211, "flujo_Q_I_a_J_MW": 0.186166113, "flujo_P_J_a_I_MW": -0.276156726, "flujo_Q_J_a_I_MW": -0.186118721 },
        { "I": 52, "J": 53, "flujo_P_I_a_J_MW": 0.266156726, "flujo_Q_I_a_J_MW": 0.179118721, "flujo_P_J_a_I_MW": -0.266097429, "flujo_Q_J_a_I_MW": -0.179073805 },
        { "I": 53, "J": 54, "flujo_P_I_a_J_MW": 0.257097429, "flujo_Q_I_a_J_MW": 0.173073805, "flujo_P_J_a_I_MW": -0.257042065, "flujo_Q_J_a_I_MW": -0.173031868 },
        { "I": 54, "J": 55, "flujo_P_I_a_J_MW": 0.192042065, "flujo_Q_I_a_J_MW": 0.129031868, "flujo_P_J_a_I_MW": -0.192011197, "flujo_Q_J_a_I_MW": -0.129008486 },
        { "I": 55, "J": 56, "flujo_P_I_a_J_MW": 0.147011197, "flujo_Q_I_a_J_MW": 0.099008486, "flujo_P_J_a_I_MW": -0.147002122, "flujo_Q_J_a_I_MW": -0.099001608 },
        { "I": 56, "J": 57, "flujo_P_I_a_J_MW": 0.071002122, "flujo_Q_I_a_J_MW": 0.048001608, "flujo_P_J_a_I_MW": -0.071, "flujo_Q_J_a_I_MW": -0.048 },
        { "I": 1, "J": 58, "flujo_P_I_a_J_MW": 2.964450183, "flujo_Q_I_a_J_MW": 1.994427702, "flujo_P_J_a_I_MW": -2.94324434, "flujo_Q_J_a_I_MW": -1.978359791 },
        { "I": 58, "J": 59, "flujo_P_I_a_J_MW": 2.54924434, "flujo_Q_I_a_J_MW": 1.713359791, "flujo_P_J_a_I_MW": -2.543538245, "flujo_Q_J_a_I_MW": -1.709038671 },
        { "I": 59, "J": 60, "flujo_P_I_a_J_MW": 2.309538245, "flujo_Q_I_a_J_MW": 1.552038671, "flujo_P_J_a_I_MW": -2.304833323, "flujo_Q_J_a_I_MW": -1.54847572 },
        { "I": 60, "J": 61, "flujo_P_I_a_J_MW": 2.077833323, "flujo_Q_I_a_J_MW": 1.39547572, "flujo_P_J_a_I_MW": -2.074010365, "flujo_Q_J_a_I_MW": -1.392580665 },
        { "I": 61, "J": 62, "flujo_P_I_a_J_MW": 1.849010365, "flujo_Q_I_a_J_MW": 1.241580665, "flujo_P_J_a_I_MW": -1.845971772, "flujo_Q_J_a_I_MW": -1.239279594 },
        { "I": 62, "J": 63, "flujo_P_I_a_J_MW": 1.653971772, "flujo_Q_I_a_J_MW": 1.110279594, "flujo_P_J_a_I_MW": -1.651532536, "flujo_Q_J_a_I_MW": -1.108432406 },
        { "I": 63, "J": 64, "flujo_P_I_a_J_MW": 1.533532536, "flujo_Q_I_a_J_MW": 1.029432406, "flujo_P_J_a_I_MW": -1.531429159, "flujo_Q_J_a_I_MW": -1.027839558 },
        { "I": 64, "J": 65, "flujo_P_I_a_J_MW": 1.113429159, "flujo_Q_I_a_J_MW": 0.746839558, "flujo_P_J_a_I_MW": -1.112317723, "flujo_Q_J_a_I_MW": -0.745997887 },
        { "I": 65, "J": 66, "flujo_P_I_a_J_MW": 0.878317723, "flujo_Q_I_a_J_MW": 0.588997887, "flujo_P_J_a_I_MW": -0.877624774, "flujo_Q_J_a_I_MW": -0.58847313 },
        { "I": 66, "J": 67, "flujo_P_I_a_J_MW": 0.656624774, "flujo_Q_I_a_J_MW": 0.44047313, "flujo_P_J_a_I_MW": -0.656236773, "flujo_Q_J_a_I_MW": -0.440179304 },
        { "I": 67, "J": 68, "flujo_P_I_a_J_MW": 0.458236773, "flujo_Q_I_a_J_MW": 0.307179304, "flujo_P_J_a_I_MW": -0.458047659, "flujo_Q_J_a_I_MW": -0.307036091 },
        { "I": 68, "J": 69, "flujo_P_I_a_J_MW": 0.209047659, "flujo_Q_I_a_J_MW": 0.140036091, "flujo_P_J_a_I_MW": -0.209008284, "flujo_Q_J_a_I_MW": -0.140006273 },
        { "I": 69, "J": 70, "flujo_P_I_a_J_MW": 0.096008284, "flujo_Q_I_a_J_MW": 0.064006273, "flujo_P_J_a_I_MW": -0.096, "flujo_Q_J_a_I_MW": -0.064 },
        { "I": 1, "J": 71, "flujo_P_I_a_J_MW": 0.493022168, "flujo_Q_I_a_J_MW": 0.331532613, "flujo_P_J_a_I_MW": -0.49163911, "flujo_Q_J_a_I_MW": -0.330484453 },
        { "I": 71, "J": 72, "flujo_P_I_a_J_MW": 0.40063911, "flujo_Q_I_a_J_MW": 0.269484453, "flujo_P_J_a_I_MW": -0.400179608, "flujo_Q_J_a_I_MW": -0.269136192 },
        { "I": 72, "J": 73, "flujo_P_I_a_J_MW": 0.284179608, "flujo_Q_I_a_J_MW": 0.191136192, "flujo_P_J_a_I_MW": -0.284017464, "flujo_Q_J_a_I_MW": -0.191013241 },
        { "I": 73, "J": 74, "flujo_P_I_a_J_MW": 0.116017464, "flujo_Q_I_a_J_MW": 0.078013241, "flujo_P_J_a_I_MW": -0.116, "flujo_Q_J_a_I_MW": -0.078 }
      ]
    };
    
    
    
    let nodos = {
      "nodes": [
        { "nodo": 1, "tipo_de_nodo": 3, "P_MW": 0, "Q_MVAR": 0, "V_max": 1, "V_min": 1 },
        { "nodo": 2, "tipo_de_nodo": 1, "P_MW": 0.193, "Q_MVAR": 0.13, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 3, "tipo_de_nodo": 1, "P_MW": 0.001, "Q_MVAR": 0.001, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 4, "tipo_de_nodo": 1, "P_MW": 0.003, "Q_MVAR": 0.002, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 5, "tipo_de_nodo": 1, "P_MW": 0.108, "Q_MVAR": 0.073, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 6, "tipo_de_nodo": 1, "P_MW": 0.005, "Q_MVAR": 0.003, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 7, "tipo_de_nodo": 1, "P_MW": 0.018, "Q_MVAR": 0.012, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 8, "tipo_de_nodo": 1, "P_MW": 0.016, "Q_MVAR": 0.011, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 9, "tipo_de_nodo": 1, "P_MW": 0.076, "Q_MVAR": 0.051, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 10, "tipo_de_nodo": 1, "P_MW": 0.052, "Q_MVAR": 0.035, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 11, "tipo_de_nodo": 1, "P_MW": 0.046, "Q_MVAR": 0.031, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 12, "tipo_de_nodo": 1, "P_MW": 0.123, "Q_MVAR": 0.083, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 13, "tipo_de_nodo": 1, "P_MW": 0.046, "Q_MVAR": 0.031, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 14, "tipo_de_nodo": 1, "P_MW": 0.007, "Q_MVAR": 0.004, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 15, "tipo_de_nodo": 1, "P_MW": 0.07, "Q_MVAR": 0.047, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 16, "tipo_de_nodo": 1, "P_MW": 0.07, "Q_MVAR": 0.047, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 17, "tipo_de_nodo": 1, "P_MW": 0.004, "Q_MVAR": 0.003, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 18, "tipo_de_nodo": 1, "P_MW": 0.049, "Q_MVAR": 0.033, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 19, "tipo_de_nodo": 1, "P_MW": 0.057, "Q_MVAR": 0.038, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 20, "tipo_de_nodo": 1, "P_MW": 0.118, "Q_MVAR": 0.079, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 21, "tipo_de_nodo": 1, "P_MW": 0.019, "Q_MVAR": 0.013, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 22, "tipo_de_nodo": 1, "P_MW": 0.014, "Q_MVAR": 0.01, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 23, "tipo_de_nodo": 1, "P_MW": 0.008, "Q_MVAR": 0.006, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 24, "tipo_de_nodo": 1, "P_MW": 0.21, "Q_MVAR": 0.141, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 25, "tipo_de_nodo": 1, "P_MW": 0.136, "Q_MVAR": 0.092, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 26, "tipo_de_nodo": 1, "P_MW": 0.189, "Q_MVAR": 0.127, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 27, "tipo_de_nodo": 1, "P_MW": 0.016, "Q_MVAR": 0.01, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 28, "tipo_de_nodo": 1, "P_MW": 0.074, "Q_MVAR": 0.049, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 29, "tipo_de_nodo": 1, "P_MW": 0.117, "Q_MVAR": 0.079, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 30, "tipo_de_nodo": 1, "P_MW": 0.006, "Q_MVAR": 0.004, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 31, "tipo_de_nodo": 1, "P_MW": 0.125, "Q_MVAR": 0.084, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 32, "tipo_de_nodo": 1, "P_MW": 0.017, "Q_MVAR": 0.011, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 33, "tipo_de_nodo": 1, "P_MW": 0.004, "Q_MVAR": 0.003, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 34, "tipo_de_nodo": 1, "P_MW": 0.019, "Q_MVAR": 0.013, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 35, "tipo_de_nodo": 1, "P_MW": 0.031, "Q_MVAR": 0.021, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 36, "tipo_de_nodo": 1, "P_MW": 0.04, "Q_MVAR": 0.027, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 37, "tipo_de_nodo": 1, "P_MW": 0.011, "Q_MVAR": 0.007, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 38, "tipo_de_nodo": 1, "P_MW": 0.217, "Q_MVAR": 0.146, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 39, "tipo_de_nodo": 1, "P_MW": 0.037, "Q_MVAR": 0.025, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 40, "tipo_de_nodo": 1, "P_MW": 0.114, "Q_MVAR": 0.077, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 41, "tipo_de_nodo": 1, "P_MW": 0.012, "Q_MVAR": 0.008, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 42, "tipo_de_nodo": 1, "P_MW": 0.055, "Q_MVAR": 0.037, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 43, "tipo_de_nodo": 1, "P_MW": 0.072, "Q_MVAR": 0.048, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 44, "tipo_de_nodo": 1, "P_MW": 0.04, "Q_MVAR": 0.027, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 45, "tipo_de_nodo": 1, "P_MW": 0.004, "Q_MVAR": 0.003, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 46, "tipo_de_nodo": 1, "P_MW": 0.041, "Q_MVAR": 0.027, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 47, "tipo_de_nodo": 1, "P_MW": 0.042, "Q_MVAR": 0.028, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 48, "tipo_de_nodo": 1, "P_MW": 0.049, "Q_MVAR": 0.033, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 49, "tipo_de_nodo": 1, "P_MW": 0.043, "Q_MVAR": 0.029, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 50, "tipo_de_nodo": 1, "P_MW": 0.061, "Q_MVAR": 0.041, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 51, "tipo_de_nodo": 1, "P_MW": 0.046, "Q_MVAR": 0.031, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 52, "tipo_de_nodo": 1, "P_MW": 0.01, "Q_MVAR": 0.007, "V_max": 1.1, "V_min": 0.9 },
        { "nodo": 53, "tipo_de_nodo": 1, "P_MW": 0.009, "Q_MVAR": 0.006, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 54, "tipo_de_nodo": 1, "P_MW": 0.065, "Q_MVAR": 0.044, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 55, "tipo_de_nodo": 1, "P_MW": 0.045, "Q_MVAR": 0.03, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 56, "tipo_de_nodo": 1, "P_MW": 0.076, "Q_MVAR": 0.051, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 57, "tipo_de_nodo": 1, "P_MW": 0.071, "Q_MVAR": 0.048, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 58, "tipo_de_nodo": 1, "P_MW": 0.394, "Q_MVAR": 0.265, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 59, "tipo_de_nodo": 1, "P_MW": 0.234, "Q_MVAR": 0.157, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 60, "tipo_de_nodo": 1, "P_MW": 0.227, "Q_MVAR": 0.153, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 61, "tipo_de_nodo": 1, "P_MW": 0.225, "Q_MVAR": 0.151, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 62, "tipo_de_nodo": 1, "P_MW": 0.192, "Q_MVAR": 0.129, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 63, "tipo_de_nodo": 1, "P_MW": 0.118, "Q_MVAR": 0.079, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 64, "tipo_de_nodo": 1, "P_MW": 0.418, "Q_MVAR": 0.281, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 65, "tipo_de_nodo": 1, "P_MW": 0.234, "Q_MVAR": 0.157, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 66, "tipo_de_nodo": 1, "P_MW": 0.221, "Q_MVAR": 0.148, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 67, "tipo_de_nodo": 1, "P_MW": 0.198, "Q_MVAR": 0.133, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 68, "tipo_de_nodo": 1, "P_MW": 0.249, "Q_MVAR": 0.167, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 69, "tipo_de_nodo": 1, "P_MW": 0.113, "Q_MVAR": 0.076, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 70, "tipo_de_nodo": 1, "P_MW": 0.096, "Q_MVAR": 0.064, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 71, "tipo_de_nodo": 1, "P_MW": 0.091, "Q_MVAR": 0.061, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 72, "tipo_de_nodo": 1, "P_MW": 0.116, "Q_MVAR": 0.078, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 73, "tipo_de_nodo": 1, "P_MW": 0.168, "Q_MVAR": 0.113, "V_max": 1.1, "V_min": 0.9 },
      { "nodo": 74, "tipo_de_nodo": 1, "P_MW": 0.116, "Q_MVAR": 0.078, "V_max": 1.1, "V_min": 0.9 }
      ]
    };
    
    

    let escenarios = [
      {
        "escenario": "ESCENARIO 1 CON SIN RD NI GD",
        "potencia_deslastrada_MW": 6.616999994,
        "potencia_atendida_MW": 6.25962E-09,
        "potencia_generada_adicional_MW": 6.616999994 - 6.25962E-09,
        "costo_operacion_dolar_per_MWH": 1293.700001,
        "costo_deslastre_dolar_per_MWH": 1293.700001,
        "U1": 9.4599E-10,
        "U2": 2.22045E-16,
        "U": 4.72995E-10,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 2 CON RD SIN GD",
        "potencia_deslastrada_MW": 4.888612895,
        "potencia_atendida_MW": 1.728387105,
        "potencia_generada_adicional_MW": 4.888612895 - 1.728387105,
        "costo_operacion_dolar_per_MWH": 946.120821,
        "costo_deslastre_dolar_per_MWH": 859.6971644,
        "U1": 0.261204036,
        "U2": 0.091345264,
        "U": 0.17627465,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 3 CON GD SIN RD",
        "potencia_deslastrada_MW": 3.099010668,
        "potencia_atendida_MW": 3.517989332,
        "potencia_generada_adicional_MW": 3.099010668 - 3.517989332,
        "costo_operacion_dolar_per_MWH": 903.7579889,
        "costo_deslastre_dolar_per_MWH": 639.5019734,
        "U1": 0.531659261,
        "U2": 0.292396879,
        "U": 0.41202807,
        "resiliencia": "MALA"
      },
      {
        "escenario": "ESCENARIO 4 CON GD Y RD",
        "potencia_deslastrada_MW": 2.373581391,
        "potencia_atendida_MW": 4.243418609,
        "potencia_generada_adicional_MW": 2.373581391 - 4.243418609,
        "costo_operacion_dolar_per_MWH": 739.8205889,
        "costo_deslastre_dolar_per_MWH": 464.5907186,
        "U1": 0.641290405,
        "U2": 0.372022453,
        "U": 0.506656429,
        "resiliencia": "BUENA"
      }
    ];
    
    

  let escenario1ConSinRdNiGd = [
    { "nodo": 2, "carga_MW": 0.193, "potencia_deslastrada_MW": 0.193, "costo_dolar_por_MW": 19.3, "potencia_atendida_MW": 2.64248E-11, "_atendido": 1.36916E-08 },
    { "nodo": 3, "carga_MW": 0.001, "potencia_deslastrada_MW": 0.001, "costo_dolar_por_MW": 0.199999939, "potencia_atendida_MW": 3.0266E-10, "_atendido": 3.0266E-05 },
    { "nodo": 4, "carga_MW": 0.003, "potencia_deslastrada_MW": 0.003, "costo_dolar_por_MW": 0.599999976, "potencia_atendida_MW": 1.22156E-10, "_atendido": 4.07187E-06 },
    { "nodo": 5, "carga_MW": 0.108, "potencia_deslastrada_MW": 0.108, "costo_dolar_por_MW": 32.39999999, "potencia_atendida_MW": 2.85483E-11, "_atendido": 2.64336E-08 },
    { "nodo": 6, "carga_MW": 0.005, "potencia_deslastrada_MW": 0.005, "costo_dolar_por_MW": 0.500000006, "potencia_atendida_MW": -5.58291E-11, "_atendido": -1.11658E-06 },
    { "nodo": 7, "carga_MW": 0.018, "potencia_deslastrada_MW": 0.018, "costo_dolar_por_MW": 1.799999996, "potencia_atendida_MW": 4.01102E-11, "_atendido": 2.22834E-07 },
    { "nodo": 8, "carga_MW": 0.016, "potencia_deslastrada_MW": 0.016, "costo_dolar_por_MW": 3.199999995, "potencia_atendida_MW": 2.52591E-11, "_atendido": 1.57869E-07 },
    { "nodo": 9, "carga_MW": 0.076, "potencia_deslastrada_MW": 0.076, "costo_dolar_por_MW": 7.599999997, "potencia_atendida_MW": 3.08098E-11, "_atendido": 4.05392E-08 },
    { "nodo": 10, "carga_MW": 0.052, "potencia_deslastrada_MW": 0.052, "costo_dolar_por_MW": 15.59999999, "potencia_atendida_MW": 3.15715E-11, "_atendido": 6.07144E-08 },
    { "nodo": 11, "carga_MW": 0.046, "potencia_deslastrada_MW": 0.046, "costo_dolar_por_MW": 9.199999994, "potencia_atendida_MW": 3.23701E-11, "_atendido": 7.03697E-08 },
    { "nodo": 12, "carga_MW": 0.123, "potencia_deslastrada_MW": 0.123, "costo_dolar_por_MW": 12.3, "potencia_atendida_MW": 2.85548E-11, "_atendido": 2.32153E-08 },
    { "nodo": 13, "carga_MW": 0.046, "potencia_deslastrada_MW": 0.046, "costo_dolar_por_MW": 4.599999997, "potencia_atendida_MW": 3.32818E-11, "_atendido": 7.23517E-08 },
    { "nodo": 14, "carga_MW": 0.007, "potencia_deslastrada_MW": 0.007, "costo_dolar_por_MW": 1.400000003, "potencia_atendida_MW": -1.33045E-11, "_atendido": -1.90064E-07 },
    { "nodo": 15, "carga_MW": 0.07, "potencia_deslastrada_MW": 0.07, "costo_dolar_por_MW": 6.999999997, "potencia_atendida_MW": 3.11458E-11, "_atendido": 4.4494E-08 },
    { "nodo": 58, "carga_MW": 0.394, "potencia_deslastrada_MW": 0.394, "costo_dolar_por_MW": 78.79999999, "potencia_atendida_MW": 4.20491E-11, "_atendido": 1.06724E-08 },
    { "nodo": 71, "carga_MW": 0.091, "potencia_deslastrada_MW": 0.091, "costo_dolar_por_MW": 18.19999999, "potencia_atendida_MW": 2.99502E-11, "_atendido": 3.29123E-08 },
    { "nodo": 72, "carga_MW": 0.116, "potencia_deslastrada_MW": 0.116, "costo_dolar_por_MW": 34.79999999, "potencia_atendida_MW": 2.80828E-11, "_atendido": 2.42093E-08 },
    { "nodo": 73, "carga_MW": 0.168, "potencia_deslastrada_MW": 0.168, "costo_dolar_por_MW": 16.8, "potencia_atendida_MW": 2.69449E-11, "_atendido": 1.60386E-08 },
    { "nodo": 74, "carga_MW": 0.116, "potencia_deslastrada_MW": 0.116, "costo_dolar_por_MW": 23.19999999, "potencia_atendida_MW": 2.85725E-11, "_atendido": 2.46315E-08 },
    { "nodo": 27, "carga_MW": 0.016, "potencia_deslastrada_MW": 0.016, "costo_dolar_por_MW": 3.200000027, "potencia_atendida_MW": -1.37248E-10, "_atendido": -8.578E-07 },
    { "nodo": 28, "carga_MW": 0.074, "potencia_deslastrada_MW": 0.074, "costo_dolar_por_MW": 22.19999995, "potencia_atendida_MW": 1.58121E-10, "_atendido": 2.13678E-07 },
    { "nodo": 29, "carga_MW": 0.117, "potencia_deslastrada_MW": 0.117, "costo_dolar_por_MW": 11.69999997, "potencia_atendida_MW": 2.59581E-10, "_atendido": 2.21864E-07 },
    { "nodo": 30, "carga_MW": 0.006, "potencia_deslastrada_MW": 0.006, "costo_dolar_por_MW": 1.800000011, "potencia_atendida_MW": -3.78404E-11, "_atendido": -6.30674E-07 },
    { "nodo": 31, "carga_MW": 0.125, "potencia_deslastrada_MW": 0.125, "costo_dolar_por_MW": 24.99999997, "potencia_atendida_MW": 1.4162E-10, "_atendido": 1.13296E-07 },
    { "nodo": 32, "carga_MW": 0.017, "potencia_deslastrada_MW": 0.017, "costo_dolar_por_MW": 3.400000034, "potencia_atendida_MW": -1.70059E-10, "_atendido": -1.00035E-06 },
    { "nodo": 48, "carga_MW": 0.049, "potencia_deslastrada_MW": 0.049, "costo_dolar_por_MW": 4.899999999, "potencia_atendida_MW": 1.3963E-11, "_atendido": 2.84958E-08 },
    { "nodo": 49, "carga_MW": 0.043, "potencia_deslastrada_MW": 0.043, "costo_dolar_por_MW": 12.90000012, "potencia_atendida_MW": -4.01328E-10, "_atendido": -9.3332E-07 },
    { "nodo": 50, "carga_MW": 0.061, "potencia_deslastrada_MW": 0.061000001, "costo_dolar_por_MW": 18.30000016, "potencia_atendida_MW": -5.41347E-10, "_atendido": -8.87454E-07 },
    { "nodo": 51, "carga_MW": 0.046, "potencia_deslastrada_MW": 0.046, "costo_dolar_por_MW": 9.200000035, "potencia_atendida_MW": -1.766E-10, "_atendido": -3.83912E-07 },
    { "nodo": 52, "carga_MW": 0.01, "potencia_deslastrada_MW": 0.009999999, "costo_dolar_por_MW": 0.999999862, "potencia_atendida_MW": 1.37669E-09, "_atendido": 1.37669E-05 },
    { "nodo": 53, "carga_MW": 0.009, "potencia_deslastrada_MW": 0.009, "costo_dolar_por_MW": 1.800000011, "potencia_atendida_MW": -5.43162E-11, "_atendido": -6.03514E-07 },
    { "nodo": 54, "carga_MW": 0.065, "potencia_deslastrada_MW": 0.065, "costo_dolar_por_MW": 12.99999995, "potencia_atendida_MW": 2.30438E-10, "_atendido": 3.54519E-07 },
    { "nodo": 55, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.045, "costo_dolar_por_MW": 9.000000019, "potencia_atendida_MW": -9.70098E-11, "_atendido": -2.15577E-07 },
    { "nodo": 56, "carga_MW": 0.076, "potencia_deslastrada_MW": 0.076, "costo_dolar_por_MW": 7.599999985, "potencia_atendida_MW": 1.5366E-10, "_atendido": 2.02185E-07 },
    { "nodo": 57, "carga_MW": 0.071, "potencia_deslastrada_MW": 0.071, "costo_dolar_por_MW": 7.099999994, "potencia_atendida_MW": 6.34016E-11, "_atendido": 8.9298E-08 },
    { "nodo": 16, "carga_MW": 0.07, "potencia_deslastrada_MW": 0.07, "costo_dolar_por_MW": 14.00000007, "potencia_atendida_MW": -3.58719E-10, "_atendido": -5.12456E-07 },
    { "nodo": 17, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.003999999, "costo_dolar_por_MW": 0.799999835, "potencia_atendida_MW": 8.24816E-10, "_atendido": 2.06204E-05 },
    { "nodo": 18, "carga_MW": 0.049, "potencia_deslastrada_MW": 0.049, "costo_dolar_por_MW": 4.899999987, "potencia_atendida_MW": 1.31112E-10, "_atendido": 2.67576E-07 },
    { "nodo": 19, "carga_MW": 0.057, "potencia_deslastrada_MW": 0.057000001, "costo_dolar_por_MW": 11.40000011, "potencia_atendida_MW": -5.26917E-10, "_atendido": -9.24415E-07 },
    { "nodo": 33, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.003999999, "costo_dolar_por_MW": 0.399999944, "potencia_atendida_MW": 5.56943E-10, "_atendido": 1.39236E-05 },
    { "nodo": 34, "carga_MW": 0.019, "potencia_deslastrada_MW": 0.019, "costo_dolar_por_MW": 1.89999998, "potencia_atendida_MW": 1.95538E-10, "_atendido": 1.02915E-06 },
    { "nodo": 35, "carga_MW": 0.031, "potencia_deslastrada_MW": 0.031, "costo_dolar_por_MW": 9.300000128, "potencia_atendida_MW": -4.25461E-10, "_atendido": -1.37245E-06 },
    { "nodo": 36, "carga_MW": 0.04, "potencia_deslastrada_MW": 0.04, "costo_dolar_por_MW": 4.00000001, "potencia_atendida_MW": -1.03434E-10, "_atendido": -2.58584E-07 },
    { "nodo": 37, "carga_MW": 0.011, "potencia_deslastrada_MW": 0.011, "costo_dolar_por_MW": 2.199999918, "potencia_atendida_MW": 4.11317E-10, "_atendido": 3.73924E-06 },
    { "nodo": 38, "carga_MW": 0.217, "potencia_deslastrada_MW": 0.217, "costo_dolar_por_MW": 65.10000011, "potencia_atendida_MW": -3.53858E-10, "_atendido": -1.63068E-07 },
    { "nodo": 39, "carga_MW": 0.037, "potencia_deslastrada_MW": 0.037, "costo_dolar_por_MW": 11.10000004, "potencia_atendida_MW": -1.32839E-10, "_atendido": -3.59025E-07 },
    { "nodo": 40, "carga_MW": 0.114, "potencia_deslastrada_MW": 0.114, "costo_dolar_por_MW": 34.19999995, "potencia_atendida_MW": 1.70715E-10, "_atendido": 1.4975E-07 },
    { "nodo": 59, "carga_MW": 0.234, "potencia_deslastrada_MW": 0.234000002, "costo_dolar_por_MW": 70.20000052, "potencia_atendida_MW": -1.73899E-09, "_atendido": -7.43158E-07 },
    { "nodo": 60, "carga_MW": 0.227, "potencia_deslastrada_MW": 0.226999999, "costo_dolar_por_MW": 22.69999993, "potencia_atendida_MW": 6.87409E-10, "_atendido": 3.02824E-07 },
    { "nodo": 61, "carga_MW": 0.225, "potencia_deslastrada_MW": 0.224999999, "costo_dolar_por_MW": 22.49999992, "potencia_atendida_MW": 8.18804E-10, "_atendido": 3.63913E-07 },
    { "nodo": 62, "carga_MW": 0.192, "potencia_deslastrada_MW": 0.191999999, "costo_dolar_por_MW": 19.19999986, "potencia_atendida_MW": 1.401E-09, "_atendido": 7.2969E-07 },
    { "nodo": 63, "carga_MW": 0.118, "potencia_deslastrada_MW": 0.118, "costo_dolar_por_MW": 35.4000001, "potencia_atendida_MW": -3.25723E-10, "_atendido": -2.76037E-07 },
    { "nodo": 64, "carga_MW": 0.418, "potencia_deslastrada_MW": 0.417999999, "costo_dolar_por_MW": 83.59999987, "potencia_atendida_MW": 6.58695E-10, "_atendido": 1.57583E-07 },
    { "nodo": 65, "carga_MW": 0.234, "potencia_deslastrada_MW": 0.234, "costo_dolar_por_MW": 46.8, "potencia_atendida_MW": 2.05118E-11, "_atendido": 8.76574E-09 },
    { "nodo": 66, "carga_MW": 0.221, "potencia_deslastrada_MW": 0.221, "costo_dolar_por_MW": 66.3, "potencia_atendida_MW": 1.44984E-11, "_atendido": 6.56038E-09 },
    { "nodo": 24, "carga_MW": 0.21, "potencia_deslastrada_MW": 0.210000002, "costo_dolar_por_MW": 63.00000066, "potencia_atendida_MW": -2.21664E-09, "_atendido": -1.05554E-06 },
    { "nodo": 25, "carga_MW": 0.136, "potencia_deslastrada_MW": 0.135999998, "costo_dolar_por_MW": 13.59999983, "potencia_atendida_MW": 1.74252E-09, "_atendido": 1.28126E-06 },
    { "nodo": 26, "carga_MW": 0.189, "potencia_deslastrada_MW": 0.188999999, "costo_dolar_por_MW": 18.89999988, "potencia_atendida_MW": 1.16953E-09, "_atendido": 6.18798E-07 },
    { "nodo": 41, "carga_MW": 0.012, "potencia_deslastrada_MW": 0.012000003, "costo_dolar_por_MW": 2.400000658, "potencia_atendida_MW": -3.28876E-09, "_atendido": -2.74064E-05 },
    { "nodo": 42, "carga_MW": 0.055, "potencia_deslastrada_MW": 0.054999998, "costo_dolar_por_MW": 5.499999757, "potencia_atendida_MW": 2.42826E-09, "_atendido": 4.41502E-06 },
    { "nodo": 43, "carga_MW": 0.072, "potencia_deslastrada_MW": 0.071999998, "costo_dolar_por_MW": 14.39999958, "potencia_atendida_MW": 2.08767E-09, "_atendido": 2.89954E-06 },
    { "nodo": 44, "carga_MW": 0.04, "potencia_deslastrada_MW": 0.04, "costo_dolar_por_MW": 3.999999971, "potencia_atendida_MW": 2.93512E-10, "_atendido": 7.33779E-07 },
    { "nodo": 45, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.003999999, "costo_dolar_por_MW": 0.399999901, "potencia_atendida_MW": 9.9379E-10, "_atendido": 2.48447E-05 },
    { "nodo": 46, "carga_MW": 0.041, "potencia_deslastrada_MW": 0.041000001, "costo_dolar_por_MW": 12.30000037, "potencia_atendida_MW": -1.22539E-09, "_atendido": -2.98875E-06 },
    { "nodo": 20, "carga_MW": 0.118, "potencia_deslastrada_MW": 0.118000001, "costo_dolar_por_MW": 11.80000013, "potencia_atendida_MW": -1.32992E-09, "_atendido": -1.12705E-06 },
    { "nodo": 21, "carga_MW": 0.019, "potencia_deslastrada_MW": 0.018999998, "costo_dolar_por_MW": 1.899999803, "potencia_atendida_MW": 1.96928E-09, "_atendido": 1.03646E-05 },
    { "nodo": 22, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.014000001, "costo_dolar_por_MW": 4.200000166, "potencia_atendida_MW": -5.51685E-10, "_atendido": -3.94061E-06 },
    { "nodo": 23, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.007999999, "costo_dolar_por_MW": 0.799999944, "potencia_atendida_MW": 5.61249E-10, "_atendido": 7.01562E-06 },
    { "nodo": 69, "carga_MW": 0.113, "potencia_deslastrada_MW": 0.113000001, "costo_dolar_por_MW": 33.90000023, "potencia_atendida_MW": -7.70359E-10, "_atendido": -6.81734E-07 },
    { "nodo": 70, "carga_MW": 0.096, "potencia_deslastrada_MW": 0.095999999, "costo_dolar_por_MW": 19.19999983, "potencia_atendida_MW": 8.70064E-10, "_atendido": 9.06316E-07 },
    { "nodo": 47, "carga_MW": 0.042, "potencia_deslastrada_MW": 0.042, "costo_dolar_por_MW": 12.6, "potencia_atendida_MW": 0, "_atendido": 0 },
    { "nodo": 67, "carga_MW": 0.198, "potencia_deslastrada_MW": 0.198, "costo_dolar_por_MW": 59.4, "potencia_atendida_MW": 0, "_atendido": 0 },
    { "nodo": 68, "carga_MW": 0.249, "potencia_deslastrada_MW": 0.249, "costo_dolar_por_MW": 49.8, "potencia_atendida_MW": 0, "_atendido": 0 }
  ];




let escenario2ConRdSinGd = [
  { "nodo": 2, "carga_MW": 0.193, "potencia_deslastrada_MW": 0.192999999, "costo_dolar_por_MW": 19.29999985, "potencia_atendida_MW": 1.48269E-09, "_atendido": 7.68236E-07 },
  { "nodo": 3, "carga_MW": 0.001, "potencia_deslastrada_MW": 6.62838E-06, "costo_dolar_por_MW": 0.001325675, "potencia_atendida_MW": 0.000993372, "_atendido": 99.33716227 },
  { "nodo": 4, "carga_MW": 0.003, "potencia_deslastrada_MW": 1.14301E-05, "costo_dolar_por_MW": 0.002286019, "potencia_atendida_MW": 0.00298857, "_atendido": 99.61899679 },
  { "nodo": 5, "carga_MW": 0.108, "potencia_deslastrada_MW": 1.4821E-09, "costo_dolar_por_MW": 4.44629E-07, "potencia_atendida_MW": 0.107999999, "_atendido": 99.99999863 },
  { "nodo": 6, "carga_MW": 0.005, "potencia_deslastrada_MW": 0.004999999, "costo_dolar_por_MW": 0.499999852, "potencia_atendida_MW": 1.4825E-09, "_atendido": 2.96499E-05 },
  { "nodo": 7, "carga_MW": 0.018, "potencia_deslastrada_MW": 0.017999999, "costo_dolar_por_MW": 1.799999852, "potencia_atendida_MW": 1.4826E-09, "_atendido": 8.23664E-06 },
  { "nodo": 8, "carga_MW": 0.016, "potencia_deslastrada_MW": 5.67371E-06, "costo_dolar_por_MW": 0.001134743, "potencia_atendida_MW": 0.015994326, "_atendido": 99.96453928 },
  { "nodo": 9, "carga_MW": 0.076, "potencia_deslastrada_MW": 0.075999999, "costo_dolar_por_MW": 7.599999852, "potencia_atendida_MW": 1.48276E-09, "_atendido": 1.951E-06 },
  { "nodo": 10, "carga_MW": 0.052, "potencia_deslastrada_MW": 1.48167E-09, "costo_dolar_por_MW": 4.44501E-07, "potencia_atendida_MW": 0.051999999, "_atendido": 99.99999715 },
  { "nodo": 11, "carga_MW": 0.046, "potencia_deslastrada_MW": 3.44387E-06, "costo_dolar_por_MW": 0.000688773, "potencia_atendida_MW": 0.045996556, "_atendido": 99.99251334 },
  { "nodo": 12, "carga_MW": 0.123, "potencia_deslastrada_MW": 0.122999999, "costo_dolar_por_MW": 12.29999985, "potencia_atendida_MW": 1.48307E-09, "_atendido": 1.20575E-06 },
  { "nodo": 13, "carga_MW": 0.046, "potencia_deslastrada_MW": 0.045999999, "costo_dolar_por_MW": 4.599999852, "potencia_atendida_MW": 1.48315E-09, "_atendido": 3.22423E-06 },
  { "nodo": 14, "carga_MW": 0.007, "potencia_deslastrada_MW": 2.37564E-06, "costo_dolar_por_MW": 0.000475128, "potencia_atendida_MW": 0.006997624, "_atendido": 99.9660623 },
  { "nodo": 15, "carga_MW": 0.07, "potencia_deslastrada_MW": 0.069999999, "costo_dolar_por_MW": 6.999999852, "potencia_atendida_MW": 1.48324E-09, "_atendido": 2.11891E-06 },
  { "nodo": 58, "carga_MW": 0.394, "potencia_deslastrada_MW": 0.262757681, "costo_dolar_por_MW": 52.55153614, "potencia_atendida_MW": 0.131242319, "_atendido": 33.31023333 },
  { "nodo": 71, "carga_MW": 0.091, "potencia_deslastrada_MW": 0.090817631, "costo_dolar_por_MW": 18.16352614, "potencia_atendida_MW": 0.000182369, "_atendido": 0.20040581 },
  { "nodo": 72, "carga_MW": 0.116, "potencia_deslastrada_MW": 1.48277E-09, "costo_dolar_por_MW": 4.44831E-07, "potencia_atendida_MW": 0.115999999, "_atendido": 99.99999872 },
  { "nodo": 73, "carga_MW": 0.168, "potencia_deslastrada_MW": 0.167999999, "costo_dolar_por_MW": 16.79999985, "potencia_atendida_MW": 1.48229E-09, "_atendido": 8.82316E-07 },
  { "nodo": 74, "carga_MW": 0.116, "potencia_deslastrada_MW": 0.078423033, "costo_dolar_por_MW": 15.68460662, "potencia_atendida_MW": 0.037576967, "_atendido": 32.39393697 },
  { "nodo": 27, "carga_MW": 0.016, "potencia_deslastrada_MW": 0.012204518, "costo_dolar_por_MW": 2.440903604, "potencia_atendida_MW": 0.003795482, "_atendido": 23.72176237 },
  { "nodo": 28, "carga_MW": 0.074, "potencia_deslastrada_MW": 2.58606E-07, "costo_dolar_por_MW": 7.75818E-05, "potencia_atendida_MW": 0.073999741, "_atendido": 99.99965053 },
  { "nodo": 29, "carga_MW": 0.117, "potencia_deslastrada_MW": 0.11699974, "costo_dolar_por_MW": 11.69997403, "potencia_atendida_MW": 2.59725E-07, "_atendido": 0.000221987 },
  { "nodo": 30, "carga_MW": 0.006, "potencia_deslastrada_MW": 2.5937E-07, "costo_dolar_por_MW": 7.78109E-05, "potencia_atendida_MW": 0.005999741, "_atendido": 99.99567717 },
  { "nodo": 31, "carga_MW": 0.125, "potencia_deslastrada_MW": 0.115534913, "costo_dolar_por_MW": 23.10698255, "potencia_atendida_MW": 0.009465087, "_atendido": 7.572069784 },
  { "nodo": 32, "carga_MW": 0.017, "potencia_deslastrada_MW": 0.012262515, "costo_dolar_por_MW": 2.452503089, "potencia_atendida_MW": 0.004737485, "_atendido": 27.8675562 },
  { "nodo": 48, "carga_MW": 0.049, "potencia_deslastrada_MW": 0.048999372, "costo_dolar_por_MW": 4.899937163, "potencia_atendida_MW": 6.2837E-07, "_atendido": 0.001282389 },
  { "nodo": 49, "carga_MW": 0.043, "potencia_deslastrada_MW": 0.026816362, "costo_dolar_por_MW": 8.044908665, "potencia_atendida_MW": 0.016183638, "_atendido": 37.63636693 },
  { "nodo": 50, "carga_MW": 0.061, "potencia_deslastrada_MW": 0.036188061, "costo_dolar_por_MW": 10.85641844, "potencia_atendida_MW": 0.024811939, "_atendido": 40.67530909 },
  { "nodo": 51, "carga_MW": 0.046, "potencia_deslastrada_MW": 0.045998741, "costo_dolar_por_MW": 9.199748217, "potencia_atendida_MW": 1.25891E-06, "_atendido": 0.00273677 },
  { "nodo": 52, "carga_MW": 0.01, "potencia_deslastrada_MW": 0.009999369, "costo_dolar_por_MW": 0.999936911, "potencia_atendida_MW": 6.30891E-07, "_atendido": 0.006308906 },
  { "nodo": 53, "carga_MW": 0.009, "potencia_deslastrada_MW": 0.003987962, "costo_dolar_por_MW": 0.797592426, "potencia_atendida_MW": 0.005012038, "_atendido": 55.68930964 },
  { "nodo": 54, "carga_MW": 0.065, "potencia_deslastrada_MW": 0.005067457, "costo_dolar_por_MW": 1.013491485, "potencia_atendida_MW": 0.059932543, "_atendido": 92.20391166 },
  { "nodo": 55, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.006700453, "costo_dolar_por_MW": 1.340090615, "potencia_atendida_MW": 0.038299547, "_atendido": 85.11010428 },
  { "nodo": 56, "carga_MW": 0.076, "potencia_deslastrada_MW": 0.07599944, "costo_dolar_por_MW": 7.599943953, "potencia_atendida_MW": 5.60472E-07, "_atendido": 0.000737463 },
  { "nodo": 57, "carga_MW": 0.071, "potencia_deslastrada_MW": 0.070999439, "costo_dolar_por_MW": 7.099943948, "potencia_atendida_MW": 5.60521E-07, "_atendido": 0.000789466 },
  { "nodo": 16, "carga_MW": 0.07, "potencia_deslastrada_MW": 0.040643731, "costo_dolar_por_MW": 8.128746154, "potencia_atendida_MW": 0.029356269, "_atendido": 41.93752747 },
  { "nodo": 17, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.002002984, "costo_dolar_por_MW": 0.400596709, "potencia_atendida_MW": 0.001997016, "_atendido": 49.92541134 },
  { "nodo": 18, "carga_MW": 0.049, "potencia_deslastrada_MW": 0.048999695, "costo_dolar_por_MW": 4.899969501, "potencia_atendida_MW": 3.04987E-07, "_atendido": 0.000622422 },
  { "nodo": 19, "carga_MW": 0.057, "potencia_deslastrada_MW": 0.031104574, "costo_dolar_por_MW": 6.220914762, "potencia_atendida_MW": 0.025895426, "_atendido": 45.43057226 },
  { "nodo": 33, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.003978588, "costo_dolar_por_MW": 0.397858758, "potencia_atendida_MW": 2.14124E-05, "_atendido": 0.535310427 },
  { "nodo": 34, "carga_MW": 0.019, "potencia_deslastrada_MW": 0.018967402, "costo_dolar_por_MW": 1.896740182, "potencia_atendida_MW": 3.25982E-05, "_atendido": 0.171569364 },
  { "nodo": 35, "carga_MW": 0.031, "potencia_deslastrada_MW": 8.0579E-08, "costo_dolar_por_MW": 2.41737E-05, "potencia_atendida_MW": 0.030999919, "_atendido": 99.99974007 },
  { "nodo": 36, "carga_MW": 0.04, "potencia_deslastrada_MW": 0.039561062, "costo_dolar_por_MW": 3.956106177, "potencia_atendida_MW": 0.000438938, "_atendido": 1.097345583 },
  { "nodo": 37, "carga_MW": 0.011, "potencia_deslastrada_MW": 0.010999758, "costo_dolar_por_MW": 2.199951632, "potencia_atendida_MW": 2.41841E-07, "_atendido": 0.002198554 },
  { "nodo": 38, "carga_MW": 0.217, "potencia_deslastrada_MW": 0.215215143, "costo_dolar_por_MW": 64.56454295, "potencia_atendida_MW": 0.001784857, "_atendido": 0.822514676 },
  { "nodo": 39, "carga_MW": 0.037, "potencia_deslastrada_MW": 0.036296373, "costo_dolar_por_MW": 10.88891177, "potencia_atendida_MW": 0.000703627, "_atendido": 1.901695783 },
  { "nodo": 40, "carga_MW": 0.114, "potencia_deslastrada_MW": 0.113738822, "costo_dolar_por_MW": 34.12164649, "potencia_atendida_MW": 0.000261178, "_atendido": 0.229103831 },
  { "nodo": 59, "carga_MW": 0.234, "potencia_deslastrada_MW": 7.05905E-10, "costo_dolar_por_MW": 2.11771E-07, "potencia_atendida_MW": 0.233999999, "_atendido": 99.9999997 },
  { "nodo": 60, "carga_MW": 0.227, "potencia_deslastrada_MW": 0.22698174, "costo_dolar_por_MW": 22.69817401, "potencia_atendida_MW": 1.82599E-05, "_atendido": 0.008044026 },
  { "nodo": 61, "carga_MW": 0.225, "potencia_deslastrada_MW": 0.223449018, "costo_dolar_por_MW": 22.34490183, "potencia_atendida_MW": 0.001550982, "_atendido": 0.689325183 },
  { "nodo": 62, "carga_MW": 0.192, "potencia_deslastrada_MW": 0.105603421, "costo_dolar_por_MW": 10.56034209, "potencia_atendida_MW": 0.086396579, "_atendido": 44.99821826 },
  { "nodo": 63, "carga_MW": 0.118, "potencia_deslastrada_MW": 0.028890079, "costo_dolar_por_MW": 8.667023678, "potencia_atendida_MW": 0.089109921, "_atendido": 75.51688226 },
  { "nodo": 64, "carga_MW": 0.418, "potencia_deslastrada_MW": 0.417999996, "costo_dolar_por_MW": 83.59999914, "potencia_atendida_MW": 4.28376E-09, "_atendido": 1.02482E-06 },
  { "nodo": 65, "carga_MW": 0.234, "potencia_deslastrada_MW": 0.233999996, "costo_dolar_por_MW": 46.79999914, "potencia_atendida_MW": 4.28364E-09, "_atendido": 1.83061E-06 },
  { "nodo": 66, "carga_MW": 0.221, "potencia_deslastrada_MW": 0.147116655, "costo_dolar_por_MW": 44.13499639, "potencia_atendida_MW": 0.073883345, "_atendido": 33.431378 },
  { "nodo": 24, "carga_MW": 0.21, "potencia_deslastrada_MW": 0.047516198, "costo_dolar_por_MW": 14.25485928, "potencia_atendida_MW": 0.162483802, "_atendido": 77.37323923 },
  { "nodo": 25, "carga_MW": 0.136, "potencia_deslastrada_MW": 0.135998579, "costo_dolar_por_MW": 13.59985792, "potencia_atendida_MW": 1.42084E-06, "_atendido": 0.001044736 },
  { "nodo": 26, "carga_MW": 0.189, "potencia_deslastrada_MW": 0.188998579, "costo_dolar_por_MW": 18.89985793, "potencia_atendida_MW": 1.42069E-06, "_atendido": 0.000751686 },
  { "nodo": 41, "carga_MW": 0.012, "potencia_deslastrada_MW": 0.006604334, "costo_dolar_por_MW": 1.320866882, "potencia_atendida_MW": 0.005395666, "_atendido": 44.9638799 },
  { "nodo": 42, "carga_MW": 0.055, "potencia_deslastrada_MW": 0.0549992, "costo_dolar_por_MW": 5.499920049, "potencia_atendida_MW": 7.99515E-07, "_atendido": 0.001453663 },
  { "nodo": 43, "carga_MW": 0.072, "potencia_deslastrada_MW": 0.028898375, "costo_dolar_por_MW": 5.779674971, "potencia_atendida_MW": 0.043101625, "_atendido": 59.86336826 },
  { "nodo": 44, "carga_MW": 0.04, "potencia_deslastrada_MW": 0.039999725, "costo_dolar_por_MW": 3.999972474, "potencia_atendida_MW": 2.75265E-07, "_atendido": 0.000688162 },
  { "nodo": 45, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.003999723, "costo_dolar_por_MW": 0.39997234, "potencia_atendida_MW": 2.766E-07, "_atendido": 0.006915001 },
  { "nodo": 46, "carga_MW": 0.041, "potencia_deslastrada_MW": 0.019001376, "costo_dolar_por_MW": 5.70041267, "potencia_atendida_MW": 0.021998624, "_atendido": 53.65518155 },
  { "nodo": 20, "carga_MW": 0.118, "potencia_deslastrada_MW": 0.058585529, "costo_dolar_por_MW": 5.858552904, "potencia_atendida_MW": 0.059414471, "_atendido": 50.35124658 },
  { "nodo": 21, "carga_MW": 0.019, "potencia_deslastrada_MW": 0.009922734, "costo_dolar_por_MW": 0.992273421, "potencia_atendida_MW": 0.009077266, "_atendido": 47.77508309 },
  { "nodo": 22, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.010003377, "costo_dolar_por_MW": 3.001013114, "potencia_atendida_MW": 0.003996623, "_atendido": 28.54730681 },
  { "nodo": 23, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.00799812, "costo_dolar_por_MW": 0.799812049, "potencia_atendida_MW": 1.87951E-06, "_atendido": 0.023493904 },
  { "nodo": 69, "carga_MW": 0.113, "potencia_deslastrada_MW": 0.089003271, "costo_dolar_por_MW": 26.70098137, "potencia_atendida_MW": 0.023996729, "_atendido": 21.23604316 },
  { "nodo": 70, "carga_MW": 0.096, "potencia_deslastrada_MW": 0.095997907, "costo_dolar_por_MW": 19.19958143, "potencia_atendida_MW": 2.09283E-06, "_atendido": 0.002180031 },
  { "nodo": 47, "carga_MW": 0.042, "potencia_deslastrada_MW": 0.042, "costo_dolar_por_MW": 12.6, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 67, "carga_MW": 0.198, "potencia_deslastrada_MW": 0.198, "costo_dolar_por_MW": 59.4, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 68, "carga_MW": 0.249, "potencia_deslastrada_MW": 0.18675, "costo_dolar_por_MW": 37.35, "potencia_atendida_MW": 0.06225, "_atendido": 25 }
];



let escenario3ConGdSinRd = [
  { "nodo": 2, "carga_MW": 0.193, "potencia_deslastrada_MW": 4.78163E-07, "costo_dolar_por_MW": 4.78163E-05, "potencia_atendida_MW": 0.192999522, "_atendido": 99.99975225 },
  { "nodo": 3, "carga_MW": 0.001, "potencia_deslastrada_MW": 9.52198E-08, "costo_dolar_por_MW": 1.9044E-05, "potencia_atendida_MW": 0.000999905, "_atendido": 99.99047802 },
  { "nodo": 4, "carga_MW": 0.003, "potencia_deslastrada_MW": 9.47678E-08, "costo_dolar_por_MW": 1.89536E-05, "potencia_atendida_MW": 0.002999905, "_atendido": 99.99684107 },
  { "nodo": 5, "carga_MW": 0.108, "potencia_deslastrada_MW": 5.2443E-08, "costo_dolar_por_MW": 1.57329E-05, "potencia_atendida_MW": 0.107999948, "_atendido": 99.99995144 },
  { "nodo": 6, "carga_MW": 0.005, "potencia_deslastrada_MW": 4.84128E-07, "costo_dolar_por_MW": 4.84128E-05, "potencia_atendida_MW": 0.004999516, "_atendido": 99.99031744 },
  { "nodo": 7, "carga_MW": 0.018, "potencia_deslastrada_MW": 4.81884E-07, "costo_dolar_por_MW": 4.81884E-05, "potencia_atendida_MW": 0.017999518, "_atendido": 99.99732287 },
  { "nodo": 8, "carga_MW": 0.016, "potencia_deslastrada_MW": 9.46409E-08, "costo_dolar_por_MW": 1.89282E-05, "potencia_atendida_MW": 0.015999905, "_atendido": 99.99940849 },
  { "nodo": 9, "carga_MW": 0.076, "potencia_deslastrada_MW": 4.81709E-07, "costo_dolar_por_MW": 4.81709E-05, "potencia_atendida_MW": 0.075999518, "_atendido": 99.99936617 },
  { "nodo": 10, "carga_MW": 0.052, "potencia_deslastrada_MW": 5.2465E-08, "costo_dolar_por_MW": 1.57395E-05, "potencia_atendida_MW": 0.051999948, "_atendido": 99.99989911 },
  { "nodo": 11, "carga_MW": 0.046, "potencia_deslastrada_MW": 9.46408E-08, "costo_dolar_por_MW": 1.89282E-05, "potencia_atendida_MW": 0.045999905, "_atendido": 99.99979426 },
  { "nodo": 12, "carga_MW": 0.123, "potencia_deslastrada_MW": 4.82246E-07, "costo_dolar_por_MW": 4.82246E-05, "potencia_atendida_MW": 0.122999518, "_atendido": 99.99960793 },
  { "nodo": 13, "carga_MW": 0.046, "potencia_deslastrada_MW": 4.82588E-07, "costo_dolar_por_MW": 4.82588E-05, "potencia_atendida_MW": 0.045999517, "_atendido": 99.9989509 },
  { "nodo": 14, "carga_MW": 0.007, "potencia_deslastrada_MW": 9.47399E-08, "costo_dolar_por_MW": 1.8948E-05, "potencia_atendida_MW": 0.006999905, "_atendido": 99.99864657 },
  { "nodo": 15, "carga_MW": 0.07, "potencia_deslastrada_MW": 4.82554E-07, "costo_dolar_por_MW": 4.82554E-05, "potencia_atendida_MW": 0.069999517, "_atendido": 99.99931064 },
  { "nodo": 58, "carga_MW": 0.394, "potencia_deslastrada_MW": 9.4199E-08, "costo_dolar_por_MW": 1.88398E-05, "potencia_atendida_MW": 0.393999906, "_atendido": 99.99997609 },
  { "nodo": 71, "carga_MW": 0.091, "potencia_deslastrada_MW": 9.46636E-08, "costo_dolar_por_MW": 1.89327E-05, "potencia_atendida_MW": 0.090999905, "_atendido": 99.99989597 },
  { "nodo": 72, "carga_MW": 0.116, "potencia_deslastrada_MW": 5.25024E-08, "costo_dolar_por_MW": 1.57507E-05, "potencia_atendida_MW": 0.115999947, "_atendido": 99.99995474 },
  { "nodo": 73, "carga_MW": 0.168, "potencia_deslastrada_MW": 4.86386E-07, "costo_dolar_por_MW": 4.86386E-05, "potencia_atendida_MW": 0.167999514, "_atendido": 99.99971048 },
  { "nodo": 74, "carga_MW": 0.116, "potencia_deslastrada_MW": 9.481E-08, "costo_dolar_por_MW": 1.8962E-05, "potencia_atendida_MW": 0.115999905, "_atendido": 99.99991827 },
  { "nodo": 27, "carga_MW": 0.016, "potencia_deslastrada_MW": 0.016, "costo_dolar_por_MW": 3.200000027, "potencia_atendida_MW": -1.37248E-10, "_atendido": -8.578E-07 },
  { "nodo": 28, "carga_MW": 0.074, "potencia_deslastrada_MW": 0.074, "costo_dolar_por_MW": 22.19999995, "potencia_atendida_MW": 1.58121E-10, "_atendido": 2.13678E-07 },
  { "nodo": 29, "carga_MW": 0.117, "potencia_deslastrada_MW": 0.117, "costo_dolar_por_MW": 11.69999997, "potencia_atendida_MW": 2.59581E-10, "_atendido": 2.21864E-07 },
  { "nodo": 30, "carga_MW": 0.006, "potencia_deslastrada_MW": 0.006, "costo_dolar_por_MW": 1.800000011, "potencia_atendida_MW": -3.78404E-11, "_atendido": -6.30674E-07 },
  { "nodo": 31, "carga_MW": 0.125, "potencia_deslastrada_MW": 0.125, "costo_dolar_por_MW": 24.99999997, "potencia_atendida_MW": 1.4162E-10, "_atendido": 1.13296E-07 },
  { "nodo": 32, "carga_MW": 0.017, "potencia_deslastrada_MW": 0.017, "costo_dolar_por_MW": 3.400000034, "potencia_atendida_MW": -1.70059E-10, "_atendido": -1.00035E-06 },
  { "nodo": 48, "carga_MW": 0.049, "potencia_deslastrada_MW": 0.049, "costo_dolar_por_MW": 4.899999999, "potencia_atendida_MW": 1.3963E-11, "_atendido": 2.84958E-08 },
  { "nodo": 49, "carga_MW": 0.043, "potencia_deslastrada_MW": 0.043, "costo_dolar_por_MW": 12.90000012, "potencia_atendida_MW": -4.01328E-10, "_atendido": -9.3332E-07 },
  { "nodo": 50, "carga_MW": 0.061, "potencia_deslastrada_MW": 0.061000001, "costo_dolar_por_MW": 18.30000016, "potencia_atendida_MW": -5.41347E-10, "_atendido": -8.87454E-07 },
  { "nodo": 51, "carga_MW": 0.046, "potencia_deslastrada_MW": 0.046, "costo_dolar_por_MW": 9.200000035, "potencia_atendida_MW": -1.766E-10, "_atendido": -3.83912E-07 },
  { "nodo": 52, "carga_MW": 0.01, "potencia_deslastrada_MW": 0.009999999, "costo_dolar_por_MW": 0.999999862, "potencia_atendida_MW": 1.37669E-09, "_atendido": 1.37669E-05 },
  { "nodo": 53, "carga_MW": 0.009, "potencia_deslastrada_MW": 0.009, "costo_dolar_por_MW": 1.800000011, "potencia_atendida_MW": -5.43162E-11, "_atendido": -6.03514E-07 },
  { "nodo": 53, "carga_MW": 0.009, "potencia_deslastrada_MW": 0.009, "costo_dolar_por_MW": 1.800000011, "potencia_atendida_MW": -5.43162E-11, "_atendido": -6.03514E-07 },
  { "nodo": 54, "carga_MW": 0.065, "potencia_deslastrada_MW": 0.065, "costo_dolar_por_MW": 12.99999995, "potencia_atendida_MW": 2.30438E-10, "_atendido": 3.54519E-07 },
  { "nodo": 55, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.045, "costo_dolar_por_MW": 9.000000019, "potencia_atendida_MW": -9.70098E-11, "_atendido": -2.15577E-07 },
  { "nodo": 56, "carga_MW": 0.076, "potencia_deslastrada_MW": 0.076, "costo_dolar_por_MW": 7.599999985, "potencia_atendida_MW": 1.5366E-10, "_atendido": 2.02185E-07 },
  { "nodo": 57, "carga_MW": 0.071, "potencia_deslastrada_MW": 0.071, "costo_dolar_por_MW": 7.099999994, "potencia_atendida_MW": 6.34016E-11, "_atendido": 8.9298E-08 },
  { "nodo": 16, "carga_MW": 0.07, "potencia_deslastrada_MW": 0.07, "costo_dolar_por_MW": 14.00000007, "potencia_atendida_MW": -3.58719E-10, "_atendido": -5.12456E-07 },
  { "nodo": 17, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.003999999, "costo_dolar_por_MW": 0.799999835, "potencia_atendida_MW": 8.24816E-10, "_atendido": 2.06204E-05 },
  { "nodo": 18, "carga_MW": 0.049, "potencia_deslastrada_MW": 0.049, "costo_dolar_por_MW": 4.899999987, "potencia_atendida_MW": 1.31112E-10, "_atendido": 2.67576E-07 },
  { "nodo": 19, "carga_MW": 0.057, "potencia_deslastrada_MW": 0.057000001, "costo_dolar_por_MW": 11.40000011, "potencia_atendida_MW": -5.26917E-10, "_atendido": -9.24415E-07 },
  { "nodo": 33, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.003999999, "costo_dolar_por_MW": 0.399999944, "potencia_atendida_MW": 5.56943E-10, "_atendido": 1.39236E-05 },
  { "nodo": 34, "carga_MW": 0.019, "potencia_deslastrada_MW": 0.019, "costo_dolar_por_MW": 1.89999998, "potencia_atendida_MW": 1.95538E-10, "_atendido": 1.02915E-06 },
  { "nodo": 35, "carga_MW": 0.031, "potencia_deslastrada_MW": 0.031, "costo_dolar_por_MW": 9.300000128, "potencia_atendida_MW": -4.25461E-10, "_atendido": -1.37245E-06 },
  { "nodo": 36, "carga_MW": 0.04, "potencia_deslastrada_MW": 0.04, "costo_dolar_por_MW": 4.00000001, "potencia_atendida_MW": -1.03434E-10, "_atendido": -2.58584E-07 },
  { "nodo": 37, "carga_MW": 0.011, "potencia_deslastrada_MW": 0.011, "costo_dolar_por_MW": 2.199999918, "potencia_atendida_MW": 4.11317E-10, "_atendido": 3.73924E-06 },
  { "nodo": 38, "carga_MW": 0.217, "potencia_deslastrada_MW": 0.217, "costo_dolar_por_MW": 65.10000011, "potencia_atendida_MW": -3.53858E-10, "_atendido": -1.63068E-07 },
  { "nodo": 39, "carga_MW": 0.037, "potencia_deslastrada_MW": 0.037, "costo_dolar_por_MW": 11.10000004, "potencia_atendida_MW": -1.32839E-10, "_atendido": -3.59025E-07 },
  { "nodo": 40, "carga_MW": 0.114, "potencia_deslastrada_MW": 0.114, "costo_dolar_por_MW": 34.19999995, "potencia_atendida_MW": 1.70715E-10, "_atendido": 1.4975E-07 },
  { "nodo": 59, "carga_MW": 0.234, "potencia_deslastrada_MW": 6.33719E-10, "costo_dolar_por_MW": 1.90116E-07, "potencia_atendida_MW": 0.233999999, "_atendido": 99.99999973 },
  { "nodo": 60, "carga_MW": 0.227, "potencia_deslastrada_MW": 5.7145E-09, "costo_dolar_por_MW": 5.7145E-07, "potencia_atendida_MW": 0.226999994, "_atendido": 99.99999748 },
  { "nodo": 61, "carga_MW": 0.225, "potencia_deslastrada_MW": 5.72166E-09, "costo_dolar_por_MW": 5.72166E-07, "potencia_atendida_MW": 0.224999994, "_atendido": 99.99999746 },
  { "nodo": 62, "carga_MW": 0.192, "potencia_deslastrada_MW": 5.72496E-09, "costo_dolar_por_MW": 5.72496E-07, "potencia_atendida_MW": 0.191999994, "_atendido": 99.99999702 },
  { "nodo": 63, "carga_MW": 0.118, "potencia_deslastrada_MW": 1.04987E-06, "costo_dolar_por_MW": 0.000314962, "potencia_atendida_MW": 0.11799895, "_atendido": 99.99911028 },
  { "nodo": 64, "carga_MW": 0.418, "potencia_deslastrada_MW": 1.88955E-06, "costo_dolar_por_MW": 0.00037791, "potencia_atendida_MW": 0.41799811, "_atendido": 99.99954796 },
  { "nodo": 65, "carga_MW": 0.234, "potencia_deslastrada_MW": 1.89056E-06, "costo_dolar_por_MW": 0.000378111, "potencia_atendida_MW": 0.233998109, "_atendido": 99.99919207 },
  { "nodo": 66, "carga_MW": 0.221, "potencia_deslastrada_MW": 1.0497E-06, "costo_dolar_por_MW": 0.00031491, "potencia_atendida_MW": 0.22099895, "_atendido": 99.99952502 },
  { "nodo": 24, "carga_MW": 0.21, "potencia_deslastrada_MW": 0.210000002, "costo_dolar_por_MW": 63.00000066, "potencia_atendida_MW": -2.21664E-09, "_atendido": -1.05554E-06 },
  { "nodo": 25, "carga_MW": 0.136, "potencia_deslastrada_MW": 0.135999998, "costo_dolar_por_MW": 13.59999983, "potencia_atendida_MW": 1.74252E-09, "_atendido": 1.28126E-06 },
  { "nodo": 26, "carga_MW": 0.189, "potencia_deslastrada_MW": 0.188999999, "costo_dolar_por_MW": 18.89999988, "potencia_atendida_MW": 1.16953E-09, "_atendido": 6.18798E-07 },
  { "nodo": 41, "carga_MW": 0.012, "potencia_deslastrada_MW": 0.012000003, "costo_dolar_por_MW": 2.400000658, "potencia_atendida_MW": -3.28876E-09, "_atendido": -2.74064E-05 },
  { "nodo": 42, "carga_MW": 0.055, "potencia_deslastrada_MW": 0.054999998, "costo_dolar_por_MW": 5.499999757, "potencia_atendida_MW": 2.42826E-09, "_atendido": 4.41502E-06 },
  { "nodo": 43, "carga_MW": 0.072, "potencia_deslastrada_MW": 0.071999998, "costo_dolar_por_MW": 14.39999958, "potencia_atendida_MW": 2.08767E-09, "_atendido": 2.89954E-06 },
  { "nodo": 44, "carga_MW": 0.04, "potencia_deslastrada_MW": 0.04, "costo_dolar_por_MW": 3.999999971, "potencia_atendida_MW": 2.93512E-10, "_atendido": 7.33779E-07 },
  { "nodo": 45, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.003999999, "costo_dolar_por_MW": 0.399999901, "potencia_atendida_MW": 9.9379E-10, "_atendido": 2.48447E-05 },
  { "nodo": 46, "carga_MW": 0.041, "potencia_deslastrada_MW": 0.041000001, "costo_dolar_por_MW": 12.30000037, "potencia_atendida_MW": -1.22539E-09, "_atendido": -2.98875E-06 },
  { "nodo": 20, "carga_MW": 0.118, "potencia_deslastrada_MW": 0.118000001, "costo_dolar_por_MW": 11.80000013, "potencia_atendida_MW": -1.32992E-09, "_atendido": -1.12705E-06 },
  { "nodo": 21, "carga_MW": 0.019, "potencia_deslastrada_MW": 0.018999998, "costo_dolar_por_MW": 1.899999803, "potencia_atendida_MW": 1.96928E-09, "_atendido": 1.03646E-05 },
  { "nodo": 22, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.014000001, "costo_dolar_por_MW": 4.200000166, "potencia_atendida_MW": -5.51685E-10, "_atendido": -3.94061E-06 },
  { "nodo": 23, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.007999999, "costo_dolar_por_MW": 0.799999944, "potencia_atendida_MW": 5.61249E-10, "_atendido": 7.01562E-06 },
  { "nodo": 69, "carga_MW": 0.113, "potencia_deslastrada_MW": 0.113000001, "costo_dolar_por_MW": 33.90000023, "potencia_atendida_MW": -7.70359E-10, "_atendido": -6.81734E-07 },
  { "nodo": 70, "carga_MW": 0.096, "potencia_deslastrada_MW": 0.095999999, "costo_dolar_por_MW": 19.19999983, "potencia_atendida_MW": 8.70064E-10, "_atendido": 9.06316E-07 },
  { "nodo": 47, "carga_MW": 0.042, "potencia_deslastrada_MW": 0.042, "costo_dolar_por_MW": 12.6, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 67, "carga_MW": 0.198, "potencia_deslastrada_MW": 0.198, "costo_dolar_por_MW": 59.4, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 68, "carga_MW": 0.249, "potencia_deslastrada_MW": 0.249, "costo_dolar_por_MW": 49.8, "potencia_atendida_MW": 0, "_atendido": 0 }
];


let escenario4ConGdYRd = [
  { "nodo": 2, "carga_MW": 0.193, "potencia_deslastrada_MW": 3.71748E-06, "costo_dolar_por_MW": 0.000371748, "potencia_atendida_MW": 0.192996283, "_atendido": 99.99807384 },
  { "nodo": 3, "carga_MW": 0.001, "potencia_deslastrada_MW": 7.42058E-07, "costo_dolar_por_MW": 0.000148412, "potencia_atendida_MW": 0.000999258, "_atendido": 99.92579423 },
  { "nodo": 4, "carga_MW": 0.003, "potencia_deslastrada_MW": 7.38864E-07, "costo_dolar_por_MW": 0.000147773, "potencia_atendida_MW": 0.002999261, "_atendido": 99.9753712 },
  { "nodo": 5, "carga_MW": 0.108, "potencia_deslastrada_MW": 4.08892E-07, "costo_dolar_por_MW": 0.000122668, "potencia_atendida_MW": 0.107999591, "_atendido": 99.9996214 },
  { "nodo": 6, "carga_MW": 0.005, "potencia_deslastrada_MW": 3.75733E-06, "costo_dolar_por_MW": 0.000375733, "potencia_atendida_MW": 0.004996243, "_atendido": 99.92485348 },
  { "nodo": 7, "carga_MW": 0.018, "potencia_deslastrada_MW": 3.73999E-06, "costo_dolar_por_MW": 0.000373999, "potencia_atendida_MW": 0.01799626, "_atendido": 99.97922229 },
  { "nodo": 8, "carga_MW": 0.016, "potencia_deslastrada_MW": 7.37572E-07, "costo_dolar_por_MW": 0.000147514, "potencia_atendida_MW": 0.015999262, "_atendido": 99.99539017 },
  { "nodo": 9, "carga_MW": 0.076, "potencia_deslastrada_MW": 3.73603E-06, "costo_dolar_por_MW": 0.000373603, "potencia_atendida_MW": 0.075996264, "_atendido": 99.99508417 },
  { "nodo": 10, "carga_MW": 0.052, "potencia_deslastrada_MW": 4.09009E-07, "costo_dolar_por_MW": 0.000122703, "potencia_atendida_MW": 0.051999591, "_atendido": 99.99921344 },
  { "nodo": 11, "carga_MW": 0.046, "potencia_deslastrada_MW": 7.37394E-07, "costo_dolar_por_MW": 0.000147479, "potencia_atendida_MW": 0.045999263, "_atendido": 99.99839697 },
  { "nodo": 12, "carga_MW": 0.123, "potencia_deslastrada_MW": 3.73776E-06, "costo_dolar_por_MW": 0.000373776, "potencia_atendida_MW": 0.122996262, "_atendido": 99.99696117 },
  { "nodo": 13, "carga_MW": 0.046, "potencia_deslastrada_MW": 3.74062E-06, "costo_dolar_por_MW": 0.000374062, "potencia_atendida_MW": 0.045996259, "_atendido": 99.99186821 },
  { "nodo": 14, "carga_MW": 0.007, "potencia_deslastrada_MW": 7.38304E-07, "costo_dolar_por_MW": 0.000147661, "potencia_atendida_MW": 0.006999262, "_atendido": 99.9894528 },
  { "nodo": 15, "carga_MW": 0.07, "potencia_deslastrada_MW": 3.73979E-06, "costo_dolar_por_MW": 0.000373979, "potencia_atendida_MW": 0.06999626, "_atendido": 99.99465744 },
  { "nodo": 58, "carga_MW": 0.394, "potencia_deslastrada_MW": 7.35037E-07, "costo_dolar_por_MW": 0.000147007, "potencia_atendida_MW": 0.393999265, "_atendido": 99.99981344 },
  { "nodo": 71, "carga_MW": 0.091, "potencia_deslastrada_MW": 7.37611E-07, "costo_dolar_por_MW": 0.000147522, "potencia_atendida_MW": 0.090999262, "_atendido": 99.99918944 },
  { "nodo": 72, "carga_MW": 0.116, "potencia_deslastrada_MW": 4.0924E-07, "costo_dolar_por_MW": 0.000122772, "potencia_atendida_MW": 0.115999591, "_atendido": 99.99964721 },
  { "nodo": 73, "carga_MW": 0.168, "potencia_deslastrada_MW": 3.76282E-06, "costo_dolar_por_MW": 0.000376282, "potencia_atendida_MW": 0.167996237, "_atendido": 99.99776023 },
  { "nodo": 74, "carga_MW": 0.116, "potencia_deslastrada_MW": 7.38379E-07, "costo_dolar_por_MW": 0.000147676, "potencia_atendida_MW": 0.115999262, "_atendido": 99.99936347 },
  { "nodo": 27, "carga_MW": 0.016, "potencia_deslastrada_MW": 0.012204518, "costo_dolar_por_MW": 2.440903604, "potencia_atendida_MW": 0.003795482, "_atendido": 23.72176236 },
  { "nodo": 28, "carga_MW": 0.074, "potencia_deslastrada_MW": 2.58606E-07, "costo_dolar_por_MW": 7.75818E-05, "potencia_atendida_MW": 0.073999741, "_atendido": 99.99965053 },
  { "nodo": 29, "carga_MW": 0.117, "potencia_deslastrada_MW": 0.11699974, "costo_dolar_por_MW": 11.69997403, "potencia_atendida_MW": 2.59725E-07, "_atendido": 0.000221987 },
  { "nodo": 30, "carga_MW": 0.006, "potencia_deslastrada_MW": 2.5937E-07, "costo_dolar_por_MW": 7.78109E-05, "potencia_atendida_MW": 0.005999741, "_atendido": 99.99567717 },
  { "nodo": 31, "carga_MW": 0.125, "potencia_deslastrada_MW": 0.115534913, "costo_dolar_por_MW": 23.10698255, "potencia_atendida_MW": 0.009465087, "_atendido": 7.572069785 },
  { "nodo": 32, "carga_MW": 0.017, "potencia_deslastrada_MW": 0.012262515, "costo_dolar_por_MW": 2.452503089, "potencia_atendida_MW": 0.004737485, "_atendido": 27.8675562 },
  { "nodo": 48, "carga_MW": 0.049, "potencia_deslastrada_MW": 0.048999372, "costo_dolar_por_MW": 4.899937163, "potencia_atendida_MW": 6.2837E-07, "_atendido": 0.001282389 },
  { "nodo": 49, "carga_MW": 0.043, "potencia_deslastrada_MW": 0.026816362, "costo_dolar_por_MW": 8.044908665, "potencia_atendida_MW": 0.016183638, "_atendido": 37.63636693 },
  { "nodo": 50, "carga_MW": 0.061, "potencia_deslastrada_MW": 0.036188061, "costo_dolar_por_MW": 10.85641844, "potencia_atendida_MW": 0.024811939, "_atendido": 40.67530909 },
  { "nodo": 51, "carga_MW": 0.046, "potencia_deslastrada_MW": 0.045998741, "costo_dolar_por_MW": 9.199748217, "potencia_atendida_MW": 1.25891E-06, "_atendido": 0.00273677 },
  { "nodo": 52, "carga_MW": 0.01, "potencia_deslastrada_MW": 0.009999369, "costo_dolar_por_MW": 0.999936911, "potencia_atendida_MW": 6.30891E-07, "_atendido": 0.006308906 },
  { "nodo": 53, "carga_MW": 0.009, "potencia_deslastrada_MW": 0.003987962, "costo_dolar_por_MW": 0.797592426, "potencia_atendida_MW": 0.005012038, "_atendido": 55.68930964 },
  { "nodo": 54, "carga_MW": 0.065, "potencia_deslastrada_MW": 0.005067457, "costo_dolar_por_MW": 1.013491485, "potencia_atendida_MW": 0.059932543, "_atendido": 92.20391166 },
  { "nodo": 55, "carga_MW": 0.045, "potencia_deslastrada_MW": 0.006700453, "costo_dolar_por_MW": 1.340090615, "potencia_atendida_MW": 0.038299547, "_atendido": 85.11010428 },
  { "nodo": 56, "carga_MW": 0.076, "potencia_deslastrada_MW": 0.07599944, "costo_dolar_por_MW": 7.599943953, "potencia_atendida_MW": 5.60472E-07, "_atendido": 0.000737463 },
  { "nodo": 57, "carga_MW": 0.071, "potencia_deslastrada_MW": 0.070999439, "costo_dolar_por_MW": 7.099943948, "potencia_atendida_MW": 5.60521E-07, "_atendido": 0.000789466 },
  { "nodo": 16, "carga_MW": 0.07, "potencia_deslastrada_MW": 0.040643731, "costo_dolar_por_MW": 8.128746155, "potencia_atendida_MW": 0.029356269, "_atendido": 41.93752747 },
  { "nodo": 17, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.002002984, "costo_dolar_por_MW": 0.400596709, "potencia_atendida_MW": 0.001997016, "_atendido": 49.92541134 },
  { "nodo": 18, "carga_MW": 0.049, "potencia_deslastrada_MW": 0.048999695, "costo_dolar_por_MW": 4.899969501, "potencia_atendida_MW": 3.04987E-07, "_atendido": 0.000622422 },
  { "nodo": 19, "carga_MW": 0.057, "potencia_deslastrada_MW": 0.031104574, "costo_dolar_por_MW": 6.220914762, "potencia_atendida_MW": 0.025895426, "_atendido": 45.43057226 },
  { "nodo": 33, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.003978588, "costo_dolar_por_MW": 0.397858758, "potencia_atendida_MW": 2.14124E-05, "_atendido": 0.535310427 },
  { "nodo": 34, "carga_MW": 0.019, "potencia_deslastrada_MW": 0.018967402, "costo_dolar_por_MW": 1.896740182, "potencia_atendida_MW": 3.25982E-05, "_atendido": 0.171569364 },
  { "nodo": 35, "carga_MW": 0.031, "potencia_deslastrada_MW": 8.0579E-08, "costo_dolar_por_MW": 2.41737E-05, "potencia_atendida_MW": 0.030999919, "_atendido": 99.99974007 },
  { "nodo": 36, "carga_MW": 0.04, "potencia_deslastrada_MW": 0.039561062, "costo_dolar_por_MW": 3.956106177, "potencia_atendida_MW": 0.000438938, "_atendido": 1.097345582 },
  { "nodo": 37, "carga_MW": 0.011, "potencia_deslastrada_MW": 0.010999758, "costo_dolar_por_MW": 2.199951632, "potencia_atendida_MW": 2.41841E-07, "_atendido": 0.002198554 },
  { "nodo": 38, "carga_MW": 0.217, "potencia_deslastrada_MW": 0.215215143, "costo_dolar_por_MW": 64.56454295, "potencia_atendida_MW": 0.001784857, "_atendido": 0.822514676 },
  { "nodo": 39, "carga_MW": 0.037, "potencia_deslastrada_MW": 0.036296373, "costo_dolar_por_MW": 10.88891177, "potencia_atendida_MW": 0.000703627, "_atendido": 1.901695783 },
  { "nodo": 40, "carga_MW": 0.114, "potencia_deslastrada_MW": 0.113738822, "costo_dolar_por_MW": 34.12164649, "potencia_atendida_MW": 0.000261178, "_atendido": 0.229103831 },
  { "nodo": 59, "carga_MW": 0.234, "potencia_deslastrada_MW": 7.07351E-09, "costo_dolar_por_MW": 2.12205E-06, "potencia_atendida_MW": 0.233999993, "_atendido": 99.99999698 },
  { "nodo": 60, "carga_MW": 0.227, "potencia_deslastrada_MW": 6.37174E-08, "costo_dolar_por_MW": 6.37174E-06, "potencia_atendida_MW": 0.226999936, "_atendido": 99.99997193 },
  { "nodo": 61, "carga_MW": 0.225, "potencia_deslastrada_MW": 6.37525E-08, "costo_dolar_por_MW": 6.37525E-06, "potencia_atendida_MW": 0.224999936, "_atendido": 99.99997167 },
  { "nodo": 62, "carga_MW": 0.192, "potencia_deslastrada_MW": 6.37689E-08, "costo_dolar_por_MW": 6.37689E-06, "potencia_atendida_MW": 0.191999936, "_atendido": 99.99996679 },
  { "nodo": 63, "carga_MW": 0.118, "potencia_deslastrada_MW": 4.89684E-09, "costo_dolar_por_MW": 1.46905E-06, "potencia_atendida_MW": 0.117999995, "_atendido": 99.99999585 },
  { "nodo": 64, "carga_MW": 0.418, "potencia_deslastrada_MW": 8.81398E-09, "costo_dolar_por_MW": 1.7628E-06, "potencia_atendida_MW": 0.417999991, "_atendido": 99.99999789 },
  { "nodo": 65, "carga_MW": 0.234, "potencia_deslastrada_MW": 8.81594E-09, "costo_dolar_por_MW": 1.76319E-06, "potencia_atendida_MW": 0.233999991, "_atendido": 99.99999623 },
  { "nodo": 66, "carga_MW": 0.221, "potencia_deslastrada_MW": 4.89759E-09, "costo_dolar_por_MW": 1.46928E-06, "potencia_atendida_MW": 0.220999995, "_atendido": 99.99999778 },
  { "nodo": 24, "carga_MW": 0.21, "potencia_deslastrada_MW": 0.047516198, "costo_dolar_por_MW": 14.25485928, "potencia_atendida_MW": 0.162483802, "_atendido": 77.37323923 },
  { "nodo": 25, "carga_MW": 0.136, "potencia_deslastrada_MW": 0.135998579, "costo_dolar_por_MW": 13.59985792, "potencia_atendida_MW": 1.42084E-06, "_atendido": 0.001044736 },
  { "nodo": 26, "carga_MW": 0.189, "potencia_deslastrada_MW": 0.188998579, "costo_dolar_por_MW": 18.89985793, "potencia_atendida_MW": 1.42069E-06, "_atendido": 0.000751686 },
  { "nodo": 41, "carga_MW": 0.012, "potencia_deslastrada_MW": 0.006604334, "costo_dolar_por_MW": 1.320866882, "potencia_atendida_MW": 0.005395666, "_atendido": 44.9638799 },
  { "nodo": 42, "carga_MW": 0.055, "potencia_deslastrada_MW": 0.0549992, "costo_dolar_por_MW": 5.499920049, "potencia_atendida_MW": 7.99515E-07, "_atendido": 0.001453663 },
  { "nodo": 43, "carga_MW": 0.072, "potencia_deslastrada_MW": 0.028898375, "costo_dolar_por_MW": 5.779674971, "potencia_atendida_MW": 0.043101625, "_atendido": 59.86336826 },
  { "nodo": 44, "carga_MW": 0.04, "potencia_deslastrada_MW": 0.039999725, "costo_dolar_por_MW": 3.999972474, "potencia_atendida_MW": 2.75265E-07, "_atendido": 0.000688162 },
  { "nodo": 45, "carga_MW": 0.004, "potencia_deslastrada_MW": 0.003999723, "costo_dolar_por_MW": 0.39997234, "potencia_atendida_MW": 2.766E-07, "_atendido": 0.006915001 },
  { "nodo": 46, "carga_MW": 0.041, "potencia_deslastrada_MW": 0.019001376, "costo_dolar_por_MW": 5.70041267, "potencia_atendida_MW": 0.021998624, "_atendido": 53.65518155 },
  { "nodo": 20, "carga_MW": 0.118, "potencia_deslastrada_MW": 0.058585529, "costo_dolar_por_MW": 5.858552904, "potencia_atendida_MW": 0.059414471, "_atendido": 50.35124658 },
  { "nodo": 21, "carga_MW": 0.019, "potencia_deslastrada_MW": 0.009922734, "costo_dolar_por_MW": 0.992273421, "potencia_atendida_MW": 0.009077266, "_atendido": 47.77508309 },
  { "nodo": 22, "carga_MW": 0.014, "potencia_deslastrada_MW": 0.010003377, "costo_dolar_por_MW": 3.001013114, "potencia_atendida_MW": 0.003996623, "_atendido": 28.54730681 },
  { "nodo": 23, "carga_MW": 0.008, "potencia_deslastrada_MW": 0.00799812, "costo_dolar_por_MW": 0.799812049, "potencia_atendida_MW": 1.87951E-06, "_atendido": 0.023493904 },
  { "nodo": 69, "carga_MW": 0.113, "potencia_deslastrada_MW": 0.089003271, "costo_dolar_por_MW": 26.70098137, "potencia_atendida_MW": 0.023996729, "_atendido": 21.23604316 },
  { "nodo": 70, "carga_MW": 0.096, "potencia_deslastrada_MW": 0.095997907, "costo_dolar_por_MW": 19.19958143, "potencia_atendida_MW": 2.09283E-06, "_atendido": 0.002180031 },
  { "nodo": 47, "carga_MW": 0.042, "potencia_deslastrada_MW": 0.042, "costo_dolar_por_MW": 12.6, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 67, "carga_MW": 0.198, "potencia_deslastrada_MW": 0.198, "costo_dolar_por_MW": 59.4, "potencia_atendida_MW": 0, "_atendido": 0 },
  { "nodo": 68, "carga_MW": 0.249, "potencia_deslastrada_MW": 0.18675, "costo_dolar_por_MW": 37.35, "potencia_atendida_MW": 0.06225, "_atendido": 25 }

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
