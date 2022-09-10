import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProdSvc } from '../prod-svc.service';

@Component({
  selector: 'app-prod-detail-kom',
  templateUrl: './prod-detail-kom.component.html',
  styleUrls: ['./prod-detail-kom.component.scss']
})
export class ProdDetailKomComponent implements OnInit
{

  PrdDtlVar: any

  constructor(public ProdSvcVar: ProdSvc, public UrlVap: ActivatedRoute)
  {
    var GetLnkVar = this.UrlVap.snapshot.params.name
    this.PrdDtlVar = this.ProdSvcVar.getItmByPath(GetLnkVar)
  }

  ngOnInit(): void
  {
  }

}
