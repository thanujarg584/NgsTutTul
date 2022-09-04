import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { faHeart as fasheart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farheart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'cart-kom',
  templateUrl: './cart-kom.component.html',
  styleUrls: ['./cart-kom.component.scss']
})
export class CartKomComponent implements OnInit
{

  @Input('title') 'TtlVar' = ""
  @Input('detail') 'DtlVar' = ""
  @Input('cost') MrpVar = 0
  @Output() IncQtyVar = new EventEmitter()
  @Output() IncUntCstVar = new EventEmitter()
  @Output() IncCstVar = new EventEmitter()

  FasIknVar = farheart

  QtyVar = 1

  ChjQtyFnc(ChgValVar: number)
  {
    if ((ChgValVar == 1 && this.QtyVar < 10) || ChgValVar == -1 && this.QtyVar > 1)
      this.QtyVar += ChgValVar
      this.IncQtyVar.emit(ChgValVar)
      this.IncCstVar
    // this.IncUntCstVar.emit(1)
    // this.IncCstVar.emit(1)
  }

  IknTglFnc()
  {
    if (this.FasIknVar == fasheart)
      this.FasIknVar = farheart
    else
      this.FasIknVar = fasheart
  }

  // LikeVar = true

  // ClickFnc()
  // {
  //   if(this.LikeVar)
  //     this.LikeVar=false
  //   else
  //     this.LikeVar=true
  // }

  // iconClick = false;

  // iconClsName = 'fa-regular fa-heart';

  // iconClicked() {

  //   if (!this.iconClick) {

  //     this.iconClick = true;

  //     this.iconClsName = 'fa-solid fa-heart';

  //   } else {

  //     this.iconClick = false;

  //     this.iconClsName = 'fa-regular fa-heart';

  //   }

  // }

  constructor() { }

  ngOnInit(): void
  {
  }

}
