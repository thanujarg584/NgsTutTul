import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as toastr from 'toastr';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdSvc
{

  TtlVar = "Dream Products"

  PrdAryVar = [
    {
      "UidVak": 0,
      "TtlVak": "",
      "DtlVak": "",
      "CstVak": 0
    }
  ]

  // PrdAryVar = [
  //   {
  //     "TtlVak": "BENQ G1 Projector",
  //     "DtlVak": "Portable LED projector",
  //     "AmtVak": 25000
  //   },
  //   {
  //     "TtlVak": "DJI Camera",
  //     "DtlVak": "Handheld 3-Axis Gimbal Stabilizer with 4K Camera",
  //     "AmtVak": 9999
  //   },
  //   {
  //     "TtlVak": "Sneakers",
  //     "DtlVak": "Comfortable for casual wears",
  //     "AmtVak": 2500
  //   },
  //   {
  //     "TtlVak": "Mechanical Keychron Keyboard",
  //     "DtlVak": "This makes wonderful sound",
  //     "AmtVak": 10000
  //   },
  //   {
  //     "TtlVak": "Noice Smart Watch",
  //     "DtlVak": "Budget freindly",
  //     "AmtVak": 3999
  //   },
  // ]

  constructor(public HtpCncMgrVap: HttpClient, public PopMdlVap: NgbModal)
  {
    toastr.options.positionClass = "toast-bottom-right"
    this.getProdFnc()
  }

  getProdFnc()
  {
    this.HtpCncMgrVap.get(`${environment.SvrUrl}product`)
      .subscribe(
        ResRsgVar =>
        {
          console.log(ResRsgVar)
          let ResVar: any = ResRsgVar //converting to any
          this.PrdAryVar = ResVar
        })
  }

  AddProdFnc(NquPrdVar: any)
  {
    this.HtpCncMgrVap.post(`${environment.SvrUrl}product`, NquPrdVar)
      .subscribe(
        ResRsgVar =>
        {
          console.log(ResRsgVar)
          this.PrdAryVar.push(NquPrdVar)
          toastr.success("Added success")
          this.getProdFnc()
        })
  }

  DelFnc(UidVar: any)
  {
    this.HtpCncMgrVap.delete(`${environment.SvrUrl}product/${UidVar}`)
      .subscribe(
        ResRsgVar =>
        {
          console.log(ResRsgVar)
          this.PrdAryVar.filter(ItmVar => ItmVar.UidVak != UidVar)
          this.getProdFnc()
          toastr.error("Delete success")
        })
  }

  UpdPrdFnc(UquPrdVar: any, EdtIdxPsgVar: number)
  {
    var UidVar = this.PrdAryVar[EdtIdxPsgVar].UidVak
    this.HtpCncMgrVap.put(`${environment.SvrUrl}product/${UidVar}`, UquPrdVar)
      .subscribe(
        ResRsgVar =>
        {
          console.log(ResRsgVar)
          this.PrdAryVar[EdtIdxPsgVar] = UquPrdVar
          toastr.success("Update success")
        })   
  }

  // SearchPrdFnc(SrchVar:string){
  //   console.log("Im inside SearchPrdFnc "+SrchVar)
  //   console.log(this.PrdAryVar)
  //   this.HtpCncMgrVap.get(`${environment.SvrUrl}products`)
  //     .subscribe(
  //       ResRsgVar =>
  //       {
  //         console.log("im inside some method")
  //         console.log(this.PrdAryVar)
  //         console.log(ResRsgVar)
  //         let ResVar: any = ResRsgVar //converting to any
  //         console.log(ResVar)
  //         this.PrdAryVar = ResVar
  //         // console.log("Bfore filter")
  //         // this.PrdAryVar=this.PrdAryVar.filter(ItmVar => {
  //         //   console.log(ItmVar.TtlVak)
  //         //   ItmVar.TtlVak === SrchVar})
  //         // console.log(this.PrdAryVar)
  //       })
  //       console.log("after filter")
  // }

  // SearchPrdFnc(SrchVar:string){
  //   console.log("Im inside SearchPrdFnc "+SrchVar)
  //   console.log(this.PrdAryVar)
  //   this.HtpCncMgrVap.get(`${environment.SvrUrl}products/${SrchVar}`)
  //     .subscribe(
  //       ResRsgVar =>
  //       {
  //         console.log("im inside some method")
  //         console.log(this.PrdAryVar)
  //         console.log(ResRsgVar)
  //         let ResVar: any = ResRsgVar //converting to any
  //         console.log(ResVar)
  //         this.PrdAryVar = ResVar
  //         // console.log("Bfore filter")
  //         // this.PrdAryVar=this.PrdAryVar.filter(ItmVar => {
  //         //   console.log(ItmVar.TtlVak)
  //         //   ItmVar.TtlVak === SrchVar})
  //         // console.log(this.PrdAryVar)
  //       })
  //       console.log("after filter")
  // }

  SearchPrdFnc(SrchIptVar: any)
  {
    let SrchResVar = this.PrdAryVar.filter(ItmVar =>
    {
      if (ItmVar.TtlVak.toLowerCase().includes(SrchIptVar.toLowerCase()))
      {
        return ItmVar.TtlVak
      }
      else
      {
        return
      }
    })
    this.PrdAryVar = SrchResVar
  }

  getItmByPath(PthPsgVar: string)
  {
    return this.PrdAryVar.find(PrdItmVar =>
      PrdItmVar.TtlVak.toLowerCase().split(" ").join("-") == PthPsgVar
    )
  }
}
