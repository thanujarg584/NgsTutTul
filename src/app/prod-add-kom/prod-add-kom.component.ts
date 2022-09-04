import { Component, Input, OnInit } from '@angular/core';
import { ProdSvc } from '../prod-svc.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prod-add-kom',
  templateUrl: './prod-add-kom.component.html',
  styleUrls: ['./prod-add-kom.component.scss']
})
export class ProdAddKomComponent implements OnInit
{
  @Input() PopMdlVav: any

  AddPrdVar = {
    "TtlVak": "",
    "DtlVak": "",
    "AmtVak": 0
  }

  AddItmFnc()
  {
    this.ProdSvcVar.PrdAryVar.push(this.AddPrdVar)
    this.PopMdlVav.close()
  }

  constructor(public ProdSvcVar: ProdSvc, public PopMdlVap: NgbModal) { }

  ngOnInit(): void
  {
  }

}
