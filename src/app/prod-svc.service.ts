import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdSvc {

  TtlVar = "Dream Products"

  PrdAryVar = [
    {
      "TtlVak" : "BENQ G1 Projector",
      "DtlVak" : "Portable LED projector",
      "AmtVak" : 25000
    },
    {
      "TtlVak" : "DJI Camera",
      "DtlVak" : "Handheld 3-Axis Gimbal Stabilizer with 4K Camera",
      "AmtVak" : 9999
    },
    {
      "TtlVak" : "Sneakers",
      "DtlVak" : "Comfortable for casual wears",
      "AmtVak" : 2500
    },
    {
      "TtlVak" : "Mechanical Keychron Keyboard",
      "DtlVak" : "This makes wonderful sound",
      "AmtVak" : 10000
    },
    {
      "TtlVak" : "Noice Smart Watch",
      "DtlVak" : "Budget freindly",
      "AmtVak" : 3999
    },
  ]

  constructor() { }

  getItmByPath(PthPsgVar:string){
    return this.PrdAryVar.find(PrdItmVar=>
      PrdItmVar.TtlVak.toLowerCase().split(" ").join("-")==PthPsgVar
    )
  }
}
