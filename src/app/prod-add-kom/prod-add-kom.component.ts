import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProdSvc } from '../prod-svc.service';

@Component({
  selector: 'app-prod-add-kom',
  templateUrl: './prod-add-kom.component.html',
  styleUrls: ['./prod-add-kom.component.scss']
})
export class ProdAddKomComponent implements OnInit
{
  @Input() PopMdlVav: any
  @Input('EdtIdxVak') EdtIdxvar = -1

  AddPrdVar = {
    "UidVak": 0,
    "TtlVak": "",
    "DtlVak": "",
    "CstVak": 0
  }

  AssignPrdVar={
    "UidVak": 0,
    "TtlVak": "",
    "DtlVak": "",
    "CstVak": 0
  }

  constructor(public ProdSvcVar: ProdSvc, public PopMdlVap: NgbModal) { }

  ngOnInit(): void
  {
    if (this.EdtIdxvar != -1)
    {
      this.AssignPrdVar.TtlVak=this.ProdSvcVar.PrdAryVar[this.EdtIdxvar].TtlVak
      this.AssignPrdVar.DtlVak=this.ProdSvcVar.PrdAryVar[this.EdtIdxvar].DtlVak
      this.AssignPrdVar.CstVak=this.ProdSvcVar.PrdAryVar[this.EdtIdxvar].CstVak
    }
  }

  AssignItmFnc()
  {
    this.AddPrdVar = this.AssignPrdVar
  }

  AddItmFnc()
  {
    this.AssignItmFnc()
    this.ProdSvcVar.AddProdFnc(this.AddPrdVar)
    this.PopMdlVav.close()
    this.MtyPrdFromFnc()
  }

  UpdPrdFnc()
  {
    this.AssignItmFnc()
    this.ProdSvcVar.UpdPrdFnc(this.AddPrdVar, this.EdtIdxvar)
    this.PopMdlVav.close()
    this.MtyPrdFromFnc()
  }

  SearchBtnFnc(SrchIptVar: any)
  {
    this.ProdSvcVar.PrdAryVar.filter(ItmVar =>
    {
      ItmVar.TtlVak.includes(SrchIptVar)
    })
    console.log(this.ProdSvcVar.PrdAryVar)
  }

  MtyPrdFromFnc()
  {
    this.AddPrdVar = {
      "UidVak": 0,
      "TtlVak": "",
      "DtlVak": "",
      "CstVak": 0
    }
  }

}
