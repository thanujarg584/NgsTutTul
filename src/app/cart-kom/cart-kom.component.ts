import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-kom',
  templateUrl: './cart-kom.component.html',
  styleUrls: ['./cart-kom.component.scss']
})
export class CartKomComponent implements OnInit {

  CartAyVar = [
    {
      TtlVak: 'Chicken Pizza',
      DtlVak: 'Chicken Cheese Double Layer Pan',
      CstVak: 300
    },
    {
      TtlVak: 'Chicken Burger',
      DtlVak: 'Chicken Double Tikki Double Cheese Layer',
      CstVak: 150
    },
    {
      TtlVak: 'Turkish Roll',
      DtlVak: 'Special Chicken Shawarma',
      CstVak: 90
    }

  ]

  TotQtyVar = 0
  TotCost = 0
  TotUC = 0

  FoodIptVar=''
  DtIptVar=''
  CstIptVar=0

  EdtIdxVar=-1

  UpdValFnc(){
    this.TotUC = this.CartAyVar.reduce((SumVar,ItmVar) => SumVar+ ItmVar.CstVak,0)
    this.TotQtyVar = this.CartAyVar.length
    this.TotCost = this.CartAyVar.reduce((SumVar,ItmVar) => SumVar+ ItmVar.CstVak,0)
  }

  ngOnInit()
  {
    this.UpdValFnc()
  }

  UpdTotQtyVafFnc(EventVar: number)
  {
    this.TotQtyVar += EventVar
  }

  EdtTotVafFnc(EventVar: number)
  {
    this.TotCost += EventVar
  }

  UpdTotVafFnc(EventVar:number)
  {
    this.TotCost += EventVar
  }

  SubFnc(){
    this.CartAyVar.push({
      TtlVak:this.FoodIptVar ,
      DtlVak: this.DtIptVar,
      CstVak:this.CstIptVar
    })
    this.FoodIptVar = ''
    this.DtIptVar = ''
    this.CstIptVar = 0

    this.UpdValFnc()
  }

  DelVafFnc(IdxPsgVar:number){
    this.CartAyVar.splice(IdxPsgVar,1)

    this.UpdValFnc()
  }

  UpdVafFnc(IdxPsgVar:number){
    this.FoodIptVar = this.CartAyVar[IdxPsgVar].TtlVak
    this.DtIptVar = this.CartAyVar[IdxPsgVar].DtlVak
    this.CstIptVar = this.CartAyVar[IdxPsgVar].CstVak

    this.EdtIdxVar = IdxPsgVar
    
  
  }

  UpdFnc(){
    this.CartAyVar[this.EdtIdxVar].TtlVak=this.FoodIptVar
    this.CartAyVar[this.EdtIdxVar].DtlVak=this.DtIptVar
    this.CartAyVar[this.EdtIdxVar].CstVak=this.CstIptVar

    this.EdtIdxVar=-1
    this.UpdValFnc()
  }


}
