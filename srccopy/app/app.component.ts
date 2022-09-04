import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'main-code',
  templateUrl: './app.component.html',
  // template: '<h1>This is Html code</h1>',
  styles: ['.NamCls{color:red}'],
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  @ViewChild('AudNgsUid') AudNgsVar:any
  NamIptVar = ""
  // AgeVar = 19
  // BulVar = true
  // ThemeVar = "Blue"
  // FgdClrVar = "Green"
  // BgdClrVar = "Cyan"
  // StsVar = "Active"
  // NamNgsFnc()
  // {
  //   alert("Hi")
  // }

  // SngAryVar = ['Brand.mp3','Kannada.mp3', 'Patriotic.mp3','Piono.mp3']

  // PlySngVar = this.SngAryVar[0]

  // playSongFnc(IdxPsgVar:number)
  // {
  //   this.PlySngVar = this.SngAryVar[IdxPsgVar]
  //   let AudHtmVar = this.AudNgsVar.nativeElement
  //   AudHtmVar.play()

  // }
  // TtlLykVaf = 0

  // InclykVafFnc(evtVar:number)
  // {
  //   this.TtlLykVaf+=evtVar
  // }

  // DeclykVafFnc(evtVar:number)
  // {
  //   this.TtlLykVaf+=evtVar
  // }

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

  ngOnInit()
  {
    this.TotUC = this.CartAyVar.reduce((SumVar,ItmVar) => SumVar+ ItmVar.CstVak,0)
    this.TotQtyVar = this.CartAyVar.length
    this.TotCost = this.CartAyVar.reduce((SumVar,ItmVar) => SumVar+ ItmVar.CstVak,0)
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


}
