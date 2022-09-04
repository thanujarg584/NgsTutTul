import { Component, OnInit } from '@angular/core';
import {ProdSvc} from '../prod-svc.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prod-kom',
  templateUrl: './prod-kom.component.html',
  styleUrls: ['./prod-kom.component.scss']
})
export class ProdKomComponent implements OnInit {

  constructor(public ProdSvcVar : ProdSvc,public PopMdlVap:NgbModal) { }

  ngOnInit(): void {
  }

  getPathFromTtlFnc(TtlPsgVar:string){
    return './'+TtlPsgVar.toLowerCase().replace(/ /g,'-')
  }
}
