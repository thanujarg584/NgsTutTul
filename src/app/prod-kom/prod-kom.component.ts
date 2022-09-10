import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProdSvc } from '../prod-svc.service'

@Component({
  selector: 'app-prod-kom',
  templateUrl: './prod-kom.component.html',
  styleUrls: ['./prod-kom.component.scss']
})
export class ProdKomComponent implements OnInit
{

  constructor(public ProdSvcVar: ProdSvc, public PopMdlVap: NgbModal) { }

  ngOnInit(): void
  {
  }

  EdtIdxVar = -1

  SrchIptVar = ''

  getPathFromTtlFnc(TtlPsgVar: string)
  {
    return './' + TtlPsgVar.toLowerCase().replace(/ /g, '-')
  }

  DelPrdFnc(UidVar: any)
  {
    this.ProdSvcVar.DelFnc(UidVar)
  }

  AddBtnFnc(PopDivNgsUid: any)
  {
    this.PopMdlVap.open(PopDivNgsUid)
    this.EdtIdxVar = -1
  }

  UpdBtnFnc(PopUidPsgVar: TemplateRef<any>, IdxPsgVar: number)
  {
    console.log(IdxPsgVar)
    this.EdtIdxVar = IdxPsgVar
    this.PopMdlVap.open(PopUidPsgVar)
  }

  SearchBtnFnc(SrchVar: string)
  {
    // console.log("Im inside SearchBtnFnc " + SrchVar)
    this.ProdSvcVar.SearchPrdFnc(SrchVar)
  }
}
